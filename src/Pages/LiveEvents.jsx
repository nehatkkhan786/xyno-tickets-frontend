import React from 'react'
import Slider from "react-slick";
import {Box, Container} from '@mui/material'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Event1 from '../assets/images/event1.jpeg'
import Event2 from '../assets/images/event2.jpeg'
import Event3 from '../assets/images/event3.jpeg'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const LiveEvents = () => {
  return (
   <Container maxWidth='md'>
      <Slider {...settings}>
        <Box>
          <Box component='img' src={Event1} sx={{width:'100%'}} />
        </Box>
        <Box>
          <Box component='img' src={Event2}  sx={{width:'100%'}} />
        </Box>
        <Box>
          <Box component='img' src={Event3}  sx={{width:'100%'}}/>
        </Box>
      </Slider>
    </Container>
    
  )
}
