import{aA as O,hT as D}from"./story-FpFPbiXi.js";import{j as I,Z as V,G as z}from"./TechniqueInstance-DGTKoOL6-D8nklJCy.js";import{N as C,e as g}from"./MapView-BGOJJ8ch-CMI18gmN.js";import{o as h}from"./FeatureCommandQueue-DzV-HBIG-lvE-EtKK.js";import{R as T,E as w,C as E,G as N,D as G}from"./mat3-CC4Foazl-BWjyqE2v.js";import{e as L}from"./vec2f32-CVhmN3Me-DxoqVD7C.js";import{t as $}from"./vec3f32-BS0cezmI-B_madU1n.js";import{l as k}from"./normalizeUtils-Bxmy9MNI-ELka55RY.js";import{T as F}from"./Container-BcuL1ZEG-iqB4766U.js";import{G as P}from"./LabelMetric-BeluzH3o-Bowr_c1d.js";import{r as v}from"./BufferObject-BM_7mcDb-BW8PKm4l.js";import{A as b,T as U,I as R,n as x}from"./enums-DBi1-Mm2-CUS1pvQe.js";import{c as j}from"./VertexArrayObject-M4iRGGoi-0CIvBG9S.js";let H=0;function c(f,t){return new V(z(H++),f,t)}const d={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class W{constructor(){this.instances={fill:c(h.fill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),marker:c(h.marker,{uniforms:d,optionalAttributes:{zoomRange:!0}}),line:c(h.line,{uniforms:d,optionalAttributes:{zoomRange:!0}}),text:c(h.text,{uniforms:d,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:c(h.complexFill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),texturedLine:c(h.texturedLine,{uniforms:d,optionalAttributes:{zoomRange:!0}}),animatedMarker:c(h.animatedMarker,{uniforms:d,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((t,e)=>(t.set(e.instanceId,e),t),new Map)}getInstance(t){return this._instancesById.get(t)}}const q=Math.PI/180,Y=4;class J extends F{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=g(),this._localOrigin={x:0,y:0},this._getBounds=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=D(this._program)}doRender(t){const{context:e}=t,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(e,r),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(b.ONE,b.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0);const a=this._program;e.bindVAO(this._vao),e.useProgram(a),a.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(U.LINES,8*r.length,R.UNSIGNED_INT,0),e.bindVAO()}_createTransforms(){return{displayViewScreenMat3:g()}}_createShaderProgram(t){if(this._program)return;const e=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,r=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=t.programCache.acquire(e,r,S().attributes)}_updateMatricesAndLocalOrigin(t){const{state:e}=t,{displayMat3:r,size:a,resolution:m,pixelRatio:n,rotation:o,viewpoint:i}=e,l=q*o,{x:s,y:A}=i.targetGeometry,M=k(s,e.spatialReference);this._localOrigin.x=M,this._localOrigin.y=A;const p=n*a[0],_=n*a[1],y=m*p,B=m*_,u=T(this._dvsMat3);w(u,u,r),E(u,u,L(p/2,_/2)),N(u,u,$(a[0]/y,-_/B,1)),G(u,u,-l)}_updateBufferData(t,e){const{x:r,y:a}=this._localOrigin,m=2*Y*e.length,n=new Float32Array(m),o=new Uint32Array(8*e.length);let i=0,l=0;for(const s of e)s&&(n[2*i]=s[0]-r,n[2*i+1]=s[1]-a,n[2*i+2]=s[0]-r,n[2*i+3]=s[3]-a,n[2*i+4]=s[2]-r,n[2*i+5]=s[3]-a,n[2*i+6]=s[2]-r,n[2*i+7]=s[1]-a,o[l]=i+0,o[l+1]=i+3,o[l+2]=i+3,o[l+3]=i+2,o[l+4]=i+2,o[l+5]=i+1,o[l+6]=i+1,o[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=v.createVertex(t,x.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=v.createIndex(t,x.DYNAMIC_DRAW,o),!this._vao){const s=S();this._vao=new j(t,s.attributes,s.bufferLayouts,new Map([["geometry",this._vertexBuffer]]),this._indexBuffer)}}}const S=()=>P("bounds",{geometry:[{location:0,name:"a_position",count:2,type:R.FLOAT}]});class ut extends I{constructor(t){super(t),this._instanceStore=new W,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=O(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(t){this._boundsRenderer=new J(t),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(t,e){t.onMessage(e),this.contains(t)||this.addChild(t),this.requestRender()}_renderChildren(t,e){t.selection=e;for(const r of this.children)r.visible&&r.getDisplayList(this._instanceStore,C.STRICT_ORDER)?.render(t)}}export{ut as K};
