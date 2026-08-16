/* ============================================================
   MEDCORE — lógica de la interfaz
   Sin frameworks, sin build step: JS plano que lee data.js
   y pinta el HTML. Pensado para que sea fácil de leer y
   extender aunque no programes — cada función hace una sola cosa.
   ============================================================ */

function getEnfermedad(id){ return ENFERMEDADES.find(e => e.id === id); }
function getSemana(id){ return SEMANAS.find(s => s.id === id); }

/* ---------- navegación entre vistas ---------- */
function showView(viewId){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMatch = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  if(navMatch) navMatch.classList.add('active');
  window.scrollTo(0,0);
}

function openSemana(id){
  renderSemana(id);
  showView('view-semana');
}

function openEnfermedad(id){
  renderEnfermedad(id);
  showView('view-enfermedad');
}

/* ---------- vista: inicio ---------- */
function renderInicio(){
  const semana = SEMANAS[0];
  const wrap = document.getElementById('inicio-semana-actual');
  wrap.innerHTML = `
    <div class="card">
      <span class="eyebrow">Semana actual · ${semana.rango}</span>
      <div class="section-title">
        <h2>Semana ${semana.numero} — ${semana.titulo}</h2>
        <a class="link-quiet" onclick="openSemana('${semana.id}')">Ver semana completa →</a>
      </div>
      <div class="grid cols-3">
        ${semana.dias.map(d => diaCardHTML(d)).join('')}
      </div>
    </div>
  `;

  const enf = document.getElementById('inicio-enfermedades');
  enf.innerHTML = semana.enfermedades.map(id => {
    const e = getEnfermedad(id);
    return diseaseCardHTML(e);
  }).join('');
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
    <div class="disease-card" onclick="openEnfermedad('${e.id}')">
      <div>
        <div class="name">${e.nombre}</div>
        <div class="area">${e.area}</div>
      </div>
      <div class="star">${e.favorito ? '★' : '☆'}</div>
    </div>
  `;
}

/* ---------- vista: semana ---------- */
function renderSemana(id){
  const s = getSemana(id);
  const wrap = document.getElementById('view-semana-content');
  wrap.innerHTML = `
    <span class="eyebrow">${s.rango}</span>
    <h1 class="page-title">Semana ${s.numero} — ${s.titulo}</h1>
    <p class="page-sub">Teoría, hospital, lecturas y enfermedades correspondientes a esta semana.</p>

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
        <div class="star" style="font-size:24px" onclick="toggleFavorito('${e.id}')">${e.favorito ? '★' : '☆'}</div>
      </div>
    </div>

    ${esRespiratoria ? `
      <div class="illustration-card">
        ${airwayIllustration('obstructivo')}
        <div class="cap">Corte transversal de vía aérea — normal vs. patrón obstructivo</div>
      </div>` : ''}

    <div class="mode-tabs">
      <div class="mode-tab active" data-mode="profundo" onclick="switchMode(this,'profundo')">Modo profundo</div>
      <div class="mode-tab" data-mode="repaso" onclick="switchMode(this,'repaso')">Modo repaso</div>
      <div class="mode-tab" data-mode="imprescindible" onclick="switchMode(this,'imprescindible')">Imprescindible</div>
    </div>

    <div class="mode-panel active" id="panel-profundo">${renderProfundo(e.profundo, e.id)}</div>
    <div class="mode-panel" id="panel-repaso">${renderRepaso(e.repaso, e.id)}</div>
    <div class="mode-panel" id="panel-imprescindible">${renderImprescindible(e.imprescindible, e.id)}</div>
  `;
}

function switchMode(tabEl, mode){
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  document.querySelectorAll('.mode-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + mode).classList.add('active');
}

function renderProfundo(p, diseaseId){
  return `
    <div class="section-block">
      <h3>Definición</h3>
      <p>${p.definicion}</p>
    </div>
    <div class="section-block">
      <h3>Epidemiología</h3>
      <p>${p.epidemiologia}</p>
    </div>
    <div class="section-block">
      <h3>Etiología y factores de riesgo</h3>
      <ul>${p.etiologiaFactoresRiesgo.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="section-block">
      <h3>Fisiopatología</h3>
      <p class="muted">${p.fisiopatologia.resumen}</p>
      <div class="cascade">
        ${p.fisiopatologia.cascada.map(c => `
          <div class="cascade-step">
            <div class="cascade-icon">${cascadeIconFor(c.paso)}</div>
            <div class="cascade-marker"><div class="cascade-line"></div></div>
            <div class="cascade-body">
              <div class="cascade-title">${c.paso}</div>
              <div class="cascade-detail">${c.detalle}</div>
            </div>
          </div>
        `).join('')}
      </div>
      ${noteBlockHTML(diseaseId + '::fisiopatologia', 'Tu explicación con tus propias palabras...')}
    </div>
    <div class="section-block">
      <h3>Clínica explicada</h3>
      <ul>${p.clinica.map(c => `<li><strong>${c.signo}</strong> — <span class="muted">${c.mecanismo}</span></li>`).join('')}</ul>
    </div>
    <div class="section-block">
      <h3>Examen físico</h3>
      <ul>${p.examenFisico.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="section-block">
      <h3>Diagnóstico</h3>
      <p>${p.diagnostico}</p>
    </div>
    <div class="section-block">
      <h3>Diagnóstico diferencial</h3>
      <ul>${p.diagnosticoDiferencial.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="section-block">
      <h3>Tratamiento</h3>
      <p><strong>No farmacológico:</strong></p>
      <ul>${p.tratamiento.noFarmacologico.map(x => `<li>${x}</li>`).join('')}</ul>
      <p><strong>Farmacológico:</strong></p>
      <ul>${p.tratamiento.farmacologico.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="section-block">
      <h3>Complicaciones</h3>
      <ul>${p.complicaciones.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="section-block">
      <div class="alert amber"><span class="label">Perla clínica</span>${p.perlasProfundo}</div>
    </div>
    <div class="section-block">
      <h3>Apunte general — modo profundo</h3>
      ${noteBlockHTML(diseaseId + '::profundo-general')}
    </div>
  `;
}

function renderRepaso(r, diseaseId){
  const tabla = r.tablaComparativa ? `
    <div class="section-block">
      <h3>${r.tablaComparativa.titulo}</h3>
      <table class="compare">
        <tr><th>Criterio</th><th>Opción A</th><th>Opción B</th></tr>
        ${r.tablaComparativa.filas.map(f => `<tr>${f.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
      </table>
    </div>` : '';

  return `
    <div class="section-block">
      <h3>Conceptos clave</h3>
      <ul>${r.conceptosClave.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="section-block">
      <h3>Clínica</h3>
      <p>${r.clinica}</p>
    </div>
    <div class="section-block">
      <h3>Diagnóstico</h3>
      <p>${r.diagnostico}</p>
    </div>
    <div class="section-block">
      <h3>Tratamiento</h3>
      <p>${r.tratamientoResumen}</p>
    </div>
    <div class="section-block">
      <h3>Diferenciales rápidos</h3>
      <ul>${r.diferenciales.map(d => `<li><strong>${d.entidad}:</strong> ${d.clave}</li>`).join('')}</ul>
    </div>
    ${tabla}
    <div class="section-block">
      <h3>Apunte — repaso</h3>
      ${noteBlockHTML(diseaseId + '::repaso')}
    </div>
  `;
}

function renderImprescindible(im, diseaseId){
  return `
    <div class="section-block">
      <h3>Lo que sí o sí debes saber</h3>
      <div class="chip-list">
        ${im.loQueSiOSiDebesSaber.map((x,i) => `<div class="chip"><span class="n">${String(i+1).padStart(2,'0')}</span><span>${x}</span></div>`).join('')}
      </div>
    </div>
    <div class="section-block">
      <h3>Red flags</h3>
      ${im.redFlags.map(x => `<div class="alert red"><span class="label">Alerta</span>${x}</div>`).join('')}
    </div>
    <div class="section-block">
      <h3>Errores frecuentes</h3>
      ${im.erroresFrecuentes.map(x => `<div class="alert amber"><span class="label">Cuidado</span>${x}</div>`).join('')}
    </div>
    <div class="section-block">
      <h3>Asociaciones clínicas</h3>
      ${im.asociacionesClinicas.map(x => `<div class="alert green"><span class="label">Asociación</span>${x}</div>`).join('')}
    </div>
    <div class="section-block">
      <h3>Apunte — lo imprescindible</h3>
      ${noteBlockHTML(diseaseId + '::imprescindible')}
    </div>
  `;
}

function toggleFavorito(id){
  const e = getEnfermedad(id);
  e.favorito = !e.favorito;
  renderEnfermedad(id);
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
  renderInicio();
  initSearch();
  showView('view-inicio');

  // registra el service worker para que la app funcione offline
  // después de la primera visita con internet
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').catch(() => {
      /* si falla (ej. abierto como archivo local sin http), la app
         sigue funcionando normal, solo sin caché offline avanzado */
    });
  }

  // conecta Firebase (sincronización de notas)
  if(typeof firebase !== 'undefined'){
    initFirebase();
  }
});
