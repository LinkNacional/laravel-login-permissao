(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{a420:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"flex flex-center"},[t("tableList",{attrs:{title:"Usuarios"}})],1)},l=[],s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"q-pa-md"},[t("q-table",{attrs:{title:a.title,data:a.data,columns:a.columns,"row-key":"name"},scopedSlots:a._u([{key:"header",fn:function(e){return[t("q-tr",{attrs:{props:e}},[a._l(e.cols,(function(n){return t("q-th",{key:n.name,attrs:{props:e}},[a._v("\n          "+a._s(n.label)+"\n        ")])})),t("q-th",{staticClass:"text-center sortable"},[a._v("\n           Permissões\n         ")])],2)]}},{key:"body",fn:function(e){return[t("q-tr",{attrs:{props:e}},[a._l(e.cols,(function(n,l){return t("q-td",{key:n.name,attrs:{props:e}},[0==l?t("i",{staticClass:"fas fa-circle",staticStyle:{color:"green"}}):a._e(),a._v("\n          "+a._s(n.value)+"\n        ")])})),t("q-td",[t("q-btn",{staticStyle:{"margin-left":"25px"},attrs:{size:"sm",color:"accent",round:"",dense:""},on:{click:function(a){e.expand=!e.expand}}},[t("i",{staticClass:"fas fa-pen"})])],1)],2),t("q-tr",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"props.expand"}],attrs:{props:e}},[t("q-td",{attrs:{colspan:"100%"}},[t("div",{staticClass:"text-left"},[a._v("This is expand slot for row above: "+a._s(e.row.name)+".")])])],1)]}}])})],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0}},data(){return{columns:[{name:"name",required:!0,label:"Nome",align:"left",field:a=>a.name,format:a=>`${a}`,sortable:!0},{name:"E-mail",align:"center",label:"E-mail",field:"email",sortable:!0},{name:"Departamento",align:"center",label:"Departamento",field:"departamento",sortable:!0,required:!0}],data:[{name:"João ",email:"viana.joao@linknacional.com",departamento:"DEV"},{name:"Victor",email:"viana.joao@linknacional.com",departamento:"DEV"},{name:"A.",email:"viana.joao@linknacional.com",departamento:"DEV"},{name:"Viana",email:"viana.joao@linknacional.com",departamento:"DEV"}]}}},i=o,c=t("2877"),m=t("eaac"),p=t("bd08"),d=t("357e"),u=t("db86"),f=t("9c40"),b=t("eebe"),v=t.n(b),q=Object(c["a"])(i,s,r,!1,null,null,null),_=q.exports;v()(q,"components",{QTable:m["a"],QTr:p["a"],QTh:d["a"],QTd:u["a"],QBtn:f["a"]});var k={components:{tableList:_},name:"tableUser"},x=k,w=t("9989"),h=Object(c["a"])(x,n,l,!1,null,null,null);e["default"]=h.exports;v()(h,"components",{QPage:w["a"]})}}]);