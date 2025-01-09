import{fq as f,fK as y,fL as m,fM as u,eV as l,fN as w,fO as A,fP as L}from"./story-BRwEvu2S.js";import{a as h,t as $,l as n,s as c}from"./hilight-defs-DzKgjtLG-D-utaUCJ.js";import"./main-BqOhRcj8.js";class d extends m{config={};mode=h.NONE;constructor(i,e){super(e),this.config=i,this.mode=i.mode}async add(i){this.notImplementedError("addGraphics")}async remove(i){this.notImplementedError("removeGraphics")}async reloadHilight(i){this.notImplementedError("reloadHilight")}async getHilightLayer(){const i=await this.layerFetcher();if(i){if(i.isLoaded&&i instanceof u)return i;console.warn("Hilight layer exists but is in bad form.");return}else{console.warn("Hilight layer could not be fetched.");return}}notImplementedError(i){console.warn(`Hilight mode method ${i} was not implemented by subclass.`)}layerFetcher(){const i=this.$iApi.geo.layer.getLayer(n);return i?Promise.resolve(i):new Promise(e=>{let t=0;const s=setInterval(()=>{const a=this.$iApi.geo.layer.getLayer(n);if(a)clearInterval(s),e(a);else if(t+=125,t>=1125){clearInterval(s),e(void 0);return}},125)})}}class g extends d{async add(i){const e=await this.getHilightLayer();e&&await e.addGraphic(i)}async remove(i){const e=await this.getHilightLayer();e&&e.removeGraphic(i)}async reloadHilight(i){await this.remove(i),await this.add(i)}}class v extends g{handlers=[];onOpacity;offOpacity;lastAdd=0;constructor(i,e){super(i,e),this.onOpacity=i.options?.onOpacity??.75,this.offOpacity=i.options?.offOpacity>.02?i.options.offOpacity:.02,this.$iApi.geo.map.created?this.hilightSetup():this.handlers.push(this.$iApi.event.on(l.MAP_CREATED,()=>{this.hilightSetup()})),this.handlers.push(this.$iApi.event.on(l.MAP_BASEMAPCHANGE,()=>{this.getHilightLayer().then(t=>{t&&t.graphics.length===0&&this.updateFogLayer()})}))}async hilightSetup(){const i=w(this.$vApp.$pinia).activeBasemapConfig;try{const e=this.$iApi.geo.layer.createLayer({id:c,layerType:y.TILE,cosmetic:!0,url:i.layers[0].url});await this.$iApi.geo.map.addLayer(e),e.opacity=this.offOpacity,await this.reorderFogLayer()}catch{console.error("Something went wrong while setting up the hilighter.")}}async updateFogLayer(){this.$iApi.geo.map.removeLayer(c),await this.hilightSetup()}async reorderFogLayer(){const i=this.getFogLayer(),e=await this.getHilightLayer();if(!e||!i)return;const t=this.$iApi.geo.layer.layerOrderIds(),s=t.indexOf(i.id),a=t.indexOf(e.id);a<s&&a>-1&&s>-1&&this.$iApi.geo.map.reorder(e,s,!1)}async add(i){this.lastAdd=Date.now();const e=this.getFogLayer();e&&(e.opacity=this.onOpacity,await super.add(i))}async remove(i){await super.remove(i);const e=this.getFogLayer();if(!e)return;const t=Date.now(),s=await this.getHilightLayer();s&&setTimeout(()=>{this.lastAdd<t&&!s.getGraphicCount()&&(e.opacity=this.offOpacity)},300)}async reloadHilight(i){await this.updateFogLayer(),await super.reloadHilight(i)}getFogLayer(){const i=this.$iApi.geo.layer.getLayer(c);if(i&&i instanceof A)return i;console.warn("Hilight fog layer could not be fetched.")}}class p extends g{handlers=[];constructor(i,e){super(i,e),this.hilightSetup(i),this.handlers.push(this.$iApi.event.on(l.MAP_CREATED,()=>{this.hilightSetup(i)}))}hilightSetup(i){this.$iApi.geo.map.viewPromise.then(()=>{this.$iApi.geo.map.esriView.highlightOptions=i.options})}async add(i){await super.add(i);const e=this.$iApi.geo.layer.getLayer(n);if(e&&e.esriLayer&&e.isLoaded&&e instanceof L){const t=i instanceof Array?i:[i];this.$iApi.geo.map.esriView?.whenLayerView(e.esriLayer)?.then(function(s){s.highlight(t.map(a=>e.getEsriGraphic(a.id)))})}}async remove(i){await super.remove(i)}}class H extends f{hilightMode=new d({},this.$iApi);initialized(){this.initHilightLayer()}_parseConfig(i){if(i)switch(i.mode){case h.NONE:this.hilightMode=new d(i,this.$iApi);break;case h.GLOW:this.hilightMode=new p(i,this.$iApi);break;case h.LIFT:this.hilightMode=new g(i,this.$iApi);break;case h.FOG:this.hilightMode=new v(i,this.$iApi);break;default:console.error("Could not find hilight mode:",i.mode);break}else this.hilightMode=new p($,this.$iApi)}async initHilightLayer(){const i=this.$iApi.geo.layer.createLayer({id:n,layerType:y.GRAPHIC,cosmetic:!0,url:""});await this.$iApi.geo.map.addLayer(i)}async addHilight(i){const e=i instanceof Array?i:[i];await this.hilightMode.add(e)}async removeHilight(i){const e=i?i instanceof Array?i:[i]:void 0;await this.hilightMode.remove(e)}async reloadHilight(i){const e=i instanceof Array?i:[i];await this.hilightMode.reloadHilight(e)}async getGraphicsByKey(i,e,t){const s=await this.getHilightLayer();if(!s)return[];let a=s.graphics.map(r=>({...this.deconstructGraphicKey(r.id),og:r}));return i&&(a=a.filter(r=>r.origin===i)),e&&(a=a.filter(r=>r.uid===e)),t&&(a=a.filter(r=>r.oid===t)),a.map(r=>r.og)}constructGraphicKey(i,e,t){return`${n}~${i}~${e}~${t}`}deconstructGraphicKey(i){const e=i.split("~");return e.length!==4&&console.warn("Malformed Hilight Graphic key provided:",i),{origin:e[1],uid:e[2],oid:parseInt(e[3])}}async getHilightLayer(){if(this.hilightMode)return await this.hilightMode.getHilightLayer();console.warn("API get layer request before highlight mode object exists")}}class F extends H{async added(){this._parseConfig(this.config);const i=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e));this.removed=()=>{i()}}}export{F as default};
