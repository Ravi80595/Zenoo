import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.png'
import BOD from './BOD'


const OurTeam = () => {



return(
    <>
    <Navbar/>
    <Box background={'white'} pt={50} pb={350}></Box>
    <BOD/>
    <Footer/>
    </> 
  )
}

export default OurTeam
