(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"54c1":function(e,t,a){},"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a("bc3a"),n=a.n(s),i="http://127.0.0.1:8000";const o=n.a.create({baseURL:i,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"95b5":function(e,t,a){"use strict";a("54c1")},c6f7:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",[a("q-page-container",[a("CardLogin")],1)],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"window-height window-width background row justify-center items-center"},[a("div",{staticClass:"column"},[a("div",{staticClass:"row"},[a("h5",{staticClass:"text-h5 text-gray q-my-md"},[e._v("sistema de chamados")])]),a("div",{staticClass:"row"},[a("q-card",{staticClass:"q-pa-lg shadow-1",attrs:{square:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{square:"",filled:"",clearable:"",type:"mail",label:"E-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("q-input",{attrs:{filled:"",type:e.isPwd?"password":"text",label:"Senha"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-checkbox",{attrs:{label:"Manter conectado"},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}})],1)]),a("q-card-actions",{staticClass:"q-px-md"},[a("q-btn",{staticClass:"full-width",style:{Color:e.color},attrs:{unelevated:"",size:"lg",label:"Login"},on:{click:e.login}})],1),a("q-card-section",{staticClass:"text-center q-pa-none"},[a("a",{staticClass:"text-grey-6",staticStyle:{cursor:"pointer"},on:{click:e.esqueciasenha}},[e._v("Esqueci a Senha")])])],1)],1)])])},o=[],r=(a("e6cf"),a("758b")),c=a("2a19"),l={name:"Login",plugins:{Notify:c["a"]},data(){return{email:"",password:"",isPwd:!0,remember:!1,color:"#D2D700"}},methods:{esqueciasenha(){},async login(){r["a"].post("/login",{email:this.email,password:this.password,remember:this.remember}).then((e=>{200===e.status&&this.$router.push({path:"/dashboard"})})).catch((e=>{401===e.response.status&&this.$q.notify({type:"negative",message:"Senha ou E-mail incorretos."})}))}}},d=l,u=(a("95b5"),a("2877")),p=a("9989"),m=a("f09f"),b=a("a370"),h=a("27f9"),f=a("0016"),w=a("8f8e"),q=a("4b7e"),g=a("9c40"),C=a("eebe"),y=a.n(C),v=Object(u["a"])(d,i,o,!1,null,null,null),x=v.exports;y()(v,"components",{QPage:p["a"],QCard:m["a"],QCardSection:b["a"],QInput:h["a"],QIcon:f["a"],QCheckbox:w["a"],QCardActions:q["a"],QBtn:g["a"]});var k={name:"login",data(){return{isLoaded:!1,return:{}}},components:{CardLogin:x}},Q=k,_=a("4d5a"),L=a("09e3"),P=Object(u["a"])(Q,s,n,!1,null,null,null);t["default"]=P.exports;y()(P,"components",{QLayout:_["a"],QPageContainer:L["a"]})}}]);