import{dh as a,aC as c}from"./story-OUarUCIt.js";function i(n,f,o){if(n.hasM==null||n.hasZ)for(const e of f)for(const t of e)t.length>2&&(t[2]*=o)}function p(n,f,o){if(!n&&!f||!o)return;const e=a(o);r(n,o,e),r(f,o,e)}function r(n,f,o){if(n)for(const e of n)l(e.geometry,f,o)}function l(n,f,o){if(!n?.spatialReference||c(n.spatialReference,f))return;const e=a(n.spatialReference)/o;if(e!==1){if("x"in n)n.z!=null&&(n.z*=e);else if("rings"in n)i(n,n.rings,e);else if("paths"in n)i(n,n.paths,e);else if("points"in n&&(n.hasM==null||n.hasZ))for(const t of n.points)t.length>2&&(t[2]*=e)}}export{p as c};
