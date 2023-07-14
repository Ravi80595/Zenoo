import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Images/Logo.png'
import {CloseIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {


return (
    <Box p={5} w='100%' position='fixed' zIndex={999999999} background='#0e0c4d'>
        <Flex justifyContent='space-between' >
        <Image w={10} src={Logo}/>
        <Flex fontSize={20} justifyContent='space-around' w='30%' pt={0} color='white'>
            <Text>About us</Text>
            <Text>Contact us</Text>
        <Box w='10%'>   
        <Link to='/'>
        <CloseIcon color='white' />
        </Link>   
        
        </Box>
        </Flex>
        
        </Flex>
      
    </Box>
  )
}

export default Navbar
