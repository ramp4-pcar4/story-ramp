import{v as t,S as s,dA as n,i as h,ag as m,ah as l,av as o,am as d}from"./story-BJQwqSiV.js";import{X as V,Y as w}from"./LayerView-Bish-E63-CI4QFH6z.js";import"./main-BWo3aSQp.js";import"./Container-BcuL1ZEG-Bk_ctUyr.js";import"./MapView-BGOJJ8ch-Bb0d_mdR.js";import"./Cyclical-C_9rKUUQ-CjxL21WM.js";import"./CollectionFlattener-DkHuHn5E-Cw6jmr84.js";import"./workers-PiCjreoO-D0Az3Evf.js";import"./projection-BA9M1R7d-DLC6A_As.js";import"./projectBuffer-CvCBvJ6W-3LRoemO2.js";import"./TileInfo-CWIRDhZl-BviEZ3kp.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-B6tvh5_T.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-RDQo12oK.js";import"./signal-CETehA7D-Cs1xfk39.js";import"./Map-1zd11DKO-L8TO_0ea.js";import"./Basemap-BEqqSTw9-S06mgW-X.js";import"./loadAll-e978YItg-CzrluKCu.js";import"./PortalItem-CctGdnxF-DvUg7fiW.js";import"./writeUtils-D5qlLkwk-DDewopP3.js";import"./compilerUtils-CV1QYWI8-DF8ESNpQ.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-Dp_mjVfk.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-DMDY_Ejn.js";import"./Layer-ChoECxvZ-DRXkRmjE.js";import"./TimeExtent-Cn0Jofqr-xF8LFpvf.js";import"./GraphicsCollection-CWTXNZOX-BnClhmtd.js";import"./HeightModelInfo-C5vFqzyF-c2zC2rTf.js";import"./ReactiveMap-CFk6jPfN-B_1XqlFi.js";import"./Query-BrwMGK8U-Emn-7FKl.js";import"./Field-C6hA1tZj-BlA5l38n.js";import"./fieldType-CD2CL2hr-VAROaSEG.js";import"./arcgisLayerUrl-HNYh8jvG-CPalqiCd.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-C4rJpL1J.js";import"./TileKey-C5IL-JBr-Dbkeq2b-.js";import"./QueueProcessor-DbfV9fLy-CBQ1F89a.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-tVZW_WL3.js";import"./normalizeUtilsCommon-CRJlkfEA-21eQunUl.js";import"./utils-9sQxfkoa-PIByIh1h.js";import"./utils-Bq23Xwmj-BHHlOzOY.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-DwuvnO30.js";import"./vec32-D9GsKZ1t-DFKAiR2i.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-DAjxLhHq.js";import"./imageUtils-BA2D6Uf1-CoEnd3xy.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-BFCoDir1.js";import"./ColorBackground-gVZldRLm-DkFSlb16.js";import"./parser-DyDJ-rlI-Bk6s8X2X.js";import"./layerViewUtils-DURAPenP-DxlkhaV1.js";let r=class extends w{constructor(i){super(i),this.type="group",this.layerViews=new m}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},o),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},o)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",d(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(a=>l(()=>a.visible,y=>this._applyVisibility(()=>{y!==this.visible&&(a.visible=this.visible)},()=>this._applyExclusiveVisibility(y?a:null)),o)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([s({readOnly:!0})],r.prototype,"creatingLayerViews",null),t([s({cast:n})],r.prototype,"layerViews",null),t([s({readOnly:!0})],r.prototype,"updatingProgress",null),t([s()],r.prototype,"view",void 0),r=t([h("esri.views.layers.GroupLayerView")],r);const v=r;let p=class extends V(v){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};p=t([h("esri.views.2d.layers.GroupLayerView2D")],p);const fi=p;export{fi as default};
