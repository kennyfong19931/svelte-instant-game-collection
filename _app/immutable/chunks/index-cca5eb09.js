function M(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function W(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function wt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function et(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(nt(e,n))}function kt(t,e,n,i){if(t){const s=Q(t,e,n,i);return t[0](s)}}function Q(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Et(t,e,n,i,s,u){if(s){const c=Q(e,n,i,u);t.p(c,s)}}function St(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function At(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function jt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Nt(t){const e={};for(const n in t)e[n]=!0;return e}function Mt(t,e,n){return t.set(n),e}function Ct(t){return t&&K(t.destroy)?t.destroy:M}let C=!1;function it(){C=!0}function rt(){C=!1}function ct(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&r.push(f)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const l=e[r].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:ct(1,s,_=>e[n[_]].claim_order,l))-1;i[r]=n[f]+1;const d=f+1;n[d]=r,s=Math.max(d,s)}const u=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<c.length;r++){for(;l<u.length&&c[r].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[r],f)}}function ot(t,e){if(C){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){C&&!n?ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode.removeChild(t)}function qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Ot(){return F(" ")}function Pt(){return F("")}function Dt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Bt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Lt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ft(t,i,e[i])}function _t(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,s=!1){dt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function U(t,e,n,i){return R(t,s=>s.nodeName===e,s=>{const u=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Ft(t,e,n){return U(t,e,n,ut)}function Ht(t,e,n){return U(t,e,n,at)}function ht(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function It(t){return ht(t," ")}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Gt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Jt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function k(){if(!w)throw new Error("Function called outside component initialization");return w}function Kt(t){k().$$.on_mount.push(t)}function Qt(t){k().$$.after_update.push(t)}function Rt(t){k().$$.on_destroy.push(t)}function Ut(t,e){return k().$$.context.set(t,e),e}function Vt(t){return k().$$.context.get(t)}function Xt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],G=[],j=[],B=[],V=Promise.resolve();let L=!1;function X(){L||(L=!0,V.then(Y))}function Yt(){return X(),V}function z(t){j.push(t)}function Zt(t){B.push(t)}const D=new Set;let A=0;function Y(){const t=w;do{for(;A<b.length;){const e=b[A];A++,x(e),mt(e.$$)}for(x(null),b.length=0,A=0;G.length;)G.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];D.has(n)||(D.add(n),n())}j.length=0}while(b.length);for(;B.length;)B.pop()();L=!1,D.clear(),x(t)}function mt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const N=new Set;let g;function te(){g={r:0,c:[],p:g}}function ee(){g.r||$(g.c),g=g.p}function Z(t,e){t&&t.i&&(N.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),g.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ne=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ie(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function re(t,e,n,i,s,u,c,o,r,l,f,d){let _=t.length,m=u.length,h=_;const T={};for(;h--;)T[t[h].key]=h;const v=[],q=new Map,O=new Map;for(h=m;h--;){const a=d(s,u,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),q.set(p,v[h]=y),p in T&&O.set(p,Math.abs(h-T[p]))}const H=new Set,I=new Set;function P(a){Z(a,1),a.m(o,f),c.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=v[m-1],p=t[_-1],y=a.key,E=p.key;a===p?(f=a.first,_--,m--):q.has(E)?!c.has(y)||H.has(y)?P(a):I.has(E)?_--:O.get(y)>O.get(E)?(I.add(y),P(a)):(H.add(E),_--):(r(p,c),_--)}for(;_--;){const a=t[_];q.has(a.key)||r(a,c)}for(;m;)P(v[m-1]);return v}function ce(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=e[u];if(o){for(const r in c)r in o||(i[r]=1);for(const r in o)s[r]||(n[r]=o[r],s[r]=1);t[u]=o}else for(const r in c)s[r]=1}for(const c in i)c in n||(n[c]=void 0);return n}function se(t){return typeof t=="object"&&t!==null?t:{}}function oe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function le(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:c,after_update:o}=t.$$;s&&s.m(e,n),i||z(()=>{const r=u.map(J).filter(K);c?c.push(...r):$(r),t.$$.on_mount=[]}),o.forEach(z)}function gt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(b.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,i,s,u,c,o=[-1]){const r=w;x(t);const l=t.$$={fragment:null,ctx:null,props:u,update:M,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&s(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),f&&bt(t,d)),_}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){it();const d=_t(e.target);l.fragment&&l.fragment.l(d),d.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Z(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),rt(),Y()}x(r)}class fe{$destroy(){gt(this,1),this.$destroy=M}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{$t as $,se as A,gt as B,tt as C,Yt as D,M as E,kt as F,zt as G,Dt as H,Ct as I,Et as J,St as K,vt as L,K as M,$ as N,jt as O,k as P,At as Q,ne as R,fe as S,G as T,wt as U,Xt as V,Bt as W,Lt as X,Vt as Y,Rt as Z,ot as _,_t as a,Mt as a0,re as a1,ie as a2,at as a3,Ht as a4,oe as a5,Zt as a6,Nt as a7,Jt as a8,qt as a9,ft as b,Ft as c,lt as d,ut as e,Gt as f,Tt as g,ht as h,ae as i,Wt as j,Ot as k,Pt as l,It as m,te as n,pt as o,ee as p,Z as q,Ut as r,xt as s,F as t,Qt as u,Kt as v,le as w,ue as x,yt as y,ce as z};