import{aa as L,ab as N,v as t,S as o,ad as ce,i as m,jy as ot,bB as j,ar as k,ag as c,am as de,ae as le,bl as ae,J as Me,a1 as q,W as rt,o as fe,n as Oe,hZ as ie,a0 as Te,bL as st,e as g,P as te,aC as nt,w as be,il as lt,dg as at}from"./story-BJQwqSiV.js";import{m as pt}from"./MultiOriginJSONSupport-DKRh9P6w-B2Q7wyTx.js";import{l as Re,A as Ce,w as Be,r as ut,x as ct,q as dt,j as yt}from"./vec32-D9GsKZ1t-DFKAiR2i.js";import{D as ht}from"./Layer-ChoECxvZ-DRXkRmjE.js";import{n as mt}from"./APIKeyMixin-BUMSx9ny-WICjqNrS.js";import{a as gt}from"./ArcGISService-BYA-y6X6-CLqA4JiC.js";import{i as vt}from"./CustomParametersMixin-vdKsTHer-BkN2YjJf.js";import{E as ft}from"./OperationalLayer-B5IXiMa2-D0-1P6bg.js";import{C as bt}from"./PortalLayer-CElnYuSQ-CHsssXgt.js";import{S as St}from"./ScaleRangeLayer-Bz0DcnvM-DHTqt1wH.js";import{W as xt}from"./SceneService-BZqGtWmG-DWUKnow2.js";import{j as wt}from"./arcgisLayerUrl-HNYh8jvG-CPalqiCd.js";import{_ as Vt,Z as jt}from"./commonProperties-BtIqvFU_-D8Pbg3zV.js";import{y as W}from"./Field-C6hA1tZj-BlA5l38n.js";import{o as Nt}from"./FieldsIndex-HmzMbJQG-HnpcVBj4.js";import{w as Ee,r as zt}from"./TimeInfo-w_HB2CsF-BG3JxBMn.js";import{c as z}from"./Cyclical-C_9rKUUQ-CjxL21WM.js";import{C as It}from"./persistable-C6RBwzJi-CMXPh-pW.js";import{A as Se,_ as Rt}from"./quat-BODLR7mS-CtZce9Oj.js";import{e as me}from"./quatf64-C16JxGFv-BKWK1F8U.js";import{u as Ae,r as De}from"./common-CYWrYyJl-E8-sukrT.js";import{k as ke,j as Pe}from"./TimeExtent-Cn0Jofqr-xF8LFpvf.js";import{w as Tt}from"./popupUtils-B0uZcXX0-CxbDDXj6.js";import"./main-BWo3aSQp.js";import"./PortalItem-CctGdnxF-DvUg7fiW.js";import"./portalItemUtils-B8bw6SAG-dsWODygj.js";import"./projection-BA9M1R7d-DLC6A_As.js";import"./projectBuffer-CvCBvJ6W-3LRoemO2.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./HeightModelInfo-C5vFqzyF-c2zC2rTf.js";import"./jsonContext-BA8GHqVk-CRz0eL7h.js";import"./resourceUtils-BmW6QqlX-BrBqK2K7.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./resourceUtils-rTM6Iemx-DFX7GB5y.js";import"./saveUtils-CIYk-dsQ-D55wFEYN.js";import"./ElevationInfo-yv2-9tj6-iPgeVlN9.js";import"./lengthUtils-DKpMe5qR-Bi8kQzuw.js";import"./fieldType-CD2CL2hr-VAROaSEG.js";import"./UnknownTimeZone-C--TOcPG-DeqW2GL-.js";import"./MD5-CHHr-oed-SuyrCYQ0.js";import"./resourceExtension-CdQvIDKV-DIBQ1JkJ.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";const v=at(),qe=me(),Le=me(),$e=me(),Ue=ie(0,0,1),At=ie(0,1,0),Dt=ie(1,0,0);function J(e){Ce(v,e),Re(v,v);const i=Math.atan2(v[1],v[0]),r=Se(me(),Ue,-i);Be(v,v,r);const s=-1*Math.atan2(v[2],v[0]);return[Ae(i)+270,Ae(s)+90]}function ye(e,i){return Se(Le,Ue,De(e-270)),Se($e,At,De(i-90)),Rt(qe,Le,$e),Ce(v,Dt),Be(v,v,qe),Re(v,v),[v[0],v[1],v[2]]}let R=class extends L(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(e),0,!0)}set orientation(e){const i=ye(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(i),0,!0)}set tilt(e){const i=ye(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{write:!0}})],R.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],R.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>z.normalize(N(e),0,!0))],R.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>z.normalize(N(e),0,!0))],R.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],R.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],R.prototype,"point",void 0),R=t([m("esri.layers.voxel.VoxelSlice")],R);const he=R;let b=class extends L(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(i),0,!0)}};t([o({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),t([o({type:String,json:{origins:{service:{read:ot}},write:{enabled:!0,isRequired:!0}}}),It({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],b.prototype,"label",void 0),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),t([o({type:[j],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),t([o({type:[he],json:{write:!0}})],b.prototype,"slices",void 0),t([o({type:j,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=t([m("esri.layers.voxel.VoxelSection")],b);const xe=b;let H=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],H.prototype,"diffuseFactor",void 0),t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],H.prototype,"specularFactor",void 0),H=t([m("esri.layers.voxel.VoxelSimpleShading")],H);const We=H;let T=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};t([o({type:["discrete","continuous"],json:{write:!0}})],T.prototype,"continuity",void 0),t([o({type:Boolean,json:{write:!0}})],T.prototype,"hasNoData",void 0),t([o({type:Number,json:{write:!0}})],T.prototype,"noData",void 0),t([o({type:Number,json:{write:!0}})],T.prototype,"offset",void 0),t([o({type:Number,json:{write:!0}})],T.prototype,"scale",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"type",void 0),T=t([m("esri.layers.voxel.VoxelFormat")],T);const Fe=T;let V=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],V.prototype,"description",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"name",void 0),t([o({type:Fe,json:{write:!0}})],V.prototype,"originalFormat",void 0),t([o({type:Fe,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"renderingFormat",void 0),t([o({type:String,json:{write:!0}})],V.prototype,"unit",void 0),t([o({type:Number,json:{write:!0}})],V.prototype,"volumeId",void 0),t([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],V.prototype,"type",void 0),V=t([m("esri.layers.voxel.VoxelVariable")],V);const Pt=V;let _=class extends L(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};t([o({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],_.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],_.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],_.prototype,"label",void 0),t([o({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"colorLocked",void 0),_=t([m("esri.layers.voxel.VoxelIsosurface")],_);const Je=_;let X=class extends L(g){constructor(){super(...arguments),this.color=null,this.position=0}};t([o({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],X.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],X.prototype,"position",void 0),X=t([m("esri.layers.voxel.VoxelColorStop")],X);const we=X;let Y=class extends L(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};t([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],Y.prototype,"opacity",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"position",void 0),Y=t([m("esri.layers.voxel.VoxelOpacityStop")],Y);const Ve=Y;let Q=class extends L(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};t([o({type:Boolean,json:{default:!1,write:!0}})],Q.prototype,"enabled",void 0),t([o({type:[Number],json:{write:!0}})],Q.prototype,"range",void 0),Q=t([m("esri.layers.voxel.VoxelRangeFilter")],Q);const qt=Q;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let A=class extends L(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(we)),this.opacityStops=new(c.ofType(Ve))}set colorStops(e){this._set("colorStops",de(e,this._get("colorStops"),c.ofType(we)))}set opacityStops(e){this._set("opacityStops",de(e,this._get("opacityStops"),c.ofType(Ve)))}getPreviousNext(e,i,r){let s=e;for(;--s>0&&i[s].type!==r&&i[s].type!==w.Both;);let n=e;const a=i.length;for(;++n<a&&i[n].type!==r&&i[n].type!==w.Both;);return[s,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const i=[],r=[],s=1e-5;for(const p of this.colorStops){if(!p.color)return e;r.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:w.Color})}if(this.opacityStops.length===0)for(const p of r)i.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const d=le(u.position,0,1),h=Math.round(255*le(1-u.opacity,0,1));let f=!1;for(const y of r)if(y.type===w.Color&&Math.abs(y.position-d)<s){y.color.a=h,y.type=w.Both,f=!0;break}f||r.push({color:{r:0,g:0,b:0,a:h},position:u.position,type:w.Alpha})}r.sort((u,d)=>u.position<d.position?-1:1);const p=r.length;for(let u=0;u<p;++u){const d=r[u];if(d.type!==w.Both)if(d.type===w.Color){const[h,f]=this.getPreviousNext(u,r,w.Alpha);if(h!==-1&&f!==p){const y=(d.position-r[h].position)/(r[f].position-r[h].position);d.color.a=Math.round(ae(r[h].color.a,r[f].color.a,y))}else d.color.a=h!==-1?r[h].color.a:r[f].color.a}else{const[h,f]=this.getPreviousNext(u,r,w.Color);if(h!==-1&&f!==p){const y=(d.position-r[h].position)/(r[f].position-r[h].position),$=r[h].color,oe=r[f].color;pe.forEach(F=>{d.color[F]=Math.round(ae($[F],oe[F],y))})}else h!==-1?pe.forEach(y=>{d.color[y]=r[h].color[y]}):pe.forEach(y=>{d.color[y]=r[f].color[y]})}}for(const u of r)i.push({color:u.color,position:u.position})}i[0].position=0,i[i.length-1].position=1;let n=0,a=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>i[a].position;)n=a++;const d=(u-i[n].position)/(i[a].position-i[n].position),h=i[n].color,f=i[a].color,y=new k;pe.forEach($=>{y[$]=Math.round(ae(h[$],f[$],d))}),y.a=le(1-ae(h.a,f.a,d)/255,0,1),e.push(y)}return e}getColorForContinuousDataValue(e,i){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let s=this.stretchRange[0],n=this.stretchRange[1];if(s>n){const p=s;s=n,n=p}e=le(e,s,n);const a=r[Math.round((e-s)/(n-s)*(this._colorMapSize-1))].clone();return i||(a.a=1),a}};t([o({type:["linear","nearest"],json:{write:!0}})],A.prototype,"interpolation",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"stretchRange",void 0),t([o({type:c.ofType(we),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],A.prototype,"colorStops",null),t([o({type:c.ofType(Ve),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],A.prototype,"opacityStops",null),t([o({type:qt,json:{write:!0}})],A.prototype,"rangeFilter",void 0),t([o({type:[k],clonable:!1,json:{read:!1}})],A.prototype,"rasterizedTransferFunction",null),A=t([m("esri.layers.voxel.VoxelTransferFunctionStyle")],A);const Lt=A,pe=["r","g","b"];let B=class extends L(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};t([o({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],B.prototype,"color",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],B.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],B.prototype,"label",void 0),B=t([m("esri.layers.voxel.VoxelUniqueValue")],B);const Ze=B;var je;let M=je=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(Ze)),this.isosurfaces=new(c.ofType(Je))}clone(){return new je({variableId:this.variableId,label:this.label,transferFunction:te(this.transferFunction),uniqueValues:te(this.uniqueValues),isosurfaces:te(this.isosurfaces)})}};t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"variableId",void 0),t([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),t([o({type:Lt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],M.prototype,"transferFunction",void 0),t([o({type:c.ofType(Ze),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],M.prototype,"uniqueValues",void 0),t([o({type:c.ofType(Je),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&i}}}}})],M.prototype,"isosurfaces",void 0),M=je=t([m("esri.layers.voxel.VoxelVariableStyle")],M);const Ke=M;function _e(e){const i=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(i==null)return{didParse:!1};const[,r,s,n,a,p,u,d,h,f,y,$,oe]=i;let F="seconds";const ge=r.charAt(0).toLowerCase();ge==="d"?F="days":ge==="h"?F="hours":ge==="m"&&(F="minutes");const Z=parseInt(s,10);if(Number.isNaN(Z))return{didParse:!1};const I=parseInt(n,10);if(Number.isNaN(I)||I<1||I>12)return{didParse:!1};const O=parseInt(a,10);if(Number.isNaN(O)||O<1||O>31)return{didParse:!1};if(I===2){const G=Z%4==0&&(Z%100!=0||Z%400==0);if(G&&O>29||!G&&O>28)return{didParse:!1}}else if((I===4||I===6||I===9||I===11)&&O>30)return{didParse:!1};const re=parseInt(p,10);if(Number.isNaN(re)||re<0||re>23)return{didParse:!1};const se=parseInt(u,10);if(Number.isNaN(se)||se<0||se>59)return{didParse:!1};const ne=parseInt(d,10);if(Number.isNaN(ne)||ne<0||ne>59)return{didParse:!1};let ve=1,C=0,U=0;if(y&&(ve=y==="-"?-1:1),$){if(C=parseInt($,10),Number.isNaN(C)||C<0)return{didParse:!1};if(C!==0){const G=ve*C;if(G<-12||G>14)return{didParse:!1}}}if(oe&&(U=parseInt(oe,10),Number.isNaN(U)||U<0||U>59))return{didParse:!1};const Xe=`${Z}`.padStart(4,"0"),Ye=`${I}`.padStart(2,"0"),Qe=`${O}`.padStart(2,"0"),et=`${re}`.padStart(2,"0"),tt=`${se}`.padStart(2,"0"),it=`${ne}`.padStart(2,"0");let K="Z";return C===0&&U===0||(K=ve>0?"+":"-",K+=`${C}`.padStart(2,"0"),K+=":",K+=`${U}`.padStart(2,"0")),{didParse:!0,unit:F,reference:new Date(`${Xe}-${Ye}-${Qe}T${et}:${tt}:${it}.000${K}`)}}let ue=class extends g{constructor(){super(...arguments),this.values=null}};t([o({type:[Number],json:{write:!0}})],ue.prototype,"values",void 0),ue=t([m("esri.layers.voxel.VoxelIrregularSpacing")],ue);const $t=ue;let ee=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};t([o({type:Number,json:{write:!0}})],ee.prototype,"scale",void 0),t([o({type:Number,json:{write:!0}})],ee.prototype,"offset",void 0),ee=t([m("esri.layers.voxel.VoxelRegularSpacing")],ee);const Ft=ee;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};t([o({type:$t,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"name",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),t([o({type:Ft,json:{write:!0}})],S.prototype,"regularSpacing",void 0),t([o({type:Number,json:{write:!0}})],S.prototype,"size",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"unit",void 0),t([o({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=t([m("esri.layers.voxel.VoxelDimension")],S);const _t=S;let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Me.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),r=this.dimensions[2],s=r.isRegular?r.getRange():[0,r.size];return[e[0],i[0],s[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),r=this.dimensions[2],s=r.isRegular?r.getRange():[0,r.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let a=0;a<3;++a)n[a]<2?n[a]=1:n[a]-=1;return r.isRegular&&!r.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(i[1]-i[0])/n[1],(s[1]-s[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let i=this.dimensions[3].size>0;if(i){const r=this.dimensions[3];i=r.quantity==="time",i&&r.unit!==null&&(i=_e(r.unit).didParse)}if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if(this.volumeType!=="xyzt")return[];const e=this.dimensions[3],i=[],r=_e(e.unit);if(r.didParse){if(e.isRegular){const s=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let a=0;a<e.size;++a){const p=s+n*a;i.push(Pe(r.reference,p,r.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let s=0;s<e.irregularSpacing.values.length;++s){const n=e.irregularSpacing.values[s];i.push(Pe(r.reference,n,r.unit))}}return i}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return q.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!nt(this.spatialReference,e.spatialReference))return q.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=ie(e.x,e.y,e.z??0);ut(i,i,this.originInLayerSpace3D),ct(i,i,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray(r.irregularSpacing?.values)&&r.irregularSpacing.values.length>1){const s=e.z??0,n=r.irregularSpacing.values,a=r.isPositiveUp?1:-1,p=n.reduce((u,d)=>Math.abs(a*d-s)<Math.abs(a*u-s)?d:u);for(let u=0;u<n.length;++u)if(n[u]===p){i[2]=u;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new be({x:0,y:0,spatialReference:this.spatialReference});const i=lt(e);if(dt(i,i,this.voxelSizeInLayerSpaceSigned),yt(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new be({x:i[0],y:i[1],spatialReference:this.spatialReference});const r=this.dimensions[this.zDimension];return r.isRegular||Array.isArray(r.irregularSpacing?.values)&&(e[2]<0?i[2]=r.irregularSpacing.values[0]:e[2]<r.irregularSpacing.values.length?i[2]=r.irregularSpacing.values[e[2]]:i[2]=r.irregularSpacing.values[r.irregularSpacing.values.length-1],r.isPositiveUp||(i[2]*=-1)),new be({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),t([o({type:[_t],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),t([o({type:Me,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),t([o({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),t([o({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),t([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),t([o({type:[Date],json:{read:!1,write:!1}})],x.prototype,"timeStops",null),x=t([m("esri.layers.voxel.VoxelVolume")],x);const Ge=x;var Ne;let E=Ne=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new Ne;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"apronWidth",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"brickSize",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"maxLodLevel",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"nodeSize",void 0),E=Ne=t([m("esri.layers.voxel.VoxelVolumeIndex")],E);const Mt=E;let D=class extends L(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(e),0,!0)}set orientation(e){const i=ye(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(i),0,!0)}set tilt(e){const i=ye(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{default:!0,write:!0}})],D.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],D.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>z.normalize(N(e),0,!0))],D.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>z.normalize(N(e),0,!0))],D.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],D.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],D.prototype,"point",void 0),D=t([m("esri.layers.voxel.VoxelDynamicSection")],D);const ze=D;var Ie;let P=Ie=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(he)),this.dynamicSections=new(c.ofType(ze))}set slices(e){this._set("slices",de(e,this._get("slices"),c.ofType(he)))}set dynamicSections(e){this._set("dynamicSections",de(e,this._get("dynamicSections"),c.ofType(ze)))}clone(){return new Ie({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:te(this.slices),dynamicSections:te(this.dynamicSections)})}};t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"volumeId",void 0),t([o({type:Number,json:{default:1,write:!0}})],P.prototype,"verticalExaggeration",void 0),t([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],P.prototype,"exaggerationMode",void 0),t([o({type:Number,json:{default:0,write:!0}})],P.prototype,"verticalOffset",void 0),t([o({type:c.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],P.prototype,"slices",null),t([o({type:c.ofType(ze),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],P.prototype,"dynamicSections",null),P=Ie=t([m("esri.layers.voxel.VoxelVolumeStyle")],P);const He=P;let l=class extends xt(gt(ft(bt(St(pt(vt(mt(ht)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new We,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(c.ofType(He)),this.variableStyles=new(c.ofType(Ke)),this.sections=new(c.ofType(xe))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",wt(e,q.getLogger(this)))}load(e){const i=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(rt).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(r),Promise.resolve(this)}read(e,i){super.read(e,i),i?.origin==="service"&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const r of this.volumes)r.spatialReference=this.spatialReference}readVersion(e,i){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new fe("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new fe("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new fe("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,i,r){if(e!=null&&typeof e=="object"){const s=Oe.fromJSON(e,r);if(s.zmin===0&&s.zmax===0&&Array.isArray(i.volumes)){const n=Ge.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const a=n.dimensions[2];if(a.isRegular){let p=a.regularSpacing.offset,u=a.regularSpacing.offset+a.regularSpacing.scale*(a.size-1);if(p>u){const d=p;p=u,u=d}s.zmin=p,s.zmax=u}}}return s}return null}get fields(){const e=[new W({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new W({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const r of this.variables){const s=new W({name:r.name,alias:r.description,domain:null,editable:!1,length:128,type:r.renderingFormat.continuity==="discrete"?"string":"double"});e.push(s)}const i=this.getVolume(null);if(i!=null){if(i.volumeType==="xyzt"||i.volumeType==="xyt"){const r=new W({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(r);const s=new W({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(s)}if(i.volumeType!=="xyt"){const r=new W({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(r)}}return e}get fieldsIndex(){return this.loaded?new Nt(this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const i=this.fields;return Tt({fields:i,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let i=-1;if(i=e??this.currentVariableId,!this.variableStyles||i===-1)return null;const r=this.variableStyles.findIndex(s=>s.variableId===i);return r<0?null:this.variableStyles.at(r)}getVariable(e){let i=-1;if(i=e??this.currentVariableId,!this.variables||i===-1)return null;const r=this.variables.findIndex(s=>s.id===i);return r<0?null:this.variables.at(r)}getVolume(e){const i=this.getVariable(e);return i!=null?this.volumes.find(({id:r})=>r===i.volumeId):null}get timeInfo(){const e=this.getVolume(null);if(e?.volumeType!=="xyzt")return null;const i=e.timeStops;if(!i?.length)return null;const r=new ke({start:i[0],end:i.at(-1)});return new Ee({fullTimeExtent:r,stops:i})}getVolumeStyle(e){const i=this.getVariable(e);return i!=null?this.volumeStyles.find(({volumeId:r})=>r===i.volumeId):null}getColorForContinuousDataValue(e,i,r){const s=this.getVariable(e);if(s==null||s.renderingFormat?.continuity!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===e);if(n<0)return null;const a=this.variableStyles.at(n);return a?.transferFunction?a.transferFunction.getColorForContinuousDataValue(i,r):null}getSections(){const e=[];for(const i of this.sections)e.push(new xe({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return e}getVariableStyles(){const e=[];for(const i of this.variableStyles){const r=this._getVariable(i);if(r!=null){const s=i.clone();s.isosurfaces.length>4&&(s.isosurfaces=s.isosurfaces.slice(0,3),q.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of s.isosurfaces)if(!n.colorLocked){const a=this.getColorForContinuousDataValue(s.variableId,n.value,!1);a===null||a.equals(n.color)||(n.color=a)}if(r.renderingFormat.continuity==="continuous")(s.transferFunction===null||s.transferFunction.colorStops.length<2)&&q.getLogger(this).error(`VoxelVariableStyle for variable ${r.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),s.transferFunction!==null&&(Array.isArray(s.transferFunction.stretchRange)&&s.transferFunction.stretchRange.length===2||(q.getLogger(this).error(`VoxelVariableStyle for variable ${r.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),s.transferFunction.stretchRange=[0,1],s.transferFunction.colorStops.removeAll()));else if(r.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)q.getLogger(this).error(`VoxelVariableStyle for variable ${r.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(s)}else q.getLogger(this).error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const i of this.volumeStyles){const r=this._getVolumeFromVolumeId(i.volumeId);if(r!=null){const s=i.clone();for(const n of s.slices)this._isPlaneValid(n,[0,1,r.zDimension],r.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of s.dynamicSections)this._isPlaneValid(n,[0,1,r.zDimension],r.dimensions)||(n.enabled=!1,n.label="invalid");e.push(s)}else q.getLogger(this).error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const i=e.variableId;for(const r of this.variables)if(r.id===i)return r;return null}_getVolumeFromVolumeId(e){for(const i of this.volumes)if(i.id===e)return i;return null}_isPlaneValid(e,i,r){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const s=ie(e.normal[0],e.normal[1],e.normal[2]);return Re(s,s),!(Math.abs(s[0])+Math.abs(s[1])+Math.abs(s[2])<1e-6)&&(e.normal[0]=s[0],e.normal[1]=s[1],e.normal[2]=s[2],!0)}};t([o({type:["Voxel"]})],l.prototype,"operationalLayerType",void 0),t([o(Vt)],l.prototype,"legendEnabled",void 0),t([o({json:{write:!0}})],l.prototype,"title",void 0),t([o(jt)],l.prototype,"url",null),t([o({type:c.ofType(xe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],l.prototype,"sections",void 0),t([o({type:j,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],l.prototype,"currentVariableId",void 0),t([o({type:c.ofType(He),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],l.prototype,"volumeStyles",void 0),t([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],l.prototype,"renderMode",void 0),t([o({type:c.ofType(Ke),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],l.prototype,"variableStyles",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],l.prototype,"enableSlices",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],l.prototype,"enableSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],l.prototype,"enableDynamicSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],l.prototype,"enableIsosurfaces",void 0),t([o({type:We,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],l.prototype,"shading",void 0),t([o({type:["show","hide"]})],l.prototype,"listMode",void 0),t([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"opacity",void 0),t([o({type:c.ofType(Pt)})],l.prototype,"variables",void 0),t([o({type:c.ofType(Ge)})],l.prototype,"volumes",void 0),t([o({type:Mt})],l.prototype,"index",void 0),t([o({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"minScale",void 0),t([o({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"maxScale",void 0),t([o({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([o({readOnly:!0,json:{name:"serviceVersion"}})],l.prototype,"version",void 0),t([Te("service","version")],l.prototype,"readVersion",null),t([o({type:Oe})],l.prototype,"fullExtent",void 0),t([Te("service","fullExtent",["fullExtent"])],l.prototype,"readFullExtent",null),t([o({readOnly:!0,clonable:!1,json:{read:!1}})],l.prototype,"fields",null),t([o({readOnly:!0})],l.prototype,"fieldsIndex",null),t([o({type:Boolean,json:{name:"disablePopup",read:{reader:(e,i)=>!i.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,i,r){i[r]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],l.prototype,"popupEnabled",void 0),t([o({type:st,json:{name:"popupInfo",write:!0}})],l.prototype,"popupTemplate",void 0),t([o({readOnly:!0,json:{read:!1}})],l.prototype,"defaultPopupTemplate",null),t([o({type:Ee,readOnly:!0,json:{read:!1}})],l.prototype,"timeInfo",null),t([o({type:ke,json:{read:!1}})],l.prototype,"timeExtent",void 0),t([o({type:zt,json:{read:!1}})],l.prototype,"timeOffset",void 0),t([o({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],l.prototype,"useViewTime",void 0),l=t([m("esri.layers.VoxelLayer")],l);const Ti=l;export{Ti as default};
