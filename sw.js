if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-834f938e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset-manifest.json",revision:"e90d4fea92fbfc741c363ebf266cf2f2"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"8affd713e625dab5e0a76210caec0ce3"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"service-worker.js",revision:"8c2a963fb670b4290a85c8d1f3f65945"},{url:"static/css/main.8c8b27cf.chunk.css",revision:"0d278609d8e024a479be8c9fe7614d85"},{url:"static/js/2.7058baef.chunk.js",revision:"eb83398b8ce74abd9b018a17445901a2"},{url:"static/js/2.7058baef.chunk.js.LICENSE.txt",revision:"b8c0ba92a91271ef423bb542e8d829c2"},{url:"static/js/3.5353e246.chunk.js",revision:"b6f645a54164f230fabc9c13bc4d7e54"},{url:"static/js/main.d63e4388.chunk.js",revision:"93bf5ac582df49f462c4171806adecb0"},{url:"static/js/runtime-main.ab07122b.js",revision:"51ddafa02aa1411aa115ecfced4e34b7"},{url:"static/media/logo.103b5fa1.svg",revision:"5d5d9eefa31e5e13a6610d9fa7a283bb"}],{})}));
//# sourceMappingURL=sw.js.map
