(function(e){function t(t){for(var r,o,l=t[0],c=t[1],u=t[2],s=0,d=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{2:"ea3bc109",3:"c1ac384d",4:"8086051d",5:"d3b6c04d",6:"2806d9ef",7:"6f5283f8",8:"069947f2",9:"2dde598d",10:"a702a76b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"d5f7f1bd",3:"7ff76c46",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=l(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("0047");var r=n("2b0e"),o=n("b05d"),a=n("2a19"),i=n("f508");r["a"].use(o["a"],{config:{loadingBar:{color:"red",size:"12px",position:"top"}},plugins:{Notify:a["a"],Loading:i["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],u=n("5638"),s={name:"App",mounted(){this.listen()},methods:{listen(){window.Pusher=n("782e");const e=window.Echo=new u["a"]({broadcaster:"pusher",key:"e1b950a49e2964e115dc",wsHost:"127.0.0.1",wsPort:6001,forceTLS:!1,disableStatus:!0});e.channel("channel").listen("hello",(e=>{console.log(e)}))}}},d=s,f=n("2877"),p=Object(f["a"])(d,l,c,!1,null,null,null),h=p.exports,m=n("8c4f");n("ddb0");const b=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"8b24"))},{path:"/teste",component:()=>n.e(7).then(n.bind(null,"599b"))},{path:"dashboard",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"4cdf"))},{path:"users",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"3764"))},{path:"/users/permission/:id",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"052d")),props:!0},{path:"/users/edit/:id",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"9e22")),props:!0}]},{path:"/login",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"c6f7"))},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var v=b;r["a"].use(m["a"]);var w=function(){const e=new m["a"]({scrollBehavior:()=>({x:0,y:0}),routes:v,mode:"history",base:"/"});return e},g=async function(){const e="function"===typeof w?await w({Vue:r["a"]}):w,t={router:e,render:e=>e(h),el:"#q-app"};return{app:t,router:e}},y=n("758b");window.io=n("8e27");const P=new u["a"]({broadcaster:"socket-io",host:window.location.hostname+":6001"});var j=({Vue:e})=>{e.prototype.$echo=P};const O="/";async function x(){const{app:e,router:t}=await g();let n=!1;const o=e=>{n=!0;const r=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,""),i=[y["default"],j];for(let c=0;!1===n&&c<i.length;c++)if("function"===typeof i[c])try{await i[c]({app:e,router:t,Vue:r["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:O})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&new r["a"](e)}x()},"758b":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("bc3a"),o=n.n(r),a=window.location.href,i=a.split("/"),l=i[0]+"//"+i[2];const c=o.a.create({baseURL:l,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}});