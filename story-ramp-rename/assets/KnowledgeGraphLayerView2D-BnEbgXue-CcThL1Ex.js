import{ag as p,am as m,v as o,S as e,dA as a,i as s}from"./story-BALhSCU7.js";import{X as l,Y as n}from"./LayerView-Bish-E63-Cv6Svpgt.js";import"./main-BCzga7PA.js";import"./Container-BcuL1ZEG-U1fG92tS.js";import"./MapView-BGOJJ8ch-DPUFApVG.js";import"./Cyclical-C_9rKUUQ-DJcJQNQk.js";import"./CollectionFlattener-DkHuHn5E-D_ZAvVoJ.js";import"./workers-PiCjreoO-CUwDgZt7.js";import"./projection-BA9M1R7d-Dyo_IsVG.js";import"./projectBuffer-CvCBvJ6W-bHGRmyyJ.js";import"./TileInfo-CWIRDhZl-Cwiv6Z5o.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-CTLoxiQd.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CwHWtIZO.js";import"./signal-CETehA7D-D0vsRN_3.js";import"./Map-1zd11DKO-c35ygLrX.js";import"./Basemap-BEqqSTw9-Bv7WYyYA.js";import"./loadAll-e978YItg-Dtobda8W.js";import"./PortalItem-CctGdnxF-DavtV-Mb.js";import"./writeUtils-D5qlLkwk-CaXdB00z.js";import"./compilerUtils-CV1QYWI8-DKL3L-jh.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE--EG61PpO.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-Dnk19WXa.js";import"./Layer-ChoECxvZ-TXOW6IUu.js";import"./TimeExtent-Cn0Jofqr-tFW9LZvR.js";import"./GraphicsCollection-CWTXNZOX-CHAlSN3I.js";import"./HeightModelInfo-C5vFqzyF-Doqhj_kp.js";import"./ReactiveMap-CFk6jPfN-Ddrfc2aw.js";import"./Query-BrwMGK8U-CzbhvAJz.js";import"./Field-C6hA1tZj-Cw0XxATR.js";import"./fieldType-CD2CL2hr-DZOu8-Pt.js";import"./arcgisLayerUrl-HNYh8jvG-Cr4Ri6-P.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-DIUJ2F9L.js";import"./TileKey-C5IL-JBr-BFJP0tS-.js";import"./QueueProcessor-DbfV9fLy-BN3P1uTC.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-CoJ42GoH.js";import"./normalizeUtilsCommon-CRJlkfEA-MSNirfAC.js";import"./utils-9sQxfkoa-ci04oyxE.js";import"./utils-Bq23Xwmj-BGmoBdkO.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-B7G6zNuw.js";import"./vec32-D9GsKZ1t-C3WFXNeP.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-u-D7WjtS.js";import"./imageUtils-BA2D6Uf1-C-85BVa_.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-Cmit3fzy.js";import"./ColorBackground-gVZldRLm-lFNPn6CC.js";import"./parser-DyDJ-rlI-jhztkLH-.js";import"./layerViewUtils-DURAPenP-Bm5Z8-1w.js";let r=class extends l(n){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};o([e({cast:a})],r.prototype,"layerViews",null),o([e({readOnly:!0})],r.prototype,"updatingProgress",null),r=o([s("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const ut=r;export{ut as default};
