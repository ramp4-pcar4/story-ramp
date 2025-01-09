import{J as S,w as R,M as p,r as a,T as u,n as l}from"./languageUtils-BYxF9hRA-DTI3BdaK.js";import{Y as d}from"./TimeOnly-DSMefxKy-DZBsySJW.js";import{E as c,I as w}from"./SpatialFilter-BlQBFhwz-BJUydoMO.js";import{d as o}from"./story-BRwEvu2S.js";import{relate as y,crosses as I,touches as F,within as A,overlaps as C,contains as P,intersects as h}from"./geometryEngineAsync-D7oEu5dd-DJMHSNBL.js";import"./ImmutableArray-CiJxhY8_-Kqx7aWRu.js";import"./shared-D1w-26bA-BD--mvmR.js";import"./Field-C6hA1tZj-BYTR5znb.js";import"./fieldType-CD2CL2hr-CZXcUd2A.js";import"./main-BqOhRcj8.js";import"./number-eRKYXfX9-BqAtZA8c.js";import"./Query-BrwMGK8U-C5yGXPrR.js";import"./TimeExtent-Cn0Jofqr--9ucgkmY.js";import"./UnknownTimeZone-C--TOcPG-CNI1xBDr.js";import"./arcadeUtils-DpP0k7IY-CAuPflmv.js";import"./featureConversionUtils-D6hFQ4Af-Dq7Pb6hq.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./FieldsIndex-HmzMbJQG-B4572ECv.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./WhereClause-DxwoyBMS-DVVlJFbW.js";import"./workers-PiCjreoO-B1pUkjWr.js";function f(n){return n instanceof o}function s(n,t,i,m){return m(n,t,async(v,e,r)=>{if(r.length<2)throw new u(n,l.WrongNumberOfParameters,t);if((r=S(r))[0]===null&&r[1]===null)return!1;if(a(r[0])){if(r[1]instanceof o)return new w({parentfeatureset:r[0],relation:i,relationGeom:r[1]});if(r[1]===null)return new c({parentfeatureset:r[0]});throw new u(n,l.InvalidParameter,t)}if(f(r[0])){if(f(r[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":return h(d(r[0]),d(r[1]));case"esriSpatialRelIntersects":return h(r[0],r[1]);case"esriSpatialRelContains":return P(r[0],r[1]);case"esriSpatialRelOverlaps":return C(r[0],r[1]);case"esriSpatialRelWithin":return A(r[0],r[1]);case"esriSpatialRelTouches":return F(r[0],r[1]);case"esriSpatialRelCrosses":return I(r[0],r[1])}throw new u(n,l.InvalidParameter,t)}if(a(r[1]))return new w({parentfeatureset:r[1],relation:i,relationGeom:r[0]});if(r[1]===null)return!1;throw new u(n,l.InvalidParameter,t)}if(r[0]===null){if(a(r[1]))return new c({parentfeatureset:r[1]});if(r[1]instanceof o||r[1]===null)return!1}throw new u(n,l.InvalidParameter,t)})}function Q(n){n.mode==="async"&&(n.functions.intersects=function(t,i){return s(t,i,"esriSpatialRelIntersects",n.standardFunctionAsync)},n.functions.envelopeintersects=function(t,i){return s(t,i,"esriSpatialRelEnvelopeIntersects",n.standardFunctionAsync)},n.signatures.push({name:"envelopeintersects",min:2,max:2}),n.functions.contains=function(t,i){return s(t,i,"esriSpatialRelContains",n.standardFunctionAsync)},n.functions.overlaps=function(t,i){return s(t,i,"esriSpatialRelOverlaps",n.standardFunctionAsync)},n.functions.within=function(t,i){return s(t,i,"esriSpatialRelWithin",n.standardFunctionAsync)},n.functions.touches=function(t,i){return s(t,i,"esriSpatialRelTouches",n.standardFunctionAsync)},n.functions.crosses=function(t,i){return s(t,i,"esriSpatialRelCrosses",n.standardFunctionAsync)},n.functions.relate=function(t,i){return n.standardFunctionAsync(t,i,async(m,v,e)=>{if(e=S(e),R(e,3,3,t,i),f(e[0])&&f(e[1]))return y(e[0],e[1],p(e[2]));if(e[0]instanceof o&&e[1]===null||e[1]instanceof o&&e[0]===null)return!1;if(a(e[0])&&e[1]===null)return new c({parentfeatureset:e[0]});if(a(e[1])&&e[0]===null)return new c({parentfeatureset:e[1]});if(a(e[0])&&e[1]instanceof o)return e[0].relate(e[1],p(e[2]));if(a(e[1])&&e[0]instanceof o)return e[1].relate(e[0],p(e[2]));if(e[0]===null&&e[1]===null)return!1;throw new u(t,l.InvalidParameter,i)})})}export{Q as registerFunctions};
