import css from './Statistics.module.css';
import React, { useState, useEffect, Suspense } from 'react';

import axios from 'axios';
import { DateRangePicker } from 'rsuite';
import { addDays, subDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, toDate } from 'date-fns';
import './Statistics.module.css'
import { FaCalendarAlt, FaRegBuilding, FaCoins } from "react-icons/fa";
import { FaXmark, FaFilter } from "react-icons/fa6";
import { Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import fetchSalesData from './FetchSalesData';


const StatisticsChart = React.lazy(() => import('../StatisticsChart/StatisticsChart'));
const StatisticsChart2 = React.lazy(() => import('../StatisticsChart2/StatisticsChart2'));
const OrdersPieChart = React.lazy(() => import('../OrdersPieChart/OrdersPieChart'));
const ProductQtyChart = React.lazy(() => import('../ProductQtyChart/ProductQtyChart'))


const Statistics = ({ themeMode, officeId, adminStatus, userId, userOfficeName }) => {

  const { t } = useTranslation();
  const predefinedRanges = [
    {
      label: t('Today'),
      value: [new Date(), new Date()],
      placement: 'left'
    },
    {
      label: t('Yesterday'),
      value: [addDays(new Date(), -1), addDays(new Date(), -1)],
      placement: 'left'
    },
    {
      label: t('This week'),
      value: [startOfWeek(new Date()), endOfWeek(new Date())],
      placement: 'left'
    },
    {
      label: t('Last 7 days'),
      value: [subDays(new Date(), 6), new Date()],
      placement: 'left'
    },
    {
      label: t('Last 30 days'),
      value: [subDays(new Date(), 29), new Date()],
      placement: 'left'
    },
    {
      label: t('This month'),
      value: [startOfMonth(new Date()), new Date()],
      placement: 'left'
    },
    {
      label: t('Last month'),
      value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))],
      placement: 'left'
    },
    {
      label: t('This year'),
      value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
      placement: 'left'
    },
    {
      label: t('Last year'),
      value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)],
      placement: 'left'
    },
    {
      label: t('Last week'),
      closeOverlay: false,
      value: value => {
        const [start = new Date()] = value || [];
        return [
          addDays(startOfWeek(start, { weekStartsOn: 0 }), -7),
          addDays(endOfWeek(start, { weekStartsOn: 0 }), -7)
        ];
      },
      appearance: 'default'
    },
    {
      label: t('Next week'),
      closeOverlay: false,
      value: value => {
        const [start = new Date()] = value || [];
        return [
          addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
          addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
        ];
      },
      appearance: 'default'
    }
  ];
  const [selectedRange, setSelectedRange] = useState([
    toDate(subDays(new Date(), 6)),
    toDate(new Date())
  ]);

  const [officeData, setOfficeData] = useState([]); // State to hold the fetched office data

  const [selectedOffice, setSelectedOffice] = useState(officeId);
  const [isAdmin, setIsAdmin] = useState(adminStatus);

  const [companies, setCompanies] = useState([])
  const [wholesales, setWholesales] = useState([])
  const [retails, setRetails] = useState([])
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterOn, setFilterOn] = useState(false)
  const [officeName, setOfficeName] = useState("")
  const [alldata, setAlldata] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [originallist, setOriginallist] = useState([])
  const [officeIdLocal, setOfficeIdLocal] = useState(officeId)

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


  useEffect(() => {

    const fetchData = async () => {
      try {
        if (userId && officeId) {
          const response = await axios.get(`${import.meta.env.VITE_API_URL_1}/api/v1/dashboard/dropdown_list/${userId}`);
          const officeDataFromApi = await response.data;
          setIsLoading(true)

          let SalesResponse = await fetchSalesData(selectedRange[0], selectedRange[1], officeId, adminStatus)
          if (SalesResponse) {
            setAlldata(SalesResponse)
            setIsLoading(false)
          }
          if (officeDataFromApi) {

            if (officeDataFromApi.length === 1) {
              setOfficeName(userOfficeName)
            }




            setSelectedOffice(officeId)
            setIsAdmin(adminStatus)
            setOfficeIdLocal(officeId)


            setOfficeData(officeDataFromApi);
            let temp=[]
            officeDataFromApi.map((office)=>{
              temp.push(
                {
                  "officeId": office.OfficeId,
                  "officeName": office.OfficeName,
                  "officeType": office.OfficeTypeName,
                }
              )
            
            })
            setCompanies(temp.filter(
              (office) => office.officeType === "Company"
            ));
            setWholesales(temp.filter(
              (office) => office.officeType === "Wholesale Pumps"
            ));
            setRetails(temp.filter(
              (office) => office.officeType === "Retail Pumps"
            ));
            setOriginallist({officeId,adminStatus})
          
          }
        }

      } catch (error) {
        console.log('Error fetching office data:', error);
      }
    };

    fetchData();

  }, [userId, officeId, adminStatus]);

  useEffect(()=>{
    if(selectedOffice)
    handleSelectedOffice()

  },[selectedOffice])

 const handleSelectedOffice =async()=>{
     setIsLoading(true)
    let SalesResponse = await fetchSalesData(selectedRange[0], selectedRange[1], selectedOffice, isAdmin)
      if (SalesResponse) {
        setAlldata(SalesResponse)
        setIsLoading(false)
      }
 }

  const handleDateRange = async (value) => {

    if (value === null) {
      setSelectedRange([null, null]); // Clear the dateRange value
    } else {
      setIsLoading(true)
      setSelectedRange(value);
      let SalesResponse = await fetchSalesData(value[0], value[1], selectedOffice, isAdmin)
      if (SalesResponse) {
        setAlldata(SalesResponse)
        setIsLoading(false)
      }
    }
  };


  const handleOfficeChange = async (event) => {
    const selectedOption = event.target.selectedOptions[0];
    // const isRetail = selectedOption.getAttribute("data-isretail");
    setIsLoading(true)
    const isAdmin = selectedOption.getAttribute("data-isadmin");

    setSelectedOffice(event.target.value);
    setIsAdmin(isAdmin);

    if (officeData.filter(
      (office) => office.OfficeId === event.target.value
    ).length > 0) {
      setOfficeName(officeData.filter(
        (office) => office.OfficeId === event.target.value
      )[0].OfficeName)
    }
    let SalesResponse = await fetchSalesData(selectedRange[0], selectedRange[1], event.target.value, isAdmin)
    if (SalesResponse) {
      setAlldata(SalesResponse)
      setIsLoading(false)
    }
  };
  
  const trimName = (name, maxLength) => {
    if (window.innerWidth > 500) {
      return name; // For larger screens, show the full name without truncation
    } else {
      if (name.length <= maxLength) {
        return name;
      } else {
        return name.substring(0, maxLength) + '...';
      }
    }
  };


  return (

    <div className={`${css.container} ${themeMode === 'dark' ? 'theme-container' : 'theme2-container'} pb-5`}>
      <div className='d-flex justify-content-between align-items-center mb-0'>
        <div className='fs-2 mx-sm-0 mx-md-3 fw-bold'><span className='me-2 ms-md-1  ms-2 text-primary'><FaCoins /></span> {t("Sales Overview")}</div>
        <button className="btn btn-primary btn-lg mx-2 d-flex align-items-center" type="submit" onClick={() => setFilterOn(!filterOn)}><span className='d-flex'>{filterOn ? <FaXmark style={{ fontSize: "1.4rem", marginRight: window.innerWidth > 500 ? "4px" : "0px" }} /> : <FaFilter style={{ fontSize: "1.2rem", marginRight: window.innerWidth > 500 ? "8px" : "0px" }} />}</span>  {window.innerWidth > 500 ? filterOn ? t('Close') : t(`Filter`) : ""}</button>
      </div>
      <div style={{ visibility: filterOn ? 'visible' : 'hidden', opacity: filterOn ? 1 : 0, height: filterOn ? window.innerWidth >= 768 ? "85px" : "130px" : 0, marginBottom: filterOn ? "10px" : 0 }} className={`${css.topContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
        }`}>


        <div className="row d-flex justify-content-start flex-wrap align-items-center mx-0 mx-sm-2 mx-md-0 w-100" style={{ width: "100% !important" }}>
          <div className="col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center pw-md-0 mx-0 ">
            {window.innerWidth > 400 ? <div className="me-2 me-sm-3  ms-1 ms-lg-2"><FaCalendarAlt style={{ fontSize: '2.3rem', color: "white" }} /></div> : ''}
            <DateRangePicker
              ranges={predefinedRanges}
              size="lg"
              showOneCalendar
              style={{ color: 'black', width: "100%" }}

              value={selectedRange}
              onChange={handleDateRange}
              appearance="default"
              className={`${css.dateRangePicker}`}
            />
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center mx-0">
            {window.innerWidth > 400 ? <div className="me-2 me-sm-3 ms-1 ms-lg-2 mt-1"><FaRegBuilding style={{ fontSize: '2.3rem', color: "white" }} /></div> : ''}
            <select className="form-select form-select-lg" aria-label="Default select example" id="office" onChange={handleOfficeChange} style={{ paddingBottom: "4px !important", paddingTop: "4px !important" }}>
              {companies.length > 1 ? <><option
                value={officeIdLocal}
                data-isretail="-1"
                data-isadmin="6"
                className={`${css.boldOption}`}

              >
                {t("All Entities")}

              </option> </> : ''}
              {companies.length > 0 ? <><option
                value={officeIdLocal}
                data-isretail="0"
                data-isadmin="4"
                className={`${css.boldOption}`}

              >
                &nbsp;&nbsp;{t("All Companies")}
              </option></> : ''}

              {companies.map((company) => (
                <option
                  key={company.officeId}
                  value={company.officeId}
                  // data-isretail={company.OfficeTypeId === 2 ? "1" : "0"}
                  data-isadmin="5"
                  className={`${css.optionGroup}`}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {trimName(company.officeName, 20)}
                </option>
              ))}

              {wholesales.length > 1 || retails.length > 1 ? <> <option
                value={officeIdLocal}
                data-isretail="-1"
                data-isadmin="1"
                className={`${css.boldOption}`}

              >
                &nbsp;&nbsp;{t("All Pumps")}
              </option></> : ''}
              {wholesales.length > 0  ? <><option
                value={officeIdLocal}
                data-isretail="0"
                data-isadmin="3"
                className={`${css.boldOption}`}

              >
                &nbsp;&nbsp;&nbsp;{t("Wholesale Pumps")}
              </option></> : ''}
              {wholesales.map((wholesalep) => (
                <option
                  key={wholesalep.officeId}
                  value={wholesalep.officeId}
                  // data-isretail={wholesalep.OfficeTypeId === 2 ? "1" : "0"}
                  data-isadmin="0"
                  className={`${css.optionGroup}`}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {trimName(wholesalep.officeName, 20)}
                </option>
              ))}
              {(retails.length > 0) ? <option
                value={officeIdLocal}
                data-isretail="1"
                data-isadmin="2"
                className={`${css.boldOption}`}

              >
                &nbsp;&nbsp;&nbsp;{t("Retail Pumps")}
              </option> : ''}

               {retails.map((retailp) => (
                <option
                  key={retailp.officeId}
                  value={retailp.officeId}
                  // data-isretail={retailp.officeTypeId === 2 ? "1" : "0"}
                  data-isadmin="0"
                  className={`${css.optionGroup}`}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {retailp.officeName}
                </option>
              )) }
              
              {/* retails.map((retailp) => (
                <option
                  key={retailp.officeId}
                  value={retailp.officeId}
                  // data-isretail={retailp.OfficeTypeId === 2 ? "1" : "0"}
                  data-isadmin="0"
                  className={`${css.optionGroup}`}
                >
                  {trimName(retailp.officeName, 20)}
                </option>
              ) */}
            </select>
          </div>

        </div>
      </div>

      <div className={`${window.innerWidth > 550 ? "container-fluid" : ""}`}>
        <div className='row'>

          <div className='col-md-12 col-lg-8'>
            <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "360px", borderRadius: "8px", marginBottom: "5px" }} />}>
              <StatisticsChart selectedRange={selectedRange} themeMode={themeMode} selectedOffice={selectedOffice} isAdmin={isAdmin} alldata={alldata} isLoading={isLoading} />
            </Suspense>
          </div>
          <div className='col-md-12 col-lg-4'>
            <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "360px", borderRadius: "8px", marginBottom: "5px" }} />}>
              <OrdersPieChart selectedRange={selectedRange} themeMode={themeMode} selectedOffice={selectedOffice} isAdmin={isAdmin} alldata={alldata} isLoading={isLoading} />
            </Suspense>
          </div>

          <div className='col-md-12 col-lg-4 mt-2' >
            <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "360px", borderRadius: "8px", marginBottom: "5px" }} />}>
              <ProductQtyChart selectedRange={selectedRange} themeMode={themeMode} selectedOffice={selectedOffice} isAdmin={isAdmin} alldata={alldata} isLoading={isLoading} />
            </Suspense>
          </div>
          <div className='col-md-12 col-lg-8 mt-2' >
            <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "360px", borderRadius: "8px", marginBottom: "5px" }} />}>
              <StatisticsChart2 selectedRange={selectedRange} themeMode={themeMode} selectedOffice={selectedOffice} isAdmin={isAdmin} SelectedOfficeName={officeName} setSelectedOffice={setSelectedOffice} setIsAdmin={setIsAdmin} setCompanies={setCompanies} setWholesales={setWholesales} setRetails={setRetails} originallist={originallist} setOfficeIdLocal={setOfficeIdLocal} officeIdLocal={officeIdLocal}/>
            </Suspense>
          </div>
        </div>
        {/* {selectedOffice.length > 0 ? <div className='row'>
          <div className='col-md-12 col-lg-8'><StatisticsChart selectedRange={selectedRange} themeMode={themeMode} selectedOffice={selectedOffice} isAdmin={isAdmin} /></div>
        </div> : ''} */}
      </div>



    </div>

  );
};

export default Statistics;
