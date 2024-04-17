import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [navToggle,setNavToggle]=useState(false)

  const handleToggle=()=>{
    setNavToggle(!navToggle)
  }


  return (
    <div className='Navbar'>

      <div className={`nav-wrapper-mobile ${navToggle?'menu-opened':''}`} onClick={handleToggle}>
        <span className={`ham-menu first ${navToggle?'menu-opened':''}`}  ></span>
        <span className={`ham-menu second ${navToggle?'menu-opened':''}`}  ></span>
        <span className={`ham-menu third ${navToggle?'menu-opened':''}` }  ></span>
      </div>

     
        <div className={`navbar-wrapper ${navToggle?'menu-opened':''}`} >

            <NavLink to='/' >Home</NavLink>
            <NavLink to='/projects' >Projects</NavLink>
            <NavLink to='/Handson' >Handson</NavLink>
            <NavLink to='/about' >About</NavLink>

        </div>
    </div>
  )
}

export default Navbar