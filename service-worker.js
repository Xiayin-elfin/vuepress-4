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
    "revision": "b7028818bae39b8fc9fc95a74400a2db"
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
    "url": "assets/img/demo.247a5e38.gif",
    "revision": "247a5e38164a5736b1fd51fb94c208f4"
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
    "url": "assets/img/loading-1.cc0dc9a1.jpg",
    "revision": "cc0dc9a1cb0c7222f8055bc8d441a79f"
  },
  {
    "url": "assets/img/loading-svg-1.9ff99223.gif",
    "revision": "9ff99223ee6299c7a0aa8f0c3aeda091"
  },
  {
    "url": "assets/img/loading-svg-3.8ad0d6bf.gif",
    "revision": "8ad0d6bf364ad535ebe79777e13099f4"
  },
  {
    "url": "assets/img/loading-svg-4.9db7fb66.gif",
    "revision": "9db7fb662101fa71f30dd36f362e9b7d"
  },
  {
    "url": "assets/img/loading-svg-5.f1d32f09.gif",
    "revision": "f1d32f099363bc071731bbb207b76614"
  },
  {
    "url": "assets/img/loading-svg-offset-1.664ec125.jpg",
    "revision": "664ec125b68a89526394f4a6f6288637"
  },
  {
    "url": "assets/img/loading-svg-offset-2.6f1c258d.jpg",
    "revision": "6f1c258d472f21ef86c33b4dae1da19d"
  },
  {
    "url": "assets/img/loading-svg.f2a909bf.gif",
    "revision": "f2a909bf92ee65217bdece14dea9860d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/stroke-dasharray.0ea32386.jpg",
    "revision": "0ea32386494d97733760ac771000b76b"
  },
  {
    "url": "assets/img/stroke-dashoffset.b3419a74.jpg",
    "revision": "b3419a74d7f5d67758e902013b6b7a4a"
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
    "url": "assets/img/viewBox-1.3bebdea3.jpg",
    "revision": "3bebdea31702ac8f27ecf02f06180c2e"
  },
  {
    "url": "assets/img/viewBox-2.57e58771.jpg",
    "revision": "57e587713bf7f2799a303f9ba0a2f935"
  },
  {
    "url": "assets/img/viewBox-3.4afdb549.jpg",
    "revision": "4afdb5494d7e1385198282595f43e2c0"
  },
  {
    "url": "assets/js/10.92907352.js",
    "revision": "abad09cf7a540b45eaf3720df992d234"
  },
  {
    "url": "assets/js/2.9d172138.js",
    "revision": "76248608be9f2268767280d739737f0e"
  },
  {
    "url": "assets/js/3.7ee03a6f.js",
    "revision": "9ed88a96407514bb254a2bb9c63ef991"
  },
  {
    "url": "assets/js/4.04d966cf.js",
    "revision": "838dd30b3ac87d983cbc688268c076ae"
  },
  {
    "url": "assets/js/5.3efe2815.js",
    "revision": "4a41c0bcd859ebaeab34d3327d0c787c"
  },
  {
    "url": "assets/js/6.a56b89be.js",
    "revision": "e2d2b9daa5cb268717e4caa05bae6b7f"
  },
  {
    "url": "assets/js/7.f77d2e7c.js",
    "revision": "fc21ae6a61e77f7e650f1e689037e69a"
  },
  {
    "url": "assets/js/8.1ec399b4.js",
    "revision": "b75bf916d18f6c3c8f3a77eb3d67bda5"
  },
  {
    "url": "assets/js/9.9745bd02.js",
    "revision": "64e6b34e61ac2eb1a19e326599990e8e"
  },
  {
    "url": "assets/js/app.528921d7.js",
    "revision": "49c7b07d5df2663ce64d634ad46e0ab0"
  },
  {
    "url": "blog/CSS实现导航栏动画/demo.html",
    "revision": "3b2941b43946ed4e653742a46038e617"
  },
  {
    "url": "blog/form表单提交/demo.html",
    "revision": "1a508e882a34444a7b9ad1c8ac5b72d6"
  },
  {
    "url": "blog/margin踩坑总结/demo.html",
    "revision": "d700cb3524cc490f1bad6a006babd37b"
  },
  {
    "url": "blog/SVG路径描边/demo.html",
    "revision": "99d70aeed57b63f2a3e6497901ddd063"
  },
  {
    "url": "blog/this总结/demo.html",
    "revision": "3839d584f65fdda8ac5f2c9c3f1c2835"
  },
  {
    "url": "blog/搭建vue项目并且vuePress的使用/demo1.html",
    "revision": "8cd98b8f0c2008145aa05e9cab9027b2"
  },
  {
    "url": "index.html",
    "revision": "e15b6d9806b99a7edc696bacf1c784a4"
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
