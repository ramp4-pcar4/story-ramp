import{$ as m,o as s,P as p}from"./story-BBcCTrPE.js";import{o as n}from"./MeshVertexAttributes-CbNpPur2-h9oaJLAh.js";import{b as c}from"./vertexSpaceConversion-CiKaVq_u-ejmQQnaj.js";import"./main-BdXk9G2E.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4-DX7gBViE-I5k6H8-2.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./vec32-D9GsKZ1t-BLSDrlb7.js";import"./spatialReferenceEllipsoidUtils-DUrKTvup-CcLobIbH.js";import"./computeTranslationToOriginAndRotation-wF0y9WQG-DY9NPae5.js";import"./projectBuffer-CvCBvJ6W-Dg4qLcMp.js";import"./projectPointToVector-B2UUY9SE-ByUK96VN.js";import"./projection-BA9M1R7d-DaXOB49d.js";import"./meshVertexSpaceUtils-B4l_Zo0M-BCc0v1wi.js";import"./MeshLocalVertexSpace-BqgocsoS-D3xljtBV.js";import"./vec3-BazNroeq-CyaP0O-i.js";import"./BufferView-PQoE3GL7-T4SZLJZ5.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4-DWDdg1fj-DlFmeM4N.js";async function k(o,r,t){await Promise.resolve(),m(t);const i=c(o,r,{useEllipsoid:t?.useEllipsoid});if(!i)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=o.cloneAndModifyVertexAttributes(new n({...i,uv:p(o.vertexAttributes.uv),color:p(o.vertexAttributes.color)}),r);return e.transform=null,e}export{k as convertMeshVertexSpace};
