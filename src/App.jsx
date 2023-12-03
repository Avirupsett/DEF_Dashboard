import React, { Suspense, useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DriverDashboard from './pages/Driver/DriverDashboard';
import { Routes, Route } from 'react-router-dom';
const DriverDashboardWeb2=React.lazy(()=>import('./pages/Driver Statistics Web/DriverDashboardWeb2'));
const MyMapComponent=React.lazy(()=>import('./pages/Driver Statistics Web/MapComponent'));
const DriverAvailable=React.lazy(()=>import('./pages/Driver Statistics Web/DriverAvailable'));
const DriverDashboardWeb=React.lazy(()=>import('./pages/Driver Statistics Web/DriverDashboardWeb'))
const DriverDashboard=React.lazy(()=>import('./pages/Driver/DriverDashboard'))
const Dashboard=React.lazy(()=>import('./pages/Dashboard/Dashboard'))

const App = () => {
  const [mapComponentData, setMapComponentData] = useState([])
  return (
    
    <Routes>
      <Route path="/" element={<div id="dashboard">
        <Dashboard />
      </div>} />
      <Route path="/driver" element={<DriverDashboard/>} />
     
        <Route path="/driverassignment" element={<Suspense fallback={<div className='w-100 text-center'><div className="spinner-border text-primary my-3 " role="status" ></div></div>}><DriverAvailable /></Suspense>} />

        <Route path="/driverstatistic" element={<Suspense fallback={<div className='w-100 text-center'><div className="spinner-border text-primary my-3 " role="status" ></div></div>}><DriverDashboardWeb2 /></Suspense>} />
     
      {/* driver dashboard with driverId route */}
     
        <Route path="/driverdashboardweb/:driverId" element={<Suspense fallback={ <div className='w-100 text-center'><div className="spinner-border text-primary my-3 " role="status" ></div></div>}><DriverDashboardWeb /></Suspense>} />

        <Route path="/deliveryPlanMap/:deliveryPlanId" element={<Suspense fallback={<div className='w-100 text-center'><div className="spinner-border text-primary my-3 " role="status" ></div></div>}><div className='' style={{ height: "100vh" }}><MyMapComponent mapComponentData={mapComponentData} setMapComponentData={setMapComponentData}/></div></Suspense>} />
   
    </Routes>
 
  );
};

export default App;
