import React from 'react'
import { Box, Flex, Image, Text, Heading, Button } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Reviews from './Reviews'
import SimpleThreeColumns from '../Components/Services'
import SimpleTwoColumns from '../Components/Slider'
import 'aos/dist/aos.css';
import SideBox from '../Components/SideBox'
import '../CSS/About.css'
import aboutCover from '../Images/aboutCover.png'



const About = () => {



  return (
    <>
      <Navbar />
      <SideBox />
      <Box backgroundColor={'white'} w='100%' m='auto' textAlign='left'>
        <Box pt={'50px'}>
          <Box w='100vw' h={[190, 190, 290, "400px"]} m='auto' pt={50} pl={21} color='white' textAlign='left' backgroundImage={aboutCover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition='center'>
          </Box></Box>
        <Flex direction={['column', 'column', 'column', 'row']} w='80%' m='auto' gap={20} pt={70}>
          <Box>
            <Text textAlign={'justify'}>
              <b> ZENOO </b> provides a mortgage assessment solution that helps buyers determine their affordability without making any compromises. The company's primary objective is to assist buyers in getting onto the property ladder and investing in their future.
              <br /> <br />
            </Text>
          </Box>
        </Flex>
        <Box background={'whitesmoke'} pb={30}>
          <Text pt={'30px'} mt={'100px'} fontSize={['26px', '26px', '36px', '36px']} textAlign={'center'} fontFamily={'Prata'}>What Drives Us </Text>
          <Text textAlign={'center'}>At the heart of Zenoo lies five core values that govern the way we conduct our business</Text>
          <SimpleThreeColumns />
          <SimpleTwoColumns />
        </Box>
        <Box background={'whitesmoke'}>
        </Box>
        <Box background={'whitesmoke'}>
        </Box>
      </Box>
      <Box>
        <Reviews />
      </Box>
      <Footer />
    </>
  )
}

export default About
