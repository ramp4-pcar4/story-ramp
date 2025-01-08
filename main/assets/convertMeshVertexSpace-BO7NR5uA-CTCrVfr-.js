import{$ as m,o as s,P as p}from"./story-CqzOZAFN.js";import{o as n}from"./MeshVertexAttributes-CbNpPur2-C6veRYrr.js";import{b as c}from"./vertexSpaceConversion-CiKaVq_u-CS2csscT.js";import"./main-jn20pd5b.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4-DX7gBViE-CKkIyT9Y.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./vec32-D9GsKZ1t-5J-OO_fI.js";import"./spatialReferenceEllipsoidUtils-DUrKTvup-CaFGD9Yo.js";import"./computeTranslationToOriginAndRotation-wF0y9WQG-BX_rhiev.js";import"./projectBuffer-CvCBvJ6W-B2MCidMM.js";import"./projectPointToVector-B2UUY9SE-CWxdUH7S.js";import"./projection-BA9M1R7d-Bb6He4B9.js";import"./meshVertexSpaceUtils-B4l_Zo0M-ChO_oHHS.js";import"./MeshLocalVertexSpace-BqgocsoS-CIhp_mSs.js";import"./vec3-BazNroeq-CIKUcqfz.js";import"./BufferView-PQoE3GL7-xfiYTVtw.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4-DWDdg1fj-D8s2G2_C.js";async function k(o,r,t){await Promise.resolve(),m(t);const i=c(o,r,{useEllipsoid:t?.useEllipsoid});if(!i)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=o.cloneAndModifyVertexAttributes(new n({...i,uv:p(o.vertexAttributes.uv),color:p(o.vertexAttributes.color)}),r);return e.transform=null,e}export{k as convertMeshVertexSpace};
