import React, { useState,useEffect } from 'react'
import gmail from '../Assets/Media/Socials-icon/mail icon.png'
import x from '../Assets/Media/Socials-icon/x icon.jpg'
import linkedin from '../Assets/Media/Socials-icon/linkedin icon.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  let interval = null;

  useEffect(() => {
    // Run the animation logic when the component mounts
    startAnimation();

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  const startAnimation = () => {
    const nameWrapper = document.getElementById('name');
    if (!nameWrapper) return;

    let iteration = 0;

    interval = setInterval(() => {
      nameWrapper.innerHTML = nameWrapper.dataset.value
        .split('')
        .map((letter, index) => {
          if (index < iteration || nameWrapper.dataset.value[index] === ' ') {
            return `<span style="opacity: 1 ; font-family: 'Comfortaa';text-align='justify';letter-spacing: 4px">${nameWrapper.dataset.value[index]}</span>`;
          }

          return `<span style="opacity: 0.2 ; font-family: 'Comfortaa';text-align='justify';letter-spacing: 4px">${letters[Math.floor(Math.random() * 26)]}</span>`;
        })
        .join('');

      if (iteration >= nameWrapper.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 100);
  };

  
  return (
    <div className='home'>
        <div className="name-wrapper" id='name'data-value="PRANAV BAVASKAR" >
       PRANAV BAVASKAR
        </div>
          <hr className='home-hr'/>
        <div className="socials-wrapper">
        <div className="mail icons">
          <Link to='mailto:pranavbavaskar1@gmail.com'>
          
          <img src={gmail} alt='gmail'/>
          </Link>
        </div>
        <div className="x icons">
        <Link to='https://twitter.com/Wei_Dev' target='_blank'>
          
          <img src={x} alt='x'/>
          </Link>

        </div>
        <div className="linkedin icons">
        <Link to='https://www.linkedin.com/in/pranav-bavaskar-a154a5232/' target='_blank'>
          
          <img src={linkedin} alt='linkedin'/>
          </Link>

        </div>

        </div>
            
    </div>
  )
}

export default Home 