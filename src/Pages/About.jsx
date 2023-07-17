import React from 'react'
import Navbar1 from './Template1/Navbar1'
import { Box, Flex,Image,Text,Heading, Button } from '@chakra-ui/react'
import Footer1 from './Template1/Footer1'

const About = () => {


return (
<>
<Navbar1/>
    <Box w='100%' m='auto' textAlign='left'>
      <Box w='90%' m='auto' color='black' pt={120} textAlign='left'> 
        Home > About us
      </Box>
      <Text w='90%' m='auto' pb={10} pt={50}>Company History</Text>
      <Flex w='80%' m='auto' gap={20}>
        <Image w={400} src='https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/about-1-760x760.jpg'/>
        <Box>
          <Heading pb={5} textAlign='center'>Zenoo</Heading>
          <Text>At Property Real Estate Company, we believe that when it comes to finding a home what’s outside the front door is just as important as what’s behind it.
          <br />That’s why we go beyond the typical listings, by sourcing insights straight from locals and offering over 34 neighborhood map overlays, to give people a deeper understanding of what living in a home and neighborhood is really like. <br />We’re committed to helping them discover a place where they will love to live and where they will feel more connected to the community and to each other. It’s why we strive every day to help build a more neighborly world.
          </Text>
          <Button mt={5} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button>
        </Box>
      </Flex>
      <Box backgroundColor='#efefef' mt={10} pt={5} pb={10}>
        <Box w={"80%"} m='auto'>
        <Text pb={10}>Our Leadership</Text>
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
    
    </>
  )
}

export default About
