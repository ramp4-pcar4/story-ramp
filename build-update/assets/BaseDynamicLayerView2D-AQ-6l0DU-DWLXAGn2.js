import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-_2qqwocf.js";import{d as n}from"./BitmapContainer-BC8fvmFc-BOFMS6JL.js";import{X as h,Y as d}from"./LayerView-Bish-E63-B8eXWwDA.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-DEIpkX7o.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-AuKa4mhh.js";import"./main-C0sSK5MQ.js";import"./WGLContainer-LxgEo4I_-CgzF9B3M.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-BOZt6KFL.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-DGWsXHid.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-CSpaaOpa.js";import"./BufferObject-BM_7mcDb-j3Cqa-ar.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-DLZau0NP.js";import"./ProgramTemplate-DQOm6Omy-vgLpUQ4v.js";import"./Tile-D75RMC64-BQn8uR2s.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-C7yrpm3P.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-C9L7n3QC.js";import"./workers-PiCjreoO-BlTCpgdh.js";import"./ReactiveMap-CFk6jPfN-Bwt-AC3s.js";import"./signal-CETehA7D-7_0LD89O.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-CFn_2Vls.js";import"./Field-C6hA1tZj-0h4zvHrA.js";import"./fieldType-CD2CL2hr-jFb-atFW.js";import"./TimeExtent-Cn0Jofqr-BkSLp2ff.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-CjyVrgdp.js";import"./Cyclical-C_9rKUUQ-C0Pfhd6h.js";import"./CollectionFlattener-DkHuHn5E-BwdSxxdX.js";import"./projection-BA9M1R7d-BNPaubfz.js";import"./projectBuffer-CvCBvJ6W-CjFsH9Cb.js";import"./TileInfo-CWIRDhZl-DA81rMhH.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-DpURpNrQ.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CLUD74Sv.js";import"./Map-1zd11DKO-JA8p_yaf.js";import"./Basemap-BEqqSTw9-ShpGK2ya.js";import"./loadAll-e978YItg-DA8EhtZC.js";import"./PortalItem-CctGdnxF-BsZcaSxd.js";import"./writeUtils-D5qlLkwk-CUd7zHcC.js";import"./compilerUtils-CV1QYWI8-8J_jrmC-.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-B6zP77UN.js";import"./TablesMixin-C8RojhYs-BtSxMcJq.js";import"./Layer-ChoECxvZ-ydCoq6Yp.js";import"./GraphicsCollection-CWTXNZOX-DmQ0bebe.js";import"./HeightModelInfo-C5vFqzyF-NUSOnWtQ.js";import"./arcgisLayerUrl-HNYh8jvG-BDFw5rva.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-LxE2kY-t.js";import"./normalizeUtilsCommon-CRJlkfEA-DnAkLSlZ.js";import"./utils-9sQxfkoa-BagUpzfV.js";import"./utils-Bq23Xwmj-eS9Z43Ef.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-DS_jUKfI.js";import"./vec32-D9GsKZ1t-BJTEeoJ0.js";import"./imageUtils-BA2D6Uf1-BF6f21C3.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-DU9FKncl.js";import"./ColorBackground-gVZldRLm-D4SneGWo.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-XuyrAPcR.js";import"./parser-DyDJ-rlI-BAimiePc.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-vITkIZH3.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-BD-e_6fK.js";import"./Bitmap-CcqmzvfR-DIAPt4XX.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};