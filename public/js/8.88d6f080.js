(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3764:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableUsers",{attrs:{title:"Usuarios"}})},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:!this.isLoaded,expression:"!this.isLoaded"}],staticClass:"q-pa-md"},[a("q-table",{attrs:{dense:e.$q.screen.lt.sm,title:this.title,data:e.data,columns:e.columns,"row-key":"id",pagination:e.pagination,"rows-per-page-options":e.rows_per_page_options},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{borderless:"",dense:"",debounce:"600",to:{path:"/users/search?text_search="+e.filter},placeholder:"Busca"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(t){return[a("q-tr",{attrs:{props:t}},e._l(t.cols,(function(s){return a("q-th",{directives:[{name:"show",rawName:"v-show",value:""!=s.label,expression:"col.label != ''"}],key:s.name,attrs:{props:t}},[e._v("\n          "+e._s(s.label)+"\n        ")])})),1)]}},{key:"body",fn:function(t){return[a("q-tr",{staticStyle:{cursor:"pointer"},attrs:{props:t},on:{click:function(e){t.expand=!t.expand}}},e._l(t.cols,(function(s){return a("q-td",{directives:[{name:"show",rawName:"v-show",value:"0"!=s.name.substring(1,0),expression:"col.name.substring(1,0) != '0'"}],key:s.name,attrs:{props:t}},["Status"==s.name?a("i",{staticClass:"fas fa-circle",staticStyle:{"margin-left":"10%"},style:{color:1==s.value?"green":"gray"}}):"Permissões"==s.name?a("q-btn",{staticStyle:{"margin-left":"5%"},attrs:{to:{path:"/users/permission/"+t.key},size:"sm",color:"accent",round:"",dense:""}},[a("i",{staticClass:"fas fa-pen"})]):a("span",[e._v(e._s(s.value))])],1)})),1),e._l(t.cols,(function(s){return a("q-tr",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"props.expand"}],key:s.name,attrs:{props:t}},[a("q-td",{directives:[{name:"show",rawName:"v-show",value:""==s.label&&""!=s.field,expression:"col.label == '' && col.field != ''"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[a("div",{staticClass:"text-left"},[e._v("\n            "+e._s(s.field)+": "+e._s(s.value)+"\n          ")])])],1)})),a("q-td",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"props.expand"}],staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[a("div",{staticClass:"text-left"},[a("q-btn",{staticClass:"full-width",attrs:{"text-color":"black",color:"standard",to:{path:"/users/edit/"+t.key},label:"Editar usuário"}})],1)])]}},{key:"bottom",fn:function(t){return[a("div",{staticClass:"q-table__bottom row items-center justify-end"},[a("div",{staticClass:"q-table__separator col"}),a("div",{staticClass:"q-table__control",staticStyle:{"max-higth":"10px"}},[a("span",{staticClass:"q-table__bottom-item"},[e._v("paginas:")]),a("q-select",{attrs:{dense:"",options:e.rows_per_page_options},model:{value:e.rowsPerPage,callback:function(t){e.rowsPerPage=t},expression:"rowsPerPage"}})],1),a("div",{staticClass:"q-table__control"},[a("span",{staticClass:"q-table__bottom-item"},[e._v("1-7 de 21")]),a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round text-grey-8 disabled q-btn--wrap q-btn--dense",attrs:{tabindex:"-1",type:"button",role:"button",disabled:"disabled","aria-disabled":"true"}},[a("span",{staticClass:"q-focus-helper"}),a("span",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("span",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("i",{staticClass:"material-icons q-icon notranslate",attrs:{"aria-hidden":"true",role:"img"}},[e._v("first_page")])])])]),a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round text-grey-8 disabled q-btn--wrap q-btn--dense",attrs:{tabindex:"-1",type:"button",role:"button",disabled:"disabled","aria-disabled":"true"}},[a("span",{staticClass:"q-focus-helper"}),a("span",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("span",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("i",{staticClass:"material-icons q-icon notranslate",attrs:{"aria-hidden":"true",role:"img"}},[e._v("chevron_left")])])])]),a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round text-grey-8 q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--dense",attrs:{tabindex:"0",type:"button",role:"button"}},[a("span",{staticClass:"q-focus-helper"}),a("span",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("span",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("i",{staticClass:"material-icons q-icon notranslate",attrs:{"aria-hidden":"true",role:"img"}},[e._v("chevron_right")])])])]),a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round text-grey-8 q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--dense",attrs:{tabindex:"0",type:"button",role:"button"}},[a("span",{staticClass:"q-focus-helper"}),a("span",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("span",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("i",{staticClass:"material-icons q-icon notranslate",attrs:{"aria-hidden":"true",role:"img"}},[e._v("last_page")])])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.expand_rows,expression:"props.expand_rows"}],staticClass:"bg-grey-2"},[e._v("\n            teste\n        ")])]}}])})],1)},o=[],i=(a("e6cf"),a("758b")),l={name:"tablelist",props:["title"],data(){return{filter:"",total_num_rows:0,isLoaded:!0,rowsPerPage:7,rows_per_page_options:[5,7,10,20,50,"Todos"],pagination:{page:1,rowsPerPage:7,rowsNumber:0},columns:[{name:"0id",align:"left",label:"",field:""},{name:"Permissões",align:"left",label:"Permissões",field:"Permissões"},{name:"Status",align:"left",label:"status",field:"status",sortable:!0,required:!0},{name:"name",required:!0,label:"Nome",align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"E-mail",align:"center",label:"E-mail",field:"email",sortable:!0},{name:"Departamento",align:"left",label:"Departamento",field:"departamento",sortable:!0,required:!0},{name:"0Administrador",align:"center",label:"",field:"Gerente",sortable:!0,required:!0},{name:"0Unidade",align:"center",label:"",field:"Unidade",sortable:!0,required:!0},{name:"0Sobrenome",align:"center",label:"",field:"Sobrenome",sortable:!0,required:!0},{name:"0Fone",align:"center",label:"",field:"Telefone",sortable:!0,required:!0},{name:"0Cargo",align:"center",label:"",field:"Cargo",sortable:!0,required:!0},{name:"0Ramal",align:"center",label:"",field:"Ramal",sortable:!0,required:!0},{name:"0Hora_Técnica",align:"center",label:"",field:"Hora Técnica",sortable:!0,required:!0}],data:[]}},watch:{filter:function(){i["a"].post("/users/search?search_text="+this.filter+"&num_rows="+this.pagination.rowsPerPage).then((e=>{console.log("response",e),this.data=[],e.data.forEach((e=>{this.data.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),console.log("this.data",this.data)}))}},methods:{pagePass(){console.log("teste")},formatTable(e){e.forEach((e=>{this.data.push({id:e.id,name:e.name,email:e.email,departamento:null==e.departament?"":e.departament.name,administrador:"admin user",Unidade:"unidade ",Sobrenome:"sobrenome",Telefone:"88988229962",Cargo:"dev",Ramal:"12","Hora Técnica":"10"})})),this.loadStop()},async getUsers(){this.$q.loading.show(),i["a"].post("/users").then((e=>{this.formatTable(e.data.users),this.pagination.rowsNumber=e.data.total_num_rows})).catch((e=>{console.log(e),this.loadStop()}))},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.getUsers()}},c=l,d=a("2877"),p=a("eaac"),b=a("27f9"),u=a("0016"),m=a("bd08"),f=a("357e"),q=a("db86"),h=a("9c40"),_=a("ddd8"),g=a("eebe"),w=a.n(g),v=Object(d["a"])(c,r,o,!1,null,"2da383a1",null),C=v.exports;w()(v,"components",{QTable:p["a"],QInput:b["a"],QIcon:u["a"],QTr:m["a"],QTh:f["a"],QTd:q["a"],QBtn:h["a"],QSelect:_["a"]});var x={name:"tableuser",data(){return{return:{}}},components:{TableUsers:C}},y=x,k=Object(d["a"])(y,s,n,!1,null,null,null);t["default"]=k.exports},"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var s=a("bc3a"),n=a.n(s),r=window.location.href,o=r.split("/"),i=o[0]+"//"+o[2];const l=n.a.create({baseURL:i,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);