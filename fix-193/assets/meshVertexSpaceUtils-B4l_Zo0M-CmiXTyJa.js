import{w as p,hl as u,a1 as l}from"./story-FpFPbiXi.js";import{R as s}from"./vec32-D9GsKZ1t-CGRi77HN.js";import{d as f,y as d}from"./MeshLocalVertexSpace-BqgocsoS-quL2qqNz.js";function c(){return l.getLogger("esri.geometry.Mesh")}function a(e){return e.origin!=null}function w(e){return a(e.vertexSpace)}function S(e,n){if(!a(e))return null;const[r,i,o]=e.origin;return new p({x:r,y:i,z:o,spatialReference:n})}function R(e,n){const{x:r,y:i,z:o,spatialReference:g}=e,t=[r,i,o??0];return n?.geographic!==void 0&&(u(c(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),n.vertexSpace&&c().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),(n?.vertexSpace??m(n?.geographic)??h(g))==="local"?new f({origin:t}):new d({origin:t})}function h(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function m(e){return e==null?void 0:e?"local":"georeferenced"}function z(e,n){return e.type===n.type&&(e.origin===n.origin||e.origin!=null&&n.origin!=null&&s(e.origin,n.origin))}export{z as S,w as d,S as m,a as t,R as x};
