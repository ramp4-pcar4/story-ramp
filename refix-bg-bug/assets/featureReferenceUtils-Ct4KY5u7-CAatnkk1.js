import"./vec32-D9GsKZ1t-CYA6m0Cy.js";import"./story-DleBxxVb.js";import{d as n}from"./sphere-BenPORjV-DjjnO_2V.js";import"./IntersectorInterfaces-CrXe7z5S-tY6PKd-m.js";import"./mat4-DX7gBViE-DVUBdKhi.js";import"./boundedPlane-DlvE0eNx-CHKhFSyS.js";function y(t,l){return e(t)===e(l)}function e(t){if(t==null)return null;const l=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${l}-${r}`}const j={json:{write:{writer:u,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:i}}}};function u(t,l){t?.layer?.objectIdField!=null&&t.attributes!=null&&(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function i(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}n();export{y as n,j as u};
