import{_ as t,a as n,b as e,c as a,d as r,e as s,i,s as o,f as u,S as c,g as f,t as h,h as l,j as p,k as v,l as m,m as d,n as g,o as x,p as y,q as b,r as k,u as j,v as w,w as E,x as q,y as N}from"./client.0989613a.js";function P(t,n,e){var a=t.slice();return a[1]=n[e],a}function S(t){var n,e,a,r,s,i,o=t[1]+"";return{c:function(){n=f("a"),e=f("button"),a=h(o),r=h(" 年"),s=l(),this.h()},l:function(t){n=p(t,"A",{href:!0});var i=v(n);e=p(i,"BUTTON",{class:!0});var u=v(e);a=m(u,o),r=m(u," 年"),u.forEach(d),s=g(i),i.forEach(d),this.h()},h:function(){x(e,"class","py-2 px-4 uppercase text-sm font-medium relative overflow-hidden\n      text-white transition bg-primary-500 hover:bg-primary-400\n      hover:elevation-5 elevation-3 rounded button "),x(n,"href",i="ps/hk/"+t[1])},m:function(t,i){y(t,n,i),b(n,e),b(e,a),b(e,r),b(n,s)},p:function(t,e){1&e&&o!==(o=t[1]+"")&&k(a,o),1&e&&i!==(i="ps/hk/"+t[1])&&x(n,"href",i)},d:function(t){t&&d(n)}}}function T(t){for(var n,e,a=t[0],r=[],s=0;s<a.length;s+=1)r[s]=S(P(t,a,s));return{c:function(){n=l();for(var t=0;t<r.length;t+=1)r[t].c();e=j(),this.h()},l:function(t){w('[data-svelte="svelte-15j1h2d"]',document.head).forEach(d),n=g(t);for(var a=0;a<r.length;a+=1)r[a].l(t);e=j(),this.h()},h:function(){document.title="PlayStation®Plus 免費遊戲"},m:function(t,a){y(t,n,a);for(var s=0;s<r.length;s+=1)r[s].m(t,a);y(t,e,a)},p:function(t,n){var s=E(n,1)[0];if(1&s){var i;for(a=t[0],i=0;i<a.length;i+=1){var o=P(t,a,i);r[i]?r[i].p(o,s):(r[i]=S(o),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=a.length}},i:q,o:q,d:function(t){t&&d(n),N(r,t),t&&d(e)}}}function A(t){return B.apply(this,arguments)}function B(){return(B=t(n.mark(function t(e){var a,r;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,e.query,t.next=3,this.fetch("api/hk/list.json");case 3:return a=t.sent,t.next=6,a.json();case 6:if(r=t.sent,200!==a.status||"1000"!==r.code){t.next=11;break}return t.abrupt("return",{items:r.data});case 11:this.error(a.status,r.code+" - "+r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(t,n,e){var a=n.items,r=void 0===a?[]:a;return t.$set=function(t){"items"in t&&e(0,r=t.items)},[r]}export default(function(t){function n(t){var e;return a(this,n),e=r(this,s(n).call(this)),i(u(e),t,O,T,o,{items:0}),e}return e(n,c),n}());export{A as preload};
