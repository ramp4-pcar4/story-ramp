const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mediaLayerUtils-CasWezAG-C0VNnsqq.js","./utils-BVWK2jiA-CvHfgMdD.js","./story-BLxSf89q.js","./main-CYSS3xlj.js","./main-Cypivj38.css","./story-DnycVwut.css","./originUtils-BLsWtgV9-B4sclfuf.js","./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js","./PortalItem-CctGdnxF-rYalk9pw.js","./jsonContext-BA8GHqVk-BL16qANp.js","./portalItemUtils-B8bw6SAG-SJxuD5AV.js","./projection-BA9M1R7d-CPQOwsSQ.js","./projectBuffer-CvCBvJ6W-BwklEwff.js","./saveUtils-CIYk-dsQ-AvAlTEt-.js","./resourceUtils-BmW6QqlX-BOK5d4L1.js","./uuid-Dj9mdEVg-BaKSCiyT.js","./resourceUtils-rTM6Iemx-DbibayAm.js"])))=>i.map(i=>d[i]);
import{_ as Ve}from"./main-CYSS3xlj.js";import{v as i,i as R,S as l,w as d,bA as Ae,J as ae,o as x,a1 as W,as as w,a0 as K,ac as Z,l as ce,n as ue,aH as We,ag as ne,aB as Re,at as Be,I as Ge,ah as ze,$ as Ue,am as De,aC as Je,gH as ke,jb as Fe,bp as Ke,bP as F,ad as qe,aP as _e,e as Ye,B as Xe,jM as fe,bO as Ze,a4 as Qe,dY as ye,jD as be,jC as et,cx as Ie,cw as pe,cO as de,jN as tt,f as Oe,bX as nt,Y as ot,A as rt,bZ as ge,jO as it}from"./story-BLxSf89q.js";import{m as Se}from"./MultiOriginJSONSupport-DKRh9P6w-DF8uOJEj.js";import{D as st}from"./Layer-ChoECxvZ-BFMdrPyf.js";import{u as lt}from"./BlendLayer-D1WkSmwP-m-zDz2JY.js";import{E as at}from"./OperationalLayer-B5IXiMa2-BMKrudQ3.js";import{C as ct}from"./PortalLayer-CElnYuSQ-CTYdaab-.js";import{S as ut}from"./ScaleRangeLayer-Bz0DcnvM-D991fst3.js";import{K as O,M as Ee,o as pt}from"./perspectiveUtils-Bu88xlbg-CHr2ybys.js";import{k as dt}from"./mat3-CC4Foazl-BWjyqE2v.js";import{o as ht,n as oe}from"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{m as N,P as z,I as ve}from"./vec2-tHZ6OaOy-xCj1obDt.js";import{o as b,e as Q}from"./vec2f64-CeODonrJ-CkkJCdRC.js";import{V as q,N as mt,K as ft}from"./projection-BA9M1R7d-CPQOwsSQ.js";import{T as yt}from"./imageUtils-BA2D6Uf1-D3m5akD5.js";import{r as gt}from"./uuid-Dj9mdEVg-BaKSCiyT.js";import{r as vt}from"./common-CYWrYyJl-E8-sukrT.js";import{e as Pt}from"./resourceExtension-CdQvIDKV-D3nhiAvg.js";import{r as wt}from"./BoundsStore--N6o1xkF-DjJRdHqA.js";import{E as ee}from"./interfaces-Cwm0pihk-Ptzy6gTd.js";import"./TimeExtent-Cn0Jofqr-BCYLzpIt.js";import"./jsonUtils-wIllKWI4-B1rpXKOA.js";import"./parser-DyDJ-rlI-6l95dcXY.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-Di5_MXEG.js";import"./commonProperties-BtIqvFU_-5NlLRpI4.js";import"./ElevationInfo-yv2-9tj6-D29JO7GZ.js";import"./lengthUtils-DKpMe5qR-USe4CVwz.js";import"./PortalItem-CctGdnxF-rYalk9pw.js";import"./portalItemUtils-B8bw6SAG-SJxuD5AV.js";import"./normalizeUtilsSync-CBU7m8rm-C-Q2bJLP.js";import"./normalizeUtilsCommon-CRJlkfEA-BRSq5sv4.js";import"./vec32-D9GsKZ1t-CUrr96dK.js";import"./projectBuffer-CvCBvJ6W-BwklEwff.js";import"./PooledRBush-DbfAmeLn-DI7UjaWX.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";let se=class extends _e{projectOrWarn(e,t){if(e==null)return e;const{geometry:n,pending:o}=q(e,t);return o?null:o||n?n:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};se=i([R("esri.layers.support.GeoreferenceBase")],se);const Y=se,re=oe(),p=b();let J=class extends Ye{};i([l({type:Number,json:{write:!0}})],J.prototype,"x",void 0),i([l({type:Number,json:{write:!0}})],J.prototype,"y",void 0),J=i([R("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],J);let k=class extends _e{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([l()],k.prototype,"sourcePoint",void 0),i([l({type:d})],k.prototype,"mapPoint",void 0),k=i([R("esri.layers.support.ControlPointsGeoreference.ControlPoint")],k);let v=class extends Ae(Y){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=ae.fromJSON(t.spatialReference),o=ht(...t.coefficients,1);return e.map(r=>(N(p,r.x,r.y),O(p,p,o),{sourcePoint:r,mapPoint:new d({x:p[0],y:p[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&f(e[0])&&(t.controlPoints=e.map(r=>{const s=r.sourcePoint;return{x:s.x,y:s.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new x("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(re);if(e==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return It(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!f(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[r,s,a,c]]}=e,u={sourcePoint:w(0,o),mapPoint:new d({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:w(0,0),mapPoint:new d({x:s[0],y:s[1],spatialReference:t})},y={sourcePoint:w(n,0),mapPoint:new d({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:w(n,o),mapPoint:new d({x:c[0],y:c[1],spatialReference:t})};f(u)&&f(h)&&f(y)&&f(g)&&(Pe(re,u,h,y,g),this.controlPoints=this.controlPoints.map(({sourcePoint:I})=>(N(p,I.x,I.y),O(p,p,re),{sourcePoint:I,mapPoint:new d({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:dt(oe(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;N(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return O(p,p,this.transform),new d({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=q(e,t).geometry)==null?null:(N(p,e.x,e.y),O(p,p,this.inverseTransform),w(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[r,s,a,c]=t;if(!f(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(s,u),y=this._projectControlPoint(a,u),g=this._projectControlPoint(c,u);if(!h.valid||!y.valid||!g.valid||!f(h.controlPoint))return null;e==null&&(e=oe());let I=null;return I=f(y.controlPoint)&&f(g.controlPoint)?Pe(e,r,h.controlPoint,y.controlPoint,g.controlPoint):f(y.controlPoint)?Rt(e,r,h.controlPoint,y.controlPoint):xt(e,r,h.controlPoint),I.every(Ne=>Ne===0)?null:I}_projectControlPoint(e,t){if(!f(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:r,pending:s}=q(o,t);return s?{valid:!1,controlPoint:null}:s||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function f(e){return e?.sourcePoint!=null&&e.mapPoint!=null}i([l({type:[k],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[J]},coefficients:{type:[Number]},spatialReference:{type:ae}}}}})],v.prototype,"controlPoints",void 0),i([K("controlPoints")],v.prototype,"readControlPoints",null),i([Z("controlPoints")],v.prototype,"writeControlPoints",null),i([l({clonable:!1})],v.prototype,"coords",null),i([l({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"height",void 0),i([l({readOnly:!0})],v.prototype,"inverseTransform",null),i([l({readOnly:!0})],v.prototype,"transform",null),i([l({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"width",void 0),v=i([R("esri.layers.support.ControlPointsGeoreference")],v);const S=b(),E=b(),V=b(),C=b(),M=b(),L=b(),A=b(),H=b(),te=Math.PI/2;function j(e,t,n){N(e,n.sourcePoint.x,n.sourcePoint.y),N(t,n.mapPoint.x,n.mapPoint.y)}function xt(e,t,n){return j(S,M,t),j(E,L,n),z(V,E,S,te),z(C,S,E,te),z(A,L,M,-te),z(H,M,L,-te),he(e,S,E,V,C,M,L,A,H)}function Rt(e,t,n,o){return j(S,M,t),j(E,L,n),j(V,A,o),ve(C,S,E,.5),z(C,V,C,Math.PI),ve(H,M,L,.5),z(H,A,H,Math.PI),he(e,S,E,V,C,M,L,A,H)}function Pe(e,t,n,o,r){return j(S,M,t),j(E,L,n),j(V,A,o),j(C,H,r),he(e,S,E,V,C,M,L,A,H)}const _t=new Array(8).fill(0),bt=new Array(8).fill(0);function we(e,t,n,o,r){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=r[0],e[7]=r[1],e}function he(e,t,n,o,r,s,a,c,u){return Ee(e,we(_t,t,n,o,r),we(bt,s,a,c,u))}function It(e,t,n,o){const r=Q(0,n),s=Q(0,0),a=Q(t,0),c=Q(t,n);return O(r,r,e),O(s,s,e),O(a,a,e),O(c,c,e),new ce({rings:[[r,s,a,c,r]],spatialReference:o})}const X=v,U=b();let T=class extends Y{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:o}=this;if(e==null||t==null||n==null||o==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),t==null||n==null||o==null?null:new ce({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[o.x,o.y],[n.x,n.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const n=t.spatialReference;if((e=this.projectOrWarn(e,n))==null)return;const{rings:[[o,r,s,a]]}=e;this.bottomLeft=new d({x:o[0],y:o[1],spatialReference:n}),this.topLeft=new d({x:r[0],y:r[1],spatialReference:n}),this.topRight=new d({x:s[0],y:s[1],spatialReference:n}),this.bottomRight=new d({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:o,bottomLeft:r}=this;if(e==null||t==null||n==null||o==null||r==null)return null;const s=t.spatialReference;e=e.normalize();const a=q(e,s).geometry;if(a==null)return null;N(U,a.x,a.y);const c=Ee(oe(),[t.x,t.y,r.x,r.y,n.x,n.y,o.x,o.y],[0,0,0,1,1,0,1,1]);return O(U,U,c),w(U[0],U[1])}};i([l({clonable:!1})],T.prototype,"coords",null),i([l({type:d})],T.prototype,"bottomLeft",void 0),i([l({type:d})],T.prototype,"bottomRight",void 0),i([l({type:d})],T.prototype,"topLeft",void 0),i([l({type:d})],T.prototype,"topRight",void 0),T=i([R("esri.layers.support.CornersGeoreference")],T);const Ot=T;let B=class extends Y{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:r}=this.extent;let s;if(this.rotation){const{x:a,y:c}=this.extent.center,u=ie(a,c,this.rotation);s=[u(e,t),u(e,o),u(n,o),u(n,t)],s.push(s[0])}else s=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new ce({rings:[s],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[n,o,r]],extent:{center:{x:s,y:a}}}=e,c=Xe(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=ie(s,a,-c),[h,y]=u(n[0],n[1]),[g,I]=u(r[0],r[1]);this.extent=new ue({xmin:h,ymin:y,xmax:g,ymax:I,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(e==null||t==null)return null;const{xmin:o,ymin:r,xmax:s,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=q(e,u).geometry;if(h==null)return null;let y=h.x,g=h.y;return n&&([y,g]=ie(c.x,c.y,-n)(y,g)),w(fe(y,o,s,0,1),fe(g,a,r,0,1))}};function ie(e,t,n){const o=vt(n),r=Math.cos(o),s=Math.sin(o);return(a,c)=>[r*(a-e)+s*(c-t)+e,r*(c-t)-s*(a-e)+t]}i([l({clonable:!1})],B.prototype,"coords",null),i([l({type:ue})],B.prototype,"extent",void 0),i([l({type:Number})],B.prototype,"rotation",void 0),B=i([R("esri.layers.support.ExtentAndRotationGeoreference")],B);const St=B;function Et(e){return e?.type==="media"}function Me(e,t){const n=Ze(t);return Et(e)&&!!e.portalItem&&n!=null&&n>F.PORTAL_ITEM}function Mt(e,t,n){if(!e||e.type==="control-points")return e;const{coords:o}=e;if(o?.rings[0]?.length!==5)return null;const[r,s,a,c]=o.rings[0],{spatialReference:u}=o;return new X({controlPoints:[{mapPoint:new d({x:r[0],y:r[1],spatialReference:u}),sourcePoint:w(0,n)},{mapPoint:new d({x:s[0],y:s[1],spatialReference:u}),sourcePoint:w(0,0)},{mapPoint:new d({x:a[0],y:a[1],spatialReference:u}),sourcePoint:w(t,0)},{mapPoint:new d({x:c[0],y:c[1],spatialReference:u}),sourcePoint:w(t,n)}],width:t,height:n})}function Le(e,t,n){return{enabled:!Me(n?.layer,n?.origin),ignoreOrigin:!0}}const je={json:{name:"url",type:String,write:{overridePolicy:Le}}},Te={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:Le}}},Lt={types:{key:"type",base:Y,typeMap:{"control-points":X,corners:Ot,"extent-and-rotation":St}},json:{types:{key:"type",base:Y,typeMap:{"control-points":X}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let $=class extends We(Se(Re)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return X.fromJSON(e)}writeGeoreference(e,t,n,o){const r=o?.resources?.pendingOperations,s=()=>{const a=Mt(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),a.controlPoints?.length!==4&&o?.messages)return void o.messages.push(new x("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[n]=a.write({},o)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[n]={},void r.push(this.load().then(s));s()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:o}=this;if(e==null||t==null||n===0||o===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=n,r.y*=o,r)}};i([l(Lt)],$.prototype,"georeference",void 0),i([K("georeference")],$.prototype,"readGeoreference",null),i([Z("georeference")],$.prototype,"writeGeoreference",null),i([l({json:{read:!1,write:!1}})],$.prototype,"opacity",void 0),$=i([R("esri.layers.support.MediaElementBase")],$);const me=$;let P=class extends me{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if(typeof e=="string"){const t=yt(e).then(n=>{this._set("content",n)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new x("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,n){return Qe(t.url,n)}writeImage(e,t,n,o){if(e==null)return;const r=o?.portalItem,s=o?.resources;if(!r||!s)return void(typeof e=="string"&&(t[n]=ye(e,o)));const a=jt(e)?e:null;if(a){if(be(a)==null)return void(t[n]=a);const c=ye(a,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},et.NO);if(r&&c&&!Ie(c))return s.toKeep.push({resource:r.resourceFromPath(c),compress:!1}),void(t[n]=c)}t[n]="<pending>",s.pendingOperations.push(Tt(e).then(c=>{const u=Ht(c,r);t[n]=u.itemRelativeUrl,s.toAdd.push({resource:u,content:{type:"blob",blob:c},compress:!1,finish:h=>{this.image=h.url}})}))}};i([l()],P.prototype,"animationOptions",void 0),i([l({readOnly:!0})],P.prototype,"content",void 0),i([l({readOnly:!0})],P.prototype,"contentWidth",null),i([l({readOnly:!0})],P.prototype,"contentHeight",null),i([l(je)],P.prototype,"image",void 0),i([K("image",["url"])],P.prototype,"readImage",null),i([Z("image")],P.prototype,"writeImage",null),i([l(Te)],P.prototype,"type",void 0),P=i([R("esri.layers.support.ImageElement")],P);const Ce=P;function jt(e){return typeof e=="string"&&!pe(e)&&!de(e)}async function Tt(e){return typeof e=="string"?pe(e)?tt(e):(await Oe(e,{responseType:"blob"})).data:new Promise(t=>Ct(e).toBlob(t))}function Ct(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),o}function Ht(e,t){const n=gt(),o=`${nt("media",n)}.${Pt({type:"blob",blob:e})}`;return t.resourceFromPath(o)}let _=class extends me{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;return typeof e=="string"?this.addResolvingPromise(this._preProcessVideoUrl(e).then(t=>{const n=document.createElement("video");return n.src=t,n.crossOrigin="anonymous",n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,this._loadVideo(n).then(()=>{this._set("content",n)})})):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new x("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,t,n,o){if(!e)return void(o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source is missing")));const r=$t(e)?e:null;if(!r)return void(o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source must be an absolute url")));!Ie(r)&&o?.blockedRelativeUrls&&o.blockedRelativeUrls.push(r);const s=ot(r);be(s)?o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source cannot be an item resource")):t[n]=s}async _preProcessVideoUrl(e){if(rt(e))return ge(e);try{return await Oe(e,{method:"head"}),e}catch{return ge(e,!0)}}_loadVideo(e){return new Promise((t,n)=>{const o=it(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()});this.addHandles(o,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",de(e.src)||(e.src=e.src))})}};i([l()],_.prototype,"autoplay",void 0),i([l({readOnly:!0})],_.prototype,"content",void 0),i([l({readOnly:!0})],_.prototype,"contentWidth",null),i([l({readOnly:!0})],_.prototype,"contentHeight",null),i([l(je)],_.prototype,"video",null),i([Z("video")],_.prototype,"writeVideo",null),i([l(Te)],_.prototype,"type",void 0),_=i([R("esri.layers.support.VideoElement")],_);const He=_;function $t(e){return typeof e=="string"&&!pe(e)&&!de(e)}const Nt={key:"type",defaultKeyValue:"image",base:me,typeMap:{image:Ce,video:He}},xe=ne.ofType(Nt);let G=class extends Re.LoadableMixin(Be(Ge.EventedAccessor)){constructor(e){super(e),this._index=new wt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const r=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const r=new pt({spatialReference:n,element:o});this._elementViewsMap.set(o,r);const s=ze(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(s,r)}this._elementsIndexes.clear(),this.elements.forEach((o,r)=>this._elementsIndexes.set(o,r)),this.emit("refresh")},this.elements=new xe}async load(e){if(Ue(e),!this.spatialReference){const t=this.elements.find(n=>n.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",De(e,this._get("elements"),xe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await mt(e.spatialReference,this.spatialReference,null,t);const n=Je(e.spatialReference,this.spatialReference)?e:ft(e,this.spatialReference);if(!n)return[];const o=n.normalize(),r=[];for(const s of o)this._index.forEachInBounds(ke(s),({normalizedCoords:a,element:c})=>{a!=null&&Fe(s,a)&&r.push(c)});return r.sort((s,a)=>this._elementsIndexes.get(s)-this._elementsIndexes.get(a)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),r=n!=null;this._index.delete(e),r&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([l()],G.prototype,"elements",null),i([l({readOnly:!0})],G.prototype,"fullExtent",null),i([l()],G.prototype,"spatialReference",null),G=i([R("esri.layers.support.LocalMediaElementSource")],G);const D=G;function le(e){return typeof e=="object"&&e!=null&&"type"in e}function $e(e){return le(e)&&(e.type==="image"||e.type==="video")}let m=class extends lt(ut(at(ct(Se(st))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=Ke(async(t,n,o)=>{const{save:r,saveAs:s}=await Ve(()=>import("./mediaLayerUtils-CasWezAG-C0VNnsqq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url);switch(t){case ee.SAVE:return r(this,n);case ee.SAVE_AS:return s(this,o,n)}}),this.source=new D}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new x("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),this.setAtOrigin("source",n,"web-scene"),t=n);const o=le(t)?new D({elements:new ne([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference),await o.load(e),this.spatialReference=o.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new D({elements:new ne(e)}):e instanceof ne?new D({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const o=this._createSource(t);return o?.read(t,n),o}writeSource(e,t,n,o){if(e&&e instanceof D){const r=e.elements.length;if(r!==1)return void(o?.messages&&o.messages.push(new x("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}$e(e)?e.write(t,o):o?.messages&&(e?o.messages.push(new x("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):o.messages.push(new x("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(ee.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ee.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Ce;case"video":return new He}return null}_getSourceOverride(e,t){if(le(e)&&this.originIdOf("source")===F.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===F.WEB_MAP||this.originIdOf("georeference")===F.WEB_SCENE)){const n=e.toJSON(),o=this._createSource(n);return o.read({...n},{origin:"portal-item"}),o.read({georeference:t},{origin:"web-map"}),o.read({georeference:t},{origin:"web-scene"}),o}return null}};i([l({readOnly:!0})],m.prototype,"effectiveSource",void 0),i([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],m.prototype,"georeference",void 0),i([K("web-document","georeference")],m.prototype,"readGeoreference",null),i([l({type:String})],m.prototype,"copyright",void 0),i([l({readOnly:!0})],m.prototype,"fullExtent",null),i([l({type:["MediaLayer"]})],m.prototype,"operationalLayerType",void 0),i([l({type:["show","hide"]})],m.prototype,"listMode",void 0),i([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:X}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:Me(this,n?.origin)&&$e(e)&&!!e.georeference&&e.originIdOf("georeference")>F.PORTAL_ITEM}}}}})],m.prototype,"source",null),i([qe("source")],m.prototype,"castSource",null),i([K("source",["url"])],m.prototype,"readSource",null),i([Z("source")],m.prototype,"writeSource",null),i([l()],m.prototype,"spatialReference",void 0),i([l({readOnly:!0})],m.prototype,"type",void 0),m=i([R("esri.layers.MediaLayer")],m);const wn=m;export{wn as default};
