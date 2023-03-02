import React, { useState } from 'react'
import {Box, Container, IconButton, Tab, Tabs} from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Event1 from '../assets/images/event1.jpeg'
import Event2 from '../assets/images/event2.jpeg'
import Event3 from '../assets/images/event3.jpeg'
import PastEvents from './PastEvents';
import UpcomingEvents from './UpcomingEvents';
import { LiveEvents } from './LiveEvents';

const data = [
  {id:1, url:Event1},
  {id:2, url:Event2},
  {id:3, url:Event3}
]



const Homepage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
   <Box sx={{ width:'100%', height:'100svh'}}>
      <Box sx={{display:'flex', width:'100%', justifyContent:'center', mt:4}}>
          <Container maxWidth='md' sx={{display:'flex', justifyContent:'center'}}>
            <Tabs centered textColor='#173632'  value={value} onChange={handleChange} sx={{borderRadius:10, width:600, display:'flex', justifyContent:'center', border:'0.5px solid gray', paddingLeft:2, paddingRight:2, paddingTop:1, paddingBottom:1}}>
                <Tab  label='PAST EVENTS' value={0}  sx={{fontSize:{xs:10, md:14}, fontWeight:'bold'}} />
                <Tab  label='LIVE NOW' value={1}  sx={{fontSize:{xs:10, md:14}, fontWeight:'bold'}} />
                <Tab  label='UPCOMING' value={2}  sx={{fontSize:{xs:10, md:14}, fontWeight:'bold'}} />
            </Tabs>
          </Container>
        </Box>

        <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:4}}>
          {value === 0 && <PastEvents/>}  
          {value === 1 && <LiveEvents/>}  
          {value === 2 && <UpcomingEvents/>}  
        </Box>
   </Box>
  )
}

export default Homepage