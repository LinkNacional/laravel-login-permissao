(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"758b":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("bc3a"),o=n.n(a),s=window.location.href,r=s.split("/"),l=r[0]+"//"+r[2];const i=o.a.create({baseURL:l,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"9e22":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LogUser",{attrs:{id:t.id}})},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-xl",staticStyle:{"max-width":"500px"}},[n("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},r=[],l=n("758b"),i={name:"LogUser",props:["id"],data(){return{text:"teste"}},methods:{getlog(){l["a"].post("users/edit/"+this.id).then((t=>{console.log(t.data),t.data.forEach((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}},beforeMount(){this.getlog()}},c=i,u=n("2877"),p=n("27f9"),d=n("eebe"),f=n.n(d),h=Object(u["a"])(c,s,r,!1,null,null,null),b=h.exports;f()(h,"components",{QInput:p["a"]});var w={name:"edit_user",props:["id"],data(){return{}},components:{LogUser:b}},x=w,g=Object(u["a"])(x,a,o,!1,null,null,null);e["default"]=g.exports}}]);