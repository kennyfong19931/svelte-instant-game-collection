import{S as K,i as Q,s as x,F as $,C as O,e as X,c as q,a as tt,d as S,G as V,g as A,H as Z,I as j,J as et,K as st,L as at,z as ht,M as mt,q as b,o as C,N as _t,O as Y,P as gt,v as wt,Q as St,R as zt,T as Tt,r as ct,w as D,k as ot,x as L,m as rt,y as R,B as H,b as J,U as Ft,t as Nt,h as kt}from"../chunks/index-cca5eb09.js";import{b as Ut}from"../chunks/paths-396f020f.js";import{r as Vt}from"../chunks/index-e8de4ef0.js";import{_ as W,a as pt,M as jt,c as G,u as At,f as bt,d as Yt,b as Ct,D as Gt,S as Xt}from"../chunks/index-b01fdfd2.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var B={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},U={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},qt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nt=function(s){W(t,s);function t(e){return s.call(this,pt(pt({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return qt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(jt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var k=0,yt=function(s){W(t,s);function t(e){var a=s.call(this,e)||this;return a.wasDocked=!0,a.isDockedShowing=!0,a.currentAppBarOffsetTop=0,a.isCurrentlyBeingResized=!1,a.resizeThrottleId=k,a.resizeDebounceId=k,a.lastScrollPosition=a.adapter.getViewportScrollY(),a.topAppBarHeight=a.adapter.getTopAppBarHeight(),a}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),a=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=a,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=k,e.throttledResizeHandler()},U.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=k},U.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,a=this.currentAppBarOffsetTop<0,n=this.currentAppBarOffsetTop>e,o=a&&n;if(o)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==n)return this.isDockedShowing=n,!0}else return this.wasDocked=!0,!0;return o},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-U.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(nt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wt=function(s){W(t,s);function t(){var e=s!==null&&s.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(B.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(B.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(yt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zt=function(s){W(t,s);function t(e){var a=s.call(this,e)||this;return a.collapsed=!1,a.isAlwaysCollapsed=!1,a}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(B.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(B.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(B.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(B.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(nt);const{window:ut}=zt;function Jt(s){let t,e,a,n,o,l,i;const p=s[22].default,d=$(p,s,s[21],null);let _=[{class:e=G({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7],...s[11]})},{style:a=Object.entries(s[12]).map(ft).concat([s[3]]).join(" ")},s[15]],u={};for(let r=0;r<_.length;r+=1)u=O(u,_[r]);return{c(){t=X("header"),d&&d.c(),this.h()},l(r){t=q(r,"HEADER",{class:!0,style:!0});var f=tt(t);d&&d.l(f),f.forEach(S),this.h()},h(){V(t,u)},m(r,f){A(r,t,f),d&&d.m(t,null),s[25](t),o=!0,l||(i=[Z(ut,"resize",s[23]),Z(ut,"scroll",s[24]),j(n=At.call(null,t,s[1])),j(s[13].call(null,t)),Z(t,"SMUITopAppBarIconButton:nav",s[26])],l=!0)},p(r,f){d&&d.p&&(!o||f[0]&2097152)&&et(d,p,r,r[21],o?at(p,r[21],f,null):st(r[21]),null),V(t,u=ht(_,[(!o||f[0]&2293&&e!==(e=G({[r[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":r[4]==="short","mdc-top-app-bar--short-collapsed":r[0],"mdc-top-app-bar--fixed":r[4]==="fixed","smui-top-app-bar--static":r[4]==="static","smui-top-app-bar--color-secondary":r[5]==="secondary","mdc-top-app-bar--prominent":r[6],"mdc-top-app-bar--dense":r[7],...r[11]})))&&{class:e},(!o||f[0]&4104&&a!==(a=Object.entries(r[12]).map(ft).concat([r[3]]).join(" ")))&&{style:a},f[0]&32768&&r[15]])),n&&mt(n.update)&&f[0]&2&&n.update.call(null,r[1])},i(r){o||(b(d,r),o=!0)},o(r){C(d,r),o=!1},d(r){r&&S(t),d&&d.d(r),s[25](null),l=!1,_t(i)}}}const ft=([s,t])=>`${s}: ${t};`;function Kt(s,t,e){const a=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let n=Y(t,a),{$$slots:o={},$$scope:l}=t;const i=bt(gt());let p=()=>{};function d(c){return c===p}let{use:_=[]}=t,{class:u=""}=t,{style:r=""}=t,{variant:f="standard"}=t,{color:M="primary"}=t,{collapsed:h=p}=t;const Et=!d(h)&&!!h;d(h)&&(h=!1);let{prominent:P=!1}=t,{dense:v=!1}=t,{scrollTarget:T=void 0}=t,y,m,g={},E={},w,Bt=Vt({variant:f,prominent:P,dense:v},c=>{e(18,w=c)}),I,z=f;wt(()=>(e(9,m=lt()),m.init(),()=>{m.destroy()}));function lt(){const c={static:nt,short:Zt,fixed:Wt}[f]||yt;return new c({hasClass:Ot,addClass:It,removeClass:Dt,setStyle:Lt,getTopAppBarHeight:()=>y.clientHeight,notifyNavigationIconClicked:()=>Yt(y,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>T==null?window.pageYOffset:T.scrollTop,getTotalActionItems:()=>y.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Ot(c){return c in g?g[c]:it().classList.contains(c)}function It(c){g[c]||e(11,g[c]=!0,g)}function Dt(c){(!(c in g)||g[c])&&e(11,g[c]=!1,g)}function Lt(c,N){E[c]!=N&&(N===""||N==null?(delete E[c],e(12,E),e(20,z),e(4,f),e(9,m)):e(12,E[c]=N,E))}function F(){m&&(m.handleTargetScroll(),f==="short"&&e(0,h="isCollapsed"in m&&m.isCollapsed))}function Rt(){return Bt}function it(){return y}const Ht=()=>f!=="short"&&f!=="fixed"&&m&&m.handleWindowResize(),Mt=()=>T==null&&F();function Pt(c){Tt[c?"unshift":"push"](()=>{y=c,e(10,y)})}const vt=()=>m&&m.handleNavigationClick();return s.$$set=c=>{t=O(O({},t),St(c)),e(15,n=Y(t,a)),"use"in c&&e(1,_=c.use),"class"in c&&e(2,u=c.class),"style"in c&&e(3,r=c.style),"variant"in c&&e(4,f=c.variant),"color"in c&&e(5,M=c.color),"collapsed"in c&&e(0,h=c.collapsed),"prominent"in c&&e(6,P=c.prominent),"dense"in c&&e(7,v=c.dense),"scrollTarget"in c&&e(8,T=c.scrollTarget),"$$scope"in c&&e(21,l=c.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&w&&w({variant:f,prominent:P,dense:v}),s.$$.dirty[0]&1049104&&z!==f&&m&&(e(20,z=f),m.destroy(),e(11,g={}),e(12,E={}),e(9,m=lt()),m.init()),s.$$.dirty[0]&528&&m&&f==="short"&&"setAlwaysCollapsed"in m&&m.setAlwaysCollapsed(Et),s.$$.dirty[0]&524544&&I!==T&&(I&&I.removeEventListener("scroll",F),T&&T.addEventListener("scroll",F),e(19,I=T))},[h,_,u,r,f,M,P,v,T,m,y,g,E,i,F,n,Rt,it,w,I,z,l,o,Ht,Mt,Pt,vt]}class Qt extends K{constructor(t){super(),Q(this,t,Kt,Jt,x,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var xt=Ct({class:"mdc-top-app-bar__row",component:Gt});function $t(s){let t,e,a,n,o,l;const i=s[9].default,p=$(i,s,s[8],null);let d=[{class:e=G({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],_={};for(let u=0;u<d.length;u+=1)_=O(_,d[u]);return{c(){t=X("section"),p&&p.c(),this.h()},l(u){t=q(u,"SECTION",{class:!0});var r=tt(t);p&&p.l(r),r.forEach(S),this.h()},h(){V(t,_)},m(u,r){A(u,t,r),p&&p.m(t,null),s[10](t),n=!0,o||(l=[j(a=At.call(null,t,s[0])),j(s[5].call(null,t))],o=!0)},p(u,[r]){p&&p.p&&(!n||r&256)&&et(p,i,u,u[8],n?at(i,u[8],r,null):st(u[8]),null),V(t,_=ht(d,[(!n||r&6&&e!==(e=G({[u[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":u[2]==="start","mdc-top-app-bar__section--align-end":u[2]==="end"})))&&{class:e},r&8&&(u[3]?{role:"toolbar"}:{}),r&64&&u[6]])),a&&mt(a.update)&&r&1&&a.update.call(null,u[0])},i(u){n||(b(p,u),n=!0)},o(u){C(p,u),n=!1},d(u){u&&S(t),p&&p.d(u),s[10](null),o=!1,_t(l)}}}function te(s,t,e){const a=["use","class","align","toolbar","getElement"];let n=Y(t,a),{$$slots:o={},$$scope:l}=t;const i=bt(gt());let{use:p=[]}=t,{class:d=""}=t,{align:_="start"}=t,{toolbar:u=!1}=t,r;ct("SMUI:icon-button:context",u?"top-app-bar:action":"top-app-bar:navigation"),ct("SMUI:button:context",u?"top-app-bar:action":"top-app-bar:navigation");function f(){return r}function M(h){Tt[h?"unshift":"push"](()=>{r=h,e(4,r)})}return s.$$set=h=>{t=O(O({},t),St(h)),e(6,n=Y(t,a)),"use"in h&&e(0,p=h.use),"class"in h&&e(1,d=h.class),"align"in h&&e(2,_=h.align),"toolbar"in h&&e(3,u=h.toolbar),"$$scope"in h&&e(8,l=h.$$scope)},[p,d,_,u,r,i,n,f,l,o,M]}class ee extends K{constructor(t){super(),Q(this,t,te,$t,x,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var se=Ct({class:"mdc-top-app-bar__title",component:Xt});const dt=ee;function ae(s){let t;return{c(){t=Nt("PlayStation\xAEPlus \u514D\u8CBB\u904A\u6232")},l(e){t=kt(e,"PlayStation\xAEPlus \u514D\u8CBB\u904A\u6232")},m(e,a){A(e,t,a)},d(e){e&&S(t)}}}function oe(s){let t,e,a,n,o;return n=new se({props:{$$slots:{default:[ae]},$$scope:{ctx:s}}}),{c(){t=X("img"),a=ot(),D(n.$$.fragment),this.h()},l(l){t=q(l,"IMG",{alt:!0,src:!0,width:!0}),a=rt(l),L(n.$$.fragment,l),this.h()},h(){J(t,"alt","logo"),Ft(t.src,e=Ut+"/logo.png")||J(t,"src",e),J(t,"width","44")},m(l,i){A(l,t,i),A(l,a,i),R(n,l,i),o=!0},p(l,i){const p={};i&2&&(p.$$scope={dirty:i,ctx:l}),n.$set(p)},i(l){o||(b(n.$$.fragment,l),o=!0)},o(l){C(n.$$.fragment,l),o=!1},d(l){l&&S(t),l&&S(a),H(n,l)}}}function re(s){let t,e,a,n;return t=new dt({props:{$$slots:{default:[oe]},$$scope:{ctx:s}}}),a=new dt({props:{align:"end",toolbar:!0}}),{c(){D(t.$$.fragment),e=ot(),D(a.$$.fragment)},l(o){L(t.$$.fragment,o),e=rt(o),L(a.$$.fragment,o)},m(o,l){R(t,o,l),A(o,e,l),R(a,o,l),n=!0},p(o,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:o}),t.$set(i)},i(o){n||(b(t.$$.fragment,o),b(a.$$.fragment,o),n=!0)},o(o){C(t.$$.fragment,o),C(a.$$.fragment,o),n=!1},d(o){H(t,o),o&&S(e),H(a,o)}}}function ne(s){let t,e;return t=new xt({props:{$$slots:{default:[re]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment)},l(a){L(t.$$.fragment,a)},m(a,n){R(t,a,n),e=!0},p(a,n){const o={};n&2&&(o.$$scope={dirty:n,ctx:a}),t.$set(o)},i(a){e||(b(t.$$.fragment,a),e=!0)},o(a){C(t.$$.fragment,a),e=!1},d(a){H(t,a)}}}function le(s){let t,e,a,n;t=new Qt({props:{variant:"static",$$slots:{default:[ne]},$$scope:{ctx:s}}});const o=s[0].default,l=$(o,s,s[1],null);return{c(){D(t.$$.fragment),e=ot(),a=X("section"),l&&l.c()},l(i){L(t.$$.fragment,i),e=rt(i),a=q(i,"SECTION",{});var p=tt(a);l&&l.l(p),p.forEach(S)},m(i,p){R(t,i,p),A(i,e,p),A(i,a,p),l&&l.m(a,null),n=!0},p(i,[p]){const d={};p&2&&(d.$$scope={dirty:p,ctx:i}),t.$set(d),l&&l.p&&(!n||p&2)&&et(l,o,i,i[1],n?at(o,i[1],p,null):st(i[1]),null)},i(i){n||(b(t.$$.fragment,i),b(l,i),n=!0)},o(i){C(t.$$.fragment,i),C(l,i),n=!1},d(i){H(t,i),i&&S(e),i&&S(a),l&&l.d(i)}}}function ie(s,t,e){let{$$slots:a={},$$scope:n}=t;return s.$$set=o=>{"$$scope"in o&&e(1,n=o.$$scope)},[a,n]}class de extends K{constructor(t){super(),Q(this,t,ie,le,x,{})}}export{de as default};
