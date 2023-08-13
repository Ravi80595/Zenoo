// import styles from "./Nav.module.css"
import React from 'react'
// import '../App.css'
import "../CSS/Navbar.css"
import {Box,Flex,Heading,Button,Text} from '@chakra-ui/react'
import MobNav from './MobNav'


const HomeNavbar = () => {
 
  

return (
    <>
    <Box className='Laptop-view'>
      <Box display='flex' >
        <p style={{fontSize:'40px',margin: '0px',marginLeft: '20px',fontFamily: 'cursive'}}>Ravi</p>
         <Flex gap={60}  margin='auto auto auto auto' >
          <Heading as='h3' className='Link_btns-dark'>Home</Heading>
          <Heading as='h3' className='Link_btns-dark' >AboutMe</Heading>
          <Heading as='h3' className='Link_btns-dark'>Projects</Heading>
          <Heading as='h3' className='Link_btns-dark' >Skills</Heading>
          <Heading as='h3' className='Link_btns-dark' on>Contact</Heading>
          <a href="https://drive.google.com/file/d/1VkGzotDBg9Qxjg6y4sVN58YcDNxE0zYV/view" target='blank'>
            <Heading as='h3' className='Link_btns-dark' color="white">Resume</Heading>
          </a>
          </Flex>
        </Box> 
        <div className='navbar_line'></div>
      </Box>
        <div className='mobileDiv'>
            <MobNav />
        </div>
    </>
  )
}

export default HomeNavbar