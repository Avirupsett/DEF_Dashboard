import * as React from 'react';
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

export default function MyTrips() {
  return (
    <Timeline className="px-0" position="alternate-reverse">
      <TimelineItem>
      <TimelineContent></TimelineContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
            <div className='text-light px-2 py-1 rounded-2' style={{backgroundColor:"var(--driver-primary)",fontSize:"12px"}}>
                <div className='fw-semibold mt-1 mb-1'><IoLocationSharp color='orangered'  className='' style={{marginBottom:"3px",marginRight:"2px",fontSize:"14px"}}/>Phoolpur Pump</div>
                <hr className='mt-0 mb-1' style={{borderColor:"var(--driver-secondary)",borderWidth:"2px"}}/>
                <div className=''>Status: Delivered <BsCheckCircleFill color='lightgreen' style={{marginBottom:"2px"}}/></div>
                <div className=''>Quantity: 1000 L</div>
                <div className='fst-italic mt-1' style={{fontSize:"10px",color:"var(--driver-secondary)"}}><BiTimeFive className='text-warning' style={{marginBottom:"3.5px",marginRight:"2px",fontSize:"12px"}}/>23/12/2023 12:50am</div>
                </div></TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineContent></TimelineContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent >
            <div className='text-light px-2 py-1 rounded-2' style={{backgroundColor:"var(--driver-primary)",fontSize:"12px"}}>
                <div className='fw-semibold mt-1 mb-1'><IoLocationSharp color='orangered'  className='' style={{marginBottom:"3px",marginRight:"2px",fontSize:"14px"}}/>Phoolpur Pump</div>
                <hr className='mt-0 mb-1' style={{borderColor:"var(--driver-secondary)",borderWidth:"2px"}}/>
                <div className=''>Status: Delivered <BsCheckCircleFill color='lightgreen' style={{marginBottom:"2px"}}/></div>
                <div className=''>Quantity: 1000 L</div>
                <div className='fst-italic mt-1' style={{fontSize:"10px",color:"var(--driver-secondary)"}}><BiTimeFive className='text-warning' style={{marginBottom:"3.5px",marginRight:"2px",fontSize:"12px"}}/>23/12/2023 12:50am</div>
                </div></TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent></TimelineContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
            <div className='text-light px-2 py-1 rounded-2' style={{backgroundColor:"var(--driver-primary)",fontSize:"12px"}}>
                <div className='fw-semibold mt-1 mb-1'><IoLocationSharp color='orangered'  className='' style={{marginBottom:"3px",marginRight:"2px",fontSize:"14px"}}/>Phoolpur Pump</div>
                <hr className='mt-0 mb-1' style={{borderColor:"var(--driver-secondary)",borderWidth:"2px"}}/>
                <div className=''>Status: Delivered <BsCheckCircleFill color='lightgreen' style={{marginBottom:"2px"}}/></div>
                <div className=''>Quantity: 1000 L</div>
                <div className='fst-italic mt-1' style={{fontSize:"10px",color:"var(--driver-secondary)"}}><BiTimeFive className='text-warning' style={{marginBottom:"3.5px",marginRight:"2px",fontSize:"12px"}}/>23/12/2023 12:50am</div>
                </div></TimelineOppositeContent>
               
      </TimelineItem>
      <TimelineItem>
      <TimelineContent></TimelineContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineOppositeContent>
            <div className='text-light px-2 py-1 rounded-2' style={{backgroundColor:"var(--driver-primary)",fontSize:"12px"}}>
                <div className='fw-semibold mt-1 mb-1'><IoLocationSharp color='orangered'  className='' style={{marginBottom:"3px",marginRight:"2px",fontSize:"14px"}}/>Phoolpur Pump</div>
                <hr className='mt-0 mb-1' style={{borderColor:"var(--driver-secondary)",borderWidth:"2px"}}/>
                <div className=''>Status: Delivered <BsCheckCircleFill color='lightgreen' style={{marginBottom:"2px"}}/></div>
                <div className=''>Quantity: 1000 L</div>
                <div className='fst-italic mt-1' style={{fontSize:"10px",color:"var(--driver-secondary)"}}><BiTimeFive className='text-warning' style={{marginBottom:"3.5px",marginRight:"2px",fontSize:"12px"}}/>23/12/2023 12:50am</div>
                </div></TimelineOppositeContent>
      </TimelineItem>
    </Timeline>
  );
}