const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GroupLayer-ER-XzoYr-BJLHKvb6.js","./main-C0sSK5MQ.js","./main-Cpjm6T2D.css","./story-_2qqwocf.js","./story-D48M3uHB.css","./CollectionFlattener-DkHuHn5E-BwdSxxdX.js","./loadAll-e978YItg-DA8EhtZC.js","./MultiOriginJSONSupport-DKRh9P6w-AM_rJpVe.js","./Layer-ChoECxvZ-ydCoq6Yp.js","./TimeExtent-Cn0Jofqr-BkSLp2ff.js","./BlendLayer-D1WkSmwP-DRIGcbWa.js","./jsonUtils-wIllKWI4-DwkvU6b8.js","./parser-DyDJ-rlI-BAimiePc.js","./mat4f32-CiZjBg9k-CUm34GoR.js","./mat4-DX7gBViE-B6zP77UN.js","./common-CYWrYyJl-E8-sukrT.js","./OperationalLayer-B5IXiMa2-BFZVU8aW.js","./commonProperties-BtIqvFU_-DkZpApMd.js","./ElevationInfo-yv2-9tj6-C9wmgyT0.js","./lengthUtils-DKpMe5qR-CzZf1ZwU.js","./PortalLayer-CElnYuSQ-DEaPfqa_.js","./PortalItem-CctGdnxF-BsZcaSxd.js","./portalItemUtils-B8bw6SAG-D4M_JjPO.js","./projection-BA9M1R7d-BNPaubfz.js","./projectBuffer-CvCBvJ6W-CjFsH9Cb.js","./ScaleRangeLayer-Bz0DcnvM-UDnN-NkL.js","./fetchService-DbaKmJhP-CPITVTqe.js","./TablesMixin-C8RojhYs-BtSxMcJq.js","./interfaces-Cwm0pihk-Ptzy6gTd.js","./saveUtils-CIYk-dsQ-U2IPfQS0.js","./writeUtils-D5qlLkwk-CUd7zHcC.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./main-C0sSK5MQ.js";import{o as m,gK as g,a as P,gG as v}from"./story-_2qqwocf.js";import{i as L,m as O}from"./arcgisLayerUrl-HNYh8jvG-BDFw5rva.js";import{b as T}from"./associatedFeatureServiceUtils-Bu76-Sxs-DsC-WIPh.js";import{o as p,g as d,d as C,p as U}from"./fetchService-DbaKmJhP-CPITVTqe.js";import"./PortalItem-CctGdnxF-BsZcaSxd.js";const F={FeatureLayer:!0,SceneLayer:!0};async function A(r){const{properties:l,url:e}=r,t={...l,url:e},s=await N(e,l?.customParameters),{Constructor:a,layerId:o,sourceJSON:c,parsedUrl:i,layers:u,tables:n}=s;if(u.length+n.length===0)return o!=null&&(t.layerId=o),c!=null&&(t.sourceJSON=c),new a(t);const y=new(await I(async()=>{const{default:f}=await import("./GroupLayer-ER-XzoYr-BJLHKvb6.js");return{default:f}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url)).default({title:i.title});return await _(y,s,t),y}function S(r,l){return r?r.find(({id:e})=>e===l):null}function b(r,l,e,t,s){const a={...s,layerId:l};return r!=null&&(a.url=r),e!=null&&(a.sourceJSON=e),"sublayerTitleMode"in t.prototype&&(a.sublayerTitleMode="service-name"),new t(a)}async function _(r,l,e){const t=l.sublayerConstructorProvider;for(const{id:s,serverUrl:a}of l.layers){const o=S(l.sublayerInfos,s),c=b(a,s,o,(o&&t?.(o))??l.Constructor,e);r.add(c)}if(l.tables.length){const s=await w("FeatureLayer");l.tables.forEach(({id:a,serverUrl:o})=>{const c=b(o,a,S(l.tableInfos,a),s,e);r.tables.add(c)})}}async function N(r,l){let e=L(r);if(e==null&&(e=await V(r,l)),e==null)throw new m("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:t,sublayer:s}=e;let a;const o={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},c=t==="FeatureServer",i=t==="SceneServer",u={parsedUrl:e,Constructor:null,layerId:c||i?s??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":if(s!=null){const{type:n}=await p(r,{customParameters:l});switch(a="FeatureLayer",n){case"Catalog Layer":a="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new m("arcgis-layers:unsupported",`fromUrl() not supported for "${n}" layers`)}}else a=await x(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await p(r,{customParameters:l}),{tileInfo:y,cacheType:f}=n;a=y?y?.format?.toUpperCase()!=="LERC"||f&&f.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await p(e.url.path,{customParameters:l});if(a="SceneLayer",n){const y=n?.layers;if(n?.layerType==="Voxel")a="VoxelLayer";else if(y?.length){const f=y[0]?.layerType;f!=null&&v[f]!=null&&(a=v[f])}}break}case"3DTilesServer":throw new m("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(a="FeatureLayer",s!=null){const n=await p(r,{customParameters:l});u.sourceJSON=n,a=d(n.type)}break;default:a=o[t]}if(F[a]&&s==null){const n=await k(r,t,l);if(c&&(u.sublayerInfos=n.layerInfos,u.tableInfos=n.tableInfos),n.layers.length+n.tables.length!==1)u.layers=n.layers,u.tables=n.tables,c&&n.layerInfos?.length&&(u.sublayerConstructorProvider=await E(n.layerInfos));else if(c||i){const y=n.layerInfos?.[0]??n.tableInfos?.[0];if(u.layerId=n.layers[0]?.id??n.tables[0]?.id,u.sourceJSON=y,c){const f=y?.type;a=d(f)}}}return u.Constructor=await w(a),u}async function V(r,l){const e=await p(r,{customParameters:l});let t=null,s=null;const a=e.type;if(a==="Feature Layer"||a==="Table"?(t="FeatureServer",s=e.id??null):a==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":h(e)?(t="SceneServer",s=e.id):e.hasOwnProperty("layers")&&h(e.layers?.[0])&&(t="SceneServer"),!t)return null;const o=s!=null?O(r):null;return{title:o!=null&&e.name||g(r),serverType:t,sublayer:s,url:{path:o!=null?o.serviceUrl:P(r).path}}}function h(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function k(r,l,e){let t,s,a=!1;switch(l){case"FeatureServer":{const i=await C(r,{customParameters:e});a=!!i.layersJSON,t=i.layersJSON||i.serviceJSON;break}case"SceneServer":{const i=await J(r,e);t=i.serviceInfo,s=i.tableServerUrl;break}default:t=await p(r,{customParameters:e})}const o=t?.layers,c=t?.tables;return{layers:o?.map(i=>({id:i.id})).reverse()||[],tables:c?.map(i=>({serverUrl:s,id:i.id})).reverse()||[],layerInfos:a?o:[],tableInfos:a?c:[]}}async function J(r,l){const e=await p(r,{customParameters:l});if(!e.layers?.[0])return{serviceInfo:e};try{const{serverUrl:t}=await T(r),s=await p(t,{customParameters:l}).catch(()=>null);return s&&(e.tables=s.tables),{serviceInfo:e,tableServerUrl:t}}catch{return{serviceInfo:e}}}async function w(r){return(0,U[r])()}async function x(r,l){return(await p(r,{customParameters:l})).tileInfo}async function E(r){if(!r.length)return;const l=new Set,e=[];for(const{type:a}of r)l.has(a)||(l.add(a),e.push(w(d(a))));const t=await Promise.all(e),s=new Map;return Array.from(l).forEach((a,o)=>{s.set(a,t[o])}),a=>s.get(a.type)}export{A as fromUrl};