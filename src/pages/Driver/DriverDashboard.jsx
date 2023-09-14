import React from 'react'
import { IoIosRefresh, IoMdStats } from 'react-icons/io';
import { BsSpeedometer2 } from 'react-icons/bs';
import { BiSolidTruck} from 'react-icons/bi';
import './DriverDashboard.css'
import MetricsCard from './MetricsCard';
import MyTrips from './Mytrips';
import TankerLevelChart from './TankerLevel';

export default function DriverDashboard() {
    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className='py-2' style={{ borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px", backgroundColor: 'var(--driver-primary)' }}>
                <div className='px-3 pt-3 pb-1 d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='text-light fs-2' style={{ letterSpacing: ".8px", fontWeight: 500 }}>Hello,</div>
                        <div className='text-light fs-1 lh-1' style={{ letterSpacing: ".5px", fontWeight: 500 }}>Ranjeet Singh</div>
                        <div className='text-light fs-6' style={{ letterSpacing: "0px", lineHeight: 2.5 }}>UT 2453</div>
                    </div>
                    <div className='mx-2'>
                        <IoIosRefresh className='fs-1 text-light' />
                    </div>
                </div>
                <div className='display-6 text-light fw-semibold px-3 pt-1 pb-2' style={{  }}>
                    <BsSpeedometer2 className='text-warning' style={{ marginBottom: "3px", verticalAlign: "bottom", marginRight: "10px" }} />
                    Metrics
                </div>
                <MetricsCard />
            </div>
            <div className='display-6 text-dark fw-semibold px-3 pt-3 pb-2' style={{  }}>
                <IoMdStats className='display-5' style={{ marginBottom: "4px", verticalAlign: "bottom", marginRight: "8px", color: 'var(--driver-primary)' }} />
                Stats
            </div>
            <div className="ms-4 me-4 d-flex align-items-center justify-content-between">
                <TankerLevelChart />
                <TankerLevelChart />
            </div>
            <div className='display-6 text-dark fw-semibold px-3 pt-4 pb-3' style={{  }}>
                <BiSolidTruck className='display-5' style={{ marginBottom: "3px", verticalAlign: "bottom", marginRight: "8px", color: 'var(--driver-primary)' }} />
                My Trips
            </div>
            <MyTrips/>
        </div>
    )
}
