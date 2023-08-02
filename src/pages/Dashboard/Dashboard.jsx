import React, { useEffect, useState } from "react";
import axios from "axios";

import css from "./Dashboard.module.css";
import { Suspense } from "react";
import Skeleton from '@mui/material/Skeleton';
import Statistics from "../../components/Statistics/Statistics";
// const Statistics =React.lazy(()=>import("../../components/Statistics/Statistics"));
const UserCard = React.lazy(() => import("./UserCard"));
const OfficeCard = React.lazy(() => import("./OfficeCard"));
const SalesCard = React.lazy(() => import("./SalesCard"));
const ExpenseCard = React.lazy(() => import("./ExpenseCard"));

const Dashboard = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const initialThemeMode = urlParams.get("theme") || "light"; // Read theme mode from URL parameter

  if (initialThemeMode === "light") {
    //change css variable --rs-body
    document.documentElement.style.setProperty("--rs-body", "rgb(210 210 210)");
    document.documentElement.style.setProperty("--text-color", "#111111");
    document.documentElement.style.setProperty("--option-color", "white");
  }
  else {
    document.documentElement.style.setProperty("--rs-body", "#111111");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--option-color", "#111111");
  }

  const [userCountData, setUserCountData] = useState(0);
  const [officeCountData, setOfficeCountData] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [countIncome, setCountIncome] = useState(0);
  const [countExpense, setCountExpense] = useState(0);
  const themeMode = initialThemeMode;
  const [userId, setUserId] = useState("")
  const [userData, setUserData] = useState("");
  const [adminStatus, setAdminStatus] = useState("")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [officeData, setOfficeData] = useState({});

  // Function to update the window width state on window resize
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {

    // Add a window resize event listener
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const jwtToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTk4OGU3ZS1lODVhLTRjOTQtMGY1Zi0wOGQ4ZjFmMWI3OTkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU0FkbWluIiwianRpIjoiYjUwODU3OWEtMzg1OS00ZTlhLTg0MTgtM2Q3ZDZkNTMxYzYxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1ZTk4OGU3ZS1lODVhLTRjOTQtMGY1Zi0wOGQ4ZjFmMWI3OTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwiZXhwIjoxNzE5NTc4MTEzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMxODcxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMTg3MSJ9.v3VG1otpCu71imrgb_mVrGkQmVduWNHu28HuikQcp2A";
        // const headers = {
        //   Authorization: `Bearer ${jwtToken}`,
        // };
        const urlParams = new URLSearchParams(window.location.search);
        const initialuserId = urlParams.get("userId");

        if (initialuserId) {
          setUserId(initialuserId)
          

          const apiKey = `http://115.124.120.251:5059/api/Auth/User/${initialuserId}`;
          // Fetch user data to get the officeId, roleName, and officeName
          const response = await axios.get(apiKey);
          const userDataResponse =await response.data;
          setUserData(userDataResponse);
          if (userDataResponse.roleName === "CompanyAdmin") {
            setAdminStatus(6)
          }
          else if (userDataResponse.roleName === "PumpAdmin") {
            setAdminStatus(0)
          }
          else {
            setAdminStatus(0)

          }
          const officeId = userDataResponse.officeId;

          // Use the officeId to construct the second API endpoint
          const apiUrl2 = `http://115.124.120.251:5059/api/Dashboard/AdminDashboradData/${officeId}/${userDataResponse.roleName === "PumpUser" ? 1 : userDataResponse.roleName === "CompanyAdmin" ? 1 : 1}`;

          // Fetch data from the second API endpoint
          const response2 = await axios.get(apiUrl2);
          const data2 = await response2.data;
          setOfficeData(data2)
          // Now you have all the data from apiUrl2 available in the 'data2' object
          const userCountData = data2.userCount || [];
          const officeCountData = data2.officeCount || [];
          const totalIncome = data2.incomeDetails.total;
          const countIncome = data2.incomeDetails.count;
          const totalExpense = data2.expenseDetails.total;
          const countExpense = data2.expenseDetails.count;

          setUserCountData(userCountData);
          setOfficeCountData(officeCountData);

          setTotalIncome(totalIncome);
          setTotalExpense(totalExpense);
          setCountIncome(countIncome);
          setCountExpense(countExpense);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div
      className={`${css.container} ${themeMode === "dark" ? css.darkMode : css.lightMode
        } ${css.scrollableContainer}`}
    >
      <div className={`${css.dashboard} `}>
        <div
          className={`${css.dashboardHead} ${css.container2}  ${themeMode === "dark" ? "theme-container" : "theme2-container"
            }`} style={{ minWidth: "100%" }}
        >

          <div
            className={`${css.cards} ${themeMode === "dark" ? css.darkMode : css.lightMode
              }`}
          >
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}>
              {officeData ? <UserCard userCountData={userCountData} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}>
              {officeData ? <OfficeCard officeCountData={officeCountData} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}>
              {officeData ? <SalesCard totalIncome={totalIncome} countIncome={countIncome} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}>
              {officeData ? <ExpenseCard totalExpense={totalExpense} countExpense={countExpense} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px",margin:"10px" }} />}
            </Suspense>



          </div>
        </div>

         <Statistics themeMode={themeMode} officeId={userData.officeId} adminStatus={adminStatus} userId={userId} />

      </div>
    </div>
  );
};

export default Dashboard