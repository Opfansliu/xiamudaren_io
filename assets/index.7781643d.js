import{R as y,S as v,U as _,c as p,u as f,Q as E}from"../js/@vue/@vue.0cb10f70.js";import{R,a as g,u as L,c as k,b as A}from"../js/vue-router/vue-router.0d10b27a.js";import"../js/axios/axios.2bb44a28.js";import{A as O}from"../js/ant-design-vue/ant-design-vue.f152f546.js";import"../js/form-data/form-data.b6b8e2ae.js";import"../js/@babel/@babel.e073c486.js";import"../js/resize-observer-polyfill/resize-observer-polyfill.037b8af2.js";import"../js/vue-types/vue-types.4bd1e607.js";import"../js/@ant-design/@ant-design.04710321.js";import"../js/@ctrl/@ctrl.af499ea7.js";import"../js/dom-align/dom-align.8c71e47e.js";import"../js/lodash-es/lodash-es.53a49103.js";import"../js/dayjs/dayjs.41a7e24a.js";import"../js/async-validator/async-validator.21881447.js";import"../js/scroll-into-view-if-needed/scroll-into-view-if-needed.612ab455.js";import"../js/compute-scroll-into-view/compute-scroll-into-view.00738574.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const P=_("p",null,"\u8FD9\u662F\u4EC0\u4E48\u60C5\u51B5\uFF0C\u600E\u4E48\u663E\u793A\u4E0D\u4E86\u4E86\u5462",-1),V={__name:"App",setup(a){return L(),(r,i)=>(y(),v("div",null,[P,_("nav",null,[p(f(R),{to:"/home"})]),p(f(g))]))}},b="modulepreload",B=function(a,r){return new URL(a,r).href},d={},u=function(r,i,s){if(!i||i.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=B(e,s),e in d)return;d[e]=!0;const o=e.endsWith(".css"),h=o?'[rel="stylesheet"]':"";if(!!s)for(let l=t.length-1;l>=0;l--){const c=t[l];if(c.href===e&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":b,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,c)=>{n.addEventListener("load",l),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},N=k({history:A("./"),routes:[{path:"/",name:"home",component:()=>u(()=>import("../js/views/Home.2998d707.js"),["../js/views/Home.2998d707.js","../js/axios/axios.2bb44a28.js","../js/form-data/form-data.b6b8e2ae.js","../js/vue-router/vue-router.0d10b27a.js","../js/@vue/@vue.0cb10f70.js","../js/_plugin-vue_export-helper/_plugin-vue_export-helper.0ba25e0a.js","../js/ant-design-vue/ant-design-vue.f152f546.js","../js/@babel/@babel.e073c486.js","../js/resize-observer-polyfill/resize-observer-polyfill.037b8af2.js","../js/vue-types/vue-types.4bd1e607.js","../js/@ant-design/@ant-design.04710321.js","../js/@ctrl/@ctrl.af499ea7.js","../js/dom-align/dom-align.8c71e47e.js","../js/lodash-es/lodash-es.53a49103.js","../js/dayjs/dayjs.41a7e24a.js","../js/async-validator/async-validator.21881447.js","../js/scroll-into-view-if-needed/scroll-into-view-if-needed.612ab455.js","../js/compute-scroll-into-view/compute-scroll-into-view.00738574.js","./ant-design-vue.2cf3f60f.css"],import.meta.url)},{path:"/life",name:"life",component:()=>u(()=>import("../js/views/Life.f2748244.js"),["../js/views/Life.f2748244.js","../js/_plugin-vue_export-helper/_plugin-vue_export-helper.0ba25e0a.js","../js/@vue/@vue.0cb10f70.js","./Life.82f11d77.css"],import.meta.url)},{path:"/read",name:"read",component:()=>u(()=>import("../js/views/Read.27306914.js"),["../js/views/Read.27306914.js","../js/_plugin-vue_export-helper/_plugin-vue_export-helper.0ba25e0a.js","../js/@vue/@vue.0cb10f70.js","./Read.b4c2ba49.css"],import.meta.url)},{path:"/skills",name:"skills",component:()=>u(()=>import("../js/views/Skills.2af2ef1e.js"),["../js/views/Skills.2af2ef1e.js","../js/_plugin-vue_export-helper/_plugin-vue_export-helper.0ba25e0a.js","../js/@vue/@vue.0cb10f70.js"],import.meta.url)}]});const m=E(V);m.use(N);m.use(O);m.mount("#app");
