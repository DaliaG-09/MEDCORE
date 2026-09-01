/* ============================================================
   MEDCORE — lógica de la interfaz (sistema visual v2)
   Sin frameworks, sin build step. Cada función pinta un pedazo
   de HTML a partir de data.js — fácil de extender aunque no
   programes.
   ============================================================ */

function getEnfermedad(id){ return ENFERMEDADES.find(e => e.id === id); }
function getTema(id){ return TEMAS.find(t => t.id === id); }
function getSemana(id){ return SEMANAS.find(s => s.id === id); }
function getLectura(id){ return LECTURAS.find(l => l.id === id); }
function getTaller(id){ return TALLERES.find(t => t.id === id); }

/* ---------- estado local: favoritos y "estudiado" (persistente por dispositivo) ---------- */
function loadFlags(){
  try{
    const saved = JSON.parse(localStorage.getItem('medcore-flags') || '{}');
    ENFERMEDADES.forEach(e => {
      if(saved[e.id]){
        e.favorito = !!saved[e.id].favorito;
        e.estudiado = !!saved[e.id].estudiado;
      }
    });
  } catch(err){ /* si no hay nada guardado, se usan los valores por defecto de data.js */ }
}
function saveFlags(){
  const out = {};
  ENFERMEDADES.forEach(e => { out[e.id] = { favorito: !!e.favorito, estudiado: !!e.estudiado }; });
  localStorage.setItem('medcore-flags', JSON.stringify(out));
}

/* ============================================================
   NAVEGACIÓN CONTEXTUAL (ruta de estudio)
   ------------------------------------------------------------
   En vez de "showView" simple, mantenemos una pila de lugares
   visitados (navStack). "Volver" saca el último lugar de la
   pila en vez de mandar siempre a Inicio — así puedes bajar
   Semana → Día → Enfermedad → Semiología y volver paso a paso
   por el mismo camino. El breadcrumb de arriba muestra toda
   la ruta y cada nivel es clickeable.
   ============================================================ */

const VIEW_MAP = { inicio: 'view-inicio', semana: 'view-semana', dia: 'view-dia', enfermedad: 'view-enfermedad', tema: 'view-tema', cuaderno: 'view-cuaderno', quiz: 'view-quiz', favoritos: 'view-favoritos', apuntes: 'view-apuntes', casos: 'view-casos', lectura: 'view-lectura', cronograma: 'view-cronograma', calendario: 'view-calendario', excel: 'view-excel', 'todas-semanas': 'view-todas-semanas', preparar: 'view-preparar', hospital: 'view-hospital', 'hospital-sesion': 'view-hospital-sesion', modulo: 'view-modulo', taller: 'view-taller', 'examen-simulado': 'view-examen-simulado', 'pdf-dividido': 'view-pdf-dividido' };
let navStack = [{ view: 'inicio', id: null, label: 'Inicio' }];

function navPush(view, id, label){
  navStack.push({ view, id, label });
  navRenderCurrent();
}
function navReset(view, id, label){
  navStack = [{ view: 'inicio', id: null, label: 'Inicio' }];
  if(view && view !== 'inicio') navStack.push({ view, id, label });
  navRenderCurrent();
}
function navBack(){
  if(navStack.length > 1){ navStack.pop(); navRenderCurrent(); }
}
function navGoTo(index){
  navStack = navStack.slice(0, index + 1);
  navRenderCurrent();
}
function navReplace(view, id, label){
  navStack[navStack.length - 1] = { view, id, label };
  navRenderCurrent();
}
function navRenderCurrent(){
  const top = navStack[navStack.length - 1];
  switch(top.view){
    case 'inicio': renderInicio(); break;
    case 'semana': renderSemana(top.id); break;
    case 'dia': renderDia(top.id); break;
    case 'enfermedad': renderEnfermedad(top.id); break;
    case 'tema': renderTema(top.id); break;
    case 'cuaderno': renderCuaderno(top.id); break;
    case 'quiz': renderQuiz(top.id); break;
    case 'favoritos': renderFavoritos(); break;
    case 'apuntes': renderApuntes(); break;
    case 'casos': renderCasos(top.id); break;
    case 'lectura': renderLectura(top.id); break;
    case 'cronograma': renderCronograma(); break;
    case 'calendario': renderCalendarioEvaluaciones(); break;
    case 'excel': renderExcelViewer(); break;
    case 'todas-semanas': renderTodasSemanas(); break;
    case 'preparar': renderPreparar(top.id); break;
    case 'hospital': renderHospital(); break;
    case 'hospital-sesion': renderHospitalSesion(top.id); break;
    case 'modulo': renderModulo(top.id); break;
    case 'taller': renderTaller(top.id); break;
    case 'examen-simulado': renderExamenSimulado(); break;
    case 'pdf-dividido': renderPdfDividido(top.id); break;
  }
  showView(VIEW_MAP[top.view]);
  renderBreadcrumb();
}
function renderBreadcrumb(){
  const el = document.getElementById('breadcrumb');
  if(!el) return;
  if(navStack.length <= 1){ el.innerHTML = ''; return; }
  el.innerHTML = navStack.map((n, i) => {
    const isLast = i === navStack.length - 1;
    return `<span class="crumb ${isLast ? 'current' : ''}" ${isLast ? '' : `onclick="navGoTo(${i})"`}>${n.label}</span>`;
  }).join('<span class="crumb-sep">›</span>');
}

/* ---------- navegación entre vistas (compatibilidad + entradas del sidebar) ---------- */
function showView(viewId){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMatch = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  if(navMatch) navMatch.classList.add('active');
  window.scrollTo(0,0);
}

// entradas "frescas" desde el sidebar: reinician la ruta en vez de apilarla
function goInicio(){ navReset('inicio'); }
function openSemanaFresh(id){ const s = getSemana(id); navReset('semana', id, `Semana ${s.numero}`); }
function openEnfermedadFresh(id){ const e = getEnfermedad(id); navReset('enfermedad', id, e.nombre); }

// navegación en profundidad: apila sobre el contexto actual
function openSemana(id){ const s = getSemana(id); navPush('semana', id, `Semana ${s.numero}`); }
function openDia(semanaId, diaIndex){
  const s = getSemana(semanaId);
  const d = s.dias[diaIndex];
  navPush('dia', semanaId + '::' + diaIndex, d.dia);
}
function openEnfermedad(id){ const e = getEnfermedad(id); navPush('enfermedad', id, e.nombre); }
function openTema(id){ const t = getTema(id); navPush('tema', id, t.nombre); }

function focusMobileSearch(){
  const input = document.getElementById('global-search');
  if(input){ input.scrollIntoView({behavior:'smooth', block:'start'}); input.focus(); }
}
function toggleDoctorNotes(el, drawKey){
  el.classList.toggle('expanded');
  if(el.classList.contains('expanded') && drawKey){
    setTimeout(() => resizeDrawPad(drawKey), 50);
  }
}

/* ---------- modo oscuro ---------- */
function loadDarkMode(){
  const saved = localStorage.getItem('medcore-dark') === 'true';
  if(saved) document.documentElement.classList.add('dark');
  updateDarkToggleIcon();
}
function toggleDarkMode(){
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('medcore-dark', document.documentElement.classList.contains('dark'));
  updateDarkToggleIcon();
}
function updateDarkToggleIcon(){
  const btn = document.getElementById('dark-toggle');
  if(!btn) return;
  const isDark = document.documentElement.classList.contains('dark');
  btn.innerHTML = `<span class="emoji">${isDark ? '☀️' : '🌙'}</span> ${isDark ? 'Modo claro' : 'Modo oscuro'}`;
}

/* ---------- racha de días estudiando ---------- */
function registrarEstudioHoy(){
  const hoyStr = new Date().toDateString();
  const last = localStorage.getItem('medcore-last-study-date');
  if(last === hoyStr) return; // ya contado hoy
  let racha = parseInt(localStorage.getItem('medcore-streak') || '0', 10);
  const ayer = new Date(); ayer.setDate(ayer.getDate() - 1);
  racha = (last === ayer.toDateString()) ? racha + 1 : 1;
  localStorage.setItem('medcore-last-study-date', hoyStr);
  localStorage.setItem('medcore-streak', String(racha));
}
function getRachaActual(){
  const hoyStr = new Date().toDateString();
  const last = localStorage.getItem('medcore-last-study-date');
  if(!last) return 0;
  const racha = parseInt(localStorage.getItem('medcore-streak') || '0', 10);
  const ayer = new Date(); ayer.setDate(ayer.getDate() - 1);
  return (last === hoyStr || last === ayer.toDateString()) ? racha : 0;
}
function rachaHTML(){
  const racha = getRachaActual();
  if(racha < 1) return '';
  return `<div class="countdown-chip racha-chip"><span class="countdown-days">🔥 ${racha}</span><span class="countdown-label">${racha === 1 ? 'día seguido estudiando' : 'días seguidos estudiando'}</span></div>`;
}

/* ---------- countdown de próxima evaluación ---------- */
const MESES_MAP = { ene:0, feb:1, mar:2, abr:3, may:4, jun:5, jul:6, ago:7, set:8, sep:8, oct:9, nov:10, dic:11 };
function parseFechaTextoLibre(texto, year){
  // busca patrones tipo "5 AL 11 DE OCTUBRE" o "30 NOVIEMBRE AL 6 DE DICIEMBRE" y toma la fecha final
  const meses = 'enero|febrero|marzo|abril|mayo|junio|julio|agosto|setiembre|septiembre|octubre|noviembre|diciembre';
  const re = new RegExp(`(\\d{1,2})\\s*(?:DE)?\\s*(${meses})`, 'gi');
  let m, last = null;
  while((m = re.exec(texto)) !== null){ last = m; }
  if(!last) return null;
  const dia = parseInt(last[1], 10);
  const mesTxt = last[2].toLowerCase().slice(0,3);
  const mesIdx = MESES_MAP[mesTxt];
  if(mesIdx === undefined) return null;
  return new Date(year, mesIdx, dia, 23, 59);
}
function parseRangoFin(rango, year){
  // "31 ago – 4 set" -> toma "4 set"; "17 – 21 ago" -> toma "21 ago"
  const m = rango.match(/(\d{1,2})\s*([a-záéíóú]{3})\s*$/i);
  if(!m) return null;
  const dia = parseInt(m[1], 10);
  const mesIdx = MESES_MAP[m[2].toLowerCase()];
  if(mesIdx === undefined) return null;
  return new Date(year, mesIdx, dia, 23, 59);
}
function getProximaEvaluacion(){
  const hoy = new Date();
  const year = hoy.getFullYear();
  const candidatas = [];
  SEMANAS.forEach(s => {
    if(!s.evaluaciones || !s.evaluaciones.length) return;
    s.evaluaciones.forEach(ev => {
      let fecha = parseFechaTextoLibre(ev, year) || parseRangoFin(s.rango, year);
      if(fecha && fecha >= hoy){
        candidatas.push({ fecha, label: ev, semana: s.numero });
      }
    });
  });
  candidatas.sort((a,b) => a.fecha - b.fecha);
  return candidatas[0] || null;
}
function countdownHTML(){
  const prox = getProximaEvaluacion();
  if(!prox) return '';
  const dias = Math.ceil((prox.fecha - new Date()) / (1000*60*60*24));
  const urgente = dias <= 3;
  return `
    <div class="countdown-chip ${urgente ? 'urgente' : ''}">
      <span class="countdown-days">${dias <= 0 ? 'Hoy' : (dias === 1 ? '1 día' : dias + ' días')}</span>
      <span class="countdown-label">para ${prox.label.split('—')[0].trim()} (Semana ${prox.semana})</span>
    </div>
  `;
}

/* ============================================================
   IDENTIDAD VISUAL POR SEMANA
   Cada semana tiene un color y emoji propio, aplicado SOLO al
   encabezado/portada de la semana — nada más cambia de color.
   ============================================================ */
