import{i8 as v,dg as m,ae as a}from"./story-_2qqwocf.js";import{X as y}from"./sphere-BenPORjV-CPGu1Psq.js";import{r as u,y as c,L as s,v as d,j as A,A as q}from"./vec32-D9GsKZ1t-BJTEeoJ0.js";import{f as g}from"./plane-Dt8R0KeE-CguSZGOV.js";function p(o){return o?{origin:v(o.origin),vector:v(o.vector)}:{origin:m(),vector:m()}}function b(o,r,t=p()){return q(t.origin,o),u(t.vector,r,o),t}function h(o,r){const t=u(g.get(),r,o.origin),f=c(o.vector,t),i=c(o.vector,o.vector),n=a(f/i,0,1),e=u(g.get(),s(g.get(),o.vector,n),t);return c(e,e)}function k(o,r,t){return w(o,r,0,1,t)}function w(o,r,t,f,i){const{vector:n,origin:e}=o,j=u(g.get(),r,e),x=c(n,j)/d(n);return s(i,n,a(x,t,f)),A(i,i,o.origin)}new y(()=>p());export{w as j,b as q,p as u,h as x,k as y};
