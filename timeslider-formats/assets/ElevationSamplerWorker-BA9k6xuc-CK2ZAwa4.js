import{K as f}from"./story-BJQwqSiV.js";import{N as p}from"./PooledRBush-DbfAmeLn-BR9zJKIH.js";import{y as u}from"./MeshLocalVertexSpace-BqgocsoS-CleOKtzN.js";import{b as l}from"./vertexSpaceConversion-CiKaVq_u-BmTGHdyG.js";import"./main-BWo3aSQp.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4-DX7gBViE-Dp_mjVfk.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./vec32-D9GsKZ1t-DFKAiR2i.js";import"./spatialReferenceEllipsoidUtils-DUrKTvup-B7X3IJmi.js";import"./computeTranslationToOriginAndRotation-wF0y9WQG-BKfLqd4H.js";import"./projectBuffer-CvCBvJ6W-3LRoemO2.js";import"./projectPointToVector-B2UUY9SE-BZoaFWsY.js";import"./projection-BA9M1R7d-DLC6A_As.js";import"./meshVertexSpaceUtils-B4l_Zo0M-CHpKnicD.js";import"./vec3-BazNroeq-D6fNSYva.js";import"./BufferView-PQoE3GL7-edcmYCvN.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4-DWDdg1fj-DBhvxyXv.js";class q{async createIndex(o,r){const n=new Array;if(!o.vertexAttributes?.position)return new p;const i=d(o),s=r!=null?await r.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return a().fromJSON(s)}createIndexThread(o){const r=a();if(!o)return{result:r.toJSON()};const n=new Float64Array(o.position);return o.components?h(r,n,o.components.map(i=>new Uint32Array(i))):x(r,n)}}function x(t,o){const r=new Array(o.length/9);let n=0;for(let i=0;i<o.length;i+=9)r[n++]=c(o,i,i+3,i+6);return t.load(r),{result:t.toJSON()}}function h(t,o,r){let n=0;for(const e of r)n+=e.length/3;const i=new Array(n);let s=0;for(const e of r)for(let m=0;m<e.length;m+=3)i[s++]=c(o,3*e[m],3*e[m+1],3*e[m+2]);return t.load(i),{result:t.toJSON()}}function d(t){const{vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:i}=t,s=l({vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:i},u.absolute,{allowBufferReuse:!0})?.position;return s?!t.components||t.components.some(e=>!e.faces)?{position:s.buffer}:{position:s.buffer,components:t.components.map(e=>e.faces)}:null}function a(){return new p(9,f("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,o,r,n){return{minX:Math.min(t[o],t[r],t[n]),maxX:Math.max(t[o],t[r],t[n]),minY:Math.min(t[o+1],t[r+1],t[n+1]),maxY:Math.max(t[o+1],t[r+1],t[n+1]),p0:[t[o],t[o+1],t[o+2]],p1:[t[r],t[r+1],t[r+2]],p2:[t[n],t[n+1],t[n+2]]}}export{q as default};
