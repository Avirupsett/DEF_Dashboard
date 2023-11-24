// import { t } from 'i18next'
import React, { useEffect, useRef, useState } from 'react'
import DriverCards from './DriverCards'
import { MdCall } from "react-icons/md";

import CurrentTrip from './CurrentTrip';
// import MyMapComponent from './MapComponent';
import TankerLevelChart from './TankerLevel';
import { IoMdStats } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import PrevJourney from './prevJourney';

function DriverDashboardWeb() {

    const [data, setData] = useState({
        distanceCovered: 0.0,
        drivingTime: 0.0,
        idleTime: 0.0,
        averageSpeed: 0.0,
        profile: {
            driverName: "",
            driverLicenceNo: "",
            driverContactNo: ""
        },
        graph1: {
            totalTankFuel: 0.0,
            fuelUnloaded: 0.0
        },
        graph2: {
            totalJob: 0.0,
            jobCompleted: 0.0
        },
        prevJourney: [],
        myTrip: [],
        alltime: {
            "distanceCovered": 0,
            "drivingTime": 0,
            "idleTime": 0,
            "averageSpeed": 0
        }

    })
    const [isLoading, setIsLoading] = useState(true)
    const [activeOngoing, setActiveOngoing] = useState(false)
    const [activePrevious, setActivePrevious] = useState(true)
    const urlParams = new URLSearchParams(window.location.search);
    const { t, i18n } = useTranslation();

    const fetchData = async () => {
        try {
            i18n.changeLanguage(urlParams.get("lang") || "en");
            let payload = ""
            const jwtToken = urlParams.get("jwtToken");
            if (jwtToken) {
                payload = JSON.parse(atob(jwtToken.split('.')[1]))
            }
            const driverIdParams = urlParams.get("driverId");
            if (driverIdParams) {
                let response = await axios.get(`${import.meta.env.VITE_API_URL_1}/api/v1/dashboard/driver/metrics/${driverIdParams}`)
                const { data } = response;
                if (response.data) {
                    setIsLoading(false)
                }
                setData(data)
            }
            else if (payload) {
                const driverIdParams = payload["sub"];
                if (driverIdParams) {
                    let response = await axios.get(`${import.meta.env.VITE_API_URL_1}/api/v1/dashboard/driver/metrics/${driverIdParams}`)
                    const { data } = response;
                    if (response.data) {
                        setIsLoading(false)
                    }
                    setData(data)
                }
            }

        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {

        fetchData();

        // Set up the interval to call fetchData every 5 minutes (300,000 milliseconds)
        const intervalId = setInterval(fetchData, 300000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [])


    return (
        <div className='d-flex align-items-start justify-content-between'>
            <div className=' mx-0 align-items-start ' style={{ width: window.innerWidth > 950 ? '60%' : "100%", overflowY: 'scroll', height: '99vh' }}>
                <div className='fs-4 mt-3 fw-bolder px-xl-5 px-lg-4 px-md-3 px-2' style={{ color: '#15283b' }}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            {data.profile.driverName}
                            <div className='px-2 py-1 rounded-2 fs-6 mx-2' style={{ backgroundColor: 'rgb(37, 99, 235,0.1)', color: 'rgb(37, 99, 235)', letterSpacing: '1px' }} >Driver</div>
                            <div className="spinner-border text-primary " role="status" style={{ display: isLoading ? 'block' : 'none' }}>
                                
                            </div>
                        </div>
                        {/* Add an anchor tag for telephone */}
                        <a href={`tel:${data.profile.driverContactNo}`} style={{ cursor: 'pointer' }}>
                            <MdCall className='fs-3' style={{ color: 'rgb(37, 99, 235)', cursor: 'pointer' }} />
                        </a>
                    </div>

                    <hr style={{ borderColor: 'rgb(37, 99, 235)', borderWidth: '2px', marginBottom: '5px', marginTop: '10px' }} />
                </div>
                <DriverCards distanceCovered={data.alltime.distanceCovered} drivingTime={data.alltime.drivingTime} idleTime={data.alltime.idleTime} averageSpeed={data.alltime.averageSpeed} />
                <div style={{ display: window.innerWidth <= 950 ? 'block' : "none" }}>
                    {/* <div className='' style={{ height: '60vh' }}>
                    <MyMapComponent />
                </div> */}
                    <div className='p-2 py-3  rounded-3' style={{ boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px", backgroundColor: "white", position: "relative", marginTop: "5px" }}>
                        <div className='fs-2 fw-bold px-2 mb-1' style={{ color: '#15283b' }}>
                            <IoMdStats className='display-6' style={{ marginBottom: "4px", verticalAlign: "bottom", marginRight: "8px", color: 'rgb(37, 99, 235)' }} />
                            {t("Stats For Ongoing Trip")}
                        </div>
                        <div className='d-flex align-items-center justify-content-around' >
                            <TankerLevelChart title={"Tanker Fuel Level"} filllevel={data.graph1.totalTankFuel - data.graph1.fuelUnloaded} emptylevel={data.graph1.fuelUnloaded} fillTitle="Fuel Left" emptyTitle="Fuel Unloaded" />
                            <TankerLevelChart title={"Jobs Completed"} emptylevel={data.graph2.totalJob - data.graph2.jobCompleted} filllevel={data.graph2.jobCompleted} fillTitle="Job Done" emptyTitle="Job Left" />
                        </div>
                    </div>
                </div>
                <div className="accordion px-xl-5 px-lg-4 px-md-3 px-2 mt-3">
                    <div className="accordion-item ">
                        <h2 className="accordion-header" id="headingOne" >
                            <button onClick={() => setActiveOngoing(!activeOngoing)} className={`accordion-button ${activeOngoing ? "collapsed" : ""} fs-4`} type="button" style={{ color: !activeOngoing ? 'rgb(37, 99, 235)' : '#15283b' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {t("Ongoing Trip")}
                            </button>
                        </h2>
                        <div id="collapseOne" className={`accordion-collapse collapse ${!activeOngoing ? "show" : ""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-1 py-2">
                                <div className=''>
                                    <CurrentTrip currentTrip={data.myTrip} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion px-xl-5 px-lg-4 px-md-3 px-2 mt-3">
                    <div className="accordion-item ">
                        <h2 className="accordion-header" id="headingOne" >
                            <button onClick={() => setActivePrevious(!activePrevious)} className={`accordion-button ${activePrevious ? "collapsed" : ""} fs-4`} type="button" style={{ color: !activePrevious ? 'rgb(37, 99, 235)' : '#15283b' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {t("Previous Trip")}
                            </button>
                        </h2>
                        <div id="collapseOne" className={`accordion-collapse collapse ${!activePrevious ? "show" : ""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-1 py-2">
                                <div className=''>
                                    <PrevJourney prevJourney={data.prevJourney} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div style={{ width: '40%', height: '99vh', display: window.innerWidth > 950 ? 'block' : "none" }}>
                {/* <div className='' style={{ height: '60vh' }}>
                    <MyMapComponent />
                </div> */}
                <div className='p-2 py-3  rounded-3' style={{ boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px", backgroundColor: "white", position: "relative", marginTop: "5px" }}>
                    <div className='fs-2 fw-bold px-2 mb-1' style={{ color: '#15283b' }}>
                        <IoMdStats className='display-6' style={{ marginBottom: "4px", verticalAlign: "bottom", marginRight: "8px", color: 'rgb(37, 99, 235)' }} />
                        {t("Stats For Ongoing Trip")}
                    </div>
                    <div className='d-flex align-items-center justify-content-around' >
                        <TankerLevelChart title={"Tanker Fuel Level"} filllevel={data.graph1.totalTankFuel - data.graph1.fuelUnloaded} emptylevel={data.graph1.fuelUnloaded} fillTitle="Fuel Left" emptyTitle="Fuel Unloaded" />
                        <TankerLevelChart title={"Jobs Completed"} emptylevel={data.graph2.totalJob - data.graph2.jobCompleted} filllevel={data.graph2.jobCompleted} fillTitle="Job Done" emptyTitle="Job Left" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DriverDashboardWeb