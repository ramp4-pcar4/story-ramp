import{A as o}from"./themeUtils-YjM7iIiX-D_8MMBUS.js";import{F as r}from"./dom-N58V0tYi-DBU3jlah.js";const t=o;function e(n){return"opened"in n?n.opened:n.open}function s(n){t(()=>{n.transitionEl&&r(n.transitionEl,n.openTransitionProp,()=>{e(n)?n.onBeforeOpen():n.onBeforeClose()},()=>{e(n)?n.onOpen():n.onClose()})})}export{s as p};
