/* ============================================================
   MEDCORE — trazos a mano (dibujo rápido)
   ------------------------------------------------------------
   Un lienzo simple para dibujar con el dedo, mouse o lápiz
   (stylus, incluye Apple Pencil / S Pen vía Pointer Events).
   Guarda una lista de TRAZOS (puntos en coordenadas relativas
   0–1), no una imagen — así pesa poco, se sincroniza rápido
   y se ve nítido sin importar el tamaño de pantalla donde
   lo veas después.
   ============================================================ */

const drawAdapter = {
  get(key){
    try{ return JSON.parse(localStorage.getItem('medcore-draw::' + key) || '[]'); }
    catch(err){ return []; }
  },
  set(key, strokes){
    localStorage.setItem('medcore-draw::' + key, JSON.stringify(strokes));
    if(typeof currentUser !== 'undefined' && currentUser && typeof fbDb !== 'undefined' && firestoreReady){
      fbDb.collection('users').doc(currentUser.uid).collection('drawings').doc(key)
        .set({ strokes: JSON.stringify(strokes), updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true })
        .catch(() => { /* offline: se reintenta solo cuando vuelva la conexión */ });
    }
  }
};

const drawPads = {}; // key -> { canvas, ctx, strokes, current, color }

function drawBlockHTML(key){
  const safeId = 'draw-' + key.replace(/[^a-z0-9]/gi, '-');
  return `
    <div class="draw-block">
      <div class="draw-toolbar">
        <span class="draw-label">✏️ Trazo rápido</span>
        <span class="swatch active" style="background:#24243A" onclick="setDrawColor('${key}','#24243A', this)"></span>
        <span class="swatch" style="background:#D95C65" onclick="setDrawColor('${key}','#D95C65', this)"></span>
        <span class="swatch" style="background:#5267E8" onclick="setDrawColor('${key}','#5267E8', this)"></span>
        <span class="swatch" style="background:#78C9A3" onclick="setDrawColor('${key}','#78C9A3', this)"></span>
        <span class="btn-icon" onclick="undoDraw('${key}')">↩ Deshacer</span>
        <span class="btn-icon" onclick="clearDraw('${key}')">🗑 Borrar</span>
      </div>
      <canvas id="${safeId}" class="draw-canvas"></canvas>
    </div>
  `;
}

function initDrawPad(key){
  const safeId = 'draw-' + key.replace(/[^a-z0-9]/gi, '-');
  const canvas = document.getElementById(safeId);
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const state = { canvas, ctx, strokes: drawAdapter.get(key), current: null, color: '#24243A' };
  drawPads[key] = state;

  function redrawAll(){
    const w = canvas.width / 2, h = canvas.height / 2;
    ctx.clearRect(0, 0, w, h);
    state.strokes.forEach(stroke => paintStroke(ctx, stroke, w, h));
  }

  function resize(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(rect.width, 100) * 2;
    canvas.height = 220 * 2;
    canvas.style.height = '220px';
    ctx.setTransform(2, 0, 0, 2, 0, 0);
    redrawAll();
  }

  function pointFromEvent(ev){
    const rect = canvas.getBoundingClientRect();
    return { x: (ev.clientX - rect.left) / rect.width, y: (ev.clientY - rect.top) / rect.height };
  }

  canvas.addEventListener('pointerdown', (ev) => {
    ev.preventDefault();
    canvas.setPointerCapture(ev.pointerId);
    state.current = { color: state.color, points: [pointFromEvent(ev)] };
  });
  canvas.addEventListener('pointermove', (ev) => {
    if(!state.current) return;
    state.current.points.push(pointFromEvent(ev));
    const w = canvas.width / 2, h = canvas.height / 2;
    redrawAll();
    paintStroke(ctx, state.current, w, h);
  });
  function endStroke(){
    if(!state.current) return;
    if(state.current.points.length > 1) state.strokes.push(state.current);
    state.current = null;
    drawAdapter.set(key, state.strokes);
  }
  canvas.addEventListener('pointerup', endStroke);
  canvas.addEventListener('pointercancel', endStroke);
  canvas.addEventListener('pointerleave', endStroke);

  window.addEventListener('resize', resize);
  resize();
}

function paintStroke(ctx, stroke, w, h){
  if(stroke.points.length < 2) return;
  ctx.strokeStyle = stroke.color;
  ctx.lineWidth = 2.6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  stroke.points.forEach((p, i) => {
    const x = p.x * w, y = p.y * h;
    if(i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function setDrawColor(key, color, el){
  if(drawPads[key]) drawPads[key].color = color;
  if(el){
    el.parentElement.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
  }
}
function undoDraw(key){
  const state = drawPads[key];
  if(!state) return;
  state.strokes.pop();
  drawAdapter.set(key, state.strokes);
  const w = state.canvas.width / 2, h = state.canvas.height / 2;
  state.ctx.clearRect(0, 0, w, h);
  state.strokes.forEach(stroke => paintStroke(state.ctx, stroke, w, h));
}
function clearDraw(key){
  const state = drawPads[key];
  if(!state) return;
  state.strokes = [];
  drawAdapter.set(key, []);
  const w = state.canvas.width / 2, h = state.canvas.height / 2;
  state.ctx.clearRect(0, 0, w, h);
}
