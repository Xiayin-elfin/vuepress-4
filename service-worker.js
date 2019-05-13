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
    "revision": "da269f281f6222b60d08b437f67b37c5"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.5e11147b.js",
    "revision": "c89120c78667379ae9614b7669453512"
  },
  {
    "url": "assets/js/3.b178f3fb.js",
    "revision": "0aab83e6401bdb9aba67e406172f74c6"
  },
  {
    "url": "assets/js/4.fe8d0e78.js",
    "revision": "d6d5f6c44d622a0cdd9bf785e005639a"
  },
  {
    "url": "assets/js/5.77c49b7e.js",
    "revision": "58a84dbc73251baf816db2ec389a2549"
  },
  {
    "url": "assets/js/6.6f6a0f54.js",
    "revision": "941e2fa7c1624051e9702483cd90558c"
  },
  {
    "url": "assets/js/app.4b0e09c0.js",
    "revision": "23ec9349cd6e97d188561ad67c0654f9"
  },
  {
    "url": "blog/demo1.html",
    "revision": "67b89d2124d4993bdd66576dfd228881"
  },
  {
    "url": "blog/index.html",
    "revision": "30fb571c71f39860a91382f643a5e4a9"
  },
  {
    "url": "index.html",
    "revision": "0996121c14706bfd0ce1c301454f924f"
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
