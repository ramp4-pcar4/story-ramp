import{ag as p,am as m,v as o,S as e,dA as a,i as s}from"./story-BRwEvu2S.js";import{X as l,Y as n}from"./LayerView-Bish-E63-CPHwyMc0.js";import"./main-BqOhRcj8.js";import"./Container-BcuL1ZEG-CwJf_doI.js";import"./MapView-BGOJJ8ch-DNiN8Rxs.js";import"./Cyclical-C_9rKUUQ-jMTkELJT.js";import"./CollectionFlattener-DkHuHn5E-BeR0WUKu.js";import"./workers-PiCjreoO-B1pUkjWr.js";import"./projection-BA9M1R7d-cWsUMj6A.js";import"./projectBuffer-CvCBvJ6W-CbGU9o22.js";import"./TileInfo-CWIRDhZl-CORafh7o.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-Ck62-3CI.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-Y-lRHPed.js";import"./signal-CETehA7D-DosbVmqG.js";import"./Map-1zd11DKO-8OVlbqW-.js";import"./Basemap-BEqqSTw9-Dbz4DU6H.js";import"./loadAll-e978YItg-BHojcVTX.js";import"./PortalItem-CctGdnxF-BwHH9alh.js";import"./writeUtils-D5qlLkwk-0yC9Tyj1.js";import"./compilerUtils-CV1QYWI8-DwrXJ3eY.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-BCHGyGI8.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-DHtVm2lv.js";import"./Layer-ChoECxvZ-DkwXoWsA.js";import"./TimeExtent-Cn0Jofqr--9ucgkmY.js";import"./GraphicsCollection-CWTXNZOX-BN5z_zT7.js";import"./HeightModelInfo-C5vFqzyF-CLKyfaRz.js";import"./ReactiveMap-CFk6jPfN-K_3IEckb.js";import"./Query-BrwMGK8U-C5yGXPrR.js";import"./Field-C6hA1tZj-BYTR5znb.js";import"./fieldType-CD2CL2hr-CZXcUd2A.js";import"./arcgisLayerUrl-HNYh8jvG-B78TEBfA.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-DMZYvo6f.js";import"./TileKey-C5IL-JBr-PhzYJr6_.js";import"./QueueProcessor-DbfV9fLy-B6IdpFmg.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-VEOszO_r.js";import"./normalizeUtilsCommon-CRJlkfEA-NtgUZ0-a.js";import"./utils-9sQxfkoa-Ckf6anuL.js";import"./utils-Bq23Xwmj-BbINsurJ.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-keQOS7pQ.js";import"./vec32-D9GsKZ1t-D96lPWh1.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-qT5BcZ8g.js";import"./imageUtils-BA2D6Uf1-QV_owT6w.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-BUjaZapl.js";import"./ColorBackground-gVZldRLm-DnqbhVXG.js";import"./parser-DyDJ-rlI-CJiE5Ov_.js";import"./layerViewUtils-DURAPenP-hK8eWDx1.js";let r=class extends l(n){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};o([e({cast:a})],r.prototype,"layerViews",null),o([e({readOnly:!0})],r.prototype,"updatingProgress",null),r=o([s("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const ut=r;export{ut as default};
