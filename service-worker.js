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
    "revision": "bd3730b8f41dffe76f61cbb93defa511"
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
    "url": "assets/img/this1.d2763541.png",
    "revision": "d2763541e71b2ddffd31fe14613018d5"
  },
  {
    "url": "assets/img/this2.9e9bc715.png",
    "revision": "9e9bc7157bf22d9ae8dc61a3ba6f8d32"
  },
  {
    "url": "assets/img/this3.f0f3d716.png",
    "revision": "f0f3d716c117d33e84d3620cc44cbc99"
  },
  {
    "url": "assets/js/2.5ca67608.js",
    "revision": "6726c0039ca6c8f3a387d43d567f3bf0"
  },
  {
    "url": "assets/js/3.8dad80f1.js",
    "revision": "63dd2ae7e289283bd708fb045ea09010"
  },
  {
    "url": "assets/js/4.8f38c902.js",
    "revision": "095ef1ca29451427c3f35722e81cf17f"
  },
  {
    "url": "assets/js/5.b43f2347.js",
    "revision": "5783175ef5581e98177a1dc72c9ba9e1"
  },
  {
    "url": "assets/js/6.5394826a.js",
    "revision": "4a59f916ee52014a1c3defc748cd3d98"
  },
  {
    "url": "assets/js/7.495ad306.js",
    "revision": "d1e031e150e7c4bef08663e53af41c3a"
  },
  {
    "url": "assets/js/8.26b6f54b.js",
    "revision": "4c3f2d1e03c06962bbcc3271d1274948"
  },
  {
    "url": "assets/js/9.7e39b353.js",
    "revision": "33ba832d58f0c78c937318d7f1fd1fa6"
  },
  {
    "url": "assets/js/app.c7ef1921.js",
    "revision": "7f838ba422418a27179df99b387458f6"
  },
  {
    "url": "blog/CSS实现导航栏动画/demo.html",
    "revision": "ae57255da93f69e56963df1a2ec7dfc9"
  },
  {
    "url": "blog/form表单提交/demo.html",
    "revision": "5c23ff505111ca6016645c8f81ddfde5"
  },
  {
    "url": "blog/margin踩坑总结/demo.html",
    "revision": "5df6b058b3fa17044a69871d50d5b8bb"
  },
  {
    "url": "blog/this总结/demo.html",
    "revision": "917866bd9fcff0a1a66bfdfad3ab7795"
  },
  {
    "url": "blog/搭建vue项目并且vuePress的使用/demo1.html",
    "revision": "4ac7e06915d1421bb22a6ee8d9b48325"
  },
  {
    "url": "index.html",
    "revision": "2271adcb8be210f6609d2f7dc46c5184"
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
