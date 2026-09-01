/* ============================================================
   MEDCORE — Examen simulado
   ------------------------------------------------------------
   Reutiliza los casos clínicos ya construidos (preguntaMC +
   preguntaEscrita) pero los presenta con el FORMATO real de tus
   exámenes de Medicina Interna I: puntaje por pregunta, cronómetro,
   y nota final sobre 20. La pregunta escrita no se puede calificar
   sola (requiere criterio humano) — al final te muestro la
   respuesta modelo y TÚ marcas si la tuviste correcta, parcial o
   incorrecta, y con eso se calcula tu nota.

   Dos alcances:
   - Por enfermedad individual (iniciarExamenEnfermedad)
   - Por módulo completo, al terminar todas sus enfermedades
     (iniciarExamenModulo) — pensado como el filtro antes de
     pasar al siguiente módulo.
   ============================================================ */

const PUNTOS_MC = 2;       // puntos por pregunta de opción múltiple
const PUNTOS_ESCRITA = 3;  // puntos por pregunta escrita (vale más: exige razonamiento)
const MIN_POR_ITEM = 3;    // minutos de cronómetro por cada caso (MC+escrita cuentan como 1 item)

let examenState = null; // { items, tituloExamen, scopeLabel, respuestas, index, iniciado, finalizado, segundosRestantes, timerId, volverA }

function construirItemsDeCasos(casos){
  return casos.map(c => ({
    vineta: c.vineta,
    imagen: c.imagen,
    mc: c.preguntaMC,
    escrita: c.preguntaEscrita
  }));
}

/* ---------- por enfermedad individual ---------- */
function iniciarExamenEnfermedad(enfermedadId){
  const e = getEnfermedad(enfermedadId);
  const casos = e.casosClinicos || [];
  if(!casos.length){
    alert('Todavía no hay casos clínicos construidos para ' + e.nombre + ', así que no se puede armar un examen de práctica — vuelve pronto.');
    return;
  }
  const items = construirItemsDeCasos(casos);
  prepararExamen(items, e.nombre, 'Examen de práctica', { tipo: 'enfermedad', id: enfermedadId });
  navPush('examen-simulado', 'enfermedad::' + enfermedadId, 'Examen — ' + e.nombre);
}

function iniciarExamenTema(temaId){
  const t = getTema(temaId);
  const casos = t.casosClinicos || [];
  if(!casos.length){
    alert('Todavía no hay casos clínicos construidos para ' + t.nombre + ', así que no se puede armar un examen de práctica — vuelve pronto.');
    return;
  }
  const items = construirItemsDeCasos(casos);
  prepararExamen(items, t.nombre, 'Examen de práctica', { tipo: 'tema', id: temaId });
  navPush('examen-simulado', 'tema::' + temaId, 'Examen — ' + t.nombre);
}

/* ---------- por módulo completo (al final del módulo) ---------- */
function iniciarExamenModulo(moduloKey){
  const m = MODULOS[moduloKey];
  const todasIds = m.enfermedadesPorCategoria.flatMap(c => c.ids);
  let items = [];
  todasIds.forEach(id => {
    const e = getEnfermedad(id);
    // 1 caso representativo por enfermedad (el de mayor nivel disponible), para que el examen sea completo pero no eterno
    const casos = e.casosClinicos || [];
    if(!casos.length) return;
    const elegido = casos.find(c => c.nivel === 'avanzado') || casos.find(c => c.nivel === 'intermedio') || casos[0];
    items.push({ ...construirItemsDeCasos([elegido])[0], enfermedadOrigen: e.nombre });
  });
  prepararExamen(items, m.nombre, 'Examen final del módulo — tu filtro antes de pasar al siguiente', { tipo: 'modulo', id: moduloKey });
  navPush('examen-simulado', 'modulo::' + moduloKey, 'Examen final — ' + m.nombre);
}

