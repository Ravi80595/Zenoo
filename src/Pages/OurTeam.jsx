import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.jpg'
import BOD2 from '../Images/BOD2.jpg'
import BOD from './BOD'
import Popup from '../Components/Popup'
import cover from '../Images/cover.png'


const OurTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dynamicData, setDynamicData] = useState({});


  const openPopupWithData1 = () => {
    setIsOpen(true);
    setDynamicData({
      image:'BOD1',
      title: 'Mohit Jain',
      description: 'Mr. Mohit Jain is an accomplished professional with consistent success of over 20 years in achieving sustained revenue and profitability growth in dynamic & changing markets in the real estate industry. He is the Director at Zenoo Pvt ltd, Khomes Realtor Pvt Ltd, and the founder of MKJ Group. His expertise lies in sales strategies, sales management, team leadership, lead generation, market research, business development, cultivating relationships, maximizing ROI, and driving revenue growth. Mr. Mohit Jain is an experienced planner who is great at finding and making the most of business opportunities through strategic partnerships. He keeps a close eye on market trends necessary for business development and revenue generation. He is an effective leader with excellent communication, negotiation, and relationship-building skills directed cross-functional teams using interactive & motivational leadership; acknowledged for recruiting and mentoring leaders with an equal desire to win.',
    });
  };

  const openPopupWithData2 = () => {
    setIsOpen(true);
    // Sample dynamic data for popup - Data Set 2
    setDynamicData({
      title: 'BOD2',
      description: 'This is the second data set.',
    });
  };
  const openPopupWithData3 = () => {
    setIsOpen(true);
    setDynamicData({
      image:'BOD3',
      title: 'Data Set 1 Title',
      description: 'This is the first data set.',
    });
  };
  const openPopupWithData4 = () => {
    setIsOpen(true);
    setDynamicData({
      image:'BOD4',
      title: 'Data Set 1 Title',
      description: 'This is the first data set.',
    });
  };

  const closePopup = () => {
    setIsOpen(false);
  };



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
            <Popup isOpen={isOpen} onClose={closePopup} dynamicData={dynamicData} />
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
            <Popup isOpen={isOpen} onClose={closePopup} dynamicData={dynamicData} />
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
