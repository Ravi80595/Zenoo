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
import MissionAbout from '../Images/MissionAbout.png'
import '../CSS/About.css'
import vision2 from '../Images/vision2.png'
import {BsBookmarkCheckFill} from 'react-icons/bs'


const About = () => {



return(
<>
<Navbar/>
<SideBox/>
    <Box backgroundColor={'white'} w='100%' m='auto' textAlign='left'>
    <Box pt={'50px'}>
      <Box w='100%' h={[190,190,290,210]} m='auto' pt={50} pl={21} color='white' textAlign='left' backgroundImage={cover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}> 
      </Box></Box>
      <Flex direction={['column','column','column','row']} w='80%' m='auto' gap={20} pt={70}>
        <Image  borderRadius={20} w={700} h={[250,350,350,350]} src='https://media.istockphoto.com/id/1199060494/photo/insurance-protecting-family-health-live-house-and-car-concept.jpg?s=612x612&w=0&k=20&c=W8bPvwF5rk7Rm2yDYnMyFhGXZfNqK4bUPlDcRpKVsB8='/>
        <Box>
          <Text textAlign={'justify'}>
          At <b> ZENOO </b>, we're not just a conglomerate; we're a visionary force that encompasses a world of possibilities. With a passion for innovation and a commitment to excellence, we have redefined the landscape of real estate, loan services, insurance solutions, legal assistance, interior design, and construction management. Our journey began with a simple yet audacious dream - to create a one-stop hub where all your dreams find their true home.
         <br/> <br/>
         Founded by <b> Mohit Jain </b> , ZENOO set sail on an ambitious odyssey to shape the future of various industries. Fueled by the pursuit of excellence, integrity, and unyielding customer satisfaction, we embarked on this transformative journey - a journey that remains anchored in a deep-rooted commitment to our clients' unique needs.
          </Text>
        </Box>
      </Flex>
          <Box background={'whitesmoke'} pb={30}>
      <Text pt={'30px'} mt={'100px'} fontSize={['26px','26px','36px','36px']} textAlign={'center'}>What Drives Us </Text>
    <Text textAlign={'center'}>At the heart of Zenoo lies five core values that govern the way we conduct our business</Text>
    <SimpleThreeColumns/>
    <SimpleTwoColumns/>
    </Box>

    <Box background={'whitesmoke'}>
    <Flex direction={['column','column','column','row']} w='90%' m='auto' gap={[10,40,40,20]} pt={7} pb={10}>
        <Box w={['350px','900px','900px','900px']} h={['250px','350px','350px','350px']}  backgroundImage={'https://img.freepik.com/premium-photo/rooftop-balcony-with-cityscape_9083-1881.jpg'} backgroundSize={'cover'} boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;' borderRadius={20}>
          <Image className='moving-image'  w={'80%'} h={'250px'} m={'auto'} mt={['10px','80px','80px','80px']} src={MissionAbout}/>
        </Box>
        <Box textAlign={['center','left','left','left']} w={['90%','90%','70%','70%']}>
          <Text fontSize={['26px','26px','36px','36px']} > Our Mission</Text>
          <Text lineHeight={'1.5rem'} textAlign={'justify'}>To enrich lives and create exceptional spaces by delivering innovative, sustainable, and customer-centric solutions. Through integrity, quality, and a commitment to excellence, we aim to be a leading force in the Indians, fostering growth and prosperity for our stakeholders and the communities we serve.</Text>
          <Flex w={'99%'} direction={['column','column','row','row']} gap={2} mt={5} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Real Estate Excellence</Text></Flex>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Financial Security</Text></Flex>
            </Flex>
            <Flex mt={3} direction={['column','column','row','row']} gap={2} mb={10} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Comprehensive Insurance</Text></Flex>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Trusted Legal Support</Text></Flex>
            </Flex>
        </Box>
      </Flex>
      </Box>
      <Box background={'whitesmoke'}>
    <Flex direction={['column-reverse','column-reverse','column','row']} w='90%' m='auto' gap={[10,40,40,40]} pt={20} pb={20}>
        <Box textAlign={['center','left','left','left']} w={['90%','90%','70%','60%']}>
          <Text fontSize={['26px','26px','36px','36px']} > Our Vision</Text>
          <Text lineHeight={'1.5rem'} textAlign={'justify'}>Our vision is to be the most admired and trusted corporation in India, setting new standards of excellence and innovation in the distinct industries. ZENOO aspire to positively impact lives by creating inspiring living, working, and recreational spaces that harmoniously blend with the environment. 
By embracing cutting-edge technologies and sustainable practices, we strive to leave a lasting legacy for future generations while staying committed to our core values and the pursuit of excellence.</Text>
<Flex w={'99%'} direction={['column','column','row','row']} gap={2} mt={5} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Diversified Market Leadership</Text></Flex>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Tech-Driven Efficiency</Text></Flex>
            </Flex>
            <Flex mt={3} direction={['column','column','row','row']} gap={2} mb={10} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Trusted One-Stop Shop</Text></Flex>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Sustainable Growth</Text></Flex>
            </Flex>
        </Box>
        <Box backgroundImage={'https://img.freepik.com/free-photo/construction-illustration-city-skyline_53876-103044.jpg'} borderRadius={20}>
          <Image borderRadius={20} w={['350px','900px','900px','900px']} h={['250px','350px','350px','350px']} boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;' src={vision2}/>
        </Box>
      </Flex>
      </Box>
      <BOD/>
    </Box>
    <Box>
    <Reviews/>
    </Box>
    <Footer/>
    </>
  )
}

export default About


// 'https://t4.ftcdn.net/jpg/03/30/28/45/360_F_330284507_zWMKJuSAPN2VyomK4et4dTdHi2P8lmHb.jpg'