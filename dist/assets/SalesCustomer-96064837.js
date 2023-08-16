import{_ as re}from"./index-154f7bfb.js";import{r as d,u as je,L as Ne,j as e,T as De,P as le,Q as ke,R as ie,U as B,i as $e,A as Te,B as Be,C as Oe,E as Ee,G as qe,a as A}from"./vendor-5be16ce1.js";import{k as Pe,l as ze,E as Le,Q as j,a as ce,f as Ie,b as Ve}from"./NotoSansDevanagari-VariableFont_wdth_wght-d6392853.js";const Ae="_piechart_gw6wq_11",Re="_chartContainer_gw6wq_23",We="_legendButtonContainer_gw6wq_49",He="_legendButton_gw6wq_49",Me="_codeBlockIcon_gw6wq_133",Ue="_lightMode_gw6wq_191",Ge="_dateFilter_gw6wq_195",Ye="_officefilter_gw6wq_351",Qe="_topContainer_gw6wq_443",Je="_darkMode_gw6wq_463",Xe="_iconsContainer_gw6wq_631",Ke="_icon_gw6wq_631",Ze="_exportOptions_gw6wq_715",et="_exportOption_gw6wq_715",tt="_NoDataOverlay_gw6wq_861",ot="_tableContainer_gw6wq_993",at="_table_gw6wq_993",nt="_summaryHeader_gw6wq_1029",st="_periodHeader_gw6wq_1037",rt="_closeButton_gw6wq_1069",lt="_tableWrapper_gw6wq_1099",it="_loadingOverlay_gw6wq_1107",ct="_loadingSpinner_gw6wq_1133",dt="_boldOption_gw6wq_1145",ft="_optionGroup_gw6wq_1155",l={piechart:Ae,chartContainer:Re,"legend-text":"_legend-text_gw6wq_31",legendButtonContainer:We,legendButton:He,codeBlockIcon:Me,lightMode:Ue,"label-text":"_label-text_gw6wq_191",dateFilter:Ge,officefilter:Ye,topContainer:Qe,darkMode:Je,"theme-container":"_theme-container_gw6wq_473",iconsContainer:Xe,icon:Ke,exportOptions:Ze,exportOption:et,NoDataOverlay:tt,tableContainer:ot,table:at,summaryHeader:nt,periodHeader:st,closeButton:rt,tableWrapper:lt,loadingOverlay:it,loadingSpinner:ct,boldOption:dt,optionGroup:ft},xt=({themeMode:f,selectedRange:w,selectedOffice:X,isAdmin:de,alldata:R,officeName:O,isLoading:K})=>{const[h,_]=d.useState([]),[W,E]=d.useState(!1),H=d.useRef(null),M=d.useRef(null),Z=d.useRef(null),{t:o}=je(),[ut,ee]=d.useState(!1),[U,S]=d.useState([]),[N,te]=d.useState(!1),[p,fe]=d.useState("Name"),[C,ue]=d.useState([]),[v,pe]=d.useState([]),[F,he]=d.useState([]),[G,me]=d.useState(5);d.useEffect(()=>{const t=ae(w[0]),n=ae(w[1]);if(t&&n&&X&&R.graph4){const a=R.graph4,s=a.byName,r=a.byMobile,i=a.byVehicle;pe(r),he(i),ue(s)}},[w,X,de,R]);const ge={title:{textStyle:{color:f==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{data:[o("Visit"),o("Sales")],bottom:0,textStyle:{color:f==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:window.innerWidth<=768?"9%":"4%",right:"4%",top:"15%",bottom:"10%",containLabel:h.length>0},xAxis:[{type:"category",data:h.map(t=>t.filterName),axisPointer:{type:"shadow"},axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{color:f==="dark"?"#ffffff":"#000000",rotate:45,fontSize:11,formatter:t=>t.length>10?t.substring(0,10)+"...":t}}],yAxis:[{type:"value",name:o("Visit"),min:0,minInterval:1,axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{color:f==="dark"?"#ffffff":"#000000"}},{type:"value",name:o("Sales"),min:0,axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{color:f==="dark"?"#ffffff":"#000000",formatter:t=>t>=1e3?t/1e3+"k":t}}],series:[{name:o("Visit"),type:"bar",barWidth:"35%",data:h.map(t=>t.count),itemStyle:{borderRadius:[10,10,0,0]}},{name:o("Sales"),type:"line",yAxisIndex:1,data:h.map(t=>t.total),markPoint:{data:h.map((t,n)=>({value:t.total>=1e3?parseInt(t.total/1e3)+"k":t.total,xAxis:n,yAxis:t.total}))}}]},oe=t=>{let n="";const a=new Uint8Array(t),s=a.byteLength;for(let r=0;r<s;r++)n+=String.fromCharCode(a[r]);return window.btoa(n)},q=t=>{if(!t)return"";const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0");return`${String(t.getDate()).padStart(2,"0")}-${a}-${n}`},ae=t=>{if(!t)return"";const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${s}`},xe=async()=>{const t=j.loading("Please wait..."),n=q(w[0]),a=q(w[1]),s=await re(()=>import("./exceljs.min-fd769190.js").then(y=>y.e),["assets/exceljs.min-fd769190.js","assets/vendor-5be16ce1.js"]),r=new s.Workbook,i=r.addWorksheet("Data");fetch(ce).then(y=>y.blob()).then(async y=>{const D=new FileReader;D.onload=async function(){const Y=D.result,k=r.addImage({base64:Y,extension:"png"});i.addImage(k,{tl:{col:0,row:0},ext:{width:100,height:60}});const $=i.getCell("A1");$.value=`${o("Top Customers Summary Data")} (${O})`,$.font={bold:!0,color:{argb:"000000"},size:14},$.alignment={vertical:"middle",horizontal:"center"},i.mergeCells("A1:D1");const c=i.getCell("A2");c.value=`${o("Period")}: ${n} ${o("to")} ${a}`,c.font={bold:!0,color:{argb:"000000"},size:12},c.alignment={horizontal:"center"},i.mergeCells("A2:D2"),i.getColumn(1).width=15,i.getColumn(2).width=50,i.getColumn(3).width=15,i.getColumn(4).width=15;const P=i.addRow([o("#"),o(p),o("Visit"),o("Sales")]);P.font={bold:!0,color:{argb:"000000"},size:12},P.eachCell(u=>{u.font={bold:!0,color:{argb:"000000"},size:12},u.border={bottom:{style:"thin",color:{argb:"000000"}}}}),h.forEach((u,g)=>{const x=i.addRow([g+1,u.filterName,u.count,u.total]);x.getCell(1).alignment={horizontal:"left"},x.getCell(2).alignment={horizontal:"left"},x.getCell(3).alignment={horizontal:"right"},x.getCell(4).alignment={horizontal:"right"}});const T=i.addRow(["",o("Total"),"",""]);T.font={bold:!0,color:{argb:"000000"},size:12};const z=h.reduce((u,g)=>u+g.total,0),L=h.reduce((u,g)=>u+g.count,0),I=i.getCell(`C${T.number}`);I.value=`${L}`,I.alignment={horizontal:"right"};const V=i.getCell(`D${T.number}`);V.value=`₹ ${z.toFixed(2)}`,V.alignment={horizontal:"right"};const Q=`${Date.now()}Top_Customers_Summary_by${p}_${O}_${n}_${a}.xlsx`;r.xlsx.writeBuffer().then(async u=>{const g=new FormData;g.append("file",new Blob([u]),Q);try{const x=await A.post("https://def-dash-route-api.inspirigenceworks.co.in/api/uploader",g,{headers:{"Content-Type":"multipart/form-data"}});x.status==200?j.update(t,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):j.update(t,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const J=x.data.url;window.location.href=`https://def-dash-route-api.inspirigenceworks.co.in/static/downloads/${J}`}catch(x){console.error("Error saving Excel file:",x)}})},D.readAsDataURL(y)})},we=async()=>{const t=j.loading("Please wait..."),n=q(w[0]),a=q(w[1]),r=new URLSearchParams(window.location.search).get("lang"),i=await A.get(Ie,{responseType:"arraybuffer"}),y=oe(i.data),D=await A.get(Ve,{responseType:"arraybuffer"}),Y=oe(D.data);re(()=>import("./NotoSansDevanagari-VariableFont_wdth_wght-d6392853.js").then(k=>k.j),["assets/NotoSansDevanagari-VariableFont_wdth_wght-d6392853.js","assets/vendor-5be16ce1.js","assets/index-154f7bfb.js","assets/index-a647bc22.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css"]).then(async k=>{let $=k.default;const c=new $;c.addFileToVFS("NotoSansBengali.ttf",y),c.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),c.setFont("NotoSansBengali"),c.addFileToVFS("NotoSansDevanagari.ttf",Y),c.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),c.setFont("NotoSansDevanagari");const P=[[o("#"),o(p),o("Visit"),o("Sales")]],T={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},z={fontSize:12,fontStyle:"bold",halign:"center"},L={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},I=ce,V=35,ne=20;c.addImage(I,"PNG",15,12,V,ne);const Q=[[`${o("Top Customers Summary Data")} (${O})`]];c.autoTable({head:Q,body:[],headStyles:{...z,fillColor:L.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const u=[[`${o("Period")}: ${n} ${o("to")} ${a}`]];c.autoTable({startY:39.5,head:u,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let g=h.map((m,b)=>[b+1,m.filterName,`${m.count}`,`₹ ${parseFloat(m.total).toFixed(2)}`]);const x=h.reduce((m,b)=>m+b.total,0),J=h.reduce((m,b)=>m+b.count,0);g.push(["",o("Total"),J,`₹ ${x.toFixed(2)}`]);const Ce={startY:c.autoTable.previous.finalY+1,head:P,body:g,headStyles:{...z,fillColor:L.secondHeader,textColor:"#FFFFFF"},columnStyles:T,styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};c.autoTable(Ce);const ve=`${Date.now()}Top_Customerss_Summary_by${p}_${O}_${n}_${a}.pdf`,Fe=c.output("blob"),se=new FormData;se.append("file",Fe,ve);try{const m=await A.post("https://def-dash-route-api.inspirigenceworks.co.in/api/uploader",se,{headers:{"Content-Type":"multipart/form-data"}});m.status==200?j.update(t,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):j.update(t,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const b=await m.data.url;window.location.href=`https://def-dash-route-api.inspirigenceworks.co.in/static/downloads/${b}`}catch(m){console.error("Error saving PDF file:",m)}})};d.useEffect(()=>{const t=n=>{H.current&&!H.current.contains(n.target)&&M.current&&!M.current.contains(n.target)&&n.target.tagName!=="svg"&&n.target.tagName!=="path"&&E(!1),Z.current&&!Z.current.contains(n.target)&&ee(!1)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]);const ye=()=>{ee(!1),E(!W)};d.useEffect(()=>{_e(G)},[p,G,C,v,F]);const be=t=>{fe(t.target.value)},_e=t=>{if(t===10)p==="Name"?(_(C),S([...C,{filterName:o("Total"),total:C.reduce((n,a)=>n+a.total,0),count:C.reduce((n,a)=>n+a.count,0)}])):p==="Mobile"?(_(v),S([...v,{filterName:o("Total"),total:v.reduce((n,a)=>n+a.total,0),count:v.reduce((n,a)=>n+a.count,0)}])):p==="Vehicle"&&(_(F),S([...F,{filterName:o("Total"),total:F.reduce((n,a)=>n+a.total,0),count:F.reduce((n,a)=>n+a.count,0)}]));else if(p==="Name"){let a=C.slice().reverse().slice(0,5).map(s=>s);_(a.slice().reverse()),S([...a.slice().reverse(),{filterName:o("Total"),total:a.slice().reverse().reduce((s,r)=>s+r.total,0),count:a.slice().reverse().reduce((s,r)=>s+r.count,0)}])}else if(p==="Mobile"){let a=v.slice().reverse().slice(0,5).map(s=>s);_(a.slice().reverse()),S([...a.slice().reverse(),{filterName:o("Total"),total:a.slice().reverse().reduce((s,r)=>s+r.total,0),count:a.slice().reverse().reduce((s,r)=>s+r.count,0)}])}else if(p==="Vehicle"){let a=F.slice().reverse().slice(0,5).map(s=>s);_(a.slice().reverse()),S([...a.slice().reverse(),{filterName:o("Total"),total:a.slice().reverse().reduce((s,r)=>s+r.total,0),count:a.slice().reverse().reduce((s,r)=>s+r.count,0)}])}},Se=Ne({typography:{button:{textTransform:"none"}}});return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`${l.chartContainer} ${f==="dark"?l.darkMode:l.lightMode}`,children:[e.jsx(Pe,{position:"top-center",theme:f}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"d-flex w-100 g-0 align-items-start justify-content-between",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:`fw-bold me-2 fs-${window.innerWidth<=768?7:5} ${f==="dark"?l.darkMode:l.lightMode}`,children:o("")}),e.jsxs(De,{theme:Se,children:[e.jsxs(le,{sx:{mx:1,mt:1,minWidth:120},size:"small",children:[e.jsx(ke,{id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},children:o("Top Customers")}),e.jsxs(ie,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:p,onChange:be,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},label:o("Top Customers"),children:[e.jsx(B,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Name",children:o("Name")}),e.jsx(B,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Mobile",children:o("Mobile")}),e.jsx(B,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Vehicle",children:o("Vehicle")})]})]}),e.jsx(le,{sx:{mx:1,mt:1,minWidth:100},size:"small",children:e.jsxs(ie,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:G,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},onChange:t=>{me(t.target.value)},children:[e.jsxs(B,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:5,children:[o("Top")," 5"]}),e.jsxs(B,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:10,children:[o("Top")," 10"]})]})})]})]}),e.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:H,children:e.jsxs("div",{className:`${l.iconsContainer} d-flex justify-content-center align-items-center`,children:[e.jsx("div",{className:`${l.icon} ${f==="dark"?l.darkMode:l.lightMode} px-2 py-1`,onClick:ye,children:W?e.jsx($e,{style:{fontSize:"1.1rem"}}):e.jsx(Te,{style:{fontSize:"1.1rem"}})}),W&&e.jsxs("div",{className:`${l.exportOptions} ${f==="dark"?l.darkMode:l.lightMode}`,ref:M,children:[N?e.jsxs("div",{className:l.exportOption,onClick:()=>{te(!N),E(!1)},children:[e.jsx(Oe,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),e.jsx("span",{children:o("View Graph")})]}):e.jsxs("div",{className:l.exportOption,onClick:()=>{te(!N),E(!1)},children:[e.jsx(Be,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),e.jsx("span",{children:o("View Table")})]}),e.jsxs("div",{className:l.exportOption,onClick:xe,children:[e.jsx(Ee,{style:{fontSize:"1.1rem",color:"green"}}),e.jsx("span",{children:o("Export to Excel")})]}),e.jsxs("div",{className:l.exportOption,onClick:we,children:[e.jsx(qe,{style:{fontSize:"1.1rem",color:"red"}}),e.jsx("span",{children:o("Export to PDF")})]})]})]})})]})}),K&&e.jsx("div",{className:l.loadingOverlay,children:e.jsx("img",{src:ze,alt:"Loading...",width:50,height:50})}),U.length==1&&!N&&!K?e.jsx("div",{className:`${l.NoDataOverlay} fs-5`,children:o("No Data Found")}):"",N?e.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"333px"},children:e.jsxs("table",{className:`table  ${f=="dark"?"table-dark":""}`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"#"}),e.jsx("th",{scope:"col",children:o(p)}),e.jsx("th",{scope:"col",children:o("Visit")}),e.jsxs("th",{scope:"col",children:[o("Sales"),"(₹)"]})]})}),e.jsx("tbody",{children:U.map((t,n)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:U.length-1===n?"":n+1}),e.jsx("td",{children:t.filterName}),e.jsx("td",{children:t.count}),e.jsx("td",{children:parseFloat(t.total).toFixed(2)})]},t.filterName))})]})}):e.jsx(Le,{option:ge,style:{height:"341px",width:"100%",maxWidth:"2300px"},className:l.piechart},h.length)]})})};export{xt as default};
