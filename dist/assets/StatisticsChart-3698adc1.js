import{_ as Q}from"./index-8dd76ac6.js";import{r as m,u as fe,z as he,j as a,i as ue,A as ge,B as xe,C as me,E as ye,G as we,a as T}from"./vendor-2c9ab8d9.js";import{k as be,l as Se,E as _e,Q as F,a as X,f as Ce,b as De}from"./NotoSansDevanagari-VariableFont_wdth_wght-9350ae36.js";const Fe="_chartContainer_1mphg_1",ve="_lightMode_1mphg_47",ke="_dateFilter_1mphg_51",$e="_officefilter_1mphg_207",Ee="_topContainer_1mphg_299",je="_darkMode_1mphg_319",Ne="_iconsContainer_1mphg_487",Oe="_icon_1mphg_487",Te="_exportOptions_1mphg_571",ze="_exportOption_1mphg_571",Be="_tableContainer_1mphg_825",Ie="_table_1mphg_825",Ae="_summaryHeader_1mphg_861",Le="_periodHeader_1mphg_869",Pe="_closeButton_1mphg_901",We="_tableWrapper_1mphg_931",He="_loadingOverlay_1mphg_939",qe="_NoDataOverlay_1mphg_963",Ge="_loadingSpinner_1mphg_991",Ve="_boldOption_1mphg_1003",Re="_optionGroup_1mphg_1013",n={chartContainer:Fe,lightMode:ve,"label-text":"_label-text_1mphg_47",dateFilter:ke,officefilter:$e,topContainer:Ee,darkMode:je,"theme-container":"_theme-container_1mphg_329",iconsContainer:Ne,icon:Oe,exportOptions:Te,exportOption:ze,tableContainer:Be,table:Ie,summaryHeader:Ae,periodHeader:Le,closeButton:Pe,tableWrapper:We,loadingOverlay:He,NoDataOverlay:qe,loadingSpinner:Ge,boldOption:Ve,optionGroup:Re},Je=({selectedRange:h,themeMode:i,selectedOffice:I,isAdmin:Z,alldata:V,isLoading:R,officeName:v})=>{const[u,K]=m.useState([]),[A,z]=m.useState(!1),L=m.useRef(null),P=m.useRef(null),[ee,te]=m.useState(!0),[W,ae]=m.useState([]),[k,U]=m.useState(!1),{t}=fe();t("Date"),`${t("Sales")}`,`${t("Expense")}`,t("Rows"),m.useEffect(()=>{const e=y(h[0]),o=y(h[1]);e&&o&&I&&(()=>{const w=V;if(Array.isArray(w.graph1)){const p=w.graph1.map(d=>({requestedDate:y(new Date(d.requestedDate)),sales:d.totalIncome,expense:d.totalExpense}));let r=p.filter(d=>d.sales!==0||d.expense!==0);const $=p.reduce((d,b)=>d+b.sales,0).toFixed(2),S=p.reduce((d,b)=>d+b.expense,0).toFixed(2);r.push({requestedDate:t("Total"),sales:$,expense:S}),ae(r),K(w.graph1)}})()},[h,I,Z,V]);const Y=(u.filter(e=>e.totalIncome>0).reduce((e,o)=>e+o.totalIncome,0)/u.length).toFixed(0);m.useEffect(()=>{if(h[0]&&h[1]){const e=new Date(h[0]),o=new Date(h[1]),s=he(o,e)+1;te(s<=7)}},[h,I]);const oe={color:["#66BA69","#E81A1A","#FFC107"],title:{textStyle:{color:i==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",formatter:function(e){for(var o=`<b>${t("Date")}:</b> `+e[0].name+"<br/>",s=0;s<e.length;s++)o+="<b>"+e[s].seriesName+":</b> "+e[s].value+"<br/>";return o},textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{top:(window.innerWidth>550,270),data:[t("Sales"),t("Expense"),t("Average Sales")],textStyle:{color:i==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:(window.innerWidth<=768,"4%"),right:"3%",top:"10%",bottom:u.length>0?"15%":"20%",containLabel:u.length>0},xAxis:{type:"category",name:"",nameLocation:"middle",nameGap:35,nameTextStyle:{color:i==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},boundaryGap:!0,data:u.map(e=>e.requestedDate),axisLine:{lineStyle:{color:i==="dark"?"#ffffff":"#000000"}},axisLabel:{color:i==="dark"?"#ffffff":"#000000"}},yAxis:[{type:"value",name:(window.innerWidth>550,""),nameLocation:"middle",nameGap:42,nameTextStyle:{color:i==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},axisLine:{lineStyle:{color:i==="dark"?"#ffffff":"#000000"}},axisLabel:{color:i==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e4?e/1e3+"k":e},splitLine:{show:!0,lineStyle:{color:i==="dark"?"grey":"silver",type:"dashed"}}},{type:"value",show:!1},{type:"value",show:!1}],dataZoom:[{show:!0,type:"inside",filterMode:"none",xAxisIndex:[0],startValue:new Date(h[0]),endValue:new Date(h[1])}],series:ee?[{name:t("Sales"),type:"bar",data:u.map(e=>e.totalIncome),yAxisIndex:0},{name:t("Expense"),type:"bar",data:u.map(e=>e.totalExpense),yAxisIndex:0},{name:t("Average Sales"),type:"line",yAxisIndex:0,smooth:!0,lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:u.map(()=>Y)}]:[{name:t("Sales"),type:"line",smooth:!0,data:u.map(e=>e.totalIncome),yAxisIndex:0},{name:t("Expense"),type:"line",smooth:!0,data:u.map(e=>e.totalExpense),yAxisIndex:0},{name:t("Average Sales"),type:"line",yAxisIndex:0,smooth:!0,lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:u.map(()=>Y)}]},M=e=>{let o="";const s=new Uint8Array(e),w=s.byteLength;for(let p=0;p<w;p++)o+=String.fromCharCode(s[p]);return window.btoa(o)},ne=async()=>{const e=F.loading("Please wait..."),o=y(h[0]),s=y(h[1]),w=await Q(()=>import("./exceljs.min-681e91c0.js").then(d=>d.e),["assets/exceljs.min-681e91c0.js","assets/vendor-2c9ab8d9.js"]),p=new w.Workbook,r=p.addWorksheet("Graph Data"),$=await T.get(X,{responseType:"blob"}),S=new FileReader;S.onload=function(){const d=S.result,b=p.addImage({base64:d,extension:"png"});r.addImage(b,{tl:{col:0,row:0},ext:{width:100,height:60}});const E=r.getCell("A1");E.value=`${t("Sales-Expense Summary")} (${v})`,E.font={bold:!0,color:{argb:"000000"},size:14},E.alignment={vertical:"middle",horizontal:"center"},r.mergeCells("A1:D1");const c=r.getCell("A2");c.value=`${t("Period")}: ${o} ${t("to")} ${s}`,c.font={bold:!0,color:{argb:"000000"},size:12},c.alignment={horizontal:"center"},r.mergeCells("A2:D2"),r.getColumn(1).width=15,r.getColumn(2).width=50,r.getColumn(3).width=15;const B=r.addRow([t("#"),t("Date"),t("Sales"),t("Expense")]);B.font={bold:!0,color:{argb:"000000"},size:12,underline:!0},B.eachCell(l=>{l.font={bold:!0,color:{argb:"000000"},size:12},l.border={bottom:{style:"thin",color:{argb:"000000"}}}});const j=u.filter(l=>l.totalIncome!==0||l.totalExpense!==0);j.forEach((l,x)=>{const g=r.addRow([x+1,y(new Date(l.requestedDate)),Number(l.totalIncome),Number(l.totalExpense)]);g.getCell(2).numFmt="0.00",g.getCell(3).numFmt="0.00",g.getCell(1).alignment={horizontal:"left"},g.getCell(2).alignment={horizontal:"left"},g.getCell(3).alignment={horizontal:"right"},g.getCell(4).alignment={horizontal:"right"}});const N=r.addRow(["",t("Total"),"",""]);N.font={bold:!0,color:{argb:"000000"},size:12};const H=j.reduce((l,x)=>l+x.totalIncome,0),q=j.reduce((l,x)=>l+x.totalExpense,0),C=r.getCell(`C${N.number}`);C.value=`₹ ${H.toFixed(2)}`,C.alignment={horizontal:"right"};const O=r.getCell(`D${N.number}`);O.value=`₹ ${q.toFixed(2)}`,O.alignment={horizontal:"right"},p.xlsx.writeBuffer().then(async l=>{const x=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),g=new FormData;g.append("file",x,`${Date.now()}sales-expense_${v}_${o}_${s}.xlsx`);try{const D=await T.post("https://def-dash-route-api.inspirigenceworks.co.in/api/uploader",g,{headers:{"Content-Type":"multipart/form-data"}});D.status==200?F.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):F.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const G=D.data.url;window.location.href=`https://def-dash-route-api.inspirigenceworks.co.in/static/downloads/${G}`}catch(D){console.error("Error saving Excel file:",D)}})},S.readAsDataURL($.data)},se=async()=>{const e=y(h[0]),o=y(h[1]),s=F.loading("Please wait..."),p=new URLSearchParams(window.location.search).get("lang"),r=await T.get(Ce,{responseType:"arraybuffer"}),$=M(r.data),S=await T.get(De,{responseType:"arraybuffer"}),d=M(S.data);Q(()=>import("./NotoSansDevanagari-VariableFont_wdth_wght-9350ae36.js").then(b=>b.j),["assets/NotoSansDevanagari-VariableFont_wdth_wght-9350ae36.js","assets/vendor-2c9ab8d9.js","assets/index-8dd76ac6.js","assets/index-a647bc22.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css"]).then(async b=>{let E=b.default;const c=new E;c.setFontSize(12),c.addFileToVFS("NotoSansBengali.ttf",$),c.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),c.setFont("NotoSansBengali"),c.addFileToVFS("NotoSansDevanagari.ttf",d),c.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),c.setFont("NotoSansDevanagari");const B=X,j=35,N=20;c.addImage(B,"PNG",15,9,j,N);const H=[[`${t("Sales-Expense Summary")} (${v})`]];c.autoTable({startY:27,head:H,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:20,bottom:0},styles:{font:p==="hi"?"NotoSansDevanagari":"NotoSansBengali"}});const q=[[`${t("Period")}: ${e} ${t("to")} ${o}`]];c.autoTable({startY:36,head:q,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:p==="hi"?"NotoSansDevanagari":"NotoSansBengali"}});const C=u.filter(f=>f.totalIncome!==0||f.totalExpense!==0),O=C.map((f,_)=>[_+1,y(new Date(f.requestedDate)),`₹ ${f.totalIncome.toFixed(2)}`,`₹ ${f.totalExpense.toFixed(2)}`]),l=C.reduce((f,_)=>f+_.totalIncome,0),x=C.reduce((f,_)=>f+_.totalExpense,0);(l!==0||x!==0)&&O.push(["",t("Total"),`₹ ${l.toFixed(2)}`,`₹ ${x.toFixed(2)}`]);const g=[t("#"),t("Date"),t("Sales"),t("Expense")],D={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},G={fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#75AAF0",textColor:"#FFFFFF"},de={0:5,1:25,2:25,3:25};c.autoTable(g,O,{startY:45,headStyles:G,columnStyles:D,styles:{font:p==="hi"?"NotoSansDevanagari":"NotoSansBengali"},columnWidth:"wrap",columnWidths:de});const ce=Date.now(),pe=new Blob([c.output("blob")],{type:"application/pdf"}),J=new FormData;J.append("file",pe,`${ce}sales-expense_${v}_${e}_${o}.pdf`);try{const f=await T.post("https://def-dash-route-api.inspirigenceworks.co.in/api/uploader",J,{headers:{"Content-Type":"multipart/form-data"}});f.status==200?F.update(s,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):F.update(s,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const _=await f.data.url;window.location.href=`https://def-dash-route-api.inspirigenceworks.co.in/static/downloads/${_}`}catch(f){console.error("Error saving PDF file:",f)}})};m.useEffect(()=>{const e=o=>{L.current&&!L.current.contains(o.target)&&P.current&&!P.current.contains(o.target)&&o.target.tagName!=="svg"&&o.target.tagName!=="path"&&z(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const re=()=>{z(!A)},y=e=>{if(!e)return"";const o=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${s}-${o}`},le=()=>{U(!k),z(!1)},ie=(e,o)=>window.innerWidth>500||e.length<=o?e:e.substring(0,o)+"...";return a.jsxs("div",{className:`${n.chartContainer} ${i==="dark"?n.darkMode:n.lightMode}`,children:[a.jsx(be,{position:"top-center",theme:i}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[a.jsxs("div",{className:`fw-bold fs-${window.innerWidth<=768?7:5} ${i==="dark"?n.darkMode:n.lightMode}`,children:[t("Sales-Expense")," ",t("of")," ",ie(v,10)]}),a.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:L,children:a.jsxs("div",{className:`${n.iconsContainer} d-flex justify-content-center align-items-center`,children:[a.jsx("div",{className:`${n.icon} ${i==="dark"?n.darkMode:n.lightMode} px-2 py-1`,onClick:re,children:A?a.jsx(ue,{style:{fontSize:"1.1rem"}}):a.jsx(ge,{style:{fontSize:"1.1rem"}})}),A&&a.jsxs("div",{className:`${n.exportOptions} ${i==="dark"?n.darkMode:n.lightMode}`,ref:P,children:[k?a.jsxs("div",{className:n.exportOption,onClick:()=>{U(!k),z(!1)},children:[a.jsx(me,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),a.jsx("span",{children:t("View Graph")})]}):a.jsxs("div",{className:n.exportOption,onClick:le,children:[a.jsx(xe,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),a.jsx("span",{children:t("View Table")})]}),a.jsxs("div",{className:n.exportOption,onClick:ne,children:[a.jsx(ye,{style:{fontSize:"1.1rem",color:"green"}}),a.jsx("span",{children:t("Export to Excel")})]}),a.jsxs("div",{className:n.exportOption,onClick:se,children:[a.jsx(we,{style:{fontSize:"1.1rem",color:"red"}}),a.jsx("span",{children:t("Export to PDF")})]})]})]})})]})}),R&&a.jsx("div",{className:n.NoDataOverlay,children:a.jsx("img",{src:Se,alt:"Loading...",width:50,height:50})}),W.length==1&&!k&&!R?a.jsx("div",{className:`${n.NoDataOverlay} fs-5`,children:t("No Data Found")}):"",k?a.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"291px"},children:a.jsxs("table",{className:`table ${i=="dark"?"table-dark":""}`,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:"#"}),a.jsx("th",{scope:"col",children:t("Date")}),a.jsxs("th",{scope:"col",children:[t("Sales"),"(₹)"]}),a.jsxs("th",{scope:"col",children:[t("Expense"),"(₹)"]})]})}),a.jsx("tbody",{children:W.map((e,o)=>a.jsxs("tr",{children:[a.jsx("th",{scope:"row",children:W.length-1===o?"":o+1}),a.jsx("td",{children:e.requestedDate}),a.jsx("td",{children:parseFloat(e.sales).toFixed(2)}),a.jsx("td",{children:parseFloat(e.expense).toFixed(2)})]},e.requestedDate))})]})}):a.jsx(_e,{option:oe,style:{height:"300px",width:"100%",maxWidth:"2300px"},className:i==="dark"?n.darkMode:n.lightMode})]})};export{Je as default};
