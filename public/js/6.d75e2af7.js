(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"052d":function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("CardPermission",{attrs:{id:s.id}})},r=[],o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"q-pa-md"},[t("q-form",{staticClass:"q-gutter-md",on:{submit:s.onSubmit}},[t("div",{staticClass:"row col-12"},[t("q-checkbox",{attrs:{clickable:"",val:"Admin",label:"Admin",color:"red"},nativeOn:{click:function(e){return s.checkAll()}},model:{value:s.admin,callback:function(e){s.admin=e},expression:"admin"}})],1),t("div",{staticClass:"row"},s._l(s.data_teste,(function(e,i,r){return t("div",{key:i,staticClass:"q-pa-md",staticStyle:{"max-width":"350px"}},[t("q-list",{attrs:{bordered:""}},[t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[t("q-checkbox",{attrs:{clickable:"",val:i,label:i,color:s.colors[r]},nativeOn:{click:function(e){return s.checkGroup(i)}},model:{value:s.groups,callback:function(e){s.groups=e},expression:"groups"}})],1),t("q-separator"),s._l(e,(function(e){return t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e,attrs:{clickable:""}},[t("q-checkbox",{attrs:{"keep-color":"",val:e,label:e,color:s.colors[r]},model:{value:s.permissions,callback:function(e){s.permissions=e},expression:"permissions"}})],1)}))],2)],1)})),0),t("div",[t("q-btn",{attrs:{label:"Salvar",type:"submit",color:"primary"}})],1)])],1)},a=[],n=t("758b"),c={name:"CardPermission",props:["id"],data(){return{teal:!1,orange:!1,red:!1,cyan:!1,data_teste:{"administração":["controle de usuarios","controle de tickets","controle de servers"],suporte:["controle de usuarios suporte","controle de tickets suporte","controle de servers suporte"],desenvolvimento:["auth31","auth32"]},data:[],admin:!1,contador:0,colors:["teal","orange","red","cyan","blue"],groups:[],permissions:[]}},methods:{getPermissions(){return Object.entries(this.data_teste).forEach(((s,e)=>{s[1].forEach((s=>{-1===this.permissions.indexOf(s)&&this.permissions.push(s)}))})),this.data},getPermissionsFromUser(){n["a"].post("/users/permissions/"+this.id).then((s=>{s.data.forEach((s=>{this.permissions.push(s)}))}))},onSubmit(){console.log(this.groups),console.log(this.permissions),console.log(this.admin),n["a"].put("/users/permissions/"+this.id).then((s=>{console.log(s)}))},conta(){return this.contador++,this.contador-303},checkGroup(s){this.groups.find((e=>e===s))?this.data_teste[s].forEach((s=>{this.permissions.push(s)})):this.data_teste[s].forEach((s=>{this.permissions=this.permissions.filter((e=>e!==s))}))},checkAll(){if(!this.admin)return this.permissions=[],"false";var s=this.data_teste;Object.entries(s).forEach((s=>{s.forEach(((s,e)=>{0!==e&&s.forEach((s=>{this.permissions.find((e=>e===s))||this.permissions.push(s)}))}))}))},getAllPermissions(){n["a"].post("/users/auths").then((s=>{this.data_teste=s.data,delete this.data_teste.admin,delete this.data_teste["all auths"],console.log(this.data_teste)}))},checkGroupReverse(){const s=this.permissions,e=this.data_teste;Object.entries(e).forEach((e=>{const t=e[1],i=e[0],r=t.every((e=>{const t=s.find((s=>s===e));return void 0!==t}));r?this.groups.find((s=>s===i))||this.groups.push(i):this.groups=this.groups.filter((s=>s!==i))}))}},beforeMount(){this.getPermissions(),this.getPermissionsFromUser(),this.getAllPermissions()},watch:{permissions:function(){const s=this.permissions,e=this.data_teste;var t=0;Object.entries(e).forEach((e=>{const i=e[1],r=e[0],o=i.every((e=>{t++;const i=s.find((s=>s===e));return void 0!==i}));o?this.groups.find((s=>s===r))||this.groups.push(r):this.groups=this.groups.filter((s=>s!==r))})),t===s.length?this.admin=!0:this.admin=!1}}},l=c,d=t("2877"),p=t("0378"),u=t("8f8e"),h=t("1c1c"),m=t("66e5"),f=t("eb85"),b=t("9c40"),v=t("714f"),g=t("eebe"),k=t.n(g),_=Object(d["a"])(l,o,a,!1,null,null,null),w=_.exports;k()(_,"components",{QForm:p["a"],QCheckbox:u["a"],QList:h["a"],QItem:m["a"],QSeparator:f["a"],QBtn:b["a"]}),k()(_,"directives",{Ripple:v["a"]});var q={name:"permissions",props:["id"],data(){return{isLoaded:!1,return:{}}},components:{CardPermission:w}},x=q,E=Object(d["a"])(x,i,r,!1,null,null,null);e["default"]=E.exports},"758b":function(s,e,t){"use strict";t.d(e,"a",(function(){return c}));var i=t("bc3a"),r=t.n(i),o=window.location.href,a=o.split("/"),n=a[0]+"//"+a[2];const c=r.a.create({baseURL:n,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);