import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-BALhSCU7.js";import{d as n}from"./BitmapContainer-BC8fvmFc-C17Fu8UI.js";import{X as h,Y as d}from"./LayerView-Bish-E63-Cv6Svpgt.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-CRrknBjC.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-BPUE3-K6.js";import"./main-BCzga7PA.js";import"./WGLContainer-LxgEo4I_-D9hPdSXm.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-DzgPTiYV.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-u-D7WjtS.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-DBSqGNjQ.js";import"./BufferObject-BM_7mcDb-CrMkEYN6.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-tkT4WxQW.js";import"./ProgramTemplate-DQOm6Omy-BeSmgmiY.js";import"./Tile-D75RMC64-DIUJ2F9L.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-BFJP0tS-.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-BN3P1uTC.js";import"./workers-PiCjreoO-CUwDgZt7.js";import"./ReactiveMap-CFk6jPfN-Ddrfc2aw.js";import"./signal-CETehA7D-D0vsRN_3.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-CzbhvAJz.js";import"./Field-C6hA1tZj-Cw0XxATR.js";import"./fieldType-CD2CL2hr-DZOu8-Pt.js";import"./TimeExtent-Cn0Jofqr-tFW9LZvR.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-DPUFApVG.js";import"./Cyclical-C_9rKUUQ-DJcJQNQk.js";import"./CollectionFlattener-DkHuHn5E-D_ZAvVoJ.js";import"./projection-BA9M1R7d-Dyo_IsVG.js";import"./projectBuffer-CvCBvJ6W-bHGRmyyJ.js";import"./TileInfo-CWIRDhZl-Cwiv6Z5o.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-CTLoxiQd.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CwHWtIZO.js";import"./Map-1zd11DKO-c35ygLrX.js";import"./Basemap-BEqqSTw9-Bv7WYyYA.js";import"./loadAll-e978YItg-Dtobda8W.js";import"./PortalItem-CctGdnxF-DavtV-Mb.js";import"./writeUtils-D5qlLkwk-CaXdB00z.js";import"./compilerUtils-CV1QYWI8-DKL3L-jh.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE--EG61PpO.js";import"./TablesMixin-C8RojhYs-Dnk19WXa.js";import"./Layer-ChoECxvZ-TXOW6IUu.js";import"./GraphicsCollection-CWTXNZOX-CHAlSN3I.js";import"./HeightModelInfo-C5vFqzyF-Doqhj_kp.js";import"./arcgisLayerUrl-HNYh8jvG-Cr4Ri6-P.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-CoJ42GoH.js";import"./normalizeUtilsCommon-CRJlkfEA-MSNirfAC.js";import"./utils-9sQxfkoa-ci04oyxE.js";import"./utils-Bq23Xwmj-BGmoBdkO.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-B7G6zNuw.js";import"./vec32-D9GsKZ1t-C3WFXNeP.js";import"./imageUtils-BA2D6Uf1-C-85BVa_.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-Cmit3fzy.js";import"./ColorBackground-gVZldRLm-lFNPn6CC.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-U1fG92tS.js";import"./parser-DyDJ-rlI-jhztkLH-.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-D6yZmYvU.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-Bm5Z8-1w.js";import"./Bitmap-CcqmzvfR-CtS8ACRR.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};
