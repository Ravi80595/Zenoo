import { Box,Heading,Text,Button,Flex, background,Image} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../CSS/Home.css'
// import subtitle from '../Images/subtitle.png'; 
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {BiLogoInstagramAlt} from 'react-icons/bi'
// import {AiFillFacebook,AiOutlineWhatsApp,AiFillLinkedin} from 'react-icons/ai'

const Home = ({backgroundColor,colors}) => {



    {/* <BiLogoInstagramAlt className='footerLogo'/> */}
        {/* <AiOutlineWhatsApp className='footerLogo'/>
        <AiFillFacebook className='footerLogo'/>
        <AiFillLinkedin className='footerLogo'/> */}

useEffect(() => {
  AOS.init();
}, [])

return (
    <Box background='linear-gradient(0deg, rgba(116,126,236,1) 8%, rgba(99,122,230,1) 17%, rgba(48,84,255,1) 30%, rgba(31,66,254,1) 38%, rgba(33,52,219,1) 49%, rgba(15,27,223,1) 65%, rgba(24,15,209,1) 81%, rgba(6,0,212,1) 100%)'>
      {/* <Flex fontSize={30} p={5} justifyContent='space-between'>
        <Flex>
        <BiLogoInstagramAlt className='footerLogo'/>
        <AiOutlineWhatsApp className='footerLogo'/>
        <AiFillFacebook className='footerLogo'/>
        <AiFillLinkedin className='footerLogo'/>
        </Flex>
        <Flex gap={10}>
          <Link to='/main'>
          <Button>Template 1</Button>
          </Link>
          <Link to='/template1'>
          <Button>Template 2</Button>
          </Link>
          <Link to='/template2'>
          <Button>Template 3</Button>
          </Link>
          <Link to='/template3'>
          <Button>Template 4</Button>
          </Link>
        </Flex>
    </Flex> */}
    <Box background={'whitesmoke'} position={'absolute'} left={3} top={'38%'} color={'blue'}>
      <Image className='footerLogo' w='40px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png'/>
      <Image className='footerLogo' w='40px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png'/>
      <Image className='footerLogo' w='40px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png'/>
      <Image className='footerLogo' w='40px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png'/>
    </Box>
        <Box background={'whitesmoke'} color={'blue'} h={'90vh'} data-aos='fade-up'>
          <Image pt={91} ml={588} mr={112} w={188} src='https://zenoo.vercel.app/static/media/Logo.60cc4a9cbf255d6eeb4e.png'/>
         
        <Text className='title' fontSize={100}  fontFamily='_NewYork' pt={1} color='blue'>ZENOO</Text>
      
        <div color='blue' class="scrolling-text1" w='50%' m='auto'>
        <p>Uniting Real-Estate and Finance with Trust</p>
        </div>
        <Link to='/template3'>
        <Button p={6} _hover={{background:'white',color:'blue',border:'2px solid blue',transition:'1s ease'}} background={'blue'} color={'white'}>Explore opportunities</Button>
        </Link>
        </Box>
        
    </Box>
  )
}

export default Home