const WEEK_THEMES = {
  1:  { color: '#F6A6B8', emoji: '🌸' },
  2:  { color: '#B8A4E8', emoji: '🧠' },
  3:  { color: '#8EC5E8', emoji: '🫁' },
  4:  { color: '#8FD3B6', emoji: '🫀' },
  5:  { color: '#F5B38A', emoji: '🧪' },
  6:  { color: '#F3D77A', emoji: '⚡' },
  7:  { color: '#72C9C6', emoji: '🩺' },
  8:  { color: '#7E8FD4', emoji: '🏆' },
  9:  { color: '#E8A4C8', emoji: '🫘' },
  10: { color: '#A4C8E8', emoji: '💧' },
  11: { color: '#C8B8E8', emoji: '🔬' },
  12: { color: '#F0C68A', emoji: '🍽️' },
  13: { color: '#E8B8A4', emoji: '🩹' },
  14: { color: '#D8A4C8', emoji: '🧴' },
  15: { color: '#B8D8A4', emoji: '🔎' },
  16: { color: '#D4AF7E', emoji: '🎓' }
};
function getWeekTheme(numero){
  return WEEK_THEMES[numero] || { color: '#9B8AF2', emoji: '📅' };
}
function weekHeaderStyleHTML(numero){
  const t = getWeekTheme(numero);
  return `background: linear-gradient(135deg, ${t.color}33 0%, ${t.color}18 100%); border: 1px solid ${t.color}55;`;
}

