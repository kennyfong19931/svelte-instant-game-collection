!function(){"use strict";const e=["client/client.12e0c622.js","client/index.d056d1bf.js","client/index.c26824d6.js","client/yearlist.dc9e056a.js","client/index.85b6dc43.js","client/index.0e14092f.js","client/index.f493852a.js","client/client.4368c781.js"].concat(["service-worker-index.html","favicon.png","global.css","img/Dead-Star.jpg","img/Drawn-to-Death.jpg","logo-192.png","logo-512.png","logo.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1595943351627").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1595943351627"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1595943351627").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
