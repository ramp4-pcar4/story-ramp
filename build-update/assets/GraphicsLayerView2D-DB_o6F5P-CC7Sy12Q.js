import{bR as o,jO as g,cY as l,cj as m,T as a,c as p,d as c,j as n}from"./story-u82SUoyt.js";import{X as d,Y as u}from"./LayerView-DONYuvqR-B0sTbZPM.js";import{d as w}from"./GraphicContainer-DPQzFmqj-B88Mpe5r.js";import{X as y}from"./GraphicsView2D-DGP_h330-ClwJ5lUp.js";import{i as V}from"./HighlightCounter-DFWq7PnG-L3ompOf4.js";import"./main-CmCzAIzx.js";import"./Container-C-rqKhNk-Cy_50Ai2.js";import"./layerViewUtils-DyE3oc1e-By7kVODP.js";import"./AGraphicContainer-aPpZ1eAs-DmjPgpdc.js";import"./TechniqueInstance-DBGJNG3B-SR4_ABma.js";import"./UpdateTracking2D-swFQJIjy-DIMKE4HS.js";import"./BidiEngine-Bdqv5H5j-Dyqh9XG-.js";import"./GeometryUtils-v59R1Z6F-CnoE8NEL.js";import"./Rect-DD6XS68q-D_hsV3ag.js";import"./LabelMetric-DpMX58iW-DQjoeTGv.js";import"./Program-1XjJitsM-BYW2klMY.js";import"./BufferObject-DqJSjWFs-WjlyS7Z7.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./Util-cAlFLh9R-DJ8bULVc.js";import"./TileContainer-C5yGwaDr-B9jGuACK.js";import"./WGLContainer-whJgsi2t-uiIX2w2R.js";import"./VertexArrayObject-C4kjI814-DyePhA9o.js";import"./ProgramTemplate-B_NcbdFz-CKaYh1g3.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./StyleDefinition-CovmM7Ch-CLqmXI8n.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./FeatureCommandQueue-F8dH-mVd-Dn6ySB5Z.js";import"./constants-Bqe1QJ4u-F8oTIn7N.js";import"./AttributeStore-BysBgiw_-CB9Q5SC_.js";import"./TimeOnly-BR6daUyu-BGOh8DJt.js";import"./timeSupport-sB9XTwIv-CgIn3vO1.js";import"./normalizeUtilsSync-BGR0Mvo7-CSMe1U96.js";let s=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let e;typeof i=="number"?e=[i]:i instanceof g?e=[i.uid]:Array.isArray(i)&&i.length>0?e=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):l.isCollection(i)&&i.length>0&&(e=i.map(r=>r&&r.uid).toArray());const h=e?.filter(m);return h?.length?(this._addHighlight(h,t),a(()=>this._removeHighlight(h,t))):a()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightGroups(t),h=this._getHighlightBits(e);i.push({objectId:t,highlightFlags:h})}this.graphicsView?.setHighlight(i)}};p([c()],s.prototype,"graphicsView",void 0),s=p([n("esri.views.2d.layers.GraphicsLayerView2D")],s);const Z=s;export{Z as default};
