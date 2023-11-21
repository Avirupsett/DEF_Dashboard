import { t } from 'i18next'
import React, { useState } from 'react'
import DriverCards from './DriverCards'
import { MdCall } from "react-icons/md";

function DriverDashboardWeb() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    return (
        <div>
            <div className='row gap-2 mx-0 mb-3 d-flex align-items-stretch justify-content-center' style={{ width: '60%' }}>
                <div className='fs-4 mt-3 fw-bolder px-xl-5 px-lg-4 px-md-3 px-1' style={{ color: '#15283b' }}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                    Driver's Name
                    <div className='px-2 py-1 rounded-2 fs-6 mx-2' style={{ backgroundColor: 'rgb(37, 99, 235,0.1)', color: 'rgb(37, 99, 235)',letterSpacing:'1px' }} >Driver</div>
                        </div>
                    <MdCall className='fs-3' style={{  color: 'rgb(37, 99, 235)',cursor:'pointer' }} />
                    </div>
                
                <hr style={{borderColor:'rgb(37, 99, 235)',borderWidth:'2px',marginBottom:'5px',marginTop:'10px'}} />
                </div>
                <DriverCards />

            </div>

        </div>
    )
}

export default DriverDashboardWeb