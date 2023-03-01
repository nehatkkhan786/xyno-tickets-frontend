import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavTabs = () => {
  const navigate = useNavigate()
  return (
   <Box sx={{ backgroundColor:'transparent', width:'100%', display:'flex', height:'70px', color:'white', justifyContent:'space-around', alignItems:'center',}}>
        <Button onClick={()=>navigate('/past_events')} variant='contained' sx={{borderRadius:4, backgroundColor:'#7E7E7E'}}>PAST EVENTS</Button>
        <Button onClick={()=>navigate('/')} variant='contained' sx={{borderRadius:4, backgroundColor:'#7E7E7E'}}>LIVE NOW</Button>
        <Button onClick={()=>navigate('/upcoming_events')} variant='contained' sx={{borderRadius:4, backgroundColor:'#7E7E7E'}}>UPCOMING</Button>
   </Box>
  )
}

export default NavTabs