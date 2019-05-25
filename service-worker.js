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
    "revision": "ad45e31c887f82d35c2d49fd38a97d8d"
  },
  {
    "url": "assets/css/0.styles.07612dee.css",
    "revision": "fcba05af3cede98ac55f9d1fa8f436d2"
  },
  {
    "url": "assets/img/demo-1.aa725354.png",
    "revision": "aa72535444e209daff73b0bff8041145"
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
    "url": "assets/img/demo1.4ab651a5.gif",
    "revision": "4ab651a5099489f7abc00c516c5d5dfa"
  },
  {
    "url": "assets/img/demo2.f9038228.gif",
    "revision": "f903822841e45f12135d6018a46c0882"
  },
  {
    "url": "assets/img/demo4.acbaf5f6.gif",
    "revision": "acbaf5f612a5447b65bb9a25c5638bcc"
  },
  {
    "url": "assets/img/demo5.e7e18c39.gif",
    "revision": "e7e18c39aca19d56bcd067fdf9782fc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.1e152a64.js",
    "revision": "0ab3ab1afc2b5560eade436e26e4d06e"
  },
  {
    "url": "assets/js/3.2e8f81ff.js",
    "revision": "4dc8d148c3d60610021fb980ae27bc2b"
  },
  {
    "url": "assets/js/4.9eb774fe.js",
    "revision": "e90851753f0eadf5443b055102d72467"
  },
  {
    "url": "assets/js/5.e72d58eb.js",
    "revision": "49cd6dd2570ce60654f890d69bec8c1e"
  },
  {
    "url": "assets/js/6.850f8313.js",
    "revision": "e28dcec36922817dbcecb915b4c24c61"
  },
  {
    "url": "assets/js/app.81989781.js",
    "revision": "5e0c682bd9f5a85b4f1d3c560e946a4e"
  },
  {
    "url": "blog/demo1.html",
    "revision": "56e593628061d36ccf96b17d385dc6f0"
  },
  {
    "url": "blog/index.html",
    "revision": "b25bb8953e23838e33f2e8c3e218a176"
  },
  {
    "url": "index.html",
    "revision": "8128b9652a139bd535d28f1a62cfc0d0"
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
