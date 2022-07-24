import React from 'react'
import image from '../images/image-jeremy.png'

const PersonalReport = () => {
  return (
    <div className='personalReport'>
        <div className='main'>
            <img src={image} alt="" />
            <h2>Report for</h2>
            <h1>Jeremy Robson</h1>
        </div>
        <div className="timeFrames">
            <ul className='timeFramesList'>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Montly</li>
            </ul>
        </div>
    </div>
  )
}

export default PersonalReport