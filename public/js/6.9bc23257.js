(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"758b":function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var a=s("bc3a"),n=s.n(a),o=window.location.href,i=o.split("/"),r=i[0]+"//"+i[2];const l=n.a.create({baseURL:r,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"9e22":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LogUser",{attrs:{id:t.id}})},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-xl",staticStyle:{"'max-width":"5%"}},[s("q-input",{attrs:{filled:"",type:"textarea",rows:"20"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},i=[],r=s("758b"),l={name:"LogUser",props:["id"],data(){return{text:"",cont:0}},methods:{getlog(){r["a"].post("users/edit/"+this.id).then((t=>{t.data.forEach((t=>{this.cont++,this.text+="Data/hora: ",this.text+=t.data,this.text+=" IP: ",this.text+=t.ip,this.text+=" Status: ",this.text+="ok"===t.status?"sucesso;":"falhou;",this.text+="\n"}))})).catch((t=>{console.log(t)}))}},beforeMount(){this.getlog()}},c=l,u=s("2877"),p=s("27f9"),d=s("eebe"),h=s.n(d),x=Object(u["a"])(c,o,i,!1,null,null,null),f=x.exports;h()(x,"components",{QInput:p["a"]});var b={name:"edit_user",props:["id"],data(){return{}},components:{LogUser:f}},w=b,m=Object(u["a"])(w,a,n,!1,null,null,null);e["default"]=m.exports}}]);