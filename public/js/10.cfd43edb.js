(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"9e22":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("FormEditUser",{attrs:{promisse:t.promisse,id:t.id}})],1),s("div",{staticClass:"col-6"},[s("LogUser",{attrs:{promisse:t.promisse,id:t.id}})],1)])},i=[],o=s("758b"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md"},[s("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},n=[],r=(s("e6cf"),s("5638")),d={name:"LogUser",props:["promisse","id"],data(){return{text:"",cont:0,log:"",isLoadedLog:!0}},methods:{loadStopLog(){this.$q.loading.hide(),this.isLoadedLog=!1},async getlog(){this.promisse.then((t=>{this.log=t.data,this.log.shift(),this.log.forEach((t=>{this.cont++,this.text+="Data/hora: ",this.text+=t.data,this.text+=" IP: ",this.text+=t.ip,this.text+=" Status: ",this.text+="ok"===t.status?"sucesso;":"falhou;",this.text+="\n"})),this.loadStopLog()})).catch((t=>{console.log(t),this.loadStopLog()}))},socket(){window.Echo.channel("channel").listen("Hello",(t=>{this.log="",this.text="",this.log=t,console.log(t),this.log.forEach((t=>{this.cont++,this.text+="Data/hora: ",this.text+=t.data,this.text+=" IP: ",this.text+=t.ip,this.text+=" Status: ",this.text+="ok"===t.status?"sucesso;":"falhou;",this.text+="\n"}))}))}},beforeMount(){window.Pusher=s("782e"),window.Echo=new r["a"]({broadcaster:"pusher",key:"e1b950a49e2964e115dc",wsHost:"127.0.0.1",wsPort:6001,forceTLS:!1,disableStatus:!0}),this.socket(),this.getlog()}},c=d,h=s("2877"),m=s("27f9"),u=s("eebe"),p=s.n(u),b=Object(h["a"])(c,l,n,!1,null,null,null),g=b.exports;p()(b,"components",{QInput:m["a"]});var f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoaded,expression:"!isLoaded"}]},[s("form",[s("div",{staticClass:"q-pa-md"},[s("div",[s("label",[t._v("Hora Técnica")]),s("div",{staticClass:"row ",staticStyle:{"margin-bottom":"1%"}},[s("q-input",{staticStyle:{width:"75%"},attrs:{filled:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[t._v("\n                    R$\n                  ")]},proxy:!0}]),model:{value:t.hora_tecnica,callback:function(e){t.hora_tecnica=e},expression:"hora_tecnica"}}),s("q-btn",{staticStyle:{width:"25%"},attrs:{color:"primary",label:"Salvar"},on:{click:function(e){return t.save()}}})],1)]),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Nome"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Sobrenome"},model:{value:t.sobrenome,callback:function(e){t.sobrenome=e},expression:"sobrenome"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"E-Mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Departamento"},model:{value:t.departamento,callback:function(e){t.departamento=e},expression:"departamento"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Gestor do usuário"},model:{value:t.gerente,callback:function(e){t.gerente=e},expression:"gerente"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Unidade"},model:{value:t.unidade,callback:function(e){t.unidade=e},expression:"unidade"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Telefone"},model:{value:t.telefone,callback:function(e){t.telefone=e},expression:"telefone"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Cargo"},model:{value:t.cargo,callback:function(e){t.cargo=e},expression:"cargo"}})],1),s("div",{staticStyle:{"margin-bottom":"1%"}},[s("q-input",{attrs:{disable:!0,label:"Ramal"},model:{value:t.ramal,callback:function(e){t.ramal=e},expression:"ramal"}})],1)])])])},v=[],x={name:"FromEditUser",props:["promisse","id"],data(){return{name:"",sobrenome:"",email:"",departamento:"",gerente:"",unidade:"",telefone:"",cargo:"",ramal:"",hora_tecnica:"",user:{},infos:{},details:{},isLoaded:!0}},methods:{async renderDetails(){this.promisse.then((t=>{this.infos=t.data.shift(),this.user=this.infos.user,this.details=this.infos.details,this.name=this.user.name,this.sobrenome=this.details.lastname,this.email=this.user.email,this.departamento=this.infos.adm_user_name,this.gerente=this.infos.department_name,this.unidade=this.details.unit,this.telefone=this.details.phone,this.cargo=this.details.role,this.ramal=this.details.ramal,this.hora_tecnica=this.details.technical_time,this.loadStop()}))},save(){this.$q.loading.show(),o["a"].post("users/edit/"+this.id+"/save",{technical_time:this.hora_tecnica}).then((t=>{console.log(t),this.loadStop()})).catch((t=>{console.log(t),this.loadStop()}))},loadStop(){this.$q.loading.hide(),this.isLoaded=!1}},beforeMount(){this.renderDetails()}},S=x,w=s("9c40"),_=Object(h["a"])(S,f,v,!1,null,null,null),k=_.exports;p()(_,"components",{QInput:m["a"],QBtn:w["a"]});var y={name:"edit_user",props:["id"],data(){return{user:{},logs:[],promisse:{}}},components:{LogUser:g,FormEditUser:k},methods:{getlog(){this.promisse=o["a"].post("users/edit/"+this.id)}},beforeMount(){this.$q.loading.show(),this.getlog()}},q=y,L=Object(h["a"])(q,a,i,!1,null,null,null);e["default"]=L.exports}}]);