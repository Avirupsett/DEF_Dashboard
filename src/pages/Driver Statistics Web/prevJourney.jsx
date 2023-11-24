import { t } from 'i18next';
import * as React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlineLocationOn, MdOutlinePropaneTank, MdPropaneTank } from 'react-icons/md';

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
        const planTitle = prevJourney[index]?.planTitle;
        const journeyList = prevJourney[index]?.journey || [];
        const distanceCovered = prevJourney[index]?.distanceCovered || 0; // Get distanceCovered
        const containerSize = prevJourney[index]?.containerSize || 0; // Get containerSize
        const drivingTime = prevJourney[index]?.drivingTime || 0; // Get drivingTime
        const idleTime = prevJourney[index]?.idleTime || 0; // Get idleTime

        const details = getDetails(distanceCovered, containerSize, drivingTime, idleTime); // Set details

        return (
          <div
            key={index}
            className='d-flex flex-column ps-3 pe-3 rounded-3 py-3 mt-1 mx-3'
            style={{ marginBottom: '15px',boxShadow: 'rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px' }}
          >
            <div className='d-flex justify-content-between align-items-start flex-column mb-2'>
              <div className='fs-5 mb-1'
                style={{
                  color: '#15283b',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',

                  letterSpacing:".8px"
                }}
              >
                <div className='fs-6'
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '2px solid rgb(37, 99, 235)',
                    color: 'rgb(37, 99, 235)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    marginRight: '8px',
                   
                  }}
                >
                  {index+1}
                </div>
                {planTitle}
              </div>
              <div className="" style={{marginLeft: '40px',fontSize:"14px",color:'#918f97'}}>
                {/* Display the formatted start time */}
                <FaRegClock className=' p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} /> {getFormattedStartTime(startTime)}
              </div>
            </div>
            <div style={{ marginBottom: '10px', marginLeft: '40px',fontSize:"14px",letterSpacing:".5px",color:'#15283b' }}>
              {journeyList.map((stop, journeyIndex) => (
                <span key={journeyIndex}>
                  {journeyIndex > 0 ? ' -> ' : ''}
                  {stop}
                </span>
              ))}
            </div>
            <div style={{ marginLeft: '40px',color:'#15283b' }} className='d-flex justify-content-between'>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{letterSpacing:".25px",fontSize: '16px' }}><MdOutlineLocationOn className=' p-1 rounded-3' style={{ fontSize: "22px", color: '#DC2626', backgroundColor: '#FECACA' }} /> {t("Distance")}</span>
                <span className="text-center" style={{ fontSize: '18px', color: '#DC2626', fontWeight: 'bold' }}>{details.distance}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{letterSpacing:".25px",fontSize: '16px' }}><MdOutlinePropaneTank className=' p-1 rounded-3' style={{ fontSize: "22px", color: '#2563EB' , backgroundColor: '#DBEAFE' }}/> {t("Tank Level")}</span>
                <span className="text-center" style={{ fontSize: '18px', color: '#2563EB' , fontWeight: 'bold' }}>{details.tankLevel}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{letterSpacing:".25px",fontSize: '16px' }}><FaRegClock className=' p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} /> {t("Duration")}</span>
                <span className="text-center" style={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>{details.duration}</span>
              </div>
            </div>
          </div>
        );
      }):<div className='text-center fs-5 py-3'>No Previous Trip Found</div>}
    </div>
  );
}