import{o as i,f as m,k as d,a5 as p,W as w,r as b,dw as h,K as R}from"./story-_2qqwocf.js";const u=new Map;async function U(e,n){try{return{data:(await $(e,n)).data,baseUrl:p(e),styleUrl:e}}catch(t){return w(t),null}}function I(e,n,t){const r=n.portal!=null?n.portal:b.getDefault();let s;const l=`${r.url} - ${r.user?.username} - ${e}`,o=u.get(l);if(o)return o;const a=N(e,r,t).then(f=>(s=f,f.fetchData())).then(f=>({data:f,baseUrl:s.itemUrl??"",styleName:e}));return u.set(l,a),a}function N(e,n,t){return n.load(t).then(()=>{const r=new h({disableExtraQuery:!0,query:`owner:${c} AND type:${y} AND typekeywords:"${e}"`});return n.queryItems(r,t)}).then(({results:r})=>{let s=null;const l=e.toLowerCase();if(r&&Array.isArray(r)){for(const o of r)if(o.typeKeywords?.some(a=>a.toLowerCase()===l)&&o.type===y&&o.owner===c){s=o;break}}if(!s)throw new i("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(t)})}function j(e,n,t){return e?.styleUrl!=null?U(e.styleUrl,t):e?.styleName!=null?I(e.styleName,n,t):Promise.reject(new i("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function q(e){return e===null||e.type==="CIMSymbolReference"?e:{type:"CIMSymbolReference",symbol:e}}function A(e,n,t=["gltf"]){if(n==="cimRef")return encodeURI(e.cimRef);if(e.formatInfos&&!R("enable-feature:force-wosr"))for(const r of t){const s=e.formatInfos.find(l=>l.type===r);if(s)return s.href}return encodeURI(e.webRef)}function $(e,n){const t={responseType:"json",query:{f:"json"},...n};return m(d(e),t)}const c="esri_en",y="Style",D="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{D as A,$ as f,j as g,q as j,A as q};