const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./objectResourceUtils-CelAKRU2-BWKKZ1f4.js","./main-jn20pd5b.js","./main-Cypivj38.css","./devEnvironmentUtils-CxrVv3RG-CX5aoxVE.js","./story-CqzOZAFN.js","./story-BEIr-4fY.css","./mat3-CC4Foazl-BWjyqE2v.js","./common-CYWrYyJl-E8-sukrT.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./mat4-DX7gBViE-CKkIyT9Y.js","./mat4f64-Dn1WEGBx-C99QVUMW.js","./vec2f64-CeODonrJ-CkkJCdRC.js","./vec32-D9GsKZ1t-5J-OO_fI.js","./AttributeArray-BWXEft_i-BWJBPyix.js","./requestImageUtils-Ut4YcoNU-CynOO83w.js","./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js","./enums-DBi1-Mm2-CUS1pvQe.js","./Texture-BCt2hphT-COyxWmsC.js","./Util-BjGjeg6f-08Szkf4F.js","./vec42-D8CJyqHG-DnfLTeQH.js","./vec4f64-hf2nxvhQ-CaAr8PTM.js","./ViewingMode-CyR_b1T8-_s7_Gbsk.js","./InterleavedLayout-DXzw3B2n-Coz3KVyq.js","./BufferView-PQoE3GL7-xfiYTVtw.js","./vec2-tHZ6OaOy-xCj1obDt.js","./types-ChhhI6OU-Cxh6dPlX.js","./NormalAttribute.glsl-axtNsUxo-CZr54WR6.js","./compilerUtils-CV1QYWI8-CKXN7AAz.js","./interfaces-DN2-jsJC-DzMTiT5R.js","./VertexAttribute-DqD5S0a2-3q90nikV.js","./BindType-9iOk18Ed-CRW1cdX4.js","./AlphaCutoff-ZPx1GqOi-UcccL64p.js","./boundedPlane-DlvE0eNx-BRhWqaGR.js","./sphere-BenPORjV-DAgk03Xh.js","./plane-Dt8R0KeE-CgTCZDeB.js","./quatf64-C16JxGFv-BKWK1F8U.js","./lineSegment-CcqvCARM-DJ9_pPaX.js","./renderState-Dap0WV9P-D4IHxyei.js","./orientedBoundingBox-oHezdpWm-6SR56LU5.js","./quat-BODLR7mS-DOQOMPfP.js","./spatialReferenceEllipsoidUtils-DUrKTvup-CaFGD9Yo.js","./computeTranslationToOriginAndRotation-wF0y9WQG-BX_rhiev.js","./projectBuffer-CvCBvJ6W-B2MCidMM.js","./doublePrecisionUtils-BJbYwoii-kIP-tL_t.js","./lengthUtils-DKpMe5qR-DKKmUvdx.js","./vec3-BazNroeq-CIKUcqfz.js","./vec4-DWDdg1fj-D8s2G2_C.js","./DefaultMaterial_COLOR_GAMMA-D0o2czi9-CI2oE7n8.js","./Indices-DEr2HrWx-bd5mKG-_.js","./resourceUtils-Ds65naCv-pyvt8xZx.js","./vec2f32-CVhmN3Me-DxoqVD7C.js","./NestedMap-Ddo7BfvO-BpVPk8mz.js","./Version-CoKzbupV-CBMbfbiN.js","./triangle-hqU-Tc1X-CvHP6NEn.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./main-jn20pd5b.js";import{o as n,im as a,gU as d,ik as v,dg as u}from"./story-CqzOZAFN.js";import{b}from"./LRUCache-C3erQTWv-G6GMuh5O.js";let c=h();function h(){return new b(50)}async function g(o,i=null){if(!o.isPrimitive){const e=o.resource?.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const t=c.get(e);if(t!==void 0)return t;const{fetch:l}=await f(()=>import("./objectResourceUtils-CelAKRU2-BWKKZ1f4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url),m=await l(e,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),s=a(m.referenceBoundingBox,u());return c.put(e,s),s}if(!o.resource?.primitive)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const r=d(v(o.resource.primitive));if(i!=null)for(let e=0;e<r.length;e++)r[e]*=i;return a(r,u())}export{g as computeObjectLayerResourceSize};
