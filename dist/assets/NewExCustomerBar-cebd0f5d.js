import{_ as Ce}from"./index-4ba0ae3d.js";import{r as p,u as Pe,a6 as Me,j as t,a7 as ze,ab as ge,ac as he,ad as fe,ae as M,i as Re,_ as Ae,$ as Ve,a0 as We,a1 as He,a2 as Ge,a as G}from"./vendor-354e7dac.js";import{l as Ue}from"./ReactToastify-b73db116.js";import{k as Ye,Q as q,l as xe,f as Je,a as Qe}from"./NotoSansDevanagari-VariableFont_wdth_wght-6bc64ea6.js";import"./jspdf.es.min-a0d00155.js";const Xe="_piechart_1hrwn_11",Ke="_chartContainer_1hrwn_23",Ze="_legendButtonContainer_1hrwn_49",et="_legendButton_1hrwn_49",tt="_codeBlockIcon_1hrwn_133",st="_lightMode_1hrwn_191",ot="_dateFilter_1hrwn_195",nt="_officefilter_1hrwn_351",at="_topContainer_1hrwn_443",rt="_darkMode_1hrwn_463",lt="_iconsContainer_1hrwn_631",it="_icon_1hrwn_631",ut="_exportOptions_1hrwn_715",ct="_exportOption_1hrwn_715",dt="_NoDataOverlay_1hrwn_861",mt="_tableContainer_1hrwn_993",Ct="_table_1hrwn_993",gt="_summaryHeader_1hrwn_1029",ht="_periodHeader_1hrwn_1037",ft="_closeButton_1hrwn_1069",xt="_tableWrapper_1hrwn_1099",pt="_loadingOverlay_1hrwn_1107",wt="_loadingSpinner_1hrwn_1133",St="_boldOption_1hrwn_1145",bt="_optionGroup_1hrwn_1155",y={piechart:Xe,chartContainer:Ke,"legend-text":"_legend-text_1hrwn_31",legendButtonContainer:Ze,legendButton:et,codeBlockIcon:tt,lightMode:st,"label-text":"_label-text_1hrwn_191",dateFilter:ot,officefilter:nt,topContainer:at,darkMode:rt,"theme-container":"_theme-container_1hrwn_473",iconsContainer:lt,icon:it,exportOptions:ut,exportOption:ct,NoDataOverlay:dt,tableContainer:mt,table:Ct,summaryHeader:gt,periodHeader:ht,closeButton:ft,tableWrapper:xt,loadingOverlay:pt,loadingSpinner:wt,boldOption:St,optionGroup:bt},qt=({echarts:z,ReactECharts:pe,themeMode:_,selectedRange:R,selectedOffice:yt,isAdmin:Nt,alldata:Dt,showGraph:ae,officeName:A,isLoading:re,newExData:le})=>{const[we,_t]=p.useState([]),[U,V]=p.useState(!1),Y=p.useRef(null),J=p.useRef(null),Q=p.useRef(null),{t:s}=Pe(),[Et,ie]=p.useState(!1),[N,X]=p.useState([]),[Se,Ft]=p.useState(!0),[W,K]=p.useState(!1),[j,be]=p.useState("Name"),[Z,ye]=p.useState("Count"),[w,Ne]=p.useState([]),[S,De]=p.useState([]),[b,_e]=p.useState([]);p.useState(5),p.useState([]);const[ue,jt]=p.useState("Customers");p.useState([]),p.useEffect(()=>{(async()=>{try{const r=le;if(r.graph2){const l=r.graph2.byName,C=r.graph2.byMobile,u=r.graph2.byVehicle,o=l.existingCustomer.map(n=>({requestedDate:n.requestedDate,count:n.count,sales:n.sales})),i=l.newCustomer.map(n=>({requestedDate:n.requestedDate,count:n.count,sales:n.sales})),d=C.existingCustomer.map(n=>({requestedDate:n.requestedDate,count:n.count,sales:n.sales})),g=C.newCustomer.map(n=>({requestedDate:n.requestedDate,count:n.count,sales:n.sales})),k=u.existingCustomer.map(n=>({requestedDate:n.requestedDate,count:n.count,sales:n.sales})),F=u.newCustomer.map(n=>({requestedDate:n.requestedDate,count:n.count,sales:n.sales}));Ne({existingCustomer:o,newCustomer:i}),De({existingCustomer:d,newCustomer:g}),_e({existingCustomer:k,newCustomer:F});let h=[];switch(j){case"Name":h=o.map((n,f)=>({"#":f+1,Date:n.requestedDate,"New Customer Count":i[f].count,"Existing Customer Count":n.count,"New Customer Sales":i[f].sales,"Existing Customer Sales":n.sales}));break;case"Mobile":h=d.map((n,f)=>({"#":f+1,Date:n.requestedDate,"New Customer Count":g[f].count,"Existing Customer Count":n.count,"New Customer Sales":g[f].sales,"Existing Customer Sales":n.sales}));break;case"Vehicle":h=k.map((n,f)=>({"#":f+1,Date:n.requestedDate,"New Customer Count":F[f].count,"Existing Customer Count":n.count,"New Customer Sales":F[f].sales,"Existing Customer Sales":n.sales}));break;default:return}const L=h.reduce((n,f)=>n+f["New Customer Count"],0),P=h.reduce((n,f)=>n+f["Existing Customer Count"],0),D=h.reduce((n,f)=>n+f["New Customer Sales"],0),T=h.reduce((n,f)=>n+f["Existing Customer Sales"],0);h.push({"#":"",Date:s("Total"),"New Customer Count":L,"Existing Customer Count":P,"New Customer Sales":`₹ ${D.toFixed(2)}`,"Existing Customer Sales":`₹ ${T.toFixed(2)}`}),X(h)}}catch(r){console.error("Error fetching data:",r)}})()},[le]),p.useEffect(()=>{K(!ae)},[ae]);const B=()=>{const e=(w==null?void 0:w.existingCustomer)||[],r=(w==null?void 0:w.newCustomer)||[],l=(S==null?void 0:S.existingCustomer)||[],C=(S==null?void 0:S.newCustomer)||[],u=(b==null?void 0:b.existingCustomer)||[],o=(b==null?void 0:b.newCustomer)||[];switch(j){case"Name":return{existingCustomer:e,newCustomer:r};case"Mobile":return{existingCustomer:l,newCustomer:C};case"Vehicle":return{existingCustomer:u,newCustomer:o};default:return{}}};function v(e,r){var l=parseInt(e.substring(1,3),16),C=parseInt(e.substring(3,5),16),u=parseInt(e.substring(5,7),16);l=parseInt(l*(100+r)/100),C=parseInt(C*(100+r)/100),u=parseInt(u*(100+r)/100),l=l<255?l:255,C=C<255?C:255,u=u<255?u:255,l=Math.round(l),C=Math.round(C),u=Math.round(u);var o=l.toString(16).length==1?"0"+l.toString(16):l.toString(16),i=C.toString(16).length==1?"0"+C.toString(16):C.toString(16),d=u.toString(16).length==1?"0"+u.toString(16):u.toString(16);return"#"+o+i+d}function ce(){const e=B().existingCustomer;if(!e||e.length===0)return 0;const r=new Date(e[0].requestedDate),l=new Date(e[e.length-1].requestedDate),C=Math.abs(l-r);return Math.floor(C/(1e3*3600*24))}const Ee={xAxis:{type:"time",axisLabel:{hideOverlap:!0,formatter:"{d} {MMM}",interval:0,rotate:window.innerWidth<768?45:0,color:_==="dark"?"#ffffff":"#000000"},axisPointer:{label:{formatter:function(e){let r=new Date(e.value);return I(r)}}},data:B().existingCustomer.map(e=>e.requestedDate)},yAxis:Z=="Count"?[{type:"value",name:"",axisLabel:{color:_==="dark"?"#ffffff":"#000000"},axisLine:{lineStyle:{color:_==="dark"?"#ffffff":"#000000"}}}]:[{type:"value",name:"",axisLabel:{color:_==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e3?e/1e3+"k":e},axisLine:{lineStyle:{color:_==="dark"?"#ffffff":"#000000"}}}],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:window.innerWidth<=768?"10%":"4%",right:"5%",top:"10%",bottom:"12%",containLabel:!0},series:Z=="Count"?[{name:s("Existing Customer Count"),type:ce()>30?"line":"bar",areaStyle:{color:new z.graphic.LinearGradient(0,1,0,0,[{offset:1,color:v("#8080ff",10)},{offset:0,color:v("#8080ff",-10)}])},symbol:"none",smooth:!0,step:!0,stack:"total",barWidth:"40%",emphasis:{focus:"series"},data:B().existingCustomer.map(e=>[e.requestedDate,e.count]),yAxisIndex:0,itemStyle:{borderRadius:[5,5,5,5],color:new z.graphic.LinearGradient(0,1,0,0,[{offset:1,color:v("#8080ff",10)},{offset:0,color:v("#8080ff",-10)}])}},{name:s("New Customer Count"),step:!0,type:ce()>30?"line":"bar",areaStyle:{color:new z.graphic.LinearGradient(0,1,0,0,[{offset:1,color:v("#3cb043",10)},{offset:0,color:v("#3cb043",-10)}])},symbol:"none",smooth:!0,stack:"total",barWidth:"40%",emphasis:{focus:"series"},data:B().newCustomer.map(e=>[e.requestedDate,e.count]),yAxisIndex:0,itemStyle:{borderRadius:[5,5,5,5],color:new z.graphic.LinearGradient(0,1,0,0,[{offset:1,color:v("#3cb043",10)},{offset:0,color:v("#3cb043",-10)}])}}]:[{name:s("Existing Customer Sales"),type:"line",symbol:"none",stack:"total2",data:B().existingCustomer.map(e=>[e.requestedDate,e.sales]),yAxisIndex:0,itemStyle:{color:"blue"}},{name:s("New Customer Sales"),type:"line",symbol:"none",stack:"total2",data:B().newCustomer.map(e=>[e.requestedDate,e.sales]),yAxisIndex:0,itemStyle:{color:"green"}}],legend:{bottom:"0",textStyle:{color:_==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?12:14,padding:4},formatter:function(e){return window.innerWidth<768?e.split(" ").slice(0,2).join(" "):e}}},de=e=>{let r="";const l=new Uint8Array(e),C=l.byteLength;for(let u=0;u<C;u++)r+=String.fromCharCode(l[u]);return window.btoa(r)},I=e=>{if(!e)return"";const r=e.getFullYear(),l=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${l}-${r}`},Fe=async()=>{const e=q.loading("Please wait..."),r=I(R[0]),l=I(R[1]),C=await Ce(()=>import("./exceljs.min-21b94465.js").then(i=>i.e),["assets/exceljs.min-21b94465.js","assets/vendor-354e7dac.js"]),u=new C.Workbook,o=u.addWorksheet("Data");fetch(xe).then(i=>i.blob()).then(async i=>{const d=new FileReader;d.onload=async function(){const g=d.result,k=u.addImage({base64:g,extension:"png"});o.addImage(k,{tl:{col:0,row:0},ext:{width:100,height:60}});const F=o.getCell("A1");F.value=`${s("Customers Summary Data")} (${A})`,F.font={bold:!0,color:{argb:"000000"},size:14},F.alignment={vertical:"middle",horizontal:"center"},o.mergeCells("A1:F1");const h=o.getCell("A2");h.value=`${s("Period")}: ${r} ${s("to")} ${l}`,h.font={bold:!0,color:{argb:"000000"},size:12},h.alignment={horizontal:"center"},o.mergeCells("A2:F2"),o.getColumn(1).width=10,o.getColumn(2).width=15,o.getColumn(3).width=15,o.getColumn(4).width=15,o.getColumn(5).width=15,o.getColumn(6).width=15;const L=o.addRow(["","",s("Existing Customers"),"",s("New Customers"),""]),P=o.addRow(["#",s("Date"),s("Count"),s("Sales"),s("Count"),s("Sales")]);o.mergeCells("C3:D3"),o.mergeCells("E3:F3"),[L,P].forEach(a=>{a.eachCell(m=>{m.font={bold:!0,color:{argb:"000000"},size:12},m.alignment={horizontal:"center",vertical:"middle"}})});let D=[];switch(j){case"Name":D=w.existingCustomer.map((a,m)=>({"#":m+1,Date:a.requestedDate,"New Customer Count":w.newCustomer[m].count,"Existing Customer Count":a.count,"New Customer Sales":w.newCustomer[m].sales,"Existing Customer Sales":a.sales}));break;case"Mobile":D=S.existingCustomer.map((a,m)=>({"#":m+1,Date:a.requestedDate,"New Customer Count":S.newCustomer[m].count,"Existing Customer Count":a.count,"New Customer Sales":S.newCustomer[m].sales,"Existing Customer Sales":a.sales}));break;case"Vehicle":D=b.existingCustomer.map((a,m)=>({"#":m+1,Date:a.requestedDate,"New Customer Count":b.newCustomer[m].count,"Existing Customer Count":a.count,"New Customer Sales":b.newCustomer[m].sales,"Existing Customer Sales":a.sales}));break;default:return}D.forEach((a,m)=>{o.addRow([a["#"],a.Date,a["Existing Customer Count"],a["Existing Customer Sales"],a["New Customer Count"],a["New Customer Sales"]]).eachCell((O,H)=>{H===1||H===2?O.alignment={horizontal:"left"}:O.alignment={horizontal:"right"}})});const T=D.reduce((a,m)=>a+m["New Customer Count"],0),n=D.reduce((a,m)=>a+m["Existing Customer Count"],0),f=D.reduce((a,m)=>a+m["New Customer Sales"],0),ee=D.reduce((a,m)=>a+m["Existing Customer Sales"],0),te=`₹ ${f.toFixed(2)}`,se=`₹ ${ee.toFixed(2)}`,E=o.addRow(["",s("Total"),T,n,te,se]);E.font={bold:!0,color:{argb:"000000"},size:12},E.eachCell(a=>{a.column===2?(a.value=s("Total"),a.alignment={horizontal:"left"}):a.column===3||a.column===4?(a.value="",a.alignment={horizontal:"right"}):a.alignment={horizontal:"right"}});const ne=`${Date.now()}Customers_Summary_by${j}${A}${r}_${l}.xlsx`;u.xlsx.writeBuffer().then(async a=>{const m=new FormData;m.append("file",new Blob([a]),ne);try{const $=await G.post("https://def-dash-route-api.inspirigenceworks.co.in/api/uploader",m,{headers:{"Content-Type":"multipart/form-data"}});$.status==200?q.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):q.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const O=$.data.url;window.location.href=`https://def-dash-route-api.inspirigenceworks.co.in/static/downloads/${O}`}catch($){console.error("Error saving Excel file:",$)}})},d.readAsDataURL(i)})},je=async()=>{const e=q.loading("Please wait..."),r=I(R[0]),l=I(R[1]),u=new URLSearchParams(window.location.search).get("lang"),o=await G.get(Je,{responseType:"arraybuffer"}),i=de(o.data),d=await G.get(Qe,{responseType:"arraybuffer"}),g=de(d.data);Ce(()=>import("./jspdf.es.min-a0d00155.js").then(k=>k.j),["assets/jspdf.es.min-a0d00155.js","assets/index-4ba0ae3d.js","assets/vendor-354e7dac.js","assets/index-773aaf3f.css"]).then(async k=>{let F=k.default;const h=new F;h.addFileToVFS("NotoSansBengali.ttf",i),h.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),h.setFont("NotoSansBengali"),h.addFileToVFS("NotoSansDevanagari.ttf",g),h.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),h.setFont("NotoSansDevanagari");const L=[["","",{content:s("Existing Customers"),colSpan:2,styles:{halign:"center"}},{content:s("New Customers"),colSpan:2,styles:{halign:"center"}}],["#",s("Date"),s("Count"),s("Sales"),s("Count"),s("Sales")]],P={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"},4:{halign:"center"},5:{halign:"center"}},D={fontSize:12,fontStyle:"bold",halign:"center"},T={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},n=xe,f=35,ee=20;h.addImage(n,"PNG",15,12,f,ee);const te=[[`${s("Customers Summary Data")} (${A})`]];h.autoTable({head:te,body:[],headStyles:{...D,fillColor:T.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:u==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const se=[[`${s("Period")}: ${r} ${s("to")} ${l}`]];h.autoTable({startY:39.5,head:se,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:u==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let E=[];switch(j){case"Name":E=w.existingCustomer.map((c,x)=>({"#":x+1,Date:c.requestedDate,"New Customer Count":w.newCustomer[x].count,"Existing Customer Count":c.count,"New Customer Sales":w.newCustomer[x].sales,"Existing Customer Sales":c.sales}));break;case"Mobile":E=S.existingCustomer.map((c,x)=>({"#":x+1,Date:c.requestedDate,"New Customer Count":S.newCustomer[x].count,"Existing Customer Count":c.count,"New Customer Sales":S.newCustomer[x].sales,"Existing Customer Sales":c.sales}));break;case"Vehicle":E=b.existingCustomer.map((c,x)=>({"#":x+1,Date:c.requestedDate,"New Customer Count":b.newCustomer[x].count,"Existing Customer Count":c.count,"New Customer Sales":b.newCustomer[x].sales,"Existing Customer Sales":c.sales}));break;default:return}let oe=E.map((c,x)=>[c["#"],c.Date,c["Existing Customer Count"],c["Existing Customer Sales"],c["New Customer Count"],c["New Customer Sales"]]);const ne=E.reduce((c,x)=>c+x["New Customer Count"],0),a=E.reduce((c,x)=>c+x["Existing Customer Count"],0),m=E.reduce((c,x)=>c+x["New Customer Sales"],0),$=E.reduce((c,x)=>c+x["Existing Customer Sales"],0),O=`₹ ${m.toFixed(2)}`,H=`₹ ${$.toFixed(2)}`,Oe=["",s("Total"),a,H,ne,O];oe.push(Oe);const qe={startY:h.autoTable.previous.finalY+1,head:L,body:oe,headStyles:{...D,fillColor:T.secondHeader,textColor:"#FFFFFF"},columnStyles:P,styles:{font:u==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};h.autoTable(qe);const Ie=`${Date.now()}Top_Customerss_Summary_by${j}${A}${r}_${l}.pdf`,Le=h.output("blob"),me=new FormData;me.append("file",Le,Ie);try{const c=await G.post("https://def-dash-route-api.inspirigenceworks.co.in/api/uploader",me,{headers:{"Content-Type":"multipart/form-data"}});c.status==200?q.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):q.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const x=await c.data.url;window.location.href=`https://def-dash-route-api.inspirigenceworks.co.in/static/downloads/${x}`}catch(c){console.error("Error saving PDF file:",c)}})};p.useEffect(()=>{const e=r=>{Y.current&&!Y.current.contains(r.target)&&J.current&&!J.current.contains(r.target)&&r.target.tagName!=="svg"&&r.target.tagName!=="path"&&V(!1),Q.current&&!Q.current.contains(r.target)&&ie(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const ve=e=>{const r=e.target.value;be(r);let l=[];switch(r){case"Name":l=w.existingCustomer.map((d,g)=>({"#":g+1,Date:d.requestedDate,"New Customer Count":w.newCustomer[g].count,"Existing Customer Count":d.count,"New Customer Sales":w.newCustomer[g].sales,"Existing Customer Sales":d.sales}));break;case"Mobile":l=S.existingCustomer.map((d,g)=>({"#":g+1,Date:d.requestedDate,"New Customer Count":S.newCustomer[g].count,"Existing Customer Count":d.count,"New Customer Sales":S.newCustomer[g].sales,"Existing Customer Sales":d.sales}));break;case"Vehicle":l=b.existingCustomer.map((d,g)=>({"#":g+1,Date:d.requestedDate,"New Customer Count":b.newCustomer[g].count,"Existing Customer Count":d.count,"New Customer Sales":b.newCustomer[g].sales,"Existing Customer Sales":d.sales}));break;default:return}const C=l.reduce((d,g)=>d+g["New Customer Count"],0),u=l.reduce((d,g)=>d+g["Existing Customer Count"],0),o=l.reduce((d,g)=>d+g["New Customer Sales"],0),i=l.reduce((d,g)=>d+g["Existing Customer Sales"],0);l.push({"#":"",Date:s("Total"),"New Customer Count":C,"Existing Customer Count":u,"New Customer Sales":`₹ ${o.toFixed(2)}`,"Existing Customer Sales":`₹ ${i.toFixed(2)}`}),X(l)},ke=Me({typography:{button:{textTransform:"none"}}}),$e=()=>{ie(!1),V(!U)},Be=()=>{V(!1),K(!W)},Te=()=>{let e=[];switch(j){case"Name":e=w.existingCustomer.map((o,i)=>({"#":i+1,Date:o.requestedDate,"New Customer Count":w.newCustomer[i].count,"Existing Customer Count":o.count,"New Customer Sales":w.newCustomer[i].sales,"Existing Customer Sales":o.sales}));break;case"Mobile":e=S.existingCustomer.map((o,i)=>({"#":i+1,Date:o.requestedDate,"New Customer Count":S.newCustomer[i].count,"Existing Customer Count":o.count,"New Customer Sales":S.newCustomer[i].sales,"Existing Customer Sales":o.sales}));break;case"Vehicle":e=b.existingCustomer.map((o,i)=>({"#":i+1,Date:o.requestedDate,"New Customer Count":b.newCustomer[i].count,"Existing Customer Count":o.count,"New Customer Sales":b.newCustomer[i].sales,"Existing Customer Sales":o.sales}));break;default:return}const r=e.reduce((o,i)=>o+i["New Customer Count"],0),l=e.reduce((o,i)=>o+i["Existing Customer Count"],0),C=e.reduce((o,i)=>o+i["New Customer Sales"],0),u=e.reduce((o,i)=>o+i["Existing Customer Sales"],0);e.push({"#":"",Date:s("Total"),"New Customer Count":r,"Existing Customer Count":l,"New Customer Sales":`₹ ${C.toFixed(2)}`,"Existing Customer Sales":`₹ ${u.toFixed(2)}`}),X(e),K(!0),V(!1)};return t.jsx(t.Fragment,{children:t.jsxs("div",{ref:Q,className:`${y.chartContainer} ${_==="dark"?y.darkMode:y.lightMode}`,children:[t.jsx(Ye,{position:"top-center",theme:_}),t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsx("div",{className:"d-flex align-items-center",children:t.jsxs(ze,{theme:ke,children:[t.jsxs(ge,{sx:{mx:1,mt:1,minWidth:120},size:"small",children:[t.jsx(he,{id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},children:s(ue)}),t.jsxs(fe,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:j,onChange:ve,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},label:s(ue),children:[t.jsx(M,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Name",children:s("Name")}),t.jsx(M,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Mobile",children:s("Mobile")}),t.jsx(M,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Vehicle",children:s("Vehicle")})]})]}),t.jsxs(ge,{sx:{mx:1,mt:1,minWidth:90},size:"small",children:[t.jsx(he,{id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},children:s("Filter")}),t.jsxs(fe,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:Z,onChange:e=>ye(e.target.value),style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},label:s("Filter"),children:[t.jsx(M,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Count",children:s("Count")}),t.jsx(M,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Sales",children:s("Sales")})]})]})]})}),t.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:Y,children:t.jsxs("div",{className:`${y.iconsContainer} d-flex justify-content-center align-items-center`,children:[t.jsx("div",{className:`${y.icon} ${_==="dark"?y.darkMode:y.lightMode} px-2 py-1`,onClick:$e,children:U?t.jsx(Re,{style:{fontSize:"1.1rem"}}):t.jsx(Ae,{style:{fontSize:"1.1rem"}})}),U&&t.jsxs("div",{className:`${y.exportOptions} ${_==="dark"?y.darkMode:y.lightMode}`,ref:J,children:[W?t.jsxs("div",{className:y.exportOption,onClick:Be,children:[t.jsx(We,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),t.jsx("span",{children:s("View Graph")})]}):t.jsxs("div",{className:y.exportOption,onClick:Te,children:[t.jsx(Ve,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:s("View Table")})]}),t.jsxs("div",{className:y.exportOption,onClick:Fe,children:[t.jsx(He,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:s("Export to Excel")})]}),t.jsxs("div",{className:y.exportOption,onClick:je,children:[t.jsx(Ge,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:s("Export to PDF")})]})]})]})})]})}),re&&t.jsx("div",{className:y.loadingOverlay,children:t.jsx("img",{src:Ue,alt:"Loading...",width:50,height:50})}),N.length>0&&N[N.length-1]["Existing Customer Count"]==0&&N[N.length-1]["New Customer Count"]==0&&!W&&!re?t.jsx("div",{className:`${y.NoDataOverlay} fs-5`,children:s("No Data Found")}):null,W?t.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"290px"},children:t.jsxs("table",{className:`table ${_=="dark"?"table-dark":""}`,children:[t.jsxs("thead",{children:[t.jsxs("tr",{children:[t.jsx("th",{colSpan:"2"}),t.jsx("th",{colSpan:"2",children:s("Existing Customers")}),t.jsx("th",{colSpan:"2",children:s("New Customers")})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"#"}),t.jsx("th",{scope:"col",children:s("Date")}),t.jsx("th",{scope:"col",children:s("Count")}),t.jsx("th",{scope:"col",children:s("Sales")}),t.jsx("th",{scope:"col",children:s("Count")}),t.jsx("th",{scope:"col",children:s("Sales")})]})]}),t.jsxs("tbody",{children:[N.map((e,r)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e["#"]}),t.jsx("td",{children:e.Date}),t.jsx("td",{children:e["Existing Customer Count"]}),t.jsx("td",{children:e["Existing Customer Sales"]}),t.jsx("td",{children:e["New Customer Count"]}),t.jsx("td",{children:e["New Customer Sales"]})]},r)),N.length>0&&N[N.length-1].Date===s("Total")&&t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:[N.length-1]["#"]}),t.jsx("td",{children:[N.length-1].Date}),t.jsx("td",{children:[N.length-1]["Existing Customer Count"]}),t.jsx("td",{children:[N.length-1]["Existing Customer Sales"]}),t.jsx("td",{children:[N.length-1]["New Customer Count"]}),t.jsx("td",{children:[N.length-1]["New Customer Sales"]})]})]})]})}):t.jsx(pe,{option:Ee,notMerge:Se,style:{height:"297px",width:"100%",maxWidth:"2300px"},className:y.piechart},we.length)]})})};export{qt as default};