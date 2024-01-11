import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Handson from '../Pages/Handson'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar'
import ReactHs from '../Pages/Handson/ReactHs'
import JavaScript from '../Pages/Handson/JavaScript'
import HTML from '../Pages/Handson/HTML'
import CSS from '../Pages/Handson/CSS'
import MouseMoveEffect from '../Components/MouseMoveEffect'
const Router = () => {
  return (
<BrowserRouter>
<Navbar/>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/handson' element={<Handson/>}/>
        <Route path='/handson/react' element={<ReactHs/>}/>
        <Route path='/handson/js' element={<JavaScript/>}/>
        <Route path='/handson/css' element={<CSS/>}/>
        <Route path='/handson/html' element={<HTML/>}/>



    </Routes>
</BrowserRouter> 
)
}

export default Router