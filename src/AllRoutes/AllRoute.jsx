import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'

const AllRoute = ({backgroundColor,colors}) => {


return (
    <Routes>
        <Route path="/" element={<Home backgroundColor={backgroundColor} colors={colors}/>}></Route>
        <Route path="/main" element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default AllRoute
