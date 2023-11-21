import React from 'react'
import { FaRegClock } from 'react-icons/fa6'
import { GiSandsOfTime } from 'react-icons/gi'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'
import { t } from 'i18next'

function DriverCards() {
    return (
        <>
            <div className="px-2 rounded-3 py-3 mt-1 mx-1 " style={{ width: '120px', fontSize: '12px', boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px", backgroundColor: "white" }}>
            <div className='text-center'>
                <div className='p-2' style={{
                    backgroundColor: "rgb(22 101 52 / 11%)",
                    borderRadius: "10px",
                    display: "inline-block",

                }}>
                    <FaRegClock className='' style={{ fontSize: "22px", color: 'rgb(22 101 52)' }} />
                </div>
            </div>

            <div className='fs-5 mt-2 fw-bold px-1 text-center' style={{ color: '#15283b' }}>5 <span className='' style={{ fontSize: "14px" }}>hrs</span>
            </div>
            <div className='text-center' style={{ color: '#918f97', fontSize: '14px' }}>
                {t("Driving Time")}
            </div>
        </div>
            <div className="px-2 rounded-3 py-3 mt-1 mx-1 " style={{ width: '120px', fontSize: '12px', boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px", backgroundColor: "white" }}>
                <div className='text-center'>
                    <div className='p-2' style={{
                        backgroundColor: "#FECACA",
                        borderRadius: "10px",
                        display: "inline-block",

                    }}>
                        <MdOutlineLocationOn className='' style={{ fontSize: "22px", color: '#DC2626' }} />
                    </div>
                </div>

                <div className='fs-5 mt-2 fw-bold px-1 text-center' style={{ color: '#15283b' }}>5 <span className='' style={{ fontSize: "14px" }}>km</span>
                </div>
                <div className='text-center' style={{ color: '#918f97', fontSize: '14px' }}>
                    {t("Distance")}
                </div>
            </div>
            <div className="px-2 rounded-3 py-3 mt-1 mx-1 " style={{ width: '120px', fontSize: '12px', boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px", backgroundColor: "white" }}>
                <div className='text-center'>
                    <div className='p-2' style={{
                        backgroundColor: "rgb(22 101 52 / 11%)",
                        borderRadius: "10px",
                        display: "inline-block",

                    }}>
                        <GiSandsOfTime className='' style={{ fontSize: "22px", color: 'rgb(22 101 52)' }} />
                    </div>
                </div>

                <div className='fs-5 mt-2 fw-bold px-1 text-center' style={{ color: '#15283b' }}>5 <span className='' style={{ fontSize: "14px" }}>hrs</span>
                </div>
                <div className='text-center' style={{ color: '#918f97', fontSize: '14px' }}>
                    {t("Idle Time")}
                </div>
            </div>
            <div className="px-2 rounded-3 py-3 mt-1 mx-1 " style={{ width: '120px', fontSize: '12px', boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px", backgroundColor: "white" }}>
                <div className='text-center'>
                    <div className='p-2' style={{
                        backgroundColor: "#BFDBFE",
                        borderRadius: "10px",
                        display: "inline-block",

                    }}>
                        <IoSpeedometerOutline className='' style={{ fontSize: "22px", color: '#2563EB' }} />
                    </div>
                </div>

                <div className='fs-5 mt-2 fw-bold px-1 text-center' style={{ color: '#15283b' }}>5 <span className='' style={{ fontSize: "14px" }}>km/hr</span>
                </div>
                <div className='text-center' style={{ color: '#918f97', fontSize: '14px' }}>
                    {t("Avg. Speed")}
                </div>
            </div></>
    )
}

export default DriverCards