import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DriverDashboard from './pages/Driver/DriverDashboard';
import { Routes, Route } from 'react-router-dom';
const DriverDashboard=React.lazy(()=>import('./pages/Driver/DriverDashboard'))
const Dashboard=React.lazy(()=>import('./pages/Dashboard/Dashboard'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div id="dashboard">
        <Dashboard />
      </div>} />
      <Route path="/driver" element={<DriverDashboard />} />
    </Routes>
  );
};

export default App;
