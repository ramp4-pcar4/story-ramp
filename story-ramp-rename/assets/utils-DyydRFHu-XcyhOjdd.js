import{cg as c,gM as d,gN as Z,gO as y,gP as i,c4 as r,gQ as h,gR as u,cl as g,gS as l}from"./story-BALhSCU7.js";import"./Basemap-BEqqSTw9-Bv7WYyYA.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE--EG61PpO.js";function T(e){return c(e)||d(e)||Z(e)}function D(e,p){const{format:t,timeZoneOptions:n,fieldType:a}=p??{};let s,m;if(n&&({timeZone:s,timeZoneName:m}=y(n.layerTimeZone,n.datesInUnknownTimezone,n.viewTimeZone,i(t||"short-date-short-time"),a)),typeof e=="string"&&isNaN(Date.parse(a==="time-only"?`1970-01-01T${e}Z`:e)))return e;switch(a){case"date-only":{const o=i(t||"short-date");return typeof e=="string"?l(e,{...o}):r(e,{...o,timeZone:g})}case"time-only":{const o=i(t||"short-time");return typeof e=="string"?u(e,o):r(e,{...o,timeZone:g})}case"timestamp-offset":{if(!s&&typeof e=="string"&&new Date(e).toISOString()!==e)return e;const o=t||n?i(t||"short-date-short-time"):void 0,f=o?{...o,timeZone:s,timeZoneName:m}:void 0;return typeof e=="string"?h(e,f):r(e,f)}default:{const o=t||n?i(t||"short-date-short-time"):void 0;return r(typeof e=="string"?new Date(e):e,o?{...o,timeZone:s,timeZoneName:m}:void 0)}}}export{D as N,T as b};
