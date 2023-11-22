import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.jpg'
import BOD2 from '../Images/BOD2.jpg'
// import BOD from './BOD'
// import Popup from '../Components/Popup'
import cover from '../Images/cover.png'
import BOD3 from '../Images/BOD3.png'
import Team1 from '../Images/Team1.png'
import Team2 from '../Images/Team2.png'
import Team3 from '../Images/Team3.png'
import Team4 from '../Images/Team4.png'
import Team5 from '../Images/Team5.png'
import Team6 from '../Images/Team6.png'
import Chatbot from '../Components/Chat/ChatBot'
import SideBox from '../Components/SideBox'


const OurTeam = () => {



return(
  <>
    <Box background={'#efefef'}>
    <Navbar/>
    <SideBox/>
  <Chatbot/>
    <Box background={'#efefef'} pt={30} pb={70}>
    <Box pt={['13px','13px','50px','50px']}>
      <Box w='100%' h={[190,190,290,"418px"]} m='auto' pt={50} pl={21} color='white' textAlign='left' backgroundImage={cover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition='center'> 
      </Box></Box>
    <Box backgroundColor='#efefef' pt={[0,0,0,10]} pb={'50'}>
    <Box w={'60%'} m='auto' pb={50}>
<Text pt={'90px'} fontSize={['22px','26px','36px','36px']} fontFamily={'Prata'}>The Faces Behind Zenoo</Text>
<Text fontSize={['14px','14px','20px','20px']}>Meet the exceptional team of dedicated professionals at ZENOO who drive our success forward.</Text>
</Box>
        <Box w={"95%"} m='auto'>
        <Flex direction={['column','column','column','row']} gap={10} justifyContent='space-around' w={'80%'} m={'auto'}>
        <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} borderRadius={10} backgroundColor='white' textAlign='center'>
          <Image borderTopRadius={10} w={'650px'} h={['250px','200px','200px','250px']} src={BOD2}/>
            <Text pt={2}>Shreyansh Verma</Text>
          </Box>
          <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} backgroundColor='white' textAlign='center' borderRadius={10}>
            <Image borderTopRadius={10} w={'650px'} h={['250px','200px','200px','250px']} src={BOD1}/>
            <Text pt={2}>Mohit Jain</Text>
            <Text fontWeight={'bold'}>Founder</Text>
          </Box>
          <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} borderRadius={10} backgroundColor='white' textAlign='center' >
          <Image borderTopRadius={10} w={'650px'} h={['250px','200px','200px','250px']} src={BOD3}/>
            <Text pt={2}>Amitesh  Mathur </Text>
          </Box>
        </Flex>
        </Box>
      </Box>
    </Box>

    <Box background={'#efefef'} pb={100}>
    <Box backgroundColor='#efefef' pb={10}>
        <Box w={"95%"} m='auto'>
        <Flex direction={['column','column','column','row']} gap={10} justifyContent='space-around' w={'80%'} m={'auto'}>
          <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} borderRadius={10} backgroundColor='white' textAlign='center'>
            <Image borderTopRadius={10} w={'650px'} h={['250px','200px','200px','200px']} src={Team1}/>
            <Text pt={2}>Sonali Sharma</Text>
            {/* <Text fontWeight={'bold'}>Founder</Text> */}
          </Box>
          <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} borderRadius={10} backgroundColor='white' textAlign='center'>
          <Image borderTopRadius={10} w={'650px'} h={['250px','200px','200px','200px']} src={Team3}/>
            <Text pt={2}>Rashmi Singh</Text>
            {/* <Text fontWeight={'bold'}>Founder</Text> */}
            </Box>
          <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} borderRadius={10} backgroundColor='white' textAlign='center'>
          <Image borderTopRadius={10} w={'650px'} h={['250px','200px','200px','200px']} src={Team6}/>
            <Text pt={2}>Nikhil Nigam</Text>
            {/* <Text fontWeight={'bold'}>Founder</Text> */}
          </Box>
        </Flex>
        </Box>
      </Box>
    </Box>
      


    <Box background={'#efefef'} pb={150}>
    <Box backgroundColor='#efefef' pb={10}>
        <Box w={"95%"} m='auto'>
        <Flex direction={['column','column','column','row']} justifyContent={'center'}  w={'80%'} m={'auto'} gap={'50px'}>
          <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} borderRadius={10} backgroundColor='white' textAlign='center'>
          <Image borderTopRadius={10} w={'100%'} h={['250px','200px','200px','200px']} src={Team4}/>
            <Text pt={2}>Shrikrishn Kushwah</Text>
            {/* <Text fontWeight={'bold'}>Founder</Text> */}
          </Box>
          <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} borderRadius={10} backgroundColor='white' textAlign='center'>
          <Image borderTopRadius={10} w={'100%'} h={['250px','200px','200px','200px']} src={Team5}/>
            <Text pt={2}>Anil Prasad</Text>
            {/* <Text fontWeight={'bold'}>Founder</Text> */}
          </Box>
        </Flex>
        </Box>
      </Box>
    </Box>




    <Footer/>
    </Box> 
    </>
  )
}

export default OurTeam
