import{u as k,r as o,j as e,z as A,F as C,y as I}from"./vendor-558e122b.js";import{c as v}from"./index-f87c0876.js";import{R as q}from"./index-f49dd30b.js";function H({countExpense:F,totalExpense:S,todayExpense:j,alldata:M,selectedRange:N,officeId:L,adminStatus:$,expenseCardData:h}){const{t:l}=k(),[y,b]=o.useState({current7Days:[],previous7Days:[]}),[x,f]=o.useState(!0),[p,W]=o.useState(0);o.useEffect(()=>{const n=new Date;new Date(n).setDate(n.getDate()-13);async function i(){const d=h;if(Array.isArray(d)){const w=d.map(s=>({requestedDate:new Date(s.requestedDate),expense:s.totalExpense})),c=new Date,r=new Date(c);r.setDate(c.getDate()-7);const u=w.filter(s=>{const a=new Date(s.requestedDate);return a>=r&&a<=c}),g=new Date(r);g.setDate(r.getDate()-7);const m=w.filter(s=>{const a=new Date(s.requestedDate);return a>=g&&a<r}),E=u.reduce((s,a)=>s+a.expense,0),D=m.reduce((s,a)=>s+a.expense,0),R=Math.min((E-D)/D*100,100);W(R),b({current7Days:u,previous7Days:m})}else console.log("Invalid data format:",d)}i()},[h]);const z=["Su","Mo","Tu","We","Th","Fr","Sa"],T={grid:{left:12,right:12,top:10,bottom:20},legend:{show:!1,textStyle:{color:"white",fontSize:window.innerWidth<=768?8:12},top:20,left:"center",itemWidth:(window.innerWidth<=768,5),itemHeight:window.innerWidth<=768?8:10},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"white",left:0,right:0},boundaryGap:!1,data:y.current7Days.map(n=>{const t=new Date(n.requestedDate);return z[t.getDay()]})},yAxis:{type:"value",show:!1},tooltip:{trigger:"axis",backgroundColor:"rgba(0, 0, 0, 0)",textStyle:{fontSize:window.innerWidth<=768?10:14,color:"white"},formatter:function(n){let t="<div>";return t+=`<div>${n[0].name}</div>`,n.forEach(i=>{t+='<div style="display: flex; align-items: center;">',t+=`<span style="color: ${i.color}; margin-right: 5px;">●</span>`,t+=`<span style="font-weight: bold;">${i.seriesName}: ₹${i.value}</span>`,t+="</div>"}),t+="</div>",t}},series:[{data:y.current7Days.map(n=>n.expense),name:"This Week",type:"line",yAxisIndex:0,symbol:"none",itemStyle:{color:"pink"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 105, 180)"},{offset:1,color:"rgba(0, 0, 0, 0)"}]}},smooth:!0,lineStyle:{width:3,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:5,shadowOffsetY:5}}]};return e.jsxs("div",{className:v.card4,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[e.jsxs("div",{className:v.cardHead,children:[e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:l("Expense")}),e.jsx("span",{children:e.jsx(A,{size:50})})]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",width:"100%",height:"30px"},children:[e.jsxs("div",{className:"mb-0",style:{display:"flex",alignItems:"center"},children:[e.jsxs("span",{style:{marginRight:"5px",fontSize:window.innerWidth>600?"1.1rem":"0.8rem"},children:[" ",x?"7 "+l("days"):l("Today")]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{style:{marginRight:"2px",marginTop:"6px",fontWeight:"bold",fontSize:window.innerWidth>600?".9rem":"0.7rem"},children:"₹"}),e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"2.1rem":"1.7rem",marginRight:"5px"},children:x?S:j})]})})]}),e.jsx("div",{style:{display:window.innerWidth>600?"flex":"none",alignItems:"flex-start"},children:e.jsxs("div",{style:{backgroundColor:"rgba(255, 105, 180)",padding:"2px 4px",borderRadius:"20px",display:"inline-flex",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:p>0?"yellow":"rgba(255,0,0,0.6)"}}),e.jsx("i",{style:{marginLeft:"0px"},children:p>0?e.jsx(C,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"yellow"}}):e.jsx(I,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"rgba(255,0,0,0.6)"}})})]})})]}),e.jsx("div",{style:{display:"flex"},children:e.jsx(q,{option:T,style:{height:"80%",width:"100%"}})})]})})]})}export{H as default};