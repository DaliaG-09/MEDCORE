/* ============================================================
   MEDCORE — modo autoevaluación (flashcards de recall activo)
   ------------------------------------------------------------
   No se inventa contenido nuevo: arma preguntas y respuestas a
   partir de lo que YA existe en cada enfermedad (imprescindible,
   perlas, diferenciales, clínica). Tapas la respuesta, intentas
   recordar, y recién ahí la revelas — así se estudia de verdad,
   no solo releyendo. Incluye marcador de aciertos y racha diaria.
   ============================================================ */

let quizState = null; // { cards, index, revealed, sourceLabel, aciertos, fallos, sourceKey }

function buildQuizCards(e){
  const cards = [];
  const p = e.profundo, r = e.repaso, im = e.imprescindible;

  (im.loQueSiOSiDebesSaber || []).forEach(x => {
    cards.push({ pregunta: '¿Qué es imprescindible saber sobre ' + e.nombre + '?', respuesta: x, tipo: 'imprescindible' });
  });
  (im.redFlags || []).forEach(x => {
    cards.push({ pregunta: '🚩 Red flag en ' + e.nombre + ' — ¿cuál es?', respuesta: x, tipo: 'red flag' });
  });
  (im.asociacionesClinicas || []).forEach(x => {
    cards.push({ pregunta: '🔗 Asociación clínica en ' + e.nombre, respuesta: x, tipo: 'asociación' });
  });
  (r.diferenciales || []).forEach(d => {
    cards.push({ pregunta: `¿Qué distingue a ${e.nombre} de ${d.entidad}?`, respuesta: d.clave, tipo: 'diferencial' });
  });
  if(p.perlasProfundo){
    cards.push({ pregunta: '✨ Perla clínica de ' + e.nombre, respuesta: p.perlasProfundo, tipo: 'perla' });
  }
  (p.clinica || []).forEach(c => {
    cards.push({ pregunta: `¿Por qué aparece "${c.signo}" en ${e.nombre}?`, respuesta: c.mecanismo, tipo: 'mecanismo' });
  });

  // baraja el orden para que no sea siempre igual
  for(let i = cards.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function buildQuizCards(e){
  const cards = [];
  const p = e.profundo, r = e.repaso, im = e.imprescindible;
  const nombre = e.nombre;

  (im.loQueSiOSiDebesSaber || []).forEach(x => {
    cards.push({ pregunta: '¿Qué es imprescindible saber sobre ' + nombre + '?', respuesta: x, tipo: 'imprescindible', origen: nombre });
  });
  (im.redFlags || []).forEach(x => {
    cards.push({ pregunta: '🚩 Red flag en ' + nombre + ' — ¿cuál es?', respuesta: x, tipo: 'red flag', origen: nombre });
  });
  (im.asociacionesClinicas || []).forEach(x => {
    cards.push({ pregunta: '🔗 Asociación clínica en ' + nombre, respuesta: x, tipo: 'asociación', origen: nombre });
  });
  (r.diferenciales || []).forEach(d => {
    cards.push({ pregunta: `¿Qué distingue a ${nombre} de ${d.entidad}?`, respuesta: d.clave, tipo: 'diferencial', origen: nombre });
  });
  if(p.perlasProfundo){
    cards.push({ pregunta: '✨ Perla clínica de ' + nombre, respuesta: p.perlasProfundo, tipo: 'perla', origen: nombre });
  }
  (p.clinica || []).forEach(c => {
    cards.push({ pregunta: `¿Por qué aparece "${c.signo}" en ${nombre}?`, respuesta: c.mecanismo, tipo: 'mecanismo', origen: nombre });
  });
  (p.etiologiaFactoresRiesgo || []).forEach(x => {
    cards.push({ pregunta: `¿Qué factor de riesgo se asocia a ${nombre}?`, respuesta: x, tipo: 'etiología', origen: nombre });
  });
  (p.examenFisico || []).forEach(x => {
    cards.push({ pregunta: `¿Qué hallazgo esperas en el examen físico de ${nombre}?`, respuesta: x, tipo: 'examen físico', origen: nombre });
  });
  if(p.semiologia){
    const s = p.semiologia;
    if(s.inspeccion) cards.push({ pregunta: `👀 En ${nombre}, ¿qué buscas en la inspección?`, respuesta: s.inspeccion, tipo: 'semiología', origen: nombre });
    if(s.palpacion) cards.push({ pregunta: `✋ En ${nombre}, ¿qué buscas en la palpación?`, respuesta: s.palpacion, tipo: 'semiología', origen: nombre });
    if(s.percusion) cards.push({ pregunta: `👊 En ${nombre}, ¿qué buscas en la percusión?`, respuesta: s.percusion, tipo: 'semiología', origen: nombre });
    if(s.auscultacion) cards.push({ pregunta: `🩺 En ${nombre}, ¿qué buscas en la auscultación?`, respuesta: s.auscultacion, tipo: 'semiología', origen: nombre });
  }
  (p.complicaciones || []).forEach(x => {
    cards.push({ pregunta: `¿Qué complicación puede presentar ${nombre}?`, respuesta: x, tipo: 'complicación', origen: nombre });
  });
  if(p.diagnostico){
    cards.push({ pregunta: `¿Cómo se diagnostica ${nombre}?`, respuesta: p.diagnostico, tipo: 'diagnóstico', origen: nombre });
  }
  if(p.tratamiento && p.tratamiento.farmacologico){
    p.tratamiento.farmacologico.forEach(x => {
      cards.push({ pregunta: `¿Qué tratamiento farmacológico se usa en ${nombre}?`, respuesta: x, tipo: 'tratamiento', origen: nombre });
    });
  }
  return cards;
}
function shuffleArray(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------- memoria de puntaje del quiz entre sesiones ---------- */
function getQuizStatsGuardados(sourceKey){
  try{ return JSON.parse(localStorage.getItem('medcore-quizstats::' + sourceKey) || '{"aciertos":0,"fallos":0}'); }
  catch(err){ return { aciertos: 0, fallos: 0 }; }
}
function guardarQuizStats(sourceKey, aciertos, fallos){
  const prev = getQuizStatsGuardados(sourceKey);
  localStorage.setItem('medcore-quizstats::' + sourceKey, JSON.stringify({ aciertos: prev.aciertos + aciertos, fallos: prev.fallos + fallos }));
}

function navQuiz(enfermedadId){
  const e = getEnfermedad(enfermedadId);
  navPush('quiz', 'enfermedad::' + enfermedadId, 'Ponte a prueba — ' + e.nombre);
}
function navQuizSemana(semanaId){
  const s = getSemana(semanaId);
  navPush('quiz', 'semana::' + semanaId, 'Repaso — Semana ' + s.numero);
}
function navQuizPreparar(semanaId, evalIndex){
  navPush('quiz', 'preparar::' + semanaId + '::' + evalIndex, 'Quiz combinado del examen');
}

function renderQuiz(compositeId){
  const partes = compositeId.split('::');
  const tipo = partes[0];
  let cards = [], sourceLabel = '';
  if(tipo === 'enfermedad'){
    const e = getEnfermedad(partes[1]);
    cards = buildQuizCards(e);
    sourceLabel = e.nombre;
  } else if(tipo === 'semana'){
    const s = getSemana(partes[1]);
    s.enfermedades.forEach(eid => { cards = cards.concat(buildQuizCards(getEnfermedad(eid))); });
    sourceLabel = 'Semana ' + s.numero + ' completa';
  } else if(tipo === 'preparar'){
    const s = getSemana(partes[1]);
    getEnfermedadesHastaSemana(s.numero).forEach(e => { cards = cards.concat(buildQuizCards(e)); });
    sourceLabel = 'Repaso combinado — hasta Semana ' + s.numero;
  }
  shuffleArray(cards);
  cards = cards.slice(0, 20); // máximo 20 preguntas por sesión, elegidas al azar del banco disponible
  quizState = { cards, index: 0, revealed: false, sourceLabel, sourceKey: compositeId, aciertos: 0, fallos: 0, respondidas: 0 };
  paintQuizCard();
}

function paintQuizCard(){
  const wrap = document.getElementById('view-quiz-content');
  const { cards, index, revealed, sourceLabel, aciertos, fallos, respondidas } = quizState;

  if(cards.length === 0){
    wrap.innerHTML = `${volverBtnHTML()}<div class="kcard"><p class="muted">Todavía no hay suficiente contenido para armar tarjetas de repaso aquí.</p></div>`;
    return;
  }

  const card = cards[index];
  const progreso = `${index + 1} / ${cards.length}`;
  const precision = respondidas > 0 ? Math.round((aciertos / respondidas) * 100) : null;
  const historico = getQuizStatsGuardados(quizState.sourceKey);
  const totalHistorico = historico.aciertos + historico.fallos;
  const precisionHistorica = totalHistorico > 0 ? Math.round((historico.aciertos / totalHistorico) * 100) : null;

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Autoevaluación</span>
    <h1 class="page-title">🧠 ${sourceLabel}</h1>
    <p class="page-sub">Piensa la respuesta antes de tocar la tarjeta. Eso es lo que realmente ayuda a recordar en el examen.</p>

    <div class="quiz-stats">
      <span class="quiz-progress">${progreso} · ${card.tipo}${card.origen ? ' · ' + card.origen : ''}</span>
      ${precision !== null ? `<span class="quiz-score">Hoy: ✅ ${aciertos} · ❌ ${fallos} <span class="muted">(${precision}%)</span></span>` : ''}
    </div>
    ${precisionHistorica !== null ? `<p class="quiz-historico">📊 Histórico en este repaso: ${totalHistorico} tarjetas respondidas · ${precisionHistorica}% de aciertos en total</p>` : ''}

    <div class="quiz-card ${revealed ? 'revealed' : ''}" onclick="toggleQuizReveal()">
      <div class="quiz-face quiz-front">
        <p>${card.pregunta}</p>
        <span class="quiz-hint">Toca para ver la respuesta</span>
      </div>
      <div class="quiz-face quiz-back">
        <p>${card.respuesta}</p>
      </div>
    </div>

    ${revealed ? `
      <div class="quiz-selfrate">
        <span>¿Lo sabías?</span>
        <div class="btn-icon quiz-yes" onclick="event.stopPropagation(); rateQuizCard(true)">✅ Sí</div>
        <div class="btn-icon quiz-no" onclick="event.stopPropagation(); rateQuizCard(false)">❌ No</div>
      </div>
    ` : ''}

    <div class="quiz-controls">
      <div class="btn-icon" onclick="event.stopPropagation(); quizNext(-1)">← Anterior</div>
      <div class="btn-icon" onclick="event.stopPropagation(); shuffleQuiz()">🔀 Mezclar de nuevo</div>
      <div class="btn-icon" onclick="event.stopPropagation(); quizNext(1)">Siguiente →</div>
    </div>
  `;
}

function toggleQuizReveal(){
  quizState.revealed = !quizState.revealed;
  paintQuizCard();
}
function rateQuizCard(sabia){
  if(sabia) quizState.aciertos++; else quizState.fallos++;
  quizState.respondidas++;
  guardarQuizStats(quizState.sourceKey, sabia ? 1 : 0, sabia ? 0 : 1);
  registrarEstudioHoy();
  quizNext(1);
}
function quizNext(delta){
  quizState.index = (quizState.index + delta + quizState.cards.length) % quizState.cards.length;
  quizState.revealed = false;
  paintQuizCard();
}
function shuffleQuiz(){
  shuffleArray(quizState.cards);
  quizState.index = 0;
  quizState.revealed = false;
  paintQuizCard();
}
