import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.jpg'
import BOD2 from '../Images/BOD2.jpg'
import BOD from './BOD'
import Popup from '../Components/Popup'
import cover from '../Images/cover.png'
import BOD3 from '../Images/BOD3.png'



const OurTeam = () => {



return(
    <Box background={'#efefef'}>
    <Navbar/>
    <Box background={'#efefef'} pt={30} pb={70}>
    <Box pt={'50px'}>
      <Box w='100%' h={[190,190,290,"418px"]} m='auto' pt={50} pl={21} color='white' textAlign='left' backgroundImage={cover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition='center'> 
      </Box></Box>
    <Box backgroundColor='#efefef' pt={10} pb={'50'}>
    <Box w={'60%'} m='auto' pb={50}>
<Text pt={120} fontSize={['22px','26px','36px','36px']} fontFamily={'Prata'}>The Faces Behind Zenoo</Text>
<Text fontSize={['14px','14px','20px','20px']}>At the heart of ZENOO are the dedicated professionals who make up our exceptional team. Get to know the faces behind our success and discover the expertise that drives us forward.</Text>
</Box>
        <Box w={"95%"} m='auto'>
        <Flex direction={['column','column','column','row']} gap={10} justifyContent='space-around' w={'80%'} m={'auto'}>
        <Box backgroundColor='white' textAlign='center'>
          <Image w={'650px'} h={['250px','200px','200px','250px']} src={BOD2}/>
            <Text pt={2}>Shreyansh Verma</Text>
            {/* <Text fontWeight={'bold'}>Founder</Text> */}
          </Box>
          <Box backgroundColor='white' textAlign='center'>
            <Image w={'650px'} h={['250px','200px','200px','250px']} src={BOD1}/>
            <Text pt={2}>Mohit Jain</Text>
            <Text fontWeight={'bold'}>Founder</Text>
          </Box>
          <Box backgroundColor='white' textAlign='center' >
          <Image w={'550px'} h={['250px','200px','200px','250px']} src={BOD3}/>
            <Text pt={2}>Amitesh  Mathur </Text>
            {/* <Text fontWeight={'bold'}>Founder</Text> */}
          </Box>
          
        </Flex>
        </Box>
      </Box>
    </Box>

    <Box background={'#efefef'} pb={150}>
    <Box backgroundColor='#efefef' pb={10}>
        <Box w={"95%"} m='auto'>
        {/* <Text pb={10} fontSize={['26px','26px','36px','36px']} fontFamily={'Prata'}>Our Board</Text> */}
        <Flex direction={['column','column','column','row']} gap={10} justifyContent='space-around' w={'80%'} m={'auto'}>
          <Box backgroundColor='white' textAlign='center'>
            <Image w={'650px'} h={['250px','200px','200px','200px']} src={BOD1}/>
            <Text pt={2}>Mohit Jain</Text>
            <Text fontWeight={'bold'}>Founder</Text>
            {/* <Button onClick={openPopupWithData1} mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>Know More</Button> */}
          </Box>
          <Box backgroundColor='white' textAlign='center'>
          <Image w={'650px'} h={['250px','200px','200px','200px']} src={BOD2}/>
            <Text>Rich Wacksman</Text>
            <Text fontWeight={'bold'}>Founder</Text>
           
            {/* <Button onClick={openPopupWithData2} mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>Know More</Button> */}
          </Box>
          <Box backgroundColor='white' textAlign='center'>
          <Image w={'650px'} h={['250px','200px','200px','200px']} src={BOD2}/>
            <Text>Rich Wacksman</Text>
            <Text fontWeight={'bold'}>Founder</Text>
    
            {/* <Button mt={5} onClick={openPopupWithData3} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>Know more</Button> */}
          </Box>
          <Box backgroundColor='white' textAlign='center'>
          <Image w={'650px'} h={['250px','200px','200px','200px']} src={BOD1}/>
            <Text>Rich Wacksman</Text>
            <Text fontWeight={'bold'}>Founder</Text>
            {/* <Button  onClick={openPopupWithData4} mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>Know more</Button> */}
            {/* <Popup isOpen={isOpen} onClose={closePopup} dynamicData={dynamicData} /> */}
          </Box>
        </Flex>
        </Box>
      </Box>
    </Box>
      
    <Footer/>
    </Box> 
  )
}

export default OurTeam
