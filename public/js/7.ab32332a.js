(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"6ee7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("FormCalled",{staticStyle:{"margin-top":"1%","margin-right":"1%","margin-left":"1%","margin-bottom":"1%"}})],1)},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CardForm",{attrs:{textHeader:"ABRIR NOVOS CHAMADOS"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 q-ml-md q-mb-md"},[s("div",{staticClass:"text-subtitle2"},[t._v("Assunto *")]),s("q-input",{attrs:{outlined:"",rules:[function(t){return!!t||"O campo não pode ficar em branco"}]},model:{value:t.prazo,callback:function(e){t.prazo=e},expression:"prazo"}})],1),s("div",{staticClass:"col-5 q-ml-md q-mb-md"},[s("div",{staticClass:"text-subtitle2"},[t._v("Prazo ideal *")]),s("q-input",{attrs:{outlined:"",mask:"##/##/####",rules:[function(e){return t.validDate(e)||"Data invalida"}]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{attrs:{options:t.validDate,mask:"DD/MM/YYYY"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),s("div",{staticClass:"q-ml-md q-mb-md"},[s("q-checkbox",{attrs:{label:"Urgente"},model:{value:t.urgente,callback:function(e){t.urgente=e},expression:"urgente"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.urgente,expression:"urgente"}],staticClass:"row"},[s("div",{staticClass:"col-11 q-ml-md q-mb-xl"},[s("div",{staticClass:"text-subtitle2"},[t._v("Por que é urgente ?")]),s("q-input",{attrs:{outlined:"",type:"textarea"},model:{value:t.urgenteText,callback:function(e){t.urgenteText=e},expression:"urgenteText"}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.urgente,expression:"urgente"}],staticClass:"row"},[s("div",{staticClass:"col-12 q-ml-md q-mb-xl"},[s("div",{staticClass:"col-11 row"},[s("div",{staticClass:"text-subtitle2"},[t._v("Responsavel pela Urgência * ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-11"},[s("q-select",{attrs:{outlined:"","use-input":"","input-debounce":"0",options:t.responsibleoptionsList,"use-chips":"",multiple:"","stack-label":""},on:{filter:t.filterResponsible},scopedSlots:t._u([{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[t._v("\n                                    Sem Resultado\n                                ")])],1)]},proxy:!0}]),model:{value:t.responsibleResult,callback:function(e){t.responsibleResult=e},expression:"responsibleResult"}})],1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-11 q-ml-md q-mb-xl"},[s("div",{staticClass:"text-subtitle2"},[t._v("Adicionar peça(s) ao chamado ")]),s("q-select",{attrs:{outlined:"","use-input":"","input-debounce":"0",options:t.pieceOptionsList,"use-chips":"",multiple:"","stack-label":""},on:{filter:t.filterPeaces},scopedSlots:t._u([{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[t._v("\n                                    Sem Resultado\n                                ")])],1)]},proxy:!0}]),model:{value:t.pieceResult,callback:function(e){t.pieceResult=e},expression:"pieceResult"}})],1)]),s("div",{staticClass:"row "},[s("div",{staticClass:"col-11 q-ml-md q-mb-xl"},[s("div",{staticClass:"text-subtitle2"},[t._v("Informações do chamado *")]),s("q-editor",{attrs:{outlined:"",rules:[function(t){return!!t||"O campo não pode ficar em branco"}],"min-height":"10rem"},model:{value:t.info,callback:function(e){t.info=e},expression:"info"}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-11 q-ml-md q-mb-xl"},[s("span",{staticClass:"text-subtitle2"},[t._v("Anexar arquivos")]),s("div",{staticClass:"text-weight-thin q-mb-sm q-mt-sm"},[t._v("Uso racional dos recursos com a prática de anexo de arquivos,\n                para arquivos leves e o uso de apontamento de caminho de link externo para arquivos pesados.\n                Links poderão ser aplicados no campo de texto.")]),s("q-uploader",{attrs:{url:"http://localhost:8080/upload",label:"Máximo de 50mb",multiple:"",filter:t.checkFileSize},on:{rejected:t.onRejected}})],1)]),s("div",{staticClass:"row q-ml-md q-mb-md"},[s("div",{staticClass:"col-11 row "},[s("div",{staticClass:"text-subtitle2"},[t._v("Publico *")])]),s("div",{staticClass:"col-11 row"},[t._l(t.sectors,(function(e){return s("div",{key:e.id},[s("q-checkbox",{staticClass:"q-ml-sm",attrs:{val:e.id,label:e.name},model:{value:t.urgentes,callback:function(e){t.urgentes=e},expression:"urgentes"}})],1)})),s("div",[s("q-checkbox",{staticClass:"q-ml-sm",attrs:{label:"Todos"},model:{value:t.todosCheckbox,callback:function(e){t.todosCheckbox=e},expression:"todosCheckbox"}})],1)],2)]),s("ButtonSaveBack",{attrs:{clickSave:this.save,buttonBack:!0}})],1),s("FloatButton",{attrs:{options:[{function:function(){},color:"primary",icon:"fas fa-pen",label:"Instruções de preenchimento"}]}})],1)},n=[],l=(s("4d90"),s("758b")),r=s("2a19"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-end q-mr-xl "},[s("q-btn-group",{staticClass:"q-mt-md q-mr-xl",attrs:{spread:""}},[s("q-btn",{attrs:{color:"primary",label:"Salvar"},on:{click:t.clickSave}}),t.buttonBack?s("q-btn",{attrs:{color:"standard","text-color":"black",label:"Voltar"},on:{click:t.clickBack}}):t._e()],1)],1)},u=[],p={name:"ButtonSave",props:{clickSave:{type:Function,required:!0},clickBack:{type:Function,required:!1,default:null},buttonBack:{type:Boolean,required:!0}},data(){return{}}},d=p,m=s("2877"),h=s("e7a9"),b=s("9c40"),v=s("eebe"),f=s.n(v),x=Object(m["a"])(d,c,u,!1,null,null,null),q=x.exports;f()(x,"components",{QBtnGroup:h["a"],QBtn:b["a"]});var g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"my-card"},[s("q-card-section",[s("div",{staticClass:"text-h6 text-center"},[t._v(t._s(t.textHeader)+" ")])]),s("q-separator"),s("q-card-section",[t._t("default")],2)],1)},C=[],k={name:"CardForm",props:{textHeader:{type:String,required:!0}},data(){return{}}},y=k,w=s("f09f"),_=s("a370"),S=s("eb85"),O=Object(m["a"])(y,g,C,!1,null,null,null),R=O.exports;f()(O,"components",{QCard:w["a"],QCardSection:_["a"],QSeparator:S["a"]});var D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[s("q-fab",{attrs:{"vertical-actions-align":"right",color:"primary",icon:"keyboard_arrow_up",direction:"up"},model:{value:t.fabRight,callback:function(e){t.fabRight=e},expression:"fabRight"}},t._l(t.options,(function(t){return s("span",{key:t.label},[s("q-fab-action",{attrs:{"label-position":"left",color:t.color,icon:t.icon,label:t.label},on:{click:t.function}})],1)})),0)],1)},Q=[],B={name:"FloatButton",props:{options:{type:Object,required:!0}},data(){return{fabRight:!1}}},T=B,F=s("de5e"),L=s("c294"),P=s("72db"),E=Object(m["a"])(T,D,Q,!1,null,null,null),I=E.exports;f()(E,"components",{QPageSticky:F["a"],QFab:L["a"],QFabAction:P["a"]});var j={name:"FormCalled",plugins:{Notify:r["a"]},components:{ButtonSaveBack:q,CardForm:R,FloatButton:I},data(){return{porqueUrgente:"",prazo:"",assunto:"",urgentes:[],urgente:!1,urgenteText:"",sectors:[],date:this.getToday(),info:"",responsibleResult:[],responsibleOptionsTotal:[],responsibleoptionsList:[],pieceResult:[],pieceOptionsTotal:[],pieceOptionsList:[],todosCheckbox:!1,isLoaded:!0}},methods:{checkFileSize(t){return t.filter((t=>t.size<5120))},onRejected(t){this.$q.notify({type:"negative",message:`${t.length} file(s) did not pass validation constraints`})},filterResponsible(t,e){e(""!==t?()=>{const e=t.toLowerCase();this.responsibleoptionsList=this.responsibleOptionsTotal.filter((t=>t.toLowerCase().indexOf(e)>-1))}:()=>{this.responsibleoptionsList=this.responsibleOptionsTotal})},filterPeaces(t,e){e(""!==t?()=>{const e=t.toLowerCase();this.pieceOptionsList=this.pieceOptionsTotal.filter((t=>t.toLowerCase().indexOf(e)>-1))}:()=>{this.pieceOptionsList=this.pieceOptionsTotal})},validDate(t){const e=this.getToday(),s=this.formatDate(t);return s>=e},formatDate(t){var e=t.split("/")[0],s=t.split("/")[1],a=t.split("/")[2];return a+"-"+s+"-"+e},getToday(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear();return e+"/"+s+"/"+a},save(){this.partsID=[],this.responsiblesID=[],this.Parts.forEach((t=>{this.pieceResult.forEach((e=>{t.title===e&&this.partsID.push(t)}))})),this.User.forEach((t=>{this.responsibleResult.forEach((e=>{e===t.name&&this.responsiblesID.push(t)}))})),this.verifyCamps()||l["a"].post("/called",{matter:this.prazo,deadline:this.date,urgent:this.urgente,why_urgent:this.urgenteText,infos:this.info}).then((t=>{console.log(t)}))},verifyCamps(){return""===this.prazo?(this.alertNotify("Campo assunto em branco"),!1):this.validDate(this.date)?(this.alertNotify("Campo prazo ideal em branco"),!1):""===this.info?(this.alertNotify("Campo informações do chamado ideal em branco"),!1):0!==this.urgentes.length||this.todosCheckbox?0===this.responsiblesID.length&&this.urgente?(this.alertNotify("Campo responsavel pela urgência em branco"),!1):void 0:(this.alertNotify("Campo caixas publico em branco"),!1)},loadStop(){this.$q.loading.hide(),this.isLoaded=!1},alertNotify(t){this.$q.notify({type:"negative",message:t})}},beforeMount(){this.$q.loading.show(),l["a"].post("/called/request").then((t=>{this.User=t.data[0],this.Parts=t.data[1],this.sectors=t.data[2],this.Parts.forEach((t=>{this.pieceOptionsTotal.push(t.title)})),this.User.forEach((t=>{this.responsibleOptionsTotal.push(t.name)})),this.loadStop()})).catch((t=>{console.log(t),this.loadStop()}))}},z=j,N=s("27f9"),$=s("0016"),U=s("7cbe"),A=s("52ee"),M=s("8f8e"),Y=s("ddd8"),H=s("66e5"),J=s("4074"),V=s("d66b"),G=s("ee89"),K=s("7f67"),W=Object(m["a"])(z,i,n,!1,null,null,null),X=W.exports;f()(W,"components",{QInput:N["a"],QIcon:$["a"],QPopupProxy:U["a"],QDate:A["a"],QBtn:b["a"],QCheckbox:M["a"],QSelect:Y["a"],QItem:H["a"],QItemSection:J["a"],QEditor:V["a"],QUploader:G["a"]}),f()(W,"directives",{ClosePopup:K["a"]});var Z={name:"edit_user",props:["id"],data(){return{user:{},logs:[],promisse:{}}},components:{FormCalled:X}},tt=Z,et=Object(m["a"])(tt,a,o,!1,null,null,null);e["default"]=et.exports}}]);