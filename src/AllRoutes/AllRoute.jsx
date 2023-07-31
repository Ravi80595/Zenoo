import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home3 from '../Pages/Template3/Home3'

const AllRoute = () => {


return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/main" element={<Dashboard/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/template3" element={<Home3/>}></Route>
    </Routes>
  )
}

export default AllRoute
