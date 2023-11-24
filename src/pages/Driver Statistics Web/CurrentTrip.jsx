import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from '@mui/lab';
import { MdDone } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa6';
import { IoColorFillOutline } from 'react-icons/io5';

function CurrentTrip(props) {


   

    return (
        <Timeline position="right" className='d-flex align-items-stretch'
        sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.1,
                },
            }}
            >
                {props.currentTrip && props.currentTrip.map((trip,index) => {
            if (trip.Status === "Delivered" )
             return (
            <TimelineItem key={index}>
                <TimelineOppositeContent color="#918f97">
                    <div className='fw-bolder' style={{ fontSize: "24px", paddingTop: "2px", color: 'rgb(22 101 52)' }}>
                        Delivered
                    </div>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{ borderWidth: "2px", backgroundColor: 'rgb(22 101 52 / 11%)' }} >
                        <MdDone className='fs-5' style={{ color: 'rgb(22 101 52)' }} />
                    </TimelineDot>
                    <TimelineConnector style={{ borderStyle: "dashed", backgroundColor: "transparent", borderWidth: '2.5px' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <div style={{ borderTop: '2px solid #918f9750', paddingTop: '12px', marginTop: '20px', paddingLeft: "5px", borderBottom: '2px solid #918f9750', paddingBottom: "12px" }}>
                        <div className='fw-bolder' style={{ color: '#15283b', fontSize: "20px" }}>
                            {trip.officeName}
                        </div>
                        <div className='' style={{ color: '#918f97' }}>Address</div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap'>
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#15283b', fontSize: "14px" }}><FaRegClock className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} /> {trip.DeliveredTime}</div>
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#15283b', fontSize: "14px" }}><IoColorFillOutline className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#4338CA', backgroundColor: '#E0E7FF' }} /> Delivered Qty: <span style={{ color: '#4338CA', fontWeight: 600, marginLeft: "5px", textWrap: "nowrap" }}> {trip.Quantity}</span></div>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>)
            else 
            return(
            <TimelineItem key={index}>
                <TimelineOppositeContent color="#918f97">
                    <div className='fw-bolder' style={{ color: '#CA8A04', fontSize: "22px",width:'112px' }}>
                        Pending
                    </div>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{ borderWidth: "9px", backgroundColor: '#FEF3C7' }} >

                    </TimelineDot>
                    <TimelineConnector style={{ borderStyle: "dashed", backgroundColor: "transparent", borderWidth: '2.5px' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <div style={{ borderTop: '2px solid #918f9750', paddingTop: '12px', marginTop: '20px', paddingLeft: "5px", borderBottom: '2px solid #918f9750', paddingBottom: "12px" }}>
                        <div className='fw-bolder' style={{ color: '#15283b', fontSize: "20px" }}>
                            {trip.officeName}
                        </div>
                        <div className='' style={{ color: '#918f97' }}>Address</div>
                            
                        <div className='d-flex align-items-center justify-content-between flex-wrap'>
                            
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#15283b', fontSize: "14px" }}><FaRegClock className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)',textWrap: "nowrap" }} /> _ _ _ _</div>
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#15283b', fontSize: "14px" }}><IoColorFillOutline className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#4338CA', backgroundColor: '#E0E7FF' }} /> Delivered Qty: <span style={{ color: '#4338CA', fontWeight: 600, marginLeft: "5px", textWrap: "nowrap" }}> 0 L</span></div>
                           
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>)
})}
        </Timeline>
        
    )
}

export default CurrentTrip