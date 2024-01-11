import React from 'react'
import react from '../Assets/Media/Tech-icons/react.png'
import html from '../Assets/Media/Tech-icons/html.png'
import css from '../Assets/Media/Tech-icons/css.png'
import js from '../Assets/Media/Tech-icons/javascript.png'
import { Link } from 'react-router-dom'

const HsNav = () => {
  return (
    <div>

<div className="handson-nav">
          
          <Link to='/handson/react'>
          <div className='hs-nav'>
              <img src={react} alt='react'/>
              <p>React</p>
            </div>
          </Link>

          <Link to='/handson/js'>
          <div className='hs-nav'>
              <img src={js} alt='javascript'/>
              <p>JavaScript</p>
          </div>
          </Link>

          <Link to='/handson/css'>
          <div className='hs-nav'>
              <img src={css} alt='CSS'/>
              <p>CSS</p>
          </div>
          </Link>

          <Link to='/handson/html'>
          <div className='hs-nav'>
              <img src={html} alt='HTML'/>
              <p>HTML</p>
          </div>
          </Link>

        </div>
    </div>
  )
}

export default HsNav