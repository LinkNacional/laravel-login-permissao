(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a("bc3a"),n=a.n(l),o=window.location.href,i=o.split("/"),s=i[0]+"//"+i[2];const r=n.a.create({baseURL:s,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"9e22":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("FormEditUser")],1),a("div",{staticClass:"col-6"},[a("LogUser",{attrs:{id:e.id}})],1)])},n=[],o=a("758b"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Logs do usuário")]),a("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},s=[],r={name:"LogUser",props:["log"],data(){return{text:"",cont:0}},methods:{},beforeMount(){}},c=r,d=a("2877"),u=a("27f9"),m=a("eebe"),p=a.n(m),f=Object(d["a"])(c,i,s,!1,null,null,null),b=f.exports;p()(f,"components",{QInput:u["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Dados do usuario")]),a("div",[a("q-input",{attrs:{filled:"",label:"Nome"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Sobrenome"},model:{value:e.sobrenome,callback:function(t){e.sobrenome=t},expression:"sobrenome"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"E-Mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Departamento"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Gerente"},model:{value:e.gerente,callback:function(t){e.gerente=t},expression:"gerente"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Unidade"},model:{value:e.unidade,callback:function(t){e.unidade=t},expression:"unidade"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Telefone"},model:{value:e.telefone,callback:function(t){e.telefone=t},expression:"telefone"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Cargo"},model:{value:e.cargo,callback:function(t){e.cargo=t},expression:"cargo"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Ramal"},model:{value:e.ramal,callback:function(t){e.ramal=t},expression:"ramal"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Hora Tecnica"},model:{value:e.hora_tecnica,callback:function(t){e.hora_tecnica=t},expression:"hora_tecnica"}})],1)])])},x=[],g={name:"FromEditUser",props:["user"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:""}},methods:{renderDetails(){console.log(this.user)}}},h=g,k=Object(d["a"])(h,v,x,!1,null,null,null),q=k.exports;p()(k,"components",{QInput:u["a"]});var _={name:"edit_user",props:["id"],data(){return{}},components:{LogUser:b,FormEditUser:q},methods:{getlog(){o["a"].post("users/edit/"+this.id).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}},w=_,C=Object(d["a"])(w,l,n,!1,null,null,null);t["default"]=C.exports}}]);