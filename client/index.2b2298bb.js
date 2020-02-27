import{S as t,i as e,s,z as a,A as r,B as n,t as l,n as o,D as c,a as i,e as f,o as $,a1 as u,g as m,f as p,b as h,d,p as g,h as x,j as y,k as v,r as b,x as w,a3 as E,w as P,T as S,u as T,a2 as j}from"./client.93cd5fc8.js";import{S as N,C as _,I as A}from"./index.f0206c08.js";function B(t,e,s){const a=t.slice();return a[5]=e[s],a}function D(t){let e,s;const i=new _.Title({props:{title:t[5].title,subheader:t[5].brand}});return{c(){e=f("div"),a(i.$$.fragment),this.h()},l(t){e=h(t,"DIV",{slot:!0});var s=d(e);r(i.$$.fragment,s),s.forEach(m),this.h()},h(){x(e,"slot","title")},m(t,a){y(t,e,a),n(i,e,null),s=!0},p(t,e){const s={};4&e&&(s.title=t[5].title),4&e&&(s.subheader=t[5].brand),i.$set(s)},i(t){s||(l(i.$$.fragment,t),s=!0)},o(t){o(i.$$.fragment,t),s=!1},d(t){t&&m(e),c(i)}}}function I(t){let e,s;const i=new A({props:{class:"w-full",src:t[5].image}});return{c(){e=f("div"),a(i.$$.fragment),this.h()},l(t){e=h(t,"DIV",{slot:!0});var s=d(e);r(i.$$.fragment,s),s.forEach(m),this.h()},h(){x(e,"slot","media")},m(t,a){y(t,e,a),n(i,e,null),s=!0},p(t,e){const s={};4&e&&(s.src=t[5].image),i.$set(s)},i(t){s||(l(i.$$.fragment,t),s=!0)},o(t){o(i.$$.fragment,t),s=!1},d(t){t&&m(e),c(i)}}}function k(t){let e;return{c(){e=$("event_available")},l(t){e=g(t,"event_available")},m(t,s){y(t,e,s)},d(t){t&&m(e)}}}function V(t){let e;return{c(){e=$("event_busy")},l(t){e=g(t,"event_busy")},m(t,s){y(t,e,s)},d(t){t&&m(e)}}}function O(t){let e;return{c(){e=$("shopping_cart")},l(t){e=g(t,"shopping_cart")},m(t,s){y(t,e,s)},d(t){t&&m(e)}}}function U(t){let e,s,u,w,E,P,T,j,N,_,A,B,D,I,U,C,q,z,H=t[5].startTime+"",F=t[5].endTime+"";const G=new S({props:{small:!0,class:"py-1",$$slots:{default:[k]},$$scope:{ctx:t}}}),J=new S({props:{small:!0,class:"py-1",$$slots:{default:[V]},$$scope:{ctx:t}}}),K=new S({props:{small:!0,class:"py-1",$$slots:{default:[O]},$$scope:{ctx:t}}});return{c(){e=f("div"),s=f("button"),a(G.$$.fragment),u=i(),w=f("span"),E=$(H),P=i(),T=f("button"),a(J.$$.fragment),j=i(),N=f("span"),_=$(F),A=i(),B=f("button"),a(K.$$.fragment),D=i(),I=f("span"),U=f("a"),C=$("PS Store"),this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var a=d(e);s=h(a,"BUTTON",{class:!0});var n=d(s);r(G.$$.fragment,n),u=p(n),w=h(n,"SPAN",{class:!0});var l=d(w);E=g(l,H),l.forEach(m),n.forEach(m),P=p(a),T=h(a,"BUTTON",{class:!0});var o=d(T);r(J.$$.fragment,o),j=p(o),N=h(o,"SPAN",{class:!0});var c=d(N);_=g(c,F),c.forEach(m),o.forEach(m),A=p(a),B=h(a,"BUTTON",{class:!0});var i=d(B);r(K.$$.fragment,i),D=p(i),I=h(i,"SPAN",{class:!0});var f=d(I);U=h(f,"A",{target:!0,href:!0});var $=d(U);C=g($,"PS Store"),$.forEach(m),f.forEach(m),i.forEach(m),a.forEach(m),this.h()},h(){x(w,"class","pt-px px-1"),x(s,"class","rounded-full cursor-default flex item-center m-1 px-2 py-1 bg-success-500"),x(N,"class","pt-px px-1"),x(T,"class","rounded-full cursor-default flex item-center m-1 px-2 py-1 bg-error-500"),x(U,"target","_blank"),x(U,"href",q="https://store.playstation.com/#!/cid="+t[5].code),x(I,"class","pt-px px-1"),x(B,"class","rounded-full flex item-center m-1 px-2 py-1 bg-blue-500 text-white"),x(e,"slot","text"),x(e,"class","p-5 pt-3 text-gray-700 body-2")},m(t,a){y(t,e,a),v(e,s),n(G,s,null),v(s,u),v(s,w),v(w,E),v(e,P),v(e,T),n(J,T,null),v(T,j),v(T,N),v(N,_),v(e,A),v(e,B),n(K,B,null),v(B,D),v(B,I),v(I,U),v(U,C),z=!0},p(t,e){const s={};256&e&&(s.$$scope={dirty:e,ctx:t}),G.$set(s),(!z||4&e)&&H!==(H=t[5].startTime+"")&&b(E,H);const a={};256&e&&(a.$$scope={dirty:e,ctx:t}),J.$set(a),(!z||4&e)&&F!==(F=t[5].endTime+"")&&b(_,F);const r={};256&e&&(r.$$scope={dirty:e,ctx:t}),K.$set(r),(!z||4&e&&q!==(q="https://store.playstation.com/#!/cid="+t[5].code))&&x(U,"href",q)},i(t){z||(l(G.$$.fragment,t),l(J.$$.fragment,t),l(K.$$.fragment,t),z=!0)},o(t){o(G.$$.fragment,t),o(J.$$.fragment,t),o(K.$$.fragment,t),z=!1},d(t){t&&m(e),c(G),c(J),c(K)}}}function C(t){let e,s,a;return{c(){e=i(),s=i(),a=i()},l(t){e=p(t),s=p(t),a=p(t)},m(t,r){y(t,e,r),y(t,s,r),y(t,a,r)},p:T,i:T,o:T,d(t){t&&m(e),t&&m(s),t&&m(a)}}}function q(t){let e;const s=new _.Card({props:{class:"m-5 w-full md:w-1/3 lg:w-1/5",$$slots:{default:[C],text:[U],media:[I],title:[D]},$$scope:{ctx:t}}});return{c(){a(s.$$.fragment)},l(t){r(s.$$.fragment,t)},m(t,a){n(s,t,a),e=!0},p(t,e){const a={};260&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){e||(l(s.$$.fragment,t),e=!0)},o(t){o(s.$$.fragment,t),e=!1},d(t){c(s,t)}}}function z(t){let e,s,S,T,j,_,A,D,I,k,V,O,U;document.title=e="PlayStation®Plus 免費遊戲 "+t[1]+"年";const C=new N({props:{label:F,items:t[3]}});C.$on("change",t[4]);let z=t[2],H=[];for(let e=0;e<z.length;e+=1)H[e]=q(B(t,z,e));const G=t=>o(H[t],1,1,()=>{H[t]=null});return{c(){s=i(),S=f("h4"),T=$("PlayStation®Plus 免費遊戲 "),j=f("span"),_=$(t[0]),A=i(),D=$(t[1]),I=$("年"),k=i(),a(C.$$.fragment),V=i(),O=f("div");for(let t=0;t<H.length;t+=1)H[t].c();this.h()},l(e){u('[data-svelte="svelte-12cc3ao"]',document.head).forEach(m),s=p(e),S=h(e,"H4",{});var a=d(S);T=g(a,"PlayStation®Plus 免費遊戲 "),j=h(a,"SPAN",{class:!0});var n=d(j);_=g(n,t[0]),n.forEach(m),A=p(a),D=g(a,t[1]),I=g(a,"年"),a.forEach(m),k=p(e),r(C.$$.fragment,e),V=p(e),O=h(e,"DIV",{class:!0});var l=d(O);for(let t=0;t<H.length;t+=1)H[t].l(l);l.forEach(m),this.h()},h(){x(j,"class","uppercase"),x(O,"class","flex justify-center flex-wrap")},m(t,e){y(t,s,e),y(t,S,e),v(S,T),v(S,j),v(j,_),v(S,A),v(S,D),v(S,I),y(t,k,e),n(C,t,e),y(t,V,e),y(t,O,e);for(let t=0;t<H.length;t+=1)H[t].m(O,null);U=!0},p(t,[s]){(!U||2&s)&&e!==(e="PlayStation®Plus 免費遊戲 "+t[1]+"年")&&(document.title=e),(!U||1&s)&&b(_,t[0]),(!U||2&s)&&b(D,t[1]);const a={};if(8&s&&(a.items=t[3]),C.$set(a),4&s){let e;for(z=t[2],e=0;e<z.length;e+=1){const a=B(t,z,e);H[e]?(H[e].p(a,s),l(H[e],1)):(H[e]=q(a),H[e].c(),l(H[e],1),H[e].m(O,null))}for(P(),e=z.length;e<H.length;e+=1)G(e);w()}},i(t){if(!U){l(C.$$.fragment,t);for(let t=0;t<z.length;t+=1)l(H[t]);U=!0}},o(t){o(C.$$.fragment,t),H=H.filter(Boolean);for(let t=0;t<H.length;t+=1)o(H[t]);U=!1},d(t){t&&m(s),t&&m(S),t&&m(k),c(C,t),t&&m(V),t&&m(O),E(H,t)}}}async function H({params:t,query:e}){let s={};const a=await this.fetch(`api/${t.region}/${t.year}.json`),r=await a.json();200===a.status&&"1000"===r.code?(s.region=t.region,s.year=t.year,s.data=r.data):this.error(a.status,r.code+" - "+r.message);const n=await this.fetch("api/hk/list.json"),l=await n.json();if(200===n.status&&"1000"===l.code){let t=[];l.data.forEach(e=>{t.push({value:e,text:e+"年"})}),s.items=t}else this.error(n.status,l.code+" - "+l.message);return s}const F="年份";function G(t,e,s){let{region:a}=e,{year:r}=e,{data:n}=e,{items:l=[]}=e;return t.$set=(t=>{"region"in t&&s(0,a=t.region),"year"in t&&s(1,r=t.year),"data"in t&&s(2,n=t.data),"items"in t&&s(3,l=t.items)}),[a,r,n,l,t=>(function(t){j("ps/hk/"+t)})(t.detail)]}export default class extends t{constructor(t){super(),e(this,t,G,z,s,{region:0,year:1,data:2,items:3})}}export{H as preload};
