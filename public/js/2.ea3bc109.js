(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2e90":function(t,s,e){"use strict";e("be0a")},"4cdf":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[t.auths_names.find((function(t){return"Gerenciar usuários"==t}))?e("CardInfoDashboard",{staticStyle:{color:"purple"}}):t._e()],1)},n=[],r=(e("e6cf"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[e("q-card",{staticClass:"my-card"},[e("q-card-section",[t._v("\n      "+t._s(t.lorem)+"\n    ")])],1)],1)}),o=[],i={name:"CardInfoDashboard",data(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},u=i,c=(e("2e90"),e("2877")),d=e("f09f"),l=e("a370"),m=e("eebe"),h=e.n(m),p=Object(c["a"])(u,r,o,!1,null,"d9b3dd24",null),f=p.exports;h()(p,"components",{QCard:d["a"],QCardSection:l["a"]});var b=e("758b"),_={name:"dashboard",data(){return{auths_list:[],auths_names:[]}},components:{CardInfoDashboard:f},methods:{async auths(){b["a"].post("/users/permissions").then((t=>{this.auths_list=t.data,Object.entries(this.auths_list).forEach((t=>{this.auths_names.push(t[1][0])})),console.log(this.auths_names)})).catch((t=>{console.log("error /users/permissions",t)}))}},beforeMount(){this.auths()}},q=_,v=Object(c["a"])(q,a,n,!1,null,null,null);s["default"]=v.exports},be0a:function(t,s,e){}}]);