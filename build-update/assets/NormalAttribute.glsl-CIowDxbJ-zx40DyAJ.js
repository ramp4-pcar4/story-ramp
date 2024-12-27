import{bF as u}from"./story-DE9AooAy.js";import{e as n}from"./interfaces-DN2-jsJC-DzMTiT5R.js";import{T as a}from"./VertexAttribute-DqD5S0a2-3q90nikV.js";var d;(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(d||(d={}));var o;function S(e){return e===o.Shadow||e===o.ShadowHighlight||e===o.ShadowExcludeHighlight||e===o.ViewshedShadow}function b(e){return f(e)||e===o.Normal}function N(e){return g(e)||e===o.Normal}function l(e){return e===o.Highlight||e===o.ObjectAndLayerIdColor}function r(e){return e===o.Color}function s(e){return r(e)||p(e)}function h(e){return r(e)||l(e)}function m(e){return s(e)||l(e)}function f(e){return h(e)||c(e)}function g(e){return m(e)||c(e)}function c(e){return e===o.Depth}function p(e){return e===o.ColorEmission}(function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"})(o||(o={}));function O(e,i){switch(i.normalType){case t.Compressed:e.attributes.add(a.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(n`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:e.attributes.add(a.NORMAL,"vec3"),e.vertex.code.add(n`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:e.fragment.code.add(n`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:u(i.normalType);case t.COUNT:}}var t;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"})(t||(t={}));export{O as S,s as c,S as f,b as g,p as h,d as i,o,N as p,h as s,t};
