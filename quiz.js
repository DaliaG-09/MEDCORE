/* ============================================================
   MEDCORE — modo autoevaluación (flashcards de recall activo)
   ------------------------------------------------------------
   No se inventa contenido nuevo: arma preguntas y respuestas a
   partir de lo que YA existe en cada enfermedad (imprescindible,
   perlas, diferenciales, clínica). Tapas la respuesta, intentas
   recordar, y recién ahí la revelas — así se estudia de verdad,
   no solo releyendo.
   ============================================================ */

let quizState = null; // { cards: [...], index: 0, revealed: false, sourceLabel }

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

function navQuiz(enfermedadId){
  const e = getEnfermedad(enfermedadId);
  navPush('quiz', enfermedadId, 'Ponte a prueba — ' + e.nombre);
}

function renderQuiz(enfermedadId){
  const e = getEnfermedad(enfermedadId);
  quizState = { cards: buildQuizCards(e), index: 0, revealed: false, sourceLabel: e.nombre };
  paintQuizCard();
}

function paintQuizCard(){
  const wrap = document.getElementById('view-quiz-content');
  const { cards, index, revealed, sourceLabel } = quizState;

  if(cards.length === 0){
    wrap.innerHTML = `${volverBtnHTML()}<div class="kcard"><p class="muted">Todavía no hay suficiente contenido en esta enfermedad para armar tarjetas de repaso.</p></div>`;
    return;
  }

  const card = cards[index];
  const progreso = `${index + 1} / ${cards.length}`;

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <span class="eyebrow">Autoevaluación</span>
    <h1 class="page-title">🧠 ${sourceLabel}</h1>
    <p class="page-sub">Piensa la respuesta antes de tocar la tarjeta. Eso es lo que realmente ayuda a recordar en el examen.</p>

    <div class="quiz-progress">${progreso} · ${card.tipo}</div>

    <div class="quiz-card ${revealed ? 'revealed' : ''}" onclick="toggleQuizReveal()">
      <div class="quiz-face quiz-front">
        <p>${card.pregunta}</p>
        <span class="quiz-hint">Toca para ver la respuesta</span>
      </div>
      <div class="quiz-face quiz-back">
        <p>${card.respuesta}</p>
      </div>
    </div>

    <div class="quiz-controls">
      <div class="btn-icon" onclick="event.stopPropagation(); quizNext(-1)">← Anterior</div>
      <div class="btn-icon" onclick="event.stopPropagation(); shuffleQuiz()">🔀 Mezclar de nuevo</div>
      <div class="btn-icon" onclick="event.stopPropagation(); quizNext(1)">Siguiente →</div>
    </div>
  `;
}

function toggleQuizReveal(){
  quizState.revealed = !quizState.revealed;
  document.querySelector('.quiz-card').classList.toggle('revealed');
}
function quizNext(delta){
  quizState.index = (quizState.index + delta + quizState.cards.length) % quizState.cards.length;
  quizState.revealed = false;
  paintQuizCard();
}
function shuffleQuiz(){
  const e = getEnfermedad(navStack[navStack.length - 1].id);
  quizState.cards = buildQuizCards(e);
  quizState.index = 0;
  quizState.revealed = false;
  paintQuizCard();
}
