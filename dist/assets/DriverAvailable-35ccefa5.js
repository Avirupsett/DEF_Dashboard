import{r as a,j as e,e as _,t as v,f as U,u as J}from"./vendor-d1a31163.js";import{r as x}from"./index-536690ae.js";import{F as D,a as O,c as q}from"./axios-d9b95618.js";import{a as K,B as V}from"./Box-f65f2bf3.js";import{Q as R,k as X}from"./react-toastify.esm-34a8b48c.js";import{T as Y}from"./ThemeProvider-68b9b4a4.js";import{F as Z,S as ee,M as T}from"./Select-006978da.js";import{I as se}from"./InputLabel-0d786470.js";/* empty css                      */import"./extendSxProp-4fc022a8.js";import"./createSvgIcon-a8b447bb.js";import"./react-is.production.min-ec3da07b.js";import"./useTheme-55d19bd2.js";const te="_viewbutton_ynk9f_29",ae="_assignbutton_ynk9f_37",E={viewbutton:te,assignbutton:ae},re=({data:y,deliveryPlanId:l,updatedBy:j,token:g,deliveryPlanStatusId:c})=>{const[b,S]=a.useState("all"),[u,w]=a.useState(window.innerWidth),W=a.useMemo(()=>[{Header:"Driver Name",accessor:"driverName",Cell:({cell:s,row:t})=>e.jsxs("div",{className:"d-flex align-items-center",style:{textWrap:"nowrap"},children:[s.value," ",t.original.recommendation===!0&&l===3?e.jsx("div",{className:"p-2 py-1 d-flex align-items-center ms-1 noselect",style:{color:"#9333EA",backgroundColor:"transparent",borderRadius:"8px",letterSpacing:".5px",width:"fit-content"},children:" ⭐"}):e.jsx(e.Fragment,{})]})},{Header:"Contact No",accessor:"contactNumber"},{Header:"Lic. No",accessor:"licenceNo"},{Header:"Status",accessor:"assigned",Cell:({cell:s,row:t})=>s.value&&t.original.deliveryPlanId===l?e.jsxs("div",{className:"p-2 py-1 d-flex align-items-center",style:{color:"rgb(133 77 14 /1)",backgroundColor:" rgb(254 240 138/50%)",borderRadius:"8px",letterSpacing:".5px",width:"fit-content"},children:[e.jsx(D,{className:"me-1"})," Busy"]}):s.value?e.jsxs("div",{className:"p-2 py-1 d-flex align-items-center",style:{color:"rgb(133 77 14 /1)",backgroundColor:" rgb(254 240 138/50%)",borderRadius:"8px",letterSpacing:".5px",width:"fit-content"},children:[e.jsx(D,{className:"me-1"})," Busy"]}):e.jsxs("div",{className:"p-2 py-1 d-flex align-items-center",style:{color:"rgb(22 101 52/1)",backgroundColor:" rgb(187 247 208/50%)",borderRadius:"8px",letterSpacing:".5px",width:"fit-content"},children:[e.jsx(D,{className:"me-1"})," Available"]})},{Header:"Stats",id:"stats",Cell:({cell:s,row:t})=>e.jsxs("button",{className:`ps-2 pe-3 py-1 rounded-3 fs-6 btn ${E.viewbutton}`,style:{color:"#6366F1",border:"2px solid #6366F1"},onClick:()=>N(t.original.driverId,t.original.assigned,t.original.deliveryPlanId),children:[e.jsx(K,{className:"ms-1"}),u>950?" View":""]})},{Header:"Action",accessor:"assigned",id:"action",Cell:({cell:s,row:t})=>!s.value&&c===3?e.jsx("button",{className:`px-3 py-1 text-white rounded-3 fs-6 btn ${E.assignbutton}`,style:{backgroundColor:"#3B82F6"},onClick:()=>k(t.original.driverId),children:"Assign"}):t.original.deliveryPlanId==l?e.jsx("div",{className:"fs-5 fw-bold",style:{color:"#3B82F6"},children:"Assigned"}):e.jsx(e.Fragment,{})}],[]),o=_(),N=(s,t,L)=>{t&&L===l?o("/driverdashboardweb/"+s,{state:{isback:!0,statusId:c,token:g}}):o("/driverdashboardweb/"+s,{state:{isback:!0,statusId:c,token:g}})},k=async s=>{const t=R.loading("Assigning...");await O.post("https://dev-def-pumps-api.inspirigenceworks.co.in/api/DeliveryPlan/AssignDriver",{deliveryPlanId:l,driverId:s,updatedBy:j}).then(L=>{R.update(t,{render:"Assigned Successfully",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}),o("/driverdashboardweb/"+s,{state:{isback:!0,statusId:3}})}).catch(L=>{R.update(t,{render:"Assigned Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1})})};a.useEffect(()=>{const s=()=>{w(window.innerWidth)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const{getTableProps:C,getTableBodyProps:P,headerGroups:h,page:p,prepareRow:i,state:z,setGlobalFilter:F,gotoPage:f,nextPage:I,previousPage:r,canNextPage:n,canPreviousPage:d,pageOptions:m,pageCount:B,setPageSize:A,setFilter:H}=x.useTable({columns:W,data:y,initialState:{pageIndex:0,pageSize:5}},x.useFilters,x.useGlobalFilter,x.useSortBy,x.usePagination),{globalFilter:M,pageIndex:$,pageSize:ne}=z,G=(s,t)=>{t==="all"?H("assigned",""):H("assigned",t)},Q=q({});return e.jsxs("div",{className:"my-2",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("div",{className:"d-flex",children:e.jsx("input",{type:"text",className:"form-control ms-3 my-2 py-2",placeholder:"Search","aria-label":"Search",value:M||"",onChange:s=>F(s.target.value)})}),e.jsx("div",{className:"d-flex me-3 ms-2",children:e.jsx(Y,{theme:Q,children:e.jsx(V,{sx:{minWidth:120},children:e.jsxs(Z,{sx:{mx:1,mt:1,minWidth:180},size:"small",children:[e.jsx(se,{className:"px-1",id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important',backgroundColor:"white"},children:v("Status")}),e.jsxs(ee,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:b,onChange:s=>{S(s.target.value),G(p,s.target.value)},style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},selectprops:{MenuProps:{MenuListProps:{className:E.menu}}},children:[e.jsx(T,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"all",children:v("All")}),e.jsx(T,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"true",children:v("Busy")}),e.jsx(T,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"false",children:v("Available")})]})]})})})})]}),e.jsxs("div",{className:"rounded-3 mx-3 overflow-x-auto",style:{border:"2px solid #F4F4F5",boxShadow:"rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px"},children:[e.jsxs("table",{...C(),style:{width:"100%"},children:[e.jsx("thead",{className:"",children:h.map(s=>e.jsx("tr",{style:{backgroundColor:"#239dab",textWrap:"nowrap",fontSize:u>500?"22px":"14px"},...s.getHeaderGroupProps(),children:s.headers.map(t=>e.jsxs("th",{className:"text-white px-2 py-2",style:{textWrap:"nowrap",fontSize:u>500?"22px":"14px"},...t.getHeaderProps(t.getSortByToggleProps()),children:[t.render("Header"),e.jsx("span",{children:t.isSorted?t.isSortedDesc?" ↑":" ↓":""})]}))}))}),e.jsx("tbody",{...P(),children:p.map(s=>(i(s),e.jsx("tr",{...s.getRowProps(),children:s.cells.map(t=>e.jsx("td",{className:"px-2 fs-6 py-2",...t.getCellProps(),children:t.render("Cell")}))})))})]}),p.length===0&&e.jsx("div",{className:"text-center py-3 fs-6",style:{color:"#4B5563"},children:"No Records found..."})]}),e.jsxs("div",{className:u>500?"mt-1 d-flex justify-content-between align-items-center flex-row":"mt-1 d-flex justify-content-center align-items-center flex-column",children:[e.jsxs("span",{className:"py-2 fs-6 mx-2 ms-3",children:["Page"," ",e.jsxs("strong",{children:[$+1," of ",m.length]})," "]}),e.jsx("div",{}),e.jsxs("div",{className:"py-2 d-flex justify-content-center fs-5 mx-2 me-3",children:[e.jsx("button",{className:"mx-1 px-2 py-1 text-white rounded-3",style:{backgroundColor:d?"#239dab":"rgb(193 201 211)"},onClick:()=>f(0),disabled:!d,children:"<<"})," ",e.jsxs("button",{className:"mx-1 px-2 py-1 pe-3 text-white rounded-3",style:{backgroundColor:d?"#239dab":"rgb(193 201 211)"},onClick:()=>r(),disabled:!d,children:["<"," Prev"]})," ",e.jsxs("button",{className:"mx-1 px-2 py-1 ps-3 text-white rounded-3",style:{backgroundColor:n?"#239dab":"rgb(193 201 211)"},onClick:()=>I(),disabled:!n,children:["Next ",">"]})," ",e.jsx("button",{className:"mx-1 px-2 py-1 text-white rounded-3",style:{backgroundColor:n?"#239dab":"rgb(193 201 211)"},onClick:()=>f(B-1),disabled:!n,children:">>"})," "]})]})]})};function ve(){const[y,l]=a.useState([]),[j,g]=a.useState(0),[c,b]=a.useState(!0),[S,u]=a.useState(!1),[w,W]=a.useState("");a.useState(""),a.useState("");const[o,N]=a.useState("false"),k=_();U();const[C,P]=a.useState(""),[h,p]=a.useState([]),i=new URLSearchParams(window.location.search),{t:z,i18n:F}=J();function f(r){return atob(r)}a.useState([]),a.useEffect(()=>{console.log(localStorage.getItem("webtoken"))},[]);const I=async()=>{try{F.changeLanguage(i.get("lang")||"en");let r="";const n=i.get("token"),d=i.get("tableview");if(N(d),n&&(r=JSON.parse(f(n))),r){const m=r.deliveryPlanId;if(P(r.updatedBy),g(m),m){let B=await O.get(`https://dev-def-dash-route-api.inspirigenceworks.co.in/api/v1/driver_available/${m}`);const{data:A}=B;l(A.driverAvailable),p(A.deliveryPlanStatus),b(!1)}}}catch(r){console.log(r),b(!1)}};return a.useEffect(()=>{I()},[]),e.jsx(e.Fragment,{children:c?e.jsx("div",{className:"my-3 d-flex justify-content-center align-items-center",children:e.jsx("div",{className:"spinner-border text-primary ",role:"status",style:{}})}):e.jsxs(e.Fragment,{children:[e.jsx(X,{position:"top-center"}),S&&(o==="false"||o===null)?k(`/driverdashboardweb/${w}`,{state:{isback:!1,statusId:h[0].DeliveryPlanStatusId,token:i.get("token")}}):e.jsx(re,{data:y,deliveryPlanId:j,updatedBy:C,token:i.get("token"),deliveryPlanStatusId:h[0].DeliveryPlanStatusId})]})})}export{ve as default};