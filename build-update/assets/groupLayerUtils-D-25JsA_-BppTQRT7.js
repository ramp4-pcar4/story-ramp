import{C as l,D as y}from"./utils-BVWK2jiA-DflJkmZS.js";import{i as f}from"./jsonContext-BA8GHqVk-BLvxqmVa.js";import{o as v,l as d,u as g,E as s}from"./portalItemUtils-B8bw6SAG-D4M_JjPO.js";import{T as i}from"./resourceUtils-BmW6QqlX-BysQgMGH.js";import"./story-_2qqwocf.js";import"./main-C0sSK5MQ.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./PortalItem-CctGdnxF-BsZcaSxd.js";import"./saveUtils-CIYk-dsQ-U2IPfQS0.js";import"./projection-BA9M1R7d-BNPaubfz.js";import"./projectBuffer-CvCBvJ6W-CjFsH9Cb.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./resourceUtils-rTM6Iemx-CObNYXLF.js";const n="Group Layer",A="group-layer-save",I="group-layer-save-as",a=s.GROUP_LAYER_MAP;function m(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function P(e){return{isValid:v(e,a),errorMessage:`Layer.portalItem.typeKeywords should have '${a}'`}}function u(e,r){return{...f(e,"web-map",!0),initiator:r}}function c(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||=e.title,d(r,s.METADATA),g(r,a)}async function S(e,r){return l({layer:e,itemType:n,validateLayer:m,validateItem:P,createJSONContext:t=>u(t,e),createItemData:c,errorNamePrefix:A,saveResources:async(t,o)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,o))},r)}async function G(e,r,t){return y({layer:e,itemType:n,validateLayer:m,createJSONContext:o=>u(o,e),createItemData:c,errorNamePrefix:I,newItem:r,setItemProperties:R,saveResources:(o,p)=>i(e.resourceReferences,p)},t)}export{S as save,G as saveAs};