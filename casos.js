/* ============================================================
   MEDCORE — casos clínicos (estilo examen real)
   ------------------------------------------------------------
   A diferencia de las flashcards (recall rápido de datos
   sueltos), esto son viñetas clínicas completas con una
   pregunta de opción múltiple Y una pregunta para responder
   escrito — igual que tus exámenes de Medicina Interna I.
   La pregunta escrita se autoevalúa comparando con una
   respuesta modelo (no hay forma automática de "corregir"
   texto libre, así que la honestidad al autoevaluarte es
   parte del ejercicio).
   ============================================================ */

let casoState = null; // { casos, index, enfermedadNombre, mcRespondida, mcSeleccion, escritaRevelada, escritaTexto }

function navCasos(entidadId){
  const e = getEnfermedad(entidadId) || getTema(entidadId);
  navPush('casos', entidadId, 'Casos clínicos — ' + e.nombre);
}
function navCasosExamen(bancoKey){
  const banco = EXAM_BANCOS[bancoKey];
  navPush('casos', 'examen::' + bancoKey, 'Banco de examen — ' + banco.nombre);
}

function renderCasos(entidadId){
  let nombre, casosOriginales;
  if(entidadId.startsWith('examen::')){
    const banco = EXAM_BANCOS[entidadId.slice('examen::'.length)];
    nombre = banco.nombre;
    casosOriginales = banco.casos;
  } else if(entidadId.startsWith('modulo::')){
    const m = MODULOS[entidadId.slice('modulo::'.length)];
    nombre = 'Comparativo — ' + m.nombre;
    casosOriginales = m.casosComparativos;
  } else {
    const e = getEnfermedad(entidadId) || getTema(entidadId);
    nombre = e.nombre;
    casosOriginales = e.casosClinicos || [];
  }
  const casos = shuffleArray([...casosOriginales]);
  casoState = { casos, index: 0, enfermedadNombre: nombre, mcRespondida: false, mcSeleccion: null, escritaRevelada: false, escritaTexto: '' };
  paintCaso();
}

function paintCaso(){
  const wrap = document.getElementById('view-casos-content');
  const { casos, index, enfermedadNombre } = casoState;

  if(casos.length === 0){
    wrap.innerHTML = `${volverBtnHTML()}<div class="kcard"><p class="muted">Todavía no hay casos clínicos construidos para esta enfermedad.</p></div>`;
    return;
  }

  const caso = casos[index];
  const { mcRespondida, mcSeleccion, escritaRevelada, escritaTexto } = casoState;

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Caso clínico · estilo examen</span>
    <h1 class="page-title">🩺 ${enfermedadNombre}</h1>
    <p class="page-sub">Caso ${index + 1} de ${casos.length} <span class="caso-nivel-badge nivel-${caso.nivel || 'basico'}">${(caso.nivel || 'básico').toUpperCase()}</span> — lee la viñeta como si fuera tu examen de Medicina Interna I.</p>

    <div class="kcard caso-vineta">
      <h3>📋 Caso clínico</h3>
      <p>${caso.vineta}</p>
      ${caso.imagen ? `
      <figure class="tema-figura caso-figura" onclick="openImageLightbox('${caso.imagen.src}')">
        <img src="${caso.imagen.src}" alt="${caso.imagen.caption}" loading="lazy">
        <figcaption>${caso.imagen.caption}</figcaption>
      </figure>` : ''}
    </div>

    <div class="mcard">
      <h3>Pregunta de opción múltiple</h3>
      <p style="font-weight:600; margin-bottom:12px;">${caso.preguntaMC.enunciado}</p>
      <div class="caso-opciones">
        ${caso.preguntaMC.opciones.map(op => {
          let cls = '';
          if(mcRespondida){
            if(op.id === caso.preguntaMC.correcta) cls = 'correcta';
            else if(op.id === mcSeleccion) cls = 'incorrecta';
          }
          return `<div class="caso-opcion ${cls}" onclick="${mcRespondida ? '' : `responderCasoMC('${op.id}')`}">
            <span class="caso-opcion-letra">${op.id.toUpperCase()}</span>
            <span>${op.texto}</span>
          </div>`;
        }).join('')}
      </div>
      ${mcRespondida ? `
        <div class="alert ${mcSeleccion === caso.preguntaMC.correcta ? 'green' : 'red'}" style="margin-top:14px;">
          <span class="label">${mcSeleccion === caso.preguntaMC.correcta ? '✓ Correcto' : '✗ La respuesta correcta era ' + caso.preguntaMC.correcta.toUpperCase()}</span>
          ${caso.preguntaMC.explicacion}
        </div>` : ''}
    </div>

    <div class="pcard">
      <h3>✍️ Pregunta para responder escrito</h3>
      <p style="font-weight:600; margin-bottom:12px;">${caso.preguntaEscrita.enunciado}</p>
      <textarea class="caso-escrita-textarea" id="caso-escrita-input" placeholder="Escribe tu respuesta como si fuera tu examen..." oninput="casoState.escritaTexto = this.value">${escritaTexto}</textarea>
      ${!escritaRevelada ? `
        <div class="btn-icon" style="margin-top:10px;" onclick="revelarRespuestaEscrita()">Ver respuesta modelo y autoevaluarme</div>
      ` : `
        <div class="alert green" style="margin-top:14px;">
          <span class="label">Respuesta modelo</span>
          ${caso.preguntaEscrita.respuestaModelo}
        </div>
        <p class="muted" style="font-size:12.5px; margin-top:8px;">Compara tu respuesta con esta — ¿mencionaste las ideas clave, aunque no con las mismas palabras?</p>
      `}
    </div>

    <div class="quiz-controls">
      <div class="btn-icon ${index === 0 ? 'disabled' : ''}" onclick="casoNavegar(-1)">← Caso anterior</div>
      <div class="btn-icon" onclick="shuffleCasos()">🔀 Mezclar casos</div>
      <div class="btn-icon ${index === casos.length - 1 ? 'disabled' : ''}" onclick="casoNavegar(1)">Caso siguiente →</div>
    </div>
  `;
}

function shuffleCasos(){
  shuffleArray(casoState.casos);
  casoState.index = 0;
  casoState.mcRespondida = false;
  casoState.mcSeleccion = null;
  casoState.escritaRevelada = false;
  casoState.escritaTexto = '';
  paintCaso();
}

function responderCasoMC(opcionId){
  casoState.mcRespondida = true;
  casoState.mcSeleccion = opcionId;
  const caso = casoState.casos[casoState.index];
  registrarEstudioHoy();
  paintCaso();
}
function revelarRespuestaEscrita(){
  casoState.escritaRevelada = true;
  paintCaso();
}
function casoNavegar(delta){
  const nuevo = casoState.index + delta;
  if(nuevo < 0 || nuevo >= casoState.casos.length) return;
  casoState.index = nuevo;
  casoState.mcRespondida = false;
  casoState.mcSeleccion = null;
  casoState.escritaRevelada = false;
  casoState.escritaTexto = '';
  paintCaso();
}
