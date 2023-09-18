import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { BiTimeFive } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { BsCheckCircleFill } from 'react-icons/bs';
import { TimelineOppositeContent } from '@mui/lab';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { t } from 'i18next';
import { IoIosMenu } from 'react-icons/io';

export default function MyTrips({ myTrip }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabLabels = ['ALL', 'Pending', 'Delivered'];

  // Create a function to filter trips by status
  const filterTripsByStatus = (status) => {
    return myTrip.filter((trip) => trip.Status === status);
  };

  return (
    <div>
      <Tabs
        value={activeTab}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ style: { display: 'none' } }} // Hide the default indicator line
        style={{ marginBottom: '5px' }} // Add margin below the Tabs
      >
        {tabLabels.map((label, index) => (
          <Tab
            key={index}
            label={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: activeTab === index ? '#4b8587' : 'rgba(75, 133, 135, 0.7)',
                  fontSize: '20px',
                  textTransform: 'none',
                  borderBottom: activeTab === index ? '2px solid #4b8587' : 'none',
                  fontWeight: activeTab === index ? 'bold' : 'normal', // Make the active tab bold
                }}
              >
                {t(label)}
              </div>
            }
            style={{
              fontWeight: 'normal',
              height: 'auto', // Set the height to auto to prevent lifting
              fontFamily: 'Poppins',
            }}
          />
        ))}
      </Tabs>
      {myTrip.length>0?<Timeline className="px-0" position="alternate-reverse">
        {tabLabels[activeTab] === 'ALL' &&
          myTrip.map((trip, index) => (
            <TimelineItem key={index}>
              <TimelineContent></TimelineContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineOppositeContent>
                <div
                  className="text-light px-2 py-1 rounded-2"
                  style={{ backgroundColor: '#4b8587', fontSize: '12px',fontFamily:"Poppins" }}
                >
                  <div className="fw-semibold mt-1 mb-1" style={{letterSpacing:".5px"}}>
                    <IoLocationSharp
                      color="orangered"
                      className=""
                      style={{ marginBottom: '3px', marginRight: '2px', fontSize: '14px' }}
                    />
                    {trip.officeName}
                  </div>
                  <hr
                    className="mt-0 mb-1"
                    style={{ borderColor: 'var(--driver-secondary)', borderWidth: '2px' }}
                  />
                  <div>
                    {t("Status")}: {t(trip.Status)}{' '}
                    {trip.Status === 'Delivered' && (
                      <BsCheckCircleFill color="lightgreen" style={{ marginBottom: '2px' }} />
                    )}
                  </div>
                  <div>{t("Quantity")}: {trip.Quantity} L</div>
                  <div
                    className="fst-italic mt-1"
                    style={{ fontSize: '10px', color: 'var(--driver-secondary)' }}
                  >
                    <BiTimeFive
                      className="text-warning"
                      style={{ marginBottom: '2px', marginRight: '2px', fontSize: '12px' }}
                    />
                    {trip.DeliveredTime ? trip.DeliveredTime : 'N/A'}
                  </div>
                </div>
              </TimelineOppositeContent>
            </TimelineItem>
          ))}
        {tabLabels[activeTab] !== 'ALL' &&
          filterTripsByStatus(tabLabels[activeTab]).map((trip, index) => (
            <TimelineItem key={index}>
              <TimelineContent></TimelineContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineOppositeContent>
                <div
                  className="text-light px-2 py-1 rounded-2"
                  style={{ backgroundColor: '#4b8587', fontSize: '12px',fontFamily:"Poppins" }}
                >
                  <div className="fw-semibold mt-1 mb-1" style={{letterSpacing:".5px"}}>
                    <IoLocationSharp
                      color="orangered"
                      className=""
                      style={{ marginBottom: '3px', marginRight: '2px', fontSize: '14px' }}
                    />
                    {trip.officeName}
                  </div>
                  <hr
                    className="mt-0 mb-1"
                    style={{ borderColor: 'var(--driver-secondary)', borderWidth: '2px' }}
                  />
                  <div>
                    {t("Status")}: {t(trip.Status)}{' '}
                    {trip.Status === 'Delivered' && (
                      <BsCheckCircleFill color="lightgreen" style={{ marginBottom: '2px' }} />
                    )}
                  </div>
                  <div>{t("Quantity")}: {trip.Quantity} L</div>
                  <div
                    className="fst-italic mt-1"
                    style={{ fontSize: '10px', color: 'var(--driver-secondary)' }}
                  >
                    <BiTimeFive
                      className="text-warning"
                      style={{ marginBottom: '2px', marginRight: '2px', fontSize: '12px' }}
                    />
                    {trip.DeliveredTime ? trip.DeliveredTime : 'N/A'}
                  </div>
                </div>
              </TimelineOppositeContent>
            </TimelineItem>
          ))}
      </Timeline>:<div className='text-center my-5'>Tap the menu <IoIosMenu/> to start Your Trip</div>}
    </div>
  );
}