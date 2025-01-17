import{o as p,r as S}from"./story-BJQwqSiV.js";import{i as T}from"./arcgisLayerUrl-HNYh8jvG-CPalqiCd.js";import{o as L,p as v,d as F}from"./fetchService-DbaKmJhP-DKmIUo-V.js";import{l as y,a as $,o as M,u as m,t as f,c as P,n as x,i as D,e as w}from"./portalLayers-Bh9bAhk4-QECb_C0H.js";import{populateGroupLayer as G}from"./layersCreator-CW56kDKc-_2tPKpEI.js";import{a as h}from"./jsonContext-BA8GHqVk-CRz0eL7h.js";import{o as k}from"./portalItemUtils-B8bw6SAG-dsWODygj.js";import{g as E}from"./styleUtils-ChrJTYIw-eUv5d1Gt.js";import"./main-BWo3aSQp.js";import"./associatedFeatureServiceUtils-Bu76-Sxs-CZRvyJx7.js";import"./PortalItem-CctGdnxF-DvUg7fiW.js";import"./projection-BA9M1R7d-DLC6A_As.js";import"./projectBuffer-CvCBvJ6W-3LRoemO2.js";async function oe(t,a){const r=t.instance.portalItem;if(r?.id)return await r.load(a),O(t),t.validateItem&&t.validateItem(r),R(t,a)}function O(t){const a=t.instance.portalItem;if(!a?.type||!t.supportedTypes.includes(a.type))throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:t.supportedTypes.join(", ")})}async function R(t,a){const r=t.instance,e=r.portalItem;if(!e)return;const{url:o,title:s}=e,n=h(e,"portal-item");if(r.type==="group")return j(r,n,t);o&&r.type!=="media"&&r.read({url:o},n);const l=new w,i=await I(t,l,a);return i&&r.read(i,n),r.resourceReferences={portalItem:e,paths:n.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:s},n),E(r,n)}async function j(t,a,r){const e=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:o,type:s}=e;if(s==="Group Layer"){if(!k(e,"Map"))throw new p("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return A(t)}return t.read({title:o},a),C(t,r)}async function A(t){const a=t.portalItem,r=await a.fetchData("json");if(!r)return;const e=h(a,"web-map");t.read(r,e),await G(t,r,{context:e}),t.resourceReferences={portalItem:a,paths:e.readResourcePaths??[]}}async function C(t,a){let r;const{portalItem:e}=t;if(!e)return;const o=e.type,s=a.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":r=s.FeatureLayer;break;case"Stream Service":r=s.StreamLayer;break;case"Scene Service":r=s.SceneLayer;break;default:throw new p("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}const n=new w;let[l,i]=await Promise.all([r(),I(a,n)]),c=()=>l;if(o==="Feature Service"){const g=y(i)?.customParameters;i=e.url?await $(i,e.url,n):{},c=await K(i,s)||c;const b=await H(e.url,{customParameters:g,loadContext:n});return await u(t,c,i,b)}return o==="Scene Service"&&e.url&&(i=await M(e,i,n)),m(i)>0?await u(t,c,i):await J(t,c)}async function J(t,a){const{portalItem:r}=t;if(!r?.url)return;const e=await L(r.url);e&&u(t,a,{layers:e.layers?.map(f),tables:e.tables?.map(f)})}async function u(t,a,r,e){let o=r.layers||[];const s=r.tables||[];if(t.portalItem?.type==="Feature Collection"?(o.forEach((n,l)=>{n.id=l,n?.layerDefinition?.type==="Table"&&s.push(n)}),o=o.filter(n=>n?.layerDefinition?.type!=="Table")):(o.reverse(),s.reverse()),o.forEach(n=>{const l=e?.(n);if(l||!e){const i=d(t,a(n),r,n,l);t.add(i)}}),s.length){const n=await v.FeatureLayer();s.forEach(l=>{const i=e?.(l);if(i||!e){const c=d(t,n,r,l,i);t.tables.add(c)}})}}function d(t,a,r,e,o){const s=t.portalItem,n={portalItem:s.clone(),layerId:e.id};e.url!=null&&(n.url=e.url);const l=new a(n);if("sourceJSON"in l&&(l.sourceJSON=o),l.type!=="subtype-group"&&l.type!=="catalog"&&(l.sublayerTitleMode="service-name"),s.type==="Feature Collection"){const i={origin:"portal-item",portal:s.portal||S.getDefault()};l.read(e,i);const c=r.showLegend;c!=null&&l.read({showLegend:c},i)}return l}async function I(t,a,r){if(t.supportsData===!1)return;const e=t.instance,o=e.portalItem;if(!o)return;let s=null;try{s=await o.fetchData("json",r)}catch{}if(z(e)){let n=null;const l=await N(o,s,a);if((s?.layers||s?.tables)&&l>0){if(e.layerId==null){const i=P(e.type),c=i?x(s,i)[0]:y(s);c&&(e.layerId=c.id)}n=q(s,e),n?.layerType==="OrientedImageryLayer"&&e.type==="oriented-imagery"&&e.supportedSourceTypes.add("Feature Layer"),n&&s.showLegend!=null&&(n.showLegend=s.showLegend)}return l>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),n}return s}async function N(t,a,r){if(a?.layers&&a?.tables)return m(a);const e=T(t.url);if(!e)return 1;const o=await r.fetchServiceMetadata(e.url.path,{customParameters:y(a)?.customParameters}).catch(()=>null);return(a?.layers?.length??o?.layers?.length??0)+(a?.tables?.length??o?.tables?.length??0)}function q(t,a){const{layerId:r}=a,e=t.layers?.find(o=>o.id===r)||t.tables?.find(o=>o.id===r);return e&&B(e,a)?e:null}function z(t){return t.type!=="stream"&&"layerId"in t}function B(t,a){const r="layerType"in t&&t.layerType,{type:e}=a;return!(e==="feature"&&r&&t.layerType!=="ArcGISFeatureLayer"||e==="catalog"&&!r||e==="oriented-imagery"&&!r||e==="subtype-group"&&!r)}async function H(t,a){const{layersJSON:r}=await F(t,a);if(!r)return null;const e=[...r.layers,...r.tables];return o=>e.find(s=>s.id===o.id)}async function K(t,a){const{layers:r}=t;if(!r?.length)return;const e=new Set,o=[];for(const{layerType:l}of r){const i=l??"ArcGISFeatureLayer";if(e.has(i))continue;e.add(i);const c=a[D(i)];o.push(c())}const s=await Promise.all(o),n=new Map;return Array.from(e).forEach((l,i)=>{n.set(l,s[i])}),({layerType:l})=>{const i=l??"ArcGISFeatureLayer";return n.get(i)}}export{oe as load};
