import{u as C,r as l,j as e,z as F,x as q,y as I,a as M}from"./vendor-d2d59fe7.js";import{c as v}from"./index-4d89e49a.js";import{R as N}from"./index-ac977246.js";function U({countExpense:L,totalExpense:j,todayExpense:b,alldata:P,selectedRange:B,officeId:W,adminStatus:$}){const{t:d}=C(),[f,T]=l.useState({current7Days:[],previous7Days:[]}),[g,w]=l.useState(!0),[i,z]=l.useState(0),u=t=>{if(!t)return"";const s=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),c=String(t.getDate()).padStart(2,"0");return`${s}-${o}-${c}`};l.useEffect(()=>{const t=new Date,s=new Date(t),o=new Date(t);o.setDate(t.getDate()-13);async function c(){const h=(await M.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${u(o)}/${u(s)}/${W}/${$}`)).data.graph1;if(Array.isArray(h)){const m=h.map(n=>({requestedDate:new Date(n.requestedDate),expense:n.totalExpense})),y=new Date,r=new Date(y);r.setDate(y.getDate()-7);const p=m.filter(n=>{const a=new Date(n.requestedDate);return a>=r&&a<=y}),D=new Date(r);D.setDate(r.getDate()-7);const x=m.filter(n=>{const a=new Date(n.requestedDate);return a>=D&&a<r}),R=p.reduce((n,a)=>n+a.expense,0),S=x.reduce((n,a)=>n+a.expense,0),A=(R-S)/S*100;console.log(i),z(A),console.log(p),console.log(x),T({current7Days:p,previous7Days:x})}else console.log("Invalid data format:",h)}c()},[]);const E=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],k={grid:{left:12,right:12,top:10,bottom:50},legend:{textStyle:{color:"white",fontSize:window.innerWidth<=768?8:12},data:["This Week"],top:100,right:0,itemWidth:(window.innerWidth<=768,5),itemHeight:window.innerWidth<=768?8:10},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"white",left:0,right:0},boundaryGap:!1,data:f.current7Days.map(t=>{const s=new Date(t.requestedDate);return E[s.getDay()]})},yAxis:{type:"value",show:!1},tooltip:{trigger:"axis",backgroundColor:"rgba(0, 0, 0, 0)",textStyle:{fontSize:window.innerWidth<=768?10:14,color:"white"},formatter:function(t){let s="<div>";return s+=`<div>${t[0].name}</div>`,t.forEach(o=>{s+='<div style="display: flex; align-items: center;">',s+=`<span style="color: ${o.color}; margin-right: 5px;">●</span>`,s+=`<span style="font-weight: bold;">${o.seriesName}: ₹${o.value}</span>`,s+="</div>"}),s+="</div>",s}},series:[{data:f.current7Days.map(t=>t.expense),name:"This Week",type:"line",yAxisIndex:0,symbol:"none",itemStyle:{color:"pink"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 105, 180)"},{offset:1,color:"rgba(0, 0, 0, 0)"}]}},smooth:!0,lineStyle:{width:3,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:5,shadowOffsetY:5}}]};return e.jsxs("div",{className:v.card4,children:[e.jsxs("div",{className:v.cardHead,children:[e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:d("Expense")}),e.jsx("span",{children:e.jsx(F,{size:50})})]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",width:"100%"},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[e.jsxs("div",{className:"mb-0",style:{display:"flex",alignItems:"center"},children:[e.jsxs("span",{style:{marginRight:"5px",fontSize:window.innerWidth>600?"1.1rem":"1rem"},children:[" ",g?d("Today"):"7 "+d("days")]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{style:{marginRight:"2px",marginTop:"6px",fontWeight:"bold",fontSize:window.innerWidth>600?".9rem":"0.7rem"},children:"₹"}),e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"2.1rem":"1.9rem",marginRight:"5px"},children:g?b:j})]})})]}),e.jsx("div",{style:{display:window.innerWidth>600?"flex":"none",alignItems:"flex-start"},children:e.jsxs("div",{style:{backgroundColor:"#edd8bacc",padding:"2px 4px",borderRadius:"20px",display:"inline-flex",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:i>0?"yellow":"rgba(255,0,0,0.6)"},children:`${i.toFixed(0)}%`}),e.jsx("i",{style:{marginLeft:"0px"},children:i>0?e.jsx(q,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"yellow"}}):e.jsx(I,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"rgba(255,0,0,0.6)"}})})]})})]}),e.jsx("div",{style:{display:"flex"},children:e.jsx(N,{option:k,style:{height:"120%",width:"100%"}})})]})})]})}export{U as default};
