"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(I,a){
var i=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/constants-float64-ninf/dist');function q(e,r){return i(e)||i(r)?NaN:e===r?0:N}a.exports=q
});var c=n(function(d,s){
var v=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/constants-float64-ninf/dist');function y(e){if(o(e))return v(NaN);return r;function r(t){return o(t)?NaN:t===e?0:p}}s.exports=y
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=u(),F=c();l(f,"factory",F);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
