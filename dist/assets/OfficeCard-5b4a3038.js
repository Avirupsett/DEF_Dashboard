import{f as l,j as s}from"./vendor-f48e548e.js";import{c as e,a as t}from"./Dashboard-c09c3291.js";import"./index-9709244e.js";import"./axios-aa9cae93.js";import"./installSVGRenderer-7788c1a1.js";import"./assertThisInitialized-46084dcb.js";import"./Skeleton-26b4d238.js";function j({officeCountData:i}){const{t:r}=l();return s.jsxs("div",{className:e.card2,style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[s.jsxs("div",{className:e.cardHead,children:[s.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:r("Office")}),s.jsx("span",{children:s.jsx(t,{size:50})})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column"},children:Array.isArray(i)&&i.length>0?i.map((n,a)=>s.jsxs("div",{className:e.cardAmount,children:[s.jsxs("span",{style:{fontSize:window.innerWidth>600?".9rem":"0.8rem"},children:[r(n.officeType)," :"]}),s.jsx("span",{children:n.officeCount})]},a)):s.jsx("div",{className:e.cardAmount,children:s.jsx("span",{children:r("No office data available")})})})]})}export{j as default};
