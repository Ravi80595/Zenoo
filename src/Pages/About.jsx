import React from 'react'
// import Navbar1 from './Template1/Navbar1'
import { Box, Flex,Image,Text,Heading, Button } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'
import SimpleThreeColumns from '../Components/Services'


const About = () => {


return (
<>
<Navbar/>
    <Box w='100%' m='auto' textAlign='left'>
      <Box w='100%' h={290} m='auto' color='black' pt={100} pl={21} color='white' textAlign='left' backgroundImage={'https://hooquest.com/wp-content/uploads/2021/11/facebook-cover-2.jpg'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}> 
      <Text> 
        <Link to='/template3' _hover={{color:'blue'}}> Home &nbsp;
        </Link>
          > About us</Text>
      </Box>
      {/* <Text w='90%' m='auto' pb={10} >Company History</Text> */}
      <Flex w='80%' m='auto' gap={20} pt={90}>
        <Image w={400} src='https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/about-1-760x760.jpg'/>
        <Box>
          <Heading pb={5} textAlign='center'>Zenoo</Heading>
          <Text>
          At ZENOO, we're not just a conglomerate; we're a visionary force that encompasses a world of possibilities. With a passion for innovation and a commitment to excellence, we have redefined the landscape of real estate, loan services, insurance solutions, legal assistance, interior design, and construction management. Our journey began with a simple yet audacious dream - to create a one-stop hub where all your dreams find their true home.
         <br/> <br/>
            We believe in more than just transactions; we believe in the experiences that turn dreams into reality. At ZENOO, we're not just in the business of bricks and mortar, numbers, or policies - we are in the business of building trust, nurturing aspirations, and fostering growth. Our team of experts works tirelessly, combining their knowledge, creativity, and ingenuity to craft solutions that go beyond expectations.
          </Text>
          <Button mt={5} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button>
        </Box>
      </Flex>
      <Box backgroundColor='#efefef' mt={10} pt={5} pb={10}>
        <Box w={"80%"} m='auto'>
        <Text pb={10} fontSize={'30px'}>Our Leadership</Text>
        <Flex gap={10} justifyContent='space-around'>
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
    <Text mt={50} fontSize={'30px'}>Core Values </Text>
    <Text>At the heart of Zenoo lies five core values that govern the way we conduct our business:</Text>
    <SimpleThreeColumns/>
    <Footer/>
    </>
  )
}

export default About
