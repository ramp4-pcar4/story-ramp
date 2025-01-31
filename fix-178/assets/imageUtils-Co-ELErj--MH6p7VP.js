import{v as V,i as y,bh as I}from"./story-BLxSf89q.js";import{E as m,e as c}from"./MapView-BGOJJ8ch-CHKKgtqs.js";import{I as M}from"./Bitmap-CcqmzvfR-Cvi1WmU-.js";import{s as T,K as C}from"./WGLContainer-LxgEo4I_-BFfeWn_r.js";import{h as P}from"./TileContainer-D48pXXgL-CJtyCp42.js";let A=class extends C{constructor(e,t,r,s,i,n,o=null){super(e,t,r,s,i,n),this.bitmap=new M(o),this.bitmap.coordScale=[i,n],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:c(),tileMat3:c()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}},F=class extends P{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const t=this.tileInfoView.getTileBounds(I(),e),r=this.tileInfoView.getTileResolution(e.level),[s,i]=this.tileInfoView.tileInfo.size;return new A(e,r,t[0],t[3],s,i)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[T.bitmap],target:()=>this.children.map(r=>r.bitmap),drawPhase:m.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===m.MAP&&super.doRender(e)}};const O=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new F(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return t=V([y("esri.views.2d.layers.BitmapTileLayerView2D")],t),t};function L(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function _(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function z(e,t,r,s){if(r.level===s.level)return t;const i=e.tileInfo.size,n=e.getTileResolution(r.level),o=e.getTileResolution(s.level);let a=e.getLODInfoAt(s.level);const p=a.getXForColumn(s.col),u=a.getYForRow(s.row);a=e.getLODInfoAt(r.level);const f=a.getXForColumn(r.col),b=a.getYForRow(r.row),l=L(t)/i[0],h=_(t)/i[1],w=Math.round(l*((p-f)/n)),g=Math.round(h*(-(u-b)/n)),R=Math.round(l*i[0]*(o/n)),v=Math.round(h*i[1]*(o/n)),d=x(i);return d.getContext("2d").drawImage(t,w,g,R,v,0,0,i[0],i[1]),d}function x(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{z as D,O as L,x as p};
