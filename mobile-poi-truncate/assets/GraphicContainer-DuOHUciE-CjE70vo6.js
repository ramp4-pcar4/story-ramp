import{E as s,R as i,h as t}from"./MapView-BGOJJ8ch-CpCIgtiS.js";import{K as h}from"./AGraphicContainer-LUCT6Gle-BrnvOj_T.js";let l=class extends h{renderChildren(e){for(const r of this.children)r.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some(r=>r.hasData)){switch(e.drawPhase){case s.MAP:this._renderChildren(e,i.All);break;case s.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){t(e,!1,r=>{this._renderChildren(r,i.Highlight)})}};export{l as d};
