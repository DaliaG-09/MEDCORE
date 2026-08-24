/* ============================================================
   MEDCORE — cuaderno de clase (hoja "ilimitada")
   ------------------------------------------------------------
   A diferencia del lienzo chico de "Apuntes del doctor" (para
   un garabato rápido), este es un cuaderno de página larga:
   empieza del tamaño de una hoja y crece hacia abajo cada vez
   que necesitas más espacio — como agregar hojas a una libreta.
   Guarda trazos vectoriales (no imagen), en un sistema de
   coordenadas "de página" (794 unidades de ancho) para que se
   vea igual de nítido en el celular, la tablet o la compu.
   ============================================================ */

const PAGE_WIDTH = 794;   // ancho virtual de la "hoja" (tipo A4 a 96dpi)
const PAGE_HEIGHT_STEP = 700; // cuánto crece la hoja cada vez que pides más espacio
let cuadernoState = null; // { canvas, ctx, strokes, current, color, size, pageHeight, key }

const notebookAdapter = {
  get(key){
    try{ return JSON.parse(localStorage.getItem('medcore-notebook::' + key) || 'null') || { strokes: [], pageHeight: 1100 }; }
    catch(err){ return { strokes: [], pageHeight: 1100 }; }
  },
  set(key, data){
    localStorage.setItem('medcore-notebook::' + key, JSON.stringify(data));
    if(typeof currentUser !== 'undefined' && currentUser && typeof fbDb !== 'undefined' && firestoreReady){
      fbDb.collection('users').doc(currentUser.uid).collection('notebooks').doc(key)
        .set({ data: JSON.stringify(data), updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true })
        .catch(() => { /* sin internet: se reintenta solo */ });
    }
  }
};

function navCuaderno(sourceType, id){
  const nombre = sourceType === 'tema' ? getTema(id).nombre : sourceType === 'hospital' ? getHospitalSesion(id).titulo : getEnfermedad(id).nombre;
  navPush('cuaderno', sourceType + '::' + id, 'Cuaderno — ' + nombre);
}

function renderCuaderno(compositeId){
  const [sourceType, id] = compositeId.split('::');
  const nombre = sourceType === 'tema' ? getTema(id).nombre : sourceType === 'hospital' ? getHospitalSesion(id).titulo : getEnfermedad(id).nombre;
  const key = id + '::cuaderno-clase';
  const wrap = document.getElementById('view-cuaderno-content');

  wrap.innerHTML = `
    ${volverBtnHTML()}
    <div class="disease-header">
      <div>
        <span class="eyebrow">Cuaderno de clase</span>
        <h1 class="page-title">${nombre}</h1>
      </div>
      <div class="toolbar">
        <div class="btn-icon" onclick="window.print()">🖨 Imprimir</div>
      </div>
    </div>
    <p class="page-sub">Escribe o dibuja con el dedo, mouse o lápiz. Se guarda solo. Cuando llegues al final de la hoja, agrega más espacio con el botón de abajo.</p>

    <div class="notebook-toolbar">
      <span class="swatch active" style="background:#24243A" onclick="setCuadernoColor('#24243A', this)"></span>
      <span class="swatch" style="background:#D95C65" onclick="setCuadernoColor('#D95C65', this)"></span>
      <span class="swatch" style="background:#5267E8" onclick="setCuadernoColor('#5267E8', this)"></span>
      <span class="swatch" style="background:#78C9A3" onclick="setCuadernoColor('#78C9A3', this)"></span>
      <span class="swatch" style="background:#E8A93D" onclick="setCuadernoColor('#E8A93D', this)"></span>
      <span class="swatch" style="background:#f0eef5; box-shadow: inset 0 0 0 1px #ccc;" onclick="setCuadernoColor('#f0eef5', this)" title="Claro (para modo oscuro)"></span>
      <span class="size-sep"></span>
      <span class="size-dot size-sm" onclick="setCuadernoSize(2, this)" title="Trazo fino"><span></span></span>
      <span class="size-dot size-md active" onclick="setCuadernoSize(3.4, this)" title="Trazo medio"><span></span></span>
      <span class="size-dot size-lg" onclick="setCuadernoSize(5.5, this)" title="Trazo grueso"><span></span></span>
      <span class="size-sep"></span>
      <span class="btn-icon" onclick="undoCuaderno()">↩ Deshacer</span>
      <span class="btn-icon" onclick="clearCuaderno()">🗑 Borrar todo</span>
      <span class="notebook-save-status" id="notebook-save-status"></span>
    </div>

    <div class="notebook-page-wrap">
      <canvas id="notebook-canvas" class="notebook-canvas"></canvas>
    </div>

    <div class="notebook-more-wrap">
      <div class="btn-icon" onclick="addCuadernoSpace()">+ Agregar más espacio a la hoja</div>
    </div>
  `;

  initCuaderno(key);
}

