import React from 'react'
import { Link } from 'react-router-dom'
import first from '../../Assets/Media/Handson-img/Js hs/1.png'
import HsNav from '../../Components/HsNav'
const JavaScript = () => {
  return (
    <div className='hs-desc-wrapper'>
    <HsNav/>
      
      <header>
        JavaScript Handson's
      </header>
    <hr/>


<div className="hs-content-container">

      <div className="hs-desc-content">
        <Link to='https://regal-manatee-4c4d2a.netlify.app/' target='_blank' >
          <img src={first} alt='Javascript handson'/>
          <p>Developed an engaging number guessing game, challenging users to guess the correct number while showcasing high scores for added competition and excitement.</p>
        </Link>
      </div>
</div>

    </div>
  )
}

export default JavaScript