// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

// workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.CacheFirst()
// );
var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});