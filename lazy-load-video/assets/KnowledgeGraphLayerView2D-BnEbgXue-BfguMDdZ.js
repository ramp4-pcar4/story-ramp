import{ag as p,am as m,v as o,S as e,dA as a,i as s}from"./story-DukCeLi3.js";import{X as l,Y as n}from"./LayerView-Bish-E63-DhrZNlzD.js";import"./main-B3PZTcgA.js";import"./Container-BcuL1ZEG-G6Gk389U.js";import"./MapView-BGOJJ8ch-BwdITtB1.js";import"./Cyclical-C_9rKUUQ-BIQEbOLz.js";import"./CollectionFlattener-DkHuHn5E-q9qXdSHZ.js";import"./workers-PiCjreoO-CIKgCg1Z.js";import"./projection-BA9M1R7d-CbsPsXgq.js";import"./projectBuffer-CvCBvJ6W-h7QFg6yE.js";import"./TileInfo-CWIRDhZl-Dk5yrxIy.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-D_8MMBUS.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CL1iLe8O.js";import"./signal-CETehA7D-DE6-Kpqb.js";import"./Map-1zd11DKO-BYVwwswk.js";import"./Basemap-BEqqSTw9-Dj7NLsve.js";import"./loadAll-e978YItg-rPpYs7CC.js";import"./PortalItem-CctGdnxF-D7pLHoS7.js";import"./writeUtils-D5qlLkwk-CS0gK9vd.js";import"./compilerUtils-CV1QYWI8-D7XcsTA-.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-B9GWgFcZ.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-BgvkYyt-.js";import"./Layer-ChoECxvZ-Dzrr3c57.js";import"./TimeExtent-Cn0Jofqr-BuW5m--f.js";import"./GraphicsCollection-CWTXNZOX-DMh4Tiu9.js";import"./HeightModelInfo-C5vFqzyF-Cfi2t3-9.js";import"./ReactiveMap-CFk6jPfN-DVqNcsNr.js";import"./Query-BrwMGK8U-Bo6aEy1A.js";import"./Field-C6hA1tZj-B7J_PAy2.js";import"./fieldType-CD2CL2hr-CrSdNyN_.js";import"./arcgisLayerUrl-HNYh8jvG-fVGCSkry.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-MiZUsBz-.js";import"./TileKey-C5IL-JBr-CCGEeWzP.js";import"./QueueProcessor-DbfV9fLy-DiJYgKOC.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-DzRblqCZ.js";import"./normalizeUtilsCommon-CRJlkfEA-BlT3hgn_.js";import"./utils-9sQxfkoa-D7rN0BHG.js";import"./utils-Bq23Xwmj-Nei1QMJm.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-DX-LnSWZ.js";import"./vec32-D9GsKZ1t-DbwsZGJI.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-fEeBP3YE.js";import"./imageUtils-BA2D6Uf1-BEet8dYZ.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-CiBcZjr9.js";import"./ColorBackground-gVZldRLm-BnuTlwUl.js";import"./parser-DyDJ-rlI-H-BRJlKF.js";import"./layerViewUtils-DURAPenP-BaHkdmdx.js";let r=class extends l(n){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};o([e({cast:a})],r.prototype,"layerViews",null),o([e({readOnly:!0})],r.prototype,"updatingProgress",null),r=o([s("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const ut=r;export{ut as default};
