import{n as a}from"./story-Bt7S1l82.js";import{y as n}from"./utils-9sQxfkoa-Y4LaPpWa.js";import{R as e}from"./queryTopFeatures-IbhAPJlP-jYpjMSVG.js";import x from"./TopFeaturesQuery-Ckj_IYM7-BeiNItE7.js";import"./main-BdQb56MT.js";import"./normalizeUtils-Bxmy9MNI-CWD6CTtB.js";import"./normalizeUtilsCommon-CRJlkfEA-B5vK2WOv.js";import"./utils-Bq23Xwmj-oFDbQYij.js";import"./query-DFW9-NG_-DJrNYIAc.js";import"./pbfQueryUtils-F4ZE8-K8-goeccD3s.js";import"./pbf-D-y3_eZO-sXzVj70w.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./queryZScale-BiYV6Pr6-CzqJvjH6.js";import"./projection-BA9M1R7d-C0b1sRwz.js";import"./projectBuffer-CvCBvJ6W-B6Kj6ANP.js";import"./TimeExtent-Cn0Jofqr-DrPnDxV-.js";async function b(m,r,i){const p=n(m),o=await e(p,x.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:a.fromJSON(t)}}export{b as executeForTopExtents};
