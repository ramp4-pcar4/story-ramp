import{v as t,S as s,dA as n,i as h,ag as m,ah as l,av as o,am as d}from"./story-_2qqwocf.js";import{X as V,Y as w}from"./LayerView-Bish-E63-B8eXWwDA.js";import"./main-C0sSK5MQ.js";import"./Container-BcuL1ZEG-XuyrAPcR.js";import"./MapView-BGOJJ8ch-CjyVrgdp.js";import"./Cyclical-C_9rKUUQ-C0Pfhd6h.js";import"./CollectionFlattener-DkHuHn5E-BwdSxxdX.js";import"./workers-PiCjreoO-BlTCpgdh.js";import"./projection-BA9M1R7d-BNPaubfz.js";import"./projectBuffer-CvCBvJ6W-CjFsH9Cb.js";import"./TileInfo-CWIRDhZl-DA81rMhH.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-DpURpNrQ.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CLUD74Sv.js";import"./signal-CETehA7D-7_0LD89O.js";import"./Map-1zd11DKO-JA8p_yaf.js";import"./Basemap-BEqqSTw9-ShpGK2ya.js";import"./loadAll-e978YItg-DA8EhtZC.js";import"./PortalItem-CctGdnxF-BsZcaSxd.js";import"./writeUtils-D5qlLkwk-CUd7zHcC.js";import"./compilerUtils-CV1QYWI8-8J_jrmC-.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-B6zP77UN.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-BtSxMcJq.js";import"./Layer-ChoECxvZ-ydCoq6Yp.js";import"./TimeExtent-Cn0Jofqr-BkSLp2ff.js";import"./GraphicsCollection-CWTXNZOX-DmQ0bebe.js";import"./HeightModelInfo-C5vFqzyF-NUSOnWtQ.js";import"./ReactiveMap-CFk6jPfN-Bwt-AC3s.js";import"./Query-BrwMGK8U-CFn_2Vls.js";import"./Field-C6hA1tZj-0h4zvHrA.js";import"./fieldType-CD2CL2hr-jFb-atFW.js";import"./arcgisLayerUrl-HNYh8jvG-BDFw5rva.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-BQn8uR2s.js";import"./TileKey-C5IL-JBr-C7yrpm3P.js";import"./QueueProcessor-DbfV9fLy-C9L7n3QC.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-LxE2kY-t.js";import"./normalizeUtilsCommon-CRJlkfEA-DnAkLSlZ.js";import"./utils-9sQxfkoa-BagUpzfV.js";import"./utils-Bq23Xwmj-eS9Z43Ef.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-DS_jUKfI.js";import"./vec32-D9GsKZ1t-BJTEeoJ0.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-DGWsXHid.js";import"./imageUtils-BA2D6Uf1-BF6f21C3.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-DU9FKncl.js";import"./ColorBackground-gVZldRLm-D4SneGWo.js";import"./parser-DyDJ-rlI-BAimiePc.js";import"./layerViewUtils-DURAPenP-BD-e_6fK.js";let r=class extends w{constructor(i){super(i),this.type="group",this.layerViews=new m}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},o),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},o)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",d(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(a=>l(()=>a.visible,y=>this._applyVisibility(()=>{y!==this.visible&&(a.visible=this.visible)},()=>this._applyExclusiveVisibility(y?a:null)),o)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([s({readOnly:!0})],r.prototype,"creatingLayerViews",null),t([s({cast:n})],r.prototype,"layerViews",null),t([s({readOnly:!0})],r.prototype,"updatingProgress",null),t([s()],r.prototype,"view",void 0),r=t([h("esri.views.layers.GroupLayerView")],r);const v=r;let p=class extends V(v){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};p=t([h("esri.views.2d.layers.GroupLayerView2D")],p);const fi=p;export{fi as default};
