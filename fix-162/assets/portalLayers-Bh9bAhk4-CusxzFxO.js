import{o as b,gG as f}from"./story-DfT1JADo.js";import{b as S}from"./associatedFeatureServiceUtils-Bu76-Sxs-LrZ5phYo.js";import{p as I,g as h,o as v}from"./fetchService-DbaKmJhP-CTBXKX6w.js";import w from"./PortalItem-CctGdnxF-C-j6pKig.js";import{o as p}from"./portalItemUtils-B8bw6SAG-ivOe1uFQ.js";import"./main-DG75X1yT.js";import"./arcgisLayerUrl-HNYh8jvG-Cqh_rWvu.js";import"./projection-BA9M1R7d-CG_FnTtX.js";import"./projectBuffer-CvCBvJ6W-CzvTfQZJ.js";class M{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(t,a){const r=this._serviceMetadatas.get(t);if(r)return r;const s=await v(t,a);return this._serviceMetadatas.set(t,s),s}async fetchItemData(t){const{id:a}=t;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await t.fetchData();return r.set(a,s),s}async fetchCustomParameters(t,a){const r=await this.fetchItemData(t);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function l(e){const t={id:e.id,name:e.name},a=h(e.type);return a!=="FeatureLayer"&&(t.layerType=a),t}async function P(e,t,a){if(e?.layers==null||e?.tables==null){const r=await a.fetchServiceMetadata(t,{customParameters:o(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(l),e.tables=e.tables||r?.tables?.map(l)}return e}function o(e){if(!e)return null;const{layers:t,tables:a}=e;return t?.length?t[0]:a?.length?a[0]:null}function T(e,t){return t==null?null:[...e.layers||[],...e.tables||[]].find(a=>a.id===t)}function ue(e,t){return[...e.layers||[],...e.tables||[]].filter(({layerType:a})=>a?a===t:t==="ArcGISFeatureLayer")}function L(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function ie(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function G(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function C(e,t,a){if(!e?.url)return t??{};if(t??={},!t.layers){const n=await a.fetchServiceMetadata(e.url);t.layers=n.layers?.map(l)}const{serverUrl:r,portalItem:s}=await S(e.url,{sceneLayerItem:e,customParameters:o(t)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return t.tables=[],t;if(!t.tables&&s){const n=await s.fetchData().catch(()=>null);if(n?.tables)t.tables=n.tables.map(l);else{const c=await a.fetchServiceMetadata(r,{customParameters:o(n)?.customParameters}).catch(()=>null);t.tables=c?.tables?.map(l)}}if(t.tables)for(const n of t.tables)n.url=`${r}/${n.id}`;return t}async function F(e){let{portalItem:t}=e;!t||t instanceof w||(t=new w(t));const a=await D(t);return new a.constructor({portalItem:t,...a.properties})}async function D(e){await e.load();const t=new M;return $(await g(e,t))}async function g(e,t){switch(e.type){case"3DTiles Service":return x();case"CSV":return A();case"Feature Collection":return K(e);case"Feature Service":return j(e,t);case"Feed":return q();case"GeoJson":return k();case"Group Layer":return B();case"Image Service":return V(e,t);case"KML":return U();case"Knowledge Graph Layer":return E();case"Map Service":return O(e,t);case"Media Layer":return H();case"Scene Service":return _(e,t);case"Stream Service":return W();case"Vector Tile Service":return J();case"WFS":return R();case"WMS":return z();case"WMTS":return Z();default:throw new b("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function $(e){const t=e.className,a=I[t];return{constructor:await a(),properties:e.properties}}async function O(e,t){return await Q(e,t)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function j(e,t){const a=await N(e,t);if(typeof a=="object"){const{sourceJSON:r,className:s}=a,n={sourceJSON:r};return a.id!=null&&(n.layerId=a.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function _(e,t){const a=await N(e,t,async()=>{try{if(!e.url)return[];const{serverUrl:r}=await S(e.url,{sceneLayerItem:e});return(await t.fetchServiceMetadata(r))?.tables??[]}catch{return[]}});if(typeof a=="object"){const r={};let s;if(a.id!=null?(r.layerId=a.id,s=`${e.url}/layers/${a.id}`):s=e.url,e.typeKeywords?.length){for(const c of Object.keys(f))if(e.typeKeywords.includes(c))return{className:f[c]}}const n=await t.fetchServiceMetadata(s,{customParameters:await t.fetchCustomParameters(e,c=>o(c)?.customParameters)});return{className:f[n?.layerType]||"SceneLayer",properties:r}}return a===!1&&(await t.fetchServiceMetadata(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function K(e){await e.load();const t=p(e,"Map Notes"),a=p(e,"Markup");if(t||a)return{className:"MapNotesLayer"};if(p(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return L(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function V(e,t){await e.load();const a=e.typeKeywords?.map(m=>m.toLowerCase())??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await t.fetchItemData(e),s=r?.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)}),c=n.cacheType?.toLowerCase(),y=n.capabilities?.toLowerCase().includes("tilesonly"),u=n.tileInfo?.format?.toLowerCase()??"",i=c==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(u);return c==="map"||i||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function W(){return{className:"StreamLayer"}}function J(){return{className:"VectorTileLayer"}}function k(){return{className:"GeoJSONLayer"}}function x(){return{className:"IntegratedMesh3DTilesLayer"}}function A(){return{className:"CSVLayer"}}function U(){return{className:"KMLLayer"}}function E(){return{className:"KnowledgeGraphLayer"}}function R(){return{className:"WFSLayer"}}function z(){return{className:"WMSLayer"}}function Z(){return{className:"WMTSLayer"}}function q(){return{className:"StreamLayer"}}function B(){return{className:"GroupLayer"}}function H(){return{className:"MediaLayer"}}async function Q(e,t){const{tileInfo:a}=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)});return a}async function N(e,t,a){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const u=await t.fetchServiceMetadata(r,{customParameters:await t.fetchCustomParameters(e,i=>o(i)?.customParameters)});return{id:u.id,className:h(u.type),sourceJSON:u}}return{}}await e.load();let c=await t.fetchItemData(e);if(n){const u=await P(c,r,t),i=d(u);if(typeof i=="object"){const m=T(u,i.id);i.className=G(m?.layerType)}return i}if(s==="Scene Service"&&(c=await C(e,c,t)),L(c)>0)return d(c);const y=await t.fetchServiceMetadata(r);return a&&(y.tables=await a()),d(y)}function d(e){return L(e)===1&&{id:o(e)?.id}}Object.freeze(Object.defineProperty({__proto__:null,fromItem:F,selectLayerClassPath:g},Symbol.toStringTag,{value:"Module"}));export{g as L,P as a,ie as c,M as e,G as i,o as l,ue as n,C as o,l as t,L as u};
