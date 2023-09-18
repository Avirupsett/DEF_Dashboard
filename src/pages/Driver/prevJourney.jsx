import { t } from 'i18next';
import * as React from 'react';

export default function PrevJourney({ prevJourney }) {
  const getFormattedStartTime = (startTime) => {
    if (startTime) {
      const startTimeDate = new Date(startTime);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      return startTimeDate.toLocaleDateString('en-US', options);
    }
    return '';
  };

  // const serialNumbers = [1, 2, 3]; // Hardcoded serial numbers 1, 2, 3

  const getDetails = (distanceCovered, containerSize, drivingTime, idleTime) => {
    const totalDuration = drivingTime + idleTime;
    const formattedDuration = totalDuration.toFixed(1) + ' hrs';

    return {
      distance: `${distanceCovered.toFixed(0)} km`, // Display distance with "Km" unit
      tankLevel: `${containerSize} L`, // Display containerSize with "L" unit
      duration: formattedDuration, // Display duration with "hrs" unit
    };
  };

  return (
    <div className='pb-2'>
    {prevJourney.length>0?prevJourney.map((serialNumber, index) => {
        // Check if prevJourney[index] exists before accessing its properties
        const startTime = prevJourney[index]?.startTime;
        const journeyList = prevJourney[index]?.journey || [];
        const distanceCovered = prevJourney[index]?.distanceCovered || 0; // Get distanceCovered
        const containerSize = prevJourney[index]?.containerSize || 0; // Get containerSize
        const drivingTime = prevJourney[index]?.drivingTime || 0; // Get drivingTime
        const idleTime = prevJourney[index]?.idleTime || 0; // Get idleTime

        const details = getDetails(distanceCovered, containerSize, drivingTime, idleTime); // Set details

        return (
          <div
            key={index}
            className='d-flex flex-column ps-2 pe-3 rounded-3 py-2 mt-1 mx-3'
            style={{ backgroundColor: '#E5F3FD', marginBottom: '15px' }}
          >
            <div className='d-flex justify-content-between align-items-center'>
              <div
                style={{
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  letterSpacing:".8px"
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '2px solid #4b8587',
                    color: '#4b8587',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    marginRight: '8px',
                    fontSize: '12px',
                  }}
                >
                  {index+1}
                </div>
                {t("Travel Routes")}
              </div>
              <div style={{fontSize:"10px"}}>
                {/* Display the formatted start time */}
                {getFormattedStartTime(startTime)}
              </div>
            </div>
            <div style={{ marginBottom: '10px', marginLeft: '30px',fontSize:"12px",letterSpacing:".5px" }}>
              {journeyList.map((stop, journeyIndex) => (
                <span key={journeyIndex}>
                  {journeyIndex > 0 ? ' -> ' : ''}
                  {stop}
                </span>
              ))}
            </div>
            <div style={{ marginLeft: '30px' }} className='d-flex justify-content-between'>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{letterSpacing:".25px" }}>{t("Distance")}</span>
                <span style={{ fontSize: '16px', color: 'red', fontWeight: 'bold' }}>{details.distance}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{letterSpacing:".25px" }}>{t("Tank Level")}</span>
                <span style={{ fontSize: '16px', color: 'blue', fontWeight: 'bold' }}>{details.tankLevel}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{letterSpacing:".25px" }}>{t("Duration")}</span>
                <span style={{ fontSize: '16px', color: 'green', fontWeight: 'bold' }}>{details.duration}</span>
              </div>
            </div>
          </div>
        );
      }):<div className='text-center my-5'>No Previous Journey Found</div>}
    </div>
  );
}