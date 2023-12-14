import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import HeroSection from '../../components/heroSection/HeroSection'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
        <NavBar/>
        <HeroSection/>
    </Box>
  )
}

export default Home