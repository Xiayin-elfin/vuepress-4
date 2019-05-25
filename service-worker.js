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
    "revision": "a18f6953ba9f037cf1966173e28423bf"
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
    "url": "assets/img/form_1.ef22e6f6.png",
    "revision": "ef22e6f6c18c0395088a6263897e4e90"
  },
  {
    "url": "assets/img/form_2.686c299a.png",
    "revision": "686c299a3bafda9047fc3d5b51a8d738"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.130f07d7.js",
    "revision": "96db7be6e320d048d0efacb3cbc2651f"
  },
  {
    "url": "assets/js/3.2d1fa121.js",
    "revision": "c0f87cf899e6c8a05a262263cc9ce045"
  },
  {
    "url": "assets/js/4.d957abb6.js",
    "revision": "1c723f3b8dffa08be7f839cd16604eee"
  },
  {
    "url": "assets/js/5.752f29fd.js",
    "revision": "b537912aa65caefa1f0d674ca40933e7"
  },
  {
    "url": "assets/js/6.7077f411.js",
    "revision": "977748e26e6dff1148702cd23230de92"
  },
  {
    "url": "assets/js/7.3b5dc736.js",
    "revision": "ff5941761dcb1c83d780af735962ed19"
  },
  {
    "url": "assets/js/app.6161bc83.js",
    "revision": "a009c650dbf40ae8579648be5c31b2ef"
  },
  {
    "url": "blog/form表单提交/demo.html",
    "revision": "9d99546350cecd7be6965195fea0871d"
  },
  {
    "url": "blog/margin踩坑总结及纯CSS实现导航栏动画/demo2.html",
    "revision": "b09a061fbfadd339c04fb63c69462229"
  },
  {
    "url": "blog/搭建vue项目并且vuePress的使用/demo1.html",
    "revision": "8b613a7a82cc3017c89d377640cc89e2"
  },
  {
    "url": "index.html",
    "revision": "24a9115146af8bbfedefc840207a9fb2"
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
