const CACHE='rd-wired-v1';
const ASSETS=['/','/manifest.json','/logo.svg','/icon-192.png','/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))) });
self.addEventListener('fetch', e=>{ e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))); });
