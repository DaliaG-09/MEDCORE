/* ============================================================
   MEDCORE — service worker
   Cachea todos los archivos de la app la primera vez que se
   visita con internet. Después, aunque no haya conexión, el
   navegador sirve estos archivos desde la copia local.
   Cuando yo actualice contenido, solo sube la versión de
   CACHE_NAME (ej. 'medcore-v2') y el navegador refresca la copia.
   ============================================================ */

const CACHE_NAME = 'medcore-v10';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './icons.js',
  './notes.js',
  './draw.js',
  './firebase-config.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './assets/epoc-airway.svg',
  './assets/nexu-logo.svg',
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
