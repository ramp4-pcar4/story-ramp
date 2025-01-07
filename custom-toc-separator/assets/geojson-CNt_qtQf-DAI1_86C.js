import{y as $}from"./date-Cqvy-TgA-DIf-QFLz.js";import{o as m,dc as C,cp as F,ch as N}from"./story-OUarUCIt.js";import{i as O,c as v}from"./OptimizedFeature-EIithYlr-Cq64mIT3.js";const D={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function w(t){return D[t]}function*j(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const n of t.features)n&&(yield n)}}function*I(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const n of t.coordinates)yield*n;break;case"MultiPolygon":for(const n of t.coordinates)for(const e of n)yield*e}}function*J(t,n={}){const{geometryType:e,objectIdField:o}=n;for(const r of t){const{geometry:c,properties:y,id:i}=r;if(c&&w(c.type)!==e)continue;const f=y||{};let u;o&&(u=f[o],i==null||u||(f[o]=u=i)),yield new O(c?E(new v,c,n):null,f,null,u??void 0)}}function R(t){for(const n of t)if(n.length>2)return!0;return!1}function x(t){return!k(t)}function A(t){return k(t)}function k(t){let n=0;for(let e=0;e<t.length;e++){const o=t[e],r=t[(e+1)%t.length];n+=o[0]*r[1]-r[0]*o[1]}return n<=0}function G(t){const n=t[0],e=t[t.length-1];return n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]||t.push(n),t}function E(t,n,e){switch(n.type){case"LineString":return Z(t,n,e);case"MultiLineString":return B(t,n,e);case"MultiPoint":return H(t,n,e);case"MultiPolygon":return Y(t,n,e);case"Point":return q(t,n,e);case"Polygon":return z(t,n,e)}}function Z(t,n,e){return d(t,n.coordinates,e),t}function B(t,n,e){for(const o of n.coordinates)d(t,o,e);return t}function H(t,n,e){return d(t,n.coordinates,e),t}function Y(t,n,e){for(const o of n.coordinates){M(t,o[0],e);for(let r=1;r<o.length;r++)T(t,o[r],e)}return t}function q(t,n,e){return P(t,n.coordinates,e),t}function z(t,n,e){const o=n.coordinates;M(t,o[0],e);for(let r=1;r<o.length;r++)T(t,o[r],e);return t}function M(t,n,e){const o=G(n);x(o)?L(t,o,e):d(t,o,e)}function T(t,n,e){const o=G(n);A(o)?L(t,o,e):d(t,o,e)}function d(t,n,e){for(const o of n)P(t,o,e);t.lengths.push(n.length)}function L(t,n,e){for(let o=n.length-1;o>=0;o--)P(t,n[o],e);t.lengths.push(n.length)}function P(t,n,e){const[o,r,c]=n;t.coords.push(o,r),e.hasZ&&t.coords.push(c||0)}function K(t){switch(typeof t){case"string":return $(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function U(t,n=4326){if(!t)throw new m("geojson-layer:empty","GeoJSON data is empty");if(t.type!=="Feature"&&t.type!=="FeatureCollection")throw new m("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:e}=t;if(!e)return;const o=typeof e=="string"?e:e.type==="name"?e.properties.name:e.type==="EPSG"?e.properties.code:null,r=C({wkid:n})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${n})$`,"i");if(!o||!r.test(o))throw new m("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:e})}function V(t,n={}){const e=[],o=new Set,r=new Set;let c,y=!1,i=null,f=!1,{geometryType:u=null}=n;for(const p of j(t)){const{geometry:g,properties:l,id:a}=p;if((!g||(u||(u=w(g.type)),w(g.type)===u))&&(y||(y=R(I(g))),f||(f=a!=null,f&&(c=typeof a,l&&(i=Object.keys(l).filter(s=>l[s]===a)))),l&&i&&f&&a!=null&&(i.length>1?i=i.filter(s=>l[s]===a):i.length===1&&(i=l[i[0]]===a?i:[])),l))for(const s in l){if(o.has(s))continue;const b=K(l[s]);if(b==="unknown"){r.add(s);continue}r.delete(s),o.add(s);const S=F(s);S&&e.push({name:S,alias:s,type:b})}}const h=F(i?.length===1&&i[0]||null)??void 0;if(h){for(const p of e)if(p.name===h&&N(p)){p.type="esriFieldTypeOID";break}}return{fields:e,geometryType:u,hasZ:y,objectIdFieldName:h,objectIdFieldType:c,unknownFields:Array.from(r)}}function W(t,n){return Array.from(J(j(t),n))}export{U as X,V as Y,W as _,w as h};
