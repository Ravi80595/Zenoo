import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.jpg'


const Careers = () => {



return(
    <Box background={'#efefef'}>
    <Navbar/>
    <Box textAlign={'left'} w={'90%'} m={'auto'} background={'#efefef'} pt={100} pb={100}>
    <Text fontSize={'36px'} pb={5} fontFamily={'Prata'}>CAREERS</Text>
    <Text>At ZENOO, We value both our brand's success and each individual's goals. Our inviting culture attracts the best talents who share our strong work values. We prioritize teamwork, respect, and excellence, ensuring a safe and enjoyable workplace that encourages personal growth. No matter your role or background, we support your career and personal dreams with equal dedication, guiding you to reach new heights at ZENOO.</Text>
    </Box>
    <Box background={'white'} w={'60%'} m='auto' pb={50}  borderRadius={10} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'30px'} mb={50}>
    <Text fontSize={'36px'}  fontFamily={'Prata'}>Opportunities</Text>
    <Text pb={5}>Start your journey</Text>
    <Text textAlign={'left'} fontWeight={'bold'}>Transaction Manager</Text>
    <Text textAlign={'left'}>As a Transaction Manager, your job is to make sure everything runs smoothly when deals happen. You'll be like a conductor, arranging all the parts and carefully watching over each step of the process.</Text>

   <Text pt={10} textAlign={'left'} fontWeight={'bold'}>Transaction Executive</Text>
    <Text textAlign={'left'}>As a Transaction Executive, where you'll orchestrate smooth business deals by coordinating communications, managing documents, and tracking progress – a pivotal role in our company's success.</Text>
    </Box>
    <Box backgroundColor={'grey'} h={200} mb={50}>
      <Text pt={30} pb={5} fontSize={'20px'}>Join ZENOO on a journey of growth and innovation, as we work together to elevate your ambitions and achieve remarkable success.</Text>
      <Text fontSize={'36px'} fontFamily={'Prata'}>Interested in joining us?</Text>
      <Text>Send us your cv on careers@zenoo.in</Text>
    </Box>
    <Footer/>
    </Box> 
  )
}

export default Careers
