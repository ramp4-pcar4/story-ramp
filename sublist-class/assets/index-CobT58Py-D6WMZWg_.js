const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-NGXXpKUs-DNKgHQ1j.js","./story-DYUJZqY7.js","./main-yJk-x1BV.js","./main-DDHzzIZe.css","./story-BOAlCe0K.css","./vue.esm-bundler-D2erd_gM-DXX4k9nU.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./main-yJk-x1BV.js";import{fu as p,g7 as y,fq as g,fL as m,fK as i,g8 as n,g9 as w}from"./story-DYUJZqY7.js";class h extends g{toggleWizard(e){const r=this.$iApi.panel.get("wizard");this.$iApi.panel.toggle(r,e)}}class z extends m{layerCount=0;sublayerCount=0;constructor(e){super(e)}async fetchFileInfo(e,r,a){switch(a||(a=await this.$iApi.geo.layer.files.fetchFileData(e,r)),r){case i.GEOJSON:return this.getGeojsonInfo(e,a);case i.SHAPEFILE:return this.getShapfileInfo(e,a);case i.CSV:return this.getCsvInfo(e,a);default:console.error(`Unsupported file type passed to fetchFileInfo - '${r}'`)}}async getGeojsonInfo(e,r){return r instanceof ArrayBuffer&&(r=JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(r)))),{config:{id:`geojson#${++this.layerCount}`,layerType:i.GEOJSON,url:e,name:e.substring(e.lastIndexOf("/")+1),state:{opacity:1,visibility:!0},rawData:r},fields:[{name:"OBJECTID",type:"oid"}].concat(this.$iApi.geo.layer.files.extractGeoJsonFields(r)),configOptions:["name","nameField","tooltipField","colour"]}}async getCsvInfo(e,r){return r instanceof ArrayBuffer&&(r=new TextDecoder("utf-8").decode(new Uint8Array(r))),{config:{id:`csv#${++this.layerCount}`,layerType:i.CSV,url:e,name:e.substring(e.lastIndexOf("/")+1),state:{opacity:1,visibility:!0},rawData:r},fields:[{name:"OBJECTID",type:"oid"}].concat(this.$iApi.geo.layer.files.extractCsvFields(r)),latLonFields:this.$iApi.geo.layer.files.filterCsvLatLonFields(r),configOptions:["name","nameField","tooltipField","latField","longField","colour"]}}async getShapfileInfo(e,r){const a=await this.$iApi.geo.layer.files.shapefileToGeoJson(r);return this.getGeojsonInfo(e,a)}async fetchServiceInfo(e,r,a){switch(r){case i.FEATURE:return this.getFeatureInfo(e);case i.MAPIMAGE:return this.getMapImageInfo(e,a);case i.TILE:return this.getTileInfo(e);case i.IMAGERY:return this.getImageryInfo(e);case i.WFS:return this.getWfsInfo(e);case i.WMS:return this.getWmsInfo(e,a)}}async getFeatureInfo(e){const r=await n.get(e,{params:{f:"json"}});return{config:{id:`${i.FEATURE}#${++this.layerCount}`,url:e,layerType:i.FEATURE,name:r.data.name,nameField:r.data.displayField,tooltipField:r.data.displayField,state:{opacity:1,visibility:!0}},fields:r.data.fields,configOptions:["name","nameField","tooltipField"]}}async getMapImageInfo(e,r){const a=await n.get(e,{params:{f:"json"}});return{config:{id:`${i.MAPIMAGE}#${++this.layerCount}`,url:e,layerType:i.MAPIMAGE,name:a.data.mapName,sublayers:[],state:{opacity:1,visibility:!0}},layers:this.createLayerHierarchy(a.data.layers,r),configOptions:["name","sublayers"],layersRaw:a.data.layers}}createLayerHierarchy(e,r){e.sort((l,s)=>l.id-s.id);const a=(l,s)=>{if(s===void 0)return!1;let c;if(s.find(o=>o.id===l))return s.find(o=>o.id===l);for(const o of s)if(c=a(l,o.children),c!==!1)return c;return!1},t=[],d=new Set(e.filter(l=>l.subLayerIds&&l.subLayerIds.length>0).map(l=>l.id));for(const l of e)if(r&&l.parentLayerId===-1)t.push({id:l.id,label:l.name,children:l.subLayerIds?[]:void 0});else if(r){const s=a(l.parentLayerId,t);s.children=[...s.children,{id:l.id,label:l.name,children:l.subLayerIds?[]:void 0}]}else d.has(l.id)||t.push({id:l.id,label:l.name,children:void 0});return t}async getTileInfo(e){const r=await n.get(e,{params:{f:"json"}});return{config:{id:`${i.TILE}#${++this.layerCount}`,url:e,layerType:i.TILE,name:r.data.mapName,state:{opacity:1,visibility:!0}},configOptions:["name"]}}async getImageryInfo(e){const r=await n.get(e,{params:{f:"json"}});return{config:{id:`${i.IMAGERY}#${++this.layerCount}`,url:e,layerType:i.IMAGERY,name:r.data.name,state:{opacity:1,visibility:!0}},configOptions:["name"]}}async getWfsInfo(e){const r=new w(e),{offset:a,limit:t}=r.queryMap,d=await this.$iApi.geo.layer.ogc.loadWfsData(e,-1,parseInt(a)||0,parseInt(t)||1e3);return this.getGeojsonInfo(e.match(/\/([^/]+)\/items/)?.[1]||"Layer",d)}async getWmsInfo(e,r){const a=await this.$iApi.geo.layer.ogc.parseCapabilities(e);return{config:{id:`${i.WMS}#${++this.layerCount}`,url:e,layerType:i.WMS,name:e,featureInfoMimeType:a.queryTypes[0],state:{opacity:1,visibility:!0}},layers:this.mapWmsLayerList(a.layers,r),configOptions:["name","sublayers"],layersRaw:a.layers}}mapWmsLayerList(e,r){let a=[];return e.forEach(t=>{t.name===null&&t.layers?a=[...a,...t.layers]:a.push(t)}),r?a.flatMap(t=>({id:`${t.name}#${++this.sublayerCount}`,label:t.title,children:t.layers.length>0?this.mapWmsLayerList(t.layers,r):void 0})):a.flatMap(t=>t.layers&&t.layers.length>0?this.mapWmsLayerList(t.layers,r):{id:`${t.name}#${++this.sublayerCount}`,label:t.title})}guessFormatFromURL(e){switch(e.match(/\.(zip|csv|geojson|json)$/)?.[1]){case"zip":return i.SHAPEFILE;case"csv":return i.CSV;case"geojson":case"json":return i.GEOJSON}return e.match(/\/ImageServer\/?$/gi)?i.IMAGERY:e.match(/\/collections\//gi)?i.WFS:e.match(/arcgis\/rest\/services\//gi)?e.match(/\/\d+\/?$/g)?i.FEATURE:i.MAPIMAGE:e.match(/service=|version=|\/wms/gi)?i.WMS:""}}const E={en:{"wizard.title":"Import Layer","wizard.upload.title":"Upload data","wizard.upload.or":"or","wizard.upload.file.label":"Upload a file","wizard.upload.file.help":"Drop or select a file to upload","wizard.upload.file.error.failed":"File upload failed","wizard.upload.url.label":"URL to file or service","wizard.upload.url.error.required":"URL is required","wizard.upload.url.error.url":"Please enter a valid URL","wizard.format.title":"Select format","wizard.format.type.service":"Service type","wizard.format.type.file":"File format","wizard.format.type.error.required":"Service or file type is required","wizard.format.type.error.invalid":"Invalid file or service type","wizard.format.type.error.failure":"Failed to load data from file/service","wizard.format.info.cors":"Service needs to be CORS enabled","wizard.format.warn.cors":"Service may not support CORS","wizard.format.warn.vpn":"Service may require a VPN connection","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"zipped Shapefile","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"ESRI Feature Layer","wizard.layerType.esriMapImage":"ESRI Map Image Layer","wizard.layerType.esriImagery":"ESRI Imagery Layer","wizard.layerType.esriTile":"ESRI Tile Layer","wizard.layerType.ogcWms":"OGC Web Map Service","wizard.layerType.ogcWfs":"OGC Web Feature Service","wizard.configure.title":"Configure layer","wizard.configure.name.error.required":"Name is required","wizard.configure.name.label":"Layer Name","wizard.configure.nameField.label":"Primary Field","wizard.configure.tooltipField.label":"Tooltip Field","wizard.configure.latField.label":"Latitude Field","wizard.configure.longField.label":"Longitude Field","wizard.configure.sublayers.error.required":"Sublayers are required","wizard.configure.sublayers.label":"Layers","wizard.configure.sublayers.results":"No results","wizard.configure.sublayers.search":"Search layers","wizard.configure.sublayers.select":"Select layer(s)","wizard.configure.sublayers.clearAll":"Clear all","wizard.configure.sublayers.nested":"Nested","wizard.configure.colour.label":"Colour","wizard.configure.colour.hue":"Hue","wizard.configure.colour.copy":"Copy colour","wizard.configure.colour.hex":"Hex","wizard.step.cancel":"Cancel","wizard.step.continue":"Continue","wizard.upload.success":"has been uploaded successfully.","wizard.upload.fail":"failed to upload."},fr:{"wizard.title":"Importer un fichier","wizard.upload.title":"Charger des données","wizard.upload.or":"ou","wizard.upload.file.label":"Télécharger un fichier","wizard.upload.file.help":"Déposer ou sélectionner un fichier à télécharger","wizard.upload.file.error.failed":"Le téléchargement du fichier a échoué","wizard.upload.url.label":"URL vers fichier ou service","wizard.upload.url.error.required":"L'URL est requise","wizard.upload.url.error.url":"Veuillez saisir une adresse URL valide","wizard.format.title":"Choisir un format","wizard.format.type.service":"Type de service","wizard.format.type.file":"Format du fichier","wizard.format.type.error.required":"Le service ou le type de fichier est requis","wizard.format.type.error.invalid":"Type de fichier ou de service non valide","wizard.format.type.error.failure":"Échec du chargement des données à partir du fichier/service","wizard.format.info.cors":"Le service doit être compatible CORS.","wizard.format.warn.cors":"Le service ne pend peut-être pas en charge CORS.","wizard.format.warn.vpn":"Le service peut nécessiter une connexion RPV","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"Shapefile zippé","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"Couche d'éléments d'ESRI","wizard.layerType.esriMapImage":"Couche d'image de la carte ESRI","wizard.layerType.esriImagery":"Couche d'imagerie d'ESRI","wizard.layerType.esriTile":"Couche de tuiles d'ESRI","wizard.layerType.ogcWms":"Couche WMS de l'OGC","wizard.layerType.ogcWfs":"Service d'entités Web OGC","wizard.configure.title":"Configurer la couche","wizard.configure.name.error.required":"Le champ Nom est obligatoire","wizard.configure.name.label":"Nom de la couche","wizard.configure.nameField.label":"Champ clé","wizard.configure.tooltipField.label":"Champ infobulle","wizard.configure.latField.label":"Champ latitude","wizard.configure.longField.label":"Champ longitude","wizard.configure.sublayers.error.required":"Des sous-couches sont requises","wizard.configure.sublayers.label":"Couches","wizard.configure.sublayers.results":"Aucun résultat","wizard.configure.sublayers.search":"Rechercher des couches","wizard.configure.sublayers.select":"Sélectionner les couches","wizard.configure.sublayers.clearAll":"Effacer tout","wizard.configure.sublayers.nested":"Imbriquées","wizard.configure.colour.label":"Couleur","wizard.configure.colour.hue":"Teinte","wizard.configure.colour.copy":"Copier la couleur","wizard.configure.colour.hex":"Hex","wizard.step.cancel":"Annuler","wizard.step.continue":"Continuer","wizard.upload.success":"a été téléversé avec succès.","wizard.upload.fail":"n'a pas pu être téléversé."}};class b extends h{added(){this.$iApi.panel.register({wizard:{screens:{"wizard-screen":()=>p(f(()=>import("./screen-NGXXpKUs-DNKgHQ1j.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url))},button:{tooltip:"wizard.title",icon:'<svg class="fill-current" viewBox="0 0 23 21"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>'},style:{width:"350px"},alertName:"wizard.title"}},{i18n:{messages:E}}),this.handlePanelTeleports(["wizard"]);let e=new z(this.$iApi);const r=y(this.$vApp.$pinia);r.layerSource=e,this.removed=()=>{this.$iApi.panel.remove("wizard"),e=void 0,r.$reset()}}}export{b as default};
