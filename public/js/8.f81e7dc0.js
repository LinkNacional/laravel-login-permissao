(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9e22":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("FormEditUser",{attrs:{promisse:t.promisse,id:t.id}})],1),a("div",{staticClass:"col-6"},[a("LogUser",{attrs:{promisse:t.promisse,id:t.id}})],1)])},i=[],o=a("758b"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoadedLog,expression:"!isLoadedLog"}],staticClass:"q-pa-md"},[a("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},n=[],r=(a("e6cf"),a("5638")),d={name:"LogUser",props:["promisse","id"],data(){return{text:"",cont:0,log:"",isLoadedLog:!0}},methods:{async getlog(){this.promisse.then((t=>{this.log=t.data,this.log.shift(),this.log.forEach((t=>{this.cont++,this.text+="Data/hora: ",this.text+=t.data,this.text+=" IP: ",this.text+=t.ip,this.text+=" Status: ",this.text+="ok"===t.status?"sucesso;":"falhou;",this.text+="\n"})),this.loadStopLog()})).catch((t=>{console.log(t),this.loadStopLog()}))},loadStopLog(){this.$q.loading.hide(),this.isLoadedLog=!1}},beforeMount(){window.Pusher=a("782e"),window.Echo=new r["a"]({broadcaster:"pusher",key:"e1b950a49e2964e115dc",wsHost:"127.0.0.1",wsPort:6001,forceTLS:!1,disableStatus:!0}),console.log(window.Echo),window.Echo.channel("channel").listen("App.Events",(t=>{console.log(t)}))}},c=d,m=a("2877"),h=a("27f9"),u=a("eebe"),p=a.n(u),b=Object(m["a"])(c,l,n,!1,null,null,null),g=b.exports;p()(b,"components",{QInput:h["a"]});var v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoaded,expression:"!isLoaded"}]},[a("form",[a("div",{staticClass:"q-pa-md"},[a("div",[a("label",[t._v("Hora Técnica")]),a("div",{staticClass:"row ",staticStyle:{"margin-bottom":"1%"}},[a("q-input",{staticStyle:{width:"75%"},attrs:{filled:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[t._v("\n                    R$\n                  ")]},proxy:!0}]),model:{value:t.hora_tecnica,callback:function(e){t.hora_tecnica=e},expression:"hora_tecnica"}}),a("q-btn",{staticStyle:{width:"25%"},attrs:{color:"primary",label:"Salvar"},on:{click:function(e){return t.save()}}})],1)]),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Nome"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Sobrenome"},model:{value:t.sobrenome,callback:function(e){t.sobrenome=e},expression:"sobrenome"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"E-Mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Departamento"},model:{value:t.departamento,callback:function(e){t.departamento=e},expression:"departamento"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Gestor do usuário"},model:{value:t.gerente,callback:function(e){t.gerente=e},expression:"gerente"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Unidade"},model:{value:t.unidade,callback:function(e){t.unidade=e},expression:"unidade"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Telefone"},model:{value:t.telefone,callback:function(e){t.telefone=e},expression:"telefone"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Cargo"},model:{value:t.cargo,callback:function(e){t.cargo=e},expression:"cargo"}})],1),a("div",{staticStyle:{"margin-bottom":"1%"}},[a("q-input",{attrs:{disable:!0,label:"Ramal"},model:{value:t.ramal,callback:function(e){t.ramal=e},expression:"ramal"}})],1)])])])},f=[],w={name:"FromEditUser",props:["promisse","id"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:"",user:{},infos:{},details:{},isLoaded:!0}},methods:{async renderDetails(){this.promisse.then((t=>{this.infos=t.data.shift(),this.user=this.infos.user,this.details=this.infos.details,this.name=this.user.name,this.sobrenome=this.details.lastname,this.email=this.user.email,this.unidade=this.details.unit,this.telefone=this.details.phone,this.cargo=this.details.role,this.ramal=this.details.ramal,this.hora_tecnica=this.details.technical_time,this.loadStop()}))},save(){this.$q.loading.show(),o["a"].post("users/edit/"+this.id+"/save",{technical_time:this.hora_tecnica}).then((t=>{console.log(t),this.loadStop()})).catch((t=>{console.log(t),this.loadStop()}))},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.renderDetails()}},x=w,S=a("9c40"),y=Object(m["a"])(x,v,f,!1,null,null,null),L=y.exports;p()(y,"components",{QInput:h["a"],QBtn:S["a"]});var q={name:"edit_user",props:["id"],data(){return{user:{},logs:[],promisse:{}}},components:{LogUser:g,FormEditUser:L},methods:{getlog(){this.promisse=o["a"].post("users/edit/"+this.id)}},beforeMount(){this.$q.loading.show(),this.getlog()}},_=q,k=Object(m["a"])(_,s,i,!1,null,null,null);e["default"]=k.exports}}]);