const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./symbolLayerUtils-DAaEQEr6-DAZF8lBU.js","./main-CYSS3xlj.js","./main-Cypivj38.css","./story-BLxSf89q.js","./story-DnycVwut.css","./LRUCache-C3erQTWv-BEBl3mO5.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./main-CYSS3xlj.js";import{ar as a,a7 as m,eF as h,eG as d,eH as k,eI as g}from"./story-BLxSf89q.js";import"./parser-DyDJ-rlI-6l95dcXY.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-Di5_MXEG.js";import{I as z}from"./cimSymbolUtils-CKIzBgMU-kL1hGfch.js";import{b as S}from"./LRUCache-C3erQTWv-BEBl3mO5.js";import"./utils-SPbpQbmm-CWubb11_.js";new S(1e3),new a([128,128,128]);const _=new a("white");function K(t,n){if(!t)return null;let r=null;return m(t)?r=v(t):h(t)&&(r=t.type==="cim"?z(t):t.color?new a(t.color):null),r?f(r,n):null}function v(t){const n=t.symbolLayers;if(!n)return null;let r=null;return n.forEach(l=>{l.type==="object"&&l.resource?.href||(r=l.type==="water"?l.color:l.material?l.material.color:null)}),r?new a(r):null}function f(t,n){if(n==null||t==null)return t;const r=t.toRgba();return r[3]=r[3]*n,new a(r)}function E(t,n,r){const l=t.symbolLayers;if(!l)return;const e=o=>f(n=n??o??(r!=null?_:null),r);l.forEach(o=>{if(o.type!=="object"||!o.resource?.href||n)if(o.type==="water")o.color=e(o.color);else{const c=o.material!=null?o.material.color:null,u=e(c);o.material==null?o.material=new d({color:u}):o.material.color=u,r!=null&&"outline"in o&&o.outline?.color!=null&&(o.outline.color=f(o.outline.color,r))}})}function L(t,n,r){(n=n??t.color)&&(t.color=f(n,r)),r!=null&&"outline"in t&&t.outline?.color&&(t.outline.color=f(t.outline.color,r))}function Q(t,n,r){t&&(n||r!=null)&&(n&&(n=new a(n)),m(t)?E(t,n,r):h(t)&&L(t,n,r))}async function j(t,n){const r=t.symbolLayers;r&&await k(r,async l=>x(l,n))}async function x(t,n){switch(t.type){case"extrude":R(t,n);break;case"icon":case"line":case"text":I(t,n);break;case"path":q(t,n);break;case"object":await O(t,n)}}function I(t,n){const r=y(n);r!=null&&(t.size=r)}function y(t){for(const n of t)if(typeof n=="number")return n;return null}function R(t,n){t.size=typeof n[2]=="number"?n[2]:0}async function O(t,n){const{resourceSize:r,symbolSize:l}=await C(t),e=w(n,r,l);t.width=s(n[0],l[0],r[0],e),t.depth=s(n[1],l[1],r[1],e),t.height=s(n[2],l[2],r[2],e)}function q(t,n){const r=w(n,g,[t.width,void 0,t.height]);t.width=s(n[0],t.width,1,r),t.height=s(n[2],t.height,1,r)}function w(t,n,r){for(let l=0;l<3;l++){const e=t[l];switch(e){case"symbol-value":{const o=r[l];return o!=null?o/n[l]:1}case"proportional":break;default:if(e&&n[l])return e/n[l]}}return 1}async function C(t){const{computeObjectLayerResourceSize:n}=await b(()=>import("./symbolLayerUtils-DAaEQEr6-DAZF8lBU.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),r=await n(t,10),{width:l,height:e,depth:o}=t,c=[l,o,e];let u=1;for(let i=0;i<3;i++){const p=c[i];if(p!=null){u=p/r[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=r[i]*u);return{resourceSize:r,symbolSize:c}}function s(t,n,r,l){switch(t){case"proportional":return r*l;case"symbol-value":return n??r;default:return t}}function D(t,n){const r=y(n);if(r!=null)switch(t.type){case"simple-marker":t.size=r;break;case"picture-marker":{const l=t.width/t.height;l>1?(t.width=r,t.height=r*l):(t.width=r*l,t.height=r);break}case"simple-line":t.width=r;break;case"text":t.font.size=r}}async function V(t,n){if(t&&n)return m(t)?j(t,n):void(h(t)&&D(t,n))}function Z(t,n,r){if(t&&n!=null)if(m(t)){const l=t.symbolLayers;l&&l.forEach(e=>{if(e.type==="object")switch(r){case"tilt":e.tilt=(e.tilt??0)+n;break;case"roll":e.roll=(e.roll??0)+n;break;default:e.heading=(e.heading??0)+n}e.type==="icon"&&(e.angle+=n)})}else h(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle+=n))}async function $(t,n){return await t.fetchSymbol(n)||t.fetchCIMSymbol(n)}export{Q as C,V as I,Z as J,$ as K,K as x};
