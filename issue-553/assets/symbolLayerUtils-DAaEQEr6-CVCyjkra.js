const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./objectResourceUtils-CelAKRU2-BMu1OKql.js","./main-DJmelbpF.js","./main-Blpl9308.css","./devEnvironmentUtils-CxrVv3RG-CX5aoxVE.js","./story-DSn7G2jT.js","./story-CuzVMYrZ.css","./mat3-CC4Foazl-BWjyqE2v.js","./common-CYWrYyJl-E8-sukrT.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./mat4-DX7gBViE-By1gPV6o.js","./mat4f64-Dn1WEGBx-C99QVUMW.js","./vec2f64-CeODonrJ-CkkJCdRC.js","./vec32-D9GsKZ1t-BbnqDT8V.js","./AttributeArray-BWXEft_i-Bw8cCcSK.js","./requestImageUtils-Ut4YcoNU-CGOq4yvV.js","./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js","./enums-DBi1-Mm2-CUS1pvQe.js","./Texture-BCt2hphT-CS3m5TpR.js","./Util-BjGjeg6f-08Szkf4F.js","./vec42-D8CJyqHG-DnfLTeQH.js","./vec4f64-hf2nxvhQ-CaAr8PTM.js","./ViewingMode-CyR_b1T8-_s7_Gbsk.js","./InterleavedLayout-DXzw3B2n-fYygiBh7.js","./BufferView-PQoE3GL7-E4tZY9VQ.js","./vec2-tHZ6OaOy-xCj1obDt.js","./types-ChhhI6OU-Cxh6dPlX.js","./NormalAttribute.glsl-axtNsUxo-DWKXlEqr.js","./compilerUtils-CV1QYWI8-60vmBJeQ.js","./interfaces-DN2-jsJC-DzMTiT5R.js","./VertexAttribute-DqD5S0a2-3q90nikV.js","./BindType-9iOk18Ed-CRW1cdX4.js","./AlphaCutoff-ZPx1GqOi-UcccL64p.js","./boundedPlane-DlvE0eNx-tliTIb0w.js","./sphere-BenPORjV-CgIpjyDZ.js","./plane-Dt8R0KeE-CVATWXyS.js","./quatf64-C16JxGFv-BKWK1F8U.js","./lineSegment-CcqvCARM-hkRXo2Cn.js","./renderState-Dap0WV9P-D4IHxyei.js","./orientedBoundingBox-oHezdpWm-BspkKSNr.js","./quat-BODLR7mS-C5R-ZhqT.js","./spatialReferenceEllipsoidUtils-DUrKTvup-DYJxjgIP.js","./computeTranslationToOriginAndRotation-wF0y9WQG-BBPFAMVH.js","./projectBuffer-CvCBvJ6W-CL44c06l.js","./doublePrecisionUtils-BJbYwoii-kIP-tL_t.js","./lengthUtils-DKpMe5qR-DpNgM4mo.js","./vec3-BazNroeq-Bwxxid3W.js","./vec4-DWDdg1fj-BgP_36Va.js","./DefaultMaterial_COLOR_GAMMA-D0o2czi9-DK1mPe3D.js","./Indices-DEr2HrWx-BqlR3O1L.js","./resourceUtils-Ds65naCv-CgmNaOLn.js","./vec2f32-CVhmN3Me-DxoqVD7C.js","./NestedMap-Ddo7BfvO-BpVPk8mz.js","./Version-CoKzbupV-B9bpp8jc.js","./triangle-hqU-Tc1X-sP-Z1ozC.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./main-DJmelbpF.js";import{o as n,im as a,gU as d,ik as v,dg as u}from"./story-DSn7G2jT.js";import{b}from"./LRUCache-C3erQTWv-DbHFqh5J.js";let c=h();function h(){return new b(50)}async function g(o,i=null){if(!o.isPrimitive){const e=o.resource?.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const t=c.get(e);if(t!==void 0)return t;const{fetch:l}=await f(()=>import("./objectResourceUtils-CelAKRU2-BMu1OKql.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url),m=await l(e,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),s=a(m.referenceBoundingBox,u());return c.put(e,s),s}if(!o.resource?.primitive)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const r=d(v(o.resource.primitive));if(i!=null)for(let e=0;e<r.length;e++)r[e]*=i;return a(r,u())}export{g as computeObjectLayerResourceSize};
