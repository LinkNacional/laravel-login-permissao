(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2e90":function(a,t,e){"use strict";e("be0a")},"4cdf":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[a.auths_list[1]?e("CardInfoDashboard"):a._e(),a.auths_list.auth2?e("CardInfoDashboard"):a._e(),a.auths_list.auth3?e("CardInfoDashboard"):a._e(),a.auths_list.auth1?e("CardInfoDashboard"):a._e(),a.auths_list.auth2?e("CardInfoDashboard"):a._e(),a.auths_list.auth3?e("CardInfoDashboard"):a._e()],1)},n=[],o=(e("e6cf"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[e("q-card",{staticClass:"my-card"},[e("q-card-section",[a._v("\n      "+a._s(a.lorem)+"\n    ")])],1)],1)}),r=[],i={name:"CardInfoDashboard",data(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},u=i,d=(e("2e90"),e("2877")),c=e("f09f"),l=e("a370"),h=e("eebe"),m=e.n(h),f=Object(d["a"])(u,o,r,!1,null,"d9b3dd24",null),b=f.exports;m()(f,"components",{QCard:c["a"],QCardSection:l["a"]});var _=e("758b"),p={name:"dashboard",data(){return{auths_list:[],auths_names:[]}},components:{CardInfoDashboard:b},methods:{async auths(){_["a"].post("/auths").then((a=>{this.auths_list=a.data,a.data.forEach((a=>{this.auths_names=a[0]}))})).catch((a=>{console.log("error /auths",a)}))}},beforeMount(){this.auths()}},C=p,w=Object(d["a"])(C,s,n,!1,null,null,null);t["default"]=w.exports},"758b":function(a,t,e){"use strict";e.d(t,"a",(function(){return u}));var s=e("7338"),n=e.n(s),o=window.location.href,r=o.split("/"),i=r[0]+"//"+r[2];const u=n.a.create({baseURL:i,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},be0a:function(a,t,e){}}]);