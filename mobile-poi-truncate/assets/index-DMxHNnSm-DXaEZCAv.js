const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-DTrOvIb7-BXe4aVVb.js","./main-Dqar6lJ9.js","./main-Blpl9308.css","./story-BAzleJnS.js","./story-Cjnzy4Ic.css"])))=>i.map(i=>d[i]);
import{_ as c}from"./main-Dqar6lJ9.js";import{eT as y,fu as u,eW as m,fw as f,fQ as a,fq as v,fR as L,fS as s,fT as x,fU as g,fK as b,eX as I,eY as E,e_ as A,e$ as $,f0 as w,f1 as _,f2 as h,f4 as C}from"./story-BAzleJnS.js";class S extends v{_parseConfig(e){const l=e?.headerControls?.slice()??["wizard","layerReorder","groupToggle","visibilityToggle"];if(a(this.$vApp.$pinia).headerControls=l,!e||!e.root.children)return;a(this.$vApp.$pinia).multilineItems=e.multilineItems?.enabled??!0;const t=[1,2,3,4,5,6];!e.multilineItems?.maxLines||!t.includes(e.multilineItems?.maxLines)?a(this.$vApp.$pinia).maxLines=3:a(this.$vApp.$pinia).maxLines=e.multilineItems.maxLines,this.handlePanelWidths(["legend"]),this.handlePanelTeleports(["legend"]);const i=this.getLayerFixtureConfigs();e.root.children.forEach(r=>{r.layerLegendConfigs=i,this.addItem(r)}),this.$iApi.geo.layer.allLayers().forEach(r=>{this.updateLegend(r)})}createItem(e,l){let t;e.layerId===void 0?t=new L(this.$iApi,e,l):(e.sublayerIndex!==void 0&&(e.layerId=`${e.layerId}-${e.sublayerIndex}`),t=new s(this.$iApi,e,l));const i=e.children;return i&&i.forEach(r=>{e.layerLegendConfigs!==void 0&&(r.layerLegendConfigs=e.layerLegendConfigs),t.children.push(this.createItem(r,t))}),t}addItem(e,l){const t=e instanceof x?e:this.createItem(e,l);return this._insertItem(t,l),t}async addLayerItem(e,l){const t=new s(this.$iApi,{layerId:e.id,sublayerIndex:e.isSublayer?e.layerIdx:void 0,name:e.name},l);return this._insertItem(t,l),this.updateLegend(e),t}get config(){return super.config}getLegend(){return a(this.$vApp.$pinia).children||[]}getLegendConfig(){return{root:{children:this.getLegend().map(e=>e.getConfig())}}}getItem(e){const l=this.getLegend();let t;return l.some(i=>(t=this.searchTreeFirst(i,r=>r.uid===e),t!==void 0)),t}getLayerItem(e){let l,t,i;return typeof e=="string"?(t=e,l=e):(t=e.id,l=e.uid),this.getLegend().some(r=>(i=this.searchTreeFirst(r,n=>n instanceof s&&(n.layerId===t||n.uid===l)),i!==void 0)),i}getAllExpanded(e){const l=e??!0;return this.searchLegend(t=>t.children.length>0&&t.expanded===l)}getAllVisible(e){const l=e??!0;return this.searchLegend(t=>t.visibility===l)}getLayerBoundItems(e){let l="";const t=e instanceof g?e:this.$iApi.geo.layer.getLayer(e);if(t)l=t.isSublayer?t.parentLayer?.id||"":t.id;else return[];return this.searchLegend(i=>i instanceof s&&(i.layerId===l||i.parentLayerId===l))}updateLegend(e){const l=(t,i)=>{const r=this.getLayerItem(t);i?(r&&t instanceof g&&(r.layer=t),r?.error()):r?.load(t instanceof g?t:void 0)};e.loadPromise().then(()=>{let t=this.getLayerItem(e);if(e.layerType===b.MAPIMAGE){const i=r=>{if(r.isLayerRoot&&!r.isLogicalLayer)t=this.getLayerItem(e),l(e,!1),t&&!t.treeGrown&&(r.children.map(n=>this._treeWalker(e,n)).map(n=>this.addItem(n,t)),t.treeGrown=!0),r.children.forEach(n=>i(n));else if(!r.isLayerRoot&&!r.isLogicalLayer){if(t=this.getLayerItem(`${e.id}-${r.layerIdx}`),t){const n=t.getConfig();delete n.layerId,delete n.sublayerIndex,delete n.children,n.name||delete n.name;const d={...this._treeWalker(e,r),...n},o=this.createItem(d);this._replaceItem(t,o)}r.children.forEach(n=>i(n))}else r.isLogicalLayer&&l(this._treeWalker(e,r).layer,!1)};i(e.getLayerTree())}else l(e,!1)}).catch(()=>{l(e,!0),e.supportsSublayers&&e.config.sublayers.forEach(t=>{l(`${e.id}-${t.index}`,!0)})})}expandItems(e,l){const t=this.getLegend(),i=l===void 0?t:l.children;l!==void 0&&this._toggleState(l,{expanded:e}),i.forEach(r=>{this._toggleState(r,{expanded:e})})}showItems(e,l){const t=this.getLegend(),i=l===void 0?t:l.children;l!==void 0&&this._toggleState(l,{visibility:e}),i.forEach(r=>{this._toggleState(r,{visibility:e})})}reloadLayerItem(e){const l=this.getLayerBoundItems(e);return l.forEach(t=>t.reload()),l.length>0}removeItem(e){const l=typeof e=="string"?this.getItem(e):e;return l!==void 0?this._deleteItem(l):!1}removeLayerItem(e){const l=this.getLayerItem(e);return l!==void 0?this._deleteItem(l):!1}searchTreeFirst(e,l){if(l(e))return e;{let t;return e.children.some(i=>(t=this.searchTreeFirst(i,l),t!==void 0)),t}}searchTreeAll(e,l){const t=[],i=[e];for(;i.length>0;){const r=i.shift();r&&l(r)&&t.push(r),r&&i.push(...r.children)}return t}searchLegend(e){return this.getLegend().map(l=>this.searchTreeAll(l,e)).flat()}_toggleState(e,l){const t=l.visibility,i=l.expanded;t!==void 0&&e.toggleVisibility(t),i!==void 0&&e.children.length>0&&e.toggleExpanded(i),e.children&&e.children.length>0&&e.children.forEach(r=>{this._toggleState(r,l)})}_insertItem(e,l){a(this.$vApp.$pinia).addItem({item:e,parent:l})}_deleteItem(e){const l=a(this.$vApp.$pinia),t=i=>{i.children.length>0&&i.children.forEach(r=>{t(r)}),i instanceof s&&i.handlers.forEach(r=>this.$iApi.event.off(r)),l.removeItem(i)};return t(e),!0}_replaceItem(e,l){a(this.$vApp.$pinia).replaceItem({oldItem:e,newItem:l})}_treeWalker(e,l,t){const i=(n=>{const d=[e];for(;d.length>0;){const o=d.shift();if(o&&o.uid===n)return o;o&&d.push(...o.sublayers)}})(l.uid),r={};return l.isLayerRoot&&!l.isLogicalLayer?(r.layer=i,r.name=i.name,r.children=l.children.map(n=>this._treeWalker(e,n,t))):!l.isLayerRoot&&!l.isLogicalLayer?(r.name=l.name,r.children=l.children.map(n=>this._treeWalker(e,n,t))):l.isLogicalLayer&&(r.layer=i,r.name=i.name,r.layerId=i.id,r.sublayerIndex=e.isSublayer?e.layerIdx:void 0),{...r,...t}}}const T=y({__name:"nav-button",setup(p){const{t:e}=I(),l=E("iApi"),t=()=>{l.panel.toggle("legend")};return(i,r)=>{const n=A("mapnav-button");return $(),w(n,{onClickFunction:t,tooltip:C(e)("legend.title")},{default:_(()=>r[0]||(r[0]=[h("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1)])),_:1},8,["tooltip"])}}}),R={en:{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.showLayer":"Show layer","legend.visibility.hideLayer":"Hide layer","legend.visibility.showSymbol":"Show symbol","legend.visibility.hideSymbol":"Hide symbol","legend.visibility.showGroup":"Show group","legend.visibility.hideGroup":"Hide group","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.layer.data":"Show more data","legend.layer.data.only":"Layer not on map","legend.layer.offscale":"Layer out of scale","legend.layer.zoomToVisible":"Zoom to visible scale","legend.layer.options":"More options","legend.layer.controls.metadata":"Metadata","legend.layer.controls.settings":"Settings","legend.layer.controls.datatable":"Datatable","legend.layer.controls.symbology":"Legend","legend.layer.controls.boundaryzoom":"Zoom to Layer Boundary","legend.layer.controls.cancel":"Cancel","legend.layer.controls.remove":"Remove","legend.layer.controls.reload":"Reload","legend.layer.controls.reloadDisabled":"Layer cannot be reloaded","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},fr:{"legend.title":"Légende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"Réorganiser les couches","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"Élargir les groupes","legend.header.groups.collapse":"Réduire les groupes","legend.header.visible":"Basculer la Visibilité","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"Développer un groupe","legend.group.collapse":"Réduire un groupe","legend.visibility.showLayer":"Afficher la couche","legend.visibility.hideLayer":"Masquer la couche","legend.visibility.showSymbol":"Afficher le symbole","legend.visibility.hideSymbol":"Masquer le symbole","legend.visibility.showGroup":"Afficher le groupe","legend.visibility.hideGroup":"Masquer le groupe","legend.symbology.expand":"Développer la légende","legend.symbology.hide":"Masquer la légende","legend.symbology.loading":"Chargement en cours...","legend.layer.data":"Afficher plus de données","legend.layer.data.only":"Couche non visualisable","legend.layer.offscale":"Couche hors de portée","legend.layer.zoomToVisible":"Zoom sur l'échelle visible","legend.layer.options":"Plus d'options","legend.layer.controls.metadata":"Métadonnées","legend.layer.controls.settings":"Paramètres","legend.layer.controls.datatable":"Tableau de données","legend.layer.controls.symbology":"Légende","legend.layer.controls.boundaryzoom":"Zoomer à la limite","legend.layer.controls.cancel":"Annuler","legend.layer.controls.remove":"Retirer","legend.layer.controls.reload":"Recharger","legend.layer.controls.reloadDisabled":"Le calque ne peut pas être rechargé","legend.alert.symbologyExpanded":"Légende de la couche développée","legend.alert.symbologyCollapsed":"Légende de la couche réduite","legend.alert.groupExpanded":"Groupe de légende développé","legend.alert.groupCollapsed":"Groupe de légende réduit","legend.alert.layerAdded":"{name} couche ajoutée à la légende","legend.alert.layerRemoved":"Couche {name} retiré de la légende"}};class z extends S{added(){this.$iApi.component("legend-nav-button",T),this.$iApi.panel.register({legend:{screens:{"legend-screen":()=>u(c(()=>import("./screen-DTrOvIb7-BXe4aVVb.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url))},style:{width:"350px"},alertName:"legend.title",button:{tooltip:"legend.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'}}},{i18n:{messages:R}}),this._parseConfig(this.config!==void 0?JSON.parse(JSON.stringify(this.config)):void 0);const e=this.$vApp.$watch(()=>this.config,l=>this._parseConfig(l!==void 0?JSON.parse(JSON.stringify(l)):void 0));this.removed=()=>{e(),this.$iApi.fixture.exists("appbar")&&m(this.$vApp.$pinia).removeButton("legend"),this.$iApi.fixture.exists("mapnav")&&f(this.$vApp.$pinia).removeItem("legend"),a().$reset(),this.$iApi.panel.remove("legend")}}}export{z as default};
