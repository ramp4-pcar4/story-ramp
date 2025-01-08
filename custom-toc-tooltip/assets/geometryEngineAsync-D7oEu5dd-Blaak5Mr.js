import{w as l,g as w}from"./story-CqzOZAFN.js";import{q as h}from"./workers-PiCjreoO-78GDiR6O.js";import"./main-jn20pd5b.js";function a(e){return Array.isArray(e)?e[0]?.spatialReference:e?.spatialReference}function p(e){return e&&(Array.isArray(e)?e.map(p):e.toJSON?e.toJSON():e)}function c(e){return Array.isArray(e)?e.map(t=>w(t)):w(e)}function S(e,t){let n;return Array.isArray(e)?n=e:(n=[],n.push(e),t!=null&&n.push(t)),n}let f;async function d(){return f||(f=h("geometryEngineWorker",{strategy:"distributed"})),f}async function r(e,t){return(await d()).invoke("executeGEOperation",{operation:e,parameters:p(t)})}async function m(e,t){const n=await d();return Promise.all(n.broadcast("executeGEOperation",{operation:e,parameters:p(t)}))}function O(e){return r("extendedSpatialReferenceInfo",[e])}async function D(e,t){return c(await r("clip",[a(e),e,t]))}async function J(e,t){return c(await r("cut",[a(e),e,t]))}function N(e,t){return r("contains",[a(e),e,t])}function L(e,t){return r("crosses",[a(e),e,t])}function T(e,t,n){return r("distance",[a(e),e,t,n])}function V(e,t){return r("equals",[a(e),e,t])}function v(e,t){return r("intersects",[a(e),e,t])}function E(e,t){return r("touches",[a(e),e,t])}function b(e,t){return r("within",[a(e),e,t])}function q(e,t){return r("disjoint",[a(e),e,t])}function z(e,t){return r("overlaps",[a(e),e,t])}function H(e,t,n){return r("relate",[a(e),e,t,n])}function I(e){return r("isSimple",[a(e),e])}async function P(e){return c(await r("simplify",[a(e),e]))}async function j(e,t=!1){return c(await r("convexHull",[a(e),e,t]))}async function k(e,t){return c(await r("difference",[a(e),e,t]))}async function B(e,t){return c(await r("symmetricDifference",[a(e),e,t]))}async function C(e,t){return c(await r("intersect",[a(e),e,t]))}async function G(e,t=null){const n=S(e,t);return c(await r("union",[a(n),n]))}async function W(e,t,n,i,s,u){return c(await r("offset",[a(e),e,t,n,i,s,u]))}async function F(e,t,n,i=!1){const s=[a(e),e,t,n,i];return c(await r("buffer",s))}async function K(e,t,n,i,s,u){const g=[a(e),e,t,n,i,s,u];return c(await r("geodesicBuffer",g))}async function M(e,t,n=!0){const i=await r("nearestCoordinate",[a(e),e,t,n]);return{...i,coordinate:l.fromJSON(i.coordinate)}}async function Q(e,t){const n=await r("nearestVertex",[a(e),e,t]);return{...n,coordinate:l.fromJSON(n.coordinate)}}async function U(e,t,n,i){return(await r("nearestVertices",[a(e),e,t,n,i])).map(s=>({...s,coordinate:l.fromJSON(s.coordinate)}))}function y(e){return"xmin"in e?e.center:"x"in e?e:e.extent?.center}async function X(e,t,n){if(e==null)throw new o;const i=e.spatialReference;if((n=n??y(e))==null)throw new o;const s=e.constructor.fromJSON(await r("rotate",[i,e,t,n]));return s.spatialReference=i,s}async function Y(e,t){if(e==null)throw new o;const n=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await r("flipHorizontal",[n,e,t]));return i.spatialReference=n,i}async function Z(e,t){if(e==null)throw new o;const n=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await r("flipVertical",[n,e,t]));return i.spatialReference=n,i}async function _(e,t,n,i){return c(await r("generalize",[a(e),e,t,n,i]))}async function $(e,t,n){return c(await r("densify",[a(e),e,t,n]))}async function ee(e,t,n,i=0){return c(await r("geodesicDensify",[a(e),e,t,n,i]))}function te(e,t){return r("planarArea",[a(e),e,t])}function ne(e,t){return r("planarLength",[a(e),e,t])}function re(e,t,n){return r("geodesicArea",[a(e),e,t,n])}function ae(e,t,n){return r("geodesicLength",[a(e),e,t,n])}async function ie(e,t){return c(await r("intersectLinesToPoints",[a(e),e,t]))}async function ce(e,t){await m("changeDefaultSpatialReferenceTolerance",[e,t])}async function se(e){await m("clearDefaultSpatialReferenceTolerance",[e])}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{F as buffer,ce as changeDefaultSpatialReferenceTolerance,se as clearDefaultSpatialReferenceTolerance,D as clip,N as contains,j as convexHull,L as crosses,J as cut,$ as densify,k as difference,q as disjoint,T as distance,V as equals,O as extendedSpatialReferenceInfo,Y as flipHorizontal,Z as flipVertical,_ as generalize,re as geodesicArea,K as geodesicBuffer,ee as geodesicDensify,ae as geodesicLength,C as intersect,ie as intersectLinesToPoints,v as intersects,I as isSimple,M as nearestCoordinate,Q as nearestVertex,U as nearestVertices,W as offset,z as overlaps,te as planarArea,ne as planarLength,H as relate,X as rotate,P as simplify,B as symmetricDifference,E as touches,G as union,b as within};
