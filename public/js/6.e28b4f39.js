(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a("bc3a"),i=a.n(s),l=window.location.href,o=l.split("/"),n=o[0]+"//"+o[2];const r=i.a.create({baseURL:n,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"9e22":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("FormEditUser",{attrs:{promisse:e.promisse}})],1),a("div",{staticClass:"col-6"},[a("LogUser",{attrs:{promisse:e.promisse}})],1)])},i=[],l=a("758b"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Logs do usuário")]),a("q-input",{attrs:{filled:"",type:"textarea",rows:"20",disable:!0},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},n=[],r=(a("e6cf"),{name:"LogUser",props:["promisse"],data(){return{text:"",cont:0,log:""}},methods:{async getlog(){this.promisse.then((e=>{this.log=e.data,this.log.shift(),this.log.forEach((e=>{this.cont++,this.text+="Data/hora: ",this.text+=e.data,this.text+=" IP: ",this.text+=e.ip,this.text+=" Status: ",this.text+="ok"===e.status?"sucesso;":"falhou;",this.text+="\n"}))}))}},beforeMount(){this.getlog()}}),d=r,c=a("2877"),u=a("27f9"),m=a("eebe"),h=a.n(m),p=Object(c["a"])(d,o,n,!1,null,null,null),f=p.exports;h()(p,"components",{QInput:u["a"]});var b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-left"},[e._v("Dados do usuario")]),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Nome"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Sobrenome"},model:{value:e.sobrenome,callback:function(t){e.sobrenome=t},expression:"sobrenome"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"E-Mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Departamento"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Gerente"},model:{value:e.gerente,callback:function(t){e.gerente=t},expression:"gerente"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Unidade"},model:{value:e.unidade,callback:function(t){e.unidade=t},expression:"unidade"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Telefone"},model:{value:e.telefone,callback:function(t){e.telefone=t},expression:"telefone"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Cargo"},model:{value:e.cargo,callback:function(t){e.cargo=t},expression:"cargo"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Ramal"},model:{value:e.ramal,callback:function(t){e.ramal=t},expression:"ramal"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Hora Tecnica"},model:{value:e.hora_tecnica,callback:function(t){e.hora_tecnica=t},expression:"hora_tecnica"}})],1),a("div",{staticClass:"float-right"},[a("q-btn",{attrs:{color:"primary",label:"Salvar"}})],1)])])},v=[],g={name:"FromEditUser",props:["promisse"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:"",user:{},infos:{},details:{}}},methods:{async renderDetails(){this.promisse.then((e=>{this.infos=e.data.shift(),this.user=this.infos.user,this.details=this.infos.details,console.log("edit user",this.user),console.log("edit details",this.details),console.log("edit details",this.infos),this.name=this.user.name,this.sobrenome=this.details.lastname,this.email=this.user.email,this.unidade=this.details.unit,this.telefone=this.details.phone,this.cargo=this.details.role,this.ramal=this.details.ramal,this.hora_tecnica=this.details.technical_time}))}},beforeMount(){this.renderDetails()}},x=g,_=a("9c40"),k=Object(c["a"])(x,b,v,!1,null,null,null),q=k.exports;h()(k,"components",{QInput:u["a"],QBtn:_["a"]});var w={name:"edit_user",props:["id"],data(){return{user:{},logs:[],promisse:{}}},components:{LogUser:f,FormEditUser:q},methods:{getlog(){this.promisse=l["a"].post("users/edit/"+this.id)}},beforeMount(){this.getlog()}},C=w,E=Object(c["a"])(C,s,i,!1,null,null,null);t["default"]=E.exports}}]);