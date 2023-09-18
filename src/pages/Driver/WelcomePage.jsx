import React from 'react'
import img from '/assets/WelcomeBg.png'
import Pathimg from '/assets/PathVe.svg'
import { IoIosMenu } from 'react-icons/io'

export default function WelcomePage({name}) {
    return (
        <div className='' style={{ height: "100vh", background: `url(${img})`, backgroundSize: "cover" }}>
            <div className='d-flex justify-content-center align-items-center flex-column px-4' style={{ height: "100vh", backgroundColor: "rgb(216 236 242 / 70%)", fontFamily: "Poppins" }}>
                <div className='display-1 fw-semibold text-dark mt-2'>
                    Welcome
                </div>
                <div className='fs-1 lh-lg text-dark mb-4'>
                    {name}
                </div>
                <img src={Pathimg} style={{width:"17rem"}}></img>
                <div className='px-4 fs-6 text-center mt-4 mb-4 text-dark'>"Start Your First Trip and Monitor Your Trip on the Dashboard."</div>
                <div className='mt-2 mb-4 text-center'>Tap the menu <IoIosMenu/> to start Your Trip</div>
            </div>
        </div>
    )
}
