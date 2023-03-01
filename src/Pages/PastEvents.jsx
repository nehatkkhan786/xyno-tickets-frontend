import { Container, Grid, Typography ,Box} from '@mui/material'
import React from 'react'


import Event1 from '../assets/images/event1.jpeg'
import Event2 from '../assets/images/event2.jpeg'
import Event3 from '../assets/images/event3.jpeg'
import EventsCard from '../Components/EventsCard'

const data = [
    {id:1, url:Event1},
    {id:2, url:Event2},
    {id:3, url:Event3},
    {id:4, url:Event1},
    {id:5, url:Event2},
    {id:6, url:Event3},
  ]
  


const PastEvents = () => {
  return (
   <Box sx={{mt:2}}>
    <Container sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', width:'100%', height:'100%',}}>
        <Typography sx={{textAlign:'center', textTransform:'uppercase', fontSize:24}}>Past Events</Typography>
        <Grid container spacing={2}sx={{mt:4}}>
           {data.map((event)=>{
            return (
                <Grid item md={4} xs={12} sm={12} lg={4}>
                    <EventsCard event={event}/>
                </Grid>
            )
           })}
        </Grid>
    </Container>
   </Box>
  )
}

export default PastEvents