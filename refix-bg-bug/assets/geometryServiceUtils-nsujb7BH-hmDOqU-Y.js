import{C as a,o as n,r as s}from"./story-DleBxxVb.js";import{f,j as m}from"./project-DQKhruav-CS5pjP7k.js";import"./main-DiASSDZe.js";import"./utils-9sQxfkoa-I4lFhn84.js";import"./utils-Bq23Xwmj-B12PcRDJ.js";async function g(e=null,i){if(a.geometryServiceUrl)return a.geometryServiceUrl;if(!e)throw new n("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||s.getDefault():e,await r.load({signal:i});const t=r.helperServices?.geometry?.url;if(!t)throw new n("internal:geometry-service-url-not-configured");return t}async function h(e,i,r=null,t){const l=await g(r,t),c=new f({geometries:[e],outSpatialReference:i}),o=await m(l,c,{signal:t});if(o&&Array.isArray(o)&&o.length===1)return o[0];throw new n("internal:geometry-service-projection-failed")}export{g as getGeometryServiceURL,h as projectGeometry};
