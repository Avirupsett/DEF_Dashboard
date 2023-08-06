import axios from "axios";

const formatDate = (date) => {
    if (!date) {
      return ''; // Return an empty string or a default date string
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

async function fetchSalesData(startDate, endDate, selectedOffice, isAdmin) {
    try{
    let response=await axios.get(`${import.meta.env.VITE_API_URL_1}/api/v1/dashboard/sales_list/${formatDate(startDate)}/${formatDate(endDate)}/${selectedOffice}/${isAdmin}`)
    const { data } = response;
     return data
    }
    catch(error){
        console.log(error)
    }
};

export default fetchSalesData;