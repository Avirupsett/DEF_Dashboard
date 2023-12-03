import{_ as ee}from"./index-1cd2dbfd.js";import{r as u,u as Je,j as t}from"./vendor-d1a31163.js";import{c as Ke,P as Qe,y as Xe,J as Ze,K as et,L as tt,M as ot,N as at,a as L}from"./axios-d9b95618.js";import{l as we}from"./loading-af22319a.js";import{l as te,f as Se,a as Ce}from"./NotoSansDevanagari-VariableFont_wdth_wght-7a6127ac.js";import{k as nt,Q as $}from"./react-toastify.esm-34a8b48c.js";/* empty css                      */import{T as rt}from"./ThemeProvider-68b9b4a4.js";import{F as ve,S as _e,M as Y}from"./Select-006978da.js";import{I as st}from"./InputLabel-0d786470.js";import"./jspdf.es.min-a48e9358.js";import"./Dashboard-33fe89a6.js";import"./installSVGRenderer-7788c1a1.js";import"./Skeleton-fd757818.js";import"./createSvgIcon-a8b447bb.js";import"./react-is.production.min-ec3da07b.js";import"./useTheme-55d19bd2.js";const lt="_piechart_1hrwn_11",it="_chartContainer_1hrwn_23",ct="_legendButtonContainer_1hrwn_49",dt="_legendButton_1hrwn_49",ft="_codeBlockIcon_1hrwn_133",ut="_lightMode_1hrwn_191",ht="_dateFilter_1hrwn_195",pt="_officefilter_1hrwn_351",mt="_topContainer_1hrwn_443",gt="_darkMode_1hrwn_463",xt="_iconsContainer_1hrwn_631",yt="_icon_1hrwn_631",bt="_exportOptions_1hrwn_715",wt="_exportOption_1hrwn_715",St="_NoDataOverlay_1hrwn_861",Ct="_tableContainer_1hrwn_993",vt="_table_1hrwn_993",_t="_summaryHeader_1hrwn_1029",Ft="_periodHeader_1hrwn_1037",Dt="_closeButton_1hrwn_1069",Nt="_tableWrapper_1hrwn_1099",$t="_loadingOverlay_1hrwn_1107",kt="_loadingSpinner_1hrwn_1133",jt="_boldOption_1hrwn_1145",Tt="_optionGroup_1hrwn_1155",f={piechart:lt,chartContainer:it,"legend-text":"_legend-text_1hrwn_31",legendButtonContainer:ct,legendButton:dt,codeBlockIcon:ft,lightMode:ut,"label-text":"_label-text_1hrwn_191",dateFilter:ht,officefilter:pt,topContainer:mt,darkMode:gt,"theme-container":"_theme-container_1hrwn_473",iconsContainer:xt,icon:yt,exportOptions:bt,exportOption:wt,NoDataOverlay:St,tableContainer:Ct,table:vt,summaryHeader:_t,periodHeader:Ft,closeButton:Dt,tableWrapper:Nt,loadingOverlay:$t,loadingSpinner:kt,boldOption:jt,optionGroup:Tt},Kt=({echarts:oe,ReactECharts:Fe,themeMode:d,selectedRange:F,selectedOffice:De,isAdmin:Ne,showGraph:fe,alldata:ae,officeName:O,isLoading:ue})=>{const[m,E]=u.useState([]),[ne,J]=u.useState(!1),re=u.useRef(null),se=u.useRef(null),he=u.useRef(null),{t:o}=Je(),[Bt,pe]=u.useState(!1),[le,V]=u.useState([]),[q,K]=u.useState(!1),[g,$e]=u.useState("Name"),[A,ke]=u.useState([]),[W,je]=u.useState([]),[R,Te]=u.useState([]),[ie,Be]=u.useState(5),[me,Ie]=u.useState([]),[z,ce]=u.useState(!1),[M,Le]=u.useState(""),[Oe,ge]=u.useState(!1),[G,ze]=u.useState([]);u.useEffect(()=>{if(ae.graph4){ce(!1);const e=ae.graph4,n=e.byName,a=e.byMobile,s=e.byVehicle;je(a),Te(s),ke(n)}},[ae]),u.useEffect(()=>{K(!fe)},[fe]);function xe(e,n){var a=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);a=parseInt(a*(100+n)/100),s=parseInt(s*(100+n)/100),r=parseInt(r*(100+n)/100),a=a<255?a:255,s=s<255?s:255,r=r<255?r:255,a=Math.round(a),s=Math.round(s),r=Math.round(r);var l=a.toString(16).length==1?"0"+a.toString(16):a.toString(16),p=s.toString(16).length==1?"0"+s.toString(16):s.toString(16),c=r.toString(16).length==1?"0"+r.toString(16):r.toString(16);return"#"+l+p+c}const Pe={title:{textStyle:{color:d==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{data:[o("Visit"),o("Sales")],bottom:0,textStyle:{color:d==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:window.innerWidth<=768?"9%":"4%",right:"4%",top:"15%",bottom:"10%",containLabel:m.length>0},xAxis:[{type:"category",data:m.map(e=>e.filterName),axisPointer:{type:"shadow"},axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{color:d==="dark"?"#ffffff":"#000000",rotate:45,fontSize:11,formatter:e=>e.length>10?e.substring(0,10)+"...":e}}],yAxis:[{type:"value",name:o("Visit"),min:0,minInterval:1,axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{color:d==="dark"?"#ffffff":"#000000"}},{type:"value",name:o("Sales"),min:0,axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{color:d==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e3?e/1e3+"k":e}}],series:[{name:o("Visit"),type:"bar",barWidth:"35%",data:m.map(e=>e.count),itemStyle:{borderRadius:[10,10,0,0],color:new oe.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#a6ffcb"},{offset:1,color:"#1fa2ff"}])}},{name:o("Sales"),type:"line",yAxisIndex:1,data:m.map(e=>e.total),markPoint:{data:m.map((e,n)=>({value:e.total>=1e3?parseInt(e.total/1e3)+"k":e.total,xAxis:n,yAxis:e.total}))}}]},Ee={title:{textStyle:{color:d==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{show:!0,data:[o("Visit")],selected:{Visit:!0},bottom:0,textStyle:{color:d==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:window.innerWidth<=768?"14%":"9%",top:"15%",containLabel:me.length>0},xAxis:[{type:"time",axisPointer:{label:{formatter:function(e){let n=new Date(e.value);return T(n)}}},axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{rotate:window.innerWidth<768?45:0,hideOverlap:!0,formatter:"{d} {MMM}",color:d==="dark"?"#ffffff":"#000000"}}],yAxis:[{type:"value",name:o("Visit"),min:0,minInterval:1,axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{color:d==="dark"?"#ffffff":"#000000"}},{type:"value",name:o("Sales"),axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{color:d==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e4?e/1e3+"k":e},splitLine:{show:!0,lineStyle:{color:d==="dark"?"grey":"silver",type:"dashed"}}}],dataZoom:[{show:!0,type:"inside",filterMode:"none",xAxisIndex:[0],startValue:new Date(F[0]),endValue:new Date(F[1])}],series:Object.values(me).flatMap((e,n)=>[{name:o("Visit"),type:"scatter",symbolSize:20,itemStyle:{color:new oe.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#a6ffcb"},{offset:1,color:"#1fa2ff"}])},yAxisIndex:0,smooth:!0,data:Object.entries(e.visit)},{name:e.productName,type:"bar",stack:"total",yAxisIndex:1,barWidth:"40%",label:{show:!1},itemStyle:{borderRadius:[5,5,5,5],color:new oe.graphic.LinearGradient(0,0,0,1,[{offset:1,color:xe(e.color,20)},{offset:0,color:xe(e.color,60)}])},data:Object.entries(e.daySales)}])},Q=e=>{let n="";const a=new Uint8Array(e),s=a.byteLength;for(let r=0;r<s;r++)n+=String.fromCharCode(a[r]);return window.btoa(n)},T=e=>{if(!e)return"";const n=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${a}-${n}`},ye=e=>{if(!e)return"";const n=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${n}-${a}-${s}`},Ve=async()=>{const e=$.loading("Please wait..."),n=T(F[0]),a=T(F[1]),s=await ee(()=>import("./exceljs.min-254463f3.js").then(p=>p.e),["assets/exceljs.min-254463f3.js","assets/vendor-d1a31163.js"]),r=new s.Workbook,l=r.addWorksheet("Data");fetch(te).then(p=>p.blob()).then(async p=>{const c=new FileReader;c.onload=async function(){const x=c.result,S=r.addImage({base64:x,extension:"png"});l.addImage(S,{tl:{col:0,row:0},ext:{width:100,height:60}});const y=l.getCell("A1");y.value=`${o("Top Customers Summary Data")} (${O})`,y.font={bold:!0,color:{argb:"000000"},size:14},y.alignment={vertical:"middle",horizontal:"center"},l.mergeCells("A1:D1");const i=l.getCell("A2");i.value=`${o("Period")}: ${n} ${o("to")} ${a}`,i.font={bold:!0,color:{argb:"000000"},size:12},i.alignment={horizontal:"center"},l.mergeCells("A2:D2"),l.getColumn(1).width=15,l.getColumn(2).width=50,l.getColumn(3).width=15,l.getColumn(4).width=15;const C=l.addRow([o("#"),o(g),o("Visit"),o("Sales")]);C.font={bold:!0,color:{argb:"000000"},size:12},C.eachCell(w=>{w.font={bold:!0,color:{argb:"000000"},size:12},w.border={bottom:{style:"thin",color:{argb:"000000"}}}}),m.forEach((w,v)=>{const _=l.addRow([v+1,w.filterName,w.count,w.total]);_.getCell(1).alignment={horizontal:"left"},_.getCell(2).alignment={horizontal:"left"},_.getCell(3).alignment={horizontal:"right"},_.getCell(4).alignment={horizontal:"right"}});const j=l.addRow(["",o("Total"),"",""]);j.font={bold:!0,color:{argb:"000000"},size:12};const k=m.reduce((w,v)=>w+v.total,0),b=m.reduce((w,v)=>w+v.count,0),D=l.getCell(`C${j.number}`);D.value=`${b}`,D.alignment={horizontal:"right"};const h=l.getCell(`D${j.number}`);h.value=`₹ ${k.toFixed(2)}`,h.alignment={horizontal:"right"};const U=`${Date.now()}Top_Customers_Summary_by${g}_${O}_${n}_${a}.xlsx`;r.xlsx.writeBuffer().then(async w=>{const v=new FormData;v.append("file",new Blob([w]),U);try{const _=await L.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",v,{headers:{"Content-Type":"multipart/form-data"}});_.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const X=_.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${X}`}catch(_){console.error("Error saving Excel file:",_)}})},c.readAsDataURL(p)})},Ae=async()=>{const e=$.loading("Please wait..."),n=T(F[0]),a=T(F[1]),s=await ee(()=>import("./exceljs.min-254463f3.js").then(p=>p.e),["assets/exceljs.min-254463f3.js","assets/vendor-d1a31163.js"]),r=new s.Workbook,l=r.addWorksheet("Data");fetch(te).then(p=>p.blob()).then(async p=>{const c=new FileReader;c.onload=async function(){const x=c.result,S=r.addImage({base64:x,extension:"png"});l.addImage(S,{tl:{col:0,row:0},ext:{width:100,height:60}});const y=l.getCell("A1");y.value=`${M} Sales (${O})`,y.font={bold:!0,color:{argb:"000000"},size:14},y.alignment={vertical:"middle",horizontal:"center"},l.mergeCells("A1:D1");const i=l.getCell("A2");i.value=`${o("Period")}: ${n} ${o("to")} ${a}`,i.font={bold:!0,color:{argb:"000000"},size:12},i.alignment={horizontal:"center"},l.mergeCells("A2:D2"),l.getColumn(1).width=15,l.getColumn(2).width=50,l.getColumn(3).width=15,l.getColumn(4).width=15;const C=l.addRow([o("#"),o("Date"),o("Sales")]);C.font={bold:!0,color:{argb:"000000"},size:12},C.eachCell(b=>{b.font={bold:!0,color:{argb:"000000"},size:12},b.border={bottom:{style:"thin",color:{argb:"000000"}}}}),G.forEach((b,D)=>{if(D==G.length-2){const h=l.addRow([D+1,b.requestedDate,b.totalIncome]);h.getCell(1).alignment={horizontal:"left"},h.getCell(2).alignment={horizontal:"left"},h.getCell(3).alignment={horizontal:"right"},h.getCell(4).alignment={horizontal:"right"}}else{const h=l.addRow(["",o("Total"),"",""]);h.font={bold:!0,color:{argb:"000000"},size:12};const B=l.getCell(`C${h.number}`);B.value=`₹ ${b.totalIncome}`,B.alignment={horizontal:"right"}}});const k=`${Date.now()}Sales_of_${M}_${O}_${n}_${a}.xlsx`;r.xlsx.writeBuffer().then(async b=>{const D=new FormData;D.append("file",new Blob([b]),k);try{const h=await L.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",D,{headers:{"Content-Type":"multipart/form-data"}});h.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const B=h.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${B}`}catch(h){console.error("Error saving Excel file:",h)}})},c.readAsDataURL(p)})},We=async()=>{const e=$.loading("Please wait..."),n=T(F[0]),a=T(F[1]),r=new URLSearchParams(window.location.search).get("lang"),l=await L.get(Se,{responseType:"arraybuffer"}),p=Q(l.data),c=await L.get(Ce,{responseType:"arraybuffer"}),x=Q(c.data);ee(()=>import("./jspdf.es.min-a48e9358.js").then(S=>S.j),["assets/jspdf.es.min-a48e9358.js","assets/index-1cd2dbfd.js","assets/vendor-d1a31163.js","assets/index-74b21cfb.css","assets/Dashboard-33fe89a6.js","assets/axios-d9b95618.js","assets/installSVGRenderer-7788c1a1.js","assets/Skeleton-fd757818.js","assets/Dashboard-5c3f3713.css"]).then(async S=>{let y=S.default;const i=new y;i.addFileToVFS("NotoSansBengali.ttf",p),i.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),i.setFont("NotoSansBengali"),i.addFileToVFS("NotoSansDevanagari.ttf",x),i.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),i.setFont("NotoSansDevanagari");const C=[[o("#"),o(g),o("Visit"),o("Sales")]],j={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},k={fontSize:12,fontStyle:"bold",halign:"center"},b={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},D=te,h=35,B=20;i.addImage(D,"PNG",15,12,h,B);const U=[[`${o("Top Customers Summary Data")} (${O})`]];i.autoTable({head:U,body:[],headStyles:{...k,fillColor:b.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const w=[[`${o("Period")}: ${n} ${o("to")} ${a}`]];i.autoTable({startY:39.5,head:w,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let v=m.map((N,P)=>[P+1,N.filterName,`${N.count}`,`₹ ${parseFloat(N.total).toFixed(2)}`]);const _=m.reduce((N,P)=>N+P.total,0),X=m.reduce((N,P)=>N+P.count,0);v.push(["",o("Total"),X,`₹ ${_.toFixed(2)}`]);const de={startY:i.autoTable.previous.finalY+1,head:C,body:v,headStyles:{...k,fillColor:b.secondHeader,textColor:"#FFFFFF"},columnStyles:j,styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};i.autoTable(de);const Z=`${Date.now()}Top_Customerss_Summary_by${g}_${O}_${n}_${a}.pdf`,I=i.output("blob"),H=new FormData;H.append("file",I,Z);try{const N=await L.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",H,{headers:{"Content-Type":"multipart/form-data"}});N.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const P=await N.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${P}`}catch(N){console.error("Error saving PDF file:",N)}})},Re=async()=>{const e=$.loading("Please wait..."),n=T(F[0]),a=T(F[1]),r=new URLSearchParams(window.location.search).get("lang"),l=await L.get(Se,{responseType:"arraybuffer"}),p=Q(l.data),c=await L.get(Ce,{responseType:"arraybuffer"}),x=Q(c.data);ee(()=>import("./jspdf.es.min-a48e9358.js").then(S=>S.j),["assets/jspdf.es.min-a48e9358.js","assets/index-1cd2dbfd.js","assets/vendor-d1a31163.js","assets/index-74b21cfb.css","assets/Dashboard-33fe89a6.js","assets/axios-d9b95618.js","assets/installSVGRenderer-7788c1a1.js","assets/Skeleton-fd757818.js","assets/Dashboard-5c3f3713.css"]).then(async S=>{let y=S.default;const i=new y;i.addFileToVFS("NotoSansBengali.ttf",p),i.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),i.setFont("NotoSansBengali"),i.addFileToVFS("NotoSansDevanagari.ttf",x),i.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),i.setFont("NotoSansDevanagari");const C=[[o("#"),o("Date"),o("Sales")]],j={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},k={fontSize:12,fontStyle:"bold",halign:"center"},b={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},D=te,h=35,B=20;i.addImage(D,"PNG",15,12,h,B);const U=[[`${M} Sales (${O})`]];i.autoTable({head:U,body:[],headStyles:{...k,fillColor:b.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const w=[[`${o("Period")}: ${n} ${o("to")} ${a}`]];i.autoTable({startY:39.5,head:w,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let v=G.map((I,H)=>[H+1,I.requestedDate,`₹ ${parseFloat(I.totalIncome).toFixed(2)}`]);const _={startY:i.autoTable.previous.finalY+1,head:C,body:v,headStyles:{...k,fillColor:b.secondHeader,textColor:"#FFFFFF"},columnStyles:j,styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};i.autoTable(_);const de=`${Date.now()}Sales_of_${M}_${O}_${n}_${a}.pdf`,be=i.output("blob"),Z=new FormData;Z.append("file",be,de);try{const I=await L.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",Z,{headers:{"Content-Type":"multipart/form-data"}});I.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const H=await I.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${H}`}catch(I){console.error("Error saving PDF file:",I)}})};u.useEffect(()=>{const e=n=>{re.current&&!re.current.contains(n.target)&&se.current&&!se.current.contains(n.target)&&n.target.tagName!=="svg"&&n.target.tagName!=="path"&&J(!1),he.current&&!he.current.contains(n.target)&&pe(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const He=()=>{pe(!1),J(!ne)};u.useEffect(()=>{Ge(ie)},[g,ie,A,W,R]);const qe=e=>{$e(e.target.value)},Me=e=>{if(e&&e.data&&e.dataIndex>=0&&m[e.dataIndex]){ge(!0);let n=JSON.stringify({CustomerName:g==="Name"?m[e.dataIndex].filterName:null,MobileNo:g==="Mobile"?m[e.dataIndex].filterName:null,VehicleNo:g==="Vehicle"?m[e.dataIndex].filterName:null}),a={"Content-Type":"application/json"},s={url:`https://dev-def-dash-route-api.inspirigenceworks.co.in/api/v1/dashboard/sales_customer/${ye(F[0])}/${ye(F[1])}/${De}/${Ne}`,method:"POST",headers:a,data:n};L.request(s).then(r=>{let l={};Array.from(new Set(r.data.flatMap(c=>c.lstproduct.map(x=>x.productId)))).map(c=>{l[c]={productName:"",color:"",daySales:{},visit:{}},l.Visit={productName:"",color:"",daySales:{},visit:{}},r.data.map(x=>{l[c].daySales[x.requestedDate]=""})}),ze([...r.data.filter(c=>c.totalIncome>0),{requestedDate:o("Total"),totalIncome:r.data.reduce((c,x)=>c+x.totalIncome,0)}]),ce(!0),r.data.map(c=>{const x=c.requestedDate,S=c.lstproduct;l.Visit.visit[x]=c.totalCount>0?c.totalCount:"",S.length>0&&S.map(y=>{const i=y.color,C=y.productId,j=y.productName,k=y.total;l[C].productName=j,l[C].color=i,l[C].daySales[x]=k})}),Ie(l)}).finally(()=>{ge(!1)}),Le(m[e.dataIndex].filterName)}},Ge=e=>{if(e===10)g==="Name"?(E(A),V([...A,{filterName:o("Total"),total:A.reduce((n,a)=>n+a.total,0),count:A.reduce((n,a)=>n+a.count,0)}])):g==="Mobile"?(E(W),V([...W,{filterName:o("Total"),total:W.reduce((n,a)=>n+a.total,0),count:W.reduce((n,a)=>n+a.count,0)}])):g==="Vehicle"&&(E(R),V([...R,{filterName:o("Total"),total:R.reduce((n,a)=>n+a.total,0),count:R.reduce((n,a)=>n+a.count,0)}]));else if(g==="Name"){let a=A.slice().reverse().slice(0,5).map(s=>s);E(a.slice().reverse()),V([...a.slice().reverse(),{filterName:o("Total"),total:a.slice().reverse().reduce((s,r)=>s+r.total,0),count:a.slice().reverse().reduce((s,r)=>s+r.count,0)}])}else if(g==="Mobile"){let a=W.slice().reverse().slice(0,5).map(s=>s);E(a.slice().reverse()),V([...a.slice().reverse(),{filterName:o("Total"),total:a.slice().reverse().reduce((s,r)=>s+r.total,0),count:a.slice().reverse().reduce((s,r)=>s+r.count,0)}])}else if(g==="Vehicle"){let a=R.slice().reverse().slice(0,5).map(s=>s);E(a.slice().reverse()),V([...a.slice().reverse(),{filterName:o("Total"),total:a.slice().reverse().reduce((s,r)=>s+r.total,0),count:a.slice().reverse().reduce((s,r)=>s+r.count,0)}])}},Ue=Ke({typography:{button:{textTransform:"none"}}}),Ye=()=>{ce(!1),K(!1)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:`${f.chartContainer} ${d==="dark"?f.darkMode:f.lightMode}`,children:[t.jsx(nt,{position:"top-center",theme:d}),t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsxs("div",{className:"d-flex align-items-center",children:[z?t.jsx("div",{title:"Previous",className:f.resetButtonContainer,children:t.jsx("button",{title:"Previous",className:`btn btn-primary mx-1 ${window.innerWidth<500?"btn-sm":""} shadow border-2 border-white`,onClick:Ye,children:t.jsx(Qe,{style:{fontSize:"1rem"}})})}):null,t.jsx("div",{className:`fw-bold me-2 fs-${window.innerWidth<=768?7:5} ${d==="dark"?f.darkMode:f.lightMode}`,children:o("")}),z?t.jsx("div",{className:`fw-bold ms-2 fs-${window.innerWidth<=768?7:5} ${d==="dark"?f.darkMode:f.lightMode}`,children:M}):t.jsxs(rt,{theme:Ue,children:[t.jsxs(ve,{sx:{mx:1,mt:1,minWidth:120},size:"small",children:[t.jsx(st,{id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},children:o("Top Customers")}),t.jsxs(_e,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:g,onChange:qe,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},label:o("Top Customers"),children:[t.jsx(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Name",children:o("Name")}),t.jsx(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Mobile",children:o("Mobile")}),t.jsx(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Vehicle",children:o("Vehicle")})]})]}),t.jsx(ve,{sx:{mx:1,mt:1,minWidth:100},size:"small",children:t.jsxs(_e,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:ie,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},onChange:e=>{Be(e.target.value)},children:[t.jsxs(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:5,children:[o("Top")," 5"]}),t.jsxs(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:10,children:[o("Top")," 10"]})]})})]})]}),t.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:re,children:t.jsxs("div",{className:`${f.iconsContainer} d-flex justify-content-center align-items-center`,children:[t.jsx("div",{className:`${f.icon} ${d==="dark"?f.darkMode:f.lightMode} px-2 py-1`,onClick:He,children:ne?t.jsx(Xe,{style:{fontSize:"1.1rem"}}):t.jsx(Ze,{style:{fontSize:"1.1rem"}})}),ne&&t.jsxs("div",{className:`${f.exportOptions} ${d==="dark"?f.darkMode:f.lightMode}`,ref:se,children:[q?t.jsxs("div",{className:f.exportOption,onClick:()=>{K(!q),J(!1)},children:[t.jsx(tt,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),t.jsx("span",{children:o("View Graph")})]}):t.jsxs("div",{className:f.exportOption,onClick:()=>{K(!q),J(!1)},children:[t.jsx(et,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:o("View Table")})]}),t.jsxs("div",{className:f.exportOption,onClick:z?Ae:Ve,children:[t.jsx(ot,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:o("Export to Excel")})]}),t.jsxs("div",{className:f.exportOption,onClick:z?Re:We,children:[t.jsx(at,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:o("Export to PDF")})]})]})]})})]})}),ue&&t.jsx("div",{className:f.loadingOverlay,children:t.jsx("img",{src:we,alt:"Loading...",width:50,height:50})}),Oe&&t.jsx("div",{className:f.loadingOverlay,children:t.jsx("img",{src:we,alt:"Loading...",width:50,height:50})}),le.length==1&&!q&&!ue?t.jsx("div",{className:`${f.NoDataOverlay} fs-5`,children:o("No Data Found")}):"",q?t.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"334px"},children:t.jsxs("table",{className:`table  ${d=="dark"?"table-dark":""}`,children:[t.jsx("thead",{children:z?t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"#"}),t.jsx("th",{scope:"col",children:o("Date")}),t.jsxs("th",{scope:"col",children:[o("Sales"),"(₹)"]})]}):t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"#"}),t.jsx("th",{scope:"col",children:o(g)}),t.jsx("th",{scope:"col",children:o("Visit")}),t.jsxs("th",{scope:"col",children:[o("Sales"),"(₹)"]})]})}),t.jsx("tbody",{children:z?G.map((e,n)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:G.length-1===n?"":n+1}),t.jsx("td",{children:e.requestedDate}),t.jsx("td",{children:parseFloat(e.totalIncome).toFixed(2)})]},e.requestedDate)):le.map((e,n)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:le.length-1===n?"":n+1}),t.jsx("td",{children:e.filterName}),t.jsx("td",{children:e.count}),t.jsx("td",{children:parseFloat(e.total).toFixed(2)})]},e.filterName))})]})}):t.jsx(Fe,{option:z?Ee:Pe,style:{height:z?"350px":"342px",width:"100%",maxWidth:"2300px"},onEvents:{click:Me},className:f.piechart},m.length)]})})};export{Kt as default};