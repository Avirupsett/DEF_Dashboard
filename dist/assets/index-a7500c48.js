import{R as d,j as s,a as S,b as m,r as y,i as T,c as $,d as h,B as f}from"./vendor-f48e548e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const N="modulepreload",v=function(a){return"/"+a},C={},p=function(r,i,c){if(!i||i.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=v(e),e in C)return;C[e]=!0;const o=e.endsWith(".css"),P=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${P}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":N,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,u)=>{n.addEventListener("load",l),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})};const g=d.lazy(()=>p(()=>import("./DriverAvailable-232918db.js"),["assets/DriverAvailable-232918db.js","assets/vendor-f48e548e.js","assets/ResponsiveTable-07c5d293.js","assets/index-41ce01ef.js","assets/assertThisInitialized-02748e78.js","assets/react-toastify.esm-81104cc6.js","assets/ButtonBase-a89ef7b4.js","assets/extendSxProp-246317be.js","assets/Select-7d29be83.js","assets/createSvgIcon-a28dcbb5.js","assets/useTheme-6bee9f51.js","assets/InputLabel-6317524e.js","assets/ResponsiveTable-bb564051.css","assets/ReactToastify-55fec1ff.css"])),E=d.lazy(()=>p(()=>import("./DriverDashboardWeb-6d035605.js"),["assets/DriverDashboardWeb-6d035605.js","assets/vendor-f48e548e.js","assets/assertThisInitialized-02748e78.js","assets/index.esm-dcd22834.js","assets/ResponsiveTable-07c5d293.js","assets/index-41ce01ef.js","assets/react-toastify.esm-81104cc6.js","assets/ButtonBase-a89ef7b4.js","assets/extendSxProp-246317be.js","assets/Select-7d29be83.js","assets/createSvgIcon-a28dcbb5.js","assets/useTheme-6bee9f51.js","assets/InputLabel-6317524e.js","assets/ResponsiveTable-bb564051.css","assets/TimelineSeparator-48dd3db1.js","assets/installSVGRenderer-7788c1a1.js"])),D=d.lazy(()=>p(()=>import("./DriverDashboard-cee3cbb3.js").then(a=>a.D),["assets/DriverDashboard-cee3cbb3.js","assets/vendor-f48e548e.js","assets/index.esm-dcd22834.js","assets/assertThisInitialized-02748e78.js","assets/useTheme-6bee9f51.js","assets/ButtonBase-a89ef7b4.js","assets/ToggleButtonGroup-a827a044.js","assets/Skeleton-5c5f8b2f.js","assets/DriverDashboard-49a25ed2.css"])),x=d.lazy(()=>p(()=>import("./Dashboard-bac1c265.js").then(a=>a.D),["assets/Dashboard-bac1c265.js","assets/vendor-f48e548e.js","assets/assertThisInitialized-02748e78.js","assets/installSVGRenderer-7788c1a1.js","assets/Skeleton-5c5f8b2f.js","assets/Dashboard-5c3f3713.css"])),b=()=>s.jsxs(S,{children:[s.jsx(m,{path:"/",element:s.jsx("div",{id:"dashboard",children:s.jsx(x,{})})}),s.jsx(m,{path:"/driver",element:s.jsx(D,{})}),s.jsx(m,{path:"/driverstatistic",element:s.jsx(y.Suspense,{fallback:s.jsx("div",{}),children:s.jsx(g,{})})}),s.jsx(m,{path:"/driverdashboardweb/:driverId",element:s.jsx(y.Suspense,{fallback:s.jsx("div",{}),children:s.jsx(E,{})})})]});const w="Users",V="Office",L="Sales",M="Expense",A="days",F="CompanyAdmin",B="PumpUser",k="PumpAdmin",R="Company",O="Filter",W="Close",U="Entities",_="Companies",Q="Pumps",I="Today",j="Yesterday",Y="Total",G="Period",H="Quantity",J="to",q="Product",z="Rows",K="Sale",X="Qty",Z="of",ee="Name",te="Mobile",se="Vehicle",oe="Top",ae="Visit",ne="Payment",re="Count",ie="Card",le="UPI",ce="Cash",ue="NetBanking",me="Customers",de="Hello",pe="Metrics",ye="Status",Ce="Delivered",Pe="Pending",Se="All",Te="Distance",$e="Duration",he="MobileNo",fe="VehicleNo",Ne="Page",ve="Search",ge="Current",Ee="Bottom",De={Users:w,Office:V,Sales:L,Expense:M,days:A,CompanyAdmin:F,PumpUser:B,PumpAdmin:k,Company:R,"Retail Pumps":"Retail Pumps","Wholesale Pumps":"Wholesale Pumps","Sales Overview":"Sales Overview","Sales-Expense":"Sales-Expense","Product Volume":"Product Volume","Product Quantity":"Product Quantity","Total Sales by Business Entity":"Total Sales by Business Entity","Average Sales":"Average Sales",Date:"Date",Filter:O,Close:W,"No office data available":"No office data available","No user data available":"No user data available","Total Sales":"Total Sales","Total Qty":"Total Qty","View Table":"View Table","View Graph":"View Graph","Export to Excel":"Export to Excel","Export to PDF":"Export to PDF",Entities:U,Companies:_,Pumps:Q,Today:I,Yesterday:j,"This week":"This week","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","This month":"This month","Last month":"Last month","This year":"This year","Last year":"Last year","Last week":"Last week","Next week":"Next week",Total:Y,Period:G,"Sales-Expense Summary":"Sales-Expense Summary","Product Wise Summary Data":"Product Wise Summary Data","Product Name":"Product Name","Office Name":"Office Name",Quantity:H,to:J,Product:q,"No Data Found":"No Data Found",Rows:z,"Total Sale":"Total Sale","Product Wise":"Product Wise",Sale:K,Qty:X,of:Z,"Top Customers":"Top Customers",Name:ee,Mobile:te,Vehicle:se,Top:oe,Visit:ae,"Sales (Day Wise)":"Sales (Day Wise)","Sales (Month Wise)":"Sales (Month Wise)","Sales (Year Wise)":"Sales (Year Wise)","Payment Mode":"Payment Mode",Payment:ne,Count:re,Card:ie,UPI:le,Cash:ce,NetBanking:ue,Customers:me,"Customer Type":"Customer Type","Total Count":"Total Count","Existing Customers":"Existing Customers","New Customers":"New Customers","Existing Customer Count":"Existing Customer Count","Existing Customer Sales":"Existing Customer Sales","New Customer Count":"New Customer Count","New Customer Sales":"New Customer Sales","Customers Summary Data":"Customers Summary Data","Customer Name":"Customer Name","Mobile No":"Mobile No","Vehicle No":"Vehicle No","Top Customers Summary Data":"Top Customers Summary Data","Distance Covered":"Distance Covered",Hello:de,"Driving Time":"Driving Time","Idle Time":"Idle Time","Average Speed":"Average Speed","Tanker Fuel Level":"Tanker Fuel Level","Jobs Completed":"Jobs Completed",Metrics:pe,"My Trips":"My Trips","Prev Journey":"Prev Journey",Status:ye,Delivered:Ce,Pending:Pe,All:Se,Distance:Te,"Tank Level":"Tank Level",Duration:$e,"Travel Routes":"Travel Routes","Big Buyers":"Big Buyers","Former Customers":"Former Customers","Former Low-Value Customers":"Former Low-Value Customers","Most Valuable Customers":"Most Valuable Customers","Most Frequent Customers":"Most Frequent Customers","Non Follow-Up Customers":"Most Follow-Up Customers","Customer Profiling":"Customer Profiling",MobileNo:he,VehicleNo:fe,"Last Visit":"Last Visit","Total Visits":"Total Visits","Go to page":"Go to page",Page:Ne,"days ago":"days ago",Search:ve,"Office Wise Sales":"Office Wise Sales",Current:ge,"All Time":"All Time",Bottom:Ee},xe="उपयोगकर्ता",be="कार्यालय",we="बिक्री",Ve="खर्च",Le="दिन",Me="कंपनी प्रशासक",Ae="पंप उपयोगकर्ता",Fe="पंप व्यवस्थापक",Be="कंपनी",ke="फ़िल्टर",Re="बंद करें",Oe="संस्थान",We="कंपनियाँ",Ue="पंप",_e="आज",Qe="कल",Ie="कुल",je="अवधि",Ye="मात्रा",Ge="से",He="उत्पाद",Je="पंक्तियाँ",qe="बिक्री",ze="मात्रा",Ke="की",Xe="नाम",Ze="मोबाइल",et="वाहन",tt="शीर्ष",st="यात्रा",ot="भुगतान",at="गणना",nt="कार्ड",rt="यूपीआई",it="नकद",lt="नेट बैंकिंग",ct="ग्राहक",ut="नमस्ते",mt="मैट्रिक्स",dt="स्थिति",pt="पहुंचाया गया",yt="बकाया",Ct="सभी",Pt="दूरी",St="अवधि",Tt="मोबाइल नंबर",$t="वाहन नंबर",ht="पृष्ठ",ft="खोजें",Nt="वर्तमान",vt="नीचे",gt={Users:xe,Office:be,Sales:we,Expense:Ve,days:Le,CompanyAdmin:Me,PumpUser:Ae,PumpAdmin:Fe,Company:Be,"Retail Pumps":"खुदरा पंप","Wholesale Pumps":"थोक पंप","Sales Overview":"बिक्री अवलोकन","Sales-Expense":"बिक्री-खर्च","Product Volume":"उत्पाद आयतन","Product Quantity":"उत्पाद मात्रा","Total Sales by Business Entity":"व्यवसायिक एकाधिकारी द्वारा कुल बिक्री","Average Sales":"औसत बिक्री",Date:"तारीख",Filter:ke,Close:Re,"No office data available":"कोई कार्यालय डेटा उपलब्ध नहीं है","No user data available":"कोई उपयोगकर्ता डेटा उपलब्ध नहीं है","Total Sales":"कुल बिक्री","Total Qty":"कुल मात्रा","View Table":"टेबल देखें","View Graph":"ग्राफ़ देखें","Export to Excel":"एक्सेल में निर्यात करें","Export to PDF":"पीडीएफ में निर्यात करें",Entities:Oe,Companies:We,Pumps:Ue,Today:_e,Yesterday:Qe,"This week":"इस सप्ताह","Last 7 days":"पिछले 7 दिन","Last 30 days":"पिछले 30 दिन","This month":"इस महीने","Last month":"पिछले महीने","This year":"इस साल","Last year":"पिछले साल","Last week":"पिछले सप्ताह","Next week":"अगले सप्ताह","Sales-Expense Summary":"बिक्री-व्यय सारांश","Sales-Expense Summary Data":"बिक्री-व्यय सारांश डेटा",Total:Ie,"Sub Total":"उप कुल","Total Expenses":"कुल व्यय","Total Profit":"कुल लाभ",Period:je,"Product Name":"उत्पाद का नाम","Office Name":"कार्यालय का नाम",Quantity:Ye,to:Ge,Product:He,"No Data Found":"कोई डेटा नहीं मिला",Rows:Je,"Product Wise Summary Data":"उत्पाद वार संक्षिप्त आंकड़े","Total Sale":"कुल बिक्री","Product Wise":"उत्पाद वार",Sale:qe,Qty:ze,of:Ke,"Top Customers":"शीर्ष ग्राहक",Name:Xe,Mobile:Ze,Vehicle:et,Top:tt,Visit:st,"Sales (Day Wise)":"दिन के आधार पर बिक्री","Sales (Month Wise)":"महीने के आधार पर बिक्री","Sales (Year Wise)":"वर्ष के आधार पर बिक्री","Payment Mode":"भुगतान मोड",Payment:ot,Count:at,Card:nt,UPI:rt,Cash:it,NetBanking:lt,Customers:ct,"Customer Type":"ग्राहक प्रकार","Total Count":"कुल गणना","Existing Customers":"मौजूदा ग्राहक","New Customers":"नए ग्राहक","Existing Customer Count":"मौजूदा ग्राहक गणना","Existing Customer Sales":"मौजूदा ग्राहक बिक्री","New Customer Count":"नए ग्राहक गणना","New Customer Sales":"नए ग्राहक बिक्री","Customers Summary Data":"ग्राहक संक्षेप डेटा","Customer Name":"ग्राहक का नाम","Mobile No":"मोबाइल नंबर","Vehicle No":"वाहन नंबर","Top Customers Summary Data":"शीर्ष ग्राहक संक्षेप डेटा","Distance Covered":"प्रवेशित दूरी",Hello:ut,"Driving Time":"ड्राइविंग समय","Idle Time":"निरक्रिय समय","Average Speed":"औसत गति","Tanker Fuel Level":"टैंकर ईंधन स्तर","Jobs Completed":"काम पूरा किया",Metrics:mt,"My Trips":"मेरी यात्राएँ","Prev Journey":"पिछली यात्रा",Status:dt,Delivered:pt,Pending:yt,All:Ct,Distance:Pt,"Tank Level":"टैंक स्तर",Duration:St,"Travel Routes":"यात्रा मार्ग","Big Buyers":"बड़े खरीददार","Former Customers":"पूर्व ग्राहक","Former Low-Value Customers":"पूर्व कम मूल्य वाले ग्राहक","Most Valuable Customers":"सबसे मूल्यवान ग्राहक","Most Frequent Customers":"सबसे आवाजन ग्राहक","Non Follow-Up Customers":"गैर फॉलो-अप ग्राहक","Customer Profiling":"ग्राहक प्रोफ़ाइलिंग",MobileNo:Tt,VehicleNo:$t,"Last Visit":"आखिरी दौरा","Total Visits":"कुल दौरे","Go to page":"पृष्ठ पर जाएं",Page:ht,"days ago":"दिन पहले",Search:ft,"Office Wise Sales":"कार्यालय के आधार पर बिक्री",Current:Nt,"All Time":"सभी समय",Bottom:vt},Et="ব্যবহারকারী",Dt="অফিস",xt="বিক্রয়",bt="ব্যয়",wt="দিন",Vt="কোম্পানি প্রশাসক",Lt="পাম্প ব্যবহারকারী",Mt="পাম্প প্রশাসক",At="কোম্পানি",Ft="ফিল্টার",Bt="বন্ধ করুন",kt="ইণ্টিটি",Rt="কোম্পানি",Ot="পাম্প",Wt="আজ",Ut="গতকাল",_t="মোট",Qt="সময়কাল",It="পরিমাণ",jt="থেকে",Yt="পণ্য",Gt="সারি",Ht="বিক্রি",Jt="পরিমাণ",qt="এর",zt="নাম",Kt="মোবাইল",Xt="যানবাহন",Zt="শীর্ষ",es="দর্শন",ts="পেমেন্ট",ss="গণনা",os="কার্ড",as="উপি",ns="নগদ",rs="নেটব্যাংকিং",is="গ্রাহক",ls="হ্যালো",cs="মেট্রিক্স",us="স্থিতি",ms="প্রদান করা",ds="মুলতুবি",ps="সব",ys="দূরত্ব",Cs="সময়কাল",Ps="মোবাইল নম্বর",Ss="যানবাহন নম্বর",Ts="পৃষ্ঠা",$s="অনুসন্ধান",hs="বর্তমান",fs="নীচে",Ns={Users:Et,Office:Dt,Sales:xt,Expense:bt,days:wt,CompanyAdmin:Vt,PumpUser:Lt,PumpAdmin:Mt,Company:At,"Retail Pumps":"রিটেল পাম্প","Wholesale Pumps":"হোলসেল পাম্প","Sales Overview":"বিক্রয় ওভারভিউ","Sales-Expense":"বিক্রয়-ব্যয়","Product Volume":"প্রোডাক্ট আয়তন","Product Quantity":"প্রোডাক্ট পরিমাণ","Total Sales by Business Entity":"ব্যবসায় ইণ্টিটি অনুসারে মোট বিক্রয়","Average Sales":"গড় বিক্রয়",Date:"তারিখ",Filter:Ft,Close:Bt,"No office data available":"কোন অফিস তথ্য পাওয়া যায়নি","No user data available":"কোন ব্যবহারকারী তথ্য পাওয়া যায়নি","Total Sales":"মোট বিক্রয়","Total Qty":"মোট পরিমাণ","View Table":"টেবিল দেখুন","View Graph":"গ্রাফ দেখুন","Export to Excel":"এক্সেলে রপ্তানি করুন","Export to PDF":"পিডিএফে রপ্তানি করুন",Entities:kt,Companies:Rt,Pumps:Ot,Today:Wt,Yesterday:Ut,"This week":"এই সপ্তাহ","Last 7 days":"গত ৭ দিন","Last 30 days":"গত ৩০ দিন","This month":"এই মাস","Last month":"গত মাস","This year":"এই বছর","Last year":"গত বছর","Last week":"গত সপ্তাহ","Next week":"পরবর্তী সপ্তাহ","Sales-Expense Summary":"বিক্রয়-ব্যয় সারাংশ","Sales-Expense Summary Data":"বিক্রয়-ব্যয় সারাংশ ডেটা",Total:_t,"Sub Total":"উপ মোট","Total Expenses":"মোট ব্যয়",Period:Qt,"Product Name":"পণ্যের নাম","Office Name":"অফিসের নাম",Quantity:It,to:jt,Product:Yt,"No Data Found":"কোন ডেটা পাওয়া যায়নি",Rows:Gt,"Product Wise Summary Data":"পণ্য ভিত্তিক সংক্ষিপ্ত উপাদান","Total Sale":"মোট বিক্রি","Product Wise":"পণ্য অনুযায়ী",Sale:Ht,Qty:Jt,of:qt,"Top Customers":"শীর্ষ গ্রাহকগণ",Name:zt,Mobile:Kt,Vehicle:Xt,Top:Zt,Visit:es,"Sales (Day Wise)":"দিনভিত্তিক বিক্রয়","Sales (Month Wise)":"মাসিক বিক্রয়","Sales (Year Wise)":"বার্ষিক বিক্রয়","Payment Mode":"পেমেন্ট মোড",Payment:ts,Count:ss,Card:os,UPI:as,Cash:ns,NetBanking:rs,Customers:is,"Customer Type":"গ্রাহক প্রকার","Total Count":"মোট গণনা","Existing Customers":"বিদ্যমান গ্রাহক","New Customers":"নতুন গ্রাহক","Existing Customer Count":"বিদ্যমান গ্রাহকের সংখ্যা","Existing Customer Sales":"বিদ্যমান গ্রাহকের বিপণি","New Customer Count":"নতুন গ্রাহকের সংখ্যা","New Customer Sales":"নতুন গ্রাহকের বিপণি","Customers Summary Data":"গ্রাহক সংক্ষিপ্ত তথ্য","Customer Name":"গ্রাহকের নাম","Mobile No":"মোবাইল নম্বর","Vehicle No":"গাড়ির নম্বর","Top Customers Summary Data":"শীর্ষ গ্রাহকের সংক্ষেপণ তথ্য","Distance Covered":"যানবাহন পার করা দূরত্ব",Hello:ls,"Driving Time":"গাড়ি চালানোর সময়","Idle Time":"শূন্য সময়","Average Speed":"গড় গতি","Tanker Fuel Level":"ট্যাঙ্কার ঈধন স্তর","Jobs Completed":"কাজ সম্পন্ন",Metrics:cs,"My Trips":"আমার যাত্রা","Prev Journey":"পূর্ববর্তী যাত্রা",Status:us,Delivered:ms,Pending:ds,All:ps,Distance:ys,"Tank Level":"ট্যাঙ্ক স্তর",Duration:Cs,"Travel Routes":"ভ্রমণ মার্গ","Big Buyers":"বড় ক্রেতা","Former Customers":"পূর্ববর্তী গ্রাহক","Former Low-Value Customers":"পূর্ববর্তী নিম্ন-মূল্য গ্রাহক","Most Valuable Customers":"সবচেয়ে মূল্যবান গ্রাহক","Most Frequent Customers":"সবচেয়ে সম্প্রচারিত গ্রাহক","Non Follow-Up Customers":"অনুসরণ করা হয়নি গ্রাহক","Customer Profiling":"গ্রাহক প্রোফাইলিং",MobileNo:Ps,VehicleNo:Ss,"Last Visit":"শেষ দর্শন","Total Visits":"মোট দর্শন","Go to page":"পৃষ্ঠা যান",Page:Ts,"days ago":"দিন আগে",Search:$s,"Office Wise Sales":"অফিস ভাবে বিক্রয়",Current:hs,"All Time":"সর্বকাল",Bottom:fs},vs={en:{translation:De},hi:{translation:gt},bn:{translation:Ns}};T.use($).init({resources:vs,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});h.createRoot(document.getElementById("root")).render(s.jsx(f,{children:s.jsx(b,{})}));export{p as _};