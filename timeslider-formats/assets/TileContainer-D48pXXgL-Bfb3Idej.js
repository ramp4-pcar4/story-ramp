import{K as i}from"./story-BRwEvu2S.js";import{E as n}from"./MapView-BGOJJ8ch-DNiN8Rxs.js";import{N as l,Z as a,r as o}from"./WGLContainer-LxgEo4I_-5GumPcjY.js";const c=(t,e)=>t.key.level-e.key.level!=0?t.key.level-e.key.level:t.key.row-e.key.row!=0?t.key.row-e.key.row:t.key.col-e.key.col;class p extends l{constructor(e){super(),this.tileInfoView=e,this.sortFunction=c}renderChildren(e){this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this.tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this.tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(e){const r=super.prepareRenderPasses(e);return r.push(e.registerRenderPass({name:"stencil",brushes:[a],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT|n.LABEL,target:()=>this.getStencilTarget()})),i("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[o],drawPhase:n.DEBUG,target:()=>this.children})),r}getStencilTarget(){return this.children}setStencilReference(e){let r=1;for(const s of this.children)s.stencilRef=r++}}export{p as h};
