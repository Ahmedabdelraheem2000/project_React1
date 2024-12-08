import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import About from './Components/Pages/About'
import Home from './Components/Pages/Home/Home'
import Services from './Components/Pages/Services'
import Contact from './Components/Pages/Contact'
import ShowData from './Components/Pages/Show_Data/ShowData'
import SignIn from './Components/Pages/Sign_In_Up/Sign_In/SignIn'
import { Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <NavBar/>

      <div className='App'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/showData/:id' element={<ShowData/>}/>
      <Route path='/signIn' element={<SignIn check={true} />}/>

      </Routes>
      </div>
     
    </div>
  )
}

export default App