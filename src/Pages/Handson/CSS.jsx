import React from 'react'
import { Link } from 'react-router-dom'
import first from '../../Assets/Media/Handson-img/Css hs/1.png'
import second from '../../Assets/Media/Handson-img/Css hs/2.png'
import third from '../../Assets/Media/Handson-img/Css hs/3.png'
import fourth from '../../Assets/Media/Handson-img/Css hs/4.png'
import fifth from '../../Assets/Media/Handson-img/Css hs/5.png'
import sixth from '../../Assets/Media/Handson-img/Css hs/6.png'
import HsNav from '../../Components/HsNav'


const CSS = () => {
  return (
    <div className='hs-desc-wrapper'>
      
    <HsNav/>
      <header>
        CSS Handson's
      </header>
    <hr/>


<div className="hs-content-container">

<div className="hs-desc-content">
        <Link to='https://pranav1117.github.io/css-assignment-6/' target='_blank'>
          <img src={sixth} alt='CSS handson'/>
          <p>"Crafted a captivating landing page with a strong emphasis on responsiveness.</p>
        </Link>
      </div>


      <div className="hs-desc-content">
        <Link to='https://pranav1117.github.io/css-assignment-2/' target='_blank'>
          <img src={second} alt='CSS handson'/>
          <p>Developed a Menu Card utilizing strategic positioning techniques to create an appealing layout that effectively presents a store's image and crucial details</p>
        </Link>
      </div>



      <div className="hs-desc-content">
        <Link to='https://pranav1117.github.io/css-assignment-4/' target='_blank'>
          <img src={fourth} alt='CSS handson'/>
          <p>Designed an engaging tuition pamphlet. Leveraged CSS Grid for a structured layout and incorporated gradients to enhance the aesthetic appeal. </p>
        </Link>
      </div>

      <div className="hs-desc-content">
        <Link to='https://pranav1117.github.io/css-assignment-3/' target='_blank'>
          <img src={third} alt='CSS handson'/>
          <p>Practiced CSS positions by designing and implementing positions such as fixed relative absolute</p>
        </Link>
      </div>


      <div className="hs-desc-content">
        <Link to='https://pranav1117.github.io/css-assignment-1/' target='_blank' >
          <img src={first} alt='CSS handson'/>
          <p>Implementation of Inline, inline and external Css. Text-color , Text-decoration implementation</p>
        </Link>
      </div>

    
      <div className="hs-desc-content">
        <Link to='https://pranav1117.github.io/css-assignment-5/' target='_blank'>
          <img src={fifth} alt='CSS handson'/>
          <p>Practiced Animation & transition</p>
        </Link>
      </div>

      
</div>

    </div>
  )
}

export default CSS