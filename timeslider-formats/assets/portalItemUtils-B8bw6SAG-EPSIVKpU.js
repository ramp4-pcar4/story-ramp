import{N as u,K as l}from"./projection-BA9M1R7d-cWsUMj6A.js";import{d6 as E,J as f}from"./story-BRwEvu2S.js";async function d(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return E(e);const n=f.WGS84;return await u(t,n),l(e,n)}function p(e,t){if(!c(e,t)){const n=e.typeKeywords;n?n.push(t):e.typeKeywords=[t]}}function c(e,t){return!!e.typeKeywords?.includes(t)}function L(e){return c(e,y.HOSTED_SERVICE)}function A(e,t){const n=e.typeKeywords;if(n){const r=n.indexOf(t);r>-1&&n.splice(r,1)}}function m(e,t,n){n?p(e,t):A(e,t)}async function R(e){const t=e.clone().normalize();let n;if(t.length>1)for(const r of t)n?r.width>n.width&&(n=r):n=r;else n=t[0];return d(n)}const y={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer"};function M(e){const{portal:t,isOrgItem:n,itemControl:r}=e,i=t.user?.privileges;let o=!i||i.includes("features:user:edit"),s=!!n&&!!i?.includes("features:user:fullEdit");const a=r==="update"||r==="admin";return a?s=o=!0:s&&(o=!0),{features:{edit:o,fullEdit:s},content:{updateItem:a}}}export{y as E,L as I,m as L,R as S,A as l,M as m,c as o,p as u};
