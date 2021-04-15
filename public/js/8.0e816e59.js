(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3764:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("TableUsers",{attrs:{title:"Usuarios"}})},s=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"show",rawName:"v-show",value:!this.isLoaded,expression:"!this.isLoaded"}],staticClass:"q-pa-md"},[t("q-table",{attrs:{dense:e.$q.screen.lt.sm,title:this.title,data:e.data,columns:e.columns,"row-key":"id",pagination:e.pagination},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dense:"",debounce:"600",to:{path:"/users/search?text_search="+e.filter},placeholder:"Busca"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(a){return[t("q-tr",{attrs:{props:a}},e._l(a.cols,(function(n){return t("q-th",{directives:[{name:"show",rawName:"v-show",value:""!=n.label,expression:"col.label != ''"}],key:n.name,attrs:{props:a}},[e._v("\n          "+e._s(n.label)+"\n        ")])})),1)]}},{key:"body",fn:function(a){return[t("q-tr",{staticStyle:{cursor:"pointer"},attrs:{props:a},on:{click:function(e){a.expand=!a.expand}}},e._l(a.cols,(function(n){return t("q-td",{directives:[{name:"show",rawName:"v-show",value:"0"!=n.name.substring(1,0),expression:"col.name.substring(1,0) != '0'"}],key:n.name,attrs:{props:a}},["Status"==n.name?t("i",{staticClass:"fas fa-circle",staticStyle:{"margin-left":"10%"},style:{color:1==n.value?"green":"gray"}}):"Permissões"==n.name?t("q-btn",{staticStyle:{"margin-left":"5%"},attrs:{to:{path:"/users/permission/"+a.key},size:"sm",color:"accent",round:"",dense:""}},[t("i",{staticClass:"fas fa-pen"})]):t("span",[e._v(e._s(n.value))])],1)})),1),e._l(a.cols,(function(n){return t("q-tr",{directives:[{name:"show",rawName:"v-show",value:a.expand,expression:"props.expand"}],key:n.name,attrs:{props:a}},[t("q-td",{directives:[{name:"show",rawName:"v-show",value:""==n.label&&""!=n.field,expression:"col.label == '' && col.field != ''"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[t("div",{staticClass:"text-left"},[e._v("\n            "+e._s(n.field)+": "+e._s(n.value)+"\n          ")])])],1)})),t("q-td",{directives:[{name:"show",rawName:"v-show",value:a.expand,expression:"props.expand"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[t("div",{staticClass:"text-left"},[t("q-btn",{staticClass:"full-width",attrs:{"text-color":"black",color:"standard",to:{path:"/users/edit/"+a.key},label:"Editar usuário"}})],1)])]}},{key:"top",fn:function(){return[e._v("\n      Top\n    ")]},proxy:!0},{key:"bottom",fn:function(){return[e._v("\n      Bottom\n    ")]},proxy:!0}])})],1)},l=[],o=(t("e6cf"),t("758b")),i={name:"tablelist",props:["title"],data(){return{filter:"",total_num_rows:0,isLoaded:!0,pagination:{page:1,rowsPerPage:7,rowsNumber:0},columns:[{name:"0id",align:"left",label:"",field:""},{name:"Permissões",align:"left",label:"Permissões",field:"Permissões"},{name:"Status",align:"left",label:"status",field:"status",sortable:!0,required:!0},{name:"name",required:!0,label:"Nome",align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"E-mail",align:"center",label:"E-mail",field:"email",sortable:!0},{name:"Departamento",align:"left",label:"Departamento",field:"departamento",sortable:!0,required:!0},{name:"0Administrador",align:"center",label:"",field:"Gerente",sortable:!0,required:!0},{name:"0Unidade",align:"center",label:"",field:"Unidade",sortable:!0,required:!0},{name:"0Sobrenome",align:"center",label:"",field:"Sobrenome",sortable:!0,required:!0},{name:"0Fone",align:"center",label:"",field:"Telefone",sortable:!0,required:!0},{name:"0Cargo",align:"center",label:"",field:"Cargo",sortable:!0,required:!0},{name:"0Ramal",align:"center",label:"",field:"Ramal",sortable:!0,required:!0},{name:"0Hora_Técnica",align:"center",label:"",field:"Hora Técnica",sortable:!0,required:!0}],data:[]}},watch:{filter:function(){o["a"].post("/users/search?search_text="+this.filter+"&num_rows="+this.pagination.rowsPerPage).then((e=>{console.log("response",e),this.data=[],e.data.forEach((e=>{this.data.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),console.log("this.data",this.data)}))}},methods:{pagePass(){console.log("teste")},formatTable(e){e.forEach((e=>{this.data.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),this.loadStop()},async getUsers(){this.$q.loading.show(),o["a"].post("/users").then((e=>{this.formatTable(e.data.users),this.pagination.rowsNumber=e.data.total_num_rows})).catch((e=>{console.log(e),this.loadStop()}))},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.getUsers()}},d=i,c=t("2877"),u=t("eaac"),m=t("27f9"),p=t("0016"),f=t("bd08"),b=t("357e"),h=t("db86"),g=t("9c40"),w=t("eebe"),v=t.n(w),q=Object(c["a"])(d,r,l,!1,null,null,null),y=q.exports;v()(q,"components",{QTable:u["a"],QInput:m["a"],QIcon:p["a"],QTr:f["a"],QTh:b["a"],QTd:h["a"],QBtn:g["a"]});var _={name:"tableuser",data(){return{return:{}}},components:{TableUsers:y}},x=_,k=Object(c["a"])(x,n,s,!1,null,null,null);a["default"]=k.exports},"758b":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("bc3a"),s=t.n(n),r=window.location.href,l=r.split("/"),o=l[0]+"//"+l[2];const i=s.a.create({baseURL:o,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);