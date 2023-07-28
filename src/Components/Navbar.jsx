import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Images/Logo.png'
import {CloseIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {


return (
    <Box p={5} w='100vw' position='fixed' zIndex={999999999} background='#10257f'>
        <Flex justifyContent='space-between'>
            <Link to='/template3'>
        <Image w={10} src={Logo}/></Link>
        <Flex fontSize={['15px',20,20,20]} justifyContent='space-around' w={['70%','30%','30%','30%']} pt={0} color='white'>
            <Link to='/about'>
            <Text className='Link_btns-dark'>About us</Text>
            </Link>
            <Link to='/contact'>
            <Text className='Link_btns-dark'>Contact us</Text>
            </Link>
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
