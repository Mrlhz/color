if(!self.define){let o,l={};const r=(r,e)=>(r=new URL(r+".js",e).href,l[r]||new Promise((l=>{if("document"in self){const o=document.createElement("script");o.src=r,o.onload=l,document.head.appendChild(o)}else o=r,importScripts(r),l()})).then((()=>{let o=l[r];if(!o)throw new Error(`Module ${r} didn’t register its module`);return o})));self.define=(e,s)=>{const i=o||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let n={};const c=o=>r(o,i),u={module:{uri:i},exports:n,require:c};l[i]=Promise.all(e.map((o=>u[o]||c(o)))).then((o=>(s(...o),n)))}}define(["./workbox-4ecb9415"],(function(o){"use strict";o.setCacheNameDetails({prefix:"vue-app"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/color/css/385.5deacabd.css",revision:null},{url:"/color/css/564.94263df0.css",revision:null},{url:"/color/css/about.dcab4059.css",revision:null},{url:"/color/css/app.687bb728.css",revision:null},{url:"/color/img/BasicsBg.4ff64c0e.png",revision:null},{url:"/color/img/componentBg.293aa16a.png",revision:null},{url:"/color/img/gmo.ae2ec436.jpg",revision:null},{url:"/color/img/img1.3057c92b.jpg",revision:null},{url:"/color/img/img2.7d2299c8.jpg",revision:null},{url:"/color/img/img3.41553b6d.jpg",revision:null},{url:"/color/img/img4.db2f3ecc.jpg",revision:null},{url:"/color/index.html",revision:"4e5b72fcfd5ff67e069672fa886a1206"},{url:"/color/js/385.6d35739d.js",revision:null},{url:"/color/js/564.9379efc6.js",revision:null},{url:"/color/js/about.6721b3d9.js",revision:null},{url:"/color/js/app.502ce3bf.js",revision:null},{url:"/color/js/chunk-vendors.26e17981.js",revision:null},{url:"/color/manifest.json",revision:"a7bb829f05709f04c4cc8f0bb0289d89"},{url:"/color/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
