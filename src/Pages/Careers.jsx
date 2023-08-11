import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.png'


const Careers = () => {



return(
    <Box background={'white'}>
    <Navbar/>
    <Box textAlign={'left'} w={'90%'} m={'auto'} background={'white'} pt={100} pb={100}>
    <Text fontSize={'36px'} pb={5} fontFamily={'Prata'}>CAREERS</Text>
    <Text>Our people are the face of the brand and we strive to get perfect synergies between the goals of the brand and the individual. One of the most sought-after brands in the real estate industry, we are proud to attract the top talents through our best work practices and work ethics. Our work culture is a combination of mutual respect, objectivity, drive for excellence, camaraderie and healthy competition. Our environment is carefully crafted to nurture team bonding, individual growth and achievements. All this while ensuring safe and fun work culture.</Text>
    </Box>
    <Box backgroundColor={'grey'} h={200} mb={50}>
      <Text pt={30} pb={5} fontSize={'20px'}>Join ZENOO on a journey of growth and innovation, as we work together to elevate your ambitions and achieve remarkable success.</Text>
      <Text fontSize={'36px'} fontFamily={'Prata'}>Interested in joining us?</Text>
      <Text>Send us your cv on info@zenoo.in</Text>
    </Box>
    <Footer/>
    </Box> 
  )
}

export default Careers
