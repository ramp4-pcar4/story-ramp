const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i3s-uYaiTbIl-DzIIxSkU.js","./story-u82SUoyt.js","./main-CmCzAIzx.js","./main-Ci7vwlHy.css","./story-Dafnv89Y.css","./projectMeshVertexPositions-CQe-6i66-DVK7kKit.js","./MeshLocalVertexSpace-DkOk3052-DA9z6oPs.js","./vertexSpaceConversion-J1a6a3Ka-BXJ8RT2Z.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./mat4f64-Dn1WEGBx-C99QVUMW.js","./spatialReferenceEllipsoidUtils-a1l2O8Wm-BmysMxF9.js","./computeTranslationToOriginAndRotation-DlPeD1c9-C88kET92.js","./projectPointToVector-D1BQGAFG-DqQVROWc.js","./meshVertexSpaceUtils-VVkhP71b-BcqfT28l.js","./vec3-DeYubiaN-D3RW1UAQ.js","./BufferView-BDYk8Sh_-DwYlLv74.js","./vec4-DamUQeRS-CGfCsF6l.js"])))=>i.map(i=>d[i]);
import{_ as P}from"./main-CmCzAIzx.js";import{aj as C,cQ as K,c8 as Q}from"./story-u82SUoyt.js";import{u as W,y as X}from"./MeshLocalVertexSpace-DkOk3052-DA9z6oPs.js";import{z as Z,O as ee}from"./vec3-DeYubiaN-D3RW1UAQ.js";import"./sphere-_Zcui0FU-GAmKRCJY.js";import"./I3SUtil-D0XpA9Sd-i7Sj9wCx.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./plane-B2J4G_40-pKvE2aEl.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";import"./projectVectorToVector-JABAqSd1-Ch8aBP2t.js";import"./projectPointToVector-D1BQGAFG-DqQVROWc.js";import"./I3SBinaryReader-B-IG1_cG-DADrPr47.js";import"./VertexAttribute-DqD5S0a2-3q90nikV.js";import"./floatRGBA-CNeCgBBY-DIL-maEN.js";import"./NormalAttribute.glsl-CIowDxbJ-B58aRnrb.js";import"./interfaces-DN2-jsJC-DzMTiT5R.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./orientedBoundingBox-CdpnVLBk-CCtNVr5O.js";import"./quat-Xt9oEsiT-Bb4pvhR4.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-BmysMxF9.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-C88kET92.js";var v,j;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(v||(v={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(j||(j={}));function te(){return U||(U=new Promise(e=>P(()=>import("./i3s-uYaiTbIl-DzIIxSkU.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:re,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),U}function re(e){return Q(`esri/libs/i3s/${e}`)}let U;var B,b,V,k,H;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(B||(B={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(b||(b={})),function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(V||(V={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(k||(k={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(H||(H={}));async function Ne(e){n=await g();const t=[e.geometryBuffer];return{result:z(n,e,t),transferList:t}}async function Re(e){n=await g();const t=[e.geometryBuffer],{geometryBuffer:r}=e,s=r.byteLength,i=n._malloc(s),l=new Uint8Array(n.HEAPU8.buffer,i,s);l.set(new Uint8Array(r));const f=n.dracoDecompressPointCloudData(i,l.byteLength);if(n._free(i),f.error.length>0)throw new Error(`i3s.wasm: ${f.error}`);const c=f.featureIds?.length>0?f.featureIds.slice():null,d=f.positions.slice();return c&&t.push(c.buffer),t.push(d.buffer),{result:{positions:d,featureIds:c},transferList:t}}async function Oe(e){await g(),ne(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Se(e){await g(),oe(e)}async function Ue(e){n=await g(),n.setLegacySchema(e.context,e.jsonSchema)}async function Fe(e){const{localMatrix:t,origin:r,positions:s,vertexSpace:i}=e,l=C.fromJSON(e.inSpatialReference),f=C.fromJSON(e.outSpatialReference);let c;const[{projectBuffer:d},{initializeProjection:N}]=await Promise.all([P(()=>import("./story-u82SUoyt.js").then(a=>a.vy),__vite__mapDeps([1,2,3,4]),import.meta.url).then(a=>a.vD),P(()=>import("./story-u82SUoyt.js").then(a=>a.vy),__vite__mapDeps([1,2,3,4]),import.meta.url).then(a=>a.vE)]);await N(l,f);const w=[0,0,0];if(!d(r,l,0,w,f,0))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(c=new Float64Array(s.length),!d(s,l,0,c,f,0,c.length/3))throw new Error("Failed to project")}else{const a=i.type==="georeferenced"?W.fromJSON(i):X.fromJSON(i),{projectMeshVertexPositions:u}=await P(async()=>{const{projectMeshVertexPositions:p}=await import("./projectMeshVertexPositions-CQe-6i66-DVK7kKit.js");return{projectMeshVertexPositions:p}},__vite__mapDeps([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),m=u({vertexAttributes:{position:s},transform:t?{localMatrix:t}:void 0,vertexSpace:a,spatialReference:l},f);if(!m)throw new Error("Failed to project");c=m}const R=c.length,[E,A,_]=w;for(let a=0;a<R;a+=3)c[a]-=E,c[a+1]-=A,c[a+2]-=_;return{result:{projected:c,original:s,projectedOrigin:w},transferList:[c.buffer,s.buffer]}}async function Me({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return Z(r,t,e),K(e)&&ee(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function xe(e){Y(e)}let I,n;function oe(e){if(!n)return;const t=e.modifications,r=n._malloc(8*t.length),s=new Float64Array(n.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)s[i]=t[i];n.setModifications(e.context,r,t.length,e.isGeodetic),n._free(r)}function z(e,t,r){const{context:s,globalTrafo:i,mbs:l,obbData:f,elevationOffset:c,geometryBuffer:d,geometryDescriptor:N,indexToVertexProjector:w,vertexToRenderProjector:R}=t,E=e._malloc(d.byteLength),A=33,_=e._malloc(A*Float64Array.BYTES_PER_ELEMENT),a=new Uint8Array(e.HEAPU8.buffer,E,d.byteLength);a.set(new Uint8Array(d));const u=new Float64Array(e.HEAPU8.buffer,_,A);L(u,[NaN,NaN,NaN]);let m=u.byteOffset+3*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,m);L(p,i),m+=16*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,m),L(p,l),m+=4*u.BYTES_PER_ELEMENT,f&&(p=new Float64Array(u.buffer,m),L(p,f));const F=N,$={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(y=>y.name==="uvRegion")),featureIndex:F.featureIndex},o=e.process(s,!!t.obbData,E,a.byteLength,F,$,_,c,w,R,t.normalReferenceFrame);if(e._free(_),e._free(E),o.error.length>0)throw new Error(`i3s.wasm: ${o.error}`);if(o.discarded)return null;const O=o.componentOffsets.length>0?o.componentOffsets.slice():null,S=o.featureIds.length>0?o.featureIds.slice():null,J=o.anchorIds.length>0?Array.from(o.anchorIds):null,G=o.anchors.length>0?Array.from(o.anchors):null,M=o.interleavedVertedData.slice().buffer,x=o.indicesType===v.Int16?new Uint16Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/2).slice():new Uint32Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/4).slice(),T=o.positions.slice(),D=o.positionIndicesType===v.Int16?new Uint16Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/2).slice():new Uint32Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/4).slice(),q={layout:t.layouts[0],interleavedVertexData:M,indices:x,hasColors:o.hasColors,hasModifications:o.hasModifications,positionData:{data:T,indices:D}};return S&&r.push(S.buffer),O&&r.push(O.buffer),r.push(M),r.push(x.buffer),r.push(T.buffer),r.push(D.buffer),{componentOffsets:O,featureIds:S,anchorIds:J,anchors:G,transformedGeometry:q,obb:o.obb,globalTrafo:i}}function Te(e){return e===0?b.Unmodified:e===1?b.PotentiallyModified:e===2?b.Culled:b.Unknown}function ne(e){if(!n)return;const{context:t,buffer:r}=e,s=n._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,l=new Float64Array(n.HEAPU8.buffer,s,i),f=new Float64Array(r);l.set(f),n.filterOBBs(t,s,i),f.set(l),n._free(s)}function Y(e){n&&n.destroy(e)===0&&(n=null)}function L(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function De(){n||await g()}function g(){return n?Promise.resolve(n):(I||(I=te().then(e=>(n=e,I=null,n))),I)}const Ce={transform:(e,t)=>n&&z(n,e,t),destroy:Y};export{xe as destroyContext,Re as dracoDecompressPointCloudData,Oe as filterObbsForModifications,ne as filterObbsForModificationsSync,De as initialize,Te as interpretObbModificationResults,Ne as process,Fe as project,Ue as setLegacySchema,Se as setModifications,oe as setModificationsSync,Ce as test,Me as transformNormals};
