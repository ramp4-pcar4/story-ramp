function t(f,i){if(f&&i){for(const o of f.children)if(o.localName in i){const n=i[o.localName];if(typeof n=="function"){const l=n(o);l&&t(o,l)}else t(o,n)}}}function*c(f,i){for(const o of f.children)if(o.localName in i){const n=i[o.localName];typeof n=="function"?yield n(o):yield*c(o,n)}}export{t as l,c as t};
