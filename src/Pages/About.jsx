import React from 'react'
import { Box, Flex,Image,Text,Heading, Button } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'
import SimpleThreeColumns from '../Components/Services'
import cover from '../Images/cover.png'
import SimpleTwoColumns from '../Components/Slider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SideBox from '../Components/SideBox'
import BOD from './BOD.jsx'



const About = () => {



return(
<>
<Navbar/>
<SideBox/>
    <Box backgroundColor={'white'} w='100%' m='auto' textAlign='left'>
      <Box w='100%' h={[190,190,290,290]} m='auto' color='black' pt={100} pl={21} color='white' textAlign='left' backgroundImage={cover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}> 
      <Text> 
        <Link to='/template3' _hover={{color:'blue'}}> Home &nbsp;
        </Link>
          > About us</Text>
      </Box>
      <Flex direction={['column','column','column','row']} w='80%' m='auto' gap={20} pt={90}>
        <Image data-aos='fade-right' w={700} h={[250,350,350,350]} src='https://media.istockphoto.com/id/1199060494/photo/insurance-protecting-family-health-live-house-and-car-concept.jpg?s=612x612&w=0&k=20&c=W8bPvwF5rk7Rm2yDYnMyFhGXZfNqK4bUPlDcRpKVsB8='/>
        <Box data-aos='fade-left'>
          <Text>
          At <b> ZENOO </b>, we're not just a conglomerate; we're a visionary force that encompasses a world of possibilities. With a passion for innovation and a commitment to excellence, we have redefined the landscape of real estate, loan services, insurance solutions, legal assistance, interior design, and construction management. Our journey began with a simple yet audacious dream - to create a one-stop hub where all your dreams find their true home.
         <br/> <br/>
         Founded by <b> Mohit Jain </b> , ZENOO set sail on an ambitious odyssey to shape the future of various industries. Fueled by the pursuit of excellence, integrity, and unyielding customer satisfaction, we embarked on this transformative journey - a journey that remains anchored in a deep-rooted commitment to our clients' unique needs.
          </Text>
        </Box>
      </Flex>
          <Box data-aos='fade-up' background={'whitesmoke'} pb={30}>
      <Text pt={'30px'} mt={'150px'} fontSize={['26px','26px','36px','36px']} textAlign={'center'}>Our Values </Text>
    <Text textAlign={'center'}>At the heart of Zenoo lies five core values that govern the way we conduct our business</Text>
    <SimpleThreeColumns/>
    <SimpleTwoColumns/>
    </Box>

    <Box background={'whitesmoke'}>
    <Flex data-aos='fade-up' direction={['column','column','column','row']} w='90%' m='auto' gap={[10,40,40,40]} pt={20} pb={20}>
        <Box>
          <Image w={'800px'} src='https://realnewestate.com/wp-content/uploads/2021/12/becoming-a-real-estate-developer.jpeg'/>
        </Box>
        <Box textAlign={['center','left','left','left']} w={['90%','90%','70%','70%']}>
          <Text fontSize={['26px','26px','36px','36px']} > Our Mission</Text>
          <Text lineHeight={'1.5rem'}>To enrich lives and create exceptional spaces by delivering innovative, sustainable, and customer-centric solutions. Through integrity, quality, and a commitment to excellence, we aim to be a leading force in the Indians, fostering growth and prosperity for our stakeholders and the communities we serve.</Text>
        </Box>
      </Flex>
      </Box>
      <Box background={'whitesmoke'}>
    <Flex data-aos='fade-up' direction={['column-reverse','column-reverse','column','row']} w='90%' m='auto' gap={[10,40,40,40]} pt={20} pb={20}>
        <Box textAlign={['center','left','left','left']} w={['90%','90%','70%','70%']}>
          <Text fontSize={['26px','26px','36px','36px']} > Our Vision</Text>
          <Text lineHeight={'1.5rem'}>Our vision is to be the most admired and trusted corporation in India, setting new standards of excellence and innovation in the distinct industries. ZENOO aspire to positively impact lives by creating inspiring living, working, and recreational spaces that harmoniously blend with the environment. 
By embracing cutting-edge technologies and sustainable practices, we strive to leave a lasting legacy for future generations while staying committed to our core values and the pursuit of excellence.</Text>
        </Box>
        <Box>
          <Image w={'800px'} src='https://t4.ftcdn.net/jpg/03/30/28/45/360_F_330284507_zWMKJuSAPN2VyomK4et4dTdHi2P8lmHb.jpg'/>
        </Box>
      </Flex>
      </Box>
      <BOD/>
    </Box>
    <Reviews/>
    
    <Footer/>
    </>
  )
}

export default About
