import{_ as te}from"./index-c2d2ef7a.js";import{r as S,u as be,j as t}from"./vendor-36ea1262.js";import{n as we,w as _e,x as Fe,y as Ce,z as ve,A as Ee,i as L}from"./index.esm-39a9cba4.js";import{l as $e}from"./ReactToastify-657213c3.js";import{k as je,Q as k,l as ae,f as ke,a as Ne}from"./NotoSansDevanagari-VariableFont_wdth_wght-47b406a6.js";import{r as le,s as oe,g as ne,t as se}from"./Dashboard-b6156e2a.js";import"./jspdf.es.min-b7955edd.js";import"./install-b5fa7292.js";import"./assertThisInitialized-a147f0d7.js";var Oe=864e5;function Ie(g,m){le(2,arguments);var n=oe(g),l=oe(m),F=n.getTime()-ne(n),C=l.getTime()-ne(l);return Math.round((F-C)/Oe)}function re(g,m){var n=g.getFullYear()-m.getFullYear()||g.getMonth()-m.getMonth()||g.getDate()-m.getDate()||g.getHours()-m.getHours()||g.getMinutes()-m.getMinutes()||g.getSeconds()-m.getSeconds()||g.getMilliseconds()-m.getMilliseconds();return n<0?-1:n>0?1:n}function Ae(g,m){le(2,arguments);var n=se(g),l=se(m),F=re(n,l),C=Math.abs(Ie(n,l));n.setDate(n.getDate()-F*C);var Q=+(re(n,l)===-F),N=F*(C-Q);return N===0?0:N}const Be="_chartContainer_1mphg_1",Te="_lightMode_1mphg_47",ze="_dateFilter_1mphg_51",Le="_officefilter_1mphg_207",Me="_topContainer_1mphg_299",We="_darkMode_1mphg_319",Pe="_iconsContainer_1mphg_487",qe="_icon_1mphg_487",Ge="_exportOptions_1mphg_571",He="_exportOption_1mphg_571",Ve="_tableContainer_1mphg_825",Ye="_table_1mphg_825",Re="_summaryHeader_1mphg_861",Ue="_periodHeader_1mphg_869",Je="_closeButton_1mphg_901",Qe="_tableWrapper_1mphg_931",Xe="_loadingOverlay_1mphg_939",Ze="_NoDataOverlay_1mphg_963",Ke="_loadingSpinner_1mphg_991",et="_boldOption_1mphg_1003",tt="_optionGroup_1mphg_1013",d={chartContainer:Be,lightMode:Te,"label-text":"_label-text_1mphg_47",dateFilter:ze,officefilter:Le,topContainer:Me,darkMode:We,"theme-container":"_theme-container_1mphg_329",iconsContainer:Pe,icon:qe,exportOptions:Ge,exportOption:He,tableContainer:Ve,table:Ye,summaryHeader:Re,periodHeader:Ue,closeButton:Je,tableWrapper:Qe,loadingOverlay:Xe,NoDataOverlay:Ze,loadingSpinner:Ke,boldOption:et,optionGroup:tt},pt=({echarts:g,ReactECharts:m,selectedRange:n,themeMode:l,showGraph:F,selectedOffice:C,isAdmin:Q,alldata:N,isLoading:X,officeName:O})=>{const[x,ie]=S.useState([]),[q,M]=S.useState(!1),G=S.useRef(null),H=S.useRef(null),[ce,de]=S.useState(!0),[V,pe]=S.useState([]),[I,Y]=S.useState(!1),{t:a}=be();S.useEffect(()=>{const e=D(n[0]),o=D(n[1]);e&&o&&C&&(()=>{const i=N;if(Array.isArray(i.graph1)){const s=i.graph1.map(f=>({requestedDate:D(new Date(f.requestedDate)),sales:f.totalIncome,expense:f.totalExpense}));let c=s.filter(f=>f.sales!==0||f.expense!==0);const v=s.reduce((f,_)=>f+_.sales,0).toFixed(2),w=s.reduce((f,_)=>f+_.expense,0).toFixed(2);c.push({requestedDate:a("Total"),sales:v,expense:w}),pe(c),ie(i.graph1)}})()},[N]),S.useEffect(()=>{Y(!F)},[F]);const Z=(x.filter(e=>e.totalIncome>0).reduce((e,o)=>e+o.totalIncome,0)/x.length).toFixed(0);S.useEffect(()=>{if(n[0]&&n[1]){const e=new Date(n[0]),o=new Date(n[1]),r=Ae(o,e)+1;de(r<=7)}},[n,C]);function W(e,o){var r=parseInt(e.substring(1,3),16),i=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16);r=parseInt(r*(100+o)/100),i=parseInt(i*(100+o)/100),s=parseInt(s*(100+o)/100),r=r<255?r:255,i=i<255?i:255,s=s<255?s:255,r=Math.round(r),i=Math.round(i),s=Math.round(s);var c=r.toString(16).length==1?"0"+r.toString(16):r.toString(16),v=i.toString(16).length==1?"0"+i.toString(16):i.toString(16),w=s.toString(16).length==1?"0"+s.toString(16):s.toString(16);return"#"+c+v+w}const fe={color:["#66BA69","#E81A1A","#FFC107"],title:{textStyle:{color:l==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{top:(window.innerWidth>550,270),data:[a("Sales"),a("Expense"),a("Average Sales")],textStyle:{color:l==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:"4%",right:"3%",top:"10%",bottom:x.length>0?"15%":"20%",containLabel:x.length>0},xAxis:{type:"time",axisPointer:{label:{formatter:function(e){let o=new Date(e.value);return D(o)}}},nameLocation:"middle",nameGap:35,data:x.map(e=>e.requestedDate),axisLine:{lineStyle:{color:l==="dark"?"#ffffff":"#000000"}},axisLabel:{rotate:window.innerWidth<768?45:0,hideOverlap:!0,formatter:"{d} {MMM}",color:l==="dark"?"#ffffff":"#000000"}},yAxis:[{type:"value",name:(window.innerWidth>550,""),nameLocation:"middle",nameGap:42,axisLine:{lineStyle:{color:l==="dark"?"#ffffff":"#000000"}},axisLabel:{color:l==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e4?e/1e3+"k":e},splitLine:{show:!0,lineStyle:{color:l==="dark"?"grey":"silver",type:"dashed"}}},{type:"value",show:!1},{type:"value",show:!1}],dataZoom:[{show:!0,type:"inside",filterMode:"none",xAxisIndex:[0],startValue:new Date(n[0]),endValue:new Date(n[1])}],series:ce?[{name:a("Sales"),type:"bar",data:x.map(e=>[e.requestedDate,e.totalIncome]),yAxisIndex:0,barWidth:"35%",itemStyle:{borderRadius:[5,5,0,0],color:new g.graphic.LinearGradient(0,0,0,1,[{offset:1,color:W("#66BA69",0)},{offset:0,color:W("#66BA69",30)}])}},{name:a("Expense"),type:"bar",data:x.map(e=>[e.requestedDate,e.totalExpense]),yAxisIndex:0,barWidth:"35%",itemStyle:{borderRadius:[5,5,0,0],color:new g.graphic.LinearGradient(0,0,0,1,[{offset:1,color:W("#E81A1A",0)},{offset:0,color:W("#ff1A1A",40)}])}},{name:a("Average Sales"),type:"line",yAxisIndex:0,smooth:!0,itemStyle:{color:"#FFC107"},lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:x.map(e=>[e.requestedDate,Z])}]:[{name:a("Sales"),type:"line",smooth:!0,symbol:"none",data:x.map(e=>[e.requestedDate,e.totalIncome])},{name:a("Expense"),type:"line",smooth:!0,symbol:"none",data:x.map(e=>[e.requestedDate,e.totalExpense])},{name:a("Average Sales"),itemStyle:{color:"#FFC107"},type:"line",symbol:"none",smooth:!0,lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:x.map(e=>[e.requestedDate,Z])}]},K=e=>{let o="";const r=new Uint8Array(e),i=r.byteLength;for(let s=0;s<i;s++)o+=String.fromCharCode(r[s]);return window.btoa(o)},ue=async()=>{const e=k.loading("Please wait..."),o=D(n[0]),r=D(n[1]),i=await te(()=>import("./exceljs.min-6ae529e9.js").then(f=>f.e),["assets/exceljs.min-6ae529e9.js","assets/vendor-36ea1262.js"]),s=new i.Workbook,c=s.addWorksheet("Graph Data"),v=await L.get(ae,{responseType:"blob"}),w=new FileReader;w.onload=function(){const f=w.result,_=s.addImage({base64:f,extension:"png"});c.addImage(_,{tl:{col:0,row:0},ext:{width:100,height:60}});const A=c.getCell("A1");A.value=`${a("Sales-Expense Summary")} (${O})`,A.font={bold:!0,color:{argb:"000000"},size:14},A.alignment={vertical:"middle",horizontal:"center"},c.mergeCells("A1:D1");const u=c.getCell("A2");u.value=`${a("Period")}: ${o} ${a("to")} ${r}`,u.font={bold:!0,color:{argb:"000000"},size:12},u.alignment={horizontal:"center"},c.mergeCells("A2:D2"),c.getColumn(1).width=15,c.getColumn(2).width=50,c.getColumn(3).width=15;const P=c.addRow([a("#"),a("Date"),a("Sales"),a("Expense")]);P.font={bold:!0,color:{argb:"000000"},size:12,underline:!0},P.eachCell(p=>{p.font={bold:!0,color:{argb:"000000"},size:12},p.border={bottom:{style:"thin",color:{argb:"000000"}}}});const B=x.filter(p=>p.totalIncome!==0||p.totalExpense!==0);B.forEach((p,b)=>{const y=c.addRow([b+1,D(new Date(p.requestedDate)),Number(p.totalIncome),Number(p.totalExpense)]);y.getCell(2).numFmt="0.00",y.getCell(3).numFmt="0.00",y.getCell(1).alignment={horizontal:"left"},y.getCell(2).alignment={horizontal:"left"},y.getCell(3).alignment={horizontal:"right"},y.getCell(4).alignment={horizontal:"right"}});const T=c.addRow(["",a("Total"),"",""]);T.font={bold:!0,color:{argb:"000000"},size:12};const R=B.reduce((p,b)=>p+b.totalIncome,0),U=B.reduce((p,b)=>p+b.totalExpense,0),$=c.getCell(`C${T.number}`);$.value=`₹ ${R.toFixed(2)}`,$.alignment={horizontal:"right"};const z=c.getCell(`D${T.number}`);z.value=`₹ ${U.toFixed(2)}`,z.alignment={horizontal:"right"},s.xlsx.writeBuffer().then(async p=>{const b=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),y=new FormData;y.append("file",b,`${Date.now()}sales-expense_${O}_${o}_${r}.xlsx`);try{const j=await L.post("http://209.126.0.236:5064/api/uploader",y,{headers:{"Content-Type":"multipart/form-data"}});j.status==200?k.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):k.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const J=j.data.url;window.location.href=`http://209.126.0.236:5064/static/downloads/${J}`}catch(j){console.error("Error saving Excel file:",j)}})},w.readAsDataURL(v.data)},he=async()=>{const e=D(n[0]),o=D(n[1]),r=k.loading("Please wait..."),s=new URLSearchParams(window.location.search).get("lang"),c=await L.get(ke,{responseType:"arraybuffer"}),v=K(c.data),w=await L.get(Ne,{responseType:"arraybuffer"}),f=K(w.data);te(()=>import("./jspdf.es.min-b7955edd.js").then(_=>_.j),["assets/jspdf.es.min-b7955edd.js","assets/index-c2d2ef7a.js","assets/vendor-36ea1262.js","assets/index-ce24f766.css","assets/Dashboard-b6156e2a.js","assets/index.esm-39a9cba4.js","assets/install-b5fa7292.js","assets/assertThisInitialized-a147f0d7.js","assets/Dashboard-5c3f3713.css"]).then(async _=>{let A=_.default;const u=new A;u.setFontSize(12),u.addFileToVFS("NotoSansBengali.ttf",v),u.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),u.setFont("NotoSansBengali"),u.addFileToVFS("NotoSansDevanagari.ttf",f),u.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),u.setFont("NotoSansDevanagari");const P=ae,B=35,T=20;u.addImage(P,"PNG",15,9,B,T);const R=[[`${a("Sales-Expense Summary")} (${O})`]];u.autoTable({startY:27,head:R,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:20,bottom:0},styles:{font:s==="hi"?"NotoSansDevanagari":"NotoSansBengali"}});const U=[[`${a("Period")}: ${e} ${a("to")} ${o}`]];u.autoTable({startY:36,head:U,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:s==="hi"?"NotoSansDevanagari":"NotoSansBengali"}});const $=x.filter(h=>h.totalIncome!==0||h.totalExpense!==0),z=$.map((h,E)=>[E+1,D(new Date(h.requestedDate)),`₹ ${h.totalIncome.toFixed(2)}`,`₹ ${h.totalExpense.toFixed(2)}`]),p=$.reduce((h,E)=>h+E.totalIncome,0),b=$.reduce((h,E)=>h+E.totalExpense,0);(p!==0||b!==0)&&z.push(["",a("Total"),`₹ ${p.toFixed(2)}`,`₹ ${b.toFixed(2)}`]);const y=[a("#"),a("Date"),a("Sales"),a("Expense")],j={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},J={fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#75AAF0",textColor:"#FFFFFF"},ye={0:5,1:25,2:25,3:25};u.autoTable(y,z,{startY:45,headStyles:J,columnStyles:j,styles:{font:s==="hi"?"NotoSansDevanagari":"NotoSansBengali"},columnWidth:"wrap",columnWidths:ye});const Se=Date.now(),De=new Blob([u.output("blob")],{type:"application/pdf"}),ee=new FormData;ee.append("file",De,`${Se}sales-expense_${O}_${e}_${o}.pdf`);try{const h=await L.post("http://209.126.0.236:5064/api/uploader",ee,{headers:{"Content-Type":"multipart/form-data"}});h.status==200?k.update(r,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):k.update(r,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const E=await h.data.url;window.location.href=`http://209.126.0.236:5064/static/downloads/${E}`}catch(h){console.error("Error saving PDF file:",h)}})};S.useEffect(()=>{const e=o=>{G.current&&!G.current.contains(o.target)&&H.current&&!H.current.contains(o.target)&&o.target.tagName!=="svg"&&o.target.tagName!=="path"&&M(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const ge=()=>{M(!q)},D=e=>{if(!e)return"";const o=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${r}-${o}`},me=()=>{Y(!I),M(!1)},xe=(e,o)=>window.innerWidth>500||e.length<=o?e:e.substring(0,o)+"...";return t.jsxs("div",{className:`${d.chartContainer} ${l==="dark"?d.darkMode:d.lightMode}`,children:[t.jsx(je,{position:"top-center",theme:l}),t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsxs("div",{className:`fw-bold noselect fs-${window.innerWidth<=768?7:5} ${l==="dark"?d.darkMode:d.lightMode}`,children:[a("Sales-Expense")," ",a("of")," ",xe(O,10)]}),t.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:G,children:t.jsxs("div",{className:`${d.iconsContainer} d-flex justify-content-center align-items-center`,children:[t.jsx("div",{className:`${d.icon} ${l==="dark"?d.darkMode:d.lightMode} px-2 py-1`,onClick:ge,children:q?t.jsx(we,{style:{fontSize:"1.1rem"}}):t.jsx(_e,{style:{fontSize:"1.1rem"}})}),q&&t.jsxs("div",{className:`${d.exportOptions} ${l==="dark"?d.darkMode:d.lightMode}`,ref:H,children:[I?t.jsxs("div",{className:d.exportOption,onClick:()=>{Y(!I),M(!1)},children:[t.jsx(Ce,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),t.jsx("span",{children:a("View Graph")})]}):t.jsxs("div",{className:d.exportOption,onClick:me,children:[t.jsx(Fe,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:a("View Table")})]}),t.jsxs("div",{className:d.exportOption,onClick:ue,children:[t.jsx(ve,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:a("Export to Excel")})]}),t.jsxs("div",{className:d.exportOption,onClick:he,children:[t.jsx(Ee,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:a("Export to PDF")})]})]})]})})]})}),X&&t.jsx("div",{className:d.NoDataOverlay,children:t.jsx("img",{src:$e,alt:"Loading...",width:50,height:50})}),V.length==1&&!I&&!X?t.jsx("div",{className:`${d.NoDataOverlay} fs-5`,children:a("No Data Found")}):"",I?t.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"291px"},children:t.jsxs("table",{className:`table ${l=="dark"?"table-dark":""}`,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"#"}),t.jsx("th",{scope:"col",children:a("Date")}),t.jsxs("th",{scope:"col",children:[a("Sales"),"(₹)"]}),t.jsxs("th",{scope:"col",children:[a("Expense"),"(₹)"]})]})}),t.jsx("tbody",{children:V.map((e,o)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:V.length-1===o?"":o+1}),t.jsx("td",{children:e.requestedDate}),t.jsx("td",{children:parseFloat(e.sales).toFixed(2)}),t.jsx("td",{children:parseFloat(e.expense).toFixed(2)})]},e.requestedDate))})]})}):t.jsx(m,{option:fe,style:{height:"300px",width:"100%",maxWidth:"2300px"},className:l==="dark"?d.darkMode:d.lightMode})]})};export{pt as default};
