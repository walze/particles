import{a as U}from"./assert.9d7efef1.js";const q=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),D=function(t,e){return new URL(t,e).href},v={},W=function(e,n,c){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=D(o,c),o in v)return;v[o]=!0;const u=o.endsWith(".css"),a=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":q,u||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),u)return new Promise((s,r)=>{i.addEventListener("load",s),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function d(){}function O(t){return t()}function S(){return Object.create(null)}function g(t){t.forEach(O)}function z(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function H(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t){return Array.from(t.childNodes)}let m;function h(t){m=t}function R(){if(!m)throw new Error("Function called outside component initialization");return m}function T(t){R().$$.on_mount.push(t)}function V(t){R().$$.on_destroy.push(t)}const f=[],A=[],p=[],C=[],G=Promise.resolve();let y=!1;function J(){y||(y=!0,G.then(j))}function b(t){p.push(t)}const $=new Set;let _=0;function j(){const t=m;do{for(;_<f.length;){const e=f[_];_++,h(e),K(e.$$)}for(h(null),f.length=0,_=0;A.length;)A.pop()();for(let e=0;e<p.length;e+=1){const n=p[e];$.has(n)||($.add(n),n())}p.length=0}while(f.length);for(;C.length;)C.pop()();y=!1,$.clear(),h(t)}function K(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const Q=new Set;function X(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function Y(t,e,n,c){const{fragment:o,on_mount:u,on_destroy:a,after_update:i}=t.$$;o&&o.m(e,n),c||b(()=>{const s=u.map(O).filter(z);a?a.push(...s):g(s),t.$$.on_mount=[]}),i.forEach(b)}function Z(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){t.$$.dirty[0]===-1&&(f.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(t,e,n,c,o,u,a,i=[-1]){const s=m;h(t);const r=t.$$={fragment:null,ctx:null,props:u,update:d,not_equal:o,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:S(),dirty:i,skip_bound:!1,root:e.target||s.$$.root};a&&a(r.root);let w=!1;if(r.ctx=n?n(t,e.props||{},(l,k,...x)=>{const E=x.length?x[0]:k;return r.ctx&&o(r.ctx[l],r.ctx[l]=E)&&(!r.skip_bound&&r.bound[l]&&r.bound[l](E),w&&tt(t,l)),k}):[],r.update(),w=!0,g(r.before_update),r.fragment=c?c(r.ctx):!1,e.target){if(e.hydrate){const l=M(e.target);r.fragment&&r.fragment.l(l),l.forEach(P)}else r.fragment&&r.fragment.c();e.intro&&X(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),j()}h(s)}class nt{$destroy(){Z(this,1),this.$destroy=d}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const o=c.indexOf(n);o!==-1&&c.splice(o,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function rt(t){let e;return{c(){e=I("canvas"),L(e,"width",window.innerWidth),L(e,"height",window.innerHeight)},m(n,c){H(n,e,c)},p:d,i:d,o:d,d(n){n&&P(e)}}}function ot(t){return T(async()=>{const{ticker:e}=await W(()=>import("./app.cbff3b29.js"),["app.cbff3b29.js","pixi.js.b3872bab.js","assert.9d7efef1.js","ramda.28ae2b40.js"],import.meta.url);e.start()}),V(()=>{}),[]}class ct extends nt{constructor(e){super(),et(this,e,ot,rt,B,{})}}const N=document.querySelector("#app");U(N,"No #app element found");new ct({target:N});
//# sourceMappingURL=index.1624fc64.js.map