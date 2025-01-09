import{jw as g,di as m}from"./story-BRwEvu2S.js";import{j as h}from"./ElevationInfo-yv2-9tj6-DWmquHEq.js";function c(e){return e?y:I}function p(e,n){return n?.mode?n.mode:c(e).mode}function w(e,n){return n??c(e)}function f(e,n){return p(e==null||(e.hasZ??!1),n)}function $(e){const n=d(e);return f(e.geometry,n)}function R(e){const n=d(e),t=f(e.geometry,n),o=n!=null&&t!=="on-the-ground"?x(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function d(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function s(e,n){if(!e?.offset)return 0;const{offset:t,unit:o}=e;if(o==="decimal-degrees")return 0;const r=o!=="unknown"&&o?o:"meters",i=g(n);return i?m(t,r,i):0}function j(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=s(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function z(e,n,t,o=null){return v(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function k(e,n,t,o,r=null){return v(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function v(e,n,t,o,r,i,l=null){if(i==null)return;const u=l!=null?l.mode:"absolute-height";if(u==="on-the-ground")return 0;const{absoluteZ:a}=E(n,t,o,r,e,i);return b(a,n,t,o,r,e,l,u)}function E(e,n,t,o,r,i){const l=s(i,o);switch(i.mode){case"absolute-height":return{absoluteZ:t+l,elevation:0};case"on-the-ground":{const u=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:u,elevation:u}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+l,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+l,elevation:u}}}}function b(e,n,t,o,r,i,l,u){const a=s(l,r);switch(u){case"absolute-height":return e-a;case"relative-to-ground":return e-((i.elevationProvider.getElevation(n,t,o,r,"ground")??0)+a);case"relative-to-scene":return e-((i.elevationProvider.getElevation(n,t,o,r,"scene")??0)+a)}}function V(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function q(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function A(e,n){return n?.featureExpressionInfo!=null&&n.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function O(e,n){n&&e.warn(".elevationInfo=",n)}function x(e){return(e?.offset??0)*h(e?.unit)}const y={mode:"absolute-height",offset:0},I={mode:"on-the-ground",offset:null};export{R as I,z as P,V as R,j as Z,v as f,E as g,A as j,O as k,f as l,y as m,k as w,w as x,$ as y,q as z};
