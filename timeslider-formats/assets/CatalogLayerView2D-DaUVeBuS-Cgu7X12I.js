import{ag as a,v as i,S as o,i as m}from"./story-CF27ueXF.js";import{X as n,Y as s}from"./LayerView-Bish-E63-fqrcApRP.js";import"./main-BCz1fOgT.js";import"./Container-BcuL1ZEG-Dk-WAnFP.js";import"./MapView-BGOJJ8ch-B63n-enr.js";import"./Cyclical-C_9rKUUQ-D4OFi4ey.js";import"./CollectionFlattener-DkHuHn5E-C_fbyYdR.js";import"./workers-PiCjreoO-BYqN7k2l.js";import"./projection-BA9M1R7d-Bf34a9wA.js";import"./projectBuffer-CvCBvJ6W-t60zPFpz.js";import"./TileInfo-CWIRDhZl-kTzSGjna.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-PVm43urF.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-gO5cQrOe.js";import"./signal-CETehA7D-Ok6gQX_J.js";import"./Map-1zd11DKO-B2JJSJsR.js";import"./Basemap-BEqqSTw9-D_-Scffk.js";import"./loadAll-e978YItg-yUkOcx2h.js";import"./PortalItem-CctGdnxF-Bcai6Khl.js";import"./writeUtils-D5qlLkwk-PoJuKdvu.js";import"./compilerUtils-CV1QYWI8--sz7pv1j.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-CKuOZ48A.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-BYy6W4jS.js";import"./Layer-ChoECxvZ-D3RHffjD.js";import"./TimeExtent-Cn0Jofqr-CIsEj_VS.js";import"./GraphicsCollection-CWTXNZOX-DJDUFlGU.js";import"./HeightModelInfo-C5vFqzyF-CCa-RBAd.js";import"./ReactiveMap-CFk6jPfN-D1Qbu2dd.js";import"./Query-BrwMGK8U-UyeMwKlL.js";import"./Field-C6hA1tZj-MnyqQZOq.js";import"./fieldType-CD2CL2hr-B-bl2Sk0.js";import"./arcgisLayerUrl-HNYh8jvG-CrV0eysV.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-DnFf-4M6.js";import"./TileKey-C5IL-JBr-0Ng_Uf3m.js";import"./QueueProcessor-DbfV9fLy-7s1Tps1H.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-DXRBtvX_.js";import"./normalizeUtilsCommon-CRJlkfEA-t_GvvHiJ.js";import"./utils-9sQxfkoa-DniDzNW3.js";import"./utils-Bq23Xwmj-DOeS88YH.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-CPI-yj8h.js";import"./vec32-D9GsKZ1t-ChQ8pM0h.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-DO1C8i86.js";import"./imageUtils-BA2D6Uf1-DHJAVLvB.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-BbaJFY6Y.js";import"./ColorBackground-gVZldRLm-DS3lmQCJ.js";import"./parser-DyDJ-rlI-Cb-vzo7L.js";import"./layerViewUtils-DURAPenP-CsEbTZGp.js";const l=e=>{let t=class extends e{constructor(...r){super(...r),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"layerViews",void 0),i([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),i([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=i([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(n(s)){constructor(){super(...arguments),this.layerViews=new a}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};i([o()],p.prototype,"layerViews",void 0),p=i([m("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
