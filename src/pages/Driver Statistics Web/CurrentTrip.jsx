import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from '@mui/lab';
import { MdDone } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa6';
import { IoColorFillOutline } from 'react-icons/io5';

function CurrentTrip(props) {


   

    return (<>
        {props.currentTrip.length>0?<Timeline position="right" className='d-flex align-items-stretch px-0 px-sm-2'
        sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex:  window.innerWidth<500?0:0.1,
                },
            }}
            >
                {props.currentTrip && props.currentTrip.map((trip,index) => {
            if (trip.Status === "Delivered" )
             return (
            <TimelineItem key={index}>
                <TimelineOppositeContent color="#918f97">
                    <div className='fw-bolder' style={{ fontSize: window.innerWidth<500?"18px":"24px", paddingTop:window.innerWidth<500?"40px":"5px", color: 'rgb(22 101 52)',width:window.innerWidth<500?'20px':'105px',writingMode:window.innerWidth<500?"vertical-rl":"",textOrientation:window.innerWidth<500?"upright":"",textTransform:window.innerWidth<500?"uppercase":""}}>
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
                        <div className='fw-bold' style={{ color: '#626d77', fontSize: window.innerWidth>500?"20px":"16px" }}>
                          {index+1}. {trip.officeName}
                        </div>
                        <div className='my-1' style={{ color: '#918f97', fontSize: window.innerWidth>500?"14px":"12px" }}>{trip.officeAddress}</div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap'>
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#626d77', fontSize: window.innerWidth>500?"14px":"12px" }}><FaRegClock className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)' }} /> {trip.DeliveredTime}</div>
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#626d77', fontSize: "14px" }}><IoColorFillOutline className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#4338CA', backgroundColor: '#E0E7FF' }} /> {window.innerWidth>500?'Delivered Qty:':'Deli. Qty'} <span style={{ color: '#4338CA', fontWeight: 600, marginLeft: "5px", textWrap: "nowrap" }}> {trip.Quantity}</span></div>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>)
            else 
            return(
            <TimelineItem key={index}>
                <TimelineOppositeContent color="#918f97">
                    <div className='fw-bolder' style={{ color: '#CA8A04', fontSize: window.innerWidth<500?"18px":"22px", paddingTop:window.innerWidth<500?"35px":"2px",width:window.innerWidth<500?'20px':'105px',writingMode:window.innerWidth<500?"vertical-rl":"",textOrientation:window.innerWidth<500?"upright":"",textTransform:window.innerWidth<500?"uppercase":"" }}>
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
                        <div className='fw-bold' style={{ color: '#626d77', fontSize: window.innerWidth>500?"20px":"16px"}}>
                         {index+1}. {trip.officeName}
                        </div>
                        <div className='my-1' style={{ color: '#918f97',fontSize: window.innerWidth>500?"14px":"12px" }}>{trip.officeAddress}</div>
                            
                        <div className='d-flex align-items-center justify-content-between flex-wrap'>
                            
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#626d77', fontSize: window.innerWidth>500?"14px":"12px" }}><FaRegClock className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: 'rgb(22 101 52)', backgroundColor: 'rgb(22 101 52 / 11%)',textWrap: "nowrap" }} /> {trip.expectedDeliveryTime}</div>
                            <div className='mt-1 d-flex align-items-center' style={{ color: '#626d77', fontSize: "14px" }}><IoColorFillOutline className='me-2 ms-1 p-1 rounded-3' style={{ fontSize: "22px", color: '#4338CA', backgroundColor: '#E0E7FF' }} /> {trip.approvedQuantity?window.innerWidth>500?'Estimated Qty:':'Est. Qty:':window.innerWidth>500?'Suggested Qty:':'Sug. Qty:'} <span style={{ color: '#4338CA', fontWeight: 600, marginLeft: "5px", textWrap: "nowrap" }}> {trip.approvedQuantity?trip.approvedQuantity:trip.plannedQuantity}</span></div>
                           
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>)
})}
        </Timeline>:<div className='text-center fs-5 py-3'>No Trips Found</div>}
        </>
        
    )
}

export default CurrentTrip