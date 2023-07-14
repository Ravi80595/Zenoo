import { Box,Heading,Text,Button,Flex, background,Image} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../CSS/Home.css'
import subtitle from '../Images/subtitle.png'; 
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {AiFillFacebook,AiOutlineWhatsApp,AiFillLinkedin} from 'react-icons/ai'

const Home = ({backgroundColor,colors}) => {


useEffect(() => {
  AOS.init();
}, [])

return (
    <Box>
        <Flex fontSize={30} p={5}>
        <BiLogoInstagramAlt className='footerLogo'/>
        <AiOutlineWhatsApp className='footerLogo'/>
        <AiFillFacebook className='footerLogo'/>
        <AiFillLinkedin className='footerLogo'/>
    </Flex>
        <Box h={'90vh'} data-aos='fade-up'>
        <Text className='title' fontSize={190}  fontFamily='_NewYork' pt={100} color='white'>ZENOO</Text>
        <Text color='white' mt={-10} pb={10}>Your One-Stop Powerhouse</Text>
        {/* <Image src={subtitle} className="rotating-image" /> */}
        <Link to='/main'>
        <Button  _hover={{backgroundColor:colors,color:'white',transition:'1s ease'}} p={7} borderRadius={20} color={colors}>Explore opportunities</Button>
        </Link>
        </Box>
        
    </Box>
  )
}

export default Home
