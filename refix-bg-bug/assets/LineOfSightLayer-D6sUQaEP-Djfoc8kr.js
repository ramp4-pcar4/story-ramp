import{bA as x,aa as _,d8 as y,v as e,S as i,w as b,i as h,ag as g,dA as P,ah as w,ax as O,am as j,j as T,aP as $,ip as C,it as F,jn as H}from"./story-DleBxxVb.js";import{y as N}from"./Analysis-BPgJ-FCw--7Wd8p3x.js";import{n as q,u as L}from"./featureReferenceUtils-Ct4KY5u7-CAatnkk1.js";import{C as m}from"./persistable-C6RBwzJi-De89P-Hv.js";import{q as R}from"./ElevationInfo-yv2-9tj6-CY-PeJ2X.js";import{V as X}from"./projection-BA9M1R7d-CrV8atXF.js";import{l as Y}from"./elevationInfoUtils-mOZsPH2J-jddqQ51s.js";import{m as D}from"./MultiOriginJSONSupport-DKRh9P6w-DeY--mh_.js";import{D as M}from"./Layer-ChoECxvZ-Lo-QX3so.js";import{E as U}from"./OperationalLayer-B5IXiMa2-DmG5Fk1Y.js";import"./main-DiASSDZe.js";import"./vec32-D9GsKZ1t-CYA6m0Cy.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./sphere-BenPORjV-DjjnO_2V.js";import"./mat4-DX7gBViE-DVUBdKhi.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./plane-Dt8R0KeE-CqgU0P2W.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./IntersectorInterfaces-CrXe7z5S-tY6PKd-m.js";import"./boundedPlane-DlvE0eNx-CHKhFSyS.js";import"./lineSegment-CcqvCARM-BZ5el_dj.js";import"./MD5-CHHr-oed-SuyrCYQ0.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./resourceExtension-CdQvIDKV-DRn9XXn4.js";import"./lengthUtils-DKpMe5qR-BO0rzRzH.js";import"./projectBuffer-CvCBvJ6W-BeU8pcSm.js";import"./TimeExtent-Cn0Jofqr-DIyoqlfS.js";import"./commonProperties-BtIqvFU_-D0yfXRRV.js";let a=class extends x(_(T)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return y(this.position,t.position)&&y(this.elevationInfo,t.elevationInfo)&&q(this.feature,t.feature)}};e([i({type:b,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),e([i({type:R}),m()],a.prototype,"elevationInfo",void 0),e([i(L)],a.prototype,"feature",void 0),a=e([h("esri.analysis.LineOfSightAnalysisObserver")],a);const E=a;let l=class extends x($){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return y(this.position,t.position)&&y(this.elevationInfo,t.elevationInfo)&&q(this.feature,t.feature)}};e([i({type:b}),m()],l.prototype,"position",void 0),e([i({type:R}),m()],l.prototype,"elevationInfo",void 0),e([i(L)],l.prototype,"feature",void 0),l=e([h("esri.analysis.LineOfSightAnalysisTarget")],l);const I=l,f=g.ofType(I);let o=class extends N{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(w(()=>this._computeExtent(),t=>{t?.pending==null&&this._set("extent",t!=null?t.extent:null)},O))}get targets(){return this._get("targets")||new f}set targets(t){this._set("targets",j(t,this.targets,f))}get spatialReference(){return this.observer?.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const t=this._computeExtent();return t!=null?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(this.observer?.position==null||t==null)return null;const r=p=>Y(p.position,p.elevationInfo)==="absolute-height",n=this.observer.position,v=C(n.x,n.y,n.z,n.x,n.y,n.z);for(const p of this.targets)if(p.position!=null){const u=X(p.position,t);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:z,y:A,z:S}=u.geometry;F(v,[z,A,S])}}const d=H(v,t);return r(this.observer)&&this.targets.every(r)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};e([i({type:["line-of-sight"]})],o.prototype,"type",void 0),e([i({type:E,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),e([i({cast:P,type:f,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),e([i({value:null,readOnly:!0})],o.prototype,"extent",void 0),e([i({readOnly:!0})],o.prototype,"spatialReference",null),e([i({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=e([h("esri.analysis.LineOfSightAnalysis")],o);const c=o,V=g.ofType(I);let s=class extends U(D(M)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new c,this.opacity=1}initialize(){this.addHandles(w(()=>this.analysis,(t,r)=>{r!=null&&r.parent===this&&(r.parent=null),t!=null&&(t.parent=this)},O))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(t){const{analysis:r}=this;r&&(r.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new g}set targets(t){j(t,this.analysis?.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new c)}};e([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),e([i({type:["LineOfSightLayer"]})],s.prototype,"operationalLayerType",void 0),e([i({type:E,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],s.prototype,"observer",null),e([i({type:V,json:{read:!0,write:{ignoreOrigin:!0}}})],s.prototype,"targets",null),e([i({nonNullable:!0,json:{read:!1,write:!1}})],s.prototype,"analysis",void 0),e([i({readOnly:!0})],s.prototype,"fullExtent",null),e([i({readOnly:!0})],s.prototype,"spatialReference",null),e([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),e([i({type:["show","hide"]})],s.prototype,"listMode",void 0),s=e([h("esri.layers.LineOfSightLayer")],s);const Rt=s;export{Rt as default};
