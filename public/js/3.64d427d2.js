(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"54c1":function(e,a,t){},"758b":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var s=t("7338"),n=t.n(s),i=window.location.href,r=i.split("/"),o=r[0]+"//"+r[2];const c=n.a.create({baseURL:o,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"95b5":function(e,a,t){"use strict";t("54c1")},c6f7:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-layout",[t("q-page-container",[t("CardLogin")],1)],1)},n=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"window-height window-width background row justify-center items-center"},[t("div",{staticClass:"column"},[t("div",{staticClass:"row"},[t("h5",{staticClass:"text-h5 text-gray q-my-md"},[e._v("sistema de chamados")])]),t("div",{staticClass:"row"},[t("q-card",{staticClass:"q-pa-lg shadow-1",attrs:{square:"",bordered:""}},[t("q-card-section",[t("div",{staticClass:"q-gutter-md"},[t("q-input",{attrs:{square:"",filled:"",clearable:"",type:"mail",label:"E-mail"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),t("q-input",{attrs:{square:"",filled:"",clearable:"",type:"password",label:"Senha"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("q-checkbox",{attrs:{label:"Manter conectado"},model:{value:e.remember,callback:function(a){e.remember=a},expression:"remember"}})],1)]),t("q-card-actions",{staticClass:"q-px-md"},[t("q-btn",{staticClass:"full-width",style:{Color:e.color},attrs:{unelevated:"",size:"lg",label:"Login"},on:{click:e.login}})],1),t("q-card-section",{staticClass:"text-center q-pa-none"},[t("a",{staticClass:"text-grey-6",staticStyle:{cursor:"pointer"},on:{click:e.esqueciasenha}},[e._v("Esqueci a Senha")])])],1)],1)])])},r=[],o=(t("e6cf"),t("758b")),c=t("2a19"),l={name:"Login",plugins:{Notify:c["a"]},data(){return{email:"",password:"",remember:!1,color:"#D2D700"}},methods:{esqueciasenha(){},async login(){o["a"].post("/login",{email:this.email,password:this.password,remember:this.remember}).then((e=>{200===e.status&&this.$router.push({path:"/dashboard"})})).catch((e=>{401===e.response.status&&this.$q.notify({type:"negative",message:"Senha ou E-mail incorretos."})}))}}},d=l,u=(t("95b5"),t("2877")),m=t("9989"),p=t("f09f"),b=t("a370"),h=t("27f9"),f=t("8f8e"),w=t("4b7e"),q=t("9c40"),g=t("eebe"),C=t.n(g),v=Object(u["a"])(d,i,r,!1,null,null,null),y=v.exports;C()(v,"components",{QPage:m["a"],QCard:p["a"],QCardSection:b["a"],QInput:h["a"],QCheckbox:f["a"],QCardActions:w["a"],QBtn:q["a"]});var x={name:"login",data(){return{isLoaded:!1,return:{}}},components:{CardLogin:y}},k=x,Q=t("4d5a"),L=t("09e3"),_=Object(u["a"])(k,s,n,!1,null,null,null);a["default"]=_.exports;C()(_,"components",{QLayout:Q["a"],QPageContainer:L["a"]})}}]);