import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-Doly9N9p.js";import{d as n}from"./BitmapContainer-BC8fvmFc-C6Z_3UuF.js";import{X as h,Y as d}from"./LayerView-Bish-E63-DK1SFHE3.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-CHHOPUHq.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-DxrmlBaQ.js";import"./main-QGPoLsvl.js";import"./WGLContainer-LxgEo4I_-uPdq0FyK.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-Br-5CSAC.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-Dk2JyWCy.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-DI0GKSfI.js";import"./BufferObject-BM_7mcDb-EYaqMhmk.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-BvRnjYBj.js";import"./ProgramTemplate-DQOm6Omy-yxBgwK3o.js";import"./Tile-D75RMC64-g8Sx5TPr.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-BGwa3-Dg.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-2F5OgLgJ.js";import"./workers-PiCjreoO-Dc6Tqm-o.js";import"./ReactiveMap-CFk6jPfN-CSefy1PZ.js";import"./signal-CETehA7D-DQA5V72u.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-BPr0_G9t.js";import"./Field-C6hA1tZj-CkWoRbmp.js";import"./fieldType-CD2CL2hr-Do9kp-dx.js";import"./TimeExtent-Cn0Jofqr-BcCXKjqL.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-CJtpe3RS.js";import"./Cyclical-C_9rKUUQ-DyGueJyk.js";import"./CollectionFlattener-DkHuHn5E-dp3hDI2N.js";import"./projection-BA9M1R7d-CAbqHZiw.js";import"./projectBuffer-CvCBvJ6W-KqAd8Vef.js";import"./TileInfo-CWIRDhZl-RqA7tkOZ.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-DGrOr3vp.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-DHvcjtvD.js";import"./Map-1zd11DKO-Bme1mjOQ.js";import"./Basemap-BEqqSTw9-yGsB1EL7.js";import"./loadAll-e978YItg-4pMG3qU7.js";import"./PortalItem-CctGdnxF-CfFOGshS.js";import"./writeUtils-D5qlLkwk-enZap9KW.js";import"./compilerUtils-CV1QYWI8-VdY86_Y-.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-6clJxb1Q.js";import"./TablesMixin-C8RojhYs-LCBvmsnP.js";import"./Layer-ChoECxvZ-BmDHBjO8.js";import"./GraphicsCollection-CWTXNZOX-BdlDfR8M.js";import"./HeightModelInfo-C5vFqzyF-BH6aliHn.js";import"./arcgisLayerUrl-HNYh8jvG-C9dO8cs9.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-fHOpXwKi.js";import"./normalizeUtilsCommon-CRJlkfEA-QNLP9y_F.js";import"./utils-9sQxfkoa-D8FX0sO8.js";import"./utils-Bq23Xwmj-CKlS81kz.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-DriQgzLZ.js";import"./vec32-D9GsKZ1t-BPSFE14A.js";import"./imageUtils-BA2D6Uf1-CYx0DlwL.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-BDyz4v43.js";import"./ColorBackground-gVZldRLm-Dca2T4QI.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-DVZvemLA.js";import"./parser-DyDJ-rlI-CvOs11Ip.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-qxGGE-I8.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-BGA3o1Pf.js";import"./Bitmap-CcqmzvfR-C22fE2NY.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};
