"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=s(function(f,i){
var n=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist'),a=require('@stdlib/math-base-special-expm1/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(r){return q(r)||r<=0?NaN:p(v(-r))/n(a(-r))}i.exports=x
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
