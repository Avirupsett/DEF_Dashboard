import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverDashboard from './pages/Driver/DriverDashboard';

const App = () => {
  return (
    <>
     {/* <div id="dashboard">
       <Dashboard />
     </div> */}
      <DriverDashboard/>
    </>
  );
};

export default App;
