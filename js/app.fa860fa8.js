(function(e){function t(t){for(var s,r,l=t[0],u=t[1],i=t[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4b4e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),a=(n("15f5"),n("7051"),{class:"p-5 mt-6"});function o(e,t,n,o,r,l){var u=Object(s["y"])("Navigation"),i=Object(s["y"])("router-view"),c=Object(s["y"])("Footer");return Object(s["r"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(u),Object(s["e"])("div",a,[Object(s["h"])(i)]),Object(s["h"])(c)],64)}var r={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},l={class:"navbar-brand"},u=Object(s["e"])("span",{"aria-hidden":"true"},null,-1),i=Object(s["e"])("span",{"aria-hidden":"true"},null,-1),c=Object(s["e"])("span",{"aria-hidden":"true"},null,-1),d=[u,i,c],f={class:"navbar-start"},m=Object(s["g"])("Home");function h(e,t,n,a,o,u){var i=Object(s["y"])("router-link");return Object(s["r"])(),Object(s["d"])("nav",r,[Object(s["e"])("div",l,[Object(s["e"])("a",{onClick:t[0]||(t[0]=function(){return u.onBurgerClick&&u.onBurgerClick.apply(u,arguments)}),class:Object(s["n"])([{"is-active":o.isBurgerActive},"navbar-burger"]),role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},d,2)]),Object(s["e"])("div",{class:Object(s["n"])(["navbar-menu",{"is-active":o.isBurgerActive}])},[Object(s["e"])("div",f,[Object(s["h"])(i,{class:"navbar-item",to:"/",onClick:u.onBurgerClick},{default:Object(s["E"])((function(){return[m]})),_:1},8,["onClick"])])],2)])}var b={name:"Navigation",data:function(){return{isBurgerActive:!1}},methods:{onBurgerClick:function(){this.isBurgerActive=!this.isBurgerActive}}},_=n("6b0d"),I=n.n(_);const g=I()(b,[["render",h]]);var M=g,j={class:"section rab-footer"},p=Object(s["f"])('<div class="pt-5 divider" data-v-2551b617></div><div class="container" data-v-2551b617><div class="is-flex-tablet is-justify-content-between is-align-items-center" data-v-2551b617><p data-v-2551b617>© 2022 Jeremy Stucki, Gregor Stuber</p><div class="py-2 is-hidden-tablet" data-v-2551b617></div><div class="ml-auto" data-v-2551b617><a class="mr-4 is-inline-block" href="https://github.com/unkelhoebbi/semester-scheduler" data-v-2551b617><i class="fab fa-github fa-2x social" data-v-2551b617></i></a></div></div></div>',2),O=[p];function A(e,t,n,a,o,r){return Object(s["r"])(),Object(s["d"])("footer",j,O)}var v={name:"Footer"};n("e9a9");const k=I()(v,[["render",A],["__scopeId","data-v-2551b617"]]);var P=k,S={components:{Footer:P,Navigation:M}};const y=I()(S,[["render",o]]);var E=y,C=n("6c02"),K=(n("b0c0"),function(e){return Object(s["u"])("data-v-1bd31f97"),e=e(),Object(s["s"])(),e}),R=K((function(){return Object(s["e"])("h1",null,"Plan your semester schedule",-1)})),D={class:"columns"},T=Object(s["g"])("Übersicht Kategorien/Credits"),w=K((function(){return Object(s["e"])("thead",null,[Object(s["e"])("tr",null,[Object(s["e"])("th",{class:"p-2"},"Name"),Object(s["e"])("th",{class:"p-2"},"Mögliche Credits"),Object(s["e"])("th",{class:"p-2"},"Geplante Credits")])],-1)})),B={class:"p-2"},x={class:"p-2"},N={class:"p-2"},F=K((function(){return Object(s["e"])("td",{class:"p-2"},"Total geplante",-1)})),W=K((function(){return Object(s["e"])("td",null,null,-1)})),G={class:"p-2"};function H(e,t,n,a,o,r){var l=Object(s["y"])("Semester"),u=Object(s["y"])("H2");return Object(s["r"])(),Object(s["d"])(s["a"],null,[R,Object(s["e"])("div",D,[(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])(o.semesters,(function(e){return Object(s["r"])(),Object(s["d"])("div",{class:"column semester",key:e.name},[Object(s["h"])(l,{number:e.number,modules:e.modules,"onUpdate:modules":function(t){return e.modules=t},"all-modules":o.allModules},null,8,["number","modules","onUpdate:modules","all-modules"])])})),128))]),Object(s["e"])("article",null,[Object(s["h"])(u,null,{default:Object(s["E"])((function(){return[T]})),_:1}),Object(s["e"])("table",null,[w,Object(s["e"])("tbody",null,[(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])(o.allCategories,(function(e){return Object(s["r"])(),Object(s["d"])("tr",{key:e.name},[Object(s["e"])("td",B,Object(s["A"])(e.name),1),Object(s["e"])("td",x,Object(s["A"])(e.possibleCredits),1),Object(s["e"])("td",N,Object(s["A"])(e.earnedCredits),1)])})),128)),Object(s["e"])("tr",null,[F,W,Object(s["e"])("td",G,Object(s["A"])(o.totalPlanned),1)])])])])],64)}n("d3b7"),n("159b"),n("caad"),n("2532");var J=function(e){return Object(s["u"])("data-v-137be710"),e=e(),Object(s["s"])(),e},Q={class:"columns is-flex is-flex-direction-column has-text-centered"},U=["onClick"],z=J((function(){return Object(s["e"])("i",{class:"remove-module fab fa fa-times"},null,-1)})),V=[z],q=J((function(){return Object(s["e"])("label",{for:"additionalModule"},"Select additional module",-1)})),L={id:"allModules"},X=["value"],Y={class:"column"};function Z(e,t,n,a,o,r){return Object(s["r"])(),Object(s["d"])("div",Q,[Object(s["e"])("h2",null,"Semester "+Object(s["A"])(n.number),1),(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])(n.modules,(function(e){return Object(s["r"])(),Object(s["d"])("div",{class:"column module mt-1",key:e.name},[Object(s["e"])("button",{class:"is-pulled-right",onClick:function(t){return r.removeModule(e.name)}},V,8,U),Object(s["e"])("h3",null,Object(s["A"])(e.name),1),Object(s["e"])("p",null,Object(s["A"])(e.ects)+" ECTS",1)])})),128)),Object(s["e"])("div",{class:Object(s["n"])(["column",{"is-hidden":o.isAddingNewModule}])},[Object(s["e"])("button",{class:"p-2",onClick:t[0]||(t[0]=function(e){return o.isAddingNewModule=!0})},"Add")],2),Object(s["e"])("div",{class:Object(s["n"])(["column",{"is-hidden":!o.isAddingNewModule}])},[q,Object(s["F"])(Object(s["e"])("input",{id:"additionalModule",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.additionalModule=e}),list:"allModules",onChange:t[2]||(t[2]=function(){return r.addModule&&r.addModule.apply(r,arguments)})},null,544),[[s["C"],o.additionalModule]]),Object(s["e"])("datalist",L,[(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])(n.allModules,(function(e){return Object(s["r"])(),Object(s["d"])("option",{key:e.name,value:e.name},Object(s["A"])(e.name),9,X)})),128))])],2),Object(s["e"])("div",Y,[Object(s["e"])("p",null,"Total ECTS: "+Object(s["A"])(o.ectsTotal),1)])])}n("a9e3"),n("7db0"),n("4de4"),n("a434");var $={name:"Semester",props:{number:{type:Number},modules:{type:Array},allModules:{type:Array}},data:function(){return{ectsTotal:0,additionalModule:null,isAddingNewModule:!1}},methods:{updateEctsTotal:function(){this.ectsTotal=this.modules.reduce((function(e,t){return e+(t.ects||0)}),0)},addModule:function(){var e=this,t=this.allModules.find((function(t){return t.name===e.additionalModule}));this.modules.push(t),this.additionalModule=null,this.isAddingNewModule=!1,this.updateEctsTotal()},removeModule:function(e){var t=this.modules.filter((function(t){return t.name===e})),n=this.modules.indexOf(t[0]);this.modules.splice(n,1),this.updateEctsTotal()}},mounted:function(){this.updateEctsTotal()}};n("96b3");const ee=I()($,[["render",Z],["__scopeId","data-v-137be710"]]);var te=ee,ne="https://raw.githubusercontent.com/jeremystucki/ost-planer/main/data",se="/modules.json",ae="/categories.json",oe={name:"Home",data:function(){return{semesters:[{number:1,modules:[{name:"Analysis 1 für Informatiker (M_An1I / MN)",url:"https://studien.rj.ost.ch/allModules/28151_M_An1I.html",categories:["Mathematik und Physik (Kat_MaPh)"],ects:4,focuses:[]},{name:"Diskrete Mathematik für Informatik  (M_DMI / MN)",url:"https://studien.rj.ost.ch/allModules/24442_M_DMI.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Objektorientierte Programmierung 1 (M_OOP1 / I)",url:"https://studien.rj.ost.ch/allModules/38872_M_OOP1.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Automatisierung mit Python (M_AutPy / I)",url:"https://studien.rj.ost.ch/allModules/38879_M_AutPy.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:2,focuses:[]},{name:"Datenbanksysteme 1 (M_Dbs1 / I)",url:"https://studien.rj.ost.ch/allModules/39093_M_Dbs1.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Betriebssysteme 1 (M_Bsys1 / I)",url:"https://studien.rj.ost.ch/allModules/39080_M_Bsys1.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]}]},{number:2,modules:[{name:"Analysis 2 für Informatik (M_An2I / MN)",url:"https://studien.rj.ost.ch/allModules/28156_M_An2I.html",categories:["Mathematik und Physik (Kat_MaPh)"],ects:4,focuses:[]},{name:"Automaten und Sprachen (M_AutoSpr / MN)",url:"https://studien.rj.ost.ch/allModules/24404_M_AutoSpr.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Betriebssysteme 2 (M_Bsys2 / I)",url:"https://studien.rj.ost.ch/allModules/37903_M_Bsys2.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:"Objektorientierte Programmierung 2 (M_OOP2 / I)",url:"https://studien.rj.ost.ch/allModules/38910_M_OOP2.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Experimentieren und Evaluieren für Informatik (M_ExEv / I)",url:"https://studien.rj.ost.ch/allModules/24381_M_ExEv.html",categories:["Mathematik und Physik (Kat_MaPh)"],ects:4,focuses:[]}]},{number:3,modules:[{name:"Web Engineering 1 (M_WE1 / I)",url:"https://studien.rj.ost.ch/allModules/38891_M_WE1.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Algorithmen und Datenstrukturen (M_AlgDat / I)",url:"https://studien.rj.ost.ch/allModules/38881_M_AlgDat.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"AI Foundations (M_AIFo / I)",url:"https://studien.rj.ost.ch/allModules/38784_M_AIFo.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Digitale Codierungen (M_DigCod / I)",url:"https://studien.rj.ost.ch/allModules/38920_M_DigCod.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Computernetze 1 (M_CN1 / I)",url:"https://studien.rj.ost.ch/allModules/39084_M_CN1.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:6,focuses:[]}]},{number:4,modules:[{name:"Parallele Programmierung (M_ParProg / I)",url:"https://studien.rj.ost.ch/allModules/31603_M_ParProg.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:"Secure Software (M_SecSoW / I)",url:"https://studien.rj.ost.ch/allModules/40311_M_SecSoW.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)","Cybersecurity STD_21 (Profil)"]},{name:"AI Applications (M_AIAp / I)",url:"https://studien.rj.ost.ch/allModules/38785_M_AIAp.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Frontend Engineering STD_21 (Profil)","Data Engineering and Machine Intelligence STD_21 (Profil)"]},{name:"Data Engineering (M_DatEng / I)",url:"https://studien.rj.ost.ch/allModules/36038_M_DatEng.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Data Engineering and Machine Intelligence STD_21 (Profil)"]},{name:"Cyber Security Foundations (M_CySec / I)",url:"https://studien.rj.ost.ch/allModules/36478_M_CySec.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]},{name:"Functional Programming  (M_FP / I)",url:"https://studien.rj.ost.ch/allModules/39143_M_FP.html",categories:["Informatik (I_Inf)","Rahmenausbildung (Kat_RA)"],ects:4,focuses:[]}]},{number:5,modules:[{name:"Compilerbau (M_CoBau / I)",url:"https://studien.rj.ost.ch/allModules/40663_M_CoBau.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:[]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:"C++ (M_CPl / I)",url:"https://studien.rj.ost.ch/allModules/24357_M_CPl.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:"SE Practices 1 (M_SEP1 / I)",url:"https://studien.rj.ost.ch/allModules/39203_M_SEP1.html",categories:["Engineering Practice (I_EP)","Informatik (I_Inf)"],ects:4,focuses:[]},{name:"Rhetorische Kommunikation für IngenieurInnen (M_RheKI / KG)",url:"https://studien.rj.ost.ch/allModules/31909_M_RheKI.html",categories:["Kommunikation und Englisch (I_KomEng)"],ects:4,focuses:[]},{name:"English: The World of Science (M_EnglScience / KG)",url:"https://studien.rj.ost.ch/allModules/36091_M_EnglScience.html",categories:["Kommunikation und Englisch (I_KomEng)"],ects:4,focuses:[]}]},{number:6,modules:[{name:"C++ Advanced (M_CPlA / I)",url:"https://studien.rj.ost.ch/allModules/28684_M_CPlA.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:[]},{name:"Distributed Systems (M_DSy / I)",url:"https://studien.rj.ost.ch/allModules/39054_M_DSy.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:"SE Practices 2 (M_SEP2 / I)",url:"https://studien.rj.ost.ch/allModules/39000_M_SEP2.html",categories:["Engineering Practice (I_EP)","Informatik (I_Inf)"],ects:4,focuses:[]},{name:"SE Project (M_SEProj / I)",url:"https://studien.rj.ost.ch/allModules/39012_M_SEProj.html",categories:["Engineering Practice (I_EP)","Informatik (I_Inf)"],ects:4,focuses:[]},{name:"Gesellschaft, Wirtschaft und Recht (M_KatGWR / KG)",url:"https://studien.rj.ost.ch/allModules/38418_M_KatGWR.html",categories:["Gesellschaft, Wirtschaft und Recht (I-gwr)"],ects:4,focuses:[]},{name:"Physik Anwendungen für Informatik (M_PhAI / MN)",url:"https://studien.rj.ost.ch/allModules/36992_M_PhAI.html",categories:["Mathematik und Physik (Kat_MaPh)"],ects:4,focuses:[]}]},{number:7,modules:[{name:"Patterns und Frameworks (M_PF / I)",url:"https://studien.rj.ost.ch/allModules/39045_M_PF.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:"Application Architecture (M_AppArch / I)",url:"https://studien.rj.ost.ch/allModules/28236_M_AppArch.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)","Frontend Engineering STD_21 (Profil)"]},{name:"Studienarbeit Informatik (M_SAI21 / I)",url:"https://studien.rj.ost.ch/allModules/39016_M_SAI21.html",categories:["Informatik (I_Inf)","Studien- Bachelorarbeit (I_SaBa)"],ects:8,focuses:[]},{name:"Projekt- und Qualitätsmanagement (M_PmQm / I)",url:"https://studien.rj.ost.ch/allModules/28231_M_PmQm.html",categories:["Gesellschaft, Wirtschaft und Recht (I-gwr)"],ects:4,focuses:[]},{name:"Kommunikation 2 für IngenieurInnen  (Teamkommunikation) (M_KommIng2 / KG)",url:"https://studien.rj.ost.ch/allModules/37397_M_KommIng2.html",categories:["Kommunikation und Englisch (I_KomEng)"],ects:4,focuses:[]}]},{number:8,modules:[{name:"Cloud Solutions (M_CldSol / I)",url:"https://studien.rj.ost.ch/allModules/37167_M_CldSol.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Frontend Engineering STD_21 (Profil)","Data Engineering and Machine Intelligence STD_21 (Profil)"]},{name:"Bachelor-Arbeit Informatik (M_BAI14 / I)",url:"https://studien.rj.ost.ch/allModules/24809_M_BAI14.html",categories:["Informatik (I_Inf)","Studien- Bachelorarbeit (I_SaBa)"],ects:12,focuses:[]},{name:"Wirtschaftsinformatik 2: Geschäftsprozessmanagement (M_WI2 / I)",url:"https://studien.rj.ost.ch/allModules/24453_M_WI2.html",categories:["Gesellschaft, Wirtschaft und Recht (I-gwr)"],ects:4,focuses:[]}]}],allModules:null,allCategories:null,totalPlanned:0}},components:{Semester:te},methods:{getAllModules:function(){var e=this;fetch("".concat(ne).concat(se)).then((function(t){t.ok&&t.json().then((function(t){e.allModules=t}))}))},getCategories:function(){var e=this;fetch("".concat(ne).concat(ae)).then((function(t){t.ok&&t.json().then((function(t){t.forEach((function(t){t.possibleCredits=0,t.earnedCredits=0,e.allModules.forEach((function(e){e.categories.includes(t.name)&&(t.possibleCredits+=e.ects)})),e.semesters.forEach((function(e){e.modules.forEach((function(e){e.categories.includes(t.name)&&(t.earnedCredits+=e.ects)}))}))})),e.allCategories=t}))}))},updateTotalPlanned:function(){var e=this;this.semesters.forEach((function(t){t.modules.forEach((function(t){e.totalPlanned+=t.ects}))}))}},mounted:function(){this.getAllModules(),this.getCategories(),this.updateTotalPlanned()}};n("c992");const re=I()(oe,[["render",H],["__scopeId","data-v-1bd31f97"]]);var le=re,ue=[{path:"/",name:"Home",component:le}],ie=Object(C["a"])({history:Object(C["b"])(),routes:ue}),ce=ie;n("b383"),Object(s["c"])(E).use(ce).mount("#app")},"96b3":function(e,t,n){"use strict";n("a81f")},a81f:function(e,t,n){},ab4e:function(e,t,n){},b383:function(e,t,n){},c992:function(e,t,n){"use strict";n("ab4e")},e9a9:function(e,t,n){"use strict";n("4b4e")}});
//# sourceMappingURL=app.fa860fa8.js.map