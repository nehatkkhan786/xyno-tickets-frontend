import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const EventsCard = ({event}) => {
  return (
   <Box>
       <Box component='img' src={event.url} sx={{width:{xs:150, sm:150, md:180, lg:180},height:{xs:120, sm:150, md:180, lg:180}, borderRadius:6, objectFit:'fill'}}/>
       <Typography>Event Name</Typography>
   </Box>
  )
}

export default EventsCard