import{cY as i,nU as l,c as s,d as a,ot as n,j as h}from"./story-u82SUoyt.js";import{X as o,Y as d}from"./LayerView-DONYuvqR-B0sTbZPM.js";import"./main-CmCzAIzx.js";import"./Container-C-rqKhNk-Cy_50Ai2.js";import"./layerViewUtils-DyE3oc1e-By7kVODP.js";let t=class extends o(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",l(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,r)=>e+r.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,r)=>this.container.addChildAt(e.container,r))}};s([a({cast:n})],t.prototype,"layerViews",null),s([a({readOnly:!0})],t.prototype,"updatingProgress",null),t=s([h("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const u=t;export{u as default};
