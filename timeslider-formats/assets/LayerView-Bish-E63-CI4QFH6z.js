import{v as e,S as i,i as u,g as C,ag as b,bR as O,at as x,I as H,j as P,a1 as _,aA as q,e as T,d as E,n as I,l as j,am as L,o as N,ah as o,ax as l,ai as U}from"./story-BJQwqSiV.js";import{x as V}from"./Container-BcuL1ZEG-Bk_ctUyr.js";import{i as A,l as k,a as M,r as $,b as B}from"./MapView-BGOJJ8ch-Bb0d_mdR.js";import{l as R,e as D}from"./layerViewUtils-DURAPenP-DxlkhaV1.js";import{i as F}from"./UpdatingHandles-CUu3u1ms-RDQo12oK.js";function G(s){return s!=null&&typeof s=="object"&&s.type==="2d"&&s.view2dType==="linkchart"}let c=class extends T{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e([i({readOnly:!0})],c.prototype,"version",null),c=e([u("esri.views.layers.support.ClipArea")],c);const S=c;var f;let p=f=class extends S{constructor(s){super(s),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};e([i({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),e([i({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),e([i({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),e([i({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),p=f=e([u("esri.views.layers.support.ClipRect")],p);const z=p;var w;const X={base:E,key:"type",typeMap:{extent:I,polygon:j}};let y=w=class extends S{constructor(s){super(s),this.type="geometry",this.geometry=null}clone(){return new w({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};e([i({types:X,json:{read:C,write:!0}})],y.prototype,"geometry",void 0),y=w=e([u("esri.views.layers.support.Geometry")],y);const J=y;let g=class extends S{constructor(s){super(s),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};e([i({type:[[[Number]]],json:{write:!0}})],g.prototype,"path",void 0),g=e([u("esri.views.layers.support.Path")],g);const K=g,m=b.ofType({key:"type",base:null,typeMap:{rect:z,path:K,geometry:J}}),Q=new(b.ofType(A)),ie=s=>{let n=class extends s{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const r=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new N("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new V),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([o(()=>this.suspended,t=>{this.container&&(this.container.visible=!t)},l),o(()=>this.updateSuspended,t=>{this.view&&!t&&this.updateRequested&&this.view.requestUpdate()},l),o(()=>this.layer?.opacity??1,t=>{this.container&&(this.container.opacity=t)},l),o(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",t=>{this.container&&(this.container.blendMode=t)},l),o(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,t=>{this.container&&(this.container.effect=t)},l),o(()=>this._mergedHighlights.items.map(t=>({name:t.name,options:{fillColor:t.options.color,haloColor:t.options.haloColor,fillOpacity:t.options.fillOpacity,haloOpacity:t.options.haloOpacity,haloWidth:t.options.haloWidth,haloBlur:t.options.haloBlur}})),()=>{this.container.highlightGradient=M(this.container.highlightGradient,this._mergedHighlights.items)},l),o(()=>this._mergedHighlights.items.map(t=>t.name),()=>{this._updateHighlights()}),U(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},l),o(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:t,scaleRange:h})=>{const d=D(h,t);d!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=d)},l)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(t=>{t===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return $(this)}set highlightOptions(r){B(this,r)}get _mergedHighlights(){if(!this.view)return Q;if(!this.highlights)return this.view.highlights;const r=this.view.highlights.clone();for(const t of this.highlights){const h=r.find(d=>d.name===t.name);h&&(h.options=t.options)}return r}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const r=this.view?.spatialReference;return r==null||this.supportsSpatialReference(r)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(r){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",r),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(r))):this.updateRequested=!1}hitTest(r,t){return Promise.resolve(null)}supportsSpatialReference(r){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(G(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const r=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(r.spatialReferenceNotSupported=t),r}addAttachHandles(r){this.addHandles(r,"attach")}_getHighlightBits(r){r=new Set(r);let t=1,h=0;if(!this.view)return 0;const d=this._mergedHighlights;for(const{name:v}of d)r.delete(v)&&(h=t),t<<=1;for(const v of r)_.getLogger(this).error("#highlights",`${v} was not found. Features in this group will not be highlighted.`);return h}};return e([i()],n.prototype,"attached",void 0),e([i({type:m,set(r){const t=L(r,this._get("clips"),m);this._set("clips",t)}})],n.prototype,"clips",void 0),e([i()],n.prototype,"container",void 0),e([i({type:k})],n.prototype,"highlightOptions",null),e([i({type:b.ofType(A)})],n.prototype,"highlights",void 0),e([i()],n.prototype,"_mergedHighlights",null),e([i()],n.prototype,"moving",void 0),e([i({readOnly:!0})],n.prototype,"spatialReferenceSupported",null),e([i({readOnly:!0})],n.prototype,"updateParameters",void 0),e([i()],n.prototype,"updateRequested",void 0),e([i()],n.prototype,"updating",null),e([i()],n.prototype,"view",void 0),e([i()],n.prototype,"_visibleAtCurrentScale",void 0),e([i({readOnly:!0})],n.prototype,"visibleAtCurrentScale",null),n=e([u("esri.views.2d.layers.LayerView2D")],n),n};let a=class extends O(x(H.EventedMixin(P))){constructor(s){super(s),this._updatingHandles=new F,this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if(s.name!=="layerview:create-error"){const n=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";_.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${n}')`,s)}})}destroy(){this._updatingHandles=q(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer?.legendEnabled===!0}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return this.layer?.visible===!0}set visible(s){this._overrideIfSome("visible",s)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const s=this.view.timeExtent,n=this.layer?.visibilityTimeExtent;return!s||!n||!s.intersection(n).isEmpty}canResume(){const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&R(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const s=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0);const n=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return R(n)&&this.visibleAtCurrentScale||(s.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(s.outsideVisibilityTimeExtent=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};e([i()],a.prototype,"view",void 0),e([i()],a.prototype,"fullOpacity",null),e([i()],a.prototype,"layer",void 0),e([i()],a.prototype,"parent",void 0),e([i({readOnly:!0})],a.prototype,"suspended",null),e([i({readOnly:!0})],a.prototype,"suspendInfo",null),e([i({readOnly:!0})],a.prototype,"legendEnabled",null),e([i({type:Boolean,readOnly:!0})],a.prototype,"updating",null),e([i({readOnly:!0})],a.prototype,"updatingProgress",null),e([i()],a.prototype,"updateSuspended",null),e([i()],a.prototype,"visible",null),e([i({readOnly:!0})],a.prototype,"visibleAtCurrentScale",null),e([i({readOnly:!0})],a.prototype,"visibleAtCurrentTimeExtent",null),a=e([u("esri.views.layers.LayerView")],a);const se=a;export{J as A,ie as X,se as Y};
