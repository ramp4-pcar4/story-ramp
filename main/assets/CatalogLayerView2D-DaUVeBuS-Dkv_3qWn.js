import{ag as a,v as i,S as o,i as m}from"./story-CVk-3aMF.js";import{X as n,Y as s}from"./LayerView-Bish-E63-CObQdBZy.js";import"./main-Cvw62Kwy.js";import"./Container-BcuL1ZEG-CGwSc9AV.js";import"./MapView-BGOJJ8ch-gYm-Nvfp.js";import"./Cyclical-C_9rKUUQ-CXlK2O9m.js";import"./CollectionFlattener-DkHuHn5E-B5Bb7D7n.js";import"./workers-PiCjreoO-DbCDptYE.js";import"./projection-BA9M1R7d-DtG_o8oX.js";import"./projectBuffer-CvCBvJ6W-Bplii-Dc.js";import"./TileInfo-CWIRDhZl-CpHZDR_N.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-BpydYsH4.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-BDolw0cS.js";import"./signal-CETehA7D-B_47dGik.js";import"./Map-1zd11DKO-J-lst5F7.js";import"./Basemap-BEqqSTw9-DK3Ew88U.js";import"./loadAll-e978YItg-DGAsfxUG.js";import"./PortalItem-CctGdnxF-QA-fGuWM.js";import"./writeUtils-D5qlLkwk-cdVO-fvp.js";import"./compilerUtils-CV1QYWI8-CASYpgSZ.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-DpxWNge6.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-dyox7FOw.js";import"./Layer-ChoECxvZ-BWauBEm1.js";import"./TimeExtent-Cn0Jofqr-BHktnZsi.js";import"./GraphicsCollection-CWTXNZOX-67gngFV1.js";import"./HeightModelInfo-C5vFqzyF-DVvTujT0.js";import"./ReactiveMap-CFk6jPfN-02RlmOP8.js";import"./Query-BrwMGK8U-WTgoOQXl.js";import"./Field-C6hA1tZj-DXu4bpKq.js";import"./fieldType-CD2CL2hr-D-eY-vTD.js";import"./arcgisLayerUrl-HNYh8jvG-CrB5Re3w.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-gb-3Jl2D.js";import"./TileKey-C5IL-JBr-B_fZGXoC.js";import"./QueueProcessor-DbfV9fLy-BinRj6QJ.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-CXneOESN.js";import"./normalizeUtilsCommon-CRJlkfEA-D_mVrJEe.js";import"./utils-9sQxfkoa-DyaA1vS9.js";import"./utils-Bq23Xwmj-CG3BpvtB.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-De9rJ9_e.js";import"./vec32-D9GsKZ1t-HgNOFD30.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-CSXtWUm6.js";import"./imageUtils-BA2D6Uf1-Um2eQLno.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-DR6888R4.js";import"./ColorBackground-gVZldRLm-DkX8MwyO.js";import"./parser-DyDJ-rlI-OMQZlqbg.js";import"./layerViewUtils-DURAPenP-B2KXkTM_.js";const l=e=>{let t=class extends e{constructor(...r){super(...r),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"layerViews",void 0),i([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),i([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=i([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(n(s)){constructor(){super(...arguments),this.layerViews=new a}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};i([o()],p.prototype,"layerViews",void 0),p=i([m("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
