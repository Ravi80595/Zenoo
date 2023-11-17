import { Box, Heading, Text, Button, Flex, background, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../CSS/Home.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../Images/Logo.png'

const Home = () => {


useEffect(() => {
  AOS.init();
}, [])


return (
    <Box>
      <Box className='social-icons-home' position={'absolute'} left={3} top={['30%', '30%', '30%', '30%']} color={'blue'}>
        <a href="https://www.instagram.com/zenoo186/ " target='blank'>
          <Image className='footerLogo' w='40px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png'     data-aos='fade-right' /></a>
        <a href="https://www.linkedin.com/company /zenoo.in/ " target='blank'>
          <Image className='footerLogo' w='40px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png' data-aos='fade-right' data-aos-duration="1200" /></a>
        <a href="https://api.whatsapp.com/send/?phone=7711884456&text&type=phone_number&app_absent=0" target='blank'>
          <Image className='footerLogo' w='40px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png' data-aos='fade-right' data-aos-duration="1400" /></a>
        <a href="https://www.facebook.com/zenoo18" target='blank'>
          <Image className='footerLogo' w='40px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png' data-aos='fade-right' data-aos-duration="1600" /></a>
        <a href="https://www.youtube.com/channel/UCk5O3EwfOobD_vhZnlT0CLg" target='blank'>
          <Image className='footerLogo' w='40px' src='https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png' data-aos='fade-right' data-aos-duration="1800" /></a>
      </Box>
      <Box color={'blue'} h={'99vh'} data-aos='fade-up'>
        <Flex justifyContent={'center'}>
          <Image pt={['152px', 91, 91, 91]} w={['488px', '488px', '488px', '488px']} src={Logo} /></Flex>
        <div color='blue' style={{ paddingBottom: '25px', fontWeight: 'bold', wordSpacing: '3px', fontSize: "19px", letterSpacing: "2px", marginLeft: "-15px",paddingTop:'20px' }} w={['90%', '50%', '50%', '90%']} m='auto'>
          <p>Where World Connects</p>
        </div>
        <Link to='/home'>
          <Button p={6} fontSize={'20px'} _hover={{ background: 'white', color: 'blue', border: '2px solid blue', transition: '1s ease' }} background={'blue'} color={'white'}>Explore Opportunities</Button>
        </Link>
      </Box>
    </Box>



  )
}

export default Home