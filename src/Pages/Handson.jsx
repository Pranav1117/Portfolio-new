import React from 'react'
import react from '../Assets/Media/Tech-icons/react.png'
import html from '../Assets/Media/Tech-icons/html.png'
import css from '../Assets/Media/Tech-icons/css.png'
import express from '../Assets/Media/Tech-icons/express.png'
import js from '../Assets/Media/Tech-icons/javascript.png'
import { Link } from 'react-router-dom'
const Handson = () => {
  return (
    <div className='Handson'>
       <header>
        <h2>Handson's</h2>
        <p>Okay so as I was learning Web Development for the first time, so to know how things work, to make strong foundation in MERN I completed on several handson for each stack</p>
      </header>

      <div className="handson-wrapper">
        <header>Handson I work on</header>
        <hr/>

        <div className="handson-content">
          
          <Link to='/handson/react'>
          <div className='hs'>
              <img src={react} alt='react'/>
              <p>React</p>
            </div>
          </Link>

          <Link to='/handson/js'>
          <div className='hs'>
              <img src={js} alt='javascript'/>
              <p>JavaScript</p>
          </div>
          </Link>

          <Link to='/handson/css'>
          <div className='hs'>
              <img src={css} alt='CSS'/>
              <p>CSS</p>
          </div>
          </Link>

          <Link to='/handson/html'>
          <div className='hs'>
              <img src={html} alt='HTML'/>
              <p>HTML</p>
          </div>
          </Link>

        </div>
      </div>  
    </div>
  )
}

export default Handson