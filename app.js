/* ============================================================
   MEDCORE — lógica de la interfaz (sistema visual v2)
   Sin frameworks, sin build step. Cada función pinta un pedazo
   de HTML a partir de data.js — fácil de extender aunque no
   programes.
   ============================================================ */

function getEnfermedad(id){ return ENFERMEDADES.find(e => e.id === id); }
function getSemana(id){ return SEMANAS.find(s => s.id === id); }

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

/* ---------- navegación entre vistas ---------- */
function showView(viewId){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMatch = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  if(navMatch) navMatch.classList.add('active');
  window.scrollTo(0,0);
}

function openSemana(id){ renderSemana(id); showView('view-semana'); }
function openEnfermedad(id){ renderEnfermedad(id); showView('view-enfermedad'); }

function saludoSegunHora(){
  const h = new Date().getHours();
  if(h < 12) return 'Buenos días';
  if(h < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

/* ---------- vista: inicio ---------- */
function renderInicio(){
  const semana = SEMANAS[0];
  const total = semana.enfermedades.length;
  const estudiadas = semana.enfermedades.filter(id => getEnfermedad(id).estudiado).length;
  const completada = total > 0 && estudiadas === total;

  document.getElementById('inicio-hero').innerHTML = `
    <div class="greeting-hero">
      <div>
        <h1>${saludoSegunHora()}, Dalia 👋</h1>
        <p>Esta semana tienes ${total} enfermedades para revisar. Vas ${estudiadas}/${total}.</p>
      </div>
      <div class="greeting-mark"><img src="assets/nexu-logo.svg" alt="Nexu" style="width:100%; height:100%; object-fit:contain;"></div>
    </div>
    ${completada ? nexuMessageHTML('<strong>✦ ¡Semana completada!</strong> Revisaste todas las enfermedades de esta semana. Buen trabajo.') : ''}
  `;

  const wrap = document.getElementById('inicio-semana-actual');
  wrap.innerHTML = `
    <div class="card">
      <span class="eyebrow">Semana actual · ${semana.rango}</span>
      <div class="section-title">
        <h2>Semana ${semana.numero} — ${semana.titulo}</h2>
        <a class="link-quiet" onclick="openSemana('${semana.id}')">Ver semana completa →</a>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${total ? (estudiadas/total*100) : 0}%"></div></div>
      <div class="progress-caption">${estudiadas}/${total} enfermedades revisadas ${estudiadas === total && total>0 ? '— ✦ ¡semana completada!' : ''}</div>
      <div class="grid cols-3" style="margin-top:18px">
        ${semana.dias.map(d => diaCardHTML(d)).join('')}
      </div>
    </div>
  `;

  const enf = document.getElementById('inicio-enfermedades');
  enf.innerHTML = semana.enfermedades.map(id => diseaseCardHTML(getEnfermedad(id))).join('');
}

function diaCardHTML(d){
  const badges = d.tipo.split('+').map(t => `<span class="badge ${t}">${t}</span>`).join(' ');
  return `
    <div class="week-day-card">
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

/* ---------- vista: semana ---------- */
function renderSemana(id){
  const s = getSemana(id);
  const total = s.enfermedades.length;
  const estudiadas = s.enfermedades.filter(id => getEnfermedad(id).estudiado).length;
  const wrap = document.getElementById('view-semana-content');
  wrap.innerHTML = `
    <span class="eyebrow">${s.rango}</span>
    <h1 class="page-title">Semana ${s.numero} — ${s.titulo}</h1>
    <p class="page-sub">Teoría, hospital, lecturas y enfermedades correspondientes a esta semana.</p>

    <div class="progress-track"><div class="progress-fill" style="width:${total ? (estudiadas/total*100) : 0}%"></div></div>
    <div class="progress-caption" style="margin-bottom:22px">${estudiadas}/${total} enfermedades revisadas</div>

    <div class="section-block">
      <h3>Días</h3>
      <div class="grid cols-3">${s.dias.map(diaCardHTML).join('')}</div>
    </div>

    <div class="section-block">
      <h3>Enfermedades de la semana</h3>
      <div class="grid cols-2">${s.enfermedades.map(id => diseaseCardHTML(getEnfermedad(id))).join('')}</div>
    </div>

    <div class="grid cols-2">
      <div class="section-block">
        <h3>Lecturas</h3>
        <ul>${s.lecturas.map(lid => {
          const l = LECTURAS.find(x => x.id === lid);
          return `<li>${l ? l.titulo : lid} <span class="muted">(${l ? l.tipo : ''})</span></li>`;
        }).join('')}</ul>
      </div>
      <div class="section-block">
        <h3>Talleres y exposiciones</h3>
        <ul>
          ${s.talleres.map(t => `<li>${t}</li>`).join('')}
          ${s.exposiciones.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="section-block">
      <h3>Evaluaciones</h3>
      <ul>${s.evaluaciones.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  `;
}

/* ---------- vista: enfermedad ---------- */
function renderEnfermedad(id){
  const e = getEnfermedad(id);
  const wrap = document.getElementById('view-enfermedad-content');
  const esRespiratoria = e.area === 'Neumología';

  wrap.innerHTML = `
    <div class="disease-header">
      <div>
        <span class="eyebrow">${e.area}</span>
        <h1 class="page-title">${e.nombre}</h1>
      </div>
      <div class="toolbar">
        <div class="btn-icon" onclick="window.print()">🖨 Imprimir</div>
        <div class="btn-icon ${e.estudiado ? 'done' : ''}" onclick="toggleEstudiado('${e.id}', true)">${e.estudiado ? '✓ Estudiado' : 'Marcar como estudiado'}</div>
        <div class="star" style="font-size:24px" onclick="toggleFavorito('${e.id}', true)">${e.favorito ? '★' : '☆'}</div>
      </div>
    </div>

    ${e.estudiado ? nexuMessageHTML('<strong>¡Bien!</strong> Ya marcaste esta enfermedad como estudiada.') : ''}

    ${esRespiratoria ? `
      <div class="illustration-card">
        ${e.ilustracion
          ? `<img src="${e.ilustracion}" alt="Ilustración de ${e.nombre}" style="width:100%; height:auto; display:block;">`
          : airwayIllustration('obstructivo')}
        <div class="cap">${e.ilustracion ? 'Vía aérea normal vs. ' + e.nombre : 'Corte transversal de vía aérea — normal vs. patrón obstructivo'}</div>
      </div>` : ''}

    <div class="doctor-notes">
      <div class="dn-head"><span style="font-size:18px">👨‍⚕️</span><h3>Apuntes del doctor</h3>
        <span class="btn-icon mic-btn" id="mic-btn-${e.id}" style="display:none; margin-left:auto" onclick="toggleDictado('${e.id}')">🎤 Dictar</span>
      </div>
      <p class="dn-sub">Cosas que dijo el profesor en clase y que no están en las diapositivas.</p>
      <textarea id="doctor-note-${e.id}" placeholder="Ej: el Dr. mencionó que en la práctica prefiere empezar con..."
        oninput="handleNoteInput('${e.id}::apuntes-doctor','doctor-note-${e.id}')">${notesAdapter.get(e.id + '::apuntes-doctor')}</textarea>
      ${drawBlockHTML(e.id + '::apuntes-doctor-dibujo')}
    </div>

    <div class="mode-tabs">
      <div class="mode-tab active" data-mode="profundo" onclick="switchMode(this,'profundo')">Modo profundo</div>
      <div class="mode-tab" data-mode="repaso" onclick="switchMode(this,'repaso')">Modo repaso</div>
      <div class="mode-tab" data-mode="imprescindible" onclick="switchMode(this,'imprescindible')">Imprescindible</div>
    </div>

    <div class="mode-panel active" id="panel-profundo">${renderProfundo(e.profundo, e.id)}</div>
    <div class="mode-panel" id="panel-repaso">${renderRepaso(e.repaso, e.id)}</div>
    <div class="mode-panel" id="panel-imprescindible">${renderImprescindible(e.imprescindible, e.id)}</div>
  `;

  // muestra el botón de dictado solo si el navegador lo soporta (Chrome sí, Safari iOS no)
  const micBtn = document.getElementById('mic-btn-' + e.id);
  if(micBtn && (window.SpeechRecognition || window.webkitSpeechRecognition)){
    micBtn.style.display = 'inline-flex';
  }

  // inicializa el lienzo de trazos (debe hacerse después de insertar el HTML)
  initDrawPad(e.id + '::apuntes-doctor-dibujo');
}

/* ---------- dictado por voz para "Apuntes del doctor" (Chrome/Android; no soportado en Safari/iOS) ---------- */
let recognitionInstance = null;
let recognitionActiveFor = null;

function toggleDictado(diseaseId){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition) return;
  const btn = document.getElementById('mic-btn-' + diseaseId);
  const textarea = document.getElementById('doctor-note-' + diseaseId);

  if(recognitionActiveFor === diseaseId){
    recognitionInstance.stop();
    return;
  }
  if(recognitionInstance){ try{ recognitionInstance.stop(); }catch(e){} }

  const rec = new SpeechRecognition();
  rec.lang = 'es-PE';
  rec.continuous = true;
  rec.interimResults = true;

  let baseText = textarea.value ? textarea.value.trim() + ' ' : '';

  rec.onresult = (event) => {
    let interim = '', final = '';
    for(let i = event.resultIndex; i < event.results.length; i++){
      const transcript = event.results[i][0].transcript;
      if(event.results[i].isFinal) final += transcript + ' ';
      else interim += transcript;
    }
    if(final) baseText += final;
    textarea.value = baseText + interim;
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

function switchMode(tabEl, mode){
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  document.querySelectorAll('.mode-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + mode).classList.add('active');
}

/* ---------- MODO PROFUNDO: knowledge / mechanism / pearl cards ---------- */
function renderProfundo(p, diseaseId){
  return `
    <div class="kcard">
      <h3>Definición y epidemiología</h3>
      <p>${p.definicion}</p>
      <p class="muted">${p.epidemiologia}</p>
    </div>

    <div class="kcard">
      <h3>Etiología y factores de riesgo</h3>
      <ul>${p.etiologiaFactoresRiesgo.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    <div class="mcard">
      <h3>🧬 Fisiopatología</h3>
      <p class="muted">${p.fisiopatologia.resumen}</p>
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
      ${noteBlockHTML(diseaseId + '::fisiopatologia', 'Tu explicación con tus propias palabras...')}
    </div>

    <div class="kcard">
      <h3>Clínica explicada</h3>
      <ul>${p.clinica.map(c => `<li><strong>${c.signo}</strong> — <span class="muted">${c.mecanismo}</span></li>`).join('')}</ul>
    </div>

    <div class="kcard">
      <h3>Examen físico</h3>
      <ul>${p.examenFisico.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    <div class="kcard">
      <h3>Diagnóstico y diferenciales</h3>
      <p>${p.diagnostico}</p>
      <p class="muted"><strong>Diferenciales:</strong> ${p.diagnosticoDiferencial.join(', ')}</p>
    </div>

    <div class="kcard">
      <h3>Tratamiento</h3>
      <p><strong>No farmacológico:</strong></p>
      <ul>${p.tratamiento.noFarmacologico.map(x => `<li>${x}</li>`).join('')}</ul>
      <p><strong>Farmacológico:</strong></p>
      <ul>${p.tratamiento.farmacologico.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    <div class="kcard">
      <h3>Complicaciones</h3>
      <ul>${p.complicaciones.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    <div class="pcard">
      <h3>✨ Perla clínica</h3>
      <p>${p.perlasProfundo}</p>
    </div>

    <div class="section-block">
      <h3>Apunte general — modo profundo</h3>
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
      <h3>Conceptos clave</h3>
      <ul>${r.conceptosClave.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>

    <div class="kcard">
      <h3>Resumen rápido</h3>
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
      <h3>Apunte — repaso</h3>
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
      <h3>Apunte — lo imprescindible</h3>
      ${noteBlockHTML(diseaseId + '::imprescindible')}
    </div>
  `;
}

/* ---------- favoritos / estudiado ---------- */
function toggleFavorito(id, fromDetail){
  const e = getEnfermedad(id);
  e.favorito = !e.favorito;
  saveFlags();
  if(fromDetail) renderEnfermedad(id); else refreshCurrentListViews();
}
function toggleEstudiado(id, fromDetail){
  const e = getEnfermedad(id);
  e.estudiado = !e.estudiado;
  saveFlags();
  if(fromDetail) renderEnfermedad(id); else refreshCurrentListViews();
}
function refreshCurrentListViews(){
  // repinta inicio y semana si están construidas, para reflejar el nuevo estado sin perder la vista activa
  if(document.getElementById('view-inicio').classList.contains('active')) renderInicio();
  if(document.getElementById('view-semana').classList.contains('active')){
    const activeCard = document.querySelector('.nav-item[data-view="view-semana"]');
    if(SEMANAS[0]) renderSemana(SEMANAS[0].id);
  }
}

/* ---------- buscador global ---------- */
function buildSearchIndex(){
  const index = [];
  ENFERMEDADES.forEach(e => index.push({ tipo: 'Enfermedad', nombre: e.nombre, sub: e.area, action: () => openEnfermedad(e.id) }));
  SEMANAS.forEach(s => index.push({ tipo: 'Semana', nombre: `Semana ${s.numero} — ${s.titulo}`, sub: s.rango, action: () => openSemana(s.id) }));
  LECTURAS.forEach(l => index.push({ tipo: 'Lectura', nombre: l.titulo, sub: l.tipo, action: () => openSemana(l.semana) }));
  return index;
}

function initSearch(){
  const input = document.getElementById('global-search');
  const results = document.getElementById('search-results');
  const index = buildSearchIndex();

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if(!q){ results.classList.remove('show'); results.innerHTML=''; return; }
    const matches = index.filter(item => item.nombre.toLowerCase().includes(q)).slice(0, 8);
    if(matches.length === 0){
      results.innerHTML = `<a><span class="tag">Sin resultados</span><br>Prueba con otro término</a>`;
    } else {
      results.innerHTML = matches.map((m,i) => `
        <a onclick="searchIndexActions[${i}]()"><span class="tag">${m.tipo}</span><br>${m.nombre} <span class="muted">— ${m.sub}</span></a>
      `).join('');
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
  renderInicio();
  initSearch();
  showView('view-inicio');

  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').catch(() => {
      /* si falla (ej. abierto como archivo local sin http), la app
         sigue funcionando normal, solo sin caché offline avanzado */
    });
  }

  if(typeof firebase !== 'undefined'){
    initFirebase();
  }
});
