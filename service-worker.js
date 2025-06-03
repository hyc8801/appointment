const CACHE_NAME = 'yuchangxing-cache-v1.95';
console.log(`🚀🚀🚀CACHE_NAME:`, CACHE_NAME);
const urlsToCache = [
  "./",
  "./index.html",
  "./extend.js",
  "./static/css/app.2e6bfe34408fba4194ca550c2bd769dd.css",
  "./static/img/footer-img.a7441ee.png",
  "./static/img/logo.png",
  "./static/img/not-in-time-icon.8c0e6a0.png",
  "./static/img/overtime-icon.fb6c189.png",
  "./static/img/qrcode.png",
  "./static/js/0.0899f959dabfebdb32bc.js",
  "./static/js/2.d7109026e95cf8c8a0b7.js",
  "./static/js/3.87baa0bc594b69e60bbf.js",
  "./static/js/5.ff0038c04b68c03111da.js",
  "./static/js/app.ed57ec4f925421679b80.js",
  "./static/js/manifest.06a1ffbb70a28d4ba8ef.js",
  "./static/js/vendor.4a1f448b533bb11cede5.js"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
}); 