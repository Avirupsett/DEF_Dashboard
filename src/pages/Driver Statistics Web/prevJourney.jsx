import { t } from 'i18next';
import * as React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlineLocationOn, MdOutlinePropaneTank, MdPropaneTank } from 'react-icons/md';
import CurrentTrip from './CurrentTrip';
import { useState } from 'react';
import { useEffect } from 'react';

export default function PrevJourney({ prevJourney }) {

  // Fill the array with true values
  let trueArray = new Array(prevJourney.length).fill(true);
  const [activeButton, setActiveButton] = useState(trueArray);
  
  useEffect(() => {
    setActiveButton(trueArray);
  }, [prevJourney]);
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
      {prevJourney.length > 0 ? prevJourney.map((serialNumber, index) => {
        // Check if prevJourney[index] exists before accessing its properties
        // setActiveButton([...activeButton, true])
        const startTime = prevJourney[index]?.startTime;
        const planTitle = prevJourney[index]?.planTitle;
        const journeyList = prevJourney[index]?.journey || [];
        const distanceCovered = prevJourney[index]?.distanceCovered || 0; // Get distanceCovered
        const containerSize = prevJourney[index]?.containerSize || 0; // Get containerSize
        const drivingTime = prevJourney[index]?.drivingTime || 0; // Get drivingTime
        const idleTime = prevJourney[index]?.idleTime || 0; // Get idleTime

        const details = getDetails(distanceCovered, containerSize, drivingTime, idleTime); // Set details

        return (
          <div key={index} className="accordion mt-2 mb-3 mx-2 rounded-3" style={{ marginBottom: '15px', boxShadow: 'rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px', borderColor: "transparent" }}>
            <div className="accordion-item rounded-3" style={{border:0}}>
              <h2 className="accordion-header" id="headingOne" >
              {/* Return the modified list here */}
                <button onClick={() => setActiveButton(activeButton => [...activeButton.slice(0, index), !activeButton[index], ...activeButton.slice(index + 1)])} className={`accordion-button ${activeButton[index] ? "collapsed" : ""} fs-4`} type="button" style={{ color: !activeButton[index] ? 'rgb(37, 99, 235)' : '#15283b' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div
                    key={index}
                    className='d-flex flex-column'
                    style={{ width: "inherit" }}
                  >
                    <div className='d-flex justify-content-between align-items-start flex-column mb-2'>
                      <div className='fs-5 mb-1'
                        style={{
                          
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 'bold',
                          lineBreak: 'anywhere',
                          letterSpacing: ".8px",
                          lineHeight: 1.5
                        }}
                      >
                        <div className='fs-6'
                          style={{
                            minWidth: '40px',
                            minHeight: '40px',
                            borderRadius: '50%',
                            border: '2px solid rgb(37, 99, 235)',
                            color: 'rgb(37, 99, 235)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            marginRight: '8px',
                            lineHeight: ".8px"

                          }}
                        >
                          {index + 1}
                        </div>
                        {planTitle}
                      </div>
                      <div className="" style={{ marginLeft: '40px', fontSize: "14px", color: '#918f97', lineHeight: .7, fontWeight: 100 }}>
                        {/* Display the formatted start time */}
                        <FaRegClock className=' p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} /> {getFormattedStartTime(startTime)}
                      </div>
                    </div>
                    <div style={{ marginBottom: '12px', marginLeft: '40px', fontSize: "14px", letterSpacing: ".5px", color: '#15283b', lineHeight: 1.75, fontWeight: 200 }}>
                      {journeyList.map((stop, journeyIndex) => (
                        <span key={journeyIndex}>
                          {journeyIndex > 0 ? ' -> ' : ''}
                          {stop}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginLeft: '40px', color: '#15283b' }} className='d-flex justify-content-between'>
                      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: .8,alignItems:"center" }}>
                        <span className='d-flex align-items-center' style={{ letterSpacing: ".25px", fontSize: '16px' }}><MdOutlineLocationOn className='me-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#DC2626', backgroundColor: '#FECACA' }} /> {window.innerWidth<500?"":t("Distance")}</span>
                        <span className="text-center" style={{ fontSize: '18px', color: '#DC2626', fontWeight: 'bold', lineHeight: 2 }}>{details.distance}</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: .8,alignItems:"center" }}>
                        <span className='d-flex align-items-center' style={{ letterSpacing: ".25px", fontSize: '16px' }}><MdOutlinePropaneTank className='me-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#2563EB', backgroundColor: '#DBEAFE' }} /> {window.innerWidth<500?"":t("Tank Level")}</span>
                        <span className="text-center" style={{ fontSize: '18px', color: '#2563EB', fontWeight: 'bold', lineHeight: 2 }}>{details.tankLevel}</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: .8,alignItems:"center" }}>
                        <span className='d-flex align-items-center' style={{ letterSpacing: ".25px", fontSize: '16px' }}><FaRegClock className='me-1 p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} /> {window.innerWidth<500?"":t("Duration")}</span>
                        <span className="text-center" style={{ fontSize: '18px', color: 'green', fontWeight: 'bold', lineHeight: 2 }}>{details.duration}</span>
                      </div>
                    </div>
                  </div>

                </button>
              </h2>
            </div>

            <div id="collapseOne" className={`accordion-collapse collapse ${!activeButton[index] ? "show" : ""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body p-0 py-2">
                <div className=''>
                  <CurrentTrip currentTrip={prevJourney[index]?.tripMap} />

                </div>
              </div>
            </div>
          </div>





        );
      }) : <div className='text-center fs-5 py-3'>No Previous Trip Found</div>}
    </div>
  );
}