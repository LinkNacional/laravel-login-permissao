(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"052d":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("CardPermission",{attrs:{id:s.id}})},r=[],o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"q-pa-md"},[e("q-form",{staticClass:"q-gutter-md",on:{submit:s.onSubmit}},[e("div",{staticClass:"row col-12"},[e("q-checkbox",{attrs:{clickable:"",val:"Admin",label:"Admin",color:"red"},nativeOn:{click:function(t){return s.checkAll()}},model:{value:s.admin,callback:function(t){s.admin=t},expression:"admin"}})],1),e("div",{staticClass:"row"},s._l(s.data_teste,(function(t,i,r){return e("div",{key:i,staticClass:"q-pa-md",staticStyle:{"max-width":"350px"}},[e("q-list",{attrs:{bordered:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[e("q-checkbox",{attrs:{clickable:"",val:i,label:i,color:s.colors[r]},nativeOn:{click:function(t){return s.checkGroup(i)}},model:{value:s.groups,callback:function(t){s.groups=t},expression:"groups"}})],1),e("q-separator"),s._l(t,(function(t){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t,attrs:{clickable:""}},[e("q-checkbox",{attrs:{"keep-color":"",val:t,label:t,color:s.colors[r]},model:{value:s.permissions,callback:function(t){s.permissions=t},expression:"permissions"}})],1)}))],2)],1)})),0),e("div",[e("q-btn",{attrs:{label:"Salvar",type:"submit",color:"primary"}})],1)])],1)},a=[],n=e("758b"),c={name:"CardPermission",props:["id"],data(){return{teal:!1,orange:!1,red:!1,cyan:!1,data_teste:{},data:[],admin:!1,contador:0,colors:["teal","orange","red","cyan","blue"],groups:[],permissions:[]}},methods:{getPermissions(){return Object.entries(this.data_teste).forEach(((s,t)=>{s[1].forEach((s=>{-1===this.permissions.indexOf(s)&&this.permissions.push(s)}))})),this.data},getPermissionsFromUser(){n["a"].post("/users/permissions/"+this.id).then((s=>{s.data.forEach((s=>{this.permissions.push(s),console.log(this.permissions)}))}))},onSubmit(){console.log(this.groups),console.log(this.permissions),console.log(this.admin),n["a"].put("/users/permissions/"+this.id).then((s=>{console.log(s)}))},conta(){return this.contador++,this.contador-303},checkGroup(s){this.groups.find((t=>t===s))?this.data_teste[s].forEach((s=>{this.permissions.push(s)})):this.data_teste[s].forEach((s=>{this.permissions=this.permissions.filter((t=>t!==s))}))},checkAll(){if(!this.admin)return this.permissions=[],"false";var s=this.data_teste;Object.entries(s).forEach((s=>{s.forEach(((s,t)=>{0!==t&&s.forEach((s=>{this.permissions.find((t=>t===s))||this.permissions.push(s)}))}))}))},getAllPermissions(){n["a"].post("/users/auths").then((s=>{this.data_teste=s.data,delete this.data_teste["all auths"],console.log(this.data_teste)}))},checkGroupReverse(){const s=this.permissions,t=this.data_teste;Object.entries(t).forEach((t=>{const e=t[1],i=t[0],r=e.every((t=>{const e=s.find((s=>s===t));return void 0!==e}));r?this.groups.find((s=>s===i))||this.groups.push(i):this.groups=this.groups.filter((s=>s!==i))}))}},beforeMount(){this.getPermissionsFromUser(),this.getAllPermissions(),this.getPermissions()},watch:{permissions:function(){const s=this.permissions,t=this.data_teste;var e=0;Object.entries(t).forEach((t=>{const i=t[1],r=t[0],o=i.every((t=>{e++;const i=s.find((s=>s===t));return void 0!==i}));o?this.groups.find((s=>s===r))||this.groups.push(r):this.groups=this.groups.filter((s=>s!==r))})),e===s.length?this.admin=!0:this.admin=!1}}},l=c,p=e("2877"),h=e("0378"),d=e("8f8e"),u=e("1c1c"),m=e("66e5"),f=e("eb85"),b=e("9c40"),v=e("714f"),g=e("eebe"),k=e.n(g),_=Object(p["a"])(l,o,a,!1,null,null,null),w=_.exports;k()(_,"components",{QForm:h["a"],QCheckbox:d["a"],QList:u["a"],QItem:m["a"],QSeparator:f["a"],QBtn:b["a"]}),k()(_,"directives",{Ripple:v["a"]});var q={name:"permissions",props:["id"],data(){return{isLoaded:!1,return:{}}},components:{CardPermission:w}},x=q,E=Object(p["a"])(x,i,r,!1,null,null,null);t["default"]=E.exports},"758b":function(s,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("bc3a"),r=e.n(i),o=window.location.href,a=o.split("/"),n=a[0]+"//"+a[2];const c=r.a.create({baseURL:n,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);