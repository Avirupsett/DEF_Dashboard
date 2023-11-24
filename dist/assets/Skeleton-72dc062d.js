import{p as z,w as K,T as V,q as A,r as D,g as Y,b as H,s as J,_ as d,t as Q,u as Z,d as tt,e as et,f as rt}from"./axios-67c74b23.js";import{r as x,j as nt}from"./vendor-36ea1262.js";var U={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=typeof Symbol=="function"&&Symbol.for,R=s?Symbol.for("react.element"):60103,M=s?Symbol.for("react.portal"):60106,m=s?Symbol.for("react.fragment"):60107,y=s?Symbol.for("react.strict_mode"):60108,h=s?Symbol.for("react.profiler"):60114,b=s?Symbol.for("react.provider"):60109,g=s?Symbol.for("react.context"):60110,E=s?Symbol.for("react.async_mode"):60111,v=s?Symbol.for("react.concurrent_mode"):60111,S=s?Symbol.for("react.forward_ref"):60112,$=s?Symbol.for("react.suspense"):60113,ot=s?Symbol.for("react.suspense_list"):60120,C=s?Symbol.for("react.memo"):60115,_=s?Symbol.for("react.lazy"):60116,st=s?Symbol.for("react.block"):60121,at=s?Symbol.for("react.fundamental"):60117,it=s?Symbol.for("react.responder"):60118,lt=s?Symbol.for("react.scope"):60119;function i(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case R:switch(t=t.type,t){case E:case v:case m:case h:case y:case $:return t;default:switch(t=t&&t.$$typeof,t){case g:case S:case _:case C:case b:return t;default:return e}}case M:return e}}}function L(t){return i(t)===v}r.AsyncMode=E;r.ConcurrentMode=v;r.ContextConsumer=g;r.ContextProvider=b;r.Element=R;r.ForwardRef=S;r.Fragment=m;r.Lazy=_;r.Memo=C;r.Portal=M;r.Profiler=h;r.StrictMode=y;r.Suspense=$;r.isAsyncMode=function(t){return L(t)||i(t)===E};r.isConcurrentMode=L;r.isContextConsumer=function(t){return i(t)===g};r.isContextProvider=function(t){return i(t)===b};r.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===R};r.isForwardRef=function(t){return i(t)===S};r.isFragment=function(t){return i(t)===m};r.isLazy=function(t){return i(t)===_};r.isMemo=function(t){return i(t)===C};r.isPortal=function(t){return i(t)===M};r.isProfiler=function(t){return i(t)===h};r.isStrictMode=function(t){return i(t)===y};r.isSuspense=function(t){return i(t)===$};r.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===m||t===v||t===h||t===y||t===$||t===ot||typeof t=="object"&&t!==null&&(t.$$typeof===_||t.$$typeof===C||t.$$typeof===b||t.$$typeof===g||t.$$typeof===S||t.$$typeof===at||t.$$typeof===it||t.$$typeof===lt||t.$$typeof===st)};r.typeOf=i;U.exports=r;var ut=U.exports,N=ut,ft={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ct={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},W={};W[N.ForwardRef]=ft;W[N.Memo]=ct;var _t=K(function(t,e){var n=t.styles,o=z([n],void 0,x.useContext(V)),u=x.useRef();return A(function(){var l=e.key+"-global",a=new e.sheet.constructor({key:l,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),f=!1,c=document.querySelector('style[data-emotion="'+l+" "+o.name+'"]');return e.sheet.tags.length&&(a.before=e.sheet.tags[0]),c!==null&&(f=!0,c.setAttribute("data-emotion",l),a.hydrate([c])),u.current=[a,f],function(){a.flush()}},[e]),A(function(){var l=u.current,a=l[0],f=l[1];if(f){l[1]=!1;return}if(o.next!==void 0&&D(e,o.next,!0),a.tags.length){var c=a.tags[a.tags.length-1].nextElementSibling;a.before=c,a.flush()}e.insert("",o,a,!1)},[e,o.name]),null});function w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return z(e)}var X=function(){var e=w.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,u){return o.__proto__=u,o},k(t,e)}function xt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,k(t,e)}function wt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dt(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function pt(t){return parseFloat(t)}function mt(t){return Y("MuiSkeleton",t)}H("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const yt=["animation","className","component","height","style","variant","width"];let p=t=>t,O,j,F,I;const ht=t=>{const{classes:e,variant:n,animation:o,hasChildren:u,width:l,height:a}=t;return rt({root:["root",n,o,u&&"withChildren",u&&!l&&"fitContent",u&&!a&&"heightAuto"]},mt,e)},bt=X(O||(O=p`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),gt=X(j||(j=p`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),vt=J("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const n=dt(t.shape.borderRadius)||"px",o=pt(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:Q(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&w(F||(F=p`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),bt),({ownerState:t,theme:e})=>t.animation==="wave"&&w(I||(I=p`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),gt,(e.vars||e).palette.action.hover)),St=x.forwardRef(function(e,n){const o=Z({props:e,name:"MuiSkeleton"}),{animation:u="pulse",className:l,component:a="span",height:f,style:c,variant:q="text",width:B}=o,P=tt(o,yt),T=d({},o,{animation:u,component:a,variant:q,hasChildren:!!P.children}),G=ht(T);return nt.jsx(vt,d({as:a,ref:n,className:et(G.root,l),ownerState:T},P,{style:d({width:B,height:f},c)}))}),kt=St;export{_t as G,kt as S,k as _,wt as a,xt as b,w as c,X as k};
