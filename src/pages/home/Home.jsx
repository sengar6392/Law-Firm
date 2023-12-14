import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import HeroSection from '../../components/heroSection/HeroSection'
import { Box } from '@mui/material'
import Introduce from '../../components/introduce/Introduce'
import Achievements from '../../components/achievements/Achievements'

const Home = () => {
  return (
    <Box>
        <NavBar/>
        <HeroSection/>
        <Introduce/>
        <Achievements/>
    </Box>
  )
}

export default Home