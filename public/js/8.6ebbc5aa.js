(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3764:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("TableUsers",{attrs:{title:"Usuarios"}})},n=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"show",rawName:"v-show",value:!this.isLoaded,expression:"!this.isLoaded"}],staticClass:"q-pa-md"},[t("q-table",{attrs:{dense:e.$q.screen.lt.sm,title:this.title,data:e.data,columns:e.columns,"row-key":"id",pagination:e.pagination,"virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"rows-per-page-options":[0]},on:{"update:pagination":function(a){e.pagination=a},"virtual-scroll":e.pagePass},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dense:"",debounce:"600",to:{path:"/users/search?text_search="+e.filter},placeholder:"Busca"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(a){return[t("q-tr",{attrs:{props:a}},e._l(a.cols,(function(s){return t("q-th",{directives:[{name:"show",rawName:"v-show",value:""!=s.label,expression:"col.label != ''"}],key:s.name,attrs:{props:a}},[e._v("\n          "+e._s(s.label)+"\n        ")])})),1)]}},{key:"body",fn:function(a){return[t("q-tr",{staticStyle:{cursor:"pointer"},attrs:{props:a},on:{click:function(e){a.expand=!a.expand}}},e._l(a.cols,(function(s){return t("q-td",{directives:[{name:"show",rawName:"v-show",value:"0"!=s.name.substring(1,0),expression:"col.name.substring(1,0) != '0'"}],key:s.name,attrs:{props:a}},["Status"==s.name?t("i",{staticClass:"fas fa-circle",staticStyle:{"margin-left":"10%"},style:{color:1==s.value?"green":"gray"}}):"Permissões"==s.name?t("q-btn",{staticStyle:{"margin-left":"5%"},attrs:{to:{path:"/users/permission/"+a.key},size:"sm",color:"accent",round:"",dense:""}},[t("i",{staticClass:"fas fa-pen"})]):t("span",[e._v(e._s(s.value))])],1)})),1),e._l(a.cols,(function(s){return t("q-tr",{directives:[{name:"show",rawName:"v-show",value:a.expand,expression:"props.expand"}],key:s.name,attrs:{props:a}},[t("q-td",{directives:[{name:"show",rawName:"v-show",value:""==s.label&&""!=s.field,expression:"col.label == '' && col.field != ''"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[t("div",{staticClass:"text-left"},[e._v("\n            "+e._s(s.field)+": "+e._s(s.value)+"\n          ")])])],1)})),t("q-td",{directives:[{name:"show",rawName:"v-show",value:a.expand,expression:"props.expand"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[t("div",{staticClass:"text-left"},[t("q-btn",{staticClass:"full-width",attrs:{"text-color":"black",color:"standard",to:{path:"/users/edit/"+a.key},label:"Editar usuário"}})],1)])]}}])})],1)},l=[],i=(t("e6cf"),t("758b")),o={name:"tablelist",props:["title"],data(){return{filter:"",total_num_rows:0,isLoaded:!0,pagination:{rowsPerPage:7},columns:[{name:"0id",align:"left",label:"",field:""},{name:"Permissões",align:"left",label:"Permissões",field:"Permissões"},{name:"Status",align:"left",label:"status",field:"status",sortable:!0,required:!0},{name:"name",required:!0,label:"Nome",align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"E-mail",align:"center",label:"E-mail",field:"email",sortable:!0},{name:"Departamento",align:"left",label:"Departamento",field:"departamento",sortable:!0,required:!0},{name:"0Administrador",align:"center",label:"",field:"Gerente",sortable:!0,required:!0},{name:"0Unidade",align:"center",label:"",field:"Unidade",sortable:!0,required:!0},{name:"0Sobrenome",align:"center",label:"",field:"Sobrenome",sortable:!0,required:!0},{name:"0Fone",align:"center",label:"",field:"Telefone",sortable:!0,required:!0},{name:"0Cargo",align:"center",label:"",field:"Cargo",sortable:!0,required:!0},{name:"0Ramal",align:"center",label:"",field:"Ramal",sortable:!0,required:!0},{name:"0Hora_Técnica",align:"center",label:"",field:"Hora Técnica",sortable:!0,required:!0}],data:[]}},watch:{filter:function(){i["a"].post("/users/search?search_text="+this.filter+"&num_rows="+this.pagination.rowsPerPage).then((e=>{console.log("response",e),this.data=[],e.data.forEach((e=>{this.data.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),console.log("this.data",this.data)}))}},methods:{pagePass(){console.log("teste")},formatTable(e){e.forEach((e=>{this.data.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),this.loadStop()},async getUsers(){this.$q.loading.show(),i["a"].post("/users").then((e=>{this.formatTable(e.data.users),this.total_num_rows=e.data.total_num_rows,console.log(this.data)})).catch((e=>{console.log(e),this.loadStop()}))},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.getUsers()}},d=o,c=t("2877"),u=t("eaac"),m=t("27f9"),p=t("0016"),f=t("bd08"),b=t("357e"),h=t("db86"),g=t("9c40"),v=t("eebe"),w=t.n(v),q=Object(c["a"])(d,r,l,!1,null,null,null),_=q.exports;w()(q,"components",{QTable:u["a"],QInput:m["a"],QIcon:p["a"],QTr:f["a"],QTh:b["a"],QTd:h["a"],QBtn:g["a"]});var y={name:"tableuser",data(){return{return:{}}},components:{TableUsers:_}},x=y,k=Object(c["a"])(x,s,n,!1,null,null,null);a["default"]=k.exports},"758b":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t("bc3a"),n=t.n(s),r=window.location.href,l=r.split("/"),i=l[0]+"//"+l[2];const o=n.a.create({baseURL:i,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);