function initCuaderno(key){
  const canvas = document.getElementById('notebook-canvas');
  const ctx = canvas.getContext('2d');
  if(!ctx) return;

  const saved = notebookAdapter.get(key);
  const esOscuro = document.documentElement.classList.contains('dark');
  cuadernoState = { canvas, ctx, strokes: saved.strokes || [], current: null, color: esOscuro ? '#f0eef5' : '#24243A', size: 3.4, pageHeight: saved.pageHeight || 1100, key };

  resizeCuaderno();
  window.addEventListener('resize', resizeCuaderno);

  canvas.addEventListener('pointerdown', (ev) => {
    ev.preventDefault();
    canvas.setPointerCapture(ev.pointerId);
    cuadernoState.current = { color: cuadernoState.color, size: cuadernoState.size, points: [pointFromEventCuaderno(ev)] };
  });
  canvas.addEventListener('pointermove', (ev) => {
    if(!cuadernoState.current) return;
    cuadernoState.current.points.push(pointFromEventCuaderno(ev));
    redrawCuaderno();
    paintStrokeCuaderno(cuadernoState.current);
  });
  const endStroke = () => {
    if(!cuadernoState.current) return;
    if(cuadernoState.current.points.length > 1) cuadernoState.strokes.push(cuadernoState.current);
    cuadernoState.current = null;
    saveCuaderno();
  };
  canvas.addEventListener('pointerup', endStroke);
  canvas.addEventListener('pointercancel', endStroke);
  canvas.addEventListener('pointerleave', endStroke);
}

function scaleCuaderno(){
  const rect = cuadernoState.canvas.getBoundingClientRect();
  return rect.width / PAGE_WIDTH;
}
function pointFromEventCuaderno(ev){
  const rect = cuadernoState.canvas.getBoundingClientRect();
  const s = rect.width / PAGE_WIDTH;
  return { x: (ev.clientX - rect.left) / s, y: (ev.clientY - rect.top) / s };
}
function resizeCuaderno(){
  const canvas = cuadernoState.canvas;
  const wrapEl = canvas.parentElement;
  const displayWidth = wrapEl.clientWidth;
  const s = displayWidth / PAGE_WIDTH;
  canvas.style.width = displayWidth + 'px';
  canvas.style.height = (cuadernoState.pageHeight * s) + 'px';
  canvas.width = displayWidth * 2;
  canvas.height = cuadernoState.pageHeight * s * 2;
  cuadernoState.ctx.setTransform(2 * s, 0, 0, 2 * s, 0, 0);
  redrawCuaderno();
}
function redrawCuaderno(){
  const { ctx, strokes } = cuadernoState;
  ctx.clearRect(0, 0, PAGE_WIDTH, cuadernoState.pageHeight);
  strokes.forEach(paintStrokeCuaderno);
}
function paintStrokeCuaderno(stroke){
  if(stroke.points.length < 2) return;
  const { ctx } = cuadernoState;
  ctx.strokeStyle = stroke.color;
  ctx.lineWidth = stroke.size;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  stroke.points.forEach((p, i) => { if(i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
  ctx.stroke();
}
function saveCuaderno(){
  notebookAdapter.set(cuadernoState.key, { strokes: cuadernoState.strokes, pageHeight: cuadernoState.pageHeight });
  const status = document.getElementById('notebook-save-status');
  if(status){ status.textContent = 'guardado ✓'; setTimeout(() => { if(status) status.textContent = ''; }, 1500); }
}
function setCuadernoColor(color, el){
  cuadernoState.color = color;
  el.parentElement.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}
function setCuadernoSize(size, el){
  cuadernoState.size = size;
  el.parentElement.querySelectorAll('.size-dot').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}
function undoCuaderno(){
  cuadernoState.strokes.pop();
  redrawCuaderno();
  saveCuaderno();
}
function clearCuaderno(){
  cuadernoState.strokes = [];
  redrawCuaderno();
  saveCuaderno();
}
function addCuadernoSpace(){
  cuadernoState.pageHeight += PAGE_HEIGHT_STEP;
  resizeCuaderno();
  saveCuaderno();
  const wrapEl = cuadernoState.canvas.parentElement;
  wrapEl.scrollTo({ top: wrapEl.scrollHeight, behavior: 'smooth' });
}
