import{X as u,Q as c,W as v}from"./utils-HtkT8Fn3-CJzVMirU.js";import{D as z,l as T,N as y,s as I,c as V,m as x,E as w,h as D,V as E}from"./utils-tNxq3jkf-CUwwCDL6.js";import"./story-OWO1toEx.js";import"./main-Cp6FG-iA.js";import"./TimeExtent-Cn0Jofqr-COXge9ax.js";import"./quantizationUtils-bJy1cRwp-F6VPkfIl.js";import"./heatmapUtils-seiMkkkR-CJhAzdAG.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import"./utils-DyydRFHu-D3eIVUhu.js";import"./Basemap-BEqqSTw9-ZlVMFK6x.js";import"./loadAll-e978YItg-BZ-ioEqO.js";import"./PortalItem-CctGdnxF-CvISlx3T.js";import"./writeUtils-D5qlLkwk-CPP0zvEW.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-CrCJSnkw.js";import"./ClassBreaksDefinition-bYRgYgPp-CXagko9O.js";async function X(l){const{attribute:i,features:s}=l,{normalizationType:a,normalizationField:e,minValue:n,maxValue:o,fieldType:t,outStatisticTypes:r}=i,m=await u({field:i.field,valueExpression:i.valueExpression,normalizationType:a,normalizationField:e,normalizationTotal:i.normalizationTotal,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},s),f=z({normalizationType:a,normalizationField:e,minValue:n,maxValue:o}),d={value:.5,fieldType:t},p=t==="esriFieldTypeString"?T({values:m,supportsNullCount:f,percentileParams:d,outStatisticTypes:r}):y({values:m,minValue:n,maxValue:o,useSampleStdDev:!a,supportsNullCount:f,percentileParams:d,outStatisticTypes:r});return I(p,r,t==="esriFieldTypeDate")}async function j(l){const{attribute:i,features:s}=l,a=await u({field:i.field,field2:i.field2,field3:i.field3,fieldDelimiter:i.fieldDelimiter,valueExpression:i.valueExpression,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},s,!1),e=V(a);return x(e,i.domains,i.returnAllCodedValues,i.fieldDelimiter)}async function G(l){const{attribute:i,features:s}=l,{field:a,normalizationType:e,normalizationField:n,normalizationTotal:o,classificationMethod:t}=i,r=await u({field:a,valueExpression:i.valueExpression,normalizationType:e,normalizationField:n,normalizationTotal:o,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},s),m=w(r,{field:a,normalizationType:e,normalizationField:n,normalizationTotal:o,classificationMethod:t,standardDeviationInterval:i.standardDeviationInterval,numClasses:i.numClasses,minValue:i.minValue,maxValue:i.maxValue});return D(m,t)}async function H(l){const{attribute:i,features:s}=l,{field:a,normalizationType:e,normalizationField:n,normalizationTotal:o,classificationMethod:t}=i,r=await u({field:a,valueExpression:i.valueExpression,normalizationType:e,normalizationField:n,normalizationTotal:o,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},s);return E(r,{field:a,normalizationType:e,normalizationField:n,normalizationTotal:o,classificationMethod:t,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue})}async function J(l){const{attribute:i,features:s}=l,{field:a,radius:e,transform:n,spatialReference:o}=i,t=i.size??[0,0],r=c(s??[],n,o,t);return v(r,e??void 0,a,t[0],t[1])}export{G as classBreaks,J as heatmapStatistics,H as histogram,X as summaryStatistics,j as uniqueValues};
