/* ============================================================
   MEDCORE — subrayado / resaltado de texto
   ------------------------------------------------------------
   Selecciona texto en cualquier tarjeta de contenido o en tus
   notas, y aparece un pequeño menú para resaltarlo. Funciona
   con mouse (compu) y con el dedo/lápiz (tablet). Los resaltados
   se guardan y se sincronizan igual que el resto (localStorage +
   Firestore si hay sesión iniciada).
   ============================================================ */

let hlPopupEl = null;
let hlActiveZone = null;
let hlSelectionTimer = null;
let hlUltimoCreado = null; // { markEl, zona } — el último resaltado creado, para Ctrl+Z

function initHighlighting(){
  if(hlPopupEl) return; // ya inicializado
  hlPopupEl = document.createElement('div');
  hlPopupEl.className = 'hl-popup';
  hlPopupEl.innerHTML = `
    <span class="hl-swatch hl-yellow" data-color="hl-yellow" onmousedown="event.preventDefault()" onclick="applyHighlight('hl-yellow')"></span>
    <span class="hl-swatch hl-mint" data-color="hl-mint" onmousedown="event.preventDefault()" onclick="applyHighlight('hl-mint')"></span>
    <span class="hl-swatch hl-coral" data-color="hl-coral" onmousedown="event.preventDefault()" onclick="applyHighlight('hl-coral')"></span>
    <span class="hl-remove" onmousedown="event.preventDefault()" onclick="removeHighlight()">✕</span>
  `;
  document.body.appendChild(hlPopupEl);

  // "selectionchange" es el evento más confiable para detectar selección de
  // texto en cualquier dispositivo — funciona igual con mouse (arrastrar y
  // soltar) que con el dedo/lápiz en tablet (que no siempre dispara mouseup
  // de forma predecible). Se usa con un pequeño debounce para esperar a que
  // la selección "se asiente" antes de mostrar el menú.
  document.addEventListener('selectionchange', () => {
    clearTimeout(hlSelectionTimer);
    hlSelectionTimer = setTimeout(evaluateSelection, 250);
  });
  // respaldo adicional para mouse/touch, por si selectionchange llega tarde
  document.addEventListener('mouseup', (ev) => { if(!hlPopupEl.contains(ev.target)) evaluateSelection(); });
  document.addEventListener('touchend', (ev) => { if(!hlPopupEl.contains(ev.target)) setTimeout(evaluateSelection, 150); });

  document.addEventListener('mousedown', (ev) => {
    if(!hlPopupEl.contains(ev.target) && !findHlZone(ev.target)) hidePopup();
  });

  // Ctrl+Z (o Cmd+Z en Mac) deshace el ÚLTIMO resaltado creado — sin tocar los anteriores
  document.addEventListener('keydown', (ev) => {
    const esUndo = (ev.ctrlKey || ev.metaKey) && !ev.shiftKey && ev.key.toLowerCase() === 'z';
    if(esUndo && hlUltimoCreado){
      ev.preventDefault();
      deshacerUltimoResaltado();
    }
  });
}

function deshacerUltimoResaltado(){
  if(!hlUltimoCreado) return;
  const { markEl, zona } = hlUltimoCreado;
  if(markEl && markEl.parentNode){
    const parent = markEl.parentNode;
    while(markEl.firstChild) parent.insertBefore(markEl.firstChild, markEl);
    parent.removeChild(markEl);
    parent.normalize();
    saveZoneHighlights(zona);
  }
  hlUltimoCreado = null;
}

function evaluateSelection(){
  const sel = window.getSelection();
  if(!sel || sel.isCollapsed || sel.rangeCount === 0){ hidePopup(); return; }
  const range = sel.getRangeAt(0);
  if(!range || range.toString().trim().length === 0){ hidePopup(); return; }
  const zone = findHlZone(range.commonAncestorContainer);
  if(!zone){ hidePopup(); return; }
  hlActiveZone = zone;
  showPopupNear(range);
}

function findHlZone(node){
  let el = node.nodeType === 3 ? node.parentElement : node;
  while(el){
    if(el.classList && el.classList.contains('hl-zone')) return el;
    el = el.parentElement;
  }
  return null;
}

function showPopupNear(range){
  const rect = range.getBoundingClientRect();
  hlPopupEl.style.display = 'flex';
  const top = window.scrollY + rect.top - 44;
  const left = window.scrollX + rect.left + (rect.width/2) - 60;
  hlPopupEl.style.top = Math.max(8, top) + 'px';
  hlPopupEl.style.left = Math.max(8, left) + 'px';
}
function hidePopup(){
  if(hlPopupEl) hlPopupEl.style.display = 'none';
}

function applyHighlight(colorClass){
  const sel = window.getSelection();
  if(!sel || sel.rangeCount === 0 || !hlActiveZone) return;
  const range = sel.getRangeAt(0);
  if(range.collapsed) return;

  const mark = document.createElement('mark');
  mark.className = 'hl ' + colorClass;
  try{
    range.surroundContents(mark);
  } catch(e){
    // la selección cruza varios elementos (ej. dos <li> distintos) — usar extractContents como respaldo
    const frag = range.extractContents();
    mark.appendChild(frag);
    range.insertNode(mark);
  }
  sel.removeAllRanges();
  hidePopup();
  hlUltimoCreado = { markEl: mark, zona: hlActiveZone }; // para poder deshacer con Ctrl+Z
  saveZoneHighlights(hlActiveZone);
}

function removeHighlight(){
  const sel = window.getSelection();
  if(!sel || sel.rangeCount === 0 || !hlActiveZone) return;
  const range = sel.getRangeAt(0);
  let node = range.commonAncestorContainer;
  let markEl = node.nodeType === 3 ? node.parentElement : node;
  while(markEl && markEl.tagName !== 'MARK') markEl = markEl.parentElement;
  if(markEl && markEl.tagName === 'MARK'){
    if(hlUltimoCreado && hlUltimoCreado.markEl === markEl) hlUltimoCreado = null; // ya no existe, evita que Ctrl+Z intente revivirlo
    const parent = markEl.parentNode;
    while(markEl.firstChild) parent.insertBefore(markEl.firstChild, markEl);
    parent.removeChild(markEl);
    parent.normalize();
  }
  sel.removeAllRanges();
  hidePopup();
  saveZoneHighlights(hlActiveZone);
}

/* ---------- persistencia: guarda/restaura el HTML resaltado de cada zona ---------- */
function saveZoneHighlights(zoneEl){
  const key = zoneEl.dataset.hlKey;
  if(!key) return;
  // si la zona es una nota, guarda a través del sistema de notas (mismo storage, misma sincronización)
  if(key.startsWith('note::')){
    const noteKey = key.slice('note::'.length);
    notesAdapter.set(noteKey, zoneEl.innerHTML);
    return;
  }
  localStorage.setItem('medcore-hl::' + key, zoneEl.innerHTML);
  if(typeof currentUser !== 'undefined' && currentUser && typeof fbDb !== 'undefined' && firestoreReady){
    fbDb.collection('users').doc(currentUser.uid).collection('highlights').doc(key)
      .set({ html: zoneEl.innerHTML, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true })
      .catch(() => {});
  }
}
function restoreZoneHighlights(scopeSelector){
  document.querySelectorAll(scopeSelector + ' .hl-zone[data-hl-key]').forEach(zone => {
    const key = zone.dataset.hlKey;
    if(key.startsWith('note::')) return; // las notas ya cargan su propio contenido con resaltados incluidos
    const saved = localStorage.getItem('medcore-hl::' + key);
    if(saved) zone.innerHTML = saved;
  });
}
