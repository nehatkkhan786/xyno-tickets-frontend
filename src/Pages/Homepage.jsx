import React, { useState } from 'react'
import {Box, IconButton} from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Event1 from '../assets/images/event1.jpeg'
import Event2 from '../assets/images/event2.jpeg'
import Event3 from '../assets/images/event3.jpeg'

const data = [
  {id:1, url:Event1},
  {id:2, url:Event2},
  {id:3, url:Event3}
]



const Homepage = () => {
  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
   <Box sx={{width:'100vw', height:"calc(100vh - 800px)", }}>
     <Box sx={{width:'100%',}}>
      <Slider {...settings}>
        <Box component='img' src={Event1} sx={{width:{xs:'100%', md:700, lg:800}, height:{xs:'100%', sm:'100%', md:700, lg:600}, }}/> 
        <Box component='img' src={Event2} sx={{width:{xs:'100%', md:700, lg:800}, height:{xs:'100%', sm:'100%', md:700, lg:600}, }}/> 
        <Box component='img' src={Event3} sx={{width:{xs:'100%', md:700, lg:800}, height:{xs:'100%', sm:'100%', md:700, lg:600}, }}/> 
        </Slider>
      </Box>
   </Box>
  )
}

export default Homepage