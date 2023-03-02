import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
    palette: {
        mode:'dark',
        primary:{
            main:'#173632',
        },
    }, 
})

const CustomThemeProvider = (prop) => {
  return (
   <ThemeProvider theme={theme}>
    {prop.children}
   </ThemeProvider>
  )
}

export default CustomThemeProvider