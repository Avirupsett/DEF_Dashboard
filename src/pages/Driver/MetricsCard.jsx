import React from 'react'
import {IoIosSpeedometer, IoIosTime } from 'react-icons/io';
import {IoLocationSharp} from 'react-icons/io5';
import { GiSandsOfTime} from 'react-icons/gi';
import { t } from 'i18next';

export default function MetricsCard({distanceCovered,drivingTime,idleTime,averageSpeed}) {
    return (
        <div className='row gap-2 mx-0 mb-3 d-flex align-items-stretch justify-content-center'>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1 bg-light" style={{width:'44%',fontSize:'12px',boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <IoIosTime className='me-1 text-success' style={{ marginBottom: "2px",fontSize:"16px" }} />
                    {t("Driving Time")}
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>{drivingTime} <span className='fs-4'>hrs</span></div>
            </div>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1 bg-light" style={{width:'44%',fontSize:'12px',boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <IoLocationSharp className='me-1 text-danger' style={{ marginBottom: "3px",fontSize:"16px" }} />
                    {t("Distance Covered")}
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>{distanceCovered} <span className='fs-4'>km</span></div>
            </div>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1 bg-light" style={{width:'44%',fontSize:'12px',boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <GiSandsOfTime className='me-1 text-success' style={{ marginBottom: "3px",fontSize:"16px" }} />
                    {t("Idle Time")}
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>{idleTime} <span className='fs-4'>hrs</span></div>
            </div>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1 bg-light" style={{width:'44%',fontSize:'12px',boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <IoIosSpeedometer className='me-2 text-primary' style={{ marginBottom: "2px",fontSize:"16px" }} />
                    {t("Average Speed")}
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>{averageSpeed} <span className='fs-4'>km/hr</span></div>
            </div>

        </div>
    )
}
