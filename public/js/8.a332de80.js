(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9e22":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("FormEditUser",{attrs:{promisse:e.promisse,id:e.id}})],1),a("div",{staticClass:"col-6"},[a("LogUser",{attrs:{promisse:e.promisse,id:e.id}})],1)])},i=[],o=a("758b"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoadedLog,expression:"!isLoadedLog"}],staticClass:"q-pa-md"},[a("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},n=[],r=(a("e6cf"),a("5638")),d={name:"LogUser",props:["promisse","id"],data(){return{text:"",cont:0,log:"",isLoadedLog:!0}},methods:{async getlog(){this.promisse.then((e=>{this.log=e.data,this.log.shift(),this.log.forEach((e=>{this.cont++,this.text+="Data/hora: ",this.text+=e.data,this.text+=" IP: ",this.text+=e.ip,this.text+=" Status: ",this.text+="ok"===e.status?"sucesso;":"falhou;",this.text+="\n"})),this.loadStopLog()})).catch((e=>{console.log(e),this.loadStopLog()}))},loadStopLog(){this.$q.loading.hide(),this.isLoadedLog=!1}},beforeMount(){window.Pusher=a("782e"),window.Echo=new r["a"]({broadcaster:"pusher",key:"e1b950a49e2964e115dc",wsHost:"127.0.0.1",wsPort:6001,forceTLS:!1,disableStatus:!0}),console.log(window.Echo.channel("channel")),window.Echo.channel("channel").listen("App.Events",(e=>{console.log(e)}))}},c=d,m=a("2877"),h=a("27f9"),u=a("eebe"),p=a.n(u),b=Object(m["a"])(c,l,n,!1,null,null,null),g=b.exports;p()(b,"components",{QInput:h["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoaded,expression:"!isLoaded"}]},[a("form",[a("div",{staticClass:"q-pa-md"},[a("div",[a("label",[e._v("Hora Técnica")]),a("div",{staticClass:"row ",staticStyle:{"margin-bottom":"1%"}},[a("q-input",{staticStyle:{width:"75%"},attrs:{filled:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v("\n                    R$\n                  ")]},proxy:!0}]),model:{value:e.hora_tecnica,callback:function(t){e.hora_tecnica=t},expression:"hora_tecnica"}}),a("q-btn",{staticStyle:{width:"25%"},attrs:{color:"primary",label:"Salvar"},on:{click:function(t){return e.save()}}})],1)]),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Nome"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Sobrenome"},model:{value:e.sobrenome,callback:function(t){e.sobrenome=t},expression:"sobrenome"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"E-Mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Departamento"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Gestor do usuário"},model:{value:e.gerente,callback:function(t){e.gerente=t},expression:"gerente"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Unidade"},model:{value:e.unidade,callback:function(t){e.unidade=t},expression:"unidade"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Telefone"},model:{value:e.telefone,callback:function(t){e.telefone=t},expression:"telefone"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Cargo"},model:{value:e.cargo,callback:function(t){e.cargo=t},expression:"cargo"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Ramal"},model:{value:e.ramal,callback:function(t){e.ramal=t},expression:"ramal"}})],1)])])])},f=[],w={name:"FromEditUser",props:["promisse","id"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:"",user:{},infos:{},details:{},isLoaded:!0}},methods:{async renderDetails(){this.promisse.then((e=>{this.infos=e.data.shift(),this.user=this.infos.user,this.details=this.infos.details,this.name=this.user.name,this.sobrenome=this.details.lastname,this.email=this.user.email,this.unidade=this.details.unit,this.telefone=this.details.phone,this.cargo=this.details.role,this.ramal=this.details.ramal,this.hora_tecnica=this.details.technical_time,this.loadStop()}))},save(){this.$q.loading.show(),o["a"].post("users/edit/"+this.id+"/save",{technical_time:this.hora_tecnica}).then((e=>{console.log(e),this.loadStop()})).catch((e=>{console.log(e),this.loadStop()}))},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.renderDetails()}},x=w,S=a("9c40"),y=Object(m["a"])(x,v,f,!1,null,null,null),L=y.exports;p()(y,"components",{QInput:h["a"],QBtn:S["a"]});var q={name:"edit_user",props:["id"],data(){return{user:{},logs:[],promisse:{}}},components:{LogUser:g,FormEditUser:L},methods:{getlog(){this.promisse=o["a"].post("users/edit/"+this.id)}},beforeMount(){this.$q.loading.show(),this.getlog()}},_=q,k=Object(m["a"])(_,s,i,!1,null,null,null);t["default"]=k.exports}}]);