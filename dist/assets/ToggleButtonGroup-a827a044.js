import{c as L,g as k,s as M,m as z,b as p,A as T,u as N,_ as U,d as W,e as j}from"./assertThisInitialized-02748e78.js";import{r as b,j as E}from"./vendor-f48e548e.js";import{B as _}from"./ButtonBase-a89ef7b4.js";function A(o){return k("MuiToggleButton",o)}const P=L("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),G=P,D=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],F=o=>{const{classes:e,fullWidth:t,selected:s,disabled:n,size:d,color:g}=o,c={root:["root",s&&"selected",n&&"disabled",t&&"fullWidth",`size${z(d)}`,g]};return j(c,A,e)},w=M(_,{name:"MuiToggleButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[`size${z(t.size)}`]]}})(({theme:o,ownerState:e})=>{let t=e.color==="standard"?o.palette.text.primary:o.palette[e.color].main,s;return o.vars&&(t=e.color==="standard"?o.vars.palette.text.primary:o.vars.palette[e.color].main,s=e.color==="standard"?o.vars.palette.text.primaryChannel:o.vars.palette[e.color].mainChannel),p({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:`1px solid ${(o.vars||o).palette.divider}`,color:(o.vars||o).palette.action.active},e.fullWidth&&{width:"100%"},{[`&.${G.disabled}`]:{color:(o.vars||o).palette.action.disabled,border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:T(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${G.selected}`]:{color:t,backgroundColor:o.vars?`rgba(${s} / ${o.vars.palette.action.selectedOpacity})`:T(t,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${s} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:T(t,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${s} / ${o.vars.palette.action.selectedOpacity})`:T(t,o.palette.action.selectedOpacity)}}}},e.size==="small"&&{padding:7,fontSize:o.typography.pxToRem(13)},e.size==="large"&&{padding:15,fontSize:o.typography.pxToRem(15)})}),H=b.forwardRef(function(e,t){const s=N({props:e,name:"MuiToggleButton"}),{children:n,className:d,color:g="standard",disabled:c=!1,disableFocusRipple:C=!1,fullWidth:y=!1,onChange:i,onClick:$,selected:x,size:a="medium",value:f}=s,B=U(s,D),v=p({},s,{color:g,disabled:c,disableFocusRipple:C,fullWidth:y,size:a}),m=F(v),h=r=>{$&&($(r,f),r.defaultPrevented)||i&&i(r,f)};return E.jsx(w,p({className:W(m.root,d),disabled:c,focusRipple:!C,ref:t,onClick:h,onChange:i,value:f,ownerState:v,"aria-pressed":x},B,{children:n}))}),oo=H;function V(o,e){return e===void 0||o===void 0?!1:Array.isArray(e)?e.indexOf(o)>=0:o===e}function q(o){return k("MuiToggleButtonGroup",o)}const I=L("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),l=I,J=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],K=o=>{const{classes:e,orientation:t,fullWidth:s,disabled:n}=o,d={root:["root",t==="vertical"&&"vertical",s&&"fullWidth"],grouped:["grouped",`grouped${z(t)}`,n&&"disabled"]};return j(d,q,e)},Q=M("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${l.grouped}`]:e.grouped},{[`& .${l.grouped}`]:e[`grouped${z(t.orientation)}`]},e.root,t.orientation==="vertical"&&e.vertical,t.fullWidth&&e.fullWidth]}})(({ownerState:o,theme:e})=>p({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.orientation==="vertical"&&{flexDirection:"column"},o.fullWidth&&{width:"100%"},{[`& .${l.grouped}`]:p({},o.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderTop:0,marginTop:0}})})),S=b.forwardRef(function(e,t){const s=N({props:e,name:"MuiToggleButtonGroup"}),{children:n,className:d,color:g="standard",disabled:c=!1,exclusive:C=!1,fullWidth:y=!1,onChange:i,orientation:$="horizontal",size:x="medium",value:a}=s,f=U(s,J),B=p({},s,{disabled:c,fullWidth:y,orientation:$,size:x}),v=K(B),m=(r,u)=>{if(!i)return;const O=a&&a.indexOf(u);let R;a&&O>=0?(R=a.slice(),R.splice(O,1)):R=a?a.concat(u):[u],i(r,R)},h=(r,u)=>{i&&i(r,a===u?null:u)};return E.jsx(Q,p({role:"group",className:W(v.root,d),ref:t,ownerState:B},f,{children:b.Children.map(n,r=>b.isValidElement(r)?b.cloneElement(r,{className:W(v.grouped,r.props.className),onChange:C?h:m,selected:r.props.selected===void 0?V(r.props.value,a):r.props.selected,size:r.props.size||x,fullWidth:y,color:r.props.color||g,disabled:r.props.disabled||c}):null)}))}),eo=S;export{eo as T,oo as a};