function prepararExamen(items, tituloExamen, scopeLabel, volverA){
  // si había un examen anterior sin terminar con su cronómetro corriendo en segundo
  // plano, hay que apagarlo — si no, seguiría descontando tiempo del examen nuevo
  // (los dos timers a la vez), acelerando el reloj sin que te des cuenta.
  if(examenState && examenState.timerId) clearInterval(examenState.timerId);

  shuffleArray(items);
  examenState = {
    items, tituloExamen, scopeLabel, volverA,
    respuestas: items.map(() => ({ mcSeleccion: null, mcRespondida: false, escritaTexto: '', escritaAutoeval: null })),
    iniciado: false,
    finalizado: false,
    segundosRestantes: items.length * MIN_POR_ITEM * 60,
    timerId: null
  };
}

function puntajeTotalPosible(){
  return examenState.items.length * (PUNTOS_MC + PUNTOS_ESCRITA);
}

function renderExamenSimulado(){
  const wrap = document.getElementById('view-examen-simulado-content');
  if(!examenState){ wrap.innerHTML = '<p class="muted">No hay un examen en curso.</p>'; return; }

  if(!examenState.iniciado){ renderIntroExamen(wrap); return; }
  if(examenState.finalizado){ renderResultadoExamen(wrap); return; }
  renderPreguntasExamen(wrap);
}

