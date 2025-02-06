import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-CpfXl0AZ.js";import{d as n}from"./BitmapContainer-BC8fvmFc-BjGxZreg.js";import{X as h,Y as d}from"./LayerView-Bish-E63-Cqnh9PgZ.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-D3OxnIh_.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-CH12Az6n.js";import"./main-CtRy8FqL.js";import"./WGLContainer-LxgEo4I_-BOe9r3hw.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-DpKdh71q.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-DaNN_TAO.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-CqUghxeT.js";import"./BufferObject-BM_7mcDb-HdI3in6k.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-D6CmnVkS.js";import"./ProgramTemplate-DQOm6Omy-Dgw1I53d.js";import"./Tile-D75RMC64-L_XH2w5J.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-CPdgHLXM.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-DsugeAzP.js";import"./workers-PiCjreoO-CZYMiBYU.js";import"./ReactiveMap-CFk6jPfN-6ES4kyNQ.js";import"./signal-CETehA7D-BnERymbm.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-CWQzNV27.js";import"./Field-C6hA1tZj-BSM5xuID.js";import"./fieldType-CD2CL2hr-CDvHO_Wq.js";import"./TimeExtent-Cn0Jofqr-4VoXSUEW.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-vR78AifR.js";import"./Cyclical-C_9rKUUQ-BqGHwYJ7.js";import"./CollectionFlattener-DkHuHn5E-Mn8IMUHE.js";import"./projection-BA9M1R7d-CP5QudOM.js";import"./projectBuffer-CvCBvJ6W-BubgUgr7.js";import"./TileInfo-CWIRDhZl-G1xsm2ge.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-BdGeTm6g.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CssITlMW.js";import"./Map-1zd11DKO-EKzL7rER.js";import"./Basemap-BEqqSTw9-C_VOjhn5.js";import"./loadAll-e978YItg-B3YU3Bbq.js";import"./PortalItem-CctGdnxF-BGSgJmTy.js";import"./writeUtils-D5qlLkwk-C2Hlc9V-.js";import"./compilerUtils-CV1QYWI8-CSUs6fea.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-A5HZV98G.js";import"./TablesMixin-C8RojhYs-BnhZouA-.js";import"./Layer-ChoECxvZ-BLD3oxun.js";import"./GraphicsCollection-CWTXNZOX-oBHbfSdx.js";import"./HeightModelInfo-C5vFqzyF-CbP8XfO9.js";import"./arcgisLayerUrl-HNYh8jvG-wV8o3dY0.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-Cmdf3HlM.js";import"./normalizeUtilsCommon-CRJlkfEA-nP7jATWk.js";import"./utils-9sQxfkoa-BVCNLAjT.js";import"./utils-Bq23Xwmj-DfHEE06c.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-BEMpTAnm.js";import"./vec32-D9GsKZ1t-DuELXDXn.js";import"./imageUtils-BA2D6Uf1-JSxdsLRI.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-BGunVrjs.js";import"./ColorBackground-gVZldRLm-BybTzugS.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-PI7A-Wge.js";import"./parser-DyDJ-rlI-BAPGcjqJ.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-Cp404--A.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-DOeoPujI.js";import"./Bitmap-CcqmzvfR-uKweEevb.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};
