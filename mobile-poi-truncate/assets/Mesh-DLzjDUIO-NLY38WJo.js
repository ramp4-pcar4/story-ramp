const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loadGLTFMesh-C3-0Tu0H-BpdUtM9y.js","./story-BAzleJnS.js","./main-Dqar6lJ9.js","./main-Blpl9308.css","./story-Cjnzy4Ic.css","./mat3-CC4Foazl-BWjyqE2v.js","./common-CYWrYyJl-E8-sukrT.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./vec4f64-hf2nxvhQ-CaAr8PTM.js","./MeshVertexAttributes-CbNpPur2-CeV0NYip.js","./meshVertexSpaceUtils-B4l_Zo0M-Z6lfqWCG.js","./vec32-D9GsKZ1t-CdxI4q8D.js","./MeshLocalVertexSpace-BqgocsoS-DfI6YxO9.js","./BufferView-PQoE3GL7-DXdFIJMu.js","./vec2-tHZ6OaOy-xCj1obDt.js","./vec42-D8CJyqHG-DnfLTeQH.js","./vec3-BazNroeq-CdNBdqPl.js","./vec4-DWDdg1fj-BKLse8M3.js","./types-ChhhI6OU-Cxh6dPlX.js","./loader-CkLCe-E_-Ct0Xoem2.js","./mat4f64-Dn1WEGBx-C99QVUMW.js","./enums-DBi1-Mm2-CUS1pvQe.js","./Version-CoKzbupV-BlPNM2ve.js","./mat4-DX7gBViE-C0rtR5P7.js","./quat-BODLR7mS-Dml8TB_a.js","./quatf64-C16JxGFv-BKWK1F8U.js","./resourceUtils-Ds65naCv-BgjQ-V3k.js","./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js","./DefaultMaterial_COLOR_GAMMA-D0o2czi9-C3-g5Y_O.js","./Indices-DEr2HrWx-DXECmITX.js","./vertexSpaceConversion-CiKaVq_u-CCFf0VKv.js","./spatialReferenceEllipsoidUtils-DUrKTvup-BDGk-QI9.js","./computeTranslationToOriginAndRotation-wF0y9WQG-Zwlfzo0g.js","./projectBuffer-CvCBvJ6W-BF-3Muvh.js","./projectPointToVector-B2UUY9SE-BJ8mZgYE.js","./projection-BA9M1R7d-DH8r1JsC.js","./MeshTransform-C--IG09w-CC0XDdwc.js","./imageUtils-BA2D6Uf1-BsblulCb.js","./earcut-XDcq3zAf-BcwyrT7l.js","./plane-Dt8R0KeE-DFEkWNeq.js","./vec2f64-CeODonrJ-CkkJCdRC.js","./deduplicate-D2d-E5Pw-DvztcFMd.js","./External-D_wl4XAw-BfB_Sxi2.js","./infoFor3D-DIuYZyyK-BtH19JJ7.js","./gltfexport-Dj6nF2RN-Znu1KAZV.js"])))=>i.map(i=>d[i]);
import{_ as Se}from"./main-Dqar6lJ9.js";import{v as u,S as f,cS as Ut,ac as Pt,a0 as Wt,i as B,aa as Nt,ar as nt,ad as Pe,jh as Oe,aB as Bt,at as Ht,ah as zt,gU as Vt,ji as kt,jj as Re,w as O,hZ as Me,$ as xe,l as Gt,a_ as ot,bu as Zt,o as re,e as ve,dY as We,aO as _e,a1 as se,P as Te,jk as Yt,jl as qt,D as ae,i9 as L,dg as R,jm as Kt,jn as Ne,n as Xt,a5 as Jt,cy as Qt,bf as er,x as tr,aS as rr,aP as nr,ag as or,ai as sr,eI as ir,h_ as we,d as ar,bj as lr,p as cr,dh as ur,hl as pr}from"./story-BAzleJnS.js";import{s as st,R as hr,V as ne,c as it,S as ue,Q as at}from"./MeshTransform-C--IG09w-CC0XDdwc.js";import{g as fr}from"./imageUtils-BA2D6Uf1-BsblulCb.js";import{u as mr,o as pe,g as dr}from"./MeshVertexAttributes-CbNpPur2-CeV0NYip.js";import{y as he,d as De}from"./MeshLocalVertexSpace-BqgocsoS-DfI6YxO9.js";import{m as gr,t as ie,x as fe,d as lt}from"./meshVertexSpaceUtils-B4l_Zo0M-Z6lfqWCG.js";import{m as yr}from"./earcut-XDcq3zAf-BcwyrT7l.js";import{w as ct}from"./Indices-DEr2HrWx-DXECmITX.js";import{r as xr,j as vr,Z as Le,l as wr,_ as me,Q as ut,Y as br,L as Tr}from"./vec32-D9GsKZ1t-CdxI4q8D.js";import{y as Ar,N as Sr,K as Rr}from"./plane-Dt8R0KeE-DFEkWNeq.js";import{v as Be}from"./deduplicate-D2d-E5Pw-DvztcFMd.js";import{p as I}from"./projectPointToVector-B2UUY9SE-BJ8mZgYE.js";import{g as A,b as $e,Y as Mr,L as pt,a as ht,e as ft,c as mt,l as dt,o as gt,f as yt,M as P}from"./vertexSpaceConversion-CiKaVq_u-CCFf0VKv.js";import{t as be}from"./mat4f64-Dn1WEGBx-C99QVUMW.js";import{J as _r}from"./projection-BA9M1R7d-DH8r1JsC.js";import{x as Ee}from"./spatialReferenceEllipsoidUtils-DUrKTvup-BDGk-QI9.js";import{G as xt}from"./computeTranslationToOriginAndRotation-wF0y9WQG-Zwlfzo0g.js";import{n as Dr}from"./projectBuffer-CvCBvJ6W-BF-3Muvh.js";import{b as He,P as Lr}from"./vec3-BazNroeq-CdNBdqPl.js";import{B as ze,T as $r,M as Cr}from"./External-D_wl4XAw-BfB_Sxi2.js";import{n as vt}from"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{P as jr}from"./mat3-CC4Foazl-BWjyqE2v.js";import{t as wt,B as bt,$ as Tt,N as At,W as St,K as Fr}from"./mat4-DX7gBViE-C0rtR5P7.js";import{A as Or}from"./quat-BODLR7mS-Dml8TB_a.js";import{e as Er,n as Ir}from"./quatf64-C16JxGFv-BKWK1F8U.js";var k;const Ae=new WeakMap;let Ur=0,j=k=class extends ve{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,n,r){if(e instanceof HTMLImageElement){const o={type:"image-element",src:We(e.src,r),crossOrigin:e.crossOrigin};t[n]=o}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:Ve(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[n]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:We(e.src,r),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[n]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:Ve(e)};t[n]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=ke(e.imageData),n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),n}case"image-data":return ke(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const{data:e,url:t}=this;return e instanceof HTMLCanvasElement?Ge(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData?Ge(e):!(!t?.toLowerCase().endsWith(".png")&&!t?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(n="")=>`d:${n},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(Ae.has(this.data)||Ae.set(this.data,++Ur),t(Ae.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new k(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const n=this.clone();return e.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new k({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new k({data:e}):_e(k,e)}};function Ve(e){let t="";for(let n=0;n<e.data.length;n++)t+=String.fromCharCode(e.data[n]);return{data:btoa(t),width:e.width,height:e.height}}function ke(e){const t=atob(e.data),n=new Uint8ClampedArray(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return fr(n,e.width,e.height)}function Ge(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}u([f({type:String,json:{write:Ut}})],j.prototype,"url",null),u([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],j.prototype,"data",null),u([Pt("data")],j.prototype,"writeData",null),u([Wt("data")],j.prototype,"readData",null),u([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],j.prototype,"transparent",null),u([f({json:{write:!0}})],j.prototype,"wrap",void 0),u([f({readOnly:!0})],j.prototype,"contentHash",null),j=k=u([B("esri.geometry.support.MeshTexture")],j);const ee=j;let G=class extends Nt(ve){constructor(e){super(e),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};u([f({type:[Number],nonNullable:!0,json:{write:!0}})],G.prototype,"offset",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0}})],G.prototype,"rotation",void 0),u([f({type:[Number],nonNullable:!0,json:{write:!0}})],G.prototype,"scale",void 0),G=u([B("esri.geometry.support.MeshTextureTransform")],G);const te=G;var Ce;let $=Ce=class extends ve{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Ce(this.clonePropertiesWithDeduplication(t));return e?.set(this,r),r}clonePropertiesWithDeduplication(e){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};u([f({type:nt,json:{write:!0}})],$.prototype,"color",void 0),u([f({type:ee,json:{write:!0}})],$.prototype,"colorTexture",void 0),u([f({type:te,json:{write:!0}})],$.prototype,"colorTextureTransform",void 0),u([f({type:ee,json:{write:!0}})],$.prototype,"normalTexture",void 0),u([f({type:te,json:{write:!0}})],$.prototype,"normalTextureTransform",void 0),u([f({nonNullable:!0,json:{write:!0}})],$.prototype,"alphaMode",void 0),u([f({nonNullable:!0,json:{write:!0}})],$.prototype,"alphaCutoff",void 0),u([f({nonNullable:!0,json:{write:!0}})],$.prototype,"doubleSided",void 0),$=Ce=u([B("esri.geometry.support.MeshMaterial")],$);const Ie=$;var je;let _=je=class extends Ie{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new je(this.clonePropertiesWithDeduplication(t));return e?.set(this,r),r}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};u([f({type:nt,json:{write:!0}})],_.prototype,"emissiveColor",void 0),u([f({type:ee,json:{write:!0}})],_.prototype,"emissiveTexture",void 0),u([f({type:te,json:{write:!0}})],_.prototype,"emissiveTextureTransform",void 0),u([f({type:ee,json:{write:!0}})],_.prototype,"occlusionTexture",void 0),u([f({type:te,json:{write:!0}})],_.prototype,"occlusionTextureTransform",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],_.prototype,"metallic",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],_.prototype,"roughness",void 0),u([f({type:ee,json:{write:!0}})],_.prototype,"metallicRoughnessTexture",void 0),u([f({type:te,json:{write:!0}})],_.prototype,"metallicRoughnessTextureTransform",void 0),_=je=u([B("esri.geometry.support.MeshMaterialMetallicRoughness")],_);const Pr=_;var J;let F=J=class extends ve{static from(e){return _e(J,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return dr(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},se.getLogger(this))}castMaterial(e){return _e(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?Pr:Ie,e)}clone(){return new J({faces:Te(this.faces),shading:this.shading,material:Te(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const n={faces:Te(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new J(n)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};u([f({json:{write:mr}})],F.prototype,"faces",void 0),u([Pe("faces")],F.prototype,"castFaces",null),u([f({type:Ie,json:{write:!0}})],F.prototype,"material",void 0),u([Pe("material")],F.prototype,"castMaterial",null),u([f({json:{write:!0}})],F.prototype,"name",void 0),u([f({type:String,json:{write:!0}})],F.prototype,"shading",void 0),u([f({type:Boolean})],F.prototype,"trustSourceNormals",void 0),F=J=u([B("esri.geometry.support.MeshComponent")],F);const K=F,Wr="Mesh must be loaded before applying operations",Nr="Provided component is not part of the list of components",Br="Expected polygon to be a Polygon instance",Q="Expected location to be a Point instance";class Ze extends re{constructor(){super("invalid-input:location",Q)}}function Hr(e,t,n){const r=zr(Ye,e,t,n)?Sr(Ye):[0,0,1];return Math.abs(r[2])>Math.cos(lr(80))?L.Z:Math.abs(r[1])>Math.abs(r[0])?L.Y:L.X}function zr(e,t,n,r){const o=(i=>!Array.isArray(i[0]))(t)?(i,a)=>t[3*i+a]:(i,a)=>t[i][a],s=r?cr(r)/ur(r):1;return Rr(e,(i,a)=>me(i,o(a,0)*s,o(a,1)*s,o(a,2)),n)}const Ye=Ar();function Vr(e){const t=Gr(e.rings,e.hasZ,de.CCW_IS_HOLE,e.spatialReference),n=new Array;let r=0,o=0;for(const a of t.polygons){const c=a.count,l=a.index,h=Yt(t.position,3*l,3*c),m=a.holeIndices.map(d=>d-l),p=ct(yr(h,m,3));n.push({position:h,faces:p}),r+=h.length,o+=p.length}const s=kr(n,r,o),i=Array.isArray(s.position)?Be(s.position,3,{originalIndices:s.faces}):Be(s.position.buffer,6,{originalIndices:s.faces});return s.position=qt(new Float64Array(i.buffer)),s.faces=i.indices,s}function kr(e,t,n){if(e.length===1)return e[0];const r=Oe(t),o=new Array(n);let s=0,i=0,a=0;for(const c of e){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(const l of c.faces)o[i++]=l+a;a=s/3}return{position:r,faces:ct(o)}}function Gr(e,t,n,r){const o=e.length,s=new Array(o),i=new Array(o),a=new Array(o);let c=0;for(let g=0;g<o;++g)c+=e[g].length;let l=0,h=0,m=0;const p=Oe(3*c);let d=0;for(let g=o-1;g>=0;g--){const y=e[g],b=n===de.CCW_IS_HOLE&&Zr(y,t,r);if(b&&o!==1)s[l++]=y;else{let M=y.length;for(let x=0;x<l;++x)M+=s[x].length;const T={index:d,pathLengths:new Array(l+1),count:M,holeIndices:new Array(l)};T.pathLengths[0]=y.length,y.length>0&&(a[m++]={index:d,count:y.length}),d=b?le(y,y.length-1,-1,p,d,y.length,t):le(y,0,1,p,d,y.length,t);for(let x=0;x<l;++x){const w=s[x];T.holeIndices[x]=d,T.pathLengths[x+1]=w.length,w.length>0&&(a[m++]={index:d,count:w.length}),d=le(w,0,1,p,d,w.length,t)}l=0,T.count>0&&(i[h++]=T)}}for(let g=0;g<l;++g){const y=s[g];y.length>0&&(a[m++]={index:d,count:y.length}),d=le(y,0,1,p,d,y.length,t)}return i.length=h,a.length=m,{position:p,polygons:i,outlines:a}}function le(e,t,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=e[t];r[o++]=c[0],r[o++]=c[1],r[o++]=i&&c[2]?c[2]:0,t+=n}return o/3}function Zr(e,t,n){if(!t)return!ae(e);const r=e.length-1;switch(Hr(e,r,n)){case L.X:return!ae(e,L.Y,L.Z);case L.Y:return!ae(e,L.X,L.Z);case L.Z:return!ae(e,L.X,L.Y)}}var de;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(de||(de={}));function Ue(e,t,n,r){if(r!==void 0){pr(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!ie(t)||r===o)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const oe=()=>se.getLogger("esri.geometry.support.meshUtils.centerAt");function Yr(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r}=e,o=n?.origin??e.origin,s=Ue(oe,r,o.spatialReference,n?.geographic);ie(r)?qr(e,t,o):s?Kr(e,t,o):Xr(e,t,o)}function qr(e,t,n){const{vertexSpace:r}=e;if(!ie(r))return;const o=Mt,s=Rt;if(!I(t,s,e.spatialReference))return void A(oe(),t.spatialReference,e.spatialReference,P);if(!I(n,o,e.spatialReference)){const a=e.origin;return o[0]=a.x,o[1]=a.y,o[2]=a.z,void A(oe(),n.spatialReference,e.spatialReference,P)}const i=xr(Qr,s,o);r.origin=vr(R(),r.origin,i)}function Kr(e,t,n){const r=Me(n.x,n.y,n.z??0),o=$e(e,new De({origin:r}));if(!o)return;const s=Me(t.x,t.y,t.z??0),i=$e({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new De({origin:s})},he.absolute);if(!i)return;const{position:a,normal:c,tangent:l}=i;e.vertexAttributes.position=a,e.vertexAttributes.normal=c,e.vertexAttributes.tangent=l,e.vertexAttributesChanged()}function Xr(e,t,n){const r=Mt,o=Rt;if(I(t,o,e.spatialReference)){if(!I(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void A(oe(),n.spatialReference,e.spatialReference,P)}Jr(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else A(oe(),t.spatialReference,e.spatialReference,P)}function Jr(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const Rt=R(),Mt=R(),Qr=R();function en(e){const{spatialReference:t,vertexSpace:n,untransformedBounds:r}=e,o=Kt(r,tn);if(ie(n)&&e.transform&&He(o,o,e.transform.localMatrix),n.type==="georeferenced"){const a=n.origin;return a&&Lr(o,o,a),Ne(Re(o),t)}const s=Ee(t),i=n.origin;if(!_r(s,t)){const[a,c,l]=i;return new Xt({xmin:a,ymin:c,zmin:l,xmax:a,ymax:c,zmax:l,spatialReference:t})}return xt(t,i,qe,s),He(o,o,qe),Dr(o,s,0,o,t,0),Ne(Re(o),t)}const qe=be(),tn=Oe(24);async function rn(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await ot(Se(()=>import("./loadGLTFMesh-C3-0Tu0H-BpdUtM9y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]),import.meta.url),n),s=await on(r,n);xe(n);const i=o(new O({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:nn(s),signal:n?.signal,expectedType:s.type,unitConversionDisabled:t.unitConversionDisabled});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:a,components:c}=await i;e.vertexAttributes=a,e.components=c}function nn(e){const t=Jt(e.url);return n=>{const r=Qt(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function on(e,t){if(Array.isArray(e)){if(!e.length)throw new re("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?an(e):ln(e,t)}return _t(e)}async function sn(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new ge(n[0].partUrl);const s=await e.toBlob(t);return xe(t),ge.fromBlob(s,jt(o,r))}function _t(e){return ge.fromBlob(e,jt(e.name,e.type))}function an(e){return $t(e.map(t=>({name:t.name,mimeType:t.type,source:_t(t)})))}async function ln(e,t){const n=await er(e.map(async r=>{const o=await sn(r);return xe(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(tr(t))throw n.forEach(r=>r.source.dispose()),rr();return $t(n)}const Dt=/^model\/gltf\+json$/,Lt=/^model\/gltf-binary$/,Fe=/\.gltf$/i,cn=/\.glb$/i;function Ke({mimeType:e,source:t,name:n}){return Dt.test(e)||Fe.test(n)?{url:t.url,type:"gltf"}:Lt.test(e)||cn.test(n)?{url:t.url,type:"glb"}:null}function $t(e){const t=new Map;let n=null,r=null;for(const s of e){const{source:i,name:a}=s;n??=Ke(s),a==="ESRI3DO_NORM.glb"&&(r=Ke(s)),t.set(a,i.url),i.files.forEach((c,l)=>t.set(l,c))}const o=r??n;if(o==null)throw new re("mesh-load-external:missing-files","Missing files to load external mesh source");return new ge(o.url,()=>e.forEach(({source:s})=>s.dispose()),t,o.type)}let ge=class Ct{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new Ct(r,()=>URL.revokeObjectURL(r),void 0,n)}};function jt(e,t){return Dt.test(t)||Fe.test(e)?"gltf":Lt.test(t)||Fe.test(e)?"glb":void 0}let E=class extends nr{constructor(e){super(e),this.externalSources=new or,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(sr(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!ze(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!$r(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Cr(t,e))}get _implicitDisplaySource(){return this.externalSources.find(ze)}};u([f()],E.prototype,"externalSources",void 0),u([f()],E.prototype,"displaySource",null),u([f()],E.prototype,"_implicitDisplaySource",null),u([f()],E.prototype,"_explicitDisplaySource",void 0),u([f()],E.prototype,"georeferenced",void 0),E=u([B("esri.geometry.support.meshUtils.Metadata")],E);function un(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=vn,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let c=0,l=0,h=0,m=0;for(let p=0;p<e.length;p++){const d=e[p],g=c/3;for(const b of t)a[m++]=g+b;const y=d.corners;for(let b=0;b<4;b++){const M=y[b];let T=0;i[h++]=.25*n[b][0]+d.uvOrigin[0],i[h++]=d.uvOrigin[1]-.25*n[b][1];for(let x=0;x<3;x++)d.axis[x]!==0?(o[c++]=.5*d.axis[x],s[l++]=d.axis[x]):(o[c++]=.5*M[T++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function pn(e,t){const n=e.components[0],r=n.faces,o=wn[t],s=6*o,i=new Array(6),a=new Array(r.length-6);let c=0,l=0;for(let h=0;h<r.length;h++)h>=s&&h<s+6?i[c++]=r[h]:a[l++]=r[h];if(e.vertexAttributes.uv!=null){const h=new Float32Array(e.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let d=0;d<p.length;d++)h[m+d]=p[d];e.vertexAttributes.uv=h}return e.components=[new K({faces:i,material:n.material}),new K({faces:a})],e}function hn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((t-1)*n*2));let c=0,l=0,h=0,m=0;for(let p=0;p<=t;p++){const d=p/t*Math.PI+.5*Math.PI,g=Math.cos(d),y=Math.sin(d);v[2]=y;const b=p===0||p===t,M=b?n-1:n;for(let T=0;T<=M;T++){const x=T/M*2*Math.PI;v[0]=-Math.sin(x)*g,v[1]=Math.cos(x)*g;for(let w=0;w<3;w++)o[c]=.5*v[w],s[c]=v[w],++c;i[l++]=(T+(b?.5:0))/n,i[l++]=p/t,p!==0&&T!==n&&(p!==t&&(a[h++]=m,a[h++]=m+1,a[h++]=m-n),p!==1&&(a[h++]=m,a[h++]=m-n,a[h++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function fn(e=0){const t=Math.round(16*2**e),n=4*(t+1)+2*t,r=new Float64Array(3*n),o=new Float32Array(3*n),s=new Float32Array(2*n),i=new Uint32Array(3*(4*t));let a=0,c=0,l=0,h=0,m=0;for(let p=0;p<=5;p++){const d=p===0||p===5,g=p<=1||p>=4,y=p===2||p===4,b=d?t-1:t;for(let M=0;M<=b;M++){const T=M/b*2*Math.PI,x=d?0:.5;v[0]=x*Math.sin(T),v[1]=x*-Math.cos(T),v[2]=p<=2?.5:-.5;for(let w=0;w<3;w++)r[a++]=v[w],o[c++]=g?w===2?p<=1?1:-1:0:w===2?0:v[w]/x;s[l++]=(M+(d?.5:0))/t,s[l++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,y||p===0||M===t||(p!==5&&(i[h++]=m,i[h++]=m+1,i[h++]=m-t),p!==1&&(i[h++]=m,i[h++]=m-t,i[h++]=m-t-1)),m++}}return{position:r,normal:o,uv:s,faces:i}}function mn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function dn(e){const t=X.facingAxisOrderSwap[e],n=X.position,r=X.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const h=t[l],m=Math.abs(h)-1,p=h>=0?1:-1;o[i]=n[c+m]*p,s[i]=r[c+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(X.uv),faces:new Uint32Array(X.faces),isPlane:!0}}const H=1,z=2,V=3,X={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[V,H,z],west:[-V,-H,z],north:[-H,V,z],south:[H,-V,z],up:[H,z,V],down:[H,-z,-V]}};function ce(e,t,n){e.isPlane||gn(e),xn(e,yn(n?.size,n?.unit,t.spatialReference));const r=fe(t,n),o=t.spatialReference.isGeographic?fe(t):r,s=$e({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new pe({...s,uv:e.uv}),vertexSpace:r,components:[new K({faces:e.faces,material:n?.material||null})],spatialReference:t.spatialReference}}function gn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function yn(e,t,n){const r=Mr(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function xn(e,t){if(t!=null){U[0]=t[0],U[4]=t[1],U[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)v[r]=e.position[n+r];Le(v,v,U);for(let r=0;r<3;r++)e.position[n+r]=v[r]}if(t[0]!==t[1]||t[1]!==t[2]){U[0]=1/t[0],U[4]=1/t[1],U[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)v[r]=e.normal[n+r];Le(v,v,U),wr(v,v);for(let r=0;r<3;r++)e.normal[n+r]=v[r]}}}}const vn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},wn={south:0,east:1,north:2,west:3,up:4,down:5},v=R(),U=vt(),W=()=>se.getLogger("esri.geometry.support.meshUtils.rotate");function bn(e,t,n){if(!e.vertexAttributes?.position||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=n?.origin??e.origin,i=n?.geographic,a=Ue(W,o,r,i);lt(e)?Tn(e,t,s):a?An(e,t,s):Sn(e,t,s)}function Tn(e,t,n){e.transform??=new ne;const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new O({x:i,y:a,z:c,spatialReference:s}),h=Z;if(l.equals(n))me(h,0,0,0);else if(!pt(h,n,e))return void A(W(),n.spatialReference,s,P);Or(et,ue(t),it(t));const m=wt(Xe,et,we,ir,h),{localMatrix:p}=o,d=bt(Xe,m,p);o.scale=Tt(R(),d),At(d,d,ut(Z,o.scale));const g=o.rotationAxis;o.rotation=at(d),o.rotationAngle===0&&(o.rotationAxis=g),o.translation=St(R(),d)}function An(e,t,n){const r=e.spatialReference,o=Ee(r),s=Ft;if(!I(n,s,o)&&(A(W(),n.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void A(W(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,m=c!=null?new Float32Array(c.length):null;xt(o,s,ye,o),jr(Qe,ye);const p=Je;Le(ue(Je),ue(t),Qe),p[3]=t[3],ht(i,r,l,o)&&(a==null||h==null||ft(a,i,r,l,o,h))&&(c==null||m==null||mt(c,i,r,l,o,m))?(q(l,p,3,s),dt(l,o,i,r)&&(a==null||h==null||(q(h,p,3),gt(h,i,r,l,o,a)))&&(c==null||m==null||(q(m,p,4),yt(m,i,r,l,o,c)))?e.vertexAttributesChanged():A(W(),o,r)):A(W(),r,o)}function Sn(e,t,n){const r=Ft;if(!I(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void A(W(),n.spatialReference,e.spatialReference,P)}q(e.vertexAttributes.position,t,3,r),q(e.vertexAttributes.normal,t,3),q(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function q(e,t,n,r=we){if(e!=null){Fr(ye,it(t),ue(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)Z[s]=e[o+s]-r[s];br(Z,Z,ye);for(let s=0;s<3;s++)e[o+s]=Z[s]+r[s]}}}const Z=R(),Xe=be(),Je=st(),ye=be(),Qe=vt(),Ft=R(),et=Er(),N=()=>se.getLogger("esri.geometry.support.meshUtils.scale");function Rn(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r,spatialReference:o}=e,s=n?.origin??e.origin,i=n?.geographic,a=Ue(N,r,o,i);lt(e)?Mn(e,t,s):a?_n(e,t,s):Dn(e,t,s)}function Mn(e,t,n){e.transform??=new ne;const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new O({x:i,y:a,z:c,spatialReference:s}),h=Y;if(l.equals(n))me(h,0,0,0);else if(!pt(h,n,e))return void A(N(),n.spatialReference,s,P);const m=me(Ln,t,t,t),p=wt(tt,Ir,we,m,h),{localMatrix:d}=o,g=bt(tt,p,d);o.scale=Tt(R(),g),At(g,g,ut(Y,o.scale));const y=o.rotationAxis;o.rotation=at(g),o.rotationAngle===0&&(o.rotationAxis=y),o.translation=St(R(),g)}function _n(e,t,n){const r=e.spatialReference,o=Ee(r),s=Et;if(!I(n,s,o)&&(A(N(),n.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void A(N(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,m=c!=null?new Float32Array(c.length):null;ht(i,r,l,o)&&(a==null||h==null||ft(a,i,r,l,o,h))&&(c==null||m==null||mt(c,i,r,l,o,m))?(Ot(l,t,s),dt(l,o,i,r)&&(a==null||h==null||gt(h,i,r,l,o,a))&&(c==null||m==null||yt(m,i,r,l,o,c))?e.vertexAttributesChanged():A(N(),o,r)):A(N(),r,o)}function Dn(e,t,n){const r=Et;if(!I(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void A(N(),n.spatialReference,e.spatialReference,P)}Ot(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function Ot(e,t,n=we){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)Y[o]=e[r+o]-n[o];Tr(Y,Y,t);for(let o=0;o<3;o++)e[r+o]=Y[o]+n[o]}}const Y=R(),Ln=R(),tt=be(),Et=R();var D;const It="esri.geometry.Mesh";function C(){return se.getLogger(It)}const $n={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:he,local:De}};let S=D=class extends Bt.LoadableMixin(Ht(ar)){constructor(e){super(e),this.components=null,this.vertexSpace=new he,this.transform=null,this.metadata=new E,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new pe,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(zt(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,n=this;return en({get transform(){return n.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||t?.length===0?Vt(kt):Re(e)}get origin(){const e=gr(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new O({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(K.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}C().error("removeComponent()",Nr)}}rotate(e,t,n,r){return hr(e,t,n,rt),bn(this,rt,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o?.position;if(!s)return this;if(ie(r)){const[i,a,c]=r.origin;r.origin=Me(i+e,a+t,c+n)}else{for(let i=0;i<s.length;i+=3)s[i]+=e,s[i+1]+=t,s[i+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(Rn(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Yr(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(rn(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,n){let r=null;if(this.components){const s=new Map,i=new Map;r=this.components.map(a=>a.cloneWithDeduplication(s,i))}const o={components:r,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:n?.preserveMetadata?this.metadata.clone():new E};return new D(o)}cloneShallow(){return new D({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([Se(()=>import("./gltfexport-Dj6nF2RN-Znu1KAZV.js"),__vite__mapDeps([44,1,2,3,4,24,7,25,6,11,15,30,5,23,20,31,32,33,34,35,10,12,16,13,14,17,21,26,27,36,37,9,38,29,39,40,8,41,42,43]),import.meta.url),this.load(e)]);return xe(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(C().error(e,Wr),!1)}static createBox(e,t){if(!(e instanceof O))return C().error(".createBox()",Q),null;const n=new D(ce(un(),e,t));return t?.imageFace&&t.imageFace!=="all"?pn(n,t.imageFace):n}static createSphere(e,t){return e instanceof O?new D(ce(hn(t?.densificationFactor||0),e,t)):(C().error(".createSphere()",Q),null)}static createCylinder(e,t){return e instanceof O?new D(ce(fn(t?.densificationFactor||0),e,t)):(C().error(".createCylinder()",Q),null)}static createPlane(e,t){if(!(e instanceof O))return C().error(".createPlane()",Q),null;const n=t?.facing??"up",r=mn(n,t?.size);return new D(ce(dn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof Gt))return C().error(".createFromPolygon()",Br),null;const n=Vr(e);return new D({vertexAttributes:new pe({position:n.position}),components:[new K({faces:n.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new he})}static async createFromGLTF(e,t,n){if(!(e instanceof O)){const o=new Ze;throw C().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await ot(Se(()=>import("./loadGLTFMesh-C3-0Tu0H-BpdUtM9y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]),import.meta.url),n);return new D(await r(e,t,n))}static async createFromFiles(e,t,n){Zt(C(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>C().error(".createFromFiles()",o.message);if(!(e instanceof O)){const o=new Ze;throw r(o),o}if(!n?.layer)throw new re("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){const r=n?.extent??null,{spatialReference:o}=e,s=n?.transform?.clone()??new ne,i=fe(e,n),a=n?.unitConversionDisabled,c={source:t,extent:r,unitConversionDisabled:a},l=new E;return l.externalSources.push(c),new D({metadata:l,transform:s,vertexSpace:i,spatialReference:o})}static createIncomplete(e,t){const{spatialReference:n}=e,r=t?.transform?.clone()??new ne,o=fe(e,t),s=new D({transform:r,vertexSpace:o,spatialReference:n});return s.addResolvingPromise(Promise.reject(new re("mesh-incomplete","Mesh resources are not complete"))),s}};u([f({type:[K],json:{write:!0}})],S.prototype,"components",void 0),u([f({nonNullable:!0,types:$n,constructOnly:!0,json:{write:!0}})],S.prototype,"vertexSpace",void 0),u([f({type:ne,json:{write:!0}})],S.prototype,"transform",void 0),u([f({constructOnly:!0})],S.prototype,"metadata",void 0),u([f()],S.prototype,"hasExtent",null),u([f()],S.prototype,"_transformedExtent",null),u([f()],S.prototype,"_untransformedBounds",null),u([f()],S.prototype,"origin",null),u([f({readOnly:!0,json:{read:!1}})],S.prototype,"extent",null),u([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],S.prototype,"hasZ",void 0),u([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],S.prototype,"hasM",void 0),u([f({type:pe,nonNullable:!0,json:{write:!0}})],S.prototype,"vertexAttributes",void 0),S=D=u([B(It)],S);const rt=st(),no=S;export{no as F,ee as G,te as V,Pr as m,K as z};
