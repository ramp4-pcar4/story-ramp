import"./story-DYUJZqY7.js";import{k as f,c as r}from"./TimeExtent-Cn0Jofqr-BMzfBI72.js";import"./MapView-BGOJJ8ch-a1iYhESM.js";function l(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?r(e,-e.getTimezoneOffset(),"minutes"):e,end:t!=null?r(t,-t.getTimezoneOffset(),"minutes"):t})}function a(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?r(e,e.getTimezoneOffset(),"minutes"):e,end:t!=null?r(t,t.getTimezoneOffset(),"minutes"):t})}function p(n,e,t){if(n?.timeInfo==null)return null;const{datesInUnknownTimezone:o=!1,timeOffset:u,useViewTime:m}=n;let s=n.timeExtent;o&&(s=a(s));let i=m?e&&s?e.intersection(s):e||s:s;return!i||i.isEmpty||i.isAllTime?i:(u&&(i=i.offset(-u.value,u.unit)),o&&(i=l(i)),i.equals(t)?t:i)}export{p as T};
