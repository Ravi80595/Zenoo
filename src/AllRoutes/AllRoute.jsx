import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home3 from '../Pages/Home3'
import ScrollToTopLink from '../Components/ScrollToTopLink'
// import FixedBackgroundComponent from '../Pages/Template3/FixedBackgroundComponent'
import Founder from '../Pages/Founder'
import Careers from '../Pages/Careers'
import OurTeam from '../Pages/OurTeam'
// import Board from '../Pages/Board'
import Privacy from '../Pages/Privacy'
import Terms from '../Pages/Terms'



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
        <Route path="/founder" element={<Founder/>}></Route>
        <Route path="/team" element={<OurTeam/>}></Route>
        {/* <Route path="/board" element={<Board/>}></Route> */}
        <Route path="/careers" element={<Careers/>}></Route>
        <Route path="/main" element={<Dashboard/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/home" element={<Home3/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        {/* <Route path="/newTemplate" element={<FixedBackgroundComponent/>}></Route> */}
    </Routes>
    </>
  )
}

export default AllRoute
