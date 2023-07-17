import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home1 from '../Pages/Template1/Home1'
import Home2 from '../Pages/Template2/Home2'

const AllRoute = ({backgroundColor,colors}) => {


return (
    <Routes>
        <Route path="/" element={<Home backgroundColor={backgroundColor} colors={colors}/>}></Route>
        <Route path="/main" element={<Dashboard/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/template1" element={<Home1/>}></Route>
        <Route path="/template2" element={<Home2/>}></Route>
    </Routes>
  )
}

export default AllRoute
