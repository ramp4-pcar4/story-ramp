import{v as e,S as t,i,bz as l,e as p}from"./story-DleBxxVb.js";let y=class extends p{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};e([t({type:Number})],y.prototype,"nodesPerPage",void 0),e([t({type:Number})],y.prototype,"rootIndex",void 0),e([t({type:String})],y.prototype,"lodSelectionMetricType",void 0),y=e([i("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],y);let n=class extends p{constructor(){super(...arguments),this.factor=1}};e([t({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],n.prototype,"id",void 0),e([t({type:Number})],n.prototype,"factor",void 0),n=e([i("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],n);let a=class extends p{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};e([t({type:[Number]})],a.prototype,"baseColorFactor",void 0),e([t({type:n})],a.prototype,"baseColorTexture",void 0),e([t({type:n})],a.prototype,"metallicRoughnessTexture",void 0),e([t({type:Number})],a.prototype,"metallicFactor",void 0),e([t({type:Number})],a.prototype,"roughnessFactor",void 0),a=e([i("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],a);let o=class extends p{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};e([l({opaque:"opaque",mask:"mask",blend:"blend"})],o.prototype,"alphaMode",void 0),e([t({type:Number})],o.prototype,"alphaCutoff",void 0),e([t({type:Boolean})],o.prototype,"doubleSided",void 0),e([l({none:"none",back:"back",front:"front"})],o.prototype,"cullFace",void 0),e([t({type:n})],o.prototype,"normalTexture",void 0),e([t({type:n})],o.prototype,"occlusionTexture",void 0),e([t({type:n})],o.prototype,"emissiveTexture",void 0),e([t({type:[Number]})],o.prototype,"emissiveFactor",void 0),e([t({type:a})],o.prototype,"pbrMetallicRoughness",void 0),o=e([i("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],o);let u=class extends p{};e([t({type:String,json:{read:{source:["name","index"],reader:(v,f)=>v??`${f.index}`}}})],u.prototype,"name",void 0),e([l({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],u.prototype,"format",void 0),u=e([i("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],u);let c=class extends p{constructor(){super(...arguments),this.atlas=!1}};e([t({type:[u]})],c.prototype,"formats",void 0),e([t({type:Boolean})],c.prototype,"atlas",void 0),c=e([i("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],c);let s=class extends p{};e([l({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],s.prototype,"type",void 0),e([t({type:Number})],s.prototype,"component",void 0),s=e([i("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],s);let d=class extends p{};e([l({draco:"draco"})],d.prototype,"encoding",void 0),e([t({type:[String]})],d.prototype,"attributes",void 0),d=e([i("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],d);let r=class extends p{constructor(){super(...arguments),this.offset=0}};e([t({type:Number})],r.prototype,"offset",void 0),e([t({type:s})],r.prototype,"position",void 0),e([t({type:s})],r.prototype,"normal",void 0),e([t({type:s})],r.prototype,"uv0",void 0),e([t({type:s})],r.prototype,"color",void 0),e([t({type:s})],r.prototype,"uvRegion",void 0),e([t({type:s})],r.prototype,"featureId",void 0),e([t({type:s})],r.prototype,"faceRange",void 0),e([t({type:d})],r.prototype,"compressedAttributes",void 0),r=e([i("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],r);let m=class extends p{};e([l({triangle:"triangle"})],m.prototype,"topology",void 0),e([t()],m.prototype,"geometryBuffers",void 0),m=e([i("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],m);export{c as d,m,o,y};
