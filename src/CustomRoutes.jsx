import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import PastEvents from './Pages/PastEvents'
import UpcomingEvents from './Pages/UpcomingEvents'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/past_events' element={<PastEvents/>}/>
        <Route path='/upcoming_events' element={<UpcomingEvents/>}/>
    </Routes>
  )
}

export default CustomRoutes