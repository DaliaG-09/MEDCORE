/* ============================================================
   MEDCORE — apuntes con sincronización real entre dispositivos
   ------------------------------------------------------------
   Cómo funciona:
   1. localStorage guarda una copia instantánea en cada
      dispositivo -> las notas se ven al instante, incluso
      sin internet, incluso antes de iniciar sesión.
   2. Firestore (con persistencia offline activada) guarda la
      copia "maestra". Cuando hay internet, sincroniza en
      segundos entre todos tus dispositivos logueados con la
      misma cuenta. Cuando NO hay internet, Firestore encola
      los cambios localmente y los sube solos en cuanto vuelve
      la conexión — no pierdes nada.
   3. Necesitas iniciar sesión (correo + contraseña) UNA vez
      por dispositivo para que sepa que las notas son tuyas.
   ============================================================ */

let fbApp, fbAuth, fbDb;
let currentUser = null;
let firestoreReady = false;

function initFirebase(){
  try{
    fbApp = firebase.initializeApp(firebaseConfig);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
    fbDb.enablePersistence({ synchronizeTabs: true }).catch(() => {
      /* si falla (ej. modo incógnito o múltiples pestañas viejas),
         la app sigue funcionando, solo sin caché avanzada de Firestore */
    });
    firestoreReady = true;

    fbAuth.onAuthStateChanged((user) => {
      currentUser = user;
      renderAuthBar();
      if(user) attachRemoteListeners();
    });
  } catch(err){
    console.warn('Firebase no se pudo inicializar, las notas solo se guardarán en este dispositivo.', err);
  }
}

/* ---------- barra de sesión (arriba del todo) ---------- */
function renderAuthBar(){
  const el = document.getElementById('auth-bar');
  if(!el) return;

  if(currentUser){
    el.innerHTML = `
      <div class="auth-bar synced">
        <span>🔄 Sincronizado como <strong>${currentUser.email}</strong></span>
        <span class="btn-icon" onclick="fbAuth.signOut()">Cerrar sesión</span>
      </div>`;
    return;
  }

  el.innerHTML = `
    <div class="auth-bar">
      <span>Inicia sesión para sincronizar tus apuntes entre dispositivos:</span>
      <input id="auth-email" type="email" placeholder="tu correo" class="auth-input">
      <input id="auth-pass" type="password" placeholder="contraseña (mín. 6 caracteres)" class="auth-input">
      <span class="btn-icon" onclick="handleAuthSubmit()">Entrar / Crear cuenta</span>
      <span id="auth-error" class="auth-error"></span>
    </div>`;
}

function handleAuthSubmit(){
  const email = document.getElementById('auth-email').value.trim();
  const pass = document.getElementById('auth-pass').value;
  const errEl = document.getElementById('auth-error');
  errEl.textContent = '';

  if(!email || pass.length < 6){
    errEl.textContent = 'Escribe un correo y una contraseña de al menos 6 caracteres.';
    return;
  }

  fbAuth.signInWithEmailAndPassword(email, pass).catch((err) => {
    if(err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential'){
      // primera vez en este dispositivo/cuenta -> crea la cuenta automáticamente
      fbAuth.createUserWithEmailAndPassword(email, pass).catch((err2) => {
        errEl.textContent = traduceErrorFirebase(err2.code);
      });
    } else {
      errEl.textContent = traduceErrorFirebase(err.code);
    }
  });
}

function traduceErrorFirebase(code){
  const map = {
    'auth/wrong-password': 'Contraseña incorrecta.',
    'auth/invalid-email': 'Ese correo no es válido.',
    'auth/email-already-in-use': 'Ese correo ya tiene una cuenta — revisa la contraseña.',
    'auth/weak-password': 'La contraseña necesita al menos 6 caracteres.',
    'auth/network-request-failed': 'Sin conexión — tus notas se siguen guardando localmente y se sincronizarán cuando vuelva el internet.'
  };
  return map[code] || 'No se pudo iniciar sesión. Intenta de nuevo.';
}

/* ---------- adaptador de notas: local primero, Firestore detrás ---------- */
const activeTextareas = {};

const notesAdapter = {
  get(key){
    return localStorage.getItem('medcore-note::' + key) || '';
  },
  set(key, value){
    localStorage.setItem('medcore-note::' + key, value);
    if(currentUser && firestoreReady){
      // Firestore rechaza documentos de más de ~1MB — si algo se pasa (ej. demasiadas
      // fotos comprimidas juntas), mejor avisar en consola que fallar en silencio.
      if(value.length > 950000){
        console.warn('MEDCORE: "' + key + '" pesa ' + value.length + ' caracteres — puede que Firestore lo rechace y no sincronice entre dispositivos.');
      }
      fbDb.collection('users').doc(currentUser.uid).collection('notes').doc(key)
        .set({ text: value, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true })
        .catch((err) => {
          // "unavailable" = sin internet, Firestore reintenta solo — no es un error real, no avisar.
          if(err.code !== 'unavailable') console.warn('MEDCORE: no se pudo sincronizar "' + key + '" con Firestore.', err.message);
        });
    }
  }
};

/* Escucha cambios remotos (ej. escribiste en el celular) y actualiza
   el div editable en pantalla si está abierto, sin que pierdas lo que
   estés escribiendo en este dispositivo en ese instante. */
function attachRemoteListeners(){
  fbDb.collection('users').doc(currentUser.uid).collection('notes')
    .onSnapshot((snap) => {
      snap.docChanges().forEach((change) => {
        const key = change.doc.id;
        const remoteText = change.doc.data().text || '';
        localStorage.setItem('medcore-note::' + key, remoteText);
        const el = activeTextareas[key];
        if(el && document.activeElement !== el){
          el.innerHTML = remoteText;
        }
      });
    }, () => { /* offline: Firestore sigue sirviendo la última copia en caché */ });
}

/* Devuelve el HTML de un bloque de apunte para una clave dada
   (ej. "epoc::profundo" o "epoc::fisiopatologia"). Usa un div
   editable (no textarea) para poder resaltar texto dentro. */
function noteBlockHTML(key, placeholder){
  const value = notesAdapter.get(key);
  const safeId = 'note-' + key.replace(/[^a-z0-9]/gi, '-');
  // compatibilidad: notas viejas guardadas como texto plano se muestran igual dentro del div
  const htmlValue = /<[a-z][\s\S]*>/i.test(value) ? value : value.replace(/\n/g, '<br>');
  return `
    <div class="note-block">
      <div class="note-head">
        <span class="note-label">✎ Mi apunte</span>
        <span class="note-status" id="${safeId}-status"></span>
      </div>
      <div class="note-editable hl-zone" id="${safeId}" contenteditable="true" data-hl-key="note::${key}"
        data-placeholder="${placeholder || 'Escribe aquí lo que quieras recordar de esta sección...'}"
        oninput="handleNoteInput('${key}','${safeId}')">${htmlValue}</div>
    </div>
  `;
}

let noteSaveTimers = {};
function handleNoteInput(key, elId){
  const el = document.getElementById(elId);
  activeTextareas[key] = el;
  const status = document.getElementById(elId + '-status');
  status.textContent = 'escribiendo…';
  clearTimeout(noteSaveTimers[key]);
  noteSaveTimers[key] = setTimeout(() => {
    notesAdapter.set(key, el.innerHTML);
    status.textContent = currentUser ? 'sincronizado ✓' : 'guardado en este dispositivo';
    setTimeout(() => { if(status) status.textContent = ''; }, 2000);
  }, 500);
}
