(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3764:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("TableUsers",{attrs:{title:"Usuarios"}})},s=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"show",rawName:"v-show",value:!this.isLoaded,expression:"!this.isLoaded"}],staticClass:"q-pa-md"},[t("q-table",{attrs:{dense:e.$q.screen.lt.sm,title:this.title,data:e.data,columns:e.columns,"row-key":"id",pagination:e.pagination,"rows-per-page-options":e.rows_per_page_options},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dense:"",debounce:"600",to:{path:"/users/search?text_search="+e.filter},placeholder:"Busca"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(a){return[t("q-tr",{attrs:{props:a}},e._l(a.cols,(function(n){return t("q-th",{directives:[{name:"show",rawName:"v-show",value:""!=n.label,expression:"col.label != ''"}],key:n.name,attrs:{props:a}},[e._v("\n          "+e._s(n.label)+"\n        ")])})),1)]}},{key:"body",fn:function(a){return[t("q-tr",{staticStyle:{cursor:"pointer"},attrs:{props:a},on:{click:function(e){a.expand=!a.expand}}},e._l(a.cols,(function(n){return t("q-td",{directives:[{name:"show",rawName:"v-show",value:"0"!=n.name.substring(1,0),expression:"col.name.substring(1,0) != '0'"}],key:n.name,attrs:{props:a}},["Status"==n.name?t("i",{staticClass:"fas fa-circle",staticStyle:{"margin-left":"10%"},style:{color:1==n.value?"green":"gray"}}):"Permissões"==n.name?t("q-btn",{staticStyle:{"margin-left":"5%"},attrs:{to:{path:"/users/permission/"+a.key},size:"sm",color:"accent",round:"",dense:""}},[t("i",{staticClass:"fas fa-pen"})]):t("span",[e._v(e._s(n.value))])],1)})),1),e._l(a.cols,(function(n){return t("q-tr",{directives:[{name:"show",rawName:"v-show",value:a.expand,expression:"props.expand"}],key:n.name,attrs:{props:a}},[t("q-td",{directives:[{name:"show",rawName:"v-show",value:""==n.label&&""!=n.field,expression:"col.label == '' && col.field != ''"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[t("div",{staticClass:"text-left"},[e._v("\n            "+e._s(n.field)+": "+e._s(n.value)+"\n          ")])])],1)})),t("q-td",{directives:[{name:"show",rawName:"v-show",value:a.expand,expression:"props.expand"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[t("div",{staticClass:"text-left"},[t("q-btn",{staticClass:"full-width",attrs:{"text-color":"black",color:"standard",to:{path:"/users/edit/"+a.key},label:"Editar usuário"}})],1)])]}},{key:"bottom",fn:function(){return[t("div",{staticClass:" row items-center justify-end"},[t("div",{staticClass:"q-table__separator col"}),t("div",{staticClass:"q-table__control"},[t("span",{staticClass:"q-table__bottom-item"},[e._v("paginas:")]),t("q-select",{attrs:{dense:"",change:e.updatePage(),options:e.rows_per_page_options},model:{value:e.pagination.rowsPerPage,callback:function(a){e.$set(e.pagination,"rowsPerPage",a)},expression:"pagination.rowsPerPage"}})],1),t("div",{staticClass:"q-table__control"},[t("span",{staticClass:"q-table__bottom-item"},[e._v(e._s(e.pagination.page)+"-"+e._s(e.pagination.lastPage)+" de "+e._s(e.pagination.rowsNumber))]),t("q-btn",{attrs:{flat:"",color:"primary",disable:1==e.pagination.page?"disable":"enable",icon:"first_page"},on:{click:function(a){return e.firstPage()}}}),t("q-btn",{attrs:{flat:"",disable:1==e.pagination.page?"disable":"enable",color:"primary",icon:"chevron_left"},on:{click:function(a){return e.previousPage()}}}),t("q-btn",{attrs:{flat:"",disable:e.pagination.page==e.pagination.lastPage?"disable":"enable",color:"primary",icon:"chevron_right"},on:{click:function(a){return e.nextPage()}}}),t("q-btn",{attrs:{flat:"",disable:e.pagination.page==e.pagination.lastPage?"disable":"enable",color:"primary",icon:"last_page"},on:{click:function(a){return e.lastPage()}}})],1)])]},proxy:!0}])})],1)},o=[],r=t("758b"),l={name:"tablelist",props:["title"],data(){return{filter:"",total_num_rows:0,isLoaded:!0,rowsPerPage:7,dataAltered:[],rows_per_page_options:[5,7,10,20,50,"Todos"],pagination:{page:1,rowsPerPage:7,rowsNumber:0,lastPage:0},columns:[{name:"0id",align:"left",label:"",field:""},{name:"Permissões",align:"left",label:"Permissões",field:"Permissões"},{name:"Status",align:"left",label:"status",field:"status",sortable:!0,required:!0},{name:"name",required:!0,label:"Nome",align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"E-mail",align:"center",label:"E-mail",field:"email",sortable:!0},{name:"Departamento",align:"left",label:"Departamento",field:"departamento",sortable:!0,required:!0},{name:"0Administrador",align:"center",label:"",field:"Gerente",sortable:!0,required:!0},{name:"0Unidade",align:"center",label:"",field:"Unidade",sortable:!0,required:!0},{name:"0Sobrenome",align:"center",label:"",field:"Sobrenome",sortable:!0,required:!0},{name:"0Fone",align:"center",label:"",field:"Telefone",sortable:!0,required:!0},{name:"0Cargo",align:"center",label:"",field:"Cargo",sortable:!0,required:!0},{name:"0Ramal",align:"center",label:"",field:"Ramal",sortable:!0,required:!0},{name:"0Hora_Técnica",align:"center",label:"",field:"Hora Técnica",sortable:!0,required:!0}],data:[]}},watch:{filter:function(){r["a"].post("/users/search?search_text="+this.filter+"&num_rows="+this.pagination.rowsPerPage).then((e=>{console.log("response",e),this.data=[],e.data.forEach((e=>{this.data.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),console.log("this.data",this.data)}))}},methods:{nextPage(){console.log("nextPage"),this.$q.loading.show(),this.pagination.page++,this.updatePage()},previousPage(){console.log("previousPage"),this.$q.loading.show(),this.pagination.page--,this.updatePage()},firstPage(){console.log("firstPage"),this.$q.loading.show(),this.pagination.page=1,this.updatePage()},lastPage(){console.log("lastPage"),this.$q.loading.show(),this.pagination.page=this.pagination.rowsNumber/this.pagination.rowsPerPage,this.updatePage()},updatePage(){r["a"].post(`/users?page=${this.pagination.page}&rows=${this.pagination.rowsPerPage}`).then((e=>{this.formatTable(e.data.users),this.pagination.rowsNumber=e.data.total_num_rows,this.pagination.lastPage="Todos"===this.pagination.rowsPerPage?1:Math.ceil(this.pagination.rowsNumber/this.pagination.rowsPerPage),this.loadStop()})).catch((e=>{console.log(e),this.loadStop()}))},formatTable(e){this.dataAltered=[],e.forEach((e=>{this.dataAltered.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),console.log(this.dataAltered===this.data),this.loadStop()},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.updatePage()}},d=l,c=t("2877"),p=t("eaac"),u=t("27f9"),g=t("0016"),m=t("bd08"),b=t("357e"),h=t("db86"),f=t("9c40"),w=t("ddd8"),_=t("eebe"),P=t.n(_),v=Object(c["a"])(d,i,o,!1,null,null,null),q=v.exports;P()(v,"components",{QTable:p["a"],QInput:u["a"],QIcon:g["a"],QTr:m["a"],QTh:b["a"],QTd:h["a"],QBtn:f["a"],QSelect:w["a"]});var y={name:"tableuser",data(){return{return:{}}},components:{TableUsers:q}},x=y,k=Object(c["a"])(x,n,s,!1,null,null,null);a["default"]=k.exports},"758b":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("bc3a"),s=t.n(n),i=window.location.href,o=i.split("/"),r=o[0]+"//"+o[2];const l=s.a.create({baseURL:r,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);