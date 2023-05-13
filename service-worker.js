const l = [
  "/_app/immutable/assets/_layout-c297bb37.css",
  "/_app/immutable/assets/toolbar-88f661d3.css",
  "/_app/immutable/assets/_error-b20769a5.css",
  "/_app/immutable/assets/codemirror-f9a2d0c7.css",
  "/_app/immutable/start-88ca957e.js",
  "/_app/immutable/chunks/stores-6b826757.js",
  "/_app/immutable/chunks/singletons-37c91c7d.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/components/pages/_page.svelte-c63454ae.js",
  "/_app/immutable/chunks/footer-88b4acc5.js",
  "/_app/immutable/chunks/toast-6d7765c1.js",
  "/_app/immutable/chunks/markmap-ce07e57d.js",
  "/_app/immutable/chunks/ga-f2416bc8.js",
  "/_app/immutable/chunks/index-90fe3501.js",
  "/_app/immutable/chunks/5-35ba60f9.js",
  "/_app/immutable/chunks/6-c6cc3f1d.js",
  "/_app/immutable/chunks/7-cbac6a8a.js",
  "/_app/immutable/chunks/8-3d919c22.js",
  "/_app/immutable/chunks/packages--markmap-lib-998051a3.js",
  "/_app/immutable/chunks/loader-19cd47b7.js",
  "/_app/immutable/components/pages/inner/_page.svelte-401e4d1d.js",
  "/_app/immutable/components/pages/usage/_page.svelte-423fdbaa.js",
  "/_app/immutable/chunks/buttons.esm-399bf8fe.js",
  "/_app/immutable/chunks/faq-853276a1.js",
  "/_app/immutable/chunks/json-options-3b4ebdf8.js",
  "/_app/immutable/chunks/markmap-ef13e9c4.js",
  "/_app/immutable/chunks/packages--coc-markmap-10bd7856.js",
  "/_app/immutable/chunks/packages--markmap-cli-f1154d19.js",
  "/_app/immutable/chunks/1-6f7bbfbd.js",
  "/_app/immutable/components/pages/full/_page.svelte-1b47d229.js",
  "/_app/immutable/chunks/0-abcaca7c.js",
  "/_app/immutable/chunks/2-d2371b45.js",
  "/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/_app/immutable/modules/pages/docs/_id_/_page.ts-415cbb04.js",
  "/_app/immutable/chunks/3-3024fb56.js",
  "/_app/immutable/components/pages/docs/_page.svelte-d8d0e8ab.js",
  "/_app/immutable/chunks/navigation-c7bd922a.js",
  "/_app/immutable/components/pages/docs/_id_/_page.svelte-1d226e1e.js",
  "/_app/immutable/chunks/_page-f1640077.js",
  "/_app/immutable/chunks/packages--markmap-view-dd8bb7e3.js",
  "/_app/immutable/chunks/4-f4e1c5c9.js",
  "/_app/immutable/chunks/toolbar-146086e3.js",
  "/_app/immutable/components/pages/_error.svelte-cf08e7e2.js",
  "/_app/immutable/components/pages/_layout.svelte-15bbc983.js",
  "/_app/immutable/components/pages/repl/_page.svelte-5aaf4453.js",
  "/_app/immutable/chunks/codemirror-c16b028a.js",
  "/_app/immutable/chunks/debounce-8863b0ac.js"
], u = [
  "/.nojekyll",
  "/.well-known/brave-rewards-verification.txt",
  "/favicon.png",
  "/lib/d3.js",
  "/lib/markmap-toolbar.css",
  "/lib/markmap-toolbar.js",
  "/lib/markmap-view.js",
  "/logo-192.png",
  "/logo-512.png",
  "/manifest.json"
], c = "1683959579258", m = `cache${c}`, n = l.concat(u), i = new Set(n);
self.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(m).then((e) => e.addAll(n)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const s of e)
        s !== m && await caches.delete(s);
      self.clients.claim();
    })
  );
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url);
  if (e.protocol.startsWith("http") && !(e.hostname === self.location.hostname && e.port !== self.location.port)) {
    if (e.host === self.location.host && i.has(e.pathname)) {
      a.respondWith(caches.match(a.request, { ignoreSearch: !0 }));
      return;
    }
    a.request.cache !== "only-if-cached" && [self.location.host, "cdn.jsdelivr.net"].includes(e.host) && a.respondWith(
      caches.open(`offline${c}`).then(async (s) => {
        try {
          const t = await fetch(a.request);
          return s.put(a.request, t.clone()), t;
        } catch (t) {
          const p = await s.match(a.request);
          if (p)
            return p;
          throw t;
        }
      })
    );
  }
});
