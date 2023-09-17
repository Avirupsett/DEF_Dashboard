import * as React from 'react';

// PrevJourney component now accepts the serialNumber as a prop
export default function PrevJourney({ serialNumber }) {
  // Function to get the current date in the format "dd/mm/yyyy"
  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  // Function to get the route information
  const getRoute = () => {
    return 'Hub -> Divol Pump -> Avirup Pump -> Shel Pump -> Bharat Pump -> Hub';
  };

  // Function to get the distance, tank level, and duration
  const getDetails = () => {
    return {
      distance: '1412 Km',
      tankLevel: '15000 L',
      duration: '15 hrs',
    };
  };

  const details = getDetails();

  return (
    <div className='d-flex flex-column px-3 rounded-3 py-2 mt-1 mx-3' style={{ backgroundColor: '#E5F3FD', marginBottom: '15px' }}>
      <div className='d-flex justify-content-between align-items-center'>
        <div style={{ color: 'black', display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '16px' }}>
          {/* Display the serial number inside a slightly larger circle */}
          <div
            style={{
              width: '30px', // Increased width
              height: '30px', // Increased height
              borderRadius: '50%',
              border: '2px solid #4b8587',
              color: '#4b8587',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              marginRight: '8px',
              fontSize: '12px'
            }}
          >
            {serialNumber} {/* Use the serialNumber prop here */}
          </div>
          Travel Routes
        </div>
        <div>
          {/* Display the current date */}
          {getCurrentDate()}
        </div>
      </div>
      <div style={{ marginBottom: '10px', marginLeft: '30px' }}>
        {/* Display the route */}
        {getRoute()}
      </div>
      <div style={{ marginLeft: '30px' }} className='d-flex justify-content-between'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Display Distance */}
          <span>Distance</span>
          <span style={{ fontSize: '16px', color: 'red', fontWeight: 'bold' }}>{details.distance}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Display Tank Level */}
          <span>Tank Level</span>
          <span style={{ fontSize: '16px', color: 'blue', fontWeight: 'bold' }}>{details.tankLevel}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Display Duration */}
          <span>Duration</span>
          <span style={{ fontSize: '16px', color: 'green', fontWeight: 'bold' }}>{details.duration}</span>
        </div>
      </div>
    </div>
  );
}