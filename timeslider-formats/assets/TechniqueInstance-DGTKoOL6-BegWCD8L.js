import{K as c,o as E,a1 as S}from"./story-BRwEvu2S.js";import{a as h,P as v,V as F,U,f as M,A as L,L as O,O as k,T as R}from"./definitions-DJSdSb77-DkoRHaVx.js";import{Z as T}from"./UpdateTracking2D-Du_WIf4G-CTSvxGSr.js";import{v as x,C as B}from"./LabelMetric-BeluzH3o-B7O3ZfmV.js";import{G as w,M as A}from"./enums-DBi1-Mm2-CUS1pvQe.js";import{G as $}from"./Program-DLVwTiPA-BToyrSrm.js";import{H as D,V as z}from"./Texture-BCt2hphT-qT5BcZ8g.js";import{h as P}from"./TileContainer-D48pXXgL-Bfb3Idej.js";const G=()=>S.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");class m{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:n,textureOnly:o}=t,a=x(n);this.blockIndex=i,this.pixelType=n,this.size=e,this.textureOnly=o,o||(this.data=new a(s)),this._resetRange()}destroy(){this._texture?.dispose();for(const t in this._fbos){const e=this._fbos[t];e&&(t==="0"&&e.detachColorTexture(),e.dispose()),this._fbos[t]=null}this._texture=null}get _textureDesc(){const t=new D;return t.wrapMode=w.CLAMP_TO_EDGE,t.samplingMode=A.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){const s=T(t),n=this.data,o=s*this.texelSize+e;!n||o>=n.length||(n[o]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(this.data==null)return null;const i=T(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){const i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new $(t,i)}return this._fbos[e]}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;c("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStoreView.updateTexture`,{start:i,end:s,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const n=this.data.buffer,o=this.getTexture(t),a=4,u=(i-i%this.size)/this.size,d=(s-s%this.size)/this.size,l=u,f=this.size,p=d,_=u*this.size*a,g=(f+p*this.size)*a-_,b=x(this.pixelType),I=new b(n,_*b.BYTES_PER_ELEMENT,g),V=this.size,y=p-l+1;if(y>this.size)return void G().error(new E("mapview-webgl","Out-of-bounds index when updating AttributeData"));o.updateData(0,0,l,V,y,I)}catch{}}update(t){const{data:e,start:i,end:s}=t;if(e!=null&&this.data!=null){const n=this.data,o=i*this.texelSize;for(let a=0;a<e.length;a++){const u=1<<a%this.texelSize;t.layout&u&&(n[o+a]=e[a])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=x(this.pixelType);this.destroy(),this.data=new s(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new z(t,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,o=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),u=B(n),d=new(x(n))(new ArrayBuffer(i*s*u*this.texelSize)),l=t.getBoundFramebufferObject(),{x:f,y:p,width:_,height:g}=t.getViewport();t.bindFramebuffer(a),a.readPixels(0,0,i,s,o,n,d),e.updateData(0,0,0,2*i,s/2,d),t.setViewport(f,p,_,g),t.bindFramebuffer(l)}return this.destroy(),this._texture=e,this._texture}}class C{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");const e=t.blockDescriptors;if(this.size=t.blockSize,c("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),this._data==null)this._data=e.map((i,s)=>i!=null?new m(i,this.size,s):null);else for(let i=0;i<this._data.length;i++){const s=this._data[i],n=e[i];n!=null&&(s==null?this._data[i]=new m(n,this.size,i):s.resize(n,this.size))}}destroy(){for(const t of this._data??[])t?.destroy();this._defaultTexture?.dispose(),this._defaultTexture=null,this._pendingAttributeUpdates=[]}isEmpty(){return this._data==null}getBlock(t){return this._data==null?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,h.FilterFlags,1,e)}setLocalTimeOrigin(t,e){this.setData(t,h.LocalTimeOrigin,0,e)}getLabelMinZoom(t){return this.getData(t,h.FilterFlags,1,255)}getFilterFlags(t){return this.getData(t,h.FilterFlags,0,0)}getVisualVariableData(t,e){return this.getData(t,h.VV,e,0)}getData(t,e,i,s){if(!this._data)return 0;const n=this._data[e];return n==null?0:n.getData(t,i)??s}setData(t,e,i,s){this._data[e].setData(t,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(t){this._version=t.version,this._pendingAttributeUpdates.push(t),c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const e of t){const{blockData:i,initArgs:s,sendUpdateEpoch:n,version:o}=e;c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${n}] AttributeStoreView.applyUpdate`),this._version=o,this._epoch=n,s!=null&&this._initialize(s);const a=this._data;for(let u=0;u<i.length;u++){const d=i[u],l=a[u];l!=null&&d!=null&&(c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${u}] AttributeStoreView.update`,{block:d}),l.update(d))}}}getUniforms(t){return{filterFlags:{texture:this._getTexture(t,h.FilterFlags),unit:v},animation:{texture:this._getTexture(t,h.Animation),unit:F},gpgpu:{texture:this._getTexture(t,h.GPGPU),unit:U},localTimeOrigin:{texture:this._getTexture(t,h.LocalTimeOrigin),unit:M},visualVariableData:{texture:this._getTexture(t,h.VV),unit:L},dataDriven0:{texture:this._getTexture(t,h.DD0),unit:O},dataDriven1:{texture:this._getTexture(t,h.DD1),unit:k},dataDriven2:{texture:this._getTexture(t,h.DD2),unit:R},size:this.size}}_getTexture(t,e){const i=this._data?.[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(this._defaultTexture==null){const e=new D;e.wrapMode=w.CLAMP_TO_EDGE,e.samplingMode=A.NEAREST,e.width=1,e.height=1,this._defaultTexture=new z(t,e,new Uint8Array(4))}return this._defaultTexture}}const q=60;let W=class extends P{constructor(r){super(r),this._statisticsByLevel=new Map,this._entityIndex=new Map,this.attributeView=new C}destroy(){this.children.forEach(r=>r.destroy()),this.removeAllChildren(),this.attributeView.destroy()}doRender(r){r.context.capabilities.enable("textureFloatLinear"),super.doRender(r)}get hasAnimations(){for(const r of this.children)if(r.hasAnimations)return!0;return!1}_reindexAndUpdateFeaturesIfNeeded(){if(this.hasAnimations&&(this._reindexFeatures(),this.attributeView.size!==0))for(const r of this._entityIndex.values())r.dirty&&(this.attributeView.setData(r.displayId,h.LocalTimeOrigin,0,r.firstIndexed),r.dirty=!1)}restartAnimation(r){const t=this._entityIndex.get(r);if(!t)return;const e=performance.now()/1e3;t.firstIndexed=e,t.dirty=!0}restartAllAnimations(){const r=performance.now()/1e3;for(const[t,e]of this._entityIndex)e.firstIndexed=r,e.dirty=!0}_reindexFeatures(){const r=performance.now()/1e3;for(const t of this.children)for(const e of t.entityIds){const{objectId:i}=e;let s=this._entityIndex.get(i);s||(s={objectId:i,displayId:0,firstIndexed:r,lastIndexed:0,dirty:!0},this._entityIndex.set(i,s)),s.lastIndexed=r,s.displayId=e.displayId}for(const[t,e]of this._entityIndex)r-e.lastIndexed>q&&this._entityIndex.delete(t)}_updateAttributeView(){this.attributeView.update(),this._reindexAndUpdateFeaturesIfNeeded()}createRenderParams(r){const t=super.createRenderParams(r);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}};function X(r){return r}class tt{constructor(t,e,i){this._instanceId=t,this.techniqueRef=e,this._input=i}get instanceId(){return this._instanceId}createMeshInfo(t){return{id:this._instanceId,techniqueType:this.techniqueRef.type,inputParams:t,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t}}export{X as G,tt as Z,W as j};
