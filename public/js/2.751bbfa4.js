(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2e90":function(t,a,e){"use strict";e("be0a")},"4cdf":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[t.auths_names.find((function(t){return"users"==t}))?e("CardInfoDashboard",{staticStyle:{color:"purple"}}):t._e()],1)},n=[],o=(e("e6cf"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[e("q-card",{staticClass:"my-card"},[e("q-card-section",[t._v("\n      "+t._s(t.lorem)+"\n    ")])],1)],1)}),r=[],i={name:"CardInfoDashboard",data(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},u=i,c=(e("2e90"),e("2877")),d=e("f09f"),l=e("a370"),m=e("eebe"),h=e.n(m),p=Object(c["a"])(u,o,r,!1,null,"d9b3dd24",null),f=p.exports;h()(p,"components",{QCard:d["a"],QCardSection:l["a"]});var b=e("758b"),_={name:"dashboard",data(){return{auths_list:[],auths_names:[]}},components:{CardInfoDashboard:f},methods:{async auths(){b["a"].post("users/auths/all").then((t=>{this.auths_list=t.data,Object.entries(this.auths_list).forEach((t=>{this.auths_names.push(t[1][0])})),console.log(this.auths_names)})).catch((t=>{console.log("error /auths",t)}))}},beforeMount(){this.auths()}},w=_,q=Object(c["a"])(w,s,n,!1,null,null,null);a["default"]=q.exports},"758b":function(t,a,e){"use strict";e.d(a,"a",(function(){return u}));var s=e("bc3a"),n=e.n(s),o=window.location.href,r=o.split("/"),i=r[0]+"//"+r[2];const u=n.a.create({baseURL:i,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},be0a:function(t,a,e){}}]);