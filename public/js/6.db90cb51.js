(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a("bc3a"),n=a.n(l),i=window.location.href,o=i.split("/"),s=o[0]+"//"+o[2];const r=n.a.create({baseURL:s,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"9e22":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justif-around"},[a("div",{staticClass:"col-6"},[a("FormEditUser")],1),a("div",{staticClass:"col-6"},[a("LogUser",{attrs:{id:e.id}})],1)])},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Log de entrada")]),a("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},o=[],s=a("758b"),r={name:"LogUser",props:["id"],data(){return{text:"",cont:0}},methods:{getlog(){s["a"].post("users/edit/"+this.id).then((e=>{e.data.forEach((e=>{this.cont++,this.text+="Data/hora: ",this.text+=e.data,this.text+=" IP: ",this.text+=e.ip,this.text+=" Status: ",this.text+="ok"===e.status?"sucesso;":"falhou;",this.text+="\n"}))})).catch((e=>{console.log(e)}))}},beforeMount(){this.getlog()}},c=r,d=a("2877"),u=a("27f9"),p=a("eebe"),m=a.n(p),f=Object(d["a"])(c,i,o,!1,null,null,null),b=f.exports;m()(f,"components",{QInput:u["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Dados do usuario")]),a("div",[a("q-input",{attrs:{filled:"",label:"Nome"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Sobrenome"},model:{value:e.sobrenome,callback:function(t){e.sobrenome=t},expression:"sobrenome"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"E-Mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Departamento"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Gerente"},model:{value:e.gerente,callback:function(t){e.gerente=t},expression:"gerente"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Unidade"},model:{value:e.unidade,callback:function(t){e.unidade=t},expression:"unidade"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Telefone"},model:{value:e.telefone,callback:function(t){e.telefone=t},expression:"telefone"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Cargo"},model:{value:e.cargo,callback:function(t){e.cargo=t},expression:"cargo"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Ramal"},model:{value:e.ramal,callback:function(t){e.ramal=t},expression:"ramal"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Hora Tecnica"},model:{value:e.hora_tecnica,callback:function(t){e.hora_tecnica=t},expression:"hora_tecnica"}})],1)])])},x=[],h={name:"FromEditUser",props:["id"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:""}},components:{}},g=h,k=Object(d["a"])(g,v,x,!1,null,null,null),q=k.exports;m()(k,"components",{QInput:u["a"]});var _={name:"edit_user",props:["id"],data(){return{}},components:{LogUser:b,FormEditUser:q}},w=_,C=Object(d["a"])(w,l,n,!1,null,null,null);t["default"]=C.exports}}]);