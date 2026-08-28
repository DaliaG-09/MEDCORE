/* ============================================================
   MEDCORE — cuaderno de clase (hoja "ilimitada")
   ------------------------------------------------------------
   Hoja larga que crece hacia abajo cuando hace falta más espacio.
   Guarda trazos vectoriales + imágenes pegadas/subidas + texto
   tipeado, en un sistema de coordenadas "de página" (794 unidades
   de ancho) para que se vea igual de nítido en el celular, la
   tablet o la compu.

   Puede haber VARIOS cuadernos en la misma página a la vez (ej.
   "Mis apuntes" + la respuesta de cada tarea) — por eso el estado
   de cada uno vive en cuadernoStates[widgetId], no en una sola
   variable global.

   Puede mostrarse de 3 formas, todas comparten el mismo motor:
   - Página completa (navCuaderno) — para escribir con más espacio.
   - Incrustada y sticky (inlineCuadernoHTML) — pegada arriba de
     una página de contenido, para leer y escribir a la vez.
   - Chica, dentro de una tarjeta (cuadernoWidgetHTML directo) —
     ej. la respuesta de una tarea puntual.
   ============================================================ */

const PAGE_WIDTH = 794;   // ancho virtual de la "hoja" (tipo A4 a 96dpi)
const PAGE_HEIGHT_STEP = 700; // cuánto crece la hoja cada vez que pides más espacio
const IMG_BUDGET_TOTAL = 850000; // presupuesto total seguro para todas las imágenes de UN cuaderno (deja margen bajo el límite de Firestore, ~1MB)
let cuadernoStates = {}; // widgetId -> { canvas, ctx, strokes, images, texts, current, color, size, pageHeight, key }

