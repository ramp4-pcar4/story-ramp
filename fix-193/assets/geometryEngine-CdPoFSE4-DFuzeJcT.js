import{aO as p,J as l}from"./story-FpFPbiXi.js";import{G as r}from"./geometryEngineBase-DueYg7ux-CCeespPx.js";import{hydratedAdapter as n}from"./hydrated-CplJC1Fs-CiJXOwBU.js";import"./main-C_7ateg5.js";import"./_commonjsHelpers-BITg13Vk-KnjfkSck.js";function i(e){const t=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return t?p(l,t):l.WGS84}function R(e){return r.extendedSpatialReferenceInfo(e)}function x(e,t){return r.clip(n,i(e),e,t)}function S(e,t){return r.cut(n,i(e),e,t)}function y(e,t){return r.contains(n,i(e),e,t)}function A(e,t){return r.crosses(n,i(e),e,t)}function D(e,t,a){return r.distance(n,i(e),e,t,a)}function L(e,t){return r.equals(n,i(e),e,t)}function T(e,t){return r.intersects(n,i(e),e,t)}function V(e,t){return r.touches(n,i(e),e,t)}function O(e,t){return r.within(n,i(e),e,t)}function v(e,t){return r.disjoint(n,i(e),e,t)}function z(e,t){return r.overlaps(n,i(e),e,t)}function H(e,t,a){return r.relate(n,i(e),e,t,a)}function J(e){return r.isSimple(n,i(e),e)}function C(e){return r.simplify(n,i(e),e)}function I(e,t=!1){return r.convexHull(n,i(e),e,t)}function N(e,t){return r.difference(n,i(e),e,t)}function b(e,t){return r.symmetricDifference(n,i(e),e,t)}function j(e,t){return r.intersect(n,i(e),e,t)}function q(e,t=null){return r.union(n,i(e),e,t)}function B(e,t,a,s,c,u){return r.offset(n,i(e),e,t,a,s,c,u)}function E(e,t,a,s=!1){return r.buffer(n,i(e),e,t,a,s)}function G(e,t,a,s,c,u){return r.geodesicBuffer(n,i(e),e,t,a,s,c,u)}function P(e,t,a=!0){return r.nearestCoordinate(n,i(e),e,t,a)}function W(e,t){return r.nearestVertex(n,i(e),e,t)}function k(e,t,a,s){return r.nearestVertices(n,i(e),e,t,a,s)}function f(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function F(e,t,a){if(e==null)throw new o;const s=e.spatialReference;if((a=a??f(e))==null)throw new o;const c=e.constructor.fromJSON(r.rotate(e,t,a));return c.spatialReference=s,c}function K(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??f(e))==null)throw new o;const s=e.constructor.fromJSON(r.flipHorizontal(e,t));return s.spatialReference=a,s}function M(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??f(e))==null)throw new o;const s=e.constructor.fromJSON(r.flipVertical(e,t));return s.spatialReference=a,s}function Q(e,t,a,s){return r.generalize(n,i(e),e,t,a,s)}function U(e,t,a){return r.densify(n,i(e),e,t,a)}function X(e,t,a,s=0){return r.geodesicDensify(n,i(e),e,t,a,s)}function Y(e,t){return r.planarArea(n,i(e),e,t)}function Z(e,t){return r.planarLength(n,i(e),e,t)}function $(e,t,a){return r.geodesicArea(n,i(e),e,t,a)}function _(e,t,a){return r.geodesicLength(n,i(e),e,t,a)}function ee(e,t){return r.intersectLinesToPoints(n,i(e),e,t)}function te(e,t){r.changeDefaultSpatialReferenceTolerance(e,t)}function re(e){r.clearDefaultSpatialReferenceTolerance(e)}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{E as buffer,te as changeDefaultSpatialReferenceTolerance,re as clearDefaultSpatialReferenceTolerance,x as clip,y as contains,I as convexHull,A as crosses,S as cut,U as densify,N as difference,v as disjoint,D as distance,L as equals,R as extendedSpatialReferenceInfo,K as flipHorizontal,M as flipVertical,Q as generalize,$ as geodesicArea,G as geodesicBuffer,X as geodesicDensify,_ as geodesicLength,j as intersect,ee as intersectLinesToPoints,T as intersects,J as isSimple,P as nearestCoordinate,W as nearestVertex,k as nearestVertices,B as offset,z as overlaps,Y as planarArea,Z as planarLength,H as relate,F as rotate,C as simplify,b as symmetricDifference,V as touches,q as union,O as within};
