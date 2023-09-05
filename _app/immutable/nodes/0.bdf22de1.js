import{s as K,c as Q,d as B,e as V,u as x,g as $,f as tt,i as ht,r as mt,h as U,j as _t,o as wt,k as gt,b as St,l as ct,m as zt}from"../chunks/scheduler.dab97f17.js";import{S as et,i as st,g as G,h as q,j as at,f as S,x as Y,a as b,y as Z,d as A,t as C,r as D,s as ot,u as L,c as rt,v as M,w as R,k as J,m as kt,n as Ft}from"../chunks/index.1af7cfcd.js";import{b as Nt}from"../chunks/paths.89b6b86b.js";import{_ as W,a as pt,M as jt,c as X,u as Tt,g as bt,f as At,d as Vt,b as Ut,e as Ct,D as Yt,S as Xt}from"../chunks/index.a9b7ebf0.js";import{r as Gt}from"../chunks/index.2cc154ba.js";const qt=!0,me=Object.freeze(Object.defineProperty({__proto__:null,prerender:qt},Symbol.toStringTag,{value:"Module"}));/**
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
 */var O={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},j={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Wt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var nt=function(s){W(t,s);function t(e){return s.call(this,pt(pt({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(jt);/**
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
 */var N=0,yt=function(s){W(t,s);function t(e){var a=s.call(this,e)||this;return a.wasDocked=!0,a.isDockedShowing=!0,a.currentAppBarOffsetTop=0,a.isCurrentlyBeingResized=!1,a.resizeThrottleId=N,a.resizeDebounceId=N,a.lastScrollPosition=a.adapter.getViewportScrollY(),a.topAppBarHeight=a.adapter.getTopAppBarHeight(),a}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),a=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=a,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=N,e.throttledResizeHandler()},j.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=N},j.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,a=this.currentAppBarOffsetTop<0,n=this.currentAppBarOffsetTop>e,o=a&&n;if(o)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==n)return this.isDockedShowing=n,!0}else return this.wasDocked=!0,!0;return o},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-j.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(nt);/**
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
 */var Zt=function(s){W(t,s);function t(){var e=s!==null&&s.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(O.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(O.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(yt);/**
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
 */var Jt=function(s){W(t,s);function t(e){var a=s.call(this,e)||this;return a.collapsed=!1,a.isAlwaysCollapsed=!1,a}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(O.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(O.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(O.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(O.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(nt);const{window:ut}=Ut;function Kt(s){let t,e,a,n,o,l,c;const p=s[22].default,d=Q(p,s,s[21],null);let _=[{class:e=X({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7],...s[11]})},{style:a=Object.entries(s[12]).map(ft).concat([s[3]]).join(" ")},s[15]],u={};for(let r=0;r<_.length;r+=1)u=B(u,_[r]);return{c(){t=G("header"),d&&d.c(),this.h()},l(r){t=q(r,"HEADER",{class:!0,style:!0});var f=at(t);d&&d.l(f),f.forEach(S),this.h()},h(){Y(t,u)},m(r,f){b(r,t,f),d&&d.m(t,null),s[25](t),o=!0,l||(c=[Z(ut,"resize",s[23]),Z(ut,"scroll",s[24]),V(n=Tt.call(null,t,s[1])),V(s[13].call(null,t)),Z(t,"SMUITopAppBarIconButton:nav",s[26])],l=!0)},p(r,f){d&&d.p&&(!o||f[0]&2097152)&&x(d,p,r,r[21],o?tt(p,r[21],f,null):$(r[21]),null),Y(t,u=bt(_,[(!o||f[0]&2293&&e!==(e=X({[r[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":r[4]==="short","mdc-top-app-bar--short-collapsed":r[0],"mdc-top-app-bar--fixed":r[4]==="fixed","smui-top-app-bar--static":r[4]==="static","smui-top-app-bar--color-secondary":r[5]==="secondary","mdc-top-app-bar--prominent":r[6],"mdc-top-app-bar--dense":r[7],...r[11]})))&&{class:e},(!o||f[0]&4104&&a!==(a=Object.entries(r[12]).map(ft).concat([r[3]]).join(" ")))&&{style:a},f[0]&32768&&r[15]])),n&&ht(n.update)&&f[0]&2&&n.update.call(null,r[1])},i(r){o||(A(d,r),o=!0)},o(r){C(d,r),o=!1},d(r){r&&S(t),d&&d.d(r),s[25](null),l=!1,mt(c)}}}const ft=([s,t])=>`${s}: ${t};`;function Qt(s,t,e){const a=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let n=U(t,a),{$$slots:o={},$$scope:l}=t;const c=At(_t());let p=()=>{};function d(i){return i===p}let{use:_=[]}=t,{class:u=""}=t,{style:r=""}=t,{variant:f="standard"}=t,{color:H="primary"}=t,{collapsed:h=p}=t;const Et=!d(h)&&!!h;d(h)&&(h=!1);let{prominent:P=!1}=t,{dense:v=!1}=t,{scrollTarget:T=void 0}=t,y,m,g={},E={},w,Ot=Gt({variant:f,prominent:P,dense:v},i=>{e(18,w=i)}),I,z=f;wt(()=>(e(9,m=lt()),m.init(),()=>{m.destroy()}));function lt(){const i={static:nt,short:Jt,fixed:Zt}[f]||yt;return new i({hasClass:Bt,addClass:It,removeClass:Dt,setStyle:Lt,getTopAppBarHeight:()=>y.clientHeight,notifyNavigationIconClicked:()=>Vt(y,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>T==null?window.pageYOffset:T.scrollTop,getTotalActionItems:()=>y.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Bt(i){return i in g?g[i]:it().classList.contains(i)}function It(i){g[i]||e(11,g[i]=!0,g)}function Dt(i){(!(i in g)||g[i])&&e(11,g[i]=!1,g)}function Lt(i,F){E[i]!=F&&(F===""||F==null?(delete E[i],e(12,E),e(20,z),e(4,f),e(9,m)):e(12,E[i]=F,E))}function k(){m&&(m.handleTargetScroll(),f==="short"&&e(0,h="isCollapsed"in m&&m.isCollapsed))}function Mt(){return Ot}function it(){return y}const Rt=()=>f!=="short"&&f!=="fixed"&&m&&m.handleWindowResize(),Ht=()=>T==null&&k();function Pt(i){St[i?"unshift":"push"](()=>{y=i,e(10,y)})}const vt=()=>m&&m.handleNavigationClick();return s.$$set=i=>{t=B(B({},t),gt(i)),e(15,n=U(t,a)),"use"in i&&e(1,_=i.use),"class"in i&&e(2,u=i.class),"style"in i&&e(3,r=i.style),"variant"in i&&e(4,f=i.variant),"color"in i&&e(5,H=i.color),"collapsed"in i&&e(0,h=i.collapsed),"prominent"in i&&e(6,P=i.prominent),"dense"in i&&e(7,v=i.dense),"scrollTarget"in i&&e(8,T=i.scrollTarget),"$$scope"in i&&e(21,l=i.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&w&&w({variant:f,prominent:P,dense:v}),s.$$.dirty[0]&1049104&&z!==f&&m&&(e(20,z=f),m.destroy(),e(11,g={}),e(12,E={}),e(9,m=lt()),m.init()),s.$$.dirty[0]&528&&m&&f==="short"&&"setAlwaysCollapsed"in m&&m.setAlwaysCollapsed(Et),s.$$.dirty[0]&524544&&I!==T&&(I&&I.removeEventListener("scroll",k),T&&T.addEventListener("scroll",k),e(19,I=T))},[h,_,u,r,f,H,P,v,T,m,y,g,E,c,k,n,Mt,it,w,I,z,l,o,Rt,Ht,Pt,vt]}class xt extends et{constructor(t){super(),st(this,t,Qt,Kt,K,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const $t=Ct({class:"mdc-top-app-bar__row",component:Yt});function te(s){let t,e,a,n,o,l;const c=s[9].default,p=Q(c,s,s[8],null);let d=[{class:e=X({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],_={};for(let u=0;u<d.length;u+=1)_=B(_,d[u]);return{c(){t=G("section"),p&&p.c(),this.h()},l(u){t=q(u,"SECTION",{class:!0});var r=at(t);p&&p.l(r),r.forEach(S),this.h()},h(){Y(t,_)},m(u,r){b(u,t,r),p&&p.m(t,null),s[10](t),n=!0,o||(l=[V(a=Tt.call(null,t,s[0])),V(s[5].call(null,t))],o=!0)},p(u,[r]){p&&p.p&&(!n||r&256)&&x(p,c,u,u[8],n?tt(c,u[8],r,null):$(u[8]),null),Y(t,_=bt(d,[(!n||r&6&&e!==(e=X({[u[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":u[2]==="start","mdc-top-app-bar__section--align-end":u[2]==="end"})))&&{class:e},r&8&&(u[3]?{role:"toolbar"}:{}),r&64&&u[6]])),a&&ht(a.update)&&r&1&&a.update.call(null,u[0])},i(u){n||(A(p,u),n=!0)},o(u){C(p,u),n=!1},d(u){u&&S(t),p&&p.d(u),s[10](null),o=!1,mt(l)}}}function ee(s,t,e){const a=["use","class","align","toolbar","getElement"];let n=U(t,a),{$$slots:o={},$$scope:l}=t;const c=At(_t());let{use:p=[]}=t,{class:d=""}=t,{align:_="start"}=t,{toolbar:u=!1}=t,r;ct("SMUI:icon-button:context",u?"top-app-bar:action":"top-app-bar:navigation"),ct("SMUI:button:context",u?"top-app-bar:action":"top-app-bar:navigation");function f(){return r}function H(h){St[h?"unshift":"push"](()=>{r=h,e(4,r)})}return s.$$set=h=>{t=B(B({},t),gt(h)),e(6,n=U(t,a)),"use"in h&&e(0,p=h.use),"class"in h&&e(1,d=h.class),"align"in h&&e(2,_=h.align),"toolbar"in h&&e(3,u=h.toolbar),"$$scope"in h&&e(8,l=h.$$scope)},[p,d,_,u,r,c,n,f,l,o,H]}let se=class extends et{constructor(t){super(),st(this,t,ee,te,K,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}};const ae=Ct({class:"mdc-top-app-bar__title",component:Xt}),dt=se;function oe(s){let t;return{c(){t=kt("PlayStation®Plus 免費遊戲")},l(e){t=Ft(e,"PlayStation®Plus 免費遊戲")},m(e,a){b(e,t,a)},d(e){e&&S(t)}}}function re(s){let t,e,a,n,o;return n=new ae({props:{$$slots:{default:[oe]},$$scope:{ctx:s}}}),{c(){t=G("img"),a=ot(),D(n.$$.fragment),this.h()},l(l){t=q(l,"IMG",{alt:!0,src:!0,width:!0}),a=rt(l),L(n.$$.fragment,l),this.h()},h(){J(t,"alt","logo"),zt(t.src,e=Nt+"/logo.png")||J(t,"src",e),J(t,"width","44")},m(l,c){b(l,t,c),b(l,a,c),M(n,l,c),o=!0},p(l,c){const p={};c&2&&(p.$$scope={dirty:c,ctx:l}),n.$set(p)},i(l){o||(A(n.$$.fragment,l),o=!0)},o(l){C(n.$$.fragment,l),o=!1},d(l){l&&(S(t),S(a)),R(n,l)}}}function ne(s){let t,e,a,n;return t=new dt({props:{$$slots:{default:[re]},$$scope:{ctx:s}}}),a=new dt({props:{align:"end",toolbar:!0}}),{c(){D(t.$$.fragment),e=ot(),D(a.$$.fragment)},l(o){L(t.$$.fragment,o),e=rt(o),L(a.$$.fragment,o)},m(o,l){M(t,o,l),b(o,e,l),M(a,o,l),n=!0},p(o,l){const c={};l&2&&(c.$$scope={dirty:l,ctx:o}),t.$set(c)},i(o){n||(A(t.$$.fragment,o),A(a.$$.fragment,o),n=!0)},o(o){C(t.$$.fragment,o),C(a.$$.fragment,o),n=!1},d(o){o&&S(e),R(t,o),R(a,o)}}}function le(s){let t,e;return t=new $t({props:{$$slots:{default:[ne]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment)},l(a){L(t.$$.fragment,a)},m(a,n){M(t,a,n),e=!0},p(a,n){const o={};n&2&&(o.$$scope={dirty:n,ctx:a}),t.$set(o)},i(a){e||(A(t.$$.fragment,a),e=!0)},o(a){C(t.$$.fragment,a),e=!1},d(a){R(t,a)}}}function ie(s){let t,e,a,n;t=new xt({props:{variant:"static",$$slots:{default:[le]},$$scope:{ctx:s}}});const o=s[0].default,l=Q(o,s,s[1],null);return{c(){D(t.$$.fragment),e=ot(),a=G("section"),l&&l.c()},l(c){L(t.$$.fragment,c),e=rt(c),a=q(c,"SECTION",{});var p=at(a);l&&l.l(p),p.forEach(S)},m(c,p){M(t,c,p),b(c,e,p),b(c,a,p),l&&l.m(a,null),n=!0},p(c,[p]){const d={};p&2&&(d.$$scope={dirty:p,ctx:c}),t.$set(d),l&&l.p&&(!n||p&2)&&x(l,o,c,c[1],n?tt(o,c[1],p,null):$(c[1]),null)},i(c){n||(A(t.$$.fragment,c),A(l,c),n=!0)},o(c){C(t.$$.fragment,c),C(l,c),n=!1},d(c){c&&(S(e),S(a)),R(t,c),l&&l.d(c)}}}function ce(s,t,e){let{$$slots:a={},$$scope:n}=t;return s.$$set=o=>{"$$scope"in o&&e(1,n=o.$$scope)},[a,n]}class ge extends et{constructor(t){super(),st(this,t,ce,ie,K,{})}}export{ge as component,me as universal};
