import{a6 as t,a7 as n,_ as e,a as r,b as a,c as s,i as o,s as i,d as c,S as u,f,x as h,g as l,h as p,j as v,y as d,l as m,k as y,m as g,n as x,o as b,A as k,L as j,a8 as R,p as w,B as E,aa as P}from"./client.9862b61a.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,s=r(t);if(n){var o=r(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return a(this,e)}}function A(t,n,e){var r=t.slice();return r[1]=n[e],r}function B(t){var n,e,r,a,s,o,i=t[1]+"";return{c:function(){n=f("a"),e=f("button"),r=h(i),a=h(" 年"),s=l(),this.h()},l:function(t){n=p(t,"A",{href:!0});var o=v(n);e=p(o,"BUTTON",{class:!0});var c=v(e);r=d(c,i),a=d(c," 年"),c.forEach(m),s=y(o),o.forEach(m),this.h()},h:function(){g(e,"class","py-2 px-4 uppercase text-sm font-medium relative overflow-hidden text-white transition  bg-primary-500  hover:bg-primary-400   hover:elevation-5 elevation-3  rounded  button "),g(n,"href",o="ps/hk/"+t[1])},m:function(t,o){x(t,n,o),b(n,e),b(e,r),b(e,a),b(n,s)},p:function(t,e){1&e&&i!==(i=t[1]+"")&&k(r,i),1&e&&o!==(o="ps/hk/"+t[1])&&g(n,"href",o)},d:function(t){t&&m(n)}}}function D(t){for(var n,e,r=t[0],a=[],s=0;s<r.length;s+=1)a[s]=B(A(t,r,s));return{c:function(){n=l();for(var t=0;t<a.length;t+=1)a[t].c();e=j(),this.h()},l:function(t){R('[data-svelte="svelte-15j1h2d"]',document.head).forEach(m),n=y(t);for(var r=0;r<a.length;r+=1)a[r].l(t);e=j(),this.h()},h:function(){document.title="PlayStation®Plus 免費遊戲"},m:function(t,r){x(t,n,r);for(var s=0;s<a.length;s+=1)a[s].m(t,r);x(t,e,r)},p:function(t,n){var s=w(n,1)[0];if(1&s){var o;for(r=t[0],o=0;o<r.length;o+=1){var i=A(t,r,o);a[o]?a[o].p(i,s):(a[o]=B(i),a[o].c(),a[o].m(e.parentNode,e))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}},i:E,o:E,d:function(t){t&&m(n),P(a,t),t&&m(e)}}}function N(t){return T.apply(this,arguments)}function T(){return(T=t(n.mark(function t(e){var r,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,e.query,t.next=3,this.fetch("api/hk/list.json");case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status||"1000"!==a.code){t.next=11;break}return t.abrupt("return",{items:a.data});case 11:this.error(r.status,a.code+" - "+a.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function q(t,n,e){var r=n.items,a=void 0===r?[]:r;return t.$set=function(t){"items"in t&&e(0,a=t.items)},[a]}export default(function(t){e(r,u);var n=S(r);function r(t){var e;return s(this,r),e=n.call(this),o(c(e),t,q,D,i,{items:0}),e}return r}());export{N as preload};
