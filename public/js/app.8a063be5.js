(function(e){function t(t){for(var r,o,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{2:"df199dab",3:"2f27dd6c",4:"0020a217",5:"6fc5ae82",6:"072b669f",7:"0432dea0",8:"076ede37"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"d5f7f1bd",3:"7ff76c46",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("0047");var r=n("2b0e"),o=n("f476"),a=n("42d2"),i=n("b05d"),u=n("2a19"),l=n("f508");r["a"].use(i["a"],{config:{loadingBar:{color:"red",size:"12px",position:"top"}},lang:o["a"],iconSet:a["a"],plugins:{Notify:u["a"],Loading:l["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],f={name:"App"},d=f,p=n("2877"),h=Object(p["a"])(d,c,s,!1,null,null,null),m=h.exports,b=n("8c4f");n("ddb0");const v=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"8b24"))},{path:"dashboard",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"4cdf"))},{path:"users",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"3764"))},{path:"/users/permission/:id",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"052d")),props:!0}]},{path:"/login",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"c6f7"))},{path:"*",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"e51e"))}];var g=v;r["a"].use(b["a"]);var y=function(){const e=new b["a"]({scrollBehavior:()=>({x:0,y:0}),routes:g,mode:"history",base:"/"});return e},w=async function(){const e="function"===typeof y?await y({Vue:r["a"]}):y,t={router:e,render:e=>e(m),el:"#q-app"};return{app:t,router:e}};async function P(){const{app:e,router:t}=await w();new r["a"](e)}P()}});