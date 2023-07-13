import { Box,Flex,Text,Heading,Button,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
import {CloseIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
// import Cube from '../Components/Cube'
import {GoArrowUpRight} from 'react-icons/go'
import '../CSS/Dashboard.css'
import '../CSS/Fonts.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <Box>
        <Flex pt={10} color='white' fontSize={60} justifyContent='space-around'>
            <Box fontSize={20} w='5%' textAlign='left'>
                logo
            </Box >
            <Box w='50%' className={`content ${isContentVisible ? '' : 'hidden'}`} fontFamily='"DM Sans",sans-serif' position='fixed'>ZENOO</Box>
            <Box pt={3} color='white' w='40%'>
                <Link to='/'>
        <Box position='fixed' fontSize={30} right={20} color='white'>
            <CloseIcon color='white' />
            </Box>
            </Link>
            </Box>
        </Flex>
    <Flex w='90%' m='auto' zIndex={9999}>
    <Box data-aos='fade-right' w='40%' mt='180px' ml={0} position='fixed'>
        {/* <Cube/> */}
        <Image h='350px' backgroundColor='transparent' src='https://habtech.ca/wp-content/uploads/2016/05/scalablegif1.gif'/>
    </Box>
    <Box data-aos='fade-left' textAlign='left' mt={200} ml='50%' w='40%' color={'white'}>
    <Box>
        <Text fontSize={20}>Want to further your experience and learn more about the aviation industry? Check out these resources that Atmos is based upon.</Text>
    </Box>
    <Heading pt='150px' fontSize={50} fontFamily='_NewYork'>OUR ARTICLES</Heading>


    <Flex pt={10} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='22px'/>
    <Flex pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text'>See the source</Text>
        <GoArrowUpRight/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Heading data-aos='fade-up' pt={20} fontSize={60} fontFamily='_NewYork'>Zenoo Playgrounds </Heading>
    <Text data-aos='fade-up' pt={8} lineHeight={8} fontSize={20}>This experiment is part of Leeroy's Playground, a creative space used to experiment technically, visually, while pushing boundaries of artistry and inventiveness.</Text>
    <Button mt={5}>CTA</Button>
    </Box>
    </Flex>
    <Text color='white' mt='150px'>Created by Laudco Media</Text>
    </Box>
  )
}

export default Dashboard
