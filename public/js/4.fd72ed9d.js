(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticStyle:{"background-color":"#DAE300",color:"#343B45"},attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        sistema de chamados\n      ")]),a("div",[a("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("sair")])])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        menu\n      ")]),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",to:{path:e.link}}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.caption))])],1)],1)},i=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=l,c=a("2877"),u=a("66e5"),p=a("4074"),d=a("0016"),b=a("0170"),m=a("eebe"),f=a.n(m),v=Object(c["a"])(s,o,i,!1,null,null,null),h=v.exports;f()(v,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:d["a"],QItemLabel:b["a"]});var k=a("758b");const w=[{title:"Dashboard",caption:"",icon:"dashboard",link:"/dashboard"},{title:"usuários",caption:"Menu de usuários",icon:"supervisor_account",link:"/users"}];var q={name:"MainLayout",components:{EssentialLink:h},data(){return{leftDrawerOpen:!1,essentialLinks:w}},methods:{logout(){k["a"].post("/logout").catch((e=>{console.log(e)}))}}},g=q,_=a("4d5a"),L=a("e359"),Q=a("65c6"),y=a("9c40"),D=a("6ac5"),O=a("9404"),E=a("1c1c"),S=a("09e3"),I=Object(c["a"])(g,n,r,!1,null,null,null);t["default"]=I.exports;f()(I,"components",{QLayout:_["a"],QHeader:L["a"],QToolbar:Q["a"],QBtn:y["a"],QToolbarTitle:D["a"],QDrawer:O["a"],QList:E["a"],QItemLabel:b["a"],QPageContainer:S["a"]})},"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("bc3a"),r=a.n(n),o="http://127.0.0.1:8000";const i=r.a.create({baseURL:o,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);