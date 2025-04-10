import{bh as H,aG as X,co as G,dd as N,c9 as W,cc as $,eQ as j,ca as z,cb as b,g_ as J,j0 as K}from"./story-C_BD4NO7.js";import{f as T,u as Q,p}from"./normalizeUtilsCommon-CRJlkfEA-DsS1g5B8.js";function D(t){return k(t,!0)}function E(t){return k(t,!1)}function k(t,s){if(t==null)return null;const i=t.spatialReference,n=X(i),e=G(t)?t.toJSON():t;if(!n)return e;const h=N(i)?102100:4326,u=T[h].maxX,x=T[h].minX;if(W(e))return S(e,u,x);if($(e))return e.points=e.points.map(o=>S(o,u,x)),e;if(j(e))return R(e,n);if(z(e)||b(e)){const o=J(Y,e),_={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},r=p(_.xmin,x)*(2*u),m=r===0?e:Q(e,r);return _.xmin+=r,_.xmax+=r,_.xmax>u?L(m,u,s):_.xmin<x?L(m,x,s):m}return e}function R(t,s){if(!s)return t;const i=V(t,s).map(n=>n.extent);return i.length<2?i[0]||t:i.length>2?(t.xmin=s.valid[0],t.xmax=s.valid[1],t):{rings:i.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function S(t,s,i){if(Array.isArray(t)){const n=t[0];if(n>s){const e=p(n,s);t[0]=n+e*(-2*s)}else if(n<i){const e=p(n,i);t[0]=n+e*(-2*i)}}else{const n=t.x;if(n>s){const e=p(n,s);t.x+=e*(-2*s)}else if(n<i){const e=p(n,i);t.x+=e*(-2*i)}}return t}function V(t,s){const i=[],{ymin:n,ymax:e,xmin:h,xmax:u}=t,x=t.xmax-t.xmin,[o,_]=s.valid,{x:r,frameId:m}=w(t.xmin,s),{x:c,frameId:a}=w(t.xmax,s),A=r===c&&x>0;if(x>2*_){const v={xmin:h<u?r:c,ymin:n,xmax:_,ymax:e},O={xmin:o,ymin:n,xmax:h<u?c:r,ymax:e},C={xmin:0,ymin:n,xmax:_,ymax:e},P={xmin:o,ymin:n,xmax:0,ymax:e},f=[],y=[];I(v,C)&&f.push(m),I(v,P)&&y.push(m),I(O,C)&&f.push(a),I(O,P)&&y.push(a);for(let d=m+1;d<a;d++)f.push(d),y.push(d);i.push(new l(v,[m]),new l(O,[a]),new l(C,f),new l(P,y))}else r>c||A?i.push(new l({xmin:r,ymin:n,xmax:_,ymax:e},[m]),new l({xmin:o,ymin:n,xmax:c,ymax:e},[a])):i.push(new l({xmin:r,ymin:n,xmax:c,ymax:e},[m]));return i}function w(t,s){const[i,n]=s.valid,e=2*n;let h,u=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,u=h):t<i&&(h=Math.ceil(Math.abs(t-i)/e),t+=h*e,u=-h),{x:t,frameId:u}}function I(t,s){const{xmin:i,ymin:n,xmax:e,ymax:h}=s;return g(t,i,n)&&g(t,i,h)&&g(t,e,h)&&g(t,e,n)}function g(t,s,i){return s>=t.xmin&&s<=t.xmax&&i>=t.ymin&&i<=t.ymax}function L(t,s,i=!0){const n=!b(t);if(n&&K(t),i)return new Z().cut(t,s);const e=n?t.rings:t.paths,h=n?4:2,u=e.length,x=-2*s;for(let o=0;o<u;o++){const _=e[o];if(_&&_.length>=h){const r=[];for(const m of _)r.push([m[0]+x,m[1]]);e.push(r)}}return n?t.rings=e:t.paths=e,t}class l{constructor(s,i){this.extent=s,this.frameIds=i}}const Y=H();class Z{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,i){let n;if(this._xCut=i,s.rings)this._closed=!0,n=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,n=s.paths,this._minPts=2}for(const h of n){if(!h||h.length<this._minPts)continue;let u=!0;for(const x of h)u?(this.moveTo(x),u=!1):this.lineTo(x);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&n.push(h);const e=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=e;n.push(h)}return this._closed?s.rings=n:s.paths=n,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const i=this._side(s[0]);if(i*this._prevSide==-1){const n=this._intersect(this._prevPt,s);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(s[0],s[1],i)}else this._lineTo(s[0],s[1],i);this._prevSide=i,this._prevPt=s}close(){const s=this._firstPt,i=this._prevPt;s[0]===i[0]&&s[1]===i[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,i,n){this._closed?(this._lineIn.push([n<=0?s:this._xCut,i]),this._lineOut.push([n>=0?s:this._xCut,i])):(n<=0&&this._lineIn.push([s,i]),n>=0&&this._lineOut.push([s,i]))}_lineTo(s,i,n){this._closed?(M(this._lineIn,n<=0?s:this._xCut,i),M(this._lineOut,n>=0?s:this._xCut,i)):n<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,i])):n>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,i])):this._prevSide<0?(this._lineIn.push([s,i]),this._lineOut.push([s,i])):this._prevSide>0&&(this._lineOut.push([s,i]),this._lineIn.push([s,i]))}_checkClosingPt(s){const i=s.length;i>3&&s[0][0]===this._xCut&&s[i-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[i-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,i){const n=(this._xCut-s[0])/(i[0]-s[0]);return s[1]+n*(i[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function M(t,s,i){const n=t.length;n>1&&t[n-1][0]===s&&t[n-2][0]===s?t[n-1][1]=i:t.push([s,i])}export{D as G,E as H};
