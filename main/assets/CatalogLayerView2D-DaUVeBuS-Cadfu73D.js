import{ag as a,v as i,S as o,i as m}from"./story-BkQiLBxm.js";import{X as n,Y as s}from"./LayerView-Bish-E63-Bw_JXIfC.js";import"./main-BW-KQ4QQ.js";import"./Container-BcuL1ZEG-DZC9xpqA.js";import"./MapView-BGOJJ8ch-BqyFtYfu.js";import"./Cyclical-C_9rKUUQ-QRJU6jua.js";import"./CollectionFlattener-DkHuHn5E-Crptj88_.js";import"./workers-PiCjreoO-5sQuxu7r.js";import"./projection-BA9M1R7d-AQqrh96z.js";import"./projectBuffer-CvCBvJ6W-RY9fiKFM.js";import"./TileInfo-CWIRDhZl-nZDbsn1H.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-BbI268BX.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-C8DZhyDt.js";import"./signal-CETehA7D-B7QlAZJi.js";import"./Map-1zd11DKO-BAEvqwEx.js";import"./Basemap-BEqqSTw9-CbVXBjMg.js";import"./loadAll-e978YItg-AgeGXNXz.js";import"./PortalItem-CctGdnxF-C7PB3YCd.js";import"./writeUtils-D5qlLkwk-CAs7_jJd.js";import"./compilerUtils-CV1QYWI8-Z-4m1K-j.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-CW6wbkQH.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-DrJgbk0B.js";import"./Layer-ChoECxvZ-BOyR5nWu.js";import"./TimeExtent-Cn0Jofqr-CCQT7v5L.js";import"./GraphicsCollection-CWTXNZOX-CPTmgNHx.js";import"./HeightModelInfo-C5vFqzyF-BY1vp1bL.js";import"./ReactiveMap-CFk6jPfN-CzMyA3jt.js";import"./Query-BrwMGK8U-CBV8ILXD.js";import"./Field-C6hA1tZj-BU1mcC4s.js";import"./fieldType-CD2CL2hr-CICCXO1I.js";import"./arcgisLayerUrl-HNYh8jvG-RqcxUMnS.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-sK_U160O.js";import"./TileKey-C5IL-JBr-BYA4V-MX.js";import"./QueueProcessor-DbfV9fLy-Bale0cz0.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-CQJmL2u9.js";import"./normalizeUtilsCommon-CRJlkfEA-BgZP86r9.js";import"./utils-9sQxfkoa-CyzxrrMV.js";import"./utils-Bq23Xwmj-DUQSW4fn.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-ppd2Ajfj.js";import"./vec32-D9GsKZ1t-CvfiXKq5.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-DqFaXtA9.js";import"./imageUtils-BA2D6Uf1-CweLdvJP.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-Deq-BDm-.js";import"./ColorBackground-gVZldRLm-Cyk3Ud0N.js";import"./parser-DyDJ-rlI-Bbhymy2s.js";import"./layerViewUtils-DURAPenP-C8ZfJLdW.js";const l=e=>{let t=class extends e{constructor(...r){super(...r),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"layerViews",void 0),i([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),i([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=i([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(n(s)){constructor(){super(...arguments),this.layerViews=new a}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};i([o()],p.prototype,"layerViews",void 0),p=i([m("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
