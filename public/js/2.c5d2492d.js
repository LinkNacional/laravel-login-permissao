(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"54c1":function(e,a,t){},"758b":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t("7338"),n=t.n(s),o=window.location.href,i=o.split("/"),r=i[0]+"//"+i[2];const l=n.a.create({baseURL:r,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"95b5":function(e,a,t){"use strict";t("54c1")},c6f7:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-layout",[t("q-page-container",[t("CardLogin")],1)],1)},n=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"window-height window-width background row justify-center items-center"},[t("div",{staticClass:"column"},[t("div",{staticClass:"row"},[t("h5",{staticClass:"text-h5 text-gray q-my-md"},[e._v("sistema de chamados")])]),t("div",{staticClass:"row"},[t("q-card",{staticClass:"q-pa-lg shadow-1",attrs:{square:"",bordered:""}},[t("q-card-section",[t("div",{staticClass:"q-gutter-md"},[t("q-input",{attrs:{square:"",filled:"",clearable:"",type:"mail",label:"E-mail"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),t("q-input",{attrs:{square:"",filled:"",clearable:"",type:"password",label:"Senha"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("q-checkbox",{attrs:{label:"Manter conectado"},model:{value:e.remember,callback:function(a){e.remember=a},expression:"remember"}})],1)]),t("q-card-actions",{staticClass:"q-px-md"},[t("q-btn",{staticClass:"full-width",style:{Color:e.color},attrs:{unelevated:"",size:"lg",label:"Login"},on:{click:e.login}})],1),t("q-card-section",{staticClass:"text-center q-pa-none"},[t("a",{staticClass:"text-grey-6",staticStyle:{cursor:"pointer"},on:{click:e.esqueciasenha}},[e._v("Esqueci a Senha")])])],1)],1)])])},i=[],r=(t("e6cf"),t("758b")),l={name:"Login",data(){return{email:"",password:"",remember:!1,color:"#D2D700"}},methods:{esqueciasenha(){},async login(){r["a"].post("/login",{email:this.email,password:this.password,remember:this.remember}).then((e=>{console.log(e),this.return=e,this.isLoaded=!0})).catch((e=>{console.log(e),"Request failed with status code 401"===e&&console.log(e)}))}}},c=l,d=(t("95b5"),t("2877")),u=t("9989"),m=t("f09f"),p=t("a370"),b=t("27f9"),h=t("8f8e"),w=t("4b7e"),f=t("9c40"),q=t("eebe"),g=t.n(q),C=Object(d["a"])(c,o,i,!1,null,null,null),v=C.exports;g()(C,"components",{QPage:u["a"],QCard:m["a"],QCardSection:p["a"],QInput:b["a"],QCheckbox:h["a"],QCardActions:w["a"],QBtn:f["a"]});var x={name:"login",data(){return{isLoaded:!1,return:{}}},components:{CardLogin:v},methods:{},beforeMount(){}},y=x,k=t("4d5a"),Q=t("09e3"),L=Object(d["a"])(y,s,n,!1,null,null,null);a["default"]=L.exports;g()(L,"components",{QLayout:k["a"],QPageContainer:Q["a"]})}}]);