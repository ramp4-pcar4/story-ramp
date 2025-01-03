import{f as y,o as c,v as o,S as p,J as _,a0 as h,n as S,ac as P,i as L,bp as O,a1 as w,a as U,r as K}from"./story-_2qqwocf.js";import{n as T}from"./originUtils-BLsWtgV9-B4sclfuf.js";import{M as $}from"./HeightModelInfo-C5vFqzyF-NUSOnWtQ.js";import{I as V,i as M,o as C,x as q,T as z}from"./arcgisLayerUrl-HNYh8jvG-BDFw5rva.js";import{e as F,Z as k}from"./commonProperties-BtIqvFU_-DkZpApMd.js";import J from"./PortalItem-CctGdnxF-BsZcaSxd.js";import{i as A}from"./jsonContext-BA8GHqVk-BLvxqmVa.js";import{T as B,F as D}from"./resourceUtils-BmW6QqlX-BysQgMGH.js";import{d as Z}from"./saveUtils-CIYk-dsQ-U2IPfQS0.js";async function G(s,a,t,e,i,r,n){let l=null;if(t!=null){const u=`${s}/nodepages/`,N=u+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await y(N,{query:{f:"json",...e,token:i},responseType:"json",signal:n})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:u}}catch(E){r?.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",N,E),l=E}}if(!a)return null;const d=a?.split("/").pop(),f=`${s}/nodes/`,v=f+d;try{return{type:"node",rootNode:(await y(v,{query:{f:"json",...e,token:i},responseType:"json",signal:n})).data,urlPrefix:f}}catch(u){throw new c("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:u,url:v})}}let H=null;function Q(){return H}const ne=s=>{let a=class extends s{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=O(async(t,e,i)=>{switch(t){case g.SAVE:return this._save(e);case g.SAVE_AS:return this._saveAs(i,e)}})}readSpatialReference(t,e){return I(e)}readFullExtent(t,e,i){if(t!=null&&typeof t=="object"){const l=t.spatialReference==null?{...t,spatialReference:I(e)}:t;return S.fromJSON(l,i)}const r=e.store,n=I(e);return n==null||r?.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<x)?null:new S({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:n})}parseVersionString(t){const e={major:Number.NaN,minor:Number.NaN,versionString:t},i=t.split(".");return i.length>=2&&(e.major=parseInt(i[0],10),e.minor=parseInt(i[1],10)),e}readVersion(t,e){const i=e.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(t){return this.sublayerTitleMode!=="item-title"?void 0:t}readTitleService(t,e){const i=this.portalItem?.title;if(this.sublayerTitleMode==="item-title")return this.url?V(this.url,e.name):e.name;let r=e.name;if(!r&&this.url){const n=M(this.url);n!=null&&(r=n.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),C(r)}set url(t){if(t==null)return void this._set("url",t);const e=q({layer:this,url:t,nonStandardUrlAllowed:!1,logger:w.getLogger(this)});this._set("url",e.url),e.layerId!=null&&this._set("layerId",e.layerId)}writeUrl(t,e,i,r){z(this,t,"layers",e,r)}get parsedUrl(){const t=this._get("url"),e=U(t);return e&&this.layerId!=null&&(e.path=`${e.path}/layers/${this.layerId}`),e}async _fetchIndexAndUpdateExtent(t,e){this.indexInfo=G(this.parsedUrl?.path??"",this.rootNode,t,this.customParameters,this.apiKey,w.getLogger(this),e),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(t){if(t?.type==="page"){const e=t.rootIndex%t.pageSize,i=t.rootPage?.nodes?.[e];if(i?.obb?.center==null||i.obb.halfSize==null)throw new c("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<x||this.fullExtent==null||this.fullExtent.hasZ)return;const r=i.obb.halfSize,n=i.obb.center[2],l=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if(t?.type==="node"){const e=t.rootNode?.mbs;if(!Array.isArray(e)||e.length!==4||e[0]<x)return;const i=e[2],r=e[3],{fullExtent:n}=this;n&&(n.zmin=i-r,n.zmax=i+r)}}async _fetchService(t){if(this.url==null)throw new c("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const e=await this._fetchFirstLayerId(t);e!=null&&(this.layerId=e)}return this._fetchServiceLayer(t)}async _fetchFirstLayerId(t){const e=await y(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t});if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id}async _fetchServiceLayer(t){const e=await y(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t});e.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(e.data.layerType&&e.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=e.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(t){const e=(await y(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t})).data;this.read(e,this._getServiceContext()),this.validateLayer(e)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(t){}async _saveAs(t,e){const i={...R,...e};let r=J.from(t);if(!r)throw new c("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");r.id&&(r=r.clone(),r.id=null);const n=r.portal||K.getDefault();await this._ensureLoadBeforeSave(),r.type=b,r.portal=n;const l=A(r,"portal-item",!0),d={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(d,l,i),this.url&&(r.url=this.url),r.title||(r.title=this.title),j(r,i,m.newItem),await n.signIn(),await n.user.addItem({item:r,folder:i?.folder,data:d}),await B(this.resourceReferences,l),this.portalItem=r,T(l),l.portalItem=r,r}async _save(t){const e={...R,...t};if(!this.portalItem)throw new c("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==b)throw new c("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${b}"`);await this._ensureLoadBeforeSave();const i=A(this.portalItem,"portal-item",!0),r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,e),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),j(this.portalItem,e,m.existingItem),await D(this.portalItem,r,this.resourceReferences,i),T(i),this.portalItem}async _validateAgainstJSONSchema(t,e,i){const r=i?.validationOptions;Z(e,{errorName:"sceneservice:save"},{ignoreUnsupported:r?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const n=r?.enabled,l=Q();if(n&&l){const d=(await l()).validate(t,i.portalItemLayerType);if(!d.length)return;const f=`Layer item did not validate:
${d.join(`
`)}`;if(w.getLogger(this).error(`_validateAgainstJSONSchema(): ${f}`),r.failPolicy==="throw"){const v=d.map(u=>new c("sceneservice:schema-validation",u));throw new c("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:v})}}}};return o([p(F)],a.prototype,"id",void 0),o([p({type:_})],a.prototype,"spatialReference",void 0),o([h("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),o([p({type:S})],a.prototype,"fullExtent",void 0),o([h("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),o([p({readOnly:!0,type:$})],a.prototype,"heightModelInfo",void 0),o([p({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),o([p({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),o([p({readOnly:!0})],a.prototype,"version",void 0),o([h("version",["store.version"])],a.prototype,"readVersion",null),o([p({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o([p({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),o([p({type:String})],a.prototype,"title",void 0),o([h("portal-item","title")],a.prototype,"readTitlePortalItem",null),o([h("service","title",["name"])],a.prototype,"readTitleService",null),o([p({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),o([p(k)],a.prototype,"url",null),o([P("url")],a.prototype,"writeUrl",null),o([p()],a.prototype,"parsedUrl",null),o([p({readOnly:!0})],a.prototype,"store",void 0),o([p({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=o([L("esri.layers.mixins.SceneService")],a),a},x=-1e38;function I(s){if(s.spatialReference!=null)return _.fromJSON(s.spatialReference);const a=s.store,t=a.indexCRS||a.geographicCRS,e=t&&parseInt(t.slice(t.lastIndexOf("/")+1),10);return e!=null?new _(e):null}function j(s,a,t){s.typeKeywords||(s.typeKeywords=[]);const e=a.getTypeKeywords();for(const i of e)s.typeKeywords.push(i);s.typeKeywords&&(s.typeKeywords=s.typeKeywords.filter((i,r,n)=>n.indexOf(i)===r),t===m.newItem&&(s.typeKeywords=s.typeKeywords.filter(i=>i!=="Hosted Service")))}var m;(function(s){s[s.existingItem=0]="existingItem",s[s.newItem=1]="newItem"})(m||(m={}));const b="Scene Service",R={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var g;(function(s){s[s.SAVE=0]="SAVE",s[s.SAVE_AS=1]="SAVE_AS"})(g||(g={}));export{G as T,ne as W,g as f};