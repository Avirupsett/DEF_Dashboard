import React from 'react'
import { IoIosSpeedometer, IoIosTime } from 'react-icons/io';
import { IoLocationSharp, IoSpeedometerOutline } from 'react-icons/io5';
import { GiSandsOfTime } from 'react-icons/gi';

import { t } from 'i18next';
import FormatNumber from '../Driver/formatNumber';
import { FaRegClock } from 'react-icons/fa6';

export default function MetricsCard({ distanceCovered, drivingTime, idleTime, averageSpeed }) {
    return (
        <div className='row gap-2 mx-0 mb-1 mt-2 d-flex align-items-stretch justify-content-center'>
            <div className="px-2 rounded-3 py-2 mt-1 mx-1 " style={{ width: '44%', fontSize: window.innerWidth>500?'14px':'12px', color: "#626d77", boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px" }}>
                <div className='d-flex align-items-center'>
                <FaRegClock className='me-1 p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} /> 
                   
                    {t("Driving Time")}
                </div>
                <div className='fs-2 fw-bold py-1 px-1'>{FormatNumber(drivingTime)} <span className={window.innerWidth>500?'fs-5':'fs-6'}>hrs</span></div>
            </div>
            <div className="px-2 rounded-3 py-2 mt-1 mx-1 " style={{ width: '44%', fontSize: window.innerWidth>500?'14px':'12px', color: "#626d77", boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px" }}>
                <div className='d-flex align-items-center'>
                    <IoLocationSharp className='me-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#DC2626', backgroundColor: "#FECACA" }} />
                    {window.innerWidth>500?t("Distance Covered"):t("Distance Cov.")}
                </div>
                <div className='fs-2 fw-bold py-1 px-1'>{FormatNumber(distanceCovered)} <span className={window.innerWidth>500?'fs-5':'fs-6'}>km</span></div>
            </div>
            <div className="px-2 rounded-3 py-2 mt-1 mx-1 " style={{ width: '44%', fontSize: window.innerWidth>500?'14px':'12px', color: "#626d77", boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px" }}>
                <div className='d-flex align-items-center'>
                    <GiSandsOfTime className='me-1 p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} />
                    {t("Idle Time")}
                </div>
                <div className='fs-2 fw-bold py-1 px-1'>{FormatNumber(idleTime)} <span className={window.innerWidth>500?'fs-5':'fs-6'}>hrs</span></div>
            </div>
            <div className="px-2 rounded-3 py-2 mt-1 mx-1 " style={{ width: '44%', fontSize: window.innerWidth>500?'14px':'12px', color: "#626d77", boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px" }}>
                <div className='d-flex align-items-center'>
                    <IoSpeedometerOutline className='me-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#2563EB', backgroundColor: "#DBEAFE" }} />
                    {window.innerWidth>500?t("Average Speed"):t("Avg. Speed")}
                </div>
                <div className='fs-2 fw-bold py-1 px-1'>{FormatNumber(averageSpeed)} <span className={window.innerWidth>500?'fs-5':'fs-6'}>km/hr</span></div>
            </div>

        </div>
    )
}
