import{r as y,j as e,t as r}from"./vendor-f48e548e.js";import{B as l}from"./DriverDashboard-cee3cbb3.js";import{b as n,l as m,h as b}from"./index.esm-dcd22834.js";import{T as u,h as S,a as T,b as c,g as x,d,e as p,f as h,c as g}from"./TimelineSeparator-48dd3db1.js";import"./index-a7500c48.js";import"./assertThisInitialized-02748e78.js";import"./useTheme-6bee9f51.js";import"./ButtonBase-a89ef7b4.js";import"./ToggleButtonGroup-a827a044.js";import"./Skeleton-5c5f8b2f.js";import"./createSvgIcon-a28dcbb5.js";import"./extendSxProp-246317be.js";function Q({myTrip:o}){const[i,j]=y.useState(0),v=(t,s)=>{j(s)},a=["ALL","Pending","Delivered"],f=t=>o.filter(s=>s.Status===t);return e.jsxs("div",{children:[e.jsx(u,{value:i,onChange:v,variant:"scrollable",scrollButtons:"auto",TabIndicatorProps:{style:{display:"none"}},style:{marginBottom:"5px"},children:a.map((t,s)=>e.jsx(S,{label:e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",color:i===s?"#4b8587":"rgba(75, 133, 135, 0.7)",fontSize:"20px",textTransform:"none",borderBottom:i===s?"2px solid #4b8587":"none",fontWeight:i===s?"bold":"normal"},children:r(t)}),style:{fontWeight:"normal",height:"auto",fontFamily:"Poppins"}},s))}),o.length>0?e.jsxs(T,{className:"px-0",position:"alternate-reverse",children:[a[i]==="ALL"&&o.map((t,s)=>e.jsxs(c,{children:[e.jsx(x,{}),e.jsxs(d,{children:[e.jsx(p,{}),e.jsx(h,{})]}),e.jsx(g,{children:e.jsxs("div",{className:"text-light px-2 py-1 rounded-2",style:{backgroundColor:"#4b8587",fontSize:"12px",fontFamily:"Poppins"},children:[e.jsxs("div",{className:"fw-semibold mt-1 mb-1",style:{letterSpacing:".5px"},children:[e.jsx(n,{color:"orangered",className:"",style:{marginBottom:"3px",marginRight:"2px",fontSize:"14px"}}),t.officeName]}),e.jsx("hr",{className:"mt-0 mb-1",style:{borderColor:"var(--driver-secondary)",borderWidth:"2px"}}),e.jsxs("div",{children:[r("Status"),": ",r(t.Status)," ",t.Status==="Delivered"&&e.jsx(m,{color:"lightgreen",style:{marginBottom:"2px"}})]}),e.jsxs("div",{children:[r("Quantity"),": ",t.Quantity," L"]}),e.jsxs("div",{className:"fst-italic mt-1",style:{fontSize:"10px",color:"var(--driver-secondary)"},children:[e.jsx(l,{className:"text-warning",style:{marginBottom:"2px",marginRight:"2px",fontSize:"12px"}}),t.DeliveredTime?t.DeliveredTime:"N/A"]})]})})]},s)),a[i]!=="ALL"&&f(a[i]).map((t,s)=>e.jsxs(c,{children:[e.jsx(x,{}),e.jsxs(d,{children:[e.jsx(p,{}),e.jsx(h,{})]}),e.jsx(g,{children:e.jsxs("div",{className:"text-light px-2 py-1 rounded-2",style:{backgroundColor:"#4b8587",fontSize:"12px",fontFamily:"Poppins"},children:[e.jsxs("div",{className:"fw-semibold mt-1 mb-1",style:{letterSpacing:".5px"},children:[e.jsx(n,{color:"orangered",className:"",style:{marginBottom:"3px",marginRight:"2px",fontSize:"14px"}}),t.officeName]}),e.jsx("hr",{className:"mt-0 mb-1",style:{borderColor:"var(--driver-secondary)",borderWidth:"2px"}}),e.jsxs("div",{children:[r("Status"),": ",r(t.Status)," ",t.Status==="Delivered"&&e.jsx(m,{color:"lightgreen",style:{marginBottom:"2px"}})]}),e.jsxs("div",{children:[r("Quantity"),": ",t.Quantity," L"]}),e.jsxs("div",{className:"fst-italic mt-1",style:{fontSize:"10px",color:"var(--driver-secondary)"},children:[e.jsx(l,{className:"text-warning",style:{marginBottom:"2px",marginRight:"2px",fontSize:"12px"}}),t.DeliveredTime?t.DeliveredTime:"N/A"]})]})})]},s))]}):e.jsxs("div",{className:"text-center my-5",children:["Tap the menu ",e.jsx(b,{})," to start Your Trip"]})]})}export{Q as default};
