import{a6 as t,a7 as n,_ as a,a as e,b as s,c as r,i,s as c,d as o,S as u,g as f,f as l,x as h,H as p,a8 as m,l as d,k as v,h as y,j as $,y as x,I as g,n as P,o as j,J as S,p as b,t as k,q as R,K as w,a9 as q}from"./client.9862b61a.js";import{S as D}from"./index.81775f5f.js";function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,r=e(t);if(n){var i=e(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return s(this,a)}}function H(t){var n,a,e,s,r,i;return(r=new D({props:{label:K,items:t[0]}})).$on("change",t[2]),{c:function(){n=f(),a=l("h4"),e=h("PlayStation®Plus 免費遊戲"),s=f(),p(r.$$.fragment),this.h()},l:function(t){m('[data-svelte="svelte-15j1h2d"]',document.head).forEach(d),n=v(t),a=y(t,"H4",{});var i=$(a);e=x(i,"PlayStation®Plus 免費遊戲"),i.forEach(d),s=v(t),g(r.$$.fragment,t),this.h()},h:function(){document.title="PlayStation®Plus 免費遊戲"},m:function(t,c){P(t,n,c),P(t,a,c),j(a,e),P(t,s,c),S(r,t,c),i=!0},p:function(t,n){var a={};1&b(n,1)[0]&&(a.items=t[0]),r.$set(a)},i:function(t){i||(k(r.$$.fragment,t),i=!0)},o:function(t){R(r.$$.fragment,t),i=!1},d:function(t){t&&d(n),t&&d(a),t&&d(s),w(r,t)}}}function I(t){return J.apply(this,arguments)}function J(){return(J=t(n.mark(function t(a){var e,s;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.params,a.query,t.next=3,this.fetch("api/hk/list.json");case 3:return e=t.sent,t.next=6,e.json();case 6:if(s=t.sent,200!==e.status||"1000"!==s.code){t.next=11;break}return t.abrupt("return",{items:s.data});case 11:this.error(e.status,s.code+" - "+s.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var K="年份";function _(t,n,a){var e=n.items,s=void 0===e?[]:e;function r(t){q("ps/hk/"+t)}return t.$set=function(t){"items"in t&&a(0,s=t.items)},[s,r,function(t){return r(t.detail)}]}export default(function(t){a(e,u);var n=E(e);function e(t){var a;return r(this,e),a=n.call(this),i(o(a),t,_,H,c,{items:0}),a}return e}());export{I as preload};
