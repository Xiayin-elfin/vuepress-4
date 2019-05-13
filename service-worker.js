/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d41fabd4e915f310ce17066847d29713"
  },
  {
    "url": "assets/css/0.styles.07612dee.css",
    "revision": "fcba05af3cede98ac55f9d1fa8f436d2"
  },
  {
    "url": "assets/img/demo-1.ef9c4174.png",
    "revision": "ef9c4174065e5abb963d111086bc8d95"
  },
  {
    "url": "assets/img/demo-2.6e3e536f.png",
    "revision": "6e3e536fb9a00fa968c681c9d989c8b2"
  },
  {
    "url": "assets/img/demo-3.3a7bbd6a.png",
    "revision": "3a7bbd6a421e2046ace9649f67f7bf9b"
  },
  {
    "url": "assets/img/demo-4.ee8a8510.png",
    "revision": "ee8a851032a8afca66792adccf3545cf"
  },
  {
    "url": "assets/img/demo-5.9ddfd9b2.png",
    "revision": "9ddfd9b24ef9fe8802ec3aa76e769891"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.808d885c.js",
    "revision": "25d604068222a8a9abd0890fbdda263b"
  },
  {
    "url": "assets/js/3.dc81723e.js",
    "revision": "aa47237be67c68884b2cbd09f2257588"
  },
  {
    "url": "assets/js/4.a6a97a89.js",
    "revision": "8a1a8a9443f30d0fd4ce4586d8f8f357"
  },
  {
    "url": "assets/js/5.d9ba7676.js",
    "revision": "59a9bd9f210c2910196136736cfe5dd1"
  },
  {
    "url": "assets/js/6.a0e165ad.js",
    "revision": "8db40d06e4adafc33ab5f9b94647cbd0"
  },
  {
    "url": "assets/js/app.e780763a.js",
    "revision": "b94fb0ef9f59782ba048fab642ded5fa"
  },
  {
    "url": "blog/demo1.html",
    "revision": "c0b672de64942097c7ce2e18d982d54e"
  },
  {
    "url": "blog/index.html",
    "revision": "201b661996fa9ba90b478d95b2f4c732"
  },
  {
    "url": "index.html",
    "revision": "e0f1c2edfe668602a894680662505a87"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
