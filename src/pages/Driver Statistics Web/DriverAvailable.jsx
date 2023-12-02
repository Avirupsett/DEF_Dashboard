import React, { useEffect, useState } from 'react'
import ResponsiveTable from './ResponsiveTable'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import DriverDashboardWeb from './DriverDashboardWeb'

function DriverAvailable() {

    const [driverAvailable_data, setDriverAvailable_data] = useState([])
    const [deliveryPlanId, setDeliveryPlanId] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)
    const [driverId, setDriverId] = useState("")
    const [status, setStatus] = useState("")
    const [statusId, setStatusId] = useState("")
    const [tableview, setTableview] = useState("false")
    const navigate = useNavigate();
    const { state } = useLocation();
    const [updatedBy, setUpdatedBy] = useState("")
    const [deliveryPlanStatus, setDeliveryPlanStatus] = useState([])


    const urlParams = new URLSearchParams(window.location.search);
    const { t, i18n } = useTranslation();

    function decodeBase64(base64String) {
        const decodedString = atob(base64String);
        return decodedString;
    }



    const fetchData = async () => {
        try {
            i18n.changeLanguage(urlParams.get("lang") || "en");
            let payload = ""
            const token = urlParams.get("token");
            const tableview = urlParams.get("tableview");
            setTableview(tableview)
            if (token) {
                payload = JSON.parse(decodeBase64(token))
            }


            if (payload) {
                const deliveryPlanId = payload["deliveryPlanId"];
                setUpdatedBy(payload["updatedBy"])
                setDeliveryPlanId(deliveryPlanId)

                if (deliveryPlanId) {
                    let response = await axios.get(`${import.meta.env.VITE_API_URL_1}/api/v1/driver_available/${deliveryPlanId}`)
                    const { data } = response;

                    
                    setDriverAvailable_data(data["driverAvailable"])
                    setDeliveryPlanStatus(data["deliveryPlanStatus"])
                    setIsLoading(false)
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
    }, [])




    return (
        <><ToastContainer
        position="top-center"
        />
        {isLoading ? <div className='my-3 d-flex justify-content-center align-items-center'><div className="spinner-border text-primary " role="status" style={{}} /></div> :
            <>
                {redirect && (tableview === "false" || tableview === null) ?
                    navigate(`/driverdashboardweb/${driverId}`, { state: { isback: false, statusId: deliveryPlanStatus['DeliveryPlanStatusId'],token:urlParams.get("token") } })
                    : <ResponsiveTable data={driverAvailable_data} deliveryPlanId={deliveryPlanId} updatedBy={updatedBy} token={urlParams.get("token")} deliveryPlanStatusId={deliveryPlanStatus['DeliveryPlanStatusId']}/>
                }
                {/* <ResponsiveTable data={driverAvailable_data} deliveryPlanId={deliveryPlanId} /> */}
            </>
        }
        </>
    )
}

export default DriverAvailable