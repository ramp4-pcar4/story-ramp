import{ag as a,v as i,S as o,i as m}from"./story-OUarUCIt.js";import{X as n,Y as s}from"./LayerView-Bish-E63-DehQ-_Za.js";import"./main-lj2zzr_L.js";import"./Container-BcuL1ZEG-DGKfmUxH.js";import"./MapView-BGOJJ8ch-MH2z-up5.js";import"./Cyclical-C_9rKUUQ-BqcUyGYR.js";import"./CollectionFlattener-DkHuHn5E-BaAeLIOQ.js";import"./workers-PiCjreoO-mU03Z-E4.js";import"./projection-BA9M1R7d-Cytmrlsd.js";import"./projectBuffer-CvCBvJ6W-CiwR2FyN.js";import"./TileInfo-CWIRDhZl-561xzxdP.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-CpWzbU7H.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CQ9rGZXi.js";import"./signal-CETehA7D-TD-k6B-y.js";import"./Map-1zd11DKO-DZlipvJg.js";import"./Basemap-BEqqSTw9-6qmF8bsX.js";import"./loadAll-e978YItg-cyBswBq0.js";import"./PortalItem-CctGdnxF-DgukgleB.js";import"./writeUtils-D5qlLkwk-BhsnyRJI.js";import"./compilerUtils-CV1QYWI8-yV6K-awH.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-d6nV0_rZ.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-R4uQiiTY.js";import"./Layer-ChoECxvZ-DxWUU3pP.js";import"./TimeExtent-Cn0Jofqr-BYNqT7sE.js";import"./GraphicsCollection-CWTXNZOX-EGgNeYwI.js";import"./HeightModelInfo-C5vFqzyF-BrMy6Kw6.js";import"./ReactiveMap-CFk6jPfN-DLjzYieQ.js";import"./Query-BrwMGK8U-gUIs0TS1.js";import"./Field-C6hA1tZj-DY7R6puO.js";import"./fieldType-CD2CL2hr-D-1zqE7t.js";import"./arcgisLayerUrl-HNYh8jvG-DDFS2Vkh.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-DDmsm7e7.js";import"./TileKey-C5IL-JBr-Cy7bNm0k.js";import"./QueueProcessor-DbfV9fLy-2ansCCcJ.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-DaA_UEnd.js";import"./normalizeUtilsCommon-CRJlkfEA-v9PmQ4u7.js";import"./utils-9sQxfkoa-Djr5L7DU.js";import"./utils-Bq23Xwmj-CIl5z47y.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-C-sG6deK.js";import"./vec32-D9GsKZ1t-iWg2zFa3.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-Bv29bzNX.js";import"./imageUtils-BA2D6Uf1-rtvarRV-.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-5qCYzF4G.js";import"./ColorBackground-gVZldRLm-BKgsF61w.js";import"./parser-DyDJ-rlI-BZnJ9Tpt.js";import"./layerViewUtils-DURAPenP-XPLsaos3.js";const l=e=>{let t=class extends e{constructor(...r){super(...r),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"layerViews",void 0),i([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),i([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=i([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(n(s)){constructor(){super(...arguments),this.layerViews=new a}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};i([o()],p.prototype,"layerViews",void 0),p=i([m("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
