import{bA as P,ar as d,v as t,S as n,bB as h,dN as w,es as D,i as m,w as v,ad as S,ab as z,ag as R,dA as E,ah as N,ax as j,ac as A,aP as O,am as _,n as b}from"./story-CfV_Vu_Z.js";import{y as k}from"./Analysis-BPgJ-FCw-mDEs9UL4.js";import{c as C}from"./Cyclical-C_9rKUUQ-BRfrzMz5.js";import{X as L}from"./projection-BA9M1R7d-CxaZ54YH.js";import{m as T}from"./MultiOriginJSONSupport-DKRh9P6w--m_N81Be.js";import{D as B}from"./Layer-ChoECxvZ-D1stZNTd.js";import{E as H}from"./OperationalLayer-B5IXiMa2-DD_4pcf8.js";import"./main-BdZwAw3a.js";import"./projectBuffer-CvCBvJ6W-DxBPbRvY.js";import"./TimeExtent-Cn0Jofqr-BqmS1uQo.js";import"./commonProperties-BtIqvFU_-D6e67CwY.js";import"./ElevationInfo-yv2-9tj6-Ye11yqhm.js";import"./lengthUtils-DKpMe5qR-CUkGOsWN.js";let r=class extends P(O){constructor(e){super(e),this.type="simple",this.color=new d("black"),this.lineSize=2,this.fontSize=10,this.textColor=new d("black"),this.textBackgroundColor=new d([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],r.prototype,"type",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"color",void 0),t([n({type:Number,cast:w,nonNullable:!0,range:{min:D(1)},json:{write:{isRequired:!0}}})],r.prototype,"lineSize",void 0),t([n({type:Number,cast:w,nonNullable:!0,json:{write:{isRequired:!0}}})],r.prototype,"fontSize",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textColor",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textBackgroundColor",void 0),r=t([m("esri.analysis.DimensionSimpleStyle")],r);const g=r;var y;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(y||(y={}));const F=[y.Horizontal,y.Vertical,y.Direct];let l=class extends P(O){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=y.Direct,this.offset=0,this.orientation=0}};t([n({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([n({type:v,json:{write:!0}})],l.prototype,"startPoint",void 0),t([n({type:v,json:{write:!0}})],l.prototype,"endPoint",void 0),t([n({type:F,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),S(e=>C.normalize(z(e),0,!0))],l.prototype,"orientation",void 0),l=t([m("esri.analysis.LengthDimension")],l);const q=l,f=R.ofType(q);let p=class extends k{constructor(e){super(e),this.type="dimension",this.style=new g,this.extent=null}initialize(){this.addHandles(N(()=>this._computeExtent(),e=>{e?.pending==null&&this._set("extent",e!=null?e.extent:null)},j))}get dimensions(){return this._get("dimensions")||new f}set dimensions(e){this._set("dimensions",_(e,this.dimensions,f))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const i=[];for(const o of this.dimensions)o.startPoint!=null&&i.push(o.startPoint),o.endPoint!=null&&i.push(o.endPoint);const a=L(i,e);if(a.pending!=null)return{pending:a.pending,extent:null};let c=null;return a.geometries!=null&&(c=a.geometries.reduce((o,u)=>o==null?u!=null?b.fromPoint(u):null:u!=null?o.union(b.fromPoint(u)):o,null)),{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],p.prototype,"type",void 0),t([n({cast:E,type:f,nonNullable:!0})],p.prototype,"dimensions",null),t([n({readOnly:!0})],p.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},nonNullable:!0})],p.prototype,"style",void 0),t([n({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([n({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([m("esri.analysis.DimensionAnalysis")],p);const x=p;let s=class extends H(T(B)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new x,this.opacity=1,e){const{source:i,style:a}=e;i&&a&&(i.style=a)}}initialize(){this.addHandles([N(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},j)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new x)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,a,c){i.dimensions=e.filter(({startPoint:o,endPoint:u})=>o!=null&&u!=null).map(o=>o.toJSON(c)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],s.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],s.prototype,"source",void 0),t([n({readOnly:!0})],s.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},json:{write:{ignoreOrigin:!0}}})],s.prototype,"style",null),t([n({readOnly:!0})],s.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),t([n({type:["show","hide"]})],s.prototype,"listMode",void 0),t([n({type:R.ofType(q),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],s.prototype,"dimensions",null),t([A("web-scene","dimensions")],s.prototype,"writeDimensions",null),s=t([m("esri.layers.DimensionLayer")],s);const ee=s;export{ee as default};
