(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"052d":function(s,i,e){"use strict";e.r(i);var t=function(){var s=this,i=s.$createElement,e=s._self._c||i;return e("CardPermission",{attrs:{id:s.id}})},o=[],r=function(){var s=this,i=s.$createElement,e=s._self._c||i;return e("div",{directives:[{name:"show",rawName:"v-show",value:!s.loading,expression:"!loading"}],staticClass:"q-pa-md"},[e("q-form",{staticClass:"q-gutter-md",on:{submit:s.onSubmit}},[e("div",{staticClass:"row col-12"},[e("q-checkbox",{attrs:{clickable:"",label:"Admin",color:"red"},on:{input:function(i){return s.checkAll()}},model:{value:s.admin,callback:function(i){s.admin=i},expression:"admin"}})],1),e("div",{staticClass:"row"},s._l(s.allPermissions,(function(i,t,o){return e("div",{key:t,staticClass:"q-pa-md col-4"},[e("q-list",{attrs:{bordered:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[e("q-checkbox",{attrs:{clickable:"",val:t,label:t,color:s.colors[o]},nativeOn:{click:function(i){return s.checkGroup(t)}},model:{value:s.groups,callback:function(i){s.groups=i},expression:"groups"}})],1),e("q-separator"),s._l(i,(function(i){return e("div",{key:i},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[e("q-item-section",[e("q-item-label",[e("q-checkbox",{attrs:{"keep-color":"",val:i[0],label:i[0],color:s.colors[o]},model:{value:s.permissions,callback:function(i){s.permissions=i},expression:"permissions"}})],1),e("q-item-label",{attrs:{caption:""}},[s._v(s._s(i[1]))])],1)],1)],1)}))],2)],1)})),0),e("div",[e("q-btn",{attrs:{label:"Salvar",type:"submit",color:"primary"}})],1)])],1)},n=[],a=e("758b"),l={name:"CardPermission",props:["id"],data(){return{allPermissions:{},data:[],admin:!1,contador:0,colors:["teal","orange","red","cyan","blue"],groups:[],permissions:[],loading:!0}},methods:{loadingStop(){this.$q.loading.hide(),this.loading=!1},onSubmit(){a["a"].post("/users/permissions/save",{permissions:this.permissions,groups:this.groups,admin:this.admin,id:this.id}).then((s=>{console.log(s)}))},checkGroup(s){this.groups.find((i=>i===s))?this.allPermissions[s].forEach((s=>{this.permissions.push(s[0])})):this.allPermissions[s].forEach((s=>{this.permissions=this.permissions.filter((i=>i!==s[0]))}))},checkAll(){if(this.admin){var s=this.allPermissions;Object.entries(s).forEach((s=>{s.forEach(((s,i)=>{0!==i&&s.forEach((s=>{this.permissions.find((i=>i===s[0]))||this.permissions.push(s[0])}))}))})),this.admin=!0}else this.permissions=[],this.admin=!1},getPermissions(){this.$q.loading.show(),a["a"].post("/users/permissions/"+this.id).then((s=>{this.allPermissions=s.data.all_permissions,delete this.allPermissions["all auths"],s.data.user_permissions.forEach((s=>{this.permissions.push(s)})),this.loadingStop()})).catch((s=>{console.log(s),this.loadingStop()}))},checkGroupReverse(){const s=this.permissions,i=this.allPermissions;Object.entries(i).forEach((i=>{const e=i[1],t=i[0],o=e.every((i=>{const e=s.find((s=>s===i));return void 0!==e}));o?this.groups.find((s=>s===t[0]))||this.groups.push(t[0]):this.groups=this.groups.filter((s=>s!==t[0]))}))}},watch:{admin:function(s,i){console.log(s),console.log(i)},permissions:function(){const s=this.permissions,i=this.allPermissions;var e=0;Object.entries(i).forEach((i=>{const t=i[1],o=i[0],r=t.every((i=>{e++;const t=s.find((s=>s===i[0]));return void 0!==t}));r?this.groups.find((s=>s===o))||this.groups.push(o):this.groups=this.groups.filter((s=>s!==o))})),e===s.length?this.admin=!0:this.admin=!1}},beforeMount(){this.getPermissions()}},c=l,p=e("2877"),m=e("0378"),h=e("8f8e"),d=e("1c1c"),u=e("66e5"),f=e("eb85"),b=e("4074"),v=e("0170"),g=e("9c40"),k=e("714f"),w=e("eebe"),q=e.n(w),P=Object(p["a"])(c,r,n,!1,null,null,null),C=P.exports;q()(P,"components",{QForm:m["a"],QCheckbox:h["a"],QList:d["a"],QItem:u["a"],QSeparator:f["a"],QItemSection:b["a"],QItemLabel:v["a"],QBtn:g["a"]}),q()(P,"directives",{Ripple:k["a"]});var x={name:"permissions",props:["id"],data(){return{isLoaded:!1,return:{}}},components:{CardPermission:C}},E=x,_=Object(p["a"])(E,t,o,!1,null,null,null);i["default"]=_.exports},"758b":function(s,i,e){"use strict";e.d(i,"a",(function(){return l}));var t=e("bc3a"),o=e.n(t),r=window.location.href,n=r.split("/"),a=n[0]+"//"+n[2];const l=o.a.create({baseURL:a,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);