function renderIntroExamen(wrap){
  const minutos = Math.round(examenState.items.length * MIN_POR_ITEM);
  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">${examenState.scopeLabel}</span>
    <h1 class="page-title">📝 ${examenState.tituloExamen}</h1>
    <div class="kcard">
      <h3>📋 Antes de empezar</h3>
      <ul>
        <li><strong>${examenState.items.length}</strong> casos clínicos, cada uno con 1 pregunta de opción múltiple (${PUNTOS_MC} pts) + 1 pregunta escrita (${PUNTOS_ESCRITA} pts)</li>
        <li>Puntaje total: <strong>${puntajeTotalPosible()} puntos</strong>, convertido a nota sobre <strong>20</strong> al final</li>
        <li>Tiempo: <strong>${minutos} minutos</strong> — el cronómetro corre en la parte de arriba, igual que en un examen real</li>
        <li>Las preguntas escritas no se autocalifican solas — al terminar, ves la respuesta modelo y marcas tú misma si la tuviste correcta, parcial o incorrecta</li>
        <li>Si el tiempo se acaba, el examen se entrega automáticamente con lo que hayas respondido hasta ese momento</li>
      </ul>
    </div>
    <div class="pcard" style="cursor:pointer; text-align:center;" onclick="comenzarExamen()">
      <h3>▶️ Comenzar examen</h3>
      <p>El cronómetro empieza apenas toques aquí</p>
    </div>
  `;
}

function comenzarExamen(){
  if(examenState.timerId) clearInterval(examenState.timerId); // por si acaso ya había uno corriendo
  examenState.iniciado = true;
  examenState.timerId = setInterval(tickExamen, 1000);
  navRenderCurrent();
}

function tickExamen(){
  examenState.segundosRestantes--;
  const el = document.getElementById('examen-timer');
  if(el) el.textContent = formatoTiempo(examenState.segundosRestantes);
  if(examenState.segundosRestantes <= 0){
    finalizarExamen(true);
  }
}
function formatoTiempo(s){
  const m = Math.floor(Math.max(s,0) / 60);
  const seg = Math.max(s,0) % 60;
  return String(m).padStart(2,'0') + ':' + String(seg).padStart(2,'0');
}

function renderPreguntasExamen(wrap){
  const { items, respuestas } = examenState;
  wrap.innerHTML = `
    <div class="examen-header-sticky">
      <span>📝 ${examenState.tituloExamen}</span>
      <span id="examen-timer" class="examen-timer">${formatoTiempo(examenState.segundosRestantes)}</span>
    </div>

    ${items.map((item, i) => `
      <div class="kcard">
        <div class="examen-item-head">
          <span>Caso ${i+1} de ${items.length}</span>
          ${item.enfermedadOrigen ? `<span class="muted">(${item.enfermedadOrigen})</span>` : ''}
        </div>
        <p>${item.vineta}</p>
        ${item.imagen ? `<figure class="tema-figura caso-figura" onclick="openImageLightbox('${item.imagen.src}')"><img src="${item.imagen.src}" loading="lazy"><figcaption>${item.imagen.caption}</figcaption></figure>` : ''}

        <div class="examen-pregunta">
          <p><strong>${item.mc.enunciado}</strong> <span class="examen-puntos">(${PUNTOS_MC} pts)</span></p>
          ${item.mc.opciones.map(op => `
            <label class="examen-opcion ${respuestas[i].mcSeleccion === op.id ? 'seleccionada' : ''}">
              <input type="radio" name="mc-${i}" ${respuestas[i].mcSeleccion === op.id ? 'checked' : ''} onchange="seleccionarMCExamen(${i}, '${op.id}')">
              ${op.texto}
            </label>
          `).join('')}
        </div>

        <div class="examen-pregunta">
          <p><strong>${item.escrita.enunciado}</strong> <span class="examen-puntos">(${PUNTOS_ESCRITA} pts)</span></p>
          <textarea class="examen-escrita" rows="3" placeholder="Escribe tu respuesta..." oninput="escribirRespuestaExamen(${i}, this.value)">${respuestas[i].escritaTexto}</textarea>
        </div>
      </div>
    `).join('')}

    <div class="pcard" style="cursor:pointer; text-align:center;" onclick="confirmarFinalizarExamen()">
      <h3>✅ Finalizar y entregar examen</h3>
    </div>
  `;
}

function seleccionarMCExamen(i, opId){
  examenState.respuestas[i].mcSeleccion = opId;
  examenState.respuestas[i].mcRespondida = true;
  navRenderCurrent();
}
function escribirRespuestaExamen(i, texto){
  examenState.respuestas[i].escritaTexto = texto;
}

function confirmarFinalizarExamen(){
  const sinResponder = examenState.respuestas.filter(r => !r.mcRespondida || !r.escritaTexto.trim()).length;
  if(sinResponder > 0){
    if(!confirm(`Tienes ${sinResponder} pregunta(s) sin responder por completo. ¿Entregar de todas formas?`)) return;
  }
  finalizarExamen(false);
}

function finalizarExamen(porTiempo){
  clearInterval(examenState.timerId);
  examenState.finalizado = true;
  examenState.entregadoPorTiempo = porTiempo;
  navRenderCurrent();
}

function renderResultadoExamen(wrap){
  const { items, respuestas } = examenState;

  const puntajeMC = respuestas.reduce((acc, r, i) => acc + (r.mcSeleccion === items[i].mc.correcta ? PUNTOS_MC : 0), 0);
  const escritaPendiente = respuestas.some(r => r.escritaAutoeval === null);

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">${examenState.scopeLabel}</span>
    <h1 class="page-title">📝 Resultado — ${examenState.tituloExamen}</h1>
    ${examenState.entregadoPorTiempo ? `<div class="ccard"><p>⏱️ El tiempo se acabó — el examen se entregó automáticamente con lo que tenías respondido.</p></div>` : ''}

    ${items.map((item, i) => {
      const r = respuestas[i];
      const correctaMC = r.mcSeleccion === item.mc.correcta;
      return `
      <div class="kcard">
        <div class="examen-item-head"><span>Caso ${i+1} de ${items.length}</span></div>
        <p>${item.vineta}</p>

        <div class="examen-pregunta">
          <p><strong>${item.mc.enunciado}</strong></p>
          ${item.mc.opciones.map(op => `
            <div class="examen-opcion-resultado ${op.id === item.mc.correcta ? 'correcta' : (op.id === r.mcSeleccion ? 'marcada-incorrecta' : '')}">
              ${op.id === item.mc.correcta ? '✓ ' : (op.id === r.mcSeleccion ? '✗ ' : '')}${op.texto}
            </div>
          `).join('')}
          <p class="muted" style="margin-top:6px;">${item.mc.explicacion}</p>
          <p class="examen-puntaje-obtenido">${correctaMC ? `+${PUNTOS_MC}` : '+0'} / ${PUNTOS_MC} pts</p>
        </div>

        <div class="examen-pregunta">
          <p><strong>${item.escrita.enunciado}</strong></p>
          <p class="muted"><strong>Tu respuesta:</strong> ${r.escritaTexto || '(sin responder)'}</p>
          <p><strong>Respuesta modelo:</strong> ${item.escrita.respuestaModelo}</p>
          <p style="margin-top:8px;"><strong>¿Cómo calificarías tu respuesta?</strong></p>
          <div class="examen-autoeval">
            <span class="btn-icon ${r.escritaAutoeval === 1 ? 'done' : ''}" onclick="autoevaluarEscrita(${i}, 1)">✅ Correcta (${PUNTOS_ESCRITA} pts)</span>
            <span class="btn-icon ${r.escritaAutoeval === 0.5 ? 'done' : ''}" onclick="autoevaluarEscrita(${i}, 0.5)">🟡 Parcial (${PUNTOS_ESCRITA/2} pts)</span>
            <span class="btn-icon ${r.escritaAutoeval === 0 ? 'done' : ''}" onclick="autoevaluarEscrita(${i}, 0)">❌ Incorrecta (0 pts)</span>
          </div>
        </div>
      </div>
    `}).join('')}

    ${escritaPendiente ? `
    <div class="ccard"><p>⬆️ Marca cada pregunta escrita arriba para ver tu nota final.</p></div>
    ` : renderNotaFinalExamen()}
  `;
}

