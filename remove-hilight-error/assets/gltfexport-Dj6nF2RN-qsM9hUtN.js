import{dg as S,i8 as v,eI as Q,a3 as re,$ as k,h_ as ie,bj as ne,an as oe,o as Y,cw as ae,dG as ce,a1 as he}from"./story-CeSwA6O5.js";import{O as fe,X as ue}from"./quat-BODLR7mS-Cb4IagvI.js";import{e as le,n as de,r as me}from"./quatf64-C16JxGFv-BKWK1F8U.js";import{R as $,_ as O,r as j,S as pe,l as _e}from"./vec32-D9GsKZ1t-BQsntUMj.js";import{m as ge}from"./Mesh-DLzjDUIO-C6rt0E2F.js";import{b as we}from"./vertexSpaceConversion-CiKaVq_u-DLyc2G1Q.js";import{I as p,G as T}from"./enums-DBi1-Mm2-CUS1pvQe.js";import{f as U}from"./resourceUtils-Ds65naCv-rbYsiiWX.js";import"./main-B2WqJNyC.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./MeshTransform-C--IG09w-BGUREhFK.js";import"./mat4-DX7gBViE-1md7AwjE.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./imageUtils-BA2D6Uf1-Cs_EmURY.js";import"./MeshVertexAttributes-CbNpPur2-Cx_x1aUZ.js";import"./MeshLocalVertexSpace-BqgocsoS-DzkYhT_s.js";import"./meshVertexSpaceUtils-B4l_Zo0M-B-sVOPYz.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./Indices-DEr2HrWx-rQI49nzc.js";import"./plane-Dt8R0KeE-Dr_2xRdp.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import"./deduplicate-D2d-E5Pw-CSJFymW9.js";import"./projectPointToVector-B2UUY9SE-SzSymRoq.js";import"./projection-BA9M1R7d-Jq_GJJGp.js";import"./projectBuffer-CvCBvJ6W-BtND5RbS.js";import"./spatialReferenceEllipsoidUtils-DUrKTvup-CjoOPCdi.js";import"./computeTranslationToOriginAndRotation-wF0y9WQG-DyvgTb95.js";import"./vec3-BazNroeq-DjM69cRt.js";import"./External-D_wl4XAw-DSF7_qX5.js";import"./infoFor3D-DIuYZyyK-BtH19JJ7.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./BufferView-PQoE3GL7-QNl9wSHE.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./vec4-DWDdg1fj-BOhgCf0I.js";import"./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js";function Ee(t){const e=q(t);return e!=null?e.toDataURL():""}async function J(t,e){const s=q(t);if(s==null)throw new Y("imageToArrayBuffer","Unsupported image type");const r=Ae(t),i=await new Promise(o=>s.toBlob(o,r));if(k(e),!i)throw new Y("imageToArrayBuffer","Failed to encode image");const a=await i.arrayBuffer();return k(e),{data:a,type:r}}function Ae(t){if(!(t instanceof HTMLImageElement))return"image/png";const e=t.src;if(ae(e)){const s=ce(e);return s?.mediaType==="image/jpeg"?s.mediaType:"image/png"}return/\.png$/i.test(e)?"image/png":/\.(jpg|jpeg)$/i.test(e)?"image/jpeg":"image/png"}function q(t){if(t instanceof HTMLCanvasElement)return t;if(t instanceof HTMLVideoElement)return null;const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");return t instanceof HTMLImageElement?s.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&s.putImageData(t,0,0),e}function Te(t){const e=[],s=new Uint8Array(t);for(let r=0;r<s.length;r++)e.push(String.fromCharCode(s[r]));return"data:application/octet-stream;base64,"+btoa(e.join(""))}function be(t){if(t.byteLength<8)return!1;const e=new Uint8Array(t);return e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71&&e[4]===13&&e[5]===10&&e[6]===26&&e[7]===10}var L;(function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN"})(L||(L={}));let N=class I{constructor(e,s){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=I.HEADER_SIZE,this._length+=I.CHUNK_HEADER_SIZE;const r=Re(e);if(this._length+=X(r.byteLength,4),s&&(this._length+=I.CHUNK_HEADER_SIZE,this._length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const i=this._writeChunk(r,12,L.JSON,32);s&&this._writeChunk(s,i,L.BIN)}_writeHeader(){this._outView.setUint32(0,I.MAGIC,!0),this._outView.setUint32(4,I.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,s,r,i=0){const a=X(e.byteLength,4);for(this._outView.setUint32(s,a,!0),this._outView.setUint32(s+=4,r,!0),ye(this._outView.buffer,e,s+=4,0,e.byteLength),s+=e.byteLength;s%4;)i&&this._outView.setUint8(s,i),s++;return s}};function ye(t,e,s,r,i){new Uint8Array(t,s,i).set(new Uint8Array(e,r,i),0)}function Re(t){return new TextEncoder().encode(t).buffer}function X(t,e){return e*Math.ceil(t/e)}N.HEADER_SIZE=12,N.CHUNK_HEADER_SIZE=8,N.MAGIC=1179937895,N.VERSION=2;var R,b,y,g,K,B,W;(function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"})(R||(R={})),function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"}(b||(b={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(y||(y={})),function(t){t.SCALAR="SCALAR",t.VEC2="VEC2",t.VEC3="VEC3",t.VEC4="VEC4",t.MAT2="MAT2",t.MAT3="MAT3",t.MAT4="MAT4"}(g||(g={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(K||(K={})),function(t){t.OPAQUE="OPAQUE",t.MASK="MASK",t.BLEND="BLEND"}(B||(B={})),function(t){t[t.NoColor=0]="NoColor",t[t.FaceColor=1]="FaceColor",t[t.VertexColor=2]="VertexColor"}(W||(W={}));let xe=class{constructor(t,e,s,r,i){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:i};const a=this._getElementSize();a>=4&&i!==y.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const i=this._accessorMax[s];this._accessorMax[s]=typeof i!="number"?t:Math.max(i,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case p.BYTE:return new Int8Array(t,e);case p.FLOAT:return new Float32Array(t,e);case p.SHORT:return new Int16Array(t,e);case p.UNSIGNED_BYTE:return new Uint8Array(t,e);case p.UNSIGNED_INT:return new Uint32Array(t,e);case p.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let i=0;i<this._accessorMin.length;++i)typeof this._accessorMin[i]!="number"&&(this._accessorMin[i]=0),typeof this._accessorMax[i]!="number"&&(this._accessorMax[i]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case p.UNSIGNED_BYTE:case p.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}async finalize(){const t=this._bufferView,e=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&e.push(this._asyncWritePromise),await Promise.allSettled(e),this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case p.BYTE:case p.UNSIGNED_BYTE:return 1;case p.SHORT:case p.UNSIGNED_SHORT:return 2;case p.UNSIGNED_INT:case p.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case g.SCALAR:return 1;case g.VEC2:return 2;case g.VEC3:return 3;case g.VEC4:case g.MAT2:return 4;case g.MAT3:return 9;case g.MAT4:return 16}}},Z=class{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new xe(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}};function Ie(t,e){if(t.components)for(const s of t.components)s.faces&&s.shading==="smooth"&&Ne(s,e)}function Ne(t,e){e.normal==null&&(e.normal=new Float32Array(e.position.length));const s=t.faces,{position:r,normal:i}=e,a=s.length/3;for(let o=0;o<a;++o){const n=3*s[3*o],c=3*s[3*o+1],h=3*s[3*o+2],u=O(Se,r[n],r[n+1],r[n+2]),_=O(Me,r[c],r[c+1],r[c+2]),l=O(Oe,r[h],r[h+1],r[h+2]),w=j(_,_,u),d=j(l,l,u),m=pe(w,w,d);i[n]+=m[0],i[n+1]+=m[1],i[n+2]+=m[2],i[c]+=m[0],i[c+1]+=m[1],i[c+2]+=m[2],i[h]+=m[0],i[h+1]+=m[1],i[h+2]+=m[2]}for(let o=0;o<i.length;o+=3)O(x,i[o],i[o+1],i[o+2]),_e(x,x),i[o]=x[0],i[o+1]=x[1],i[o+2]=x[2]}const Se=S(),Me=S(),Oe=S(),x=S(),P=()=>he.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class Le{constructor(e,s){this.options=s,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:s.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const s=this.gltf.extras,r=s.output.buffer===R.GLB||s.output.image===b.GLB;r&&(s.binChunkBuffer=new Z(this.gltf)),e.forEachScene(i=>{this._addScene(i)}),r&&s.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const s={};e.name&&(s.name=e.name),e.forEachNode(r=>{s.nodes||(s.nodes=[]),s.nodes.push(...this._addNodes(r))}),this.gltf.scenes.push(s)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const s={};e.name&&(s.name=e.name);const r=e.translation;$(r,ie)||(s.translation=v(r));const i=e.rotation;ue(i,de)||(s.rotation=me(i));const a=e.scale;$(a,Q)||(s.scale=v(a));const o=this.gltf.nodes.length;if(this.gltf.nodes.push(s),e.mesh&&e.mesh.vertexAttributes.position){const n=this._createMeshes(e.mesh),c=[o];if(n.length===1)this._addMesh(s,n[0]);else for(const h of n){const u={};this._addMesh(u,h),c.push(this.gltf.nodes.length),this.gltf.nodes.push(u)}return c}return e.forEachNode(n=>{s.children||(s.children=[]),s.children.push(...this._addNodes(n))}),[o]}_addMesh(e,s){this.gltf.meshes??=[];const r=this.gltf.meshes.length;this.gltf.meshes.push(s),e.mesh=r}_createMeshes(e){const s=this.gltf.extras,r=s.output.buffer===R.GLB;let i;i=r?s.binChunkBuffer:new Z(this.gltf);const a=this.options.origin,o=e.vertexSpace.clone();o.origin=[a.x,a.y,a.z??0];const n=we({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:this.options?.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},o,{targetUnit:this.options.unitConversionDisabled?void 0:"meters"});if(!n)return[];Ie(e,n),Be(n);const{position:c,normal:h,tangent:u}=n,{uv:_,color:l}=e.vertexAttributes,w=i.addBufferView(p.FLOAT,g.VEC3,y.ARRAY_BUFFER);let d,m,E,A;h&&(d=i.addBufferView(p.FLOAT,g.VEC3,y.ARRAY_BUFFER)),_&&(m=i.addBufferView(p.FLOAT,g.VEC2,y.ARRAY_BUFFER)),u&&(E=i.addBufferView(p.FLOAT,g.VEC4,y.ARRAY_BUFFER)),l&&(A=i.addBufferView(p.UNSIGNED_BYTE,g.VEC4,y.ARRAY_BUFFER)),w.startAccessor("POSITION"),d&&d.startAccessor("NORMAL"),m&&m.startAccessor("TEXCOORD_0"),E&&E.startAccessor("TANGENT"),A&&A.startAccessor("COLOR_0");const te=n.position.length/3;for(let f=0;f<te;++f)w.push(c[3*f]),w.push(c[3*f+1]),w.push(c[3*f+2]),d&&h!=null&&(d.push(h[3*f]),d.push(h[3*f+1]),d.push(h[3*f+2])),m&&_!=null&&(m.push(_[2*f]),m.push(_[2*f+1])),E&&u!=null&&(E.push(u[4*f]),E.push(u[4*f+1]),E.push(u[4*f+2]),E.push(u[4*f+3])),A&&l!=null&&(A.push(l[4*f]),A.push(l[4*f+1]),A.push(l[4*f+2]),A.push(l[4*f+3]));const se=w.endAccessor(),H=this._addAccessor(w.index,se);let C,V,z,F,M;if(d){const f=d.endAccessor();C=this._addAccessor(d.index,f)}if(m){const f=m.endAccessor();V=this._addAccessor(m.index,f)}if(E){const f=E.endAccessor();z=this._addAccessor(E.index,f)}if(A){const f=A.endAccessor();F=this._addAccessor(A.index,f)}const D=[];return e.components&&e.components.length>0&&e.components[0].faces?(M=i.addBufferView(p.UNSIGNED_INT,g.SCALAR,y.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(M,e.components,D,H,C,V,z,F)):this._addMeshVertexNonIndexed(e.components,D,H,C,V,z,F),w.finalize(),d&&d.finalize(),m&&m.finalize(),E&&E.finalize(),M&&M.finalize(),A&&A.finalize(),r||i.finalize(),D}_addMaterial(e){if(e===null)return;const s=this._materialMap.indexOf(e);if(s!==-1)return s;this.gltf.materials||(this.gltf.materials=[]);const r={};switch(e.alphaMode){case"mask":r.alphaMode=B.MASK;break;case"auto":case"blend":r.alphaMode=B.BLEND}r.alphaCutoff=e.alphaCutoff,e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};const i=n=>n**2.1,a=n=>{const c=n.toRgba();return c[0]=i(c[0]/255),c[1]=i(c[1]/255),c[2]=i(c[2]/255),c};if(e.color!=null&&(r.pbrMetallicRoughness.baseColorFactor=a(e.color)),e.colorTexture!=null&&(r.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),e.normalTexture!=null&&(r.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof ge){if(e.emissiveTexture!=null&&(r.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),e.emissiveColor!=null){const n=a(e.emissiveColor);r.emissiveFactor=[n[0],n[1],n[2]]}e.occlusionTexture!=null&&(r.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),e.metallicRoughnessTexture!=null&&(r.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1,P().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(r),this._materialMap.push(e),o}_createTextureInfo(e,s){const r={index:this._addTexture(e)};return s&&(r.extensions||(r.extensions={}),r.extensions.KHR_texture_transform={scale:s.scale,offset:s.offset,rotation:ne(s.rotation)}),r}_addTexture(e){const s=this.gltf.textures??[];return this.gltf.textures=s,oe(this._textureMap,e,()=>{const r={sampler:this._addSampler(e),source:this._addImage(e)},i=s.length;return s.push(r),i})}_addImage(e){const s=this._imageMap.get(e);if(s!=null)return s;this.gltf.images||(this.gltf.images=[]);const r={};if(e.url)r.uri=e.url;else{const a=e.data;r.extras=a;for(let n=0;n<this.gltf.images.length;++n)if(a===this.gltf.images[n].extras)return n;const o=this.gltf.extras;switch(o.output.image){case b.GLB:{const n=o.binChunkBuffer.addBufferView(p.UNSIGNED_BYTE,g.SCALAR);if(U(a))a.data!=null&&n.writeOutToBuffer(a.data,0);else{const c=J(a,this.options.signal).then(({data:h,type:u})=>(r.mimeType=u,h));o.promises.push(n.writeAsync(c).then(()=>{n.finalize()}))}r.bufferView=n.index;break}case b.DataURI:if(U(a)){P().warnOnce("Image export for basis compressed textures not available.");break}r.uri=Ee(a);break;default:if(U(a)){P().warnOnce("Image export for basis compressed textures not available.");break}o.promises.push(J(a,this.options.signal).then(({data:n,type:c})=>{r.uri=n,r.mimeType=c}))}}const i=this.gltf.images.length;return this.gltf.images.push(r),this._imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let s=T.REPEAT,r=T.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":s=T.CLAMP_TO_EDGE,r=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT,r=T.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":r=T.CLAMP_TO_EDGE;break;case"mirror":r=T.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":s=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT}}const i={wrapS:s,wrapT:r};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[o]))return o;const a=this.gltf.samplers.length;return this.gltf.samplers.push(i),a}_addAccessor(e,s){this.gltf.accessors||(this.gltf.accessors=[]);const r={bufferView:e,byteOffset:s.byteOffset,componentType:s.componentType,count:s.count,type:s.type,min:s.min,max:s.max,name:s.name};s.normalized&&(r.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(r),i}_addMeshVertexIndexed(e,s,r,i,a,o,n,c){const h=new Map;for(const u of s){e.startAccessor("INDICES");for(let d=0;d<u.faces.length;++d)e.push(u.faces[d]);const _=e.endAccessor(),l={attributes:{POSITION:i},indices:this._addAccessor(e.index,_),material:this._addMaterial(u.material)};a&&u.shading!=="flat"&&(l.attributes.NORMAL=a),o&&(l.attributes.TEXCOORD_0=o),n&&u.shading!=="flat"&&(l.attributes.TANGENT=n),c&&(l.attributes.COLOR_0=c);const w=h.get(u.name);if(w)w.primitives.push(l);else{const d={name:u.name,primitives:[l]};h.set(u.name,d),r.push(d)}}}_addMeshVertexNonIndexed(e,s,r,i,a,o,n){const c={primitives:[]};s.push(c);const h={attributes:{POSITION:r}};i&&(h.attributes.NORMAL=i),a&&(h.attributes.TEXCOORD_0=a),o&&(h.attributes.TANGENT=o),n&&(h.attributes.COLOR_0=n),e&&(h.material=this._addMaterial(e[0].material)),c.primitives.push(h)}}function Be({position:t,normal:e,tangent:s}){G(t,3),G(e,3),G(s,4)}function G(t,e){if(t!=null)for(let s=1,r=2;s<t.length;s+=e,r+=e){const i=t[s],a=t[r];t[s]=a,t[r]=-i}}class Ce{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){re(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class Ve{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class ze{constructor(e){this.mesh=e,this.name="",this.translation=S(),this.rotation=le(),this.scale=v(Q),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){fe(this.rotation,e[0],e[1],e[2])}}const Fe="model.gltf",ee="model.glb";async function De(t,e){const s=new Le(t,e).gltf,r=s.extras.promises;let i=1,a=1,o=null;await Promise.allSettled(r),k(e.signal);const n=e.jsonSpacing??4,c=new Map,h=JSON.stringify(s,(u,_)=>{if(u!=="extras"){if(_ instanceof ArrayBuffer){if(be(_))switch(e.output?.image){case b.DataURI:case b.GLB:break;case b.External:default:{const l=`img${a}.png`;return a++,c.set(l,_),l}}switch(e.output?.buffer){case R.DataURI:return Te(_);case R.GLB:if(o)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(o=_);case R.External:default:{const l=`data${i}.bin`;return i++,c.set(l,_),l}}}return _}},n);return e.output?.buffer===R.GLB||e.output?.image===b.GLB?c.set(ee,new N(h,o).buffer):c.set(Fe,h),c}async function Ue(t,e){const s=(await De(t,{output:{buffer:R.GLB,image:b.GLB},jsonSpacing:0,...e})).get(ee);if(!(s&&s instanceof ArrayBuffer))throw new Error("failed to export to glb");return s}async function yt(t,e){const s=new Ce,r=new Ve;return s.addScene(r),r.addNode(new ze(t)),await Ue(s,{origin:t.origin,...e})}export{yt as toBinaryGLTF};
