import React from 'react'
import { Box, Flex,Image,Text,Heading, Button } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'
import SimpleThreeColumns from '../Components/Services'


const About = () => {



return(
<>
<Navbar/>
    <Box backgroundColor={'white'} w='100%' m='auto' textAlign='left'>
      <Box w='100%' h={290} m='auto' color='black' pt={100} pl={21} color='white' textAlign='left' backgroundImage={'https://hooquest.com/wp-content/uploads/2021/11/facebook-cover-2.jpg'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}> 
      <Text> 
        <Link to='/template3' _hover={{color:'blue'}}> Home &nbsp;
        </Link>
          > About us</Text>
      </Box>
      {/* <Text w='90%' m='auto' pb={10} >Company History</Text> */}
      <Flex direction={['column','column','column','row']} w='80%' m='auto' gap={20} pt={90}>
        <Image w={500} src='https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/about-1-760x760.jpg'/>
        <Box>
          <Heading pb={5} textAlign='center'>Zenoo</Heading>
          <Text>
          At ZENOO, we're not just a conglomerate; we're a visionary force that encompasses a world of possibilities. With a passion for innovation and a commitment to excellence, we have redefined the landscape of real estate, loan services, insurance solutions, legal assistance, interior design, and construction management. Our journey began with a simple yet audacious dream - to create a one-stop hub where all your dreams find their true home.
         <br/> <br/>
         Founded by ______ , ZENOO set sail on an ambitious odyssey to shape the future of various industries. Fueled by the pursuit of excellence, integrity, and unyielding customer satisfaction, we embarked on this transformative journey - a journey that remains anchored in a deep-rooted commitment to our clients' unique needs.
          </Text>
          <Flex justifyContent={'end'}>
          <Image w={90} src='https://t4.ftcdn.net/jpg/03/04/16/25/360_F_304162525_c1FkMpxVpNEcARi7xWgq24Lcphi5S0sv.jpg'/>
            <Image w={90} src='https://png.pngtree.com/png-clipart/20220602/original/pngtree-trust-seller-badge-checkmark-png-image_7885139.png'/>
          </Flex>
          {/* <Button mt={5} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button> */}
        </Box>
      </Flex>

      <Text mt={'170px'} fontSize={'30px'} textAlign={'center'}>Our Values </Text>
    <Text textAlign={'center'}>At the heart of Zenoo lies five core values that govern the way we conduct our business:</Text>
    <SimpleThreeColumns/>
    <Box background={'#efefef'}>
    <Flex direction={['column','column','column','row']} w='90%' m='auto' gap={40} pt={20} pb={20}>
        <Box>
          <Image src='https://satvikrealty.com/wp-content/uploads/2021/08/mission-vision.jpg'/>
        </Box>
        <Box textAlign={'left'} w={'70%'}>
          <Text fontSize={'36px'} >Vission</Text>
          <Text lineHeight={'1.5rem'}>Our vision is to be the most admired and trusted corporation in India, setting new standards of excellence and innovation in the distinct industries. ZENOO aspire to positively impact lives by creating inspiring living, working, and recreational spaces that harmoniously blend with the environment. 
By embracing cutting-edge technologies and sustainable practices, we strive to leave a lasting legacy for future generations while staying committed to our core values and the pursuit of excellence.</Text>
        </Box>
      </Flex>
      </Box>
      <Box backgroundColor='#efefef' pt={10} pt={5} pb={10}>
        <Box w={"80%"} m='auto'>
        <Text pb={10} fontSize={'30px'}>Our Leadership</Text>
        <Flex direction={['column','column','column','row']} gap={10} justifyContent='space-around'>
          <Box backgroundColor='white' textAlign='center'>
            <Image src='https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/staff-1-699x459.jpg'/>
            <Text>Rich Wacksman</Text>
            <Text>Co-Founder and Executive Chairman</Text>
            <Button mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button>
          </Box>
          <Box backgroundColor='white' textAlign='center'>
            <Image src='https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/staff-1-699x459.jpg'/>
            <Text>Rich Wacksman</Text>
            <Text>Co-Founder and Executive Chairman</Text>
            <Button mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button>
          </Box>
          <Box backgroundColor='white' textAlign='center'>
            <Image src='https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/staff-1-699x459.jpg'/>
            <Text>Rich Wacksman</Text>
            <Text>Co-Founder and Executive Chairman</Text>
            <Button mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button>
          </Box>
          <Box backgroundColor='white' textAlign='center'>
            <Image src='https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/staff-1-699x459.jpg'/>
            <Text>Rich Wacksman</Text>
            <Text>Co-Founder and Executive Chairman</Text>
            <Button mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button>
          </Box>
        </Flex>
        </Box>
      </Box>
    </Box>
    <Reviews/>
    
    <Footer/>
    </>
  )
}

export default About
