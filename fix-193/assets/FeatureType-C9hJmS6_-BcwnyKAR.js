import{aa as a,e as p,v as e,S as i,a0 as m,ac as l,i as d}from"./story-FpFPbiXi.js";import{i as y}from"./Field-C6hA1tZj-8tpVlG1e.js";import{p as c}from"./FeatureTemplate-SPHPD45f-DjxrPq4y.js";let o=class extends a(p){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const r={};for(const s of Object.keys(t))r[s]=y(t[s]);return r}writeDomains(t,r){const s={};for(const n of Object.keys(t))t[n]&&(s[n]=t[n]?.toJSON());r.domains=s}};e([i({json:{write:!0}})],o.prototype,"id",void 0),e([i({json:{write:!0}})],o.prototype,"name",void 0),e([i({json:{write:!0}})],o.prototype,"domains",void 0),e([m("domains")],o.prototype,"readDomains",null),e([l("domains")],o.prototype,"writeDomains",null),e([i({type:[c],json:{write:!0}})],o.prototype,"templates",void 0),o=e([d("esri.layers.support.FeatureType")],o);const w=o;export{w as y};
