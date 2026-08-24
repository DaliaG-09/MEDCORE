/* ============================================================
   MEDCORE — cuaderno de clase (hoja "ilimitada")
   ------------------------------------------------------------
   Hoja larga que crece hacia abajo cuando hace falta más espacio.
   Guarda trazos vectoriales + imágenes pegadas/subidas, en un
   sistema de coordenadas "de página" (794 unidades de ancho) para
   que se vea igual de nítido en el celular, la tablet o la compu.

   Puede mostrarse de 2 formas:
   - Página completa (navCuaderno) — para escribir con más espacio.
   - Incrustado (inlineCuadernoHTML) — pegado dentro de la misma
     página de contenido (ej. una sesión de hospital), con scroll
     propio y position:sticky, para poder leer y escribir a la vez
     sin salir de la página. Ideal para talleres.
   ============================================================ */

const PAGE_WIDTH = 794;   // ancho virtual de la "hoja" (tipo A4 a 96dpi)
const PAGE_HEIGHT_STEP = 700; // cuánto crece la hoja cada vez que pides más espacio
const IMG_BUDGET_TOTAL = 850000; // presupuesto total seguro para todas las imágenes de UN cuaderno (deja margen bajo el límite de Firestore, ~1MB)
let cuadernoState = null; // { canvas, ctx, wrapId, strokes, images, current, color, size, pageHeight, key }

