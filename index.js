// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__,c=r,f=function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},_=t()?c:f,p=function(e,t,r){_(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(e){return e!=e},b=Number.NEGATIVE_INFINITY;function y(e,t){return d(e)||d(t)?NaN:e===t?0:b}var s=function(e){return function(){return e}};return p(y,"factory",(function(e){return d(e)?s(NaN):function(t){return d(t)?NaN:t===e?0:b}})),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).logpmf=t();
//# sourceMappingURL=index.js.map
