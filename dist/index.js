"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(o,i){
var s=require('@stdlib/math-base-special-abs/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/math-base-special-expm1/dist'),a=require('@stdlib/math-base-special-sqrt/dist');function p(r){return n(r)||r<=0?NaN:a(q(-r))/s(v(-r))}i.exports=p
});var x=t();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
