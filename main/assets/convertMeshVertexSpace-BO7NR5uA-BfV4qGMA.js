import{$ as m,o as s,P as p}from"./story-B9xumwLI.js";import{o as n}from"./MeshVertexAttributes-CbNpPur2-DS_OWy5L.js";import{b as c}from"./vertexSpaceConversion-CiKaVq_u-B1cgVJWk.js";import"./main-BtP7c6vW.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4-DX7gBViE-Bu0k1ptY.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./vec32-D9GsKZ1t-DPI2vtMb.js";import"./spatialReferenceEllipsoidUtils-DUrKTvup-Caz6uGa1.js";import"./computeTranslationToOriginAndRotation-wF0y9WQG-CROcJWW7.js";import"./projectBuffer-CvCBvJ6W-wbw8juri.js";import"./projectPointToVector-B2UUY9SE-BdFMo2hd.js";import"./projection-BA9M1R7d-CK-kkTrr.js";import"./meshVertexSpaceUtils-B4l_Zo0M-Cc6zuMpt.js";import"./MeshLocalVertexSpace-BqgocsoS-3UkQ4fYm.js";import"./vec3-BazNroeq-CMPN2S9E.js";import"./BufferView-PQoE3GL7-_yagYDLf.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4-DWDdg1fj-CbUaMZSH.js";async function k(o,r,t){await Promise.resolve(),m(t);const i=c(o,r,{useEllipsoid:t?.useEllipsoid});if(!i)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=o.cloneAndModifyVertexAttributes(new n({...i,uv:p(o.vertexAttributes.uv),color:p(o.vertexAttributes.color)}),r);return e.transform=null,e}export{k as convertMeshVertexSpace};
