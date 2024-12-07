import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import About from './Components/Pages/About'
import Home from './Components/Pages/Home/Home'
import Services from './Components/Pages/Services'
import Contact from './Components/Pages/Contact'
import ShowData from './Components/Pages/Show_Data/ShowData'

const MainApp = () => {
  return (
    <div>
       <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/showData/:id' element={<ShowData/>}/>
      </Routes>
    </div>
  )
}

export default MainApp
