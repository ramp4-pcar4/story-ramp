import{m as t,J as a,ca as o}from"./story-BLxSf89q.js";const f={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new t({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:a.WebMercator}),minus180Line:new t({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:a.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new t({paths:[[[180,-180],[180,180]]],spatialReference:a.WGS84}),minus180Line:new t({paths:[[[-180,-180],[-180,180]]],spatialReference:a.WGS84})}};function u(e,n){return Math.ceil((e-n)/(2*n))}function m(e,n){const r=c(e);for(const s of r)for(const i of s)i[0]+=n;return e}function c(e){return o(e)?e.rings:e.paths}export{f,u as p,c as t,m as u};
