import React, { Suspense, useEffect, useState } from 'react'
import { IoIosRefresh } from 'react-icons/io';
import { BsPersonVcard, BsSpeedometer2, BsTelephone } from 'react-icons/bs';
import './DriverDashboard.css'
import MetricsCard from './MetricsCard';
// import TankerLevelChart from './TankerLevel';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { LinearProgress, Skeleton } from '@mui/material';
// import PrevJourney from './prevJourney';
import { BiSolidTruck } from 'react-icons/bi';
import { FaClockRotateLeft } from 'react-icons/fa6';
// import MyTrips from './Mytrips';
import WelcomePage from './WelcomePage';
const TankerLevelChart = React.lazy(() => import('./TankerLevel'));
const MyTrips = React.lazy(() => import('./Mytrips'));
const PrevJourney = React.lazy(() => import('./prevJourney'));

export default function DriverDashboard() {
    const urlParams = new URLSearchParams(window.location.search);
    const { t, i18n } = useTranslation();

    const [metricsData, setMetricsData] = useState({})
    const [prevJourney, setPrevJourney] = useState([]); // State variable for prevJourney data
    const [myTrip, setmyTrip] = useState([]);
    const [distanceCovered, setDistanceCovered] = useState(0.0)
    const [drivingTime, setDrivingTime] = useState(0.0)
    const [idleTime, setIdleTime] = useState(0.0)
    const [averageSpeed, setAverageSpeed] = useState(0.0)
    const [profile, setProfile] = useState({ "name": ".........", "licenceNo": "....", "ContactNo": ".........." })
    const [graph1, setGraph1] = useState({
        filllevel: '',
        emptylevel: 0
    })
    const [graph2, setGraph2] = useState({
        filllevel: '',
        emptylevel: 0
    })
    const [progress, setProgress] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const startProgress = () => {
        setProgress(true)
        setTimeout(() => {
            setProgress(false)
        }, 2500);
    }

    const setData = (data) => {
        setIsLoading(false)
        setMetricsData(data)
        setDistanceCovered(data.distanceCovered.toFixed(1))
        setDrivingTime(data.drivingTime.toFixed(1))
        setIdleTime(data.idleTime.toFixed(1))
        setAverageSpeed(data.averageSpeed.toFixed(1))
        setProfile({ "name": data.profile.driverName, "licenceNo": data.profile.driverLicenceNo, "ContactNo": data.profile.driverContactNo })
        setGraph1({
            filllevel: data.graph1.totalTankFuel - data.graph1.fuelUnloaded,
            emptylevel: data.graph1.fuelUnloaded
        })
        setGraph2({
            filllevel: data.graph2.totalJob - data.graph2.jobCompleted,
            emptylevel: data.graph2.jobCompleted
        })
        setPrevJourney(data.prevJourney)
        setmyTrip(data.myTrip)
    }

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
                setData(data)
            }
            else if (payload) {
                const driverIdParams = payload["sub"];
                if (driverIdParams) {
                    let response = await axios.get(`${import.meta.env.VITE_API_URL_1}/api/v1/dashboard/driver/metrics/${driverIdParams}`)
                    const { data } = response;
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
        <>
            {((distanceCovered === 0.0||distanceCovered === '0.0') && (drivingTime === 0.0||drivingTime === '0.0') && (idleTime === 0.0||idleTime==='0.0') && myTrip.length === 0 && prevJourney.length === 0) ? (!isLoading ? <WelcomePage name={profile.name} /> : <></>) :
                !isLoading ? <div style={{ fontFamily: "'Poppins', sans-serif", height: "100vh" }}>
                    <div className='py-0 pb-1' style={{ borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px", backgroundColor: "#d0e8f0d4" }}>
                        <div className='px-3 pt-3 pb-1 d-flex justify-content-between align-items-center'>
                            <div>
                                <div className='fs-2 ' style={{ letterSpacing: ".8px", fontWeight: 500, color: "var(--driver-primary)" }}>{t("Hello")},</div>
                                <div className='fs-1 lh-1' style={{ letterSpacing: ".5px", fontWeight: 500, color: "var(--driver-primary)" }}>{profile.name}</div>
                                <div className='text-secondary ' style={{ letterSpacing: "0px", lineHeight: 1.75, fontSize: 14, marginTop: "8px" }}><BsTelephone style={{ marginBottom: "4px", fontSize: "12px" }} /> +91 {profile.ContactNo.slice(0, 5)} {profile.ContactNo.slice(5,)}</div>
                                {profile.licenceNo !== '' ? <div className='text-secondary ' style={{ letterSpacing: "0px", lineHeight: 0.25, fontSize: 14 }}><BsPersonVcard style={{ marginBottom: "2px", marginRight: "0px" }} /> <span style={{ fontSize: "12px" }}>(lic.)</span> {profile.licenceNo}</div> : null}
                            </div>
                            <div className='mx-2'>
                                <IoIosRefresh className='display-5 mb-1 mx-1' style={{ color: "var(--driver-primary)" }} onClick={() => { fetchData(); startProgress() }} />
                                {progress ? <LinearProgress color="info" /> : <span style={{ minHeight: "4px", position: "relative", overflow: "hidden", display: "block", height: "4px", zIndex: 0 }}></span>}
                            </div>
                        </div>

                        <div className='display-6 fw-semibold px-3 pt-3 pb-2' style={{ color: "var(--driver-primary)", letterSpacing: ".5px" }}>
                            <div style={{ backgroundColor: "#d8ecf2", display: "inline-block", position: "relative", zIndex: 1, paddingRight: "10px" }}>
                                <BsSpeedometer2 className='' style={{ marginBottom: "3px", verticalAlign: "bottom", marginRight: "10px", color: "var(--driver-primary)" }} />
                                {t("Metrics")}
                            </div>
                            {/* <hr style={{margin:0,borderColor:"var(--driver-primary)",position:"relative",bottom:"15px"}}/> */}
                        </div>
                        <MetricsCard distanceCovered={distanceCovered} drivingTime={drivingTime} idleTime={idleTime} averageSpeed={averageSpeed} />
                    </div>
                    {/* <div className='display-6 text-dark fw-semibold px-3 pt-0 pb-2' style={{}}>
                <IoMdStats className='display-5' style={{ marginBottom: "4px", verticalAlign: "bottom", marginRight: "8px", color: 'var(--driver-primary)' }} />
                {t("Stats")}
            </div> */}
                    <div className="ms-4 me-4 d-flex align-items-center justify-content-between" style={{ marginTop: "10px" }}>
                        <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "165px", borderRadius: "8px", width: "45%" }} />}>
                            <TankerLevelChart title={"Tanker Fuel Level"} filllevel={graph1.filllevel} emptylevel={graph1.emptylevel} fillTitle="Fuel Left" emptyTitle="Fuel Unloaded" />
                        </Suspense>
                        <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "165px", borderRadius: "8px", width: "45%" }} />}>
                            <TankerLevelChart title={"Jobs Completed"} filllevel={graph2.filllevel} emptylevel={graph2.emptylevel} fillTitle="Job Done" emptyTitle="Job Left" />
                        </Suspense>

                    </div>

                    <div className='display-6 text-dark fw-semibold px-3 pt-4 pb-2' style={{ color: "var(--driver-primary)", letterSpacing: ".5px" }}>
                        <div style={{ backgroundColor: "white", display: "inline-block", position: "relative", zIndex: 1, paddingRight: "10px" }}>
                            <BiSolidTruck className='display-5' style={{ marginBottom: "3px", verticalAlign: "bottom", marginRight: "10px", color: 'var(--driver-primary)' }} />
                            {t("My Trips")}
                        </div>
                        {/* <hr style={{ margin: 0, borderColor: "var(--driver-primary)", position: "relative", bottom: "15px" }} /> */}
                    </div>
                    <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "250px", borderRadius: "8px", width: "100%" }} />}>
                        <MyTrips myTrip={myTrip} />
                    </Suspense>
                    <div className='display-6 text-dark fw-semibold px-3 pt-4 pb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <FaClockRotateLeft className='display-5' style={{ marginBottom: "3px", verticalAlign: "bottom", marginRight: "12px", color: '#4b8587' }} />
                            {t("Prev Journey")}
                        </div>
                        {/* <BiFilterAlt /> */}
                    </div>
                    <Suspense fallback={<Skeleton variant='rounded' style={{ paddingTop: "250px", borderRadius: "8px", width: "100%" }} />}>
                        <PrevJourney prevJourney={prevJourney} />
                    </Suspense>
                </div> : <></>
            }
        </>
    )
}
