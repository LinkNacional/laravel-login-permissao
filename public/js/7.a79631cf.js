(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{3764:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableUsers",{attrs:{title:"Usuarios"}})},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{dense:e.$q.screen.lt.sm,title:this.title,data:e.data,columns:e.columns,"row-key":"id",filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Busca"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(t){return[a("q-tr",{attrs:{props:t}},e._l(t.cols,(function(s){return a("q-th",{directives:[{name:"show",rawName:"v-show",value:""!=s.label,expression:"col.label != ''"}],key:s.name,attrs:{props:t}},[e._v("\n          "+e._s(s.label)+"\n        ")])})),1)]}},{key:"body",fn:function(t){return[a("q-tr",{staticStyle:{cursor:"pointer"},attrs:{props:t},on:{click:function(e){t.expand=!t.expand}}},e._l(t.cols,(function(s){return a("q-td",{directives:[{name:"show",rawName:"v-show",value:"id"!=s.name,expression:"col.name != 'id'"}],key:s.name,attrs:{props:t}},["Status"==s.name?a("i",{staticClass:"fas fa-circle",staticStyle:{"margin-left":"10%"},style:{color:1==s.value?"green":"gray"}}):"Permissões"==s.name?a("q-btn",{staticStyle:{"margin-left":"5%"},attrs:{to:{path:"/users/permission/"+t.key},size:"sm",color:"accent",round:"",dense:""}},[a("i",{staticClass:"fas fa-pen"})]):a("span",[e._v(e._s(s.value))])],1)})),1),a("q-tr",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"props.expand"}],attrs:{props:t}},[a("q-td",{attrs:{colspan:"100%"}},[a("div",{staticClass:"text-left"},[e._v("This is expand slot for row above: "+e._s(t.row.name)+".")])])],1)]}}])})],1)},l=[],i=(a("e6cf"),a("758b")),o={name:"tablelist",props:["title"],data(){return{filter:"",isLoaded:!1,pagination:{rowsPerPage:7},columns:[{name:"id",align:"left",label:"",field:""},{name:"Permissões",align:"left",label:"Permissões",field:"Permissões"},{name:"Status",align:"left",label:"status",field:"status",sortable:!0,required:!0},{name:"name",required:!0,label:"Nome",align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"E-mail",align:"center",label:"E-mail",field:"email",sortable:!0},{name:"Departamento",align:"center",label:"Departamento",field:"departamento",sortable:!0,required:!0}],data:[]}},methods:{formatTable(e){e.data.forEach((e=>{this.data.push({id:e.user.id,name:e.user.name,email:e.user.email,departamento:null==e.departament?"":e.departament.name,Status:e.user.active}),console.log(this.data)})),this.$q.loadingBar.stop()},async getUsers(){this.$q.loadingBar.start(),i["a"].post("/users").then((e=>{this.formatTable(e),this.$q.loadingBar.stop()})).catch((e=>{console.log(e),this.$q.loadingBar.stop()}))}},beforeMount(){this.getUsers()}},c=o,u=a("2877"),d=a("eaac"),p=a("27f9"),m=a("0016"),f=a("bd08"),b=a("357e"),h=a("db86"),g=a("9c40"),v=a("eebe"),w=a.n(v),q=Object(u["a"])(c,r,l,!1,null,null,null),y=q.exports;w()(q,"components",{QTable:d["a"],QInput:p["a"],QIcon:m["a"],QTr:f["a"],QTh:b["a"],QTd:h["a"],QBtn:g["a"]});var x={name:"tableuser",data(){return{return:{}}},components:{TableUsers:y}},_=x,k=Object(u["a"])(_,s,n,!1,null,null,null);t["default"]=k.exports},"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a("bc3a"),n=a.n(s),r=window.location.href,l=r.split("/"),i=l[0]+"//"+l[2];const o=n.a.create({baseURL:i,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})}}]);