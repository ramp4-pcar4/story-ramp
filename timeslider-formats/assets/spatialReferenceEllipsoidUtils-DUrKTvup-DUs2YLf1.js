import{J as o,hi as d,ds as k,dt as u,dq as C,hj as l,hk as p}from"./story-CF27ueXF.js";const h=new o(d),n=new o(k),e=new o(u),U=new o(C);function g(t){const r=c.get(t);if(r)return r;let s=h;if(t)if(t===n)s=n;else if(t===e)s=e;else{const a=t.wkid,i=t.latestWkid;if(a!=null||i!=null)l(a)||l(i)?s=n:(p(a)||p(i))&&(s=e);else{const w=t.wkt2??t.wkt;if(w){const f=w.toUpperCase();f===m?s=n:f===x&&(s=e)}}}return c.set(t,s),s}const c=new Map,m=n.wkt.toUpperCase(),x=e.wkt.toUpperCase();export{U as m,g as x};
