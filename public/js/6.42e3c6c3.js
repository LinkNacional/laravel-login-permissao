(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a("bc3a"),s=a.n(l),o=window.location.href,n=o.split("/"),i=n[0]+"//"+n[2];const r=s.a.create({baseURL:i,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"9e22":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("FormEditUser",{attrs:{promisse:e.promisse}})],1),a("div",{staticClass:"col-6"},[a("LogUser",{attrs:{promisse:e.promisse}})],1)])},s=[],o=a("758b"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Logs do usuário")]),a("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},i=[],r=(a("e6cf"),{name:"LogUser",props:["promisse"],data(){return{text:"",cont:0,log:""}},methods:{async getlog(){this.log=this.promisse.data,console.log(this.log)}},beforeMount(){this.getlog()}}),c=r,d=a("2877"),u=a("27f9"),m=a("eebe"),p=a.n(m),f=Object(d["a"])(c,n,i,!1,null,null,null),b=f.exports;p()(f,"components",{QInput:u["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Dados do usuario")]),a("div",[a("q-input",{attrs:{filled:"",label:"Nome"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Sobrenome"},model:{value:e.sobrenome,callback:function(t){e.sobrenome=t},expression:"sobrenome"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"E-Mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Departamento"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Gerente"},model:{value:e.gerente,callback:function(t){e.gerente=t},expression:"gerente"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Unidade"},model:{value:e.unidade,callback:function(t){e.unidade=t},expression:"unidade"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Telefone"},model:{value:e.telefone,callback:function(t){e.telefone=t},expression:"telefone"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Cargo"},model:{value:e.cargo,callback:function(t){e.cargo=t},expression:"cargo"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Ramal"},model:{value:e.ramal,callback:function(t){e.ramal=t},expression:"ramal"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Hora Tecnica"},model:{value:e.hora_tecnica,callback:function(t){e.hora_tecnica=t},expression:"hora_tecnica"}})],1)])])},g=[],h={name:"FromEditUser",props:["promisse"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:"",user:{}}},methods:{async renderDetails(){this.promisse.then((e=>{this.user=this.log.shift(),console.log("edit user",this.user)}))}},beforeMount(){this.renderDetails()}},x=h,k=Object(d["a"])(x,v,g,!1,null,null,null),q=k.exports;p()(k,"components",{QInput:u["a"]});var _={name:"edit_user",props:["id"],data(){return{user:{},logs:[],promisse:{}}},components:{LogUser:b,FormEditUser:q},methods:{getlog(){this.promisse=o["a"].post("users/edit/"+this.id)}},beforeMount(){this.getlog()}},w=_,C=Object(d["a"])(w,l,s,!1,null,null,null);t["default"]=C.exports}}]);