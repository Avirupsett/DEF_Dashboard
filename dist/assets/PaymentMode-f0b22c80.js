import{_ as J}from"./index-a383831d.js";import{r as f,u as dt,j as e}from"./vendor-d1a31163.js";import{y as pt,J as ut,K as gt,R as ht,M as ft,N as mt,a as M}from"./axios-d9b95618.js";import{l as _t}from"./loading-fea6af39.js";import{l as K,f as yt,a as xt}from"./NotoSansDevanagari-VariableFont_wdth_wght-7a6127ac.js";import{k as Ct,Q as C}from"./react-toastify.esm-34a8b48c.js";/* empty css                      */import"./jspdf.es.min-f40e96ac.js";import"./Dashboard-ef56d589.js";import"./installSVGRenderer-7788c1a1.js";import"./Skeleton-fd757818.js";const bt="_piechart_7z7nz_11",zt="_chartContainer_7z7nz_23",St="_legendButtonContainer_7z7nz_49",wt="_legendButton_7z7nz_49",Ft="_codeBlockIcon_7z7nz_133",vt="_lightMode_7z7nz_191",Nt="_dateFilter_7z7nz_195",jt="_officefilter_7z7nz_351",Dt="_topContainer_7z7nz_443",$t="_darkMode_7z7nz_463",kt="_iconsContainer_7z7nz_631",Pt="_icon_7z7nz_631",Ot="_exportOptions_7z7nz_715",Bt="_exportOption_7z7nz_715",Mt="_NoDataOverlay_7z7nz_861",Et="_tableContainer_7z7nz_993",Tt="_table_7z7nz_993",It="_summaryHeader_7z7nz_1029",Lt="_periodHeader_7z7nz_1037",Rt="_closeButton_7z7nz_1069",At="_tableWrapper_7z7nz_1099",Ht="_loadingOverlay_7z7nz_1107",Gt="_loadingSpinner_7z7nz_1133",Ut="_boldOption_7z7nz_1145",Wt="_optionGroup_7z7nz_1155",l={piechart:bt,chartContainer:zt,"legend-text":"_legend-text_7z7nz_31",legendButtonContainer:St,legendButton:wt,codeBlockIcon:Ft,lightMode:vt,"label-text":"_label-text_7z7nz_191",dateFilter:Nt,officefilter:jt,topContainer:Dt,darkMode:$t,"theme-container":"_theme-container_7z7nz_473",iconsContainer:kt,icon:Pt,exportOptions:Ot,exportOption:Bt,NoDataOverlay:Mt,tableContainer:Et,table:Tt,summaryHeader:It,periodHeader:Lt,closeButton:Rt,tableWrapper:At,loadingOverlay:Ht,loadingSpinner:Gt,boldOption:Ut,optionGroup:Wt},re=({echarts:Q,ReactECharts:X,themeMode:_,selectedRange:x,selectedOffice:Z,isAdmin:Vt,showGraph:G,alldata:E,officeName:N,isLoading:U})=>{const[u,tt]=f.useState([]),[T,j]=f.useState(!1),I=f.useRef(null),L=f.useRef(null),{t:a}=dt(),[b,et]=f.useState([]),[z,R]=f.useState(!1);f.useEffect(()=>{const t=V(x[0]),o=V(x[1]);if(t&&o&&Z&&E.graph5){const n=E.graph5;tt(n);const s=n.reduce((r,i)=>r+i.Count,0);et([...n,{PaymentModeName:a("Total"),Count:s}])}},[E]);function D(t,o){var n=parseInt(t.substring(1,3),16),s=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);n=parseInt(n*(100+o)/100),s=parseInt(s*(100+o)/100),r=parseInt(r*(100+o)/100),n=n<255?n:255,s=s<255?s:255,r=r<255?r:255,n=Math.round(n),s=Math.round(s),r=Math.round(r);var i=n.toString(16).length==1?"0"+n.toString(16):n.toString(16),g=s.toString(16).length==1?"0"+s.toString(16):s.toString(16),y=r.toString(16).length==1?"0"+r.toString(16):r.toString(16);return"#"+i+g+y}const ot={polar:{radius:[30,"80%"]},radiusAxis:{type:"value",axisTick:{show:!1},axisLabel:{show:!1},max:u.length>0?u.sort((t,o)=>o.Count-t.Count)[1].Count+5:5},angleAxis:{type:"category",data:u.map(t=>a(t.PaymentModeName)),startAngle:75,axisLabel:{color:_==="dark"?"#ffffff":"#000000"}},tooltip:{},series:{type:"bar",data:u.map(t=>({value:t.Count,itemStyle:{color:new Q.graphic.LinearGradient(0,0,0,1,[{offset:1,color:t.PaymentModeName=="UPI"?"#5fb476":t.PaymentModeName=="Card"?"#f0d070":t.PaymentModeName=="Cash"?"#73a2ee":"#e77267"},{offset:0,color:t.PaymentModeName=="UPI"?D("#5fb476",50):t.PaymentModeName=="Card"?D("#f0d070",50):t.PaymentModeName=="Cash"?D("#73a2ee",50):D("#e77267",50)}]),borderRadius:[5,5,5,5]},label:{show:!0,color:"#000000"}})),coordinateSystem:"polar",label:{show:!0,position:"middle",formatter:"{c}"}},animation:!0},W=t=>{let o="";const n=new Uint8Array(t),s=n.byteLength;for(let r=0;r<s;r++)o+=String.fromCharCode(n[r]);return window.btoa(o)},$=t=>{if(!t)return"";const o=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0");return`${String(t.getDate()).padStart(2,"0")}-${n}-${o}`},V=t=>{if(!t)return"";const o=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${o}-${n}-${s}`},nt=async()=>{const t=C.loading("Please wait..."),o=$(x[0]),n=$(x[1]),s=await J(()=>import("./exceljs.min-254463f3.js").then(g=>g.e),["assets/exceljs.min-254463f3.js","assets/vendor-d1a31163.js"]),r=new s.Workbook,i=r.addWorksheet("Data");fetch(K).then(g=>g.blob()).then(async g=>{const y=new FileReader;y.onload=async function(){const A=y.result,S=r.addImage({base64:A,extension:"png"});i.addImage(S,{tl:{col:0,row:0},ext:{width:100,height:60}});const w=i.getCell("A1");w.value=`${a("Payment Mode Data")} (${N})`,w.font={bold:!0,color:{argb:"000000"},size:14},w.alignment={vertical:"middle",horizontal:"center"},i.mergeCells("A1:D1");const c=i.getCell("A2");c.value=`${a("Period")}: ${o} ${a("to")} ${n}`,c.font={bold:!0,color:{argb:"000000"},size:12},c.alignment={horizontal:"center"},i.mergeCells("A2:D2"),i.getColumn(1).width=15,i.getColumn(2).width=50,i.getColumn(3).width=15,i.getColumn(4).width=15;const k=i.addRow([a("#"),a("Payment"),a("Count")]);k.font={bold:!0,color:{argb:"000000"},size:12},k.eachCell(d=>{d.font={bold:!0,color:{argb:"000000"},size:12},d.border={bottom:{style:"thin",color:{argb:"000000"}}}}),u.forEach((d,m)=>{const p=i.addRow([m+1,d.PaymentModeName,d.Count]);p.getCell(1).alignment={horizontal:"left"},p.getCell(2).alignment={horizontal:"left"},p.getCell(3).alignment={horizontal:"right"},p.getCell(4).alignment={horizontal:"right"}});const P=i.addRow(["",a("Total"),""]);P.font={bold:!0,color:{argb:"000000"},size:12};const O=u.reduce((d,m)=>d+m.Count,0),F=i.getCell(`C${P.number}`);F.value=`${O}`,F.alignment={horizontal:"right"};const H=`${Date.now()}PaymentMode_${N}_${o}_${n}.xlsx`;r.xlsx.writeBuffer().then(async d=>{const m=new FormData;m.append("file",new Blob([d]),H);try{const p=await M.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",m,{headers:{"Content-Type":"multipart/form-data"}});p.status==200?C.update(t,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(t,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const B=p.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${B}`}catch(p){console.error("Error saving Excel file:",p)}})},y.readAsDataURL(g)})},at=async()=>{const t=C.loading("Please wait..."),o=$(x[0]),n=$(x[1]),r=new URLSearchParams(window.location.search).get("lang"),i=await M.get(yt,{responseType:"arraybuffer"}),g=W(i.data),y=await M.get(xt,{responseType:"arraybuffer"}),A=W(y.data);J(()=>import("./jspdf.es.min-f40e96ac.js").then(S=>S.j),["assets/jspdf.es.min-f40e96ac.js","assets/index-a383831d.js","assets/vendor-d1a31163.js","assets/index-74b21cfb.css","assets/Dashboard-ef56d589.js","assets/axios-d9b95618.js","assets/installSVGRenderer-7788c1a1.js","assets/Skeleton-fd757818.js","assets/Dashboard-5c3f3713.css"]).then(async S=>{let w=S.default;const c=new w;c.addFileToVFS("NotoSansBengali.ttf",g),c.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),c.setFont("NotoSansBengali"),c.addFileToVFS("NotoSansDevanagari.ttf",A),c.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),c.setFont("NotoSansDevanagari");const k=[[a("#"),a("Payment"),a("Count")]],P={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"}},O={fontSize:12,fontStyle:"bold",halign:"center"},F={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},Y=K,H=35,d=20;c.addImage(Y,"PNG",15,12,H,d);const m=[[`${a("Payment Mode")} (${N})`]];c.autoTable({head:m,body:[],headStyles:{...O,fillColor:F.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const p=[[`${a("Period")}: ${o} ${a("to")} ${n}`]];c.autoTable({startY:39.5,head:p,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let B=u.map((h,v)=>[v+1,h.PaymentModeName,`${h.Count}`]);const st=u.reduce((h,v)=>h+v.Count,0);B.push(["",a("Total"),st]);const it={startY:c.autoTable.previous.finalY+1,head:k,body:B,headStyles:{...O,fillColor:F.secondHeader,textColor:"#FFFFFF"},columnStyles:P,styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};c.autoTable(it);const lt=`${Date.now()}PaymentMode_${N}_${o}_${n}.pdf`,ct=c.output("blob"),q=new FormData;q.append("file",ct,lt);try{const h=await M.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",q,{headers:{"Content-Type":"multipart/form-data"}});h.status==200?C.update(t,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(t,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const v=await h.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${v}`}catch(h){console.error("Error saving PDF file:",h)}})};f.useEffect(()=>{const t=o=>{I.current&&!I.current.contains(o.target)&&L.current&&!L.current.contains(o.target)&&o.target.tagName!=="svg"&&o.target.tagName!=="path"&&j(!1)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]),f.useEffect(()=>{R(!G)},[G]);const rt=()=>{j(!T)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`${l.chartContainer} ${_==="dark"?l.darkMode:l.lightMode}`,children:[e.jsx(Ct,{position:"top-center",theme:_}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:`fw-bold noselect me-2 fs-${window.innerWidth<=768?7:5} ${_==="dark"?l.darkMode:l.lightMode}`,children:a("Payment Mode")})}),e.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:I,children:e.jsxs("div",{className:`${l.iconsContainer} d-flex justify-content-center align-items-center`,children:[e.jsx("div",{className:`${l.icon} ${_==="dark"?l.darkMode:l.lightMode} px-2 py-1`,onClick:rt,children:T?e.jsx(pt,{style:{fontSize:"1.1rem"}}):e.jsx(ut,{style:{fontSize:"1.1rem"}})}),T&&e.jsxs("div",{className:`${l.exportOptions} ${_==="dark"?l.darkMode:l.lightMode}`,ref:L,children:[z?e.jsxs("div",{className:l.exportOption,onClick:()=>{R(!z),j(!1)},children:[e.jsx(ht,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),e.jsx("span",{children:a("View Graph")})]}):e.jsxs("div",{className:l.exportOption,onClick:()=>{R(!z),j(!1)},children:[e.jsx(gt,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),e.jsx("span",{children:a("View Table")})]}),e.jsxs("div",{className:l.exportOption,onClick:nt,children:[e.jsx(ft,{style:{fontSize:"1.1rem",color:"green"}}),e.jsx("span",{children:a("Export to Excel")})]}),e.jsxs("div",{className:l.exportOption,onClick:at,children:[e.jsx(mt,{style:{fontSize:"1.1rem",color:"red"}}),e.jsx("span",{children:a("Export to PDF")})]})]})]})})]})}),U&&e.jsx("div",{className:l.loadingOverlay,children:e.jsx("img",{src:_t,alt:"Loading...",width:50,height:50})}),b.length>0&&b[b.length-1].Count===0&&!z&&!U?e.jsx("div",{className:`${l.loadingOverlay} fs-5`,children:a("No Data Found")}):"",z?e.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"341px"},children:e.jsxs("table",{className:`table  ${_=="dark"?"table-dark":""}`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"#"}),e.jsx("th",{scope:"col",children:a("Payment")}),e.jsx("th",{scope:"col",children:a("Count")})]})}),e.jsx("tbody",{children:b.map((t,o)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:b.length-1===o?"":o+1}),e.jsx("td",{children:t.PaymentModeName}),e.jsx("td",{children:t.Count})]},t.PaymentModeName))})]})}):e.jsx(X,{option:ot,style:{height:"349px",width:"100%",maxWidth:"2300px"},className:l.piechart},u.length)]})})};export{re as default};
