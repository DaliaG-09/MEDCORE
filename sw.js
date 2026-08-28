/* ============================================================
   MEDCORE — service worker
   Cachea todos los archivos de la app la primera vez que se
   visita con internet. Después, aunque no haya conexión, el
   navegador sirve estos archivos desde la copia local.
   Cuando yo actualice contenido, solo sube la versión de
   CACHE_NAME (ej. 'medcore-v2') y el navegador refresca la copia.
   ============================================================ */

const CACHE_NAME = 'medcore-v76';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './icons.js',
  './notes.js',
  './notebook.js',
  './highlight.js',
  './quiz.js',
  './casos.js',
  './examen.js',
  './hospital-sesiones.js',
  './firebase-config.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './assets/epoc-airway.svg',
  './assets/epoc/epoc-patogenia-diagrama.jpg',
  './assets/epoc/epoc-rx-hiperinflacion.jpg',
  './assets/nexu-logo.svg',
  './assets/referencia-panalizacion-tc.png',
  './assets/examenes-dx/rx-torax-pa-normal.jpg',
  './assets/examenes-dx/rx-torax-lateral.jpg',
  './assets/examenes-dx/rx-torax-hallazgos-anotados.jpg',
  './assets/examenes-dx/tc-torax-cortes-axiales.jpg',
  './assets/examenes-dx/espirometria-procedimiento.jpg',
  './assets/examenes-dx/asa-flujo-volumen.jpg',
  './assets/examenes-dx/toracocentesis-tecnica.jpg',
  './assets/examenes-dx/toracocentesis-guiada-ecografia.jpg',
  './assets/examenes-dx/arbol-bronquial-3d.jpg',
  './assets/taller-imagenes-s2/taller-s2-nac-flechas.jpg',
  './assets/taller-imagenes-s2/taller-s2-tb-cavitacion.jpg',
  './assets/taller-imagenes-s2/taller-s2-neumotorax-linea-pleural.jpg',
  './assets/taller-imagenes-s2/taller-s2-derrame-menisco.jpg',
  './assets/taller-imagenes-s2/taller-s2-atelectasia-hemitorax-derecho.jpg',
  './fonts/nunito-sans-latin-700-normal.woff2',
  './fonts/nunito-sans-latin-800-normal.woff2',
  './fonts/inter-latin-400-normal.woff2',
  './fonts/inter-latin-500-normal.woff2',
  './fonts/inter-latin-600-normal.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // { cache: 'reload' } fuerza a pedir el archivo fresco al servidor,
      // en vez de reusar una copia vieja que el navegador tenga guardada
      return Promise.all(
        ASSETS.map((url) =>
          fetch(url, { cache: 'reload' }).then((response) => cache.put(url, response))
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          // guarda en caché copias nuevas de páginas visitadas para la próxima vez sin internet
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
