import{C as m,D as c}from"./utils-2iHN6TbU-CMvBQfIK.js";import{jU as u,jV as p,jW as i,jX as y}from"./story-u82SUoyt.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./jsonContext-v1mRP0aL-DeWYaqST.js";import"./saveUtils-BQy3eBhU-m903VM8p.js";import"./main-CmCzAIzx.js";const s="Stream Service",d="Feed",f="stream-layer-save",v="stream-layer-save-as";function n(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:t,title:o,fullExtent:a}=r;e.url=t.path,e.title||=o,e.extent=null,a!=null&&(e.extent=await u(a)),p(e,i.METADATA),y(e,i.SINGLE_LAYER)}async function D(r,e){return m({layer:r,itemType:s,additionalItemType:d,validateLayer:n,createItemData:l,errorNamePrefix:f},e)}async function E(r,e,t){return c({layer:r,itemType:s,validateLayer:n,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},t)}export{D as save,E as saveAs};