function autoevaluarEscrita(i, valor){
  examenState.respuestas[i].escritaAutoeval = valor;
  navRenderCurrent();
}

function renderNotaFinalExamen(){
  const { items, respuestas } = examenState;
  const puntajeMC = respuestas.reduce((acc, r, i) => acc + (r.mcSeleccion === items[i].mc.correcta ? PUNTOS_MC : 0), 0);
  const puntajeEscrita = respuestas.reduce((acc, r) => acc + (r.escritaAutoeval || 0) * PUNTOS_ESCRITA, 0);
  const total = puntajeMC + puntajeEscrita;
  const posible = puntajeTotalPosible();
  const nota20 = (total / posible) * 20;
  const color = nota20 >= 17 ? 'mint' : nota20 >= 13 ? 'coral' : 'alert';

  return `
    <div class="pcard" style="text-align:center;">
      <h3>🎓 Tu nota final</h3>
      <p style="font-size:42px; font-weight:800; margin:8px 0;">${nota20.toFixed(1)} <span class="muted" style="font-size:18px;">/ 20</span></p>
      <p class="muted">${total.toFixed(1)} de ${posible} puntos (${((total/posible)*100).toFixed(0)}%)</p>
    </div>
    <div class="btn-icon" style="margin:0 auto; display:table;" onclick="reiniciarMismoExamen()">🔄 Repetir este examen (preguntas mezcladas)</div>
  `;
}

function reiniciarMismoExamen(){
  const volverA = examenState.volverA;
  if(volverA.tipo === 'enfermedad'){
    const e = getEnfermedad(volverA.id);
    prepararExamen(construirItemsDeCasos(e.casosClinicos || []), e.nombre, 'Examen de práctica', volverA);
  } else if(volverA.tipo === 'tema'){
    const t = getTema(volverA.id);
    prepararExamen(construirItemsDeCasos(t.casosClinicos || []), t.nombre, 'Examen de práctica', volverA);
  } else {
    const m = MODULOS[volverA.id];
    const todasIds = m.enfermedadesPorCategoria.flatMap(c => c.ids);
    let items = [];
    todasIds.forEach(id => {
      const e = getEnfermedad(id);
      const casos = e.casosClinicos || [];
      if(!casos.length) return;
      const elegido = casos.find(c => c.nivel === 'avanzado') || casos.find(c => c.nivel === 'intermedio') || casos[0];
      items.push({ ...construirItemsDeCasos([elegido])[0], enfermedadOrigen: e.nombre });
    });
    prepararExamen(items, m.nombre, 'Examen final del módulo — tu filtro antes de pasar al siguiente', volverA);
  }
  navRenderCurrent(); // solo refresca la vista actual, sin apilar una entrada nueva
}
