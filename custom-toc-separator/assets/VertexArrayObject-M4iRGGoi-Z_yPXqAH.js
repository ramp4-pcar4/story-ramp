import{iB as u,hT as a,a1 as _}from"./story-OUarUCIt.js";import{V as h}from"./enums-DBi1-Mm2-CUS1pvQe.js";import{r as f}from"./Texture-BCt2hphT-Bv29bzNX.js";const n=()=>_.getLogger("esri.views.webgl.VertexArrayObject");let g=class{constructor(t,e,i,r,s=null){this._context=t,this._locations=e,this._layout=i,this._buffers=r,this._indexBuffer=s,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Array.from(this._buffers.values()).reduce((t,e)=>t+e.usedMemory,this._indexBuffer!=null?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*u}dispose(){this._context?(this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this._indexBuffer=a(this._indexBuffer),this.disposeVAOOnly()):(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&n().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(h.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:t}=this._context,e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e,this._context.instanceCounter.increment(h.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||n().error("Vertex buffer dictionary is empty!");const r=this._context.gl;this._buffers.forEach((s,l)=>{const o=e.get(l);o?f(this._context,this._locations,s,o):n().error("Vertex element descriptor is empty!")}),i!=null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}};export{g as c};
