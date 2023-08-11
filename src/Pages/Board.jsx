import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.jpg'
import BOD from './BOD'


const Board = () => {



return(
    <>
    <Navbar/>
    <Box background={'white'}>
      <BOD/>
    </Box>
    <Footer/>
    </> 
  )
}

export default Board
