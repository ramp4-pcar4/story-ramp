import{dk as O,dl as m,dm as K,B as R0,ae as u0,bj as l0,dn as C0,aC as f0,p as _0,db as A0,dc as P0,dd as S0,dp as O0,dq as s0,dr as M0,ds as N0,dt as i0,du as r0,dv as c0}from"./story-DfT1JADo.js";import"./main-DG75X1yT.js";const x0=Math.PI/180,v0=/(?:SPHEROID|ELLIPSOID)\[([^\]]+)]/i,N=O.radius,S=O.eccentricitySquared,L0={a1:N*S,a2:N*S*N*S,a3:N*S*S/2,a4:N*S*N*S*2.5,a5:N*S+N*S*S/2,a6:1-S},D0={4267:{a:63782064e-1,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:O.radius,f:O.flattening},4490:{a:6378137,f:1/298.257222101},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:m.radius,f:m.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:K.radius,f:K.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:K.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};var a;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",e[e.WGS84=2]="WGS84",e[e.WEB_MERCATOR=3]="WEB_MERCATOR",e[e.WGS84_ECEF=4]="WGS84_ECEF",e[e.CGCS2000=5]="CGCS2000",e[e.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",e[e.GCSMARS2000=7]="GCSMARS2000",e[e.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",e[e.GCSMOON2000=9]="GCSMOON2000",e[e.LON_LAT=10]="LON_LAT",e[e.PLATE_CARREE=11]="PLATE_CARREE"})(a||(a={}));const o0={[a.WGS84]:{[a.CGCS2000]:l,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:I,[a.PLATE_CARREE]:W,[a.WGS84]:l,[a.WGS84_ECEF]:H},[a.CGCS2000]:{[a.CGCS2000]:l,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:I,[a.PLATE_CARREE]:W,[a.WGS84]:l,[a.WGS84_ECEF]:H},[a.GCSMARS2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:l,[a.GCSMOON2000]:null,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:Z,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.GCSMOON2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:l,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:Y,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.WEB_MERCATOR]:{[a.CGCS2000]:B,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:B,[a.SPHERICAL_ECEF]:I0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:l,[a.PLATE_CARREE]:d0,[a.WGS84]:B,[a.WGS84_ECEF]:W0},[a.WGS84_ECEF]:{[a.CGCS2000]:T,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:T,[a.SPHERICAL_ECEF]:q0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:m0,[a.PLATE_CARREE]:H0,[a.WGS84]:T,[a.WGS84_ECEF]:l},[a.SPHERICAL_ECEF]:{[a.CGCS2000]:d,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:d,[a.SPHERICAL_ECEF]:l,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:K0,[a.PLATE_CARREE]:T0,[a.WGS84]:d,[a.WGS84_ECEF]:B0},[a.SPHERICAL_MARS_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:a0,[a.GCSMOON2000]:null,[a.LON_LAT]:a0,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:l,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.SPHERICAL_MOON_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:$,[a.LON_LAT]:$,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:l,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.UNKNOWN]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:null,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:l,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.LON_LAT]:{[a.CGCS2000]:l,[a.GCSMARS2000]:l,[a.GCSMOON2000]:l,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:Z,[a.SPHERICAL_MOON_PCPF]:Y,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:I,[a.PLATE_CARREE]:W,[a.WGS84]:l,[a.WGS84_ECEF]:H},[a.PLATE_CARREE]:{[a.CGCS2000]:F,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:F,[a.SPHERICAL_ECEF]:p0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:h0,[a.PLATE_CARREE]:l,[a.WGS84]:F,[a.WGS84_ECEF]:U0}};function G0(e,t,n=E0()){return e==null||t==null?null:k0(e,t,n).projector}function X(e,t){return e?t.spatialReference===e?t.spatialReferenceId:(t.spatialReference=e,"metersPerUnit"in t&&(t.metersPerUnit=_0(e,1)),A0(e)?t.spatialReferenceId=a.SPHERICAL_ECEF:P0(e)?t.spatialReferenceId=a.WGS84:S0(e)?t.spatialReferenceId=a.WEB_MERCATOR:O0(e)?t.spatialReferenceId=a.PLATE_CARREE:e.wkt===s0.wkt?t.spatialReferenceId=a.WGS84_ECEF:e.wkid===M0.CGCS2000?t.spatialReferenceId=a.CGCS2000:e.wkt===N0.wkt?t.spatialReferenceId=a.SPHERICAL_MARS_PCPF:e.wkt===i0.wkt?t.spatialReferenceId=a.SPHERICAL_MOON_PCPF:r0(e)?t.spatialReferenceId=a.GCSMARS2000:c0(e)?t.spatialReferenceId=a.GCSMOON2000:t.spatialReferenceId=a.UNKNOWN):a.UNKNOWN}function l(e,t,n,E){e!==n&&(n[E++]=e[t++],n[E++]=e[t++],n[E]=e[t])}function B(e,t,n,E){n[E]=h*(e[t]/c),n[E+1]=h*(t0-2*Math.atan(Math.exp(-e[t+1]/c))),n[E+2]=e[t+2]}function I0(e,t,n,E){const u=e[t]/c,C=t0-2*Math.atan(Math.exp(-e[t+1]/c)),f=c+e[t+2],R=Math.cos(C)*f;n[E]=Math.cos(u)*R,n[E+1]=Math.sin(u)*R,n[E+2]=Math.sin(C)*f}function W0(e,t,n,E){B(e,t,n,E),H(n,E,n,E)}function F0(e,t,n,E,u){const C=.4999999*k,f=u0(p*e[t+1],-C,C),R=Math.sin(f);n[E++]=p*e[t]*u.radius,n[E++]=u.halfSemiMajorAxis*Math.log((1+R)/(1-R)),n[E]=e[t+2]}function I(e,t,n,E){F0(e,t,n,E,O)}function W(e,t,n,E){n[E]=e[t]*e0,n[E+1]=e[t+1]*e0,n[E+2]=e[t+2]}function F(e,t,n,E){n[E]=e[t]*n0,n[E+1]=e[t+1]*n0,n[E+2]=e[t+2]}function d0(e,t,n,E){B(e,t,n,E),W(n,E,n,E)}function H0(e,t,n,E){T(e,t,n,E),W(n,E,n,E)}function T0(e,t,n,E){d(e,t,n,E),W(n,E,n,E)}function p0(e,t,n,E){F(e,t,n,E),j(n,E,n,E)}function h0(e,t,n,E){F(e,t,n,E),I(n,E,n,E)}function U0(e,t,n,E){F(e,t,n,E),H(n,E,n,E)}function z(e,t,n,E,u){const C=u+e[t+2],f=p*e[t+1],R=p*e[t],_=Math.cos(f)*C;n[E]=Math.cos(R)*_,n[E+1]=Math.sin(R)*_,n[E+2]=Math.sin(f)*C}function Y(e,t,n,E){z(e,t,n,E,m.radius)}function Z(e,t,n,E){z(e,t,n,E,K.radius)}function j(e,t,n,E){z(e,t,n,E,O.radius)}function V(e,t,n,E,u){const C=e[t],f=e[t+1],R=e[t+2],_=Math.sqrt(C*C+f*f+R*R),P=C0(R/(_===0?1:_)),A=Math.atan2(f,C);n[E++]=h*A,n[E++]=h*P,n[E]=_-u}function $(e,t,n,E){V(e,t,n,E,m.radius)}function a0(e,t,n,E){V(e,t,n,E,K.radius)}function d(e,t,n,E){V(e,t,n,E,O.radius)}function K0(e,t,n,E){d(e,t,n,E),I(n,E,n,E)}function B0(e,t,n,E){d(e,t,n,E),H(n,E,n,E)}function j0(e,t,n,E,u){const C=p*e[t],f=p*e[t+1],R=e[t+2],_=Math.sin(f),P=Math.cos(f),A=u.radius/Math.sqrt(1-u.eccentricitySquared*_*_);n[E++]=(A+R)*P*Math.cos(C),n[E++]=(A+R)*P*Math.sin(C),n[E++]=(A*(1-u.eccentricitySquared)+R)*_}function H(e,t,n,E){j0(e,t,n,E,O)}function T(e,t,n,E){const u=L0,C=e[t],f=e[t+1],R=e[t+2];let _,P,A,i,r,w,q,s,M,U,y,b,g,L,o,x,v,D,G,J,Q;_=Math.abs(R),P=C*C+f*f,A=Math.sqrt(P),i=P+R*R,r=Math.sqrt(i),J=Math.atan2(f,C),w=R*R/i,q=P/i,L=u.a2/r,o=u.a3-u.a4/r,q>.3?(s=_/r*(1+q*(u.a1+L+w*o)/r),G=Math.asin(s),U=s*s,M=Math.sqrt(1-U)):(M=A/r*(1-w*(u.a5-L-q*o)/r),G=Math.acos(M),U=1-M*M,s=Math.sqrt(U)),y=1-O.eccentricitySquared*U,b=O.radius/Math.sqrt(y),g=u.a6*b,L=A-b*M,o=_-g*s,v=M*L+s*o,x=M*o-s*L,D=x/(g/y+v),G+=D,Q=v+x*D/2,R<0&&(G=-G),n[E++]=h*J,n[E++]=h*G,n[E]=Q}function q0(e,t,n,E){T(e,t,n,E),j(n,E,n,E)}function m0(e,t,n,E){T(e,t,n,E),I(n,E,n,E)}function k0(e,t,n){if(e==null||t==null||n.source.spatialReference===e&&n.dest.spatialReference===t)return n;const E=X(e,n.source),u=X(t,n.dest);return E===a.UNKNOWN&&u===a.UNKNOWN?f0(e,t)?n.projector=l:n.projector=null:n.projector=o0[E][u],n}function E0(){return{source:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},projector:l}}const z0={spatialReference:null,spatialReferenceId:a.UNKNOWN},V0={spatialReference:null,spatialReferenceId:a.UNKNOWN},w0=E0(),p=l0(1),h=R0(1),k=Math.PI,t0=.5*k,c=O.radius,e0=c*k/180,n0=180/(c*k);function y0(e,t,n,E,u,C,f=Math.floor(e.length/3)){const R=G0(t,u,w0);if(R==null)return!1;if(R===l){if(e===E&&n===C)return!0;const P=n+3*f;for(let A=n,i=C;A<P;A++,i++)E[i]=e[A];return!0}const _=n+3*f;for(let P=n,A=C;P<_;P+=3,A+=3)R(e,P,E,A);return!0}const J0=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:y0},Symbol.toStringTag,{value:"Module"}));export{w0 as E,X as F,G0 as G,o0 as L,a as N,D0 as d,V0 as e,x0 as i,z0 as l,y0 as n,J0 as p,v0 as t};
