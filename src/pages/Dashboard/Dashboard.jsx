import React, { useEffect, useState } from "react";
import axios from "axios";

import css from "./Dashboard.module.css";
import { Suspense } from "react";
import Skeleton from '@mui/material/Skeleton';
import Statistics from "../../components/Statistics/Statistics";
import { useTranslation } from "react-i18next";

// const Statistics =React.lazy(()=>import("../../components/Statistics/Statistics"));
const UserCard = React.lazy(() => import("./UserCard"));
const OfficeCard = React.lazy(() => import("./OfficeCard"));
const SalesCard = React.lazy(() => import("./SalesCard"));
const ExpenseCard = React.lazy(() => import("./ExpenseCard"));

const Dashboard = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const initialThemeMode = urlParams.get("theme") || "light"; // Read theme mode from URL parameter
  const { t, i18n } = useTranslation();

  if (initialThemeMode === "light") {
    //change css variable --rs-body
    document.documentElement.style.setProperty("--rs-body", "rgb(210 210 210)");
    document.documentElement.style.setProperty("--text-color", "#111111");
    document.documentElement.style.setProperty("--option-color", "white");
    document.documentElement.style.setProperty("--backgroundOverlay", "rgb(249 249 249 / 81%)");
    document.documentElement.style.setProperty("--bs-table-bg", "#ffffff00");
  }
  else {
    document.documentElement.style.setProperty("--rs-body", "#111111");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--option-color", "#111111");
    document.documentElement.style.setProperty("--backgroundOverlay", "#1a1c2db8");
    document.documentElement.style.setProperty("--bs-table-bg", "#00000000");
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
  const [officeName, setOfficeName] = useState("")
  const [todayExpense, setTodayExpense] = useState(0)
  const [todaySales, setTodaySales] = useState(0)

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
        // const headers = {
        //   Authorization: `Bearer ${jwtToken}`,
        // };
        const urlParams = new URLSearchParams(window.location.search);
        const userIdParams = urlParams.get("userId");
        const jwtToken = urlParams.get("jwtToken");
        let payload = ""
        if (jwtToken) {
          payload = JSON.parse(atob(jwtToken.split('.')[1]))
        }
        i18n.changeLanguage(urlParams.get("lang") || "en");
        if (userIdParams) {
          setUserId(userIdParams)


          const apiKey = `${import.meta.env.VITE_API_URL_2}/api/Auth/User/${userIdParams}`;

          // Fetch user data to get the officeId, roleName, and officeName
          const response = await axios.get(apiKey);
          const userDataResponse = await response.data;
          setUserData(userDataResponse);
          setOfficeName(userDataResponse.officeName)
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
          const apiUrl2 = `${import.meta.env.VITE_API_URL_2}/api/Dashboard/AdminDashboradData/${officeId}/${userDataResponse.roleName === "PumpUser" ? 1 : userDataResponse.roleName === "CompanyAdmin" ? 1 : 1}`;

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


          setTodaySales(data2.incomeDetailsCurrentDay.total)
          setTodayExpense(data2.expenseDetailsCurrentDay.total)

          setUserCountData(userCountData);
          setOfficeCountData(officeCountData);

          setTotalIncome(totalIncome);
          setTotalExpense(totalExpense);
          setCountIncome(countIncome);
          setCountExpense(countExpense);
        }
        else if (payload) {
          const initialuserId = payload["sub"];
          if (initialuserId) {
            setUserId(initialuserId)


            const apiKey = `${import.meta.env.VITE_API_URL_2}/api/Auth/User/${initialuserId}`;

            // Fetch user data to get the officeId, roleName, and officeName
            const response = await axios.get(apiKey);
            const userDataResponse = await response.data;
            setUserData(userDataResponse);
            setOfficeName(userDataResponse.officeName)
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
            const apiUrl2 = `${import.meta.env.VITE_API_URL_2}/api/Dashboard/AdminDashboradData/${officeId}/${userDataResponse.roleName === "PumpUser" ? 1 : userDataResponse.roleName === "CompanyAdmin" ? 1 : 1}`;

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


            setTodaySales(data2.incomeDetailsCurrentDay.total)
            setTodayExpense(data2.expenseDetailsCurrentDay.total)

            setUserCountData(userCountData);
            setOfficeCountData(officeCountData);

            setTotalIncome(totalIncome);
            setTotalExpense(totalExpense);
            setCountIncome(countIncome);
            setCountExpense(countExpense);
          }
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
            className={`${css.cards} mb-1 ${themeMode === "dark" ? css.darkMode : css.lightMode
              }`}
          >
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}>
              {officeData ? <UserCard userCountData={userCountData} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}>
              {officeData ? <OfficeCard officeCountData={officeCountData} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}>
              {officeData ? <SalesCard totalIncome={totalIncome} countIncome={countIncome} todaySales={todaySales} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}>
              {officeData ? <ExpenseCard totalExpense={totalExpense} countExpense={countExpense} todayExpense={todayExpense} /> : <Skeleton variant="rounded" width={windowWidth > 900 ? "22%" : windowWidth > 768 ? "45%" : "40%"} height={"auto"} style={{ borderRadius: "10px", paddingTop: "155px", margin: "10px" }} />}
            </Suspense>



          </div>
        </div>

        <Statistics themeMode={themeMode} officeId={userData.officeId} adminStatus={adminStatus} userId={userId} userOfficeName={officeName} />

      </div>
    </div>
  );
};

export default Dashboard