import React from 'react'
import first from '../../Assets/Media/Handson-img/React hs/1.png'
import second from '../../Assets/Media/Handson-img/React hs/2.png'
import third from '../../Assets/Media/Handson-img/React hs/3.png'
import fourth from '../../Assets/Media/Handson-img/React hs/4.png'
import fifth from '../../Assets/Media/Handson-img/React hs/5.png'
import sixth from '../../Assets/Media/Handson-img/React hs/6.png'
import seventh from '../../Assets/Media/Handson-img/React hs/7.png'
import { Link } from 'react-router-dom'
import HsNav from '../../Components/HsNav'

const ReactHs = () => {
  return (
    <div className='hs-desc-wrapper'>
      
  <HsNav/>
      <header>
        React Handson's
      </header>
    <hr/>

<div className="hs-content-container">

      <div className="hs-desc-content">
        <Link to='https://regal-manatee-4c4d2a.netlify.app/' target='_blank' >
          <img src={first} alt='react handson'/>
          <p>Implemented dynamic UI updates through conditional rendering, leveraging both functional and class-based components to ensure a seamless and responsive user experience in diverse React applications</p>
        </Link>
      </div>

      <div className="hs-desc-content">
        <Link to='https://effortless-cannoli-1ea1e8.netlify.app/' target='_blank'>
          <img src={second} alt='react handson'/>
          <p>Implemented robust state management and proficient form handling within a class-based component, enhancing the application's functionality and user interaction.</p>
        </Link>
      </div>

      <div className="hs-desc-content">
        <Link to='https://fluffy-flan-485eac.netlify.app/' target='_blank'>
          <img src={third} alt='react handson'/>
          <p>Executed efficient form handling within function components by leveraging props, enhancing the application's user interface and facilitating seamless data interaction.</p>
        </Link>
      </div>

      <div className="hs-desc-content">
        <Link to='https://calm-starlight-848576.netlify.app/' target='_blank'>
          <img src={fourth} alt='react handson'/>
          <p>Implemented routing functionality and harnessed the power of React hooks, including useState, useContext, useLocation, and useNavigate, to create a dynamic and navigable user experience.</p>
        </Link>
      </div>

      <div className="hs-desc-content">
        <Link to='https://adorable-otter-69519f.netlify.app/' target='_blank'>
          <img src={fifth} alt='react handson'/>
          <p>Implementation Pure and Higher Order Component</p>
        </Link>
      </div>

      <div className="hs-desc-content">
        <Link to='https://cute-peony-0e4625.netlify.app/' target='_blank'>
          <img src={sixth} alt='react handson'/>
          <p>Effectively utilized the useContext hook for state management, streamlining data sharing and communication between components in the application</p>
        </Link>
      </div>

      <div className="hs-desc-content">
        <Link to='https://cute-peony-0e4625.netlify.app/' target='_blank'>
          <img src={seventh} alt='react handson'/>
          <p>Implemented state management seamlessly using Redux Toolkit, enhancing the predictability and scalability of the application by centralizing and efficiently managing the state logic</p>
        </Link>
      </div>
</div>

    </div>
  )
}

export default ReactHs