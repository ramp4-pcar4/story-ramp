import{aC as O,bj as S,dg as R}from"./story-BAzleJnS.js";import{J as G,Z as M,G as P}from"./mat4-DX7gBViE-C0rtR5P7.js";import{F as e,l as s,e as T,N as r,L as i}from"./projectBuffer-CvCBvJ6W-BF-3Muvh.js";function N(o,E,t){const A=Math.sin(o),L=Math.cos(o),a=Math.sin(E),c=Math.cos(E),n=t;return n[0]=-A,n[4]=-a*L,n[8]=c*L,n[12]=0,n[1]=L,n[5]=-a*A,n[9]=c*A,n[13]=0,n[2]=0,n[6]=c,n[10]=a,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function W(o,E,t){return N(o,E,t),P(t,t),t}function p(o,E,t,A){if(o==null||A==null)return!1;const L=e(o,s),a=e(A,T);if(L===a&&!C(a)&&(L!==r.UNKNOWN||O(o,A)))return G(t,E),!0;if(C(a)){const n=i[L][r.LON_LAT],f=i[r.LON_LAT][a];return n!=null&&f!=null&&(n(E,0,_,0),f(_,0,l,0),N(u*_[0],u*_[1],t),t[12]=l[0],t[13]=l[1],t[14]=l[2],!0)}const c=C(L);if((a===r.WEB_MERCATOR||a===r.PLATE_CARREE||a===r.WGS84||a===r.CGCS2000)&&(L===r.WGS84||c||L===r.WEB_MERCATOR||L===r.CGCS2000)){const n=i[L][r.LON_LAT],f=i[r.LON_LAT][a];return n!=null&&f!=null&&(n(E,0,_,0),f(_,0,l,0),c?W(u*_[0],u*_[1],t):M(t),t[12]=l[0],t[13]=l[1],t[14]=l[2],!0)}return!1}function C(o){return o===r.SPHERICAL_ECEF||o===r.SPHERICAL_MARS_PCPF||o===r.SPHERICAL_MOON_PCPF||o===r.WGS84_ECEF}const u=S(1),_=R(),l=R();export{p as G};
