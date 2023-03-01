import { Box } from '@mui/system'
import React from 'react'

const EventsCard = ({event}) => {
  return (
   <Box className='card-wrapper' >
       <Box component='img' src={event.url} sx={{width:300,height:280, borderRadius:10, objectFit:'fill'}}/>
   </Box>
  )
}

export default EventsCard