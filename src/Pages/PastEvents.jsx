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
    <Container maxWidth='md' >
      <Grid container spacing={1}>
          {data.map((event)=>{
            return (
              <>
              <Grid item key={event.id} xs={6} sm={6} md={3}>
                  <EventsCard event={event}/>
              </Grid>
              </>
            )
          })}
      </Grid>
    </Container>
  )
}

export default PastEvents