import{S as k,i as v,s as y,e as o,b,B as c,aa as x,h,k as q,q as f,l as L,m as S,r as _,n as d,$ as u,u as A}from"../../../chunks/index-00b86ab0.js";import{b as m}from"../../../chunks/paths-b4419565.js";function p(i,n,l){const e=i.slice();return e[1]=n[l],e}function g(i){let n,l=i[1]+"",e,t,s;return{c(){n=q("a"),e=f(l),t=f(` 年
	`),this.h()},l(a){n=L(a,"A",{href:!0});var r=S(n);e=_(r,l),t=_(r,` 年
	`),r.forEach(h),this.h()},h(){d(n,"href",s=m+"/ps/hk/"+i[1])},m(a,r){b(a,n,r),u(n,e),u(n,t)},p(a,r){r&1&&l!==(l=a[1]+"")&&A(e,l),r&1&&s!==(s=m+"/ps/hk/"+a[1])&&d(n,"href",s)},d(a){a&&h(n)}}}function B(i){let n,l=i[0].yearList,e=[];for(let t=0;t<l.length;t+=1)e[t]=g(p(i,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=o()},l(t){for(let s=0;s<e.length;s+=1)e[s].l(t);n=o()},m(t,s){for(let a=0;a<e.length;a+=1)e[a].m(t,s);b(t,n,s)},p(t,[s]){if(s&1){l=t[0].yearList;let a;for(a=0;a<l.length;a+=1){const r=p(t,l,a);e[a]?e[a].p(r,s):(e[a]=g(r),e[a].c(),e[a].m(n.parentNode,n))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},i:c,o:c,d(t){x(e,t),t&&h(n)}}}function C(i,n,l){let{data:e}=n;return i.$$set=t=>{"data"in t&&l(0,e=t.data)},[e]}class P extends k{constructor(n){super(),v(this,n,C,B,y,{data:0})}}export{P as default};