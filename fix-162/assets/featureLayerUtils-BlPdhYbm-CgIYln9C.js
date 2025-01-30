import{jc as P,hq as w,ao as $}from"./story-DfT1JADo.js";import{C as N,D as O}from"./utils-BVWK2jiA-BHm63SPm.js";import{i as R}from"./arcgisLayerUrl-HNYh8jvG-Cqh_rWvu.js";import{d as x,p as D,g}from"./fetchService-DbaKmJhP-CTBXKX6w.js";import{S as J,l as m,u as M,L as f,E as l}from"./portalItemUtils-B8bw6SAG-ivOe1uFQ.js";import"./main-DG75X1yT.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./PortalItem-CctGdnxF-C-j6pKig.js";import"./jsonContext-BA8GHqVk-VPRbUk2A.js";import"./saveUtils-CIYk-dsQ-C7wHzY6L.js";import"./projection-BA9M1R7d-CG_FnTtX.js";import"./projectBuffer-CvCBvJ6W-CzvTfQZJ.js";const T="Feature Service",A="feature-layer-utils",Y=`${A}-save`,_=`${A}-save-as`;function h(e){return{isValid:P(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function b(e){const t=[],a=[];for(const{layer:r,layerJSON:s}of e)r.isTable?a.push(s):t.push(s);return{layers:t,tables:a}}function L(e){return b([e])}async function F(e,t){return/\/\d+\/?$/.test(e.url)?L(t[0]):G(t,e)}async function G(e,t){if(e.reverse(),!t)return b(e);const a=await K(t,e);for(const r of e)v(r.layer,r.layerJSON,a);return q(a,e),a}async function K(e,t){let a=await e.fetchData("json");if(j(a))return a;a||={},C(a);const{layer:{url:r,customParameters:s,apiKey:o}}=t[0];return await B(a,{url:r??"",customParameters:s,apiKey:o},t.map(n=>n.layer.layerId)),a}function j(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}function C(e){e.layers||=[],e.tables||=[]}function q(e,t){const a=[],r=[];for(const{layer:s}of t){const{isTable:o,layerId:n}=s;o?r.push(n):a.push(n)}d(e.layers,a),d(e.tables,r)}function d(e,t){if(e.length<2)return;const a=[];for(const{id:r}of e)a.push(r);w(a.sort(p),t.slice().sort(p))&&e.sort((r,s)=>{const o=t.indexOf(r.id),n=t.indexOf(s.id);return o<n?-1:o>n?1:0})}function p(e,t){return e<t?-1:e>t?1:0}async function B(e,t,a){const{url:r,customParameters:s,apiKey:o}=t,{serviceJSON:n,layersJSON:i}=await x(r,{customParameters:s,apiKey:o}),c=E(e.layers,n.layers,a),u=E(e.tables,n.tables,a);e.layers=c.itemResources,e.tables=u.itemResources;const y=[...c.added,...u.added],S=i?[...i.layers,...i.tables]:[];await U(e,y,r,S)}function E(e,t,a){const r=$(e,t,(o,n)=>o.id===n.id);e=e.filter(o=>!r.removed.some(n=>n.id===o.id));const s=r.added;return s.forEach(({id:o})=>{e.push({id:o})}),{itemResources:e,added:s.filter(({id:o})=>!a.includes(o))}}async function U(e,t,a,r){const s=await V(t),o=t.map(({id:n,type:i})=>new(s.get(i))({url:a,layerId:n,sourceJSON:r.find(({id:c})=>c===n)}));await Promise.allSettled(o.map(n=>n.load())),o.forEach(n=>{const{layerId:i,loaded:c,defaultPopupTemplate:u}=n;if(!c||u==null)return;const y={id:i,popupInfo:u.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(y.layerType=n.operationalLayerType),v(n,y,e)})}async function V(e){const t=[];e.forEach(({type:s})=>{const o=g(s),n=D[o];t.push(n())});const a=await Promise.all(t),r=new Map;return e.forEach(({type:s},o)=>{r.set(s,a[o])}),r}function v(e,t,a){e.isTable?I(a.tables,t):I(a.layers,t)}function I(e,t){const a=e.findIndex(({id:r})=>r===t.id);a===-1?e.push(t):e[a]=t}function Z(e,t){const a=e.layers.some(r=>r.layerType==="OrientedImageryLayer");f(t,l.ORIENTED_IMAGERY_LAYER,a)}function k(e,t){const a=e.some(r=>r.type==="oriented-imagery");f(t,l.ORIENTED_IMAGERY_LAYER,a)}async function z(e,t,a){Z(a,t)}async function H(e,t){const{url:a,layerId:r,title:s,fullExtent:o,isTable:n}=e,i=R(a);t.url=(i?.serverType==="FeatureServer"?a:`${a}/${r}`)??null,t.title||=s,t.extent=null,n||o==null||(t.extent=await J(o)),m(t,l.METADATA),m(t,l.MULTI_LAYER),M(t,l.SINGLE_LAYER),f(t,l.TABLE,n),k([e],t)}async function ue(e,t){return N({layer:e,itemType:T,validateLayer:h,createItemData:(a,r)=>F(r,[a]),errorNamePrefix:Y,setItemProperties:z},t)}async function ye(e,t,a){return O({layer:e,itemType:T,validateLayer:h,createItemData:(r,s)=>Promise.resolve(L(r)),errorNamePrefix:_,newItem:t,setItemProperties:H},a)}export{ue as save,ye as saveAs};
