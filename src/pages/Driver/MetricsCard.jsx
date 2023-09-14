import React from 'react'
import {IoIosSpeedometer, IoIosTime } from 'react-icons/io';
import {IoLocationSharp} from 'react-icons/io5';
import { GiSandsOfTime} from 'react-icons/gi';

export default function MetricsCard() {
    return (
        <div className='row gap-2 mx-0 mb-3 d-flex align-items-stretch justify-content-center'>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1" style={{width:'44%',fontSize:'12px',backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <IoIosTime className='me-1 text-success' style={{ marginBottom: "2px" }} />
                    Driving Time
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>12.5 <span className='fs-4'>hrs</span></div>
            </div>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1" style={{width:'44%',fontSize:'12px',backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <IoLocationSharp className='me-1 text-danger' style={{ marginBottom: "3px" }} />
                    Distance Covered
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>110 <span className='fs-4'>km</span></div>
            </div>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1" style={{width:'44%',fontSize:'12px',backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <GiSandsOfTime className='me-1 text-success' style={{ marginBottom: "3px" }} />
                    Idle Time
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>1.5 <span className='fs-4'>hrs</span></div>
            </div>
            <div className="px-2 rounded-4 py-2 mt-1 mx-1" style={{width:'44%',fontSize:'12px',backgroundColor:"var(--driver-secondary)"}}>
                <div className='text-dark'>
                    <IoIosSpeedometer className='me-2 text-warning' style={{ marginBottom: "2px" }} />
                    Average Speed
                </div>
                <div className='fs-1 fw-bold py-1 px-1 text-dark'>40 <span className='fs-4'>km/hr</span></div>
            </div>

        </div>
    )
}
