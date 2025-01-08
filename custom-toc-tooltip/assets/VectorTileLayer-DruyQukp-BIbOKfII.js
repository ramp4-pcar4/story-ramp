import{W as T,f as w,a as x,y as S,cA as Q,jU as Z,jV as ee,ay as te,P as g,o as I,k as F,v as c,S as h,n as U,J as re,ac as ie,a0 as E,i as se,a1 as oe,hY as le,jW as ae,X as ne,cx as W,bX as O,d4 as J,$ as K,a5 as ue,jX as z,b7 as D,eS as j,jY as B,w as pe,aA as ce,aU as he,an as ye,x as M,E as de}from"./story-CqzOZAFN.js";import{m as me}from"./MultiOriginJSONSupport-DKRh9P6w-hide5Qxb.js";import{D as fe}from"./Layer-ChoECxvZ-CYm2wGTM.js";import{n as ge}from"./APIKeyMixin-BUMSx9ny-9eh3lQam.js";import{O as Ae}from"./ArcGISCachedService-C64Ko1TY-BLubxY3R.js";import{a as Se}from"./ArcGISService-BYA-y6X6-ClTYVBhS.js";import{u as we}from"./BlendLayer-D1WkSmwP-B9JsZuND.js";import{i as xe}from"./CustomParametersMixin-vdKsTHer-D1LMX2r0.js";import{E as ve}from"./OperationalLayer-B5IXiMa2-C4iYP6UU.js";import{C as _e}from"./PortalLayer-CElnYuSQ-Cu8at6jN.js";import{T as be}from"./RefreshableLayer-a8BQ58Xh-CvBttBiE.js";import{S as Ie}from"./ScaleRangeLayer-Bz0DcnvM-CTHiqSWN.js";import{V as R,d as Ue}from"./TileInfo-CWIRDhZl-BFLcW_0d.js";import{f as G}from"./TilemapCache-CRRxws77-DfhoXzRD.js";import{s as X}from"./TileKey-C5IL-JBr-jLWXFkNE.js";import{a as Re}from"./jsonContext-BA8GHqVk-B7v9iKUn.js";import{a as Te}from"./StyleRepository-D3WuVprR-CxWn3zkl.js";import{n as C}from"./capabilities-agoTWNzb-CtsNgRyk.js";import"./main-jn20pd5b.js";import"./TimeExtent-Cn0Jofqr-BktY_eU3.js";import"./TileInfoTilemapCache-D1SExPij-BhdmQDKh.js";import"./arcgisLayerUrl-HNYh8jvG-Cg1TcCVm.js";import"./jsonUtils-wIllKWI4-5nSvMZNa.js";import"./parser-DyDJ-rlI-Dcmbzw_G.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-CKkIyT9Y.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./commonProperties-BtIqvFU_-COqNP1Uw.js";import"./ElevationInfo-yv2-9tj6-flvq8hKZ.js";import"./lengthUtils-DKpMe5qR-DKKmUvdx.js";import"./PortalItem-CctGdnxF-BQnpXQtC.js";import"./portalItemUtils-B8bw6SAG-Csw9rAEe.js";import"./projection-BA9M1R7d-Bb6He4B9.js";import"./projectBuffer-CvCBvJ6W-B2MCidMM.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./ByteSizeUnit-DL8UhsB0-B2-AmVRx.js";import"./LRUCache-C3erQTWv-G6GMuh5O.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./enums-qHpGJ28Q-CmnLAccm.js";import"./GeometryUtils-NHgB9gGQ-BS4eKOxU.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./colorUtils-Cthpxcks-OowBz9EI.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./definitions-DJSdSb77-DkoRHaVx.js";let _=null;function Oe(e){if(_)return _;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return _=new Promise(r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}),_}const k=1.15;class N{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>k;const{width:r,height:i,data:s,json:l}=await this._getSpriteData(this._spriteSource,t),o=Object.keys(l);if(!o||o.length===0||!s)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=l,this.width=r,this.height=i;const u=Math.max(this._maxTextureSize,4096);if(r>u||i>u){const a=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${u} pixels}`;throw oe.getLogger("esri.layers.support.SpriteSource").error(a),new I("SpriteSource",a)}let n;for(let a=0;a<s.length;a+=4)n=s[a+3]/255,s[a]=s[a]*n,s[a+1]=s[a+1]*n,s[a+2]=s[a+2]*n;this.image=s}async _getSpriteData(t,r){if(t.type==="image"){let y,d;if(this.devicePixelRatio<k){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");y=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");y=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in y&&"height"in y&&"data"in y&&(le(y.data)||ae(y.data))?{width:y.width,height:y.height,data:new Uint8Array(y.data),json:d}:{...$(y),json:d}}const i=x(this.baseURL),s=i.query?"?"+ne(i.query):"",l=this._isRetina?"@2x":"",o=`${i.path}${l}.${this._spriteImageFormat}${s}`,u=`${i.path}${l}.json${s}`,[n,a]=await Promise.all([w(u,r),w(o,{responseType:"image",...r})]);return{...$(a.data),json:n.data}}}function $(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(i.data)}}let Pe=class{constructor(e){this.url=e}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=w(this.url).then(e=>e.data.index)),this._tileIndexPromise}async dataKey(e,t){const r=await this.fetchTileIndex();return K(t),this._getIndexedDataKey(r,e)}_getIndexedDataKey(e,t){const r=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;i.level!==0;)i=new X(i.level-1,i.row>>1,i.col>>1,i.world),r.push(i);let s,l,o=e,u=r.pop();if(o===1)return u;for(;r.length;)if(s=r.pop(),l=(1&s.col)+((1&s.row)<<1),o){if(o[l]===0){u=null;break}if(o[l]===1){u=s;break}u=s,o=o[l]}return u}},Le=class{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}destroy(){this._tilemap=ce(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(e){return this._tileIndexPromise||(this._tileIndexPromise=w(this._tileIndexUrl,{query:{...e?.query}}).then(t=>t.data.index)),this._tileIndexPromise}dataKey(e,t){const{level:r,row:i,col:s}=e,l=new X(e);return this._tilemap.fetchAvailabilityUpsample(r,i,s,l,t).then(()=>(l.world=e.world,l)).catch(o=>{if(he(o))throw o;return null})}};class Ee{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){(this._promise==null||M(this._abortController?.signal))&&(this._promise=this._makeRequest(this._tileUrl));const r=this._abortOptions;return r.push(t),de(t,()=>{r.every(i=>M(i))&&this._abortController.abort()}),this._promise.then(i=>g(i))}async _makeRequest(t){this._abortController=new AbortController;const{data:r}=await w(t,{responseType:"array-buffer",signal:this._abortController.signal});return r}}const q=new Map;function De(e,t,r,i,s){const l=x(e),o=l.query;if(o)for(const[n,a]of Object.entries(o))switch(a){case"{x}":o[n]=i.toString();break;case"{y}":o[n]=r.toString();break;case"{z}":o[n]=t.toString()}const u=l.path;return je(S(u.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,i.toString()),{...l.query}),s)}function je(e,t){return ye(q,e,()=>new Ee(e)).getData(t).finally(()=>q.delete(e))}class Be{constructor(t,r,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=t,this.sourceUrl=r;const s=x(this.sourceUrl),l=g(i),o=l.tiles;if(s)for(let f=0;f<o.length;f++){const m=x(o[f]);m&&(W(m.path)||(m.path=O(s.path,m.path)),o[f]=S(m.path,{...s.query,...m.query}))}this.tileServers=o;const u=i.capabilities&&i.capabilities.split(",").map(f=>f.toLowerCase().trim()),n=i?.exportTilesAllowed===!0,a=u?.includes("tilemap")===!0,y=n&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:a},exportTiles:n?{maxExportTilesCount:+y}:null},this.tileInfo=R.fromJSON(l.tileInfo);const d=i.tileMap?S(O(s.path,i.tileMap),s.query??{}):null;a?(this.type="vector-tile",this.tilemap=new Le(new G({layer:{parsedUrl:s,tileInfo:this.tileInfo},minLOD:l.minLOD??this.tileInfo.lods[0].level,maxLOD:l.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Pe(d)),this.fullExtent=U.fromJSON(i.fullExtent),this.initialExtent=U.fromJSON(i.initialExtent)}destroy(){this.tilemap?.destroy()}async getRefKey(t,r){return this.tilemap?this.tilemap.dataKey(t,r):t}requestTile(t,r,i,s){const l=this.tileServers[r%this.tileServers.length];return De(l,t,r,i,s)}isCompatibleWith(t){const r=this.tileInfo,i=t.tileInfo;if(!r.spatialReference.equals(i.spatialReference)||!r.origin.equals(i.origin)||Math.round(r.dpi)!==Math.round(i.dpi))return!1;const s=r.lods,l=i.lods,o=Math.min(s.length,l.length);for(let u=0;u<o;u++){const n=s[u],a=l[u];if(n.level!==a.level||Math.round(n.scale)!==Math.round(a.scale))return!1}return!0}}async function Me(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,s]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await A(r,"esri",e,s,t),{layerDefinition:r.validatedSource,url:i,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&v(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&v(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function v(...e){let t;for(const r of e)r!=null&&(Q(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=W(r)?r:O(t,r));return t?J(t):void 0}async function A(e,t,r,i,s){let l,o,u;if(K(s),typeof r=="string"){const a=F(r);u=await w(a,{...s,responseType:"json",query:{f:"json",...s?.query}}),u.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=a,o=a}else r!=null&&(u={data:r},l=r.jsonUrl||null,o=i);const n=u?.data;if(H(n))return e.styleUrl=l||null,ke(e,n,o,s);if(Ce(n))return e.sourceUrl?V(e,n,o,!1,t,s):(e.sourceUrl=l||null,V(e,n,o,!0,t,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function Y(e){return typeof e=="object"&&!!e&&"tilejson"in e&&e.tilejson!=null}function H(e){return!!e&&"sources"in e&&!!e.sources}function Ce(e){return!H(e)}async function ke(e,t,r,i){const s=r?ue(r):z();e.styleBase=s,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await A(e,"esri",v(s,o.url),void 0,i):l.push(A(e,"esri",o,s,i))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(A(e,o,v(s,t.sources[o].url),void 0,i)):t.sources[o].tiles&&l.push(A(e,o,t.sources[o],s,i)));await Promise.all(l)}async function V(e,t,r,i,s,l){const o=r?J(r)+"/":z(),u=Ne(t),n=new Be(s,S(o,l?.query??{}),u);if(!i&&e.primarySourceName in e.sourceNameToSource){const a=e.sourceNameToSource[e.primarySourceName];if(!a.isCompatibleWith(n))return;n.fullExtent!=null&&(a.fullExtent!=null?a.fullExtent.union(n.fullExtent):a.fullExtent=n.fullExtent.clone()),a.tileInfo&&n.tileInfo&&a.tileInfo.lods.length<n.tileInfo.lods.length&&(a.tileInfo=n.tileInfo)}if(i&&(e.sourceBase=o,e.source=t,e.validatedSource=u,e.primarySourceName=s),e.sourceNameToSource[s]=n,!Y(e)&&"defaultStyles"in t&&!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?A(e,"",v(o,t.defaultStyles,"root.json"),void 0,l):A(e,"",t.defaultStyles,v(o,"root.json"),l)}}function Ne(e){if($e(e)){const a=e?.tileInfo;return a!=null&&(a.rows==null&&(a.rows=512),a.cols==null&&(a.cols=512)),e}const t={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100,latestWkid:3857}};let r=null;if(Y(e)){const{bounds:a}=e;if(a){const y=D({x:a[0],y:a[1],spatialReference:g(j)}),d=D({x:a[2],y:a[3],spatialReference:g(j)});r={xmin:y.x,ymin:y.y,xmax:d.x,ymax:d.y,spatialReference:g(B)}}}r===null&&(r=t);let i=78271.51696400007,s=2958287637957775e-7;const l=[],o=e.hasOwnProperty("maxzoom")&&e.maxzoom!=null?+e.maxzoom:22,u=0,n=0;for(let a=0;a<=o;a++)l.push({level:a,scale:s,resolution:i}),i/=2,s/=2;return{capabilities:"TilesOnly",initialExtent:r,fullExtent:t,minScale:u,maxScale:n,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:g(B)}}}function $e(e){return e.hasOwnProperty("tileInfo")}const b=1e-6;function qe(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,i=t.origin;if(Math.abs(r.x-i.x)>=b||Math.abs(r.y-i.y)>=b)return!1;let s,l;e.lods[0].scale>t.lods[0].scale?(s=e,l=t):(l=e,s=t);for(let o=s.lods[0].scale;o>=l.lods[l.lods.length-1].scale-b;o/=2)if(Math.abs(o-l.lods[0].scale)<b)return!0;return!1}function Ve(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],i=e.format,s=e.dpi,l=new pe({x:e.origin.x,y:e.origin.y}),o=e.spatialReference,u=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],a=u.scale,y=u.resolution,d=n.scale,f=[];let m=a,P=y,L=0;for(;m>d;)f.push(new Ue({level:L,resolution:P,scale:m})),L++,m/=2,P/=2;return new R({size:[r,r],dpi:s,format:i||"pbf",origin:l,lods:f,spatialReference:o})}let p=class extends we(Ie(be(Ae(Se(ve(_e(xe(ge(me(fe)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.path=null,this.refreshInterval=0,this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this.primarySource?.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(T).then(async()=>{if(!this.portalItem?.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await w(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Re(this.portalItem,"portal-item"))}).catch(T).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e?.serviceUrl&&x(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?S(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get initialExtent(){return this.primarySource?.initialExtent||null}get parsedUrl(){return this.serviceUrl?x(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo?.serviceUrl||null}get spatialReference(){return this.tileInfo?.spatialReference??null}get styleUrl(){return this.currentStyleInfo?.styleUrl||null}writeStyleUrl(e,t){e&&Q(e)&&(e=`https:${e}`);const r=Z(e);t.styleUrl=ee(e,r)}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new R;if(e.length>1)for(let r=0;r<e.length;r++)qe(t,e[r].tileInfo)&&(t=Ve(t,e[r].tileInfo));return t}readTilemapCache(e,t){return t.capabilities?.includes("Tilemap")?new G({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=C().maxTextureSize,i=this.currentStyleInfo?.spriteUrl?S(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,s=new N({type:"url",spriteUrl:i,pixelRatio:e,spriteFormat:this.currentStyleInfo?.spriteFormat},r);await s.load(t),this._spriteSourceMap.set(e,s)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=C().maxTextureSize,i=e.spriteUrl,s=i?S(i,{...this.customParameters,token:this.apiKey}):null;if(!s&&e.type==="url")return null;const l=new N(e,r);try{await l.load(t);const o=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(o,l),s&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=s),this.emit("spriteSource-change",{spriteSource:l}),l}catch(o){T(o)}return null}async loadStyle(e,t){const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||(this._loadingTask?.abort(),this._loadingTask=te(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return g(this.styleRepository?.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return g(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return g(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Me(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Oe("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Te(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^/]+)?\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/vectortileserver/i),r=["OpenBasemap_v2","OpenBasemap_GCS_v2","OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2","World_Hillshade_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const s=t[1]||"";for(const l of r)if(l.toLowerCase().includes(i))return F(`//static.arcgis.com/attribution/Vector${s}/${l}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};c([h({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],p.prototype,"listMode",void 0),c([h({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([h({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([h({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:U})],p.prototype,"fullExtent",null),c([h({json:{read:!1},readOnly:!0,type:U})],p.prototype,"initialExtent",null),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],p.prototype,"parsedUrl",null),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),c([h({type:Number,json:{write:!1,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],p.prototype,"refreshInterval",void 0),c([h()],p.prototype,"style",void 0),c([h({readOnly:!0})],p.prototype,"serviceUrl",null),c([h({type:re,readOnly:!0})],p.prototype,"spatialReference",null),c([h({readOnly:!0})],p.prototype,"styleRepository",void 0),c([h({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],p.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([ie(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:R})],p.prototype,"tileInfo",null),c([h()],p.prototype,"tilemapCache",void 0),c([E("service","tilemapCache",["capabilities","tileInfo"])],p.prototype,"readTilemapCache",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([h({readOnly:!0})],p.prototype,"version",void 0),c([E("version",["version","currentVersion"])],p.prototype,"readVersion",null),p=c([se("esri.layers.VectorTileLayer")],p);const Ct=p;export{Ct as default};
