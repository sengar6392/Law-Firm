import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import HeroSection from '../../components/heroSection/HeroSection'
import { Box } from '@mui/material'
import Introduce from '../../components/introduce/Introduce'

const Home = () => {
  return (
    <Box>
        <NavBar/>
        <HeroSection/>
        <Introduce/>
    </Box>
  )
}

export default Home