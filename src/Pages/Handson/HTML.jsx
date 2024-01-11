import React from 'react'
import { Link } from 'react-router-dom'
import first from "../../Assets/Media/Handson-img/Html Hs/1.png"
import second from "../../Assets/Media/Handson-img/Html Hs/2.png"
import third from "../../Assets/Media/Handson-img/Html Hs/3.png"
import HsNav from '../../Components/HsNav'

const HTML = () => {
    return (
        <div className='hs-desc-wrapper'>
    <HsNav/>
          
          <header>
            HTML Handson's
          </header>
        <hr/>
    
    <div className="hs-content-container">
    
    <div className="hs-desc-content">
            <Link to='https://pranav1117.github.io/Handson-1-HTML-/' target='_blank'>
              <img src={first} alt='HTML handson'/>
              <p>Practiced basic HTML tags like anchor tag, heading tag and list tag</p>
            </Link>
          </div> 
    
          <div className="hs-desc-content">
            <Link to='https://pranav1117.github.io/Handson-2-HTML-/' target='_blank'>
              <img src={second} alt='HTML handson'/>
              <p>Created form which shows user info in url after submitting and practiced Table tag</p>
            </Link>
          </div>
        
          <div className="hs-desc-content">
            <Link to='https://pranav1117.github.io/Handson-3-HTML-/' target='_blank'>
              <img src={third} alt='HTML handson'/>
              <p>Use of Iframe and Video tags</p>
            </Link>
          </div>
    
          
            </div>
    
        </div>
    )
}

export default HTML