const notebookAdapter = {
  get(key){
    try{ return JSON.parse(localStorage.getItem('medcore-notebook::' + key) || 'null') || { strokes: [], images: [], texts: [], pageHeight: 1100 }; }
    catch(err){ return { strokes: [], images: [], texts: [], pageHeight: 1100 }; }
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
    <p class="page-sub">Escribe, dibuja, pega (Ctrl+V), tipea o sube una foto directo en la hoja. Se guarda solo.</p>
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

/* HTML compartido del widget (toolbar + lienzo) — usado en las 3 formas
   de mostrar el cuaderno, solo cambia el alto. Cada botón le pasa su
   propio widgetId, para que sepamos cuál cuaderno están operando
   cuando hay varios en la misma página (ej. "Mis apuntes" + tareas). */
function cuadernoWidgetHTML(key, widgetId, maxHeight){
  return `
    <div class="notebook-toolbar">
      <span class="swatch active" style="background:#24243A" onclick="setCuadernoColor('${widgetId}','#24243A', this)"></span>
      <span class="swatch" style="background:#D95C65" onclick="setCuadernoColor('${widgetId}','#D95C65', this)"></span>
      <span class="swatch" style="background:#5267E8" onclick="setCuadernoColor('${widgetId}','#5267E8', this)"></span>
      <span class="swatch" style="background:#78C9A3" onclick="setCuadernoColor('${widgetId}','#78C9A3', this)"></span>
      <span class="swatch" style="background:#E8A93D" onclick="setCuadernoColor('${widgetId}','#E8A93D', this)"></span>
      <span class="swatch" style="background:#f0eef5; box-shadow: inset 0 0 0 1px #ccc;" onclick="setCuadernoColor('${widgetId}','#f0eef5', this)" title="Claro (para modo oscuro)"></span>
      <span class="size-sep"></span>
      <span class="size-dot size-sm" onclick="setCuadernoSize('${widgetId}',2, this)" title="Trazo fino"><span></span></span>
      <span class="size-dot size-md active" onclick="setCuadernoSize('${widgetId}',3.4, this)" title="Trazo medio"><span></span></span>
      <span class="size-dot size-lg" onclick="setCuadernoSize('${widgetId}',5.5, this)" title="Trazo grueso"><span></span></span>
      <span class="size-sep"></span>
      <label class="btn-icon" style="cursor:pointer;">
        📷 Imagen
        <input type="file" accept="image/*" multiple style="display:none" onchange="handleCuadernoImageUpload(event, '${widgetId}')">
      </label>
      <span class="btn-icon" onclick="abrirCajaTextoCuaderno('${widgetId}')">⌨️ Texto</span>
      <span class="btn-icon" onclick="undoCuaderno('${widgetId}')">↩ Deshacer</span>
      <span class="btn-icon" onclick="clearCuaderno('${widgetId}')">🗑 Borrar todo</span>
      <span class="notebook-save-status" id="${widgetId}-save-status"></span>
    </div>

    <div class="notebook-page-wrap" id="${widgetId}-wrap" style="max-height:${maxHeight};">
      <canvas id="${widgetId}-canvas" class="notebook-canvas"></canvas>
    </div>

    <div class="notebook-textbox" id="${widgetId}-textbox" style="display:none;">
      <textarea id="${widgetId}-textarea" placeholder="Escribe aquí con el teclado…" rows="3"></textarea>
      <div class="notebook-textbox-actions">
        <span class="btn-icon" onclick="cerrarCajaTextoCuaderno('${widgetId}')">Cancelar</span>
        <span class="btn-icon" onclick="agregarTextoCuaderno('${widgetId}')" style="background:var(--cobalt); color:#fff; border-color:var(--cobalt);">Agregar al cuaderno</span>
      </div>
    </div>

    <div class="notebook-more-wrap">
      <div class="btn-icon" onclick="addCuadernoSpace('${widgetId}')">+ Agregar más espacio a la hoja</div>
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
  const state = {
    canvas, ctx, widgetId,
    strokes: saved.strokes || [],
    images: saved.images || [],
    texts: saved.texts || [],
    imagesLoaded: [], // <img> ya decodificados, mismo índice que "images"
    current: null,
    pointerIdActivo: undefined, // qué dedo/lápiz está dibujando ahora mismo
    usandoLapiz: false, // true mientras el lápiz esté trazando, para ignorar la palma
    color: esOscuro ? '#f0eef5' : '#24243A',
    size: 3.4,
    pageHeight: saved.pageHeight || 1100,
    key
  };
  cuadernoStates[widgetId] = state;

  precargarImagenesCuaderno(widgetId, () => { resizeCuaderno(widgetId); });
  resizeCuaderno(widgetId);
  window.addEventListener('resize', () => resizeCuaderno(widgetId));

  canvas.addEventListener('pointerdown', (ev) => {
    // Rechazo de palma: si ya hay un trazo de LÁPIZ en curso, ignorar cualquier
    // otro toque (la palma de la mano) hasta que ese trazo termine.
    if(state.pointerIdActivo !== undefined && ev.pointerId !== state.pointerIdActivo) return;
    // Si el dispositivo tiene lápiz y este toque es con el dedo/palma (no el lápiz), ignorarlo también.
    if(ev.pointerType === 'touch' && state.usandoLapiz) return;

    if(ev.pointerType === 'pen') state.usandoLapiz = true;
    ev.preventDefault();
    canvas.setPointerCapture(ev.pointerId);
    state.pointerIdActivo = ev.pointerId;
    state.current = { color: state.color, size: state.size, points: [pointFromEventCuaderno(state, ev)], _ts: Date.now() };
  });
  canvas.addEventListener('pointermove', (ev) => {
    if(!state.current || ev.pointerId !== state.pointerIdActivo) return;
    state.current.points.push(pointFromEventCuaderno(state, ev));
    redrawCuaderno(widgetId);
    paintStrokeCuaderno(state, state.current);
  });
  const endStroke = (ev) => {
    if(!state.current || (ev && ev.pointerId !== state.pointerIdActivo)) return;
    if(state.current.points.length > 1) state.strokes.push(state.current);
    state.current = null;
    state.pointerIdActivo = undefined;
    if(ev && ev.pointerType === 'pen') state.usandoLapiz = false;
    saveCuaderno(widgetId);
  };
  canvas.addEventListener('pointerup', endStroke);
  canvas.addEventListener('pointercancel', endStroke);
  canvas.addEventListener('pointerleave', endStroke);

  // pegar imagen con Ctrl+V (o el menú de pegar en móvil) mientras el lienzo tiene el foco
  canvas.tabIndex = 0; // para que pueda recibir foco y el evento "paste"
  canvas.addEventListener('paste', (ev) => handleCuadernoPaste(ev, widgetId));
}

function precargarImagenesCuaderno(widgetId, onDone){
  const state = cuadernoStates[widgetId];
  const { images } = state;
  if(!images.length){ onDone(); return; }
  let pendientes = images.length;
  images.forEach((imgData, i) => {
    const im = new Image();
    im.onload = () => { state.imagesLoaded[i] = im; pendientes--; if(pendientes === 0) onDone(); };
    im.onerror = () => { pendientes--; if(pendientes === 0) onDone(); };
    im.src = imgData.dataUrl;
  });
}

function pointFromEventCuaderno(state, ev){
  const rect = state.canvas.getBoundingClientRect();
  const s = rect.width / PAGE_WIDTH;
  return { x: (ev.clientX - rect.left) / s, y: (ev.clientY - rect.top) / s };
}
function resizeCuaderno(widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  const canvas = state.canvas;
  const wrapEl = canvas.parentElement;
  const displayWidth = wrapEl.clientWidth;
  const s = displayWidth / PAGE_WIDTH;
  canvas.style.width = displayWidth + 'px';
  canvas.style.height = (state.pageHeight * s) + 'px';
  canvas.width = displayWidth * 2;
  canvas.height = state.pageHeight * s * 2;
  state.ctx.setTransform(2 * s, 0, 0, 2 * s, 0, 0);
  redrawCuaderno(widgetId);
}
function redrawCuaderno(widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  const { ctx, strokes, images, imagesLoaded, texts } = state;
  ctx.clearRect(0, 0, PAGE_WIDTH, state.pageHeight);
  // las imágenes van de "fondo" — así puedes escribir/dibujar encima para anotarlas
  images.forEach((imgData, i) => {
    const im = imagesLoaded[i];
    if(im) ctx.drawImage(im, imgData.x, imgData.y, imgData.w, imgData.h);
  });
  (texts || []).forEach(t => paintTextCuaderno(state, t));
  strokes.forEach(s => paintStrokeCuaderno(state, s));
}
function paintTextCuaderno(state, t){
  const { ctx } = state;
  ctx.fillStyle = t.color;
  ctx.font = (t.size || 17) + 'px "Inter", sans-serif';
  ctx.textBaseline = 'top';
  const lineHeight = (t.size || 17) * 1.35;
  (t.text || '').split('\n').forEach((linea, i) => {
    ctx.fillText(linea, t.x, t.y + i * lineHeight);
  });
}
function paintStrokeCuaderno(state, stroke){
  if(stroke.points.length < 2) return;
  const { ctx } = state;
  ctx.strokeStyle = stroke.color;
  ctx.lineWidth = stroke.size;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  stroke.points.forEach((p, i) => { if(i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
  ctx.stroke();
}
function saveCuaderno(widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  notebookAdapter.set(state.key, { strokes: state.strokes, images: state.images, texts: state.texts, pageHeight: state.pageHeight });
  const status = document.getElementById(widgetId + '-save-status');
  if(status){ status.textContent = 'guardado ✓'; setTimeout(() => { if(status) status.textContent = ''; }, 1500); }
}
function setCuadernoColor(widgetId, color, el){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  state.color = color;
  el.parentElement.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}
function setCuadernoSize(widgetId, size, el){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  state.size = size;
  el.parentElement.querySelectorAll('.size-dot').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}
function undoCuaderno(widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  // deshace lo último que se haya agregado, sea trazo, texto o imagen
  const acciones = [
    { tipo: 'texto', cuando: state.texts.length ? state.texts[state.texts.length-1]._ts : -1 },
    { tipo: 'imagen', cuando: state.images.length ? state.images[state.images.length-1]._ts : -1 },
    { tipo: 'trazo', cuando: state.strokes.length ? state.strokes[state.strokes.length-1]._ts : -1 }
  ].sort((a,b) => b.cuando - a.cuando);
  const ultimo = acciones[0];
  if(ultimo.cuando === -1) return; // nada que deshacer
  if(ultimo.tipo === 'texto') state.texts.pop();
  else if(ultimo.tipo === 'imagen'){ state.images.pop(); state.imagesLoaded.pop(); }
  else state.strokes.pop();
  redrawCuaderno(widgetId);
  saveCuaderno(widgetId);
}
function clearCuaderno(widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  state.strokes = [];
  state.images = [];
  state.imagesLoaded = [];
  state.texts = [];
  redrawCuaderno(widgetId);
  saveCuaderno(widgetId);
}
function addCuadernoSpace(widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  state.pageHeight += PAGE_HEIGHT_STEP;
  resizeCuaderno(widgetId);
  saveCuaderno(widgetId);
  const wrapEl = state.canvas.parentElement;
  wrapEl.scrollTo({ top: wrapEl.scrollHeight, behavior: 'smooth' });
}

/* ---------- insertar imágenes directo en el lienzo (subida o Ctrl+V) ---------- */
function handleCuadernoImageUpload(ev, widgetId){
  const files = Array.from(ev.target.files || []);
  files.forEach(file => procesarImagenParaCuaderno(file, widgetId));
  ev.target.value = '';
}
function handleCuadernoPaste(ev, widgetId){
  const items = Array.from((ev.clipboardData && ev.clipboardData.items) || []);
  const imgItem = items.find(it => it.type.startsWith('image/'));
  if(!imgItem) return; // deja que el pegado normal de texto (si lo hubiera) siga su curso
  ev.preventDefault();
  const file = imgItem.getAsFile();
  if(file) procesarImagenParaCuaderno(file, widgetId);
}
async function procesarImagenParaCuaderno(file, widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  const status = document.getElementById(widgetId + '-save-status');
  try{
    const dataUrl = await compressImageToDataURL(file, 650, 0.55);
    const tamanoActual = JSON.stringify(state.images).length;
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
      // se coloca debajo de todo lo que ya hay (trazos + imágenes + textos previos)
      let y = 20;
      state.images.forEach(other => { y = Math.max(y, other.y + other.h + 20); });
      state.texts.forEach(t => { y = Math.max(y, t.y + (t.h || 30) + 20); });
      state.strokes.forEach(s => s.points.forEach(p => { y = Math.max(y, p.y + 20); }));
      // si no cabe en la hoja actual, la agranda automáticamente
      if(y + h + 40 > state.pageHeight){
        state.pageHeight = y + h + 100;
        resizeCuaderno(widgetId);
      }
      const imgData = { dataUrl, x: 40, y, w, h, _ts: Date.now() };
      state.images.push(imgData);
      state.imagesLoaded.push(im);
      redrawCuaderno(widgetId);
      saveCuaderno(widgetId);
      const wrapEl = state.canvas.parentElement;
      wrapEl.scrollTo({ top: (y / PAGE_WIDTH) * wrapEl.clientWidth, behavior: 'smooth' });
    };
    im.src = dataUrl;
  } catch(err){
    if(status) status.textContent = 'Esa imagen no se pudo procesar — intenta con otra.';
    console.warn('MEDCORE: error procesando imagen de cuaderno.', err);
  }
}

/* ---------- escribir texto con el teclado (compu, sin lápiz) ---------- */
function abrirCajaTextoCuaderno(widgetId){
  const box = document.getElementById(widgetId + '-textbox');
  const textarea = document.getElementById(widgetId + '-textarea');
  if(!box) return;
  box.style.display = 'block';
  textarea.value = '';
  textarea.focus();
}
function cerrarCajaTextoCuaderno(widgetId){
  const box = document.getElementById(widgetId + '-textbox');
  if(box) box.style.display = 'none';
}
function agregarTextoCuaderno(widgetId){
  const state = cuadernoStates[widgetId];
  if(!state) return;
  const textarea = document.getElementById(widgetId + '-textarea');
  const texto = textarea.value.trim();
  if(!texto){ cerrarCajaTextoCuaderno(widgetId); return; }

  const size = 17;
  const lineHeight = size * 1.35;
  const lineas = texto.split('\n');
  state.ctx.font = size + 'px "Inter", sans-serif';
  const anchoMax = Math.max(...lineas.map(l => state.ctx.measureText(l).width));
  const alto = lineas.length * lineHeight + 10;

  // se coloca debajo de todo lo que ya hay (trazos + imágenes + textos previos)
  let y = 20;
  state.images.forEach(im => { y = Math.max(y, im.y + im.h + 20); });
  state.texts.forEach(t => { y = Math.max(y, t.y + (t.h || 30) + 20); });
  state.strokes.forEach(s => s.points.forEach(p => { y = Math.max(y, p.y + 20); }));

  if(y + alto + 40 > state.pageHeight){
    state.pageHeight = y + alto + 100;
    resizeCuaderno(widgetId);
  }

  state.texts.push({ text: texto, x: 40, y, w: Math.min(anchoMax, PAGE_WIDTH - 80), h: alto, size, color: state.color, _ts: Date.now() });
  redrawCuaderno(widgetId);
  saveCuaderno(widgetId);
  cerrarCajaTextoCuaderno(widgetId);

  const wrapEl = state.canvas.parentElement;
  wrapEl.scrollTo({ top: (y / PAGE_WIDTH) * wrapEl.clientWidth, behavior: 'smooth' });
}
