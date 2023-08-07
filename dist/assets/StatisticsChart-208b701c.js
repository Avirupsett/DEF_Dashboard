import{_ as B}from"./index-81cd6d17.js";import{r as x,u as Q,y as ee,j as a,h as te,z as ae,A as oe,B as ne,C as se,E as re,a as le}from"./vendor-1b7ca1de.js";import{l as ie,E as de,M as ce,a as L,F as pe}from"./index-0a842ed6.js";const fe="_chartContainer_1mphg_1",he="_lightMode_1mphg_47",xe="_dateFilter_1mphg_51",me="_officefilter_1mphg_207",ge="_topContainer_1mphg_299",ue="_darkMode_1mphg_319",_e="_iconsContainer_1mphg_487",be="_icon_1mphg_487",ye="_exportOptions_1mphg_571",Se="_exportOption_1mphg_571",we="_tableContainer_1mphg_825",Ce="_table_1mphg_825",Fe="_summaryHeader_1mphg_861",De="_periodHeader_1mphg_869",ve="_closeButton_1mphg_901",Ee="_tableWrapper_1mphg_931",ke="_loadingOverlay_1mphg_939",je="_NoDataOverlay_1mphg_963",Ie="_loadingSpinner_1mphg_991",Ae="_boldOption_1mphg_1003",Ne="_optionGroup_1mphg_1013",n={chartContainer:fe,lightMode:he,"label-text":"_label-text_1mphg_47",dateFilter:xe,officefilter:me,topContainer:ge,darkMode:ue,"theme-container":"_theme-container_1mphg_329",iconsContainer:_e,icon:be,exportOptions:ye,exportOption:Se,tableContainer:we,table:Ce,summaryHeader:Fe,periodHeader:De,closeButton:ve,tableWrapper:Ee,loadingOverlay:ke,NoDataOverlay:je,loadingSpinner:Ie,boldOption:Ae,optionGroup:Ne},Te=({selectedRange:i,themeMode:d,selectedOffice:k,isAdmin:H,alldata:$,isLoading:z})=>{const[p,G]=x.useState([]),[j,v]=x.useState(!1),I=x.useRef(null),A=x.useRef(null),[q,M]=x.useState(!0),[T,R]=x.useState([]),[F,W]=x.useState(!1),{t}=Q(),V=[{name:"requestedDate",label:t("Date")},{name:"sales",label:`${t("Sales")}(₹)`},{name:"expense",label:`${t("Expense")}(₹)`}],Y={selectableRowsHeader:!1,filter:!1,download:!1,print:!1,viewColumns:!1,search:!1,responsive:"standard",selectableRows:"none",rowsPerPage:10,rowsPerPageOptions:[10,25,50],tableBodyHeight:"228px",elevation:0,fixedHeader:!1,textLabels:{pagination:{rowsPerPage:t("Rows")}}};x.useEffect(()=>{const e=y(i[0]),s=y(i[1]);e&&s&&k&&(()=>{const h=$;if(Array.isArray(h.graph1)){const o=h.graph1.map(c=>({requestedDate:c.requestedDate,sales:c.totalIncome,expense:c.totalExpense}));let S=o.filter(c=>c.sales!==0||c.expense!==0);const u=o.reduce((c,m)=>c+m.sales,0).toFixed(2),_=o.reduce((c,m)=>c+m.expense,0).toFixed(2);S.push({requestedDate:t("Total"),sales:u,expense:_}),R(S),G(h.graph1)}})()},[i,k,H,$]);const P=(p.filter(e=>e.totalIncome>0).reduce((e,s)=>e+s.totalIncome,0)/p.filter(e=>e.totalIncome>0).length).toFixed(0);x.useEffect(()=>{if(i[0]&&i[1]){const e=new Date(i[0]),s=new Date(i[1]),l=ee(s,e)+1;M(l<=7)}},[i,k]);const U={color:["#66BA69","#E81A1A","#FFC107"],title:{textStyle:{color:d==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",formatter:function(e){for(var s=`<b>${t("Date")}:</b> `+e[0].name+"<br/>",l=0;l<e.length;l++)s+="<b>"+e[l].seriesName+":</b> "+e[l].value+"<br/>";return s},textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{top:window.innerWidth>550?0:270,data:[t("Sales"),t("Expense"),t("Average Sales")],textStyle:{color:d==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:window.innerWidth<=768?"7%":"4%",right:"3%",top:"10%",bottom:p.length>0?"15%":"20%",containLabel:p.length>0},xAxis:{type:"category",name:window.innerWidth>550?t("Date"):"",nameLocation:"middle",nameGap:35,nameTextStyle:{color:d==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},boundaryGap:!0,data:p.map(e=>e.requestedDate),axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{color:d==="dark"?"#ffffff":"#000000"}},yAxis:[{type:"value",name:(window.innerWidth>550,""),nameLocation:"middle",nameGap:42,nameTextStyle:{color:d==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},axisLine:{lineStyle:{color:d==="dark"?"#ffffff":"#000000"}},axisLabel:{color:d==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e4?e/1e3+"k":e},splitLine:{show:!0,lineStyle:{color:d==="dark"?"grey":"silver",type:"dashed"}}},{type:"value",show:!1},{type:"value",show:!1}],dataZoom:[{show:!0,type:"inside",filterMode:"none",xAxisIndex:[0],startValue:new Date(i[0]),endValue:new Date(i[1])}],series:q?[{name:t("Sales"),type:"bar",data:p.map(e=>e.totalIncome),yAxisIndex:0},{name:t("Expense"),type:"bar",data:p.map(e=>e.totalExpense),yAxisIndex:0},{name:t("Average Sales"),type:"line",yAxisIndex:0,smooth:!0,lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:p.map(()=>P)}]:[{name:t("Sales"),type:"line",smooth:!0,data:p.map(e=>e.totalIncome),yAxisIndex:0},{name:t("Expense"),type:"line",smooth:!0,data:p.map(e=>e.totalExpense),yAxisIndex:0},{name:t("Average Sales"),type:"line",yAxisIndex:0,smooth:!0,lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:p.map(()=>P)}]},J=async()=>{const e=y(i[0]),s=y(i[1]),l=await B(()=>import("./exceljs.min-a898dc82.js").then(_=>_.e),["assets/exceljs.min-a898dc82.js","assets/vendor-1b7ca1de.js"]),h=new l.Workbook,o=h.addWorksheet("Graph Data"),S=await le.get(L,{responseType:"blob"}),u=new FileReader;u.onload=function(){const _=u.result,c=h.addImage({base64:_,extension:"png"});o.addImage(c,{tl:{col:0,row:0},ext:{width:100,height:60}});const m=o.getCell("A1");m.value=t("Sales-Expense Summary"),m.font={bold:!0,color:{argb:"000000"},size:14},m.alignment={vertical:"middle",horizontal:"center"},o.mergeCells("A1:C1");const b=o.getCell("A2");b.value=`${t("Period")}: ${e} ${t("to")} ${s}`,b.font={bold:!0,color:{argb:"000000"},size:12},b.alignment={horizontal:"center"},o.mergeCells("A2:C2"),o.getColumn(1).width=50,o.getColumn(2).width=15,o.getColumn(3).width=15;const D=o.addRow([t("Date"),t("Sales"),t("Expense")]);D.font={bold:!0,color:{argb:"000000"},size:12,underline:!0},D.eachCell(r=>{r.font={bold:!0,color:{argb:"000000"},size:12},r.border={bottom:{style:"thin",color:{argb:"000000"}}}});const w=p.filter(r=>r.totalIncome!==0||r.totalExpense!==0);w.forEach(r=>{const g=o.addRow([r.requestedDate,Number(r.totalIncome),Number(r.totalExpense)]);g.getCell(2).numFmt="0.00",g.getCell(3).numFmt="0.00"});const C=o.addRow([t("Total"),"",""]);C.font={bold:!0,color:{argb:"000000"},size:12};const N=w.reduce((r,g)=>r+g.totalIncome,0),O=w.reduce((r,g)=>r+g.totalExpense,0),E=o.getCell(`B${C.number}`);E.value=`₹${N.toFixed(2)}`,E.alignment={horizontal:"right"};const f=o.getCell(`C${C.number}`);f.value=`₹${O.toFixed(2)}`,f.alignment={horizontal:"right"},h.xlsx.writeBuffer().then(r=>{const g=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});pe.saveAs(g,"sales-expense.xlsx")})},u.readAsDataURL(S.data)},X=()=>{const e=y(i[0]),s=y(i[1]);B(()=>import("./index-0a842ed6.js").then(l=>l.j),["assets/index-0a842ed6.js","assets/vendor-1b7ca1de.js","assets/index-81cd6d17.js","assets/index-4da97eed.css"]).then(l=>{let h=l.default;const o=new h;o.setFontSize(12);const S=L,u=35,_=20;o.addImage(S,"PNG",15,9,u,_);const c=[["Sales-Expense Summary"]];o.autoTable({startY:27,head:c,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:20,bottom:0}});const m=[[`Period: ${e} to ${s}`]];o.autoTable({startY:36,head:m,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30}});const b=p.filter(f=>f.totalIncome!==0||f.totalExpense!==0),D=b.map(f=>[f.requestedDate,f.totalIncome.toFixed(2),f.totalExpense.toFixed(2)]),w=b.reduce((f,r)=>f+r.totalIncome,0),C=b.reduce((f,r)=>f+r.totalExpense,0);(w!==0||C!==0)&&D.push(["Total",`${w.toFixed(2)}`,`${C.toFixed(2)}`]);const N=["Date","Sales","Expense"],O={1:{halign:"right"},2:{halign:"right"}},E={fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#75AAF0",textColor:"#FFFFFF"};o.autoTable(N,D,{startY:45,headStyles:E,columnStyles:O}),o.save("sales-expense.pdf")})};x.useEffect(()=>{const e=s=>{I.current&&!I.current.contains(s.target)&&A.current&&!A.current.contains(s.target)&&s.target.tagName!=="svg"&&s.target.tagName!=="path"&&v(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const Z=()=>{v(!j)},y=e=>{if(!e)return"";const s=e.getFullYear(),l=String(e.getMonth()+1).padStart(2,"0"),h=String(e.getDate()).padStart(2,"0");return`${s}-${l}-${h}`},K=()=>{W(!F),v(!1)};return a.jsxs("div",{className:`${n.chartContainer} ${d==="dark"?n.darkMode:n.lightMode}`,children:[a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[a.jsx("div",{className:`fw-bold fs-${window.innerWidth<=768?7:5} ${d==="dark"?n.darkMode:n.lightMode}`,children:t("Sales-Expense")}),a.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:I,children:a.jsxs("div",{className:`${n.iconsContainer} d-flex justify-content-center align-items-center`,children:[a.jsx("div",{className:`${n.icon} ${d==="dark"?n.darkMode:n.lightMode} px-2 py-1`,onClick:Z,children:j?a.jsx(te,{style:{fontSize:"1.1rem"}}):a.jsx(ae,{style:{fontSize:"1.1rem"}})}),j&&a.jsxs("div",{className:`${n.exportOptions} ${d==="dark"?n.darkMode:n.lightMode}`,ref:A,children:[F?a.jsxs("div",{className:n.exportOption,onClick:()=>{W(!F),v(!1)},children:[a.jsx(ne,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),a.jsx("span",{children:t("View Graph")})]}):a.jsxs("div",{className:n.exportOption,onClick:K,children:[a.jsx(oe,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),a.jsx("span",{children:t("View Table")})]}),a.jsxs("div",{className:n.exportOption,onClick:J,children:[a.jsx(se,{style:{fontSize:"1.1rem",color:"green"}}),a.jsx("span",{children:t("Export to Excel")})]}),a.jsxs("div",{className:n.exportOption,onClick:X,children:[a.jsx(re,{style:{fontSize:"1.1rem",color:"red"}}),a.jsx("span",{children:t("Export to PDF")})]})]})]})})]})}),z&&a.jsx("div",{className:n.NoDataOverlay,children:a.jsx("img",{src:ie,alt:"Loading...",width:50,height:50})}),T.length==1&&!F&&!z?a.jsx("div",{className:`${n.NoDataOverlay} fs-5`,children:t("No Data Found")}):"",F?a.jsx("div",{className:"container-fluid mt-2",children:a.jsx(ce,{data:T,columns:V,options:Y})}):a.jsx(de,{option:U,style:{height:"300px",width:"100%",maxWidth:"2300px"},className:d==="dark"?n.darkMode:n.lightMode})]})};export{Te as default};
