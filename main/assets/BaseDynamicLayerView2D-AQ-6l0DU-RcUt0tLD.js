import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-CkMlewU3.js";import{d as n}from"./BitmapContainer-BC8fvmFc-DFK30CQY.js";import{X as h,Y as d}from"./LayerView-Bish-E63-BOy07mXn.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-NoLbyrMe.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-us3EhTAQ.js";import"./main-Cm-r76Ne.js";import"./WGLContainer-LxgEo4I_-BXcNakmj.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-DFtImZsm.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-Cm-4vwNi.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-BTRhWqDr.js";import"./BufferObject-BM_7mcDb-OWKcxSCx.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-kVmTbqyo.js";import"./ProgramTemplate-DQOm6Omy-K4qGuVI2.js";import"./Tile-D75RMC64-BPNGEJlp.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-BTDlI8dR.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-BqYuO1P2.js";import"./workers-PiCjreoO-DMTOieLn.js";import"./ReactiveMap-CFk6jPfN-3IO31oE8.js";import"./signal-CETehA7D-CA6673qf.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-By5iCTP7.js";import"./Field-C6hA1tZj-B756sTkI.js";import"./fieldType-CD2CL2hr-BCq3sWrh.js";import"./TimeExtent-Cn0Jofqr-fxjOtLzM.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-DI3jCD9q.js";import"./Cyclical-C_9rKUUQ-C_0xhH5V.js";import"./CollectionFlattener-DkHuHn5E-DsG7aGBE.js";import"./projection-BA9M1R7d-RfPItGLP.js";import"./projectBuffer-CvCBvJ6W-CWuj2ZR5.js";import"./TileInfo-CWIRDhZl-BsBIgD0h.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-CiT8fMnR.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-D0cReoJH.js";import"./Map-1zd11DKO-C0M8vVqS.js";import"./Basemap-BEqqSTw9-DSMDPNFT.js";import"./loadAll-e978YItg-DL6-aW-B.js";import"./PortalItem-CctGdnxF-D9AqjVpa.js";import"./writeUtils-D5qlLkwk-CNnm_JCz.js";import"./compilerUtils-CV1QYWI8-KaJV-E6w.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-COS3kPuj.js";import"./TablesMixin-C8RojhYs-4DsccRod.js";import"./Layer-ChoECxvZ-CNwU3ltx.js";import"./GraphicsCollection-CWTXNZOX-CoKa0V36.js";import"./HeightModelInfo-C5vFqzyF-CJZYqH7r.js";import"./arcgisLayerUrl-HNYh8jvG-M1LOv6Xp.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-Dt0yIdLU.js";import"./normalizeUtilsCommon-CRJlkfEA-BnA3Hgxo.js";import"./utils-9sQxfkoa-Dfdm_Fhp.js";import"./utils-Bq23Xwmj-BYoqxoiI.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-Bi2YKktx.js";import"./vec32-D9GsKZ1t-BwfXEU4n.js";import"./imageUtils-BA2D6Uf1-DqDQty69.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-Boina874.js";import"./ColorBackground-gVZldRLm-uk8h85lz.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-M_eukJ4z.js";import"./parser-DyDJ-rlI-CDRoST5S.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-CW5Hz_r6.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-BNsgMR2H.js";import"./Bitmap-CcqmzvfR-qOmTCfWj.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};
