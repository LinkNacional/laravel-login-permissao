(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"758b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a("bc3a"),i=a.n(s),o=window.location.href,l=o.split("/"),n=l[0]+"//"+l[2];const r=i.a.create({baseURL:n,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"9e22":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("FormEditUser",{attrs:{promisse:e.promisse,id:e.id}})],1),a("div",{staticClass:"col-6"},[a("LogUser",{attrs:{promisse:e.promisse}})],1)])},i=[],o=a("758b"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoadedLog,expression:"!isLoadedLog"}],staticClass:"q-pa-md"},[a("q-input",{attrs:{filled:"",type:"textarea",rows:"20",disable:!0},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},n=[],r=(a("e6cf"),{name:"LogUser",props:["promisse"],data(){return{text:"",cont:0,log:"",isLoadedLog:!0}},methods:{async getlog(){this.promisse.then((e=>{this.log=e.data,this.log.shift(),this.log.forEach((e=>{this.cont++,this.text+="Data/hora: ",this.text+=e.data,this.text+=" IP: ",this.text+=e.ip,this.text+=" Status: ",this.text+="ok"===e.status?"sucesso;":"falhou;",this.text+="\n"})),this.loadStopLog()})).catch((e=>{console.log(e),this.loadStopLog()}))},loadStopLog(){this.$q.loading.hide(),this.isLoadedLog=!1}},beforeMount(){this.getlog()}}),d=r,c=a("2877"),u=a("27f9"),h=a("eebe"),m=a.n(h),p=Object(c["a"])(d,l,n,!1,null,null,null),f=p.exports;m()(p,"components",{QInput:u["a"]});var b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{directives:[{name:"show",rawName:"v-show",value:!e.isLoaded,expression:"!isLoaded"}]},[a("div",{staticClass:"q-pa-md"},[a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Nome"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Sobrenome"},model:{value:e.sobrenome,callback:function(t){e.sobrenome=t},expression:"sobrenome"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"E-Mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Departamento"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Gerente"},model:{value:e.gerente,callback:function(t){e.gerente=t},expression:"gerente"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Unidade"},model:{value:e.unidade,callback:function(t){e.unidade=t},expression:"unidade"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Telefone"},model:{value:e.telefone,callback:function(t){e.telefone=t},expression:"telefone"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Cargo"},model:{value:e.cargo,callback:function(t){e.cargo=t},expression:"cargo"}})],1),a("div",[a("q-input",{attrs:{disable:!0,filled:"",label:"Ramal"},model:{value:e.ramal,callback:function(t){e.ramal=t},expression:"ramal"}})],1),a("div",[a("q-input",{attrs:{filled:"",label:"Hora Tecnica"},model:{value:e.hora_tecnica,callback:function(t){e.hora_tecnica=t},expression:"hora_tecnica"}})],1),a("div",[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"Salvar"},on:{click:function(t){return e.save()}}})],1)])])])},v=[],g={name:"FromEditUser",props:["promisse","id"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:"",user:{},infos:{},details:{},isLoaded:!0}},methods:{async renderDetails(){this.promisse.then((e=>{this.infos=e.data.shift(),this.user=this.infos.user,this.details=this.infos.details,this.name=this.user.name,this.sobrenome=this.details.lastname,this.email=this.user.email,this.unidade=this.details.unit,this.telefone=this.details.phone,this.cargo=this.details.role,this.ramal=this.details.ramal,this.hora_tecnica=this.details.technical_time}))},save(){o["a"].post("users/edit/"+this.id+"/save",{technical_time:this.hora_tecnica}).then((e=>{console.log(e),this.loadStop()})).catch((e=>{console.log(e),this.loadStop()}))},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.renderDetails()}},x=g,w=a("9c40"),L=Object(c["a"])(x,b,v,!1,null,null,null),q=L.exports;m()(L,"components",{QInput:u["a"],QBtn:w["a"]});var k={name:"edit_user",props:["id"],data(){return{user:{},logs:[],promisse:{}}},components:{LogUser:f,FormEditUser:q},methods:{getlog(){this.promisse=o["a"].post("users/edit/"+this.id)}},beforeMount(){this.$q.loading.show(),this.getlog()}},_=k,C=Object(c["a"])(_,s,i,!1,null,null,null);t["default"]=C.exports}}]);