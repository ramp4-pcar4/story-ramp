import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-BiKiHlkE.js";import{d as n}from"./BitmapContainer-BC8fvmFc-CwyMu-81.js";import{X as h,Y as d}from"./LayerView-Bish-E63-CG1zGB-h.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-k-jU3_aO.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-Br7CY-oL.js";import"./main-B1buenaU.js";import"./WGLContainer-LxgEo4I_-B4gMktrK.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-C1GWunbm.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-BkX9uGrU.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-C-2Hdk3B.js";import"./BufferObject-BM_7mcDb-HmZDvVI4.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-Covl7SlS.js";import"./ProgramTemplate-DQOm6Omy-JFt5ugrK.js";import"./Tile-D75RMC64-DiiHq23L.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-uK2kUAb6.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-83kuXuN2.js";import"./workers-PiCjreoO-DRO8CEyz.js";import"./ReactiveMap-CFk6jPfN-ZalTgrvG.js";import"./signal-CETehA7D-CUl892f-.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-CDdlv9bu.js";import"./Field-C6hA1tZj-Cy9roU_w.js";import"./fieldType-CD2CL2hr-BkSJODzd.js";import"./TimeExtent-Cn0Jofqr-Cj62iRam.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-OsWToufb.js";import"./Cyclical-C_9rKUUQ-yJTsoVMp.js";import"./CollectionFlattener-DkHuHn5E-BPxg9Po3.js";import"./projection-BA9M1R7d-BIL24-O3.js";import"./projectBuffer-CvCBvJ6W-DvKDtWOD.js";import"./TileInfo-CWIRDhZl-BPFDuZiB.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-BA5dAglu.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-Bj2VrSua.js";import"./Map-1zd11DKO-DeOFOjmw.js";import"./Basemap-BEqqSTw9-Dv9zcmSS.js";import"./loadAll-e978YItg-QOjUs7YY.js";import"./PortalItem-CctGdnxF-BFQAOfOd.js";import"./writeUtils-D5qlLkwk-BINPwxiH.js";import"./compilerUtils-CV1QYWI8-CfkYzKZW.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-BWzZtj3z.js";import"./TablesMixin-C8RojhYs-C8skCAY5.js";import"./Layer-ChoECxvZ-BWfJaP1b.js";import"./GraphicsCollection-CWTXNZOX-CUgENH8s.js";import"./HeightModelInfo-C5vFqzyF-B76_uz8Q.js";import"./arcgisLayerUrl-HNYh8jvG-BAgnERDB.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-vovv1lAi.js";import"./normalizeUtilsCommon-CRJlkfEA-CTbdPQgd.js";import"./utils-9sQxfkoa-CWlNtSJ_.js";import"./utils-Bq23Xwmj-eUIbIKWq.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-C2ziiKOF.js";import"./vec32-D9GsKZ1t-D5CTt1tC.js";import"./imageUtils-BA2D6Uf1-D1LYl9uE.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-XyW4n6uX.js";import"./ColorBackground-gVZldRLm-D1lWeWch.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-BWXBaWgW.js";import"./parser-DyDJ-rlI-Crfkkohr.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-_5smiS3V.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-BUCTBqOO.js";import"./Bitmap-CcqmzvfR-r6cZmZAn.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};
