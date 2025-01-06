import{W as p}from"./InterleavedLayout-DXzw3B2n-BLVyj0Sq.js";import{W as l,m as c,u,l as f,H as d,k as m}from"./edgeProcessing-CALv8P-b-CmjkGWbC.js";import"./BufferView-PQoE3GL7-CEKxcF38.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./vec32-D9GsKZ1t-BNmjVLpx.js";import"./story-DYUJZqY7.js";import"./main-yJk-x1BV.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./types-ChhhI6OU-Cxh6dPlX.js";import"./Util-BjGjeg6f-08Szkf4F.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import"./deduplicate-D2d-E5Pw-BPV9_9q1.js";import"./Indices-DEr2HrWx-Dy6B4gkc.js";import"./VertexAttribute-DqD5S0a2-3q90nikV.js";import"./glUtil-n1JOrdV3-CRAZdee5.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";function a(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:new p(t.layout)}}class F{async extract(e){const i=o(e),r=l(i),n=[i.data.buffer];return{result:g(r,n),transferList:n}}async extractComponentsEdgeLocations(e){const i=o(e),r=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),n=u(r,w),s=[];return{result:a(n.regular.instancesData,s),transferList:s}}async extractEdgeLocations(e){const i=o(e),r=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),n=u(r,L),s=[];return{result:a(n.regular.instancesData,s),transferList:s}}}function o(t){return{data:f.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indices):t.indicesType==="Uint16Array"?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function g(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class h{allocate(e){return d.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,r){e.position0.setVec(i,r.position0),e.position1.setVec(i,r.position1)}}class y{allocate(e){return m.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,r){e.position0.setVec(i,r.position0),e.position1.setVec(i,r.position1),e.componentIndex.set(i,r.componentIndex)}}const L=new h,w=new y;export{F as default};
