import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Logo3 from '../Images/Logo3.png'
import {CloseIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import ScrollToTopLink from './ScrollToTopLink'
import '../CSS/Navbar.css'
import MobNav from './MobNav'



const Navbar = () => {

    
return (
    <>
    <Box>
    <Box className='Laptop-view' box-shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' p={5} w='100vw' position='fixed' zIndex={999999999} background='white'>
        <Flex justifyContent='space-between'>
            <ScrollToTopLink to='/home'>
        <Image w={'170px'} h={'45px'} src={Logo3}/></ScrollToTopLink>
        <Flex fontSize={['15px',20,20,20]} justifyContent='space-around' w={['70%','30%','30%','60%']} pt={0} color='white'>
            <ScrollToTopLink to='/home'>
            <Text color={'#10257f'} className='Link_btns'>Home</Text>
            </ScrollToTopLink>
            <ScrollToTopLink to='/about'>
            <Text color={'#10257f'} className='Link_btns'>About Us</Text>
            </ScrollToTopLink>
            {/* <Link to='/founder'>
            <Text color={'#10257f'} className='Link_btns'>Founder</Text>
            </Link> */}
            {/* <Link to='/board'>
            <Text color={'#10257f'} className='Link_btns'>Board</Text>
            </Link> */}
            <Link to='/team'>
            <Text color={'#10257f'} className='Link_btns'>Our Team</Text>
            </Link>
            <Link to='/careers'>
            <Text color={'#10257f'} className='Link_btns'>Careers</Text>
            </Link>
            <ScrollToTopLink to='/contact'>
            <Text color={'#10257f'} className='Link_btns'>Contact Us</Text>
            </ScrollToTopLink>
        <Box w='10%'>   
        <Link to='/'>
        <CloseIcon color='#10257f' />
        </Link>   
        </Box>
        </Flex>
        </Flex>
    </Box>
    </Box>
    <div className='mobileDiv'>
            <MobNav/>
        </div>
    </>
  )
}

export default Navbar
