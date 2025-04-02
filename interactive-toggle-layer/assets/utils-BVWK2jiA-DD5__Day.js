import{o as c,r as x}from"./story-OWO1toEx.js";import{n as u}from"./originUtils-BLsWtgV9-B4sclfuf.js";import h from"./PortalItem-CctGdnxF-CvISlx3T.js";import{i as N}from"./jsonContext-BA8GHqVk-Bx6r_09E.js";import{u as P,E}from"./portalItemUtils-B8bw6SAG-B-ms-sTV.js";import{d as S}from"./saveUtils-CIYk-dsQ-pB7q7pxG.js";function b(e,r,a){const t=a(e);if(!t.isValid)throw new c(`${r}:invalid-parameters`,t.errorMessage,{layer:e})}async function y(e){const{layer:r,errorNamePrefix:a,validateLayer:t}=e;await r.load(),b(r,a,t)}function d(e,r){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${r}`}function w(e){const{item:r,errorNamePrefix:a,layer:t,validateItem:i}=e;if(g(e),i){const n=i(r);if(!n.isValid)throw new c(`${a}:invalid-parameters`,n.errorMessage,{layer:t})}}function g(e){const{item:r,itemType:a,additionalItemType:t,errorNamePrefix:i,layer:n}=e,s=[a];if(t&&s.push(t),!s.includes(r.type)){const p=s.map(o=>`'${o}'`).join(", ");throw new c(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${p}"`,{item:r,layer:n})}}function O(e){const{layer:r,errorNamePrefix:a}=e,{portalItem:t}=r;if(!t)throw new c(`${a}:portal-item-not-set`,d(r,"requires the portalItem property to be set"));if(!t.loaded)throw new c(`${a}:portal-item-not-loaded`,d(r,"cannot be saved to a portal item that does not exist or is inaccessible"));w({...e,item:t})}function J(e){const{newItem:r,itemType:a}=e;let t=h.from(r);return t.id&&(t=t.clone(),t.id=null),t.type??=a,t.portal??=x.getDefault(),w({...e,item:t}),t}function $(e){return N(e,"portal-item")}async function I(e,r,a){"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const t=e.write({},r);return await Promise.all(r.resources?.pendingOperations??[]),S(r,{errorName:"layer-write:unsupported"},a),t}function v(e){P(e,E.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((r,a,t)=>t.indexOf(r)===a))}async function U(e,r,a){const t=e.portal;await t.signIn(),await t.user.addItem({item:e,data:r,folder:a?.folder})}async function R(e,r){const{layer:a,createItemData:t,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await y(e),O(e);const o=a.portalItem,l=i?i(o):$(o),f=await I(a,l,{...r,supplementalUnsupportedErrors:p}),m=await t({layer:a,layerJSON:f},o);return await n?.(a,o,m),v(o),await o.update({data:m}),u(l),await s?.(o,l),o}async function V(e,r){const{layer:a,createItemData:t,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await y(e);const o=J(e),l=i?i(o):$(o),f=await I(a,l,{...r,supplementalUnsupportedErrors:p}),m=await t({layer:a,layerJSON:f},o);return await n(a,o,m),v(o),await U(o,m,r),a.portalItem=o,u(l),await s?.(o,l),o}export{R as C,V as D};