const notebookAdapter = {
  get(key){
    try{ return JSON.parse(localStorage.getItem('medcore-notebook::' + key) || 'null') || { strokes: [], images: [], pageHeight: 1100 }; }
    catch(err){ return { strokes: [], images: [], pageHeight: 1100 }; }
  },
  set(key, data){
    localStorage.setItem('medcore-notebook::' + key, JSON.stringify(data));
    if(typeof currentUser !== 'undefined' && currentUser && typeof fbDb !== 'undefined' && firestoreReady){
      const payload = JSON.stringify(data);
      if(payload.length > 950000){
        console.warn('MEDCORE: el cuaderno "' + key + '" pesa ' + payload.length + ' caracteres — puede que Firestore lo rechace.');
      }
      fbDb.collection('users').doc(currentUser.uid).collection('notebooks').doc(key)
        .set({ data: payload, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true })
        .catch((err) => { if(err.code !== 'unavailable') console.warn('MEDCORE: no se pudo sincronizar el cuaderno "' + key + '".', err.message); });
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
    <p class="page-sub">Escribe, dibuja, pega (Ctrl+V) o sube una foto directo en la hoja. Se guarda solo.</p>
    ${cuadernoWidgetHTML(key, 'notebook', '70vh')}
  `;

  initCuaderno(key, 'notebook');
}

/* ---------- versión incrustada: para usar DENTRO de una página de contenido ---------- */
function inlineCuadernoHTML(key, widgetId, titulo){
  return `
    <div class="inline-cuaderno">
      <div class="inline-cuaderno-head">
        <span class="inline-cuaderno-title">📓 ${titulo || 'Tu cuaderno mientras lees'}</span>
        <span class="btn-icon inline-cuaderno-collapse" onclick="toggleInlineCuaderno('${widgetId}')">Colapsar ▾</span>
      </div>
      <div class="inline-cuaderno-body" id="${widgetId}-body">
        ${cuadernoWidgetHTML(key, widgetId, '38vh')}
      </div>
    </div>
  `;
}
function initInlineCuaderno(key, widgetId){
  initCuaderno(key, widgetId);
}
function toggleInlineCuaderno(widgetId){
  const body = document.getElementById(widgetId + '-body');
  const btn = document.querySelector(`.inline-cuaderno-collapse[onclick*="${widgetId}"]`);
  if(!body) return;
  const collapsed = body.classList.toggle('ic-collapsed');
  if(btn) btn.textContent = collapsed ? 'Expandir ▸' : 'Colapsar ▾';
}

/* HTML compartido del widget (toolbar + lienzo) — usado tanto en la
   página completa como en la versión incrustada, solo cambia el alto */
function cuadernoWidgetHTML(key, widgetId, maxHeight){
  return `
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
      <label class="btn-icon" style="cursor:pointer;">
        📷 Imagen
        <input type="file" accept="image/*" multiple style="display:none" onchange="handleCuadernoImageUpload(event)">
      </label>
      <span class="btn-icon" onclick="undoCuaderno()">↩ Deshacer</span>
      <span class="btn-icon" onclick="clearCuaderno()">🗑 Borrar todo</span>
      <span class="notebook-save-status" id="${widgetId}-save-status"></span>
    </div>

    <div class="notebook-page-wrap" id="${widgetId}-wrap" style="max-height:${maxHeight};">
      <canvas id="${widgetId}-canvas" class="notebook-canvas"></canvas>
    </div>

    <div class="notebook-more-wrap">
      <div class="btn-icon" onclick="addCuadernoSpace()">+ Agregar más espacio a la hoja</div>
      <span class="muted" style="font-size:11px;">También puedes pegar una imagen directo con Ctrl+V (o mantener presionado y pegar en el celular) mientras el lienzo está enfocado.</span>
    </div>
  `;
}

function initCuaderno(key, widgetId){
  const canvas = document.getElementById(widgetId + '-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  if(!ctx) return;

  const saved = notebookAdapter.get(key);
  const esOscuro = document.documentElement.classList.contains('dark');
  cuadernoState = {
    canvas, ctx, widgetId,
    strokes: saved.strokes || [],
    images: saved.images || [],
    imagesLoaded: [], // <img> ya decodificados, mismo índice que "images"
    current: null,
    color: esOscuro ? '#f0eef5' : '#24243A',
    size: 3.4,
    pageHeight: saved.pageHeight || 1100,
    key
  };

  precargarImagenesCuaderno(() => { resizeCuaderno(); });
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

  // pegar imagen con Ctrl+V (o el menú de pegar en móvil) mientras el lienzo tiene el foco
  canvas.tabIndex = 0; // para que pueda recibir foco y el evento "paste"
  canvas.addEventListener('paste', handleCuadernoPaste);
}

function precargarImagenesCuaderno(onDone){
  const { images } = cuadernoState;
  if(!images.length){ onDone(); return; }
  let pendientes = images.length;
  images.forEach((imgData, i) => {
    const im = new Image();
    im.onload = () => { cuadernoState.imagesLoaded[i] = im; pendientes--; if(pendientes === 0) onDone(); };
    im.onerror = () => { pendientes--; if(pendientes === 0) onDone(); };
    im.src = imgData.dataUrl;
  });
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
  const { ctx, strokes, images, imagesLoaded } = cuadernoState;
  ctx.clearRect(0, 0, PAGE_WIDTH, cuadernoState.pageHeight);
  // las imágenes van de "fondo" — así puedes escribir/dibujar encima para anotarlas
  images.forEach((imgData, i) => {
    const im = imagesLoaded[i];
    if(im) ctx.drawImage(im, imgData.x, imgData.y, imgData.w, imgData.h);
  });
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
  notebookAdapter.set(cuadernoState.key, { strokes: cuadernoState.strokes, images: cuadernoState.images, pageHeight: cuadernoState.pageHeight });
  const status = document.getElementById(cuadernoState.widgetId + '-save-status');
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
  // si lo último fue una imagen (no hay trazos después de ella), deshace la imagen; si no, el último trazo
  if(cuadernoState.strokes.length === 0 && cuadernoState.images.length > 0){
    cuadernoState.images.pop();
    cuadernoState.imagesLoaded.pop();
  } else {
    cuadernoState.strokes.pop();
  }
  redrawCuaderno();
  saveCuaderno();
}
function clearCuaderno(){
  cuadernoState.strokes = [];
  cuadernoState.images = [];
  cuadernoState.imagesLoaded = [];
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

/* ---------- insertar imágenes directo en el lienzo (subida o Ctrl+V) ---------- */
function handleCuadernoImageUpload(ev){
  const files = Array.from(ev.target.files || []);
  files.forEach(procesarImagenParaCuaderno);
  ev.target.value = '';
}
function handleCuadernoPaste(ev){
  const items = Array.from((ev.clipboardData && ev.clipboardData.items) || []);
  const imgItem = items.find(it => it.type.startsWith('image/'));
  if(!imgItem) return; // deja que el pegado normal de texto (si lo hubiera) siga su curso
  ev.preventDefault();
  const file = imgItem.getAsFile();
  if(file) procesarImagenParaCuaderno(file);
}
async function procesarImagenParaCuaderno(file){
  const status = document.getElementById(cuadernoState.widgetId + '-save-status');
  try{
    const dataUrl = await compressImageToDataURL(file, 650, 0.55);
    const tamanoActual = JSON.stringify(cuadernoState.images).length;
    if(tamanoActual + dataUrl.length > IMG_BUDGET_TOTAL){
      if(status) status.textContent = 'Ya no cabe otra imagen en este cuaderno (límite de sincronización) — borra alguna.';
      return;
    }
    // calcula el tamaño en la página manteniendo la proporción, con un ancho fijo cómodo
    const im = new Image();
    im.onload = () => {
      const maxW = PAGE_WIDTH - 80;
      const w = Math.min(maxW, im.width);
      const h = im.height * (w / im.width);
      // se coloca debajo de todo lo que ya hay (trazos + imágenes previas)
      let y = 20;
      cuadernoState.images.forEach(other => { y = Math.max(y, other.y + other.h + 20); });
      cuadernoState.strokes.forEach(s => s.points.forEach(p => { y = Math.max(y, p.y + 20); }));
      // si no cabe en la hoja actual, la agranda automáticamente
      if(y + h + 40 > cuadernoState.pageHeight){
        cuadernoState.pageHeight = y + h + 100;
        resizeCuaderno();
      }
      const imgData = { dataUrl, x: 40, y, w, h };
      cuadernoState.images.push(imgData);
      cuadernoState.imagesLoaded.push(im);
      redrawCuaderno();
      saveCuaderno();
      const wrapEl = cuadernoState.canvas.parentElement;
      wrapEl.scrollTo({ top: (y / PAGE_WIDTH) * wrapEl.clientWidth, behavior: 'smooth' });
    };
    im.src = dataUrl;
  } catch(err){
    if(status) status.textContent = 'Esa imagen no se pudo procesar — intenta con otra.';
    console.warn('MEDCORE: error procesando imagen de cuaderno.', err);
  }
}
