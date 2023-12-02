import{r as a,f as I,j as e}from"./vendor-f48e548e.js";import{E as k,x as E,H as q}from"./assertThisInitialized-02748e78.js";import{c as w}from"./Dashboard-bac1c265.js";import"./index-a7500c48.js";import"./installSVGRenderer-7788c1a1.js";import"./Skeleton-5c5f8b2f.js";function $({totalIncome:g,todaySales:u,salesCardData:l,ReactECharts:D}){const[h,S]=a.useState([]),[f,x]=a.useState(!1),[y,j]=a.useState(0),{t:d}=I();a.useEffect(()=>{function n(){if(l){const t=l;if(Array.isArray(t)){const o=t.map(s=>({requestedDate:new Date(s.requestedDate),sales:s.totalIncome}));S(t.slice(-7));const c=new Date;let r=new Date(c);r.setDate(c.getDate()-7);const W=o.filter(s=>{const i=new Date(s.requestedDate);return i>=r&&i<=c}),p=new Date(r);p.setDate(r.getDate()-7);const T=o.filter(s=>{const i=new Date(s.requestedDate);return i>=p&&i<r}),z=W.reduce((s,i)=>s+i.sales,0),m=T.reduce((s,i)=>s+i.sales,0),A=Math.min((z-m)/m*100,100);j(A)}else console.log("Invalid data format:",t)}}n()},[l]);const v=["Su","Mo","Tu","We","Th","Fr","Sa"],b={grid:{left:12,right:12,top:10,bottom:20},legend:{show:!1,textStyle:{color:"white",fontSize:window.innerWidth<=768?8:12},top:20,left:"center",itemWidth:(window.innerWidth<=768,5),itemHeight:window.innerWidth<=768?8:10},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"white",left:0,right:0},boundaryGap:!1,data:h.map(n=>{const t=new Date(n.requestedDate);return v[t.getDay()]})},yAxis:{type:"value",show:!1},tooltip:{trigger:"axis",backgroundColor:"rgba(255, 255, 255, 0.3)",textStyle:{fontSize:window.innerWidth<=768?10:14,color:"rgba(100, 100, 100, 1)"},formatter:function(n){let t="<div>";return t+=`<div>${n[0].name}</div>`,n.forEach(o=>{t+='<div style="display: flex; align-items: center;">',t+=`<span style="color: ${o.color};margin-right: 5px;">●</span>`,t+=`<span style="font-weight: bold;">${o.seriesName}: ₹${o.value}</span>`,t+="</div>"}),t+="</div>",t}},series:[{data:h.map(n=>n.totalIncome),name:"This Week",type:"line",yAxisIndex:0,symbol:"none",itemStyle:{color:"green"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"green"},{offset:1,color:"rgba(0, 0, 0, 0)"}]}},smooth:!0,lineStyle:{width:3,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:5,shadowOffsetY:5}}]};return e.jsxs("div",{className:w.card3,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[e.jsxs("div",{className:w.cardHead,children:[e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:d("Sales")}),e.jsx("span",{children:e.jsx(k,{size:50})})]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",width:"100%",height:"30px"},children:[e.jsxs("div",{className:"mb-0",style:{display:"flex",alignItems:"center"},children:[e.jsxs("span",{style:{marginRight:"5px",fontSize:window.innerWidth>600?"1.1rem":"0.8rem"},children:[" ",f?"7 "+d("days"):d("Today")]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{style:{marginRight:"2px",marginTop:"6px",fontWeight:"bold",fontSize:window.innerWidth>600?".9rem":"0.7rem"},children:"₹"}),e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"2.1rem":"1.7rem",marginRight:"5px"},children:f?g:u})]})})]}),e.jsx("div",{style:{display:window.innerWidth>600?"flex":"none",alignItems:"flex-start"},children:e.jsxs("div",{style:{backgroundColor:"rgba(144, 238, 144, 0.7)",padding:"2px 4px",borderRadius:"20px",display:"inline-flex",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:y>0?"yellow":"rgba(255,0,0,0.6)"}}),e.jsx("i",{style:{marginLeft:"0px"},children:y>0?e.jsx(E,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"yellow"}}):e.jsx(q,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"rgba(255,0,0,0.6)"}})})]})})]}),e.jsx("div",{style:{display:"flex"},children:e.jsx(D,{option:b,style:{height:"80%",width:"100%"}})})]})})]})}export{$ as default};
