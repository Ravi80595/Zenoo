import { Box,Flex,Text,Heading,Button,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {GoArrowUpRight} from 'react-icons/go'
import '../CSS/Dashboard.css'
import '../CSS/Fonts.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Dashboard = () => {
    const [isContentVisible, setIsContentVisible] = useState(true);
    

useEffect(() => {
    AOS.init();
}, [])



useEffect(() => {
const handleScroll = () => {
    const threshold = 100; 
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsContentVisible(scrollTop < threshold);
};

window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

return(
    <Box className='custom-scrollbar' style={{background:'linear-gradient(0deg, rgb(127, 133, 203) 15%, rgb(176 176 183) 22%, rgba(41,66,186,1) 40%, rgba(33,51,153,1) 47%, rgba(25,37,133,1) 57%, rgba(9,15,105,1) 70%, rgba(13,8,107,1) 81%, rgba(17,4,73,1) 100%)'}}>
        <Navbar/>
    <Flex zIndex={9999} w='90%' m='auto'>
    <Box data-aos='fade-right' w='40%' mt='180px'>
        <Image h='350px' backgroundColor='transparent' src='https://habtech.ca/wp-content/uploads/2016/05/scalablegif1.gif'/>
    </Box>
    <Box data-aos='fade-left' textAlign='left' w='40%' m='auto' mt={150} color={'white'}>
    <Flex data-aos='fade-up' pt={0} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='22px'/>
    <Flex data-aos='fade-up' pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex data-aos='fade-up' pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex data-aos='fade-up' pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex data-aos='fade-up' pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>   
    </Box>
     </Flex>
    <Flex justifyContent='space-around'  pt={50} w='60%' m='auto' gap={40}>
    <Box w='50%' color='white'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30}>Mission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button pl={35} pr={35} mt={5}>CTA</Button>
    </Box>
    <Box w='50%' color='white'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30} mt={-3}>Vission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button pl={35} pr={35} mt={5}>CTA</Button>
    </Box>
</Flex>
     <Footer/>
     <Flex p={2} background='black' gap={10} position='fixed' left={0} bottom={0} zIndex={999999}>
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
    </Box>
  )
}

export default Dashboard

