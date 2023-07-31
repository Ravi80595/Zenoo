import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home3 from '../Pages/Template3/Home3'
import ScrollToTopLink from '../Components/ScrollToTopLink'

const AllRoute = () => {


return (
  <>
   {/* Use ScrollToTopLink instead of regular Link */}
   {/* <ScrollToTopLink to="/">Home</ScrollToTopLink>
      <ScrollToTopLink to="/main">Dashboard</ScrollToTopLink>
      <ScrollToTopLink to="/about">About</ScrollToTopLink>
      <ScrollToTopLink to="/contact">Contact</ScrollToTopLink>
      <ScrollToTopLink to="/home">Home3</ScrollToTopLink> */}
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/main" element={<Dashboard/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/home" element={<Home3/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoute
