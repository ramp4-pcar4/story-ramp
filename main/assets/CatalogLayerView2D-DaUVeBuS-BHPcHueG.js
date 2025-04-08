import{ag as a,v as i,S as o,i as m}from"./story-DiCRoC_e.js";import{X as n,Y as s}from"./LayerView-Bish-E63-CPH8SSzx.js";import"./main-CiYJ3dN4.js";import"./Container-BcuL1ZEG-CltgZPWp.js";import"./MapView-BGOJJ8ch-Bb2P85zR.js";import"./Cyclical-C_9rKUUQ-CUNAxoTG.js";import"./CollectionFlattener-DkHuHn5E-0NQ1Rggo.js";import"./workers-PiCjreoO-BXZ5FDBd.js";import"./projection-BA9M1R7d-CcZB9XMQ.js";import"./projectBuffer-CvCBvJ6W-ByAeieAU.js";import"./TileInfo-CWIRDhZl-CmNTpF8r.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-Ddd3jvXA.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-DOl6pLj-.js";import"./signal-CETehA7D-Cg54kF1w.js";import"./Map-1zd11DKO-DfO4rgY5.js";import"./Basemap-BEqqSTw9-DKO1bDcz.js";import"./loadAll-e978YItg-DjKz_xvX.js";import"./PortalItem-CctGdnxF-BeFjX_rQ.js";import"./writeUtils-D5qlLkwk-nilemuQP.js";import"./compilerUtils-CV1QYWI8--WwYYvUj.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-D1Fcb1KW.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-CT_4NGca.js";import"./Layer-ChoECxvZ-ClWT82Ev.js";import"./TimeExtent-Cn0Jofqr-BDWc4Lo1.js";import"./GraphicsCollection-CWTXNZOX-Co16TLqT.js";import"./HeightModelInfo-C5vFqzyF-BHTuGM0y.js";import"./ReactiveMap-CFk6jPfN-CauheCvX.js";import"./Query-BrwMGK8U-Drn5b_Ie.js";import"./Field-C6hA1tZj-Bi1glJ9Z.js";import"./fieldType-CD2CL2hr-B7CZXqtx.js";import"./arcgisLayerUrl-HNYh8jvG-BnJ-3iEA.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-BMhPkpdz.js";import"./TileKey-C5IL-JBr-DiOb2PiB.js";import"./QueueProcessor-DbfV9fLy-B3CnxDP4.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-B1-PLjtk.js";import"./normalizeUtilsCommon-CRJlkfEA-Dpwo9xmC.js";import"./utils-9sQxfkoa-DsA1_Zqc.js";import"./utils-Bq23Xwmj-cqdQuasp.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-By0gee9r.js";import"./vec32-D9GsKZ1t-Mrh4hIJQ.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-PSnrmvjS.js";import"./imageUtils-BA2D6Uf1-DZo79zc3.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-Bwmn3WPI.js";import"./ColorBackground-gVZldRLm-AmyQh2ku.js";import"./parser-DyDJ-rlI-CDQsNN9A.js";import"./layerViewUtils-DURAPenP-DeqWWMwX.js";const l=e=>{let t=class extends e{constructor(...r){super(...r),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"layerViews",void 0),i([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),i([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=i([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(n(s)){constructor(){super(...arguments),this.layerViews=new a}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};i([o()],p.prototype,"layerViews",void 0),p=i([m("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
