(function(e){function t(t){for(var o,u,l=t[0],i=t[1],a=t[2],f=0,d=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&d.push(s[u][0]),s[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==s[i]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},s={app:0},r=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var c=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1770:function(e,t,n){"use strict";n("7c58")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),s=(n("15f5"),n("7051"),{class:"p-5 mt-6"});function r(e,t,n,r,u,l){var i=Object(o["y"])("Navigation"),a=Object(o["y"])("router-view"),c=Object(o["y"])("Footer");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(i),Object(o["e"])("div",s,[Object(o["h"])(a)]),Object(o["h"])(c)],64)}var u={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},l={class:"navbar-brand"},i=Object(o["e"])("span",{"aria-hidden":"true"},null,-1),a=Object(o["e"])("span",{"aria-hidden":"true"},null,-1),c=Object(o["e"])("span",{"aria-hidden":"true"},null,-1),f=[i,a,c],d={class:"navbar-start"},m=Object(o["g"])("Home");function _(e,t,n,s,r,i){var a=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["d"])("nav",u,[Object(o["e"])("div",l,[Object(o["e"])("a",{onClick:t[0]||(t[0]=function(){return i.onBurgerClick&&i.onBurgerClick.apply(i,arguments)}),class:Object(o["n"])([{"is-active":r.isBurgerActive},"navbar-burger"]),role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},f,2)]),Object(o["e"])("div",{class:Object(o["n"])(["navbar-menu",{"is-active":r.isBurgerActive}])},[Object(o["e"])("div",d,[Object(o["h"])(a,{class:"navbar-item",to:"/",onClick:i.onBurgerClick},{default:Object(o["E"])((function(){return[m]})),_:1},8,["onClick"])])],2)])}var h={name:"Navigation",data:function(){return{isBurgerActive:!1}},methods:{onBurgerClick:function(){this.isBurgerActive=!this.isBurgerActive}}},b=n("6b0d"),M=n.n(b);const g=M()(h,[["render",_]]);var I=g,T={class:"section rab-footer"},j=Object(o["f"])('<div class="pt-5 divider" data-v-4c7f45c8></div><div class="container" data-v-4c7f45c8><div class="is-flex-tablet is-justify-content-between is-align-items-center" data-v-4c7f45c8><p data-v-4c7f45c8>© 2022 Jeremy Stucki, Gregor Stuber</p><div class="py-2 is-hidden-tablet" data-v-4c7f45c8></div><div class="ml-auto" data-v-4c7f45c8><a class="mr-4 is-inline-block" href="https://github.com/unkelhoebbi" data-v-4c7f45c8><i class="fab fa-github fa-2x social" data-v-4c7f45c8></i></a></div></div></div>',2),p=[j];function v(e,t,n,s,r,u){return Object(o["r"])(),Object(o["d"])("footer",T,p)}var O={name:"Footer"};n("e530");const A=M()(O,[["render",v],["__scopeId","data-v-4c7f45c8"]]);var S=A,k={components:{Footer:S,Navigation:I}};const w=M()(k,[["render",r]]);var y=w,N=n("6c02"),E=(n("b0c0"),function(e){return Object(o["u"])("data-v-5837491d"),e=e(),Object(o["s"])(),e}),P=E((function(){return Object(o["e"])("h1",null,"Plan your semester schedule",-1)})),D={class:"columns"};function x(e,t,n,s,r,u){var l=Object(o["y"])("Semester");return Object(o["r"])(),Object(o["d"])(o["a"],null,[P,Object(o["e"])("div",D,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(r.semesters,(function(e){return Object(o["r"])(),Object(o["d"])("div",{class:"column semester",key:e.name},[Object(o["h"])(l,{number:e.number,modules:e.modules,"onUpdate:modules":function(t){return e.modules=t},"all-modules":r.allModules},null,8,["number","modules","onUpdate:modules","all-modules"])])})),128))])],64)}n("d3b7");var C=function(e){return Object(o["u"])("data-v-137be710"),e=e(),Object(o["s"])(),e},B={class:"columns is-flex is-flex-direction-column has-text-centered"},F=["onClick"],H=C((function(){return Object(o["e"])("i",{class:"remove-module fab fa fa-times"},null,-1)})),J=[H],U=C((function(){return Object(o["e"])("label",{for:"additionalModule"},"Select additional module",-1)})),G={id:"allModules"},V=["value"],q={class:"column"};function z(e,t,n,s,r,u){return Object(o["r"])(),Object(o["d"])("div",B,[Object(o["e"])("h2",null,"Semester "+Object(o["A"])(n.number),1),(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(n.modules,(function(e){return Object(o["r"])(),Object(o["d"])("div",{class:"column module mt-1",key:e.name},[Object(o["e"])("button",{class:"is-pulled-right",onClick:function(t){return u.removeModule(e.name)}},J,8,F),Object(o["e"])("h3",null,Object(o["A"])(e.name),1),Object(o["e"])("p",null,Object(o["A"])(e.ects)+" ECTS",1)])})),128)),Object(o["e"])("div",{class:Object(o["n"])(["column",{"is-hidden":r.isAddingNewModule}])},[Object(o["e"])("button",{class:"p-2",onClick:t[0]||(t[0]=function(e){return r.isAddingNewModule=!0})},"Add")],2),Object(o["e"])("div",{class:Object(o["n"])(["column",{"is-hidden":!r.isAddingNewModule}])},[U,Object(o["F"])(Object(o["e"])("input",{id:"additionalModule",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.additionalModule=e}),list:"allModules",onChange:t[2]||(t[2]=function(){return u.addModule&&u.addModule.apply(u,arguments)})},null,544),[[o["C"],r.additionalModule]]),Object(o["e"])("datalist",G,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(n.allModules,(function(e){return Object(o["r"])(),Object(o["d"])("option",{key:e.name,value:e.name},Object(o["A"])(e.name),9,V)})),128))])],2),Object(o["e"])("div",q,[Object(o["e"])("p",null,"Total ECTS: "+Object(o["A"])(r.ectsTotal),1)])])}n("a9e3"),n("7db0"),n("4de4"),n("a434");var K={name:"Semester",props:{number:{type:Number},modules:{type:Array},allModules:{type:Array}},data:function(){return{ectsTotal:0,additionalModule:null,isAddingNewModule:!1}},methods:{updateEctsTotal:function(){this.ectsTotal=this.modules.reduce((function(e,t){return e+(t.ects||0)}),0)},addModule:function(){var e=this,t=this.allModules.find((function(t){return t.name===e.additionalModule}));this.modules.push(t),this.additionalModule=null,this.isAddingNewModule=!1,this.updateEctsTotal()},removeModule:function(e){var t=this.modules.filter((function(t){return t.name===e})),n=this.modules.indexOf(t[0]);this.modules.splice(n,1),this.updateEctsTotal()}},mounted:function(){this.updateEctsTotal()}};n("96b3");const L=M()(K,[["render",z],["__scopeId","data-v-137be710"]]);var Q=L,R="https://raw.githubusercontent.com/jeremystucki/ost-planer/main/data/modules.json",W={name:"Home",data:function(){return{semesters:[{number:1,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]},{number:2,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]},{number:3,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]},{number:4,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]},{number:5,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]},{number:6,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]},{number:7,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]},{number:8,modules:[{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]},{name:".Net Technologien (M_MsTe / I)",url:"https://studien.rj.ost.ch/allModules/37247_M_MsTe.html",categories:["Aufbau (I_Auf)","Informatik (I_Inf)"],ects:4,focuses:["Software Engineering STD_21 (Profil)"]}]}],allModules:null}},components:{Semester:Q},methods:{getAllModules:function(){var e=this;fetch(R).then((function(t){t.ok&&t.json().then((function(t){e.allModules=t}))}))}},mounted:function(){this.getAllModules()}};n("1770");const X=M()(W,[["render",x],["__scopeId","data-v-5837491d"]]);var Y=X,Z=[{path:"/",name:"Home",component:Y}],$=Object(N["a"])({history:Object(N["b"])(),routes:Z}),ee=$;n("b383"),Object(o["c"])(y).use(ee).mount("#app")},"7c58":function(e,t,n){},9552:function(e,t,n){},"96b3":function(e,t,n){"use strict";n("a81f")},a81f:function(e,t,n){},b383:function(e,t,n){},e530:function(e,t,n){"use strict";n("9552")}});
//# sourceMappingURL=app.188aa4e6.js.map