/* ---------- vista: prepárate para este examen ---------- */
function getEnfermedadesHastaSemana(numeroSemana){
  return ENFERMEDADES.filter(e => e.semanas.some(sid => { const s = getSemana(sid); return s && s.numero <= numeroSemana; }));
}
function navPreparar(semanaId, evalIndex){
  navPush('preparar', semanaId + '::' + evalIndex, 'Prepárate para el examen');
}
function renderPreparar(compositeId){
  const [semanaId, idxStr] = compositeId.split('::');
  const idx = parseInt(idxStr, 10);
  const s = getSemana(semanaId);
  const evalLabel = s.evaluaciones[idx];
  const scope = getEnfermedadesHastaSemana(s.numero);
  const estudiadas = scope.filter(e => e.estudiado).length;
  const wrap = document.getElementById('view-preparar-content');

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Semana ${s.numero} · ${s.rango}</span>
    <h1 class="page-title">🎯 ${evalLabel.split('—')[0].trim()}</h1>
    <p class="page-sub">Todo lo que necesitas reunido en un solo lugar antes de esta evaluación.</p>

    <div class="kcard">
      <h3>🎯 Alcance de esta evaluación</h3>
      <p class="muted">Enfermedades y temas cubiertos hasta la Semana ${s.numero} (lo que llevas construido en MEDCORE hasta ahora).</p>
      <div class="progress-track" style="margin-top:10px;"><div class="progress-fill" style="width:${scope.length ? (estudiadas/scope.length*100) : 0}%"></div></div>
      <div class="progress-caption">${estudiadas}/${scope.length} enfermedades ya estudiadas</div>
    </div>

    ${scope.length ? `
    <div class="kcard">
      <h3>✅ Checklist de repaso</h3>
      <div class="chip-list">
        ${scope.map(e => `
          <div class="chip" style="cursor:pointer;" onclick="toggleEstudiado('${e.id}')">
            <span class="n">${e.estudiado ? '✅' : '⬜'}</span>
            <span>${e.nombre}</span>
          </div>
        `).join('')}
      </div>
    </div>` : `
    <div class="kcard"><p class="muted">Todavía no hay enfermedades construidas en este alcance — pásame el material y las armamos.</p></div>`}

    <div class="grid cols-2">
      <div class="pcard" style="cursor:pointer;" onclick="iniciarExamenPreparar('${semanaId}', ${idx})">
        <h3>🧠 Quiz combinado</h3>
        <p>Tarjetas de recall activo de TODAS las enfermedades del alcance, mezcladas.</p>
      </div>
      <div class="gcard" style="cursor:pointer;" onclick="navCasosExamen('neumologia')">
        <h3>🩺 Banco de examen (estilo real)</h3>
        <p>Casos y preguntas nuevas, modeladas de tus exámenes pasados reales — no repite lo de cada enfermedad.</p>
      </div>
    </div>
    <p class="muted" style="font-size:12px;">Por ahora el banco de examen estilo real solo cubre Neumología — se irán agregando los demás módulos según construyamos más contenido.</p>
  `;
}

/* ============================================================
   HOSPITAL — estructura real de evaluación en sedes hospitalarias
   Fuente: presentación de la coordinadora del curso (no inventado).
   ============================================================ */
const HOSPITAL_INFO = {
  sede: "Hospital Nacional Dos de Mayo",
  resumen: {
    aulas: ["Clases teóricas", "Controles de lectura calificados", "Talleres aplicativos calificados", "Exposiciones calificadas"],
    hospital: ["Examen práctico calificado", "Exposiciones calificadas"]
  },
  examenPractico: {
    frecuencia: "2 veces por módulo: a la mitad y al final de cada módulo",
    evaluador: "Aplicado por OTRO docente de práctica — es una evaluación cruzada, no el mismo docente que te enseña",
    rubrica: [
      {
        criterio: "Presentación del problema y planteamiento diagnóstico",
        destacado: "Resumen integral y muy detallado del caso, considerando todos los factores relevantes, con análisis profundo y comunicación clara. Incluye 1 o más diagnósticos diferenciales altamente compatibles con el cuadro clínico, con análisis crítico de la información.",
        logrado: "Resumen adecuado de las características principales del caso, con buen entendimiento y comunicación clara. Presenta al menos un diagnóstico diferencial compatible con el cuadro clínico.",
        noLogrado: "Resumen deficiente del caso, con información incompleta o poco clara. No presenta diagnósticos diferenciales o los presentados no son compatibles con el cuadro clínico.",
        puntajes: ["8.5 – 10", "6.5 – 8", "0 – 6"]
      },
      {
        criterio: "Plan de trabajo diagnóstico y terapéutico",
        destacado: "Justifica un plan de trabajo coherente con el diagnóstico principal, incluyendo exámenes auxiliares pertinentes y aplica tratamientos correctamente en relación con el diagnóstico principal y diferencial.",
        logrado: "Justifica un plan de trabajo mayormente coherente con el diagnóstico, con exámenes auxiliares adecuados y tratamientos correctos relacionados al diagnóstico principal.",
        noLogrado: "Plan de trabajo no coherente con el diagnóstico principal, con exámenes auxiliares incompletos o poco pertinentes; tratamientos incorrectos o incompletos.",
        puntajes: ["7.5 – 10", "6.5 – 7", "0 – 6"]
      }
    ],
    totalPuntaje: ["16 a 20 (destacado)", "13 a 15 (logrado)", "menos de 13 (no logrado)"]
  },
  exposicionHospital: {
    frecuencia: "1 exposición por módulo",
    modalidad: "Grupal — todos los integrantes deben conocer todos los puntos a exponer",
    detalles: [
      "El orden de los ponentes lo decide el docente en el momento de la presentación (no se elige de antemano)",
      "Se realizan durante las horas de práctica del módulo (en el hospital, no en aula)"
    ],
    rubrica: [
      {
        criterio: "Dominio del tema y organización",
        destacado: "Desarrolla el tema con estructura clara que facilita su comprensión, usando todos los aspectos relevantes de forma organizada dentro del tiempo establecido. Manejo sobresaliente del recurso tecnológico y de las citas bibliográficas, sin fallas.",
        logrado: "Desarrolla el tema con estructura organizada y clara, dentro del tiempo de exposición, con manejo adecuado del recurso tecnológico y de las citas bibliográficas (con algún error menor de citación).",
        noLogrado: "No utiliza una estructura organizada, no jerarquiza los aspectos relevantes, no controla el tiempo, no maneja bien el recurso tecnológico ni cita bibliográficamente.",
        puntajes: ["8.5 – 10", "6.5 – 8", "0 – 6"]
      },
      {
        criterio: "Expresión verbal y no verbal",
        destacado: "Expone sus ideas de manera coherente, con pronunciación correcta y tono de voz adecuado. Usa el lenguaje corporal para hacer más entendible el tema, mostrándose seguro.",
        logrado: "Expone de manera coherente, con pronunciación y tono adecuados; usa el lenguaje corporal pero con poca frecuencia, mostrándose seguro.",
        noLogrado: "Expresión inadecuada, no usa lenguaje corporal, no logra hacer entendible el tema ni transmitir seguridad.",
        puntajes: ["7.5 – 10", "6.5 – 7", "0 – 6"]
      }
    ],
    totalPuntaje: ["16 a 20 (destacado)", "13 a 15 (logrado)", "0 a 12 (no logrado)"]
  }
};

function openHospitalFresh(){ navReset('hospital', null, 'Hospital'); }
function renderHospital(){
  const wrap = document.getElementById('view-hospital-content');
  const h = HOSPITAL_INFO;
  const rubricaHTML = (items, total) => `
    <table class="compare" style="font-size:12.5px;">
      <tr><th>Criterio</th><th>Logro destacado</th><th>Logrado</th><th>No logrado</th></tr>
      ${items.map(r => `<tr>
        <td><strong>${r.criterio}</strong><br><span class="muted" style="font-size:10.5px;">${r.puntajes.join(' / ')}</span></td>
        <td>${r.destacado}</td>
        <td>${r.logrado}</td>
        <td>${r.noLogrado}</td>
      </tr>`).join('')}
    </table>
    <p class="muted" style="margin-top:8px; font-size:12px;"><strong>Puntaje total:</strong> ${total.join(' · ')}</p>
  `;

  wrap.innerHTML = `
    <span class="eyebrow">Fuente: presentación de la coordinadora del curso</span>
    <h1 class="page-title">🏥 Hospital</h1>
    <p class="page-sub">Tu sede: <strong>${h.sede}</strong> · Cómo te evalúan en la sede hospitalaria — para que sepas exactamente qué esperar.</p>

    <div class="pcard">
      <h3>📅 ¿Cuándo me toca examen práctico?</h3>
      <p>Se aplica <strong>2 veces por módulo: a la mitad y al final</strong>. Ya calculé en qué semana cae cada uno según la duración real de cada módulo — los vas a ver marcados en <a class="link-quiet" onclick="openCalendarioFresh()">Evaluaciones</a> junto a las teóricas. El día exacto (jueves, viernes o sábado) todavía no se sabe — solo la semana.</p>
    </div>

    <div class="grid cols-2">
      <div class="kcard">
        <h3>📚 Actividades en aulas</h3>
        <ul>${h.resumen.aulas.map(x => `<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="icard">
        <h3>🏥 Prácticas en hospitales</h3>
        <ul>${h.resumen.hospital.map(x => `<li>${x}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="ccard">
      <h3>📋 Examen práctico calificado</h3>
      <p><strong>Frecuencia:</strong> ${h.examenPractico.frecuencia}</p>
      <p><strong>Evaluador:</strong> ${h.examenPractico.evaluador}</p>
      ${rubricaHTML(h.examenPractico.rubrica, h.examenPractico.totalPuntaje)}
    </div>

    <div class="gcard">
      <h3>🎤 Exposición en hospital</h3>
      <p><strong>Frecuencia:</strong> ${h.exposicionHospital.frecuencia}</p>
      <p><strong>Modalidad:</strong> ${h.exposicionHospital.modalidad}</p>
      <ul>${h.exposicionHospital.detalles.map(x => `<li>${x}</li>`).join('')}</ul>
      ${rubricaHTML(h.exposicionHospital.rubrica, h.exposicionHospital.totalPuntaje)}
    </div>

    <div class="kcard">
      <p class="muted">Esto es la ESTRUCTURA general de evaluación (cómo te califican). Las fechas y actividades específicas de cada día de hospital siguen pendientes hasta que tengamos ese documento — si lo consigues, lo integro igual que todo lo demás.</p>
    </div>

    <div class="section-title" style="margin-top:28px;"><h2>📓 Cuadernos de práctica hospitalaria</h2></div>
    <p class="muted" style="margin-top:-10px; margin-bottom:14px;">Notas reales de cada día de hospital, armadas a partir de tus audios transcritos — con lo importante resaltado, vocabulario nuevo y tareas del Dr. ya organizadas por tema.</p>
    ${(typeof HOSPITAL_SESIONES !== 'undefined' ? HOSPITAL_SESIONES : []).map(s => `
      <div class="hospital-session-card" onclick="openHospitalSesion('${s.id}')">
        <div class="hsc-meta">Semana ${s.semana} · ${s.dia}</div>
        <div class="hsc-title">${s.titulo}</div>
        <div class="hsc-sub">${s.resumen}</div>
      </div>
    `).join('')}
  `;
}

/* ---------- vista: resumen del módulo completo ---------- */
function openModuloFresh(moduloKey){ navReset('modulo', moduloKey, 'Módulo — ' + MODULOS[moduloKey].nombre); }
function renderModulo(moduloKey){
  const m = MODULOS[moduloKey];
  const wrap = document.getElementById('view-modulo-content');
  const todasIds = m.enfermedadesPorCategoria.flatMap(c => c.ids);
  const total = todasIds.length;
  const estudiadas = todasIds.filter(id => getEnfermedad(id).estudiado).length;

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Resumen de módulo completo</span>
    <h1 class="page-title">${m.emoji} Módulo — ${m.nombre}</h1>
    <p class="page-sub">Todo el módulo en un solo lugar — ideal para repasar antes del parcial, sin entrar semana por semana.</p>

    <div class="kcard">
      <div class="progress-track"><div class="progress-fill" style="width:${total ? (estudiadas/total*100) : 0}%"></div></div>
      <div class="progress-caption">${estudiadas}/${total} enfermedades del módulo ya estudiadas</div>
    </div>

    <div class="grid cols-2" style="margin-bottom:18px;">
      <div class="pcard" style="cursor:pointer;" onclick="iniciarExamenComparativoModulo('${moduloKey}')">
        <h3>🧠 Examen comparativo</h3>
        <p>${m.casosComparativos.length} casos NUEVOS que comparan enfermedades del módulo entre sí — con cronómetro y nota, no repiten los de cada enfermedad.</p>
      </div>
      <div class="gcard" style="cursor:pointer;" onclick="navCasosModulo('${moduloKey}')">
        <h3>🩺 Casos comparativos</h3>
        <p>Casos con datos que se prestan a confusión entre 2 enfermedades — te obligan a diferenciar, no solo a reconocer.</p>
      </div>
    </div>

    <div class="ccard">
      <h3>🚨 Lo que sí o sí debes saber del módulo</h3>
      <ul>${m.loQueSiOSiDebesSaberModulo.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    ${m.enfermedadesPorCategoria.map(cat => `
      <div class="section-block">
        <h3>${cat.categoria}</h3>
        <div class="grid cols-2">${cat.ids.map(id => diseaseCardHTML(getEnfermedad(id))).join('')}</div>
      </div>
    `).join('')}

    <div class="ccard" style="margin-top:10px; border:2px solid var(--coral);">
      <h3>🎓 Examen final del módulo</h3>
      <p>Antes de pasar al siguiente módulo, ponte a prueba con un examen que reúne un caso de cada enfermedad de ${m.nombre} — con cronómetro y nota sobre 20, tal como en un examen real.</p>
      <div class="btn-icon" style="margin-top:8px; display:table;" onclick="iniciarExamenModulo('${moduloKey}')">▶️ Comenzar examen final</div>
    </div>
  `;
}

function navCasosModulo(moduloKey){ navPush('casos', 'modulo::' + moduloKey, 'Casos comparativos — ' + MODULOS[moduloKey].nombre); }

/* ---------- vista: Taller Aplicativo (sección propia, independiente) ---------- */
function openTallerFresh(id){ navReset('taller', id, getTaller(id).nombre); }
function renderTaller(id){
  const t = getTaller(id);
  const wrap = document.getElementById('view-taller-content');
  const sem = getSemana(t.semana);

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Taller Aplicativo · Semana ${sem.numero}, ${t.dia}</span>
    <h1 class="page-title">🎯 ${t.nombre}</h1>
    <p class="page-sub">${t.resumen}</p>

    ${t.formulas ? `
    <div class="kcard formula-box">
      <h3>📐 Fórmulas de este taller</h3>
      <ul>${t.formulas.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>` : ''}

    <div class="pcard" style="cursor:pointer;" onclick="navCasosTaller('${t.id}')">
      <h3>🩺 Practicar los ${t.casos.length} casos de este taller</h3>
      <p>Los mismos casos que se revisaron en clase justo antes de tu examen — practícalos las veces que quieras.</p>
    </div>

    <div class="ccard" style="cursor:pointer;" onclick="iniciarExamenTaller('${t.id}')">
      <h3>📝 Ponte a prueba (examen simulado)</h3>
      <p>Los mismos ${t.casos.length} casos, pero con cronómetro y nota sobre 20 — para sentir la presión real antes de tu examen.</p>
    </div>

    ${t.pdfOrigen ? `
    <div class="kcard" style="border:1.5px dashed var(--cobalt-line);">
      <h3>📄 PDF original de este taller</h3>
      <p class="muted">${t.pdfOrigen.titulo}</p>
      <div class="toolbar" style="margin-top:8px;">
        <div class="btn-icon" onclick="abrirVistaDividida('taller', '${t.id}')">📖✎ Ver PDF + escribir a la vez</div>
        <div class="btn-icon" onclick="window.open('${t.pdfOrigen.url}', '_blank')">↗ Abrir en pestaña nueva</div>
      </div>
    </div>` : ''}
  `;
}

/* ---------- vista: PDF + cuaderno lado a lado ---------- */
function abrirVistaDividida(tipo, id){
  navPush('pdf-dividido', tipo + '::' + id, 'PDF + cuaderno');
}
function extraerIdDrive(url){
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}
function renderPdfDividido(compositeId){
  const [tipo, id] = compositeId.split('::');
  const wrap = document.getElementById('view-pdf-dividido-content');

  let pdfOrigen, cuadernoKey, titulo;
  if(tipo === 'enfermedad'){
    const e = getEnfermedad(id);
    pdfOrigen = e.pdfOrigen;
    cuadernoKey = e.id + '::cuaderno-clase';
    titulo = e.nombre;
  } else if(tipo === 'tema'){
    const t = getTema(id);
    pdfOrigen = t.pdfOrigen;
    cuadernoKey = t.id + '::cuaderno-clase';
    titulo = t.nombre;
  } else if(tipo === 'taller'){
    const t = getTaller(id);
    pdfOrigen = t.pdfOrigen;
    cuadernoKey = t.id + '::cuaderno-clase';
    titulo = t.nombre;
  }

  if(!pdfOrigen){
    wrap.innerHTML = `${volverBtnHTML()}<p class="muted">No hay un PDF original registrado para esto todavía.</p>`;
    return;
  }

  const fileId = extraerIdDrive(pdfOrigen.url);
  const widgetId = 'ic-split-' + tipo + '-' + id;

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Vista dividida</span>
    <h1 class="page-title">📖✎ ${titulo}</h1>
    <p class="page-sub" style="margin-bottom:14px;">Lee el PDF real de tu clase y escribe en tu cuaderno al mismo tiempo — es el mismo cuaderno que ya tienes en esta enfermedad, se guarda junto.</p>

    <div class="split-pdf-cuaderno">
      <div class="split-pane split-pdf">
        <div class="split-pane-label">📄 PDF original</div>
        <iframe src="https://drive.google.com/file/d/${fileId}/preview" class="split-pdf-frame" allow="autoplay"></iframe>
      </div>
      <div class="split-pane split-cuaderno">
        <div class="split-pane-label">✎ Tu cuaderno</div>
        ${cuadernoWidgetHTML(cuadernoKey, widgetId, '62vh')}
      </div>
    </div>
    <p class="muted" style="font-size:11px; margin-top:8px;">En pantallas angostas (celular), el PDF y el cuaderno se acomodan uno debajo del otro en vez de lado a lado.</p>
  `;

  initCuaderno(cuadernoKey, widgetId);
}

/* ---------- vista: Excel original (embebido desde Drive) ---------- */
function openExcelFresh(){ navReset('excel', null, 'Excel del sílabo'); }
function renderExcelViewer(){
  const wrap = document.getElementById('view-excel-content');
  const fileId = '1A4C4LxTSu-IE4_VIARnMX3g6YVtLjHxY';
  wrap.innerHTML = `
    <span class="eyebrow">Fuente original</span>
    <h1 class="page-title">📗 Excel del sílabo</h1>
    <p class="page-sub">El Excel real de la coordinadora, tal cual — para que verifiques cualquier cosa directo en la fuente, no en mi interpretación.</p>
    <div class="kcard" style="padding:8px;">
      <iframe src="https://drive.google.com/file/d/${fileId}/preview" class="excel-frame" allow="autoplay"></iframe>
    </div>
    <p class="muted" style="font-size:12px; margin-top:10px;">Si no carga, necesitas internet para verlo (viene directo de tu Drive) — <a href="https://drive.google.com/file/d/${fileId}/view" target="_blank" rel="noopener">ábrelo directo en Drive ↗</a></p>
  `;
}

/* ---------- vista: todas las semanas (deslizable) ---------- */
function openTodasSemanasFresh(){ navReset('todas-semanas', null, 'Todas las semanas'); }
function renderTodasSemanas(){
  const wrap = document.getElementById('view-todas-semanas-content');
  wrap.innerHTML = `
    <span class="eyebrow">${CURSO.nombre}</span>
    <h1 class="page-title">📅 Todas las semanas</h1>
    <p class="page-sub">Desliza para ver todas las semanas del ciclo y entra directo a la que quieras.</p>
    <div class="week-swipe">
      ${SEMANAS.map(s => {
        const theme = getWeekTheme(s.numero);
        const total = s.enfermedades.length;
        const estudiadas = s.enfermedades.filter(id => getEnfermedad(id).estudiado).length;
        const tieneContenido = total > 0 || (s.temas && s.temas.length > 0);
        return `
        <div class="week-swipe-card" style="border-color:${theme.color}77;" onclick="navReset('semana','${s.id}','Semana ${s.numero}')">
          <div class="week-swipe-header" style="background: linear-gradient(135deg, ${theme.color}44 0%, ${theme.color}22 100%);">
            <span class="week-swipe-emoji">${theme.emoji}</span>
            <span class="week-swipe-num">Semana ${s.numero}</span>
          </div>
          <div class="week-swipe-body">
            <div class="week-swipe-titulo">${s.titulo}</div>
            <div class="week-swipe-rango muted">${s.rango}</div>
            ${tieneContenido ? `<div class="progress-track" style="margin-top:8px;"><div class="progress-fill" style="width:${total ? (estudiadas/total*100) : 0}%"></div></div>` : `<span class="badge" style="background:var(--line); color:var(--ink-soft); margin-top:8px;">sin construir</span>`}
          </div>
        </div>`;
      }).join('')}
    </div>
    <p class="swipe-hint">← desliza para ver todas las semanas →</p>
  `;
}

/* ---------- vista: cronograma (tipo Excel del sílabo) ---------- */
function openCronogramaFresh(){ navReset('cronograma', null, 'Cronograma'); }
function renderCronograma(){
  const wrap = document.getElementById('view-cronograma-content');
  wrap.innerHTML = `
    <span class="eyebrow">${CURSO.nombre} · ${CURSO.codigo} · Sílabo ${CURSO.silabo}</span>
    <h1 class="page-title">📊 Cronograma completo</h1>
    <p class="page-sub">Las 16 semanas de tu sílabo, tal como aparecen en el Excel de la coordinadora — nada inventado.</p>

    <div class="kcard" style="overflow-x:auto;">
      <table class="compare cronograma-table">
        <tr><th>Semana</th><th>Fechas</th><th>Módulo / Tema</th><th>Evaluación</th><th></th></tr>
        ${SEMANAS.map(s => {
          const theme = getWeekTheme(s.numero);
          const tieneContenido = s.enfermedades.length > 0 || (s.temas && s.temas.length > 0);
          return `<tr class="cronograma-row" onclick="navReset('semana','${s.id}','Semana ${s.numero}')">
            <td><span style="background:${theme.color}33; border-radius:999px; padding:3px 10px; font-family:var(--font-mono); font-size:11px; font-weight:700;">${theme.emoji} S${s.numero}</span></td>
            <td class="muted" style="font-size:12.5px;">${s.rango}</td>
            <td>${s.titulo}</td>
            <td style="font-size:12px;">${s.evaluaciones.length ? s.evaluaciones.map(e => e.split('—')[0].trim()).join(', ') : '<span class="muted">—</span>'}</td>
            <td>${tieneContenido ? '<span class="badge teoria">construido</span>' : ''}</td>
          </tr>`;
        }).join('')}
      </table>
    </div>
  `;
}

/* ---------- vista: calendario de evaluaciones ---------- */
function openCalendarioFresh(){ navReset('calendario', null, 'Calendario de evaluaciones'); }
function renderCalendarioEvaluaciones(){
  const wrap = document.getElementById('view-calendario-content');
  const hoy = new Date();
  const year = hoy.getFullYear();
  const items = [];
  SEMANAS.forEach(s => {
    (s.evaluaciones || []).forEach((ev, idx) => {
      const fecha = parseFechaTextoLibre(ev, year) || parseRangoFin(s.rango, year);
      items.push({ fecha, label: ev, semana: s, idx });
    });
  });
  items.sort((a,b) => (a.fecha||0) - (b.fecha||0));

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">${CURSO.formulaEvaluacion}</span>
    <h1 class="page-title">📅 Calendario de evaluaciones</h1>
    <p class="page-sub">Todas las evaluaciones del ciclo, en orden. Toca cualquiera para prepararte: alcance, checklist, quiz y casos.</p>

    <div class="calendario-lista">
      ${items.map(it => {
        const theme = getWeekTheme(it.semana.numero);
        const pasado = it.fecha && it.fecha < hoy;
        const dias = it.fecha ? Math.ceil((it.fecha - hoy) / (1000*60*60*24)) : null;
        return `
        <div class="calendario-item ${pasado ? 'pasado' : ''}" onclick="navPreparar('${it.semana.id}', ${it.idx})">
          <div class="calendario-fecha" style="background:${theme.color}33;">
            <span class="calendario-emoji">${theme.emoji}</span>
            <span class="calendario-semana-num">S${it.semana.numero}</span>
          </div>
          <div class="calendario-info">
            <div class="calendario-label">${it.label}</div>
            <div class="calendario-sub muted">${it.fecha ? it.fecha.toLocaleDateString('es-PE', {day:'numeric', month:'long'}) : it.semana.rango}${!pasado && dias !== null ? ` — faltan ${dias} días` : (pasado ? ' — ya pasó' : '')}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
}

function saludoSegunHora(){
  const h = new Date().getHours();
  if(h < 12) return 'Buenos días';
  if(h < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

/* ---------- vista: inicio ---------- */
/* calcula qué semana corresponde a hoy según las fechas reales del sílabo —
   así Inicio siempre muestra la semana correcta sin quedar fija en la 1 */
function getSemanaActual(){
  const hoy = new Date();
  const year = hoy.getFullYear();
  for(const s of SEMANAS){
    let fin = parseRangoFin(s.rango, year);
    if(!fin && s.evaluaciones && s.evaluaciones.length){
      fin = parseFechaTextoLibre(s.evaluaciones[0], year);
    }
    if(fin && fin >= hoy) return s;
  }
  return SEMANAS[SEMANAS.length - 1];
}

function renderInicio(){
  const semana = getSemanaActual();
  const total = semana.enfermedades.length;
  const estudiadas = semana.enfermedades.filter(id => getEnfermedad(id).estudiado).length;
  const completada = total > 0 && estudiadas === total;

  document.getElementById('inicio-hero').innerHTML = `
    <div class="greeting-hero">
      <div>
        <h1>${saludoSegunHora()}, Dalia 👋</h1>
        <p>Esta semana tienes ${total} enfermedades para revisar. Vas ${estudiadas}/${total}.</p>
        <p style="margin-top:6px; font-size:11.5px; color:var(--ink-soft); font-family:var(--font-mono)">${CURSO.nombre} · ${CURSO.codigo} · Ciclo ${CURSO.ciclo} · Sílabo ${CURSO.silabo}</p>
      </div>
      <div class="greeting-mark"><img src="icon-192.png" alt="Nexu" style="width:100%; height:100%; object-fit:contain;"></div>
    </div>
    ${countdownHTML()}
    ${rachaHTML()}
    ${completada ? nexuMessageHTML('<strong>✦ ¡Semana completada!</strong> Revisaste todas las enfermedades de esta semana. Buen trabajo.') : ''}
  `;

  const wrap = document.getElementById('inicio-semana-actual');
  wrap.innerHTML = `
    <div class="card">
      <div class="week-hero" style="${weekHeaderStyleHTML(semana.numero)}; margin-bottom:14px;">
        <span class="week-hero-emoji">${getWeekTheme(semana.numero).emoji}</span>
        <div>
          <span class="eyebrow" style="margin-bottom:2px;">Semana actual · ${semana.rango}</span>
          <h2 style="margin:0; font-family:var(--font-display); font-weight:800; font-size:19px;">Semana ${semana.numero} — ${semana.titulo}</h2>
        </div>
      </div>
      <div class="section-title" style="margin-top:-6px;">
        <span></span>
        <a class="link-quiet" onclick="navReset('semana','${semana.id}','Semana ${semana.numero}')">Ver semana completa →</a>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${total ? (estudiadas/total*100) : 0}%"></div></div>
      <div class="progress-caption">${estudiadas}/${total} enfermedades revisadas ${estudiadas === total && total>0 ? '— ✦ ¡semana completada!' : ''}</div>
      <div class="day-swipe" style="margin-top:18px">
        ${semana.dias.map((d,i) => diaCardHTML(d, semana.id, i)).join('')}
      </div>
      <p class="swipe-hint">← desliza para ver los demás días →</p>
    </div>
  `;

  const enf = document.getElementById('inicio-enfermedades');
  enf.innerHTML = semana.enfermedades.map(id => diseaseCardHTML(getEnfermedad(id))).join('');
}

function volverBtnHTML(){
  return navStack.length > 1 ? `<div class="btn-icon back-btn" onclick="navBack()">← Volver</div>` : '';
}

function diaCardHTML(d, semanaId, index){
  const badges = d.tipo.split('+').map(t => `<span class="badge ${t}">${t}</span>`).join(' ');
  const clickable = semanaId !== undefined && index !== undefined;
  return `
    <div class="week-day-card${clickable ? ' clickable' : ''}" ${clickable ? `onclick="openDia('${semanaId}', ${index})"` : ''}>
      <div class="day-name">${d.dia}</div>
      <div class="day-tema">${d.tema}</div>
      ${badges}
    </div>
  `;
}

function diseaseCardHTML(e){
  return `
    <div class="disease-card">
      <div onclick="openEnfermedad('${e.id}')" style="flex:1; cursor:pointer;">
        <div class="name">${e.nombre}</div>
        <div class="area">${e.area}</div>
      </div>
      <div class="right-cluster">
        <div class="study-check ${e.estudiado ? 'done' : ''}" title="Marcar como estudiado" onclick="event.stopPropagation(); toggleEstudiado('${e.id}')">${e.estudiado ? '✓' : ''}</div>
        <div class="star" onclick="event.stopPropagation(); toggleFavorito('${e.id}')">${e.favorito ? '★' : '☆'}</div>
      </div>
    </div>
  `;
}

function temaCardHTML(t){
  return `
    <div class="disease-card" onclick="openTema('${t.id}')" style="cursor:pointer;">
      <div>
        <div class="name">${t.nombre}</div>
        <div class="area">${t.area} · Anatomía/Fisiología</div>
      </div>
      <div class="study-check ${t.estudiado ? 'done' : ''}">${t.estudiado ? '✓' : ''}</div>
    </div>
  `;
}

/* ---------- vista: semana ---------- */
function renderSemana(id){
  const s = getSemana(id);
  const total = s.enfermedades.length;
  const estudiadas = s.enfermedades.filter(id => getEnfermedad(id).estudiado).length;
  const idx = SEMANAS.findIndex(w => w.id === id);
  const prev = SEMANAS[idx - 1];
  const next = SEMANAS[idx + 1];
  const wrap = document.getElementById('view-semana-content');
  wrap.innerHTML = `
    ${volverBtnHTML()}
    <div class="week-pager">
      <div class="btn-icon ${prev ? '' : 'disabled'}" ${prev ? `onclick="navReplace('semana','${prev.id}','Semana ${prev.numero}')"` : ''}>← Semana anterior</div>
      <span class="week-pager-current">Semana ${s.numero}</span>
      <div class="btn-icon ${next ? '' : 'disabled'}" ${next ? `onclick="navReplace('semana','${next.id}','Semana ${next.numero}')"` : ''}>Semana siguiente →</div>
    </div>

    <span class="eyebrow">${s.rango}</span>
    <div class="week-hero" style="${weekHeaderStyleHTML(s.numero)}">
      <span class="week-hero-emoji">${getWeekTheme(s.numero).emoji}</span>
      <h1 class="page-title" style="margin:0;">Semana ${s.numero} — ${s.titulo}</h1>
    </div>
    <p class="page-sub">Teoría, hospital, lecturas y enfermedades correspondientes a esta semana.</p>

    <div class="progress-track"><div class="progress-fill" style="width:${total ? (estudiadas/total*100) : 0}%"></div></div>
    <div class="progress-caption" style="margin-bottom:14px">${estudiadas}/${total} enfermedades revisadas</div>
    ${total > 0 ? `<div class="btn-icon" style="margin-bottom:22px; display:inline-flex;" onclick="iniciarExamenSemana('${s.id}')">📝 Examen combinado de toda la semana</div>` : ''}

    <div class="section-block">
      <h3>📅 Días</h3>
      <div class="grid cols-3">${s.dias.map((d,i) => diaCardHTML(d, s.id, i)).join('')}</div>
    </div>

    ${(s.temas && s.temas.length) ? `
    <div class="section-block">
      <h3>🧬 Anatomía y fisiología</h3>
      <div class="grid cols-2">${s.temas.map(id => temaCardHTML(getTema(id))).join('')}</div>
    </div>` : ''}

    <div class="section-block">
      <h3>🔎 Enfermedades de la semana</h3>
      ${s.enfermedades.length ? `<div class="grid cols-2">${s.enfermedades.map(id => diseaseCardHTML(getEnfermedad(id))).join('')}</div>` : `
      <div class="kcard"><p class="muted">El contenido detallado de esta semana todavía no está construido. Cuando subas el material a Drive, lo agrego aquí — mientras tanto, esta semana solo muestra el cronograma real de tu sílabo (días, temas, lecturas, evaluaciones), sin inventar ni cruzar contenido de otras semanas.</p></div>`}
    </div>

    <div class="grid cols-2">
      <div class="section-block">
        <h3>📚 Lecturas</h3>
        <ul>${s.lecturas.map(lid => {
          const l = LECTURAS.find(x => x.id === lid);
          return `<li><a class="link-quiet" style="font-size:14px;" onclick="openLectura('${lid}')">📚 ${l ? l.titulo : lid}</a> <span class="muted">(${l ? l.tipo : ''})</span></li>`;
        }).join('')}</ul>
      </div>
      <div class="section-block">
        <h3>🎯 Talleres y exposiciones</h3>
        <ul>
          ${s.talleres.map(t => {
            const normalizado = t.toUpperCase().replace(/\s+/g, ' ').trim();
            const taller = TALLERES.find(x => x.semana === s.id &&
              (x.nombre.toUpperCase().replace(/\s+/g, ' ').trim().includes(normalizado) ||
               normalizado.includes(x.nombre.toUpperCase().replace(/\s+/g, ' ').trim())));
            return taller
              ? `<li><a class="link-quiet" style="font-size:14px;" onclick="openTallerFresh('${taller.id}')">🎯 ${taller.nombre}</a> <span class="muted">(${taller.casos.length} casos)</span></li>`
              : `<li>${t}</li>`;
          }).join('')}
          ${s.exposiciones.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="section-block">
      <h3>🗓️ Evaluaciones</h3>
      <ul>${s.evaluaciones.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  `;
}

/* ---------- vista: día (nivel entre semana y contenido específico) ---------- */
function renderDia(compositeId){
  const [semanaId, diaIndexStr] = compositeId.split('::');
  const diaIndex = parseInt(diaIndexStr, 10);
  const s = getSemana(semanaId);
  const d = s.dias[diaIndex];
  const wrap = document.getElementById('view-dia-content');

  const vinculos = d.vinculos || [];
  const items = vinculos.map(v => {
    if(v.tipo === 'taller'){
      const t = getTaller(v.id);
      if(!t) return '';
      return `<div class="disease-card taller-card" onclick="openTallerFresh('${t.id}')" style="cursor:pointer;">
        <div><div class="name">🎯 ${t.nombre}</div><div class="area">Taller · ${t.casos.length} casos — repasa aquí antes del examen práctico</div></div>
      </div>`;
    }
    if(v.tipo === 'tema'){
      const t = getTema(v.id);
      if(!t) return '';
      return `<div class="disease-card" onclick="openTema('${t.id}')" style="cursor:pointer;">
        <div><div class="name">${t.nombre}</div><div class="area">Tema · ${t.area}</div></div>
        <div class="study-check ${t.estudiado ? 'done' : ''}">${t.estudiado ? '✓' : ''}</div>
      </div>`;
    }
    if(v.tipo === 'enfermedad'){
      const e = getEnfermedad(v.id);
      if(!e) return '';
      return diseaseCardHTML(e);
    }
    if(v.tipo === 'lectura'){
      const l = getLectura(v.id);
      if(!l) return '';
      return `<div class="disease-card" onclick="openLectura('${l.id}')" style="cursor:pointer;">
        <div><div class="name">📚 ${l.titulo}</div><div class="area">Lectura ${l.tipo}</div></div>
      </div>`;
    }
    return '';
  }).join('');

  const badges = d.tipo.split('+').map(t => `<span class="badge ${t}">${t}</span>`).join(' ');

  // si este día es de hospital y ya existe un cuaderno armado para esta semana+día, lo enlazamos directo
  const hospitalSesion = (d.tipo.includes('hospital') && typeof HOSPITAL_SESIONES !== 'undefined')
    ? HOSPITAL_SESIONES.find(hs => hs.semana === s.numero && hs.dia === d.dia)
    : null;

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Semana ${s.numero}</span>
    <h1 class="page-title">${d.dia}</h1>
    <p class="page-sub">${badges}</p>
    <div class="kcard">
      <h3>📅 Qué toca hoy</h3>
      <p>${d.tema}</p>
    </div>
    ${hospitalSesion ? `
    <div class="hospital-session-card" onclick="openHospitalSesion('${hospitalSesion.id}')">
      <div class="hsc-meta">📓 Cuaderno de práctica</div>
      <div class="hsc-title">${hospitalSesion.titulo}</div>
      <div class="hsc-sub">${hospitalSesion.resumen}</div>
    </div>` : ''}
    ${items ? `
    <div class="section-block">
      <h3>📚 Contenido de esta clase</h3>
      <div class="grid cols-2">${items}</div>
    </div>` : (d.tema.toLowerCase().includes('pendiente') ? '' : `
    <div class="kcard">
      <p class="muted">El contenido detallado de este día todavía no está construido — en cuanto se agregue el material, aparecerá aquí como tarjetas clickeables.</p>
    </div>`)}
  `;
}

/* ---------- vista: favoritos ---------- */
function openFavoritosFresh(){ navReset('favoritos', null, 'Favoritos'); }
function renderFavoritos(){
  const favs = ENFERMEDADES.filter(e => e.favorito);
  const wrap = document.getElementById('view-favoritos-content');
  wrap.innerHTML = `
    <span class="eyebrow">Repaso rápido</span>
    <h1 class="page-title">⭐ Favoritos</h1>
    <p class="page-sub">Las enfermedades que marcaste para repasar primero antes de un examen.</p>
    ${favs.length ? `<div class="grid cols-2">${favs.map(diseaseCardHTML).join('')}</div>` : `
      <div class="kcard"><p class="muted">Todavía no marcaste ninguna enfermedad como favorita. Toca la ☆ en cualquier enfermedad para agregarla aquí.</p></div>`}
  `;
}

/* ---------- vista: mis apuntes (todas las notas juntas) ---------- */
const NOTE_SECTION_LABELS = {
  'fisiopatologia': 'Fisiopatología', 'profundo-general': 'Modo profundo', 'repaso': 'Modo repaso',
  'imprescindible': 'Imprescindible', 'apuntes-doctor': '👨‍⚕️ Apuntes del doctor', 'general': 'Apunte general'
};
function getEntidadInfo(id){
  const e = getEnfermedad(id);
  if(e) return { nombre: e.nombre, action: `openEnfermedadFresh('${id}')` };
  const t = getTema(id);
  if(t) return { nombre: t.nombre, action: `openTemaFresh('${id}')` };
  return { nombre: id, action: '' };
}
function openApuntesFresh(){ navReset('apuntes', null, 'Mis apuntes'); }
function renderApuntes(){
  const wrap = document.getElementById('view-apuntes-content');
  const grupos = {}; // entidadId -> [{seccion, texto}]

  for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    if(!key || !key.startsWith('medcore-note::')) continue;
    const compositeKey = key.replace('medcore-note::', '');
    const texto = localStorage.getItem(key);
    if(!texto || !texto.replace(/<[^>]*>/g, '').trim()) continue;
    const sepIdx = compositeKey.indexOf('::');
    if(sepIdx === -1) continue;
    const entidadId = compositeKey.slice(0, sepIdx);
    const seccion = compositeKey.slice(sepIdx + 2);
    grupos[entidadId] = grupos[entidadId] || [];
    grupos[entidadId].push({ seccion, texto });
  }

  const entidadIds = Object.keys(grupos);

  wrap.innerHTML = `
    <span class="eyebrow">Todo en un solo lugar</span>
    <h1 class="page-title">📝 Mis apuntes</h1>
    <p class="page-sub">Todas tus notas escritas, juntas, sin importar en qué enfermedad o tema las escribiste.</p>
    ${entidadIds.length === 0 ? `
      <div class="kcard"><p class="muted">Todavía no has escrito ningún apunte. Los que escribas en cualquier enfermedad o tema van a aparecer aquí automáticamente.</p></div>
    ` : entidadIds.map(id => {
      const info = getEntidadInfo(id);
      return `
        <div class="kcard">
          <div class="section-title" style="margin-bottom:10px;">
            <h2 style="font-size:16px;">${info.nombre}</h2>
            <a class="link-quiet" onclick="${info.action}">Abrir →</a>
          </div>
          ${grupos[id].map(g => `
            <div class="note-block" style="border-style:solid;">
              <div class="note-head"><span class="note-label">${NOTE_SECTION_LABELS[g.seccion] || g.seccion}</span></div>
              <p style="margin:0; font-size:13.5px; white-space:pre-wrap;">${g.texto}</p>
            </div>
          `).join('')}
        </div>
      `;
    }).join('')}
  `;
}

/* ---------- vista: lectura ---------- */
function openLectura(id){
  const l = getLectura(id);
  navPush('lectura', id, l.titulo.length > 40 ? l.titulo.slice(0,40) + '…' : l.titulo);
}
function openLecturaFresh(id){
  const l = getLectura(id);
  navReset('lectura', id, l.titulo.length > 40 ? l.titulo.slice(0,40) + '…' : l.titulo);
}
const LECTURA_ESTADOS = ['pendiente', 'en progreso', 'leída'];
const LECTURA_ESTADO_COLOR = { 'pendiente': 'coral', 'en progreso': 'cobalt', 'leída': 'mint' };
function renderLectura(id){
  const l = getLectura(id);
  const s = getSemana(l.semana);
  const wrap = document.getElementById('view-lectura-content');
  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Lectura ${l.tipo}</span>
    <h1 class="page-title">📚 ${l.titulo}</h1>

    <div class="kcard">
      <h3>ℹ️ Detalles</h3>
      <p><strong>Tipo:</strong> ${l.tipo === 'obligatoria' ? 'Lectura obligatoria' : l.tipo}</p>
      <p><strong>Semana:</strong> <a class="link-quiet" onclick="navPush('semana','${s.id}','Semana ${s.numero}')">Semana ${s.numero} — ${s.titulo}</a></p>
      ${l.url ? `<p><strong>Fuente:</strong> <a href="${l.url}" target="_blank" rel="noopener">Abrir enlace original ↗</a></p>` : `<p class="muted">Esta lectura todavía no tiene un enlace directo cargado — la referencia completa es la que ves en el título.</p>`}
    </div>

    <div class="kcard">
      <h3>📈 Tu estado de avance</h3>
      <div class="lectura-estados">
        ${LECTURA_ESTADOS.map(est => `
          <div class="lectura-estado-btn ${l.estado === est ? 'activo' : ''}" style="--estado-color: var(--${LECTURA_ESTADO_COLOR[est]})" onclick="setLecturaEstado('${l.id}','${est}')">${est}</div>
        `).join('')}
      </div>
    </div>

    <div class="section-block">
      <h3>✎ Apunte sobre esta lectura</h3>
      ${noteBlockHTML(l.id + '::general')}
    </div>
  `;
}
function setLecturaEstado(id, estado){
  const l = getLectura(id);
  l.estado = estado;
  if(estado !== 'pendiente') registrarEstudioHoy();
  navRenderCurrent();
}

/* ---------- vista: tema (anatomía/fisiología, no es enfermedad) ---------- */
function renderTema(id){
  const t = getTema(id);
  const wrap = document.getElementById('view-tema-content');
  const c = t.contenido;

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <div class="disease-header">
      <div>
        <span class="eyebrow">${t.area} · Anatomía y fisiología</span>
        <h1 class="page-title">${t.nombre}</h1>
      </div>
      <div class="toolbar">
        <div class="btn-icon" onclick="navCuaderno('tema','${t.id}')">⛶ Cuaderno a pantalla completa</div>
        ${t.casosClinicos ? `<div class="btn-icon" onclick="navCasos('${t.id}')">🩺 Casos clínicos</div>` : ''}
        ${t.casosClinicos ? `<div class="btn-icon" onclick="iniciarExamenTema('${t.id}')">📝 Ponte a prueba</div>` : ''}
        <div class="btn-icon" onclick="window.print()">🖨 Imprimir</div>
        <div class="btn-icon ${t.estudiado ? 'done' : ''}" onclick="toggleEstudiadoTema('${t.id}')">${t.estudiado ? '✓ Estudiado' : 'Marcar como estudiado'}</div>
      </div>
    </div>

    ${inlineCuadernoHTML(t.id + '::cuaderno-clase', 'ic-tema-' + t.id, 'Escribe aquí mientras lees')}

    <div class="section-toc" id="tema-toc"></div>

    <div class="kcard">
      <h3>📝 Resumen</h3>
      <p>${c.resumen}</p>
    </div>

    <div class="kcard">
      <h3>🔑 Estructuras clave</h3>
      ${c.estructuras.map(e => `
        <div class="tema-estructura">
          <p><strong>${e.nombre}:</strong> ${e.detalle}</p>
          ${(e.imagenes && e.imagenes.length) ? `
          <div class="tema-imagenes">
            ${e.imagenes.map(im => `
              <figure class="tema-figura" onclick="openImageLightbox('${im.src}')">
                <img src="${im.src}" alt="${im.caption}" loading="lazy">
                <figcaption>${im.caption}</figcaption>
              </figure>
              ${im.explicacion ? `<p style="flex-basis:100%; max-width:640px;">${im.explicacion}</p>` : ''}
            `).join('')}
          </div>` : ''}
        </div>
      `).join('')}
    </div>

    <div class="mcard">
      <h3>🧬 Cómo funciona normalmente</h3>
      <p>${c.fisiologiaNormal}</p>
    </div>

    ${c.tablasClinicas ? c.tablasClinicas.map(tb => `
    <div class="kcard">
      <h3>${tb.titulo}</h3>
      ${tb.contexto ? `<p>${tb.contexto}</p>` : ''}
      <table class="compare">
        <tr>${tb.columnas.map(col => `<th>${col}</th>`).join('')}</tr>
        ${tb.filas.map(fila => `<tr>${fila.map(celda => `<td>${celda}</td>`).join('')}</tr>`).join('')}
      </table>
      ${tb.nota ? `<p class="muted" style="margin-top:8px;">${tb.nota}</p>` : ''}
    </div>`).join('') : ''}

    <div class="pcard">
      <h3>🔗 Por qué importa (correlación clínica)</h3>
      <p>${c.correlacionClinica}</p>
    </div>

    <div class="pcard">
      <h3>⭐ Puntos clave</h3>
      <div class="chip-list">
        ${c.puntosClave.map((x,i) => `<div class="chip"><span class="n">${String(i+1).padStart(2,'0')}</span><span>${x}</span></div>`).join('')}
      </div>
    </div>

    ${c.asiLoPreguntanExamen ? `
    <div class="ccard">
      <h3>🎯 Así lo preguntan en tu examen</h3>
      <p>${c.asiLoPreguntanExamen.intro}</p>
      ${c.asiLoPreguntanExamen.ejercicios.map((ej, i) => `
        <div style="margin-top:12px; padding-top:12px; border-top:1px solid var(--line);">
          <p style="font-size:11px; text-transform:uppercase; letter-spacing:0.04em; font-weight:800; color:var(--coral);">${ej.tipo}</p>
          <p><strong>Planteamiento:</strong> ${ej.planteamiento}</p>
          <div class="btn-icon" style="margin-top:8px; display:table;" onclick="toggleRespuestaExamen('${t.id}-examen-${i}', this)">👁️ Ver respuesta modelo</div>
          <p id="${t.id}-examen-${i}" class="muted" style="display:none; margin-top:8px;"><strong>Respuesta modelo:</strong> ${ej.respuestaModelo}</p>
        </div>
      `).join('')}
    </div>` : ''}

    ${t.pdfOrigen ? `
    <div class="kcard" style="border:1.5px dashed var(--cobalt-line);">
      <h3>📄 PDF original de esta clase</h3>
      <p class="muted">${t.pdfOrigen.titulo}</p>
      <div class="toolbar" style="margin-top:8px;">
        <div class="btn-icon" onclick="abrirVistaDividida('tema', '${t.id}')">📖✎ Ver PDF + escribir a la vez</div>
        <div class="btn-icon" onclick="window.open('${t.pdfOrigen.url}', '_blank')">↗ Abrir en pestaña nueva</div>
      </div>
    </div>` : ''}

    <div class="section-block">
      <h3>✎ Apunte</h3>
      ${noteBlockHTML(t.id + '::general')}
    </div>
  `;
  buildSectionToc('view-tema-content', 'tema-toc');
  markHighlightZones('view-tema-content', t.id);
  initInlineCuaderno(t.id + '::cuaderno-clase', 'ic-tema-' + t.id);
}
/* muestra/oculta la respuesta modelo de un ejercicio de "Así lo preguntan en tu examen",
   para que primero razones tú mismo antes de ver la respuesta */
function toggleRespuestaExamen(elId, btnEl){
  const el = document.getElementById(elId);
  if(!el) return;
  const oculta = el.style.display === 'none' || el.style.display === '';
  el.style.display = oculta ? 'block' : 'none';
  btnEl.textContent = oculta ? '🙈 Ocultar respuesta' : '👁️ Ver respuesta modelo';
}

function toggleEstudiadoTema(id){
  const t = getTema(id);
  t.estudiado = !t.estudiado;
  navRenderCurrent();
}

/* ---------- vista: enfermedad ---------- */
function renderEnfermedad(id){
  const e = getEnfermedad(id);
  const wrap = document.getElementById('view-enfermedad-content');
  const esRespiratoria = e.area === 'Neumología';

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <div class="disease-header">
      <div>
        <span class="eyebrow">${e.area}</span>
        <h1 class="page-title">${e.nombre}</h1>
      </div>
      <div class="toolbar">
        <div class="btn-icon" onclick="navCasos('${e.id}')">🩺 Casos clínicos</div>
        <div class="btn-icon" onclick="iniciarExamenEnfermedad('${e.id}')">📝 Ponte a prueba</div>
        <div class="btn-icon" onclick="navCuaderno('enfermedad','${e.id}')">⛶ Cuaderno a pantalla completa</div>
        <div class="btn-icon" onclick="window.print()">🖨 Imprimir</div>
        <div class="btn-icon ${e.estudiado ? 'done' : ''}" onclick="toggleEstudiado('${e.id}', true)">${e.estudiado ? '✓ Estudiado' : 'Marcar como estudiado'}</div>
        <div class="star" style="font-size:24px" onclick="toggleFavorito('${e.id}', true)">${e.favorito ? '★' : '☆'}</div>
      </div>
    </div>

    ${inlineCuadernoHTML(e.id + '::cuaderno-clase', 'ic-enf-' + e.id, 'Escribe aquí mientras lees')}

    ${e.relacionadas && e.relacionadas.length ? `
      <div class="mcard">
        <h3>🔗 Enfermedades relacionadas</h3>
        ${e.relacionadas.map(r => {
          const rel = getEnfermedad(r.id);
          if(!rel) return '';
          return `<div class="alert" style="border-color:var(--lavender-line); background:#fff; cursor:pointer;" onclick="openEnfermedad('${rel.id}')">
            <span class="label" style="color:#6a58d6">${rel.nombre} →</span>${r.relacion}
          </div>`;
        }).join('')}
      </div>` : ''}

    ${e.estudiado ? nexuMessageHTML('<strong>¡Bien!</strong> Ya marcaste esta enfermedad como estudiada.') : ''}

    ${esRespiratoria ? `
      <div class="illustration-card">
        ${e.ilustracion
          ? `<img src="${e.ilustracion}" alt="Ilustración de ${e.nombre}" style="width:100%; height:auto; display:block;">`
          : (e.tipoIlustracion === 'alveolar' ? alveoloIllustration() : airwayIllustration('obstructivo'))}
        <div class="cap">${e.ilustracion ? 'Vía aérea normal vs. ' + e.nombre : (e.tipoIlustracion === 'alveolar' ? 'Alvéolo normal vs. consolidación por infección' : 'Corte transversal de vía aérea — normal vs. patrón obstructivo')}</div>
      </div>` : ''}

    <div class="doctor-notes" id="doctor-notes-${e.id}">
      <div class="dn-head dn-toggle" onclick="toggleDoctorNotes(document.getElementById('doctor-notes-${e.id}'), '${e.id}::apuntes-doctor-dibujo')">
        <span style="font-size:18px">👨‍⚕️</span><h3>Apuntes del doctor</h3>
        <span class="dn-chevron">▾</span>
      </div>
      <div class="dn-body">
        <div style="display:flex; justify-content:flex-end; margin-bottom:6px;">
          <span class="btn-icon mic-btn" id="mic-btn-${e.id}" style="display:none" onclick="event.stopPropagation(); toggleDictado('${e.id}')">🎤 Dictar</span>
        </div>
        <p class="dn-sub">Cosas que dijo el profesor en clase y que no están en las diapositivas.</p>
        <div class="note-editable hl-zone" id="doctor-note-${e.id}" contenteditable="true" data-hl-key="note::${e.id}::apuntes-doctor"
          data-placeholder="Ej: el Dr. mencionó que en la práctica prefiere empezar con..."
          oninput="handleNoteInput('${e.id}::apuntes-doctor','doctor-note-${e.id}')">${(() => { const v = notesAdapter.get(e.id + '::apuntes-doctor'); return /<[a-z][\s\S]*>/i.test(v) ? v : v.replace(/\n/g, '<br>'); })()}</div>
        <div class="btn-icon" style="margin-top:10px" onclick="event.stopPropagation(); navCuaderno('enfermedad','${e.id}')">✏️ ¿Prefieres dibujar? Abre tu cuaderno de clase</div>
      </div>
    </div>

    <div class="mode-tabs">
      <div class="mode-tab active" data-mode="profundo" onclick="switchMode(this,'profundo')">Modo profundo</div>
      <div class="mode-tab" data-mode="repaso" onclick="switchMode(this,'repaso')">Modo repaso</div>
      <div class="mode-tab" data-mode="imprescindible" onclick="switchMode(this,'imprescindible')">Imprescindible</div>
    </div>

    <div class="section-toc" id="section-toc"></div>

    <div class="mode-panel active" id="panel-profundo">${renderProfundo(e.profundo, e.id)}${modePagerHTML('profundo')}</div>
    <div class="mode-panel" id="panel-repaso">${renderRepaso(e.repaso, e.id)}${modePagerHTML('repaso')}</div>
    <div class="mode-panel" id="panel-imprescindible">${renderImprescindible(e.imprescindible, e.id)}${modePagerHTML('imprescindible')}</div>
  `;

  // muestra el botón de dictado solo si el navegador lo soporta (Chrome sí, Safari iOS no)
  const micBtn = document.getElementById('mic-btn-' + e.id);
  if(micBtn && (window.SpeechRecognition || window.webkitSpeechRecognition)){
    micBtn.style.display = 'inline-flex';
  }

  // expande "Apuntes del doctor" automáticamente solo si tiene texto real (no solo un <br> vacío)
  const dnBox = document.getElementById('doctor-notes-' + e.id);
  const hasNote = notesAdapter.get(e.id + '::apuntes-doctor').replace(/<[^>]*>/g, '').trim().length > 0;
  if(dnBox && hasNote) dnBox.classList.add('expanded');

  // construye el índice interno (mini-TOC) para el modo activo
  buildSectionToc('panel-profundo', 'section-toc');
  // hace colapsables las tarjetas de Modo Profundo (menos muro de texto)
  makeCardsCollapsible('panel-profundo');
  // marca todas las tarjetas de los 3 modos como resaltables
  markHighlightZones('panel-profundo', e.id);
  markHighlightZones('panel-repaso', e.id);
  markHighlightZones('panel-imprescindible', e.id);

  initInlineCuaderno(e.id + '::cuaderno-clase', 'ic-enf-' + e.id);
}

/* ---------- dictado por voz para "Apuntes del doctor" (Chrome/Android; no soportado en Safari/iOS) ---------- */
let recognitionInstance = null;
let recognitionActiveFor = null;

function toggleDictado(diseaseId){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition) return;
  const btn = document.getElementById('mic-btn-' + diseaseId);
  const editable = document.getElementById('doctor-note-' + diseaseId);

  if(recognitionActiveFor === diseaseId){
    recognitionInstance.stop();
    return;
  }
  if(recognitionInstance){ try{ recognitionInstance.stop(); }catch(e){} }

  const rec = new SpeechRecognition();
  rec.lang = 'es-PE';
  rec.continuous = true;
  rec.interimResults = true;

  let baseText = editable.textContent ? editable.textContent.trim() + ' ' : '';

  rec.onresult = (event) => {
    let interim = '', final = '';
    for(let i = event.resultIndex; i < event.results.length; i++){
      const transcript = event.results[i][0].transcript;
      if(event.results[i].isFinal) final += transcript + ' ';
      else interim += transcript;
    }
    if(final) baseText += final;
    editable.textContent = baseText + interim;
    handleNoteInput(diseaseId + '::apuntes-doctor', 'doctor-note-' + diseaseId);
  };
  const stopUI = () => {
    recognitionActiveFor = null;
    if(btn){ btn.textContent = '🎤 Dictar'; btn.classList.remove('recording'); }
  };
  rec.onend = stopUI;
  rec.onerror = stopUI;

  recognitionInstance = rec;
  recognitionActiveFor = diseaseId;
  if(btn){ btn.textContent = '⏹ Detener'; btn.classList.add('recording'); }
  rec.start();
}

function buildSectionToc(containerId, tocId){
  const container = document.getElementById(containerId);
  const tocEl = document.getElementById(tocId);
  if(!container || !tocEl) return;
  const cards = container.querySelectorAll(':scope > .kcard, :scope > .mcard, :scope > .ccard, :scope > .pcard, :scope > .rcard, :scope > .gcard, :scope > .icard, :scope > .illustration-card, :scope > .doctor-notes');
  const pills = [];
  cards.forEach((card, i) => {
    const h3 = card.querySelector('h3');
    if(!h3) return;
    const secId = `${containerId}-sec-${i}`;
    card.id = secId;
    const label = h3.textContent.replace(/[🧬🔗⭐🚩⚠️✨👨‍⚕️]/g, '').trim();
    pills.push(`<span class="section-toc-item" onclick="document.getElementById('${secId}').scrollIntoView({behavior:'smooth', block:'start'})">${label}</span>`);
  });
  tocEl.innerHTML = pills.join('');
}

/* hace colapsables las tarjetas de Modo Profundo (la primera queda abierta,
   el resto se puede expandir tocando el título) — así la página se ve como
   un índice escaneable en vez de un muro de texto desde que entras */
function makeCardsCollapsible(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  const cards = container.querySelectorAll(':scope > .kcard, :scope > .mcard, :scope > .ccard, :scope > .pcard, :scope > .rcard, :scope > .gcard, :scope > .icard');
  cards.forEach((card, i) => {
    if(card.dataset.collapsible === 'done') return;
    const h3 = card.querySelector('h3');
    if(!h3) return;
    const bodyChildren = Array.from(card.children).filter(ch => ch !== h3);
    const body = document.createElement('div');
    body.className = 'card-body';
    bodyChildren.forEach(ch => body.appendChild(ch));
    card.appendChild(body);
    h3.classList.add('card-toggle');
    h3.innerHTML += ' <span class="card-chevron">▾</span>';
    h3.addEventListener('click', () => card.classList.toggle('card-open'));
    card.dataset.collapsible = 'done';
    if(i === 0) card.classList.add('card-open');
  });
}

/* marca las tarjetas de un panel como zonas resaltables (independiente del TOC/colapsables) */
function markHighlightZones(containerId, entidadId){
  const container = document.getElementById(containerId);
  if(!container) return;
  const cards = container.querySelectorAll(':scope > .kcard, :scope > .mcard, :scope > .ccard, :scope > .pcard, :scope > .rcard, :scope > .gcard, :scope > .icard');
  cards.forEach((card, i) => {
    const body = card.querySelector('.card-body') || card;
    body.classList.add('hl-zone');
    body.dataset.hlKey = entidadId + '::' + containerId + '::' + i;
  });
  restoreZoneHighlights('#' + containerId);
}

function switchMode(tabEl, mode){
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  document.querySelectorAll('.mode-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + mode).classList.add('active');
  buildSectionToc('panel-' + mode, 'section-toc');
  window.scrollTo(0,0);
}
function switchModeByName(mode){
  const tabEl = document.querySelector(`.mode-tab[data-mode="${mode}"]`);
  if(tabEl) switchMode(tabEl, mode);
}

const MODE_ORDER = ['profundo', 'repaso', 'imprescindible'];
const MODE_LABELS = { profundo: 'Modo profundo', repaso: 'Modo repaso', imprescindible: 'Imprescindible' };
function modePagerHTML(current){
  const i = MODE_ORDER.indexOf(current);
  const prev = MODE_ORDER[i - 1];
  const next = MODE_ORDER[i + 1];
  return `
    <div class="mode-pager">
      ${prev ? `<div class="btn-icon" onclick="switchModeByName('${prev}')">← ${MODE_LABELS[prev]}</div>` : '<span></span>'}
      ${next ? `<div class="btn-icon" onclick="switchModeByName('${next}')">${MODE_LABELS[next]} →</div>` : '<span></span>'}
    </div>
  `;
}

/* ---------- MODO PROFUNDO: knowledge / mechanism / pearl cards ---------- */
function renderProfundo(p, diseaseId){
  const enfermedad = getEnfermedad(diseaseId);
  return `
    <div class="kcard">
      <h3>📝 Definición y epidemiología</h3>
      <p>${p.definicion}</p>
      <p class="muted">${p.epidemiologia}</p>
    </div>

    <div class="icard">
      <h3>⚠️ Etiología y factores de riesgo</h3>
      <ul>${p.etiologiaFactoresRiesgo.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    <div class="mcard">
      <h3>🧬 Fisiopatología</h3>
      <p class="muted">${p.fisiopatologia.resumen}</p>
      <div class="fisio-grid">
        <div class="cascade">
          ${p.fisiopatologia.cascada.map(c => {
            const cat = cascadeCategoryFor(c.paso);
            return `
            <div class="cascade-step">
              <div class="cascade-marker">
                <div class="cascade-icon ${cat}">${cascadeIconFor(c.paso)}</div>
                <div class="cascade-line"></div>
              </div>
              <div class="cascade-body">
                <div class="cascade-title">${c.paso}</div>
                <div class="cascade-detail">${c.detalle}</div>
              </div>
            </div>`;
          }).join('')}
        </div>
        <div class="fisio-explicacion">
          ${p.fisiopatologia.explicacionExtendida ? p.fisiopatologia.explicacionExtendida.split('\n\n').map(par => `<p>${par}</p>`).join('') : '<p class="muted">Sin explicación extendida todavía para esta enfermedad.</p>'}
        </div>
      </div>
      ${p.fisiopatologia.imagenes ? `
      <div class="tema-imagenes" style="margin-top:14px; flex-direction:column;">
        ${p.fisiopatologia.imagenes.map(im => `
          <figure class="tema-figura" style="width:100%; max-width:520px;" onclick="openImageLightbox('${im.src}')">
            <img src="${im.src}" alt="${im.caption}" loading="lazy" style="height:auto;">
            <figcaption>${im.caption}</figcaption>
          </figure>
          ${im.explicacion ? `<p style="max-width:640px;">${im.explicacion}</p>` : ''}
        `).join('')}
      </div>` : ''}
      ${p.mecanismoEpitelial ? `<p style="margin-top:14px"><strong>Mecanismo celular clave:</strong> ${p.mecanismoEpitelial}</p>` : ''}
      ${noteBlockHTML(diseaseId + '::fisiopatologia', 'Tu explicación con tus propias palabras...')}
    </div>

    ${enfermedad.clasificacionGravedad ? `
    <div class="kcard">
      <h3>${enfermedad.clasificacionGravedad.titulo}</h3>
      <table class="compare">
        <tr><th>Categoría</th><th>Criterio</th></tr>
        ${enfermedad.clasificacionGravedad.categorias.map(c => `<tr><td>${c.nombre}</td><td>${c.criterio}</td></tr>`).join('')}
      </table>
    </div>` : ''}

    ${p.criteriosDiagnosticos ? `
    <div class="icard">
      <h3>📋 Criterios diagnósticos</h3>
      <p>${p.criteriosDiagnosticos}</p>
    </div>` : ''}

    ${p.tablasClinicas ? p.tablasClinicas.map(t => `
    <div class="kcard">
      <h3>${t.titulo}</h3>
      ${t.contexto ? `<p>${t.contexto}</p>` : ''}
      <table class="compare">
        <tr>${t.columnas.map(c => `<th>${c}</th>`).join('')}</tr>
        ${t.filas.map(fila => `<tr>${fila.map(celda => `<td>${celda}</td>`).join('')}</tr>`).join('')}
      </table>
      ${t.nota ? `<p class="muted" style="margin-top:8px;">${t.nota}</p>` : ''}
    </div>`).join('') : ''}

    ${p.catScore ? `
    <div class="pcard">
      <h3>📝 CAT score</h3>
      <p>${p.catScore}</p>
    </div>` : ''}

    ${p.endotiposInflamacion ? `
    <div class="mcard">
      <h3>🧬 Endotipos de inflamación</h3>
      <p>${p.endotiposInflamacion}</p>
    </div>` : ''}

    <div class="kcard">
      <h3>🩺 Clínica</h3>
      <ul>${p.clinica.map(c => `<li><strong>${c.signo}:</strong> ${c.detallePPT || ''} <span class="muted">— <strong>por qué pasa:</strong> ${c.mecanismo}</span></li>`).join('')}</ul>
    </div>

    <div class="kcard">
      <h3>🖐️ Examen físico</h3>
      <ul>${p.examenFisico.map(x => `<li>${x}</li>`).join('')}</ul>
      ${p.imagenExamenFisico ? `
      <figure class="tema-figura" style="width:100%; max-width:420px; margin-top:12px;" onclick="openImageLightbox('${p.imagenExamenFisico.src}')">
        <img src="${p.imagenExamenFisico.src}" alt="${p.imagenExamenFisico.caption}" loading="lazy" style="height:auto;">
        <figcaption>${p.imagenExamenFisico.caption}</figcaption>
      </figure>
      ${p.imagenExamenFisico.explicacion ? `<p style="margin-top:8px;">${p.imagenExamenFisico.explicacion}</p>` : ''}` : ''}
    </div>

    ${p.semiologia ? `
    <div class="pcard">
      <h3>🩺 ¿Cómo lo examino?</h3>
      <div class="semio-block">
        <div class="semio-step"><span class="semio-label">👀 Inspección</span><p>${p.semiologia.inspeccion}</p></div>
        <div class="semio-step"><span class="semio-label">✋ Palpación</span><p>${p.semiologia.palpacion}</p></div>
        <div class="semio-step"><span class="semio-label">👊 Percusión</span><p>${p.semiologia.percusion}</p></div>
        <div class="semio-step"><span class="semio-label">🩺 Auscultación</span><p>${p.semiologia.auscultacion}</p></div>
      </div>
    </div>` : ''}

    <div class="icard">
      <h3>🔬 Diagnóstico y diferenciales</h3>
      <p>${p.diagnostico}</p>
      <p class="muted"><strong>Diferenciales:</strong> ${p.diagnosticoDiferencial.join(', ')}</p>
    </div>

    ${p.historiaClinica ? `
    <div class="kcard">
      <h3>🗂️ Qué debe incluir la historia clínica</h3>
      <p>${p.historiaClinica}</p>
    </div>` : ''}

    ${p.biomarcadoresEImagenes ? `
    <div class="mcard">
      <h3>🔬 Biomarcadores e imágenes</h3>
      <p>${p.biomarcadoresEImagenes}</p>
    </div>` : ''}

    ${p.algoritmo ? `
    <div class="mcard">
      <h3>🔀 Algoritmo de decisión</h3>
      ${algoritmoDiagramaHTML(p.algoritmo)}
    </div>` : ''}

    <div class="gcard">
      <h3>💊 Tratamiento</h3>
      <p><strong>No farmacológico:</strong></p>
      <ul>${p.tratamiento.noFarmacologico.map(x => `<li>${x}</li>`).join('')}</ul>
      <p><strong>Farmacológico:</strong></p>
      <ul>${p.tratamiento.farmacologico.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    ${p.exacerbaciones ? `
    <div class="ccard">
      <h3>⚡ Exacerbaciones</h3>
      <p>${p.exacerbaciones.definicion}</p>
      <table class="compare">
        <tr><th>Gravedad</th><th>Manejo</th></tr>
        ${p.exacerbaciones.clasificacion.map(fila => `<tr><td>${fila[0]}</td><td>${fila[1]}</td></tr>`).join('')}
      </table>
      ${p.exacerbaciones.criteriosAnthonisen ? `<p style="margin-top:8px;">${p.exacerbaciones.criteriosAnthonisen}</p>` : ''}
    </div>` : ''}

    ${p.intervencionesQueReducenMortalidad ? `
    <div class="pcard">
      <h3>❤️‍🩹 Intervenciones que reducen mortalidad</h3>
      <ul>${p.intervencionesQueReducenMortalidad.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>` : ''}

    <div class="ccard">
      <h3>⚡ Complicaciones</h3>
      <ul>${p.complicaciones.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    <div class="pcard">
      <h3>✨ Perla clínica</h3>
      <p>${p.perlasProfundo}</p>
    </div>

    ${p.asiLoPreguntanExamen ? `
    <div class="ccard">
      <h3>🎯 Así lo preguntan en tu examen</h3>
      <p>${p.asiLoPreguntanExamen.intro}</p>
      ${p.asiLoPreguntanExamen.ejercicios.map((ej, i) => `
        <div style="margin-top:12px; padding-top:12px; border-top:1px solid var(--line);">
          <p style="font-size:11px; text-transform:uppercase; letter-spacing:0.04em; font-weight:800; color:var(--coral);">${ej.tipo}</p>
          <p><strong>Planteamiento:</strong> ${ej.planteamiento}</p>
          <div class="btn-icon" style="margin-top:8px; display:table;" onclick="toggleRespuestaExamen('${diseaseId}-examen-${i}', this)">👁️ Ver respuesta modelo</div>
          <p id="${diseaseId}-examen-${i}" class="muted" style="display:none; margin-top:8px;"><strong>Respuesta modelo:</strong> ${ej.respuestaModelo}</p>
        </div>
      `).join('')}
    </div>` : ''}

    ${enfermedad.pdfOrigen ? `
    <div class="kcard" style="border:1.5px dashed var(--cobalt-line);">
      <h3>📄 PDF original de esta clase</h3>
      <p class="muted">${enfermedad.pdfOrigen.titulo}</p>
      <div class="toolbar" style="margin-top:8px;">
        <div class="btn-icon" onclick="abrirVistaDividida('enfermedad', '${diseaseId}')">📖✎ Ver PDF + escribir a la vez</div>
        <div class="btn-icon" onclick="window.open('${enfermedad.pdfOrigen.url}', '_blank')">↗ Abrir en pestaña nueva</div>
      </div>
    </div>` : ''}

    <div class="section-block">
      <h3>✎ Apunte general — modo profundo</h3>
      ${noteBlockHTML(diseaseId + '::profundo-general')}
    </div>
  `;
}

/* ---------- MODO REPASO ---------- */
function renderRepaso(r, diseaseId){
  const tabla = r.tablaComparativa ? `
    <h3 style="margin-top:16px">${r.tablaComparativa.titulo}</h3>
    <table class="compare">
      <tr><th>Criterio</th><th>Opción A</th><th>Opción B</th></tr>
      ${r.tablaComparativa.filas.map(f => `<tr>${f.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
    </table>` : '';

  return `
    <div class="kcard">
      <h3>🔑 Conceptos clave</h3>
      <ul>${r.conceptosClave.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    ${r.chuletaRapida ? `
    <div class="kcard">
      <h3>${r.chuletaRapida.titulo}</h3>
      <table class="compare">
        <tr>${r.chuletaRapida.columnas.map(c => `<th>${c}</th>`).join('')}</tr>
        ${r.chuletaRapida.filas.map(fila => `<tr>${fila.map(celda => `<td>${celda}</td>`).join('')}</tr>`).join('')}
      </table>
      <p class="muted" style="margin-top:8px;">${r.chuletaRapida.nota}</p>
    </div>` : ''}

    <div class="kcard">
      <h3>⚡ Resumen rápido</h3>
      <p><strong>Clínica:</strong> ${r.clinica}</p>
      <p><strong>Diagnóstico:</strong> ${r.diagnostico}</p>
      <p><strong>Tratamiento:</strong> ${r.tratamientoResumen}</p>
    </div>

    <div class="mcard">
      <h3>⚖️ Diferenciales rápidos</h3>
      <ul>${r.diferenciales.map(d => `<li><strong>${d.entidad}:</strong> ${d.clave}</li>`).join('')}</ul>
      ${tabla}
    </div>

    <div class="section-block">
      <h3>✎ Apunte — repaso</h3>
      ${noteBlockHTML(diseaseId + '::repaso')}
    </div>
  `;
}

/* ---------- MODO IMPRESCINDIBLE ---------- */
function renderImprescindible(im, diseaseId){
  return `
    <div class="pcard">
      <h3>⭐ Lo que sí o sí debes saber</h3>
      <div class="chip-list">
        ${im.loQueSiOSiDebesSaber.map((x,i) => `<div class="chip"><span class="n">${String(i+1).padStart(2,'0')}</span><span>${x}</span></div>`).join('')}
      </div>
    </div>

    <div class="ccard">
      <h3>🚩 Red flags</h3>
      ${im.redFlags.map(x => `<div class="alert red"><span class="label">Alerta</span>${x}</div>`).join('')}
    </div>

    <div class="rcard">
      <h3>⚠️ Errores frecuentes</h3>
      ${im.erroresFrecuentes.map(x => `<div class="alert amber"><span class="label">Cuidado</span>${x}</div>`).join('')}
    </div>

    <div class="mcard">
      <h3>🔗 Asociaciones clínicas</h3>
      ${im.asociacionesClinicas.map(x => `<div class="alert green"><span class="label">Asociación</span>${x}</div>`).join('')}
    </div>

    <div class="section-block">
      <h3>✎ Apunte — lo imprescindible</h3>
      ${noteBlockHTML(diseaseId + '::imprescindible')}
    </div>
  `;
}

/* ---------- favoritos / estudiado ---------- */
function toggleFavorito(id, fromDetail){
  const e = getEnfermedad(id);
  e.favorito = !e.favorito;
  saveFlags();
  navRenderCurrent();
}
function toggleEstudiado(id, fromDetail){
  const e = getEnfermedad(id);
  e.estudiado = !e.estudiado;
  saveFlags();
  if(e.estudiado) registrarEstudioHoy();
  navRenderCurrent();
}

/* ---------- buscador global (siempre inicia una ruta nueva desde Inicio) ---------- */
function openTemaFresh(id){ const t = getTema(id); navReset('tema', id, t.nombre); }

/* aplana el contenido de una enfermedad en un solo texto buscable,
   para que el buscador encuentre términos dentro del contenido
   (ej. "hipoxemia") y no solo en el nombre de la enfermedad */
function flattenEnfermedadTexto(e){
  const p = e.profundo || {};
  const partes = [
    p.definicion, p.epidemiologia,
    (p.etiologiaFactoresRiesgo || []).join(' '),
    p.fisiopatologia && p.fisiopatologia.resumen,
    ((p.fisiopatologia && p.fisiopatologia.cascada) || []).map(c => c.paso + ' ' + c.detalle).join(' '),
    (p.clinica || []).map(c => c.signo + ' ' + c.mecanismo).join(' '),
    (p.examenFisico || []).join(' '),
    p.diagnostico, (p.diagnosticoDiferencial || []).join(' '),
    p.tratamiento && [...(p.tratamiento.noFarmacologico||[]), ...(p.tratamiento.farmacologico||[])].join(' '),
    (p.complicaciones || []).join(' '), p.prevencion, p.perlasProfundo,
    p.semiologia && [p.semiologia.inspeccion, p.semiologia.palpacion, p.semiologia.percusion, p.semiologia.auscultacion].join(' '),
    e.repaso && [(e.repaso.conceptosClave||[]).join(' '), e.repaso.clinica, e.repaso.tratamientoResumen].join(' '),
    e.imprescindible && [(e.imprescindible.loQueSiOSiDebesSaber||[]).join(' '), (e.imprescindible.redFlags||[]).join(' '), (e.imprescindible.erroresFrecuentes||[]).join(' '), (e.imprescindible.asociacionesClinicas||[]).join(' ')].join(' ')
  ];
  return partes.filter(Boolean).join(' ').toLowerCase();
}
function flattenTemaTexto(t){
  const c = t.contenido || {};
  const partes = [
    c.resumen, (c.estructuras||[]).map(e => e.nombre + ' ' + e.detalle).join(' '),
    c.fisiologiaNormal, c.correlacionClinica, (c.puntosClave||[]).join(' ')
  ];
  return partes.filter(Boolean).join(' ').toLowerCase();
}
function snippetAround(texto, q, len){
  len = len || 70;
  const i = texto.indexOf(q);
  if(i === -1) return texto.slice(0, len) + '…';
  const start = Math.max(0, i - 25);
  return (start > 0 ? '…' : '') + texto.slice(start, start + len) + '…';
}

function buildSearchIndex(){
  const index = [];
  ENFERMEDADES.forEach(e => index.push({ tipo: 'Enfermedad', nombre: e.nombre, sub: e.area, cuerpo: flattenEnfermedadTexto(e), action: () => openEnfermedadFresh(e.id) }));
  TEMAS.forEach(t => index.push({ tipo: 'Anatomía/Fisiología', nombre: t.nombre, sub: t.area, cuerpo: flattenTemaTexto(t), action: () => openTemaFresh(t.id) }));
  SEMANAS.forEach(s => index.push({ tipo: 'Semana', nombre: `Semana ${s.numero} — ${s.titulo}`, sub: s.rango, cuerpo: '', action: () => openSemanaFresh(s.id) }));
  LECTURAS.forEach(l => index.push({ tipo: 'Lectura', nombre: l.titulo, sub: l.tipo, cuerpo: '', action: () => openLecturaFresh(l.id) }));
  return index;
}

function initSearch(){
  const input = document.getElementById('global-search');
  const results = document.getElementById('search-results');
  const index = buildSearchIndex();

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if(!q){ results.classList.remove('show'); results.innerHTML=''; return; }

    // prioriza coincidencias en el nombre; si no hay suficientes, agrega coincidencias en el contenido
    const porNombre = index.filter(item => item.nombre.toLowerCase().includes(q));
    const porContenido = index.filter(item => !item.nombre.toLowerCase().includes(q) && item.cuerpo.includes(q));
    const matches = [...porNombre, ...porContenido].slice(0, 8);

    if(matches.length === 0){
      results.innerHTML = `<a><span class="tag">Sin resultados</span><br>Prueba con otro término</a>`;
    } else {
      results.innerHTML = matches.map((m,i) => {
        const enNombre = m.nombre.toLowerCase().includes(q);
        const subtext = enNombre ? m.sub : `coincide en contenido: "${snippetAround(m.cuerpo, q)}"`;
        return `<a onclick="searchIndexActions[${i}]()"><span class="tag">${m.tipo}</span><br>${m.nombre} <span class="muted">— ${subtext}</span></a>`;
      }).join('');
      window.searchIndexActions = matches.map(m => () => { m.action(); results.classList.remove('show'); input.value=''; });
    }
    results.classList.add('show');
  });

  document.addEventListener('click', (ev) => {
    if(!results.contains(ev.target) && ev.target !== input){ results.classList.remove('show'); }
  });
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  loadFlags();
  loadDarkMode();
  initHighlighting();
  navRenderCurrent();
  initSearch();

  if('serviceWorker' in navigator){
    // { updateViaCache: 'none' } obliga al navegador a pedir sw.js SIEMPRE
    // directo al servidor, nunca desde su caché HTTP normal — sin esto, el
    // navegador puede comparar contra una copia vieja de sw.js guardada en
    // caché y nunca darse cuenta de que hay una versión nueva.
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).then((reg) => {
      // revisa si hay una versión nueva cada vez que se abre la app
      reg.update();
      reg.addEventListener('updatefound', () => {
        const nuevo = reg.installing;
        if(!nuevo) return;
        nuevo.addEventListener('statechange', () => {
          if(nuevo.state === 'installed' && navigator.serviceWorker.controller){
            // ya se instaló la versión nueva — recarga sola, sin que tengas que hacer nada
            window.location.reload();
          }
        });
      });
    }).catch(() => {
      /* si falla (ej. abierto como archivo local sin http), la app
         sigue funcionando normal, solo sin caché offline avanzado */
    });

    // respaldo: si el service worker que controla la página cambia
    // (por skipWaiting + clients.claim), recarga una sola vez para
    // asegurar que se vea la versión nueva sin intervención manual
    if(typeof navigator.serviceWorker.addEventListener === 'function'){
      let refrescandoPorSW = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if(refrescandoPorSW) return;
        refrescandoPorSW = true;
        window.location.reload();
      });
    }
  }

  if(typeof firebase !== 'undefined'){
    initFirebase();
  }
});
