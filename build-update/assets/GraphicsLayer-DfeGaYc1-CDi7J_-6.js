import{v as e,S as i,i as s}from"./story-_2qqwocf.js";import{o,u as a}from"./GraphicsCollection-CWTXNZOX-DmQ0bebe.js";import{D as h}from"./Layer-ChoECxvZ-ydCoq6Yp.js";import{u as n}from"./BlendLayer-D1WkSmwP-DRIGcbWa.js";import{S as m}from"./ScaleRangeLayer-Bz0DcnvM-UDnN-NkL.js";import{q as d}from"./ElevationInfo-yv2-9tj6-C9wmgyT0.js";import"./main-C0sSK5MQ.js";import"./TimeExtent-Cn0Jofqr-BkSLp2ff.js";import"./jsonUtils-wIllKWI4-DwkvU6b8.js";import"./parser-DyDJ-rlI-BAimiePc.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-B6zP77UN.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./lengthUtils-DKpMe5qR-CzZf1ZwU.js";let t=class extends n(m(h)){constructor(r){super(r),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r)}removeMany(r){this.graphics.removeMany(r)}on(r,p){return super.on(r,p)}graphicChanged(r){this.emit("graphic-update",r)}};e([i({type:d})],t.prototype,"elevationInfo",void 0),e([i(a(o,"graphics"))],t.prototype,"graphics",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i()],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({readOnly:!0})],t.prototype,"type",void 0),e([i({constructOnly:!0})],t.prototype,"internal",void 0),t=e([s("esri.layers.GraphicsLayer")],t);const E=t;export{E as default};
