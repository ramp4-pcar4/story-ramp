import{v as t,S as s,dA as n,i as h,ag as m,ah as l,av as o,am as d}from"./story-DleBxxVb.js";import{X as V,Y as w}from"./LayerView-Bish-E63-DH1Qeib7.js";import"./main-DiASSDZe.js";import"./Container-BcuL1ZEG-DoOg_t1G.js";import"./MapView-BGOJJ8ch-CwjryLj2.js";import"./Cyclical-C_9rKUUQ-CZtzIkAP.js";import"./CollectionFlattener-DkHuHn5E-KpGythwZ.js";import"./workers-PiCjreoO-DJ4_a0PQ.js";import"./projection-BA9M1R7d-CrV8atXF.js";import"./projectBuffer-CvCBvJ6W-BeU8pcSm.js";import"./TileInfo-CWIRDhZl-iPPK8dPW.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-IRHTistd.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-ClskWN1F.js";import"./signal-CETehA7D-B2u0l130.js";import"./Map-1zd11DKO-BnNp7DtG.js";import"./Basemap-BEqqSTw9-B22BTH_J.js";import"./loadAll-e978YItg-BZ5t8-eY.js";import"./PortalItem-CctGdnxF-bxuW_HmO.js";import"./writeUtils-D5qlLkwk-ytHC3hzG.js";import"./compilerUtils-CV1QYWI8-CNS-H9Tr.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-DVUBdKhi.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-CR2JkfDC.js";import"./Layer-ChoECxvZ-Lo-QX3so.js";import"./TimeExtent-Cn0Jofqr-DIyoqlfS.js";import"./GraphicsCollection-CWTXNZOX-PkCthssJ.js";import"./HeightModelInfo-C5vFqzyF-Dbec3Yd7.js";import"./ReactiveMap-CFk6jPfN-DPWoiGTz.js";import"./Query-BrwMGK8U-BZDRsLrY.js";import"./Field-C6hA1tZj-Cmd26w1d.js";import"./fieldType-CD2CL2hr-C9KcS8M7.js";import"./arcgisLayerUrl-HNYh8jvG-Dx2jCZLz.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-BWgS43Np.js";import"./TileKey-C5IL-JBr-DZvPDiVP.js";import"./QueueProcessor-DbfV9fLy-D7s9qDeg.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-BW2nI3WG.js";import"./normalizeUtilsCommon-CRJlkfEA-c1zNaJAb.js";import"./utils-9sQxfkoa-I4lFhn84.js";import"./utils-Bq23Xwmj-B12PcRDJ.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-B9A_WuIm.js";import"./vec32-D9GsKZ1t-CYA6m0Cy.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-B4N8ozGg.js";import"./imageUtils-BA2D6Uf1-CCW32Tty.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-B6B6d7ZO.js";import"./ColorBackground-gVZldRLm-KQ1xSOv2.js";import"./parser-DyDJ-rlI-RffnWjHB.js";import"./layerViewUtils-DURAPenP-CrpxkAok.js";let r=class extends w{constructor(i){super(i),this.type="group",this.layerViews=new m}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},o),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},o)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",d(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(a=>l(()=>a.visible,y=>this._applyVisibility(()=>{y!==this.visible&&(a.visible=this.visible)},()=>this._applyExclusiveVisibility(y?a:null)),o)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([s({readOnly:!0})],r.prototype,"creatingLayerViews",null),t([s({cast:n})],r.prototype,"layerViews",null),t([s({readOnly:!0})],r.prototype,"updatingProgress",null),t([s()],r.prototype,"view",void 0),r=t([h("esri.views.layers.GroupLayerView")],r);const v=r;let p=class extends V(v){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};p=t([h("esri.views.2d.layers.GroupLayerView2D")],p);const fi=p;export{fi as default};
