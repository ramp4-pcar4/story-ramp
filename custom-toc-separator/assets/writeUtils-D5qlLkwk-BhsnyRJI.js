import{o,cD as n,P as s,cE as a,N as u}from"./story-OUarUCIt.js";const d=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),c=new Set(["catalog","csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","knowledge-graph","map-image","map-notes","media","ogc-feature","oriented-imagery","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function p(e){return e.layerContainerType==="basemap"?d:e.layerContainerType==="operational-layers"?c:null}function m(e,t){if(t.restrictedWebMapWriting){const i=p(t);return i==null||i.has(e.type)&&!n(e)}return!0}function g(e,t){if(t)if(n(e)){const i=u("featureCollection.layers",t),l=i?.[0]?.layerDefinition;l&&r(e,l)}else e.type!=="group"&&r(e,t)}function r(e,t){"maxScale"in e&&(t.maxScale=a(e.maxScale)??void 0),"minScale"in e&&(t.minScale=a(e.minScale)??void 0)}function f(e,t){if(g(e,t),t&&(t.id=e.id,"blendMode"in e&&(t.blendMode=e.blendMode,t.blendMode==="normal"&&delete t.blendMode),t.opacity=a(e.opacity)??void 0,t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&e.type!=="wmts"))if(n(e)){const i=t.featureCollection;i&&(i.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}function b(e,t,i){if(!e.persistenceEnabled)return null;if(!("write"in e)||!e.write)return i?.messages&&i.messages.push(new o("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(n(e)&&!e.isTable)t=e.resourceInfo;else if(m(e,i)){const l={};return e.write(l,i)?l:null}return t!=null&&f(e,t=s(t)),t}export{b as y};
