import { Box,Image,Flex,Heading,Text,Button} from '@chakra-ui/react'
import React from 'react'
import Navbar1 from './Template1/Navbar1'
import Footer1 from './Template1/Footer1'

const Contact = () => {


return(
    <>
      <Navbar1/>
      <Box w='100%' m='auto' textAlign='left'>
      <Box w='90%' m='auto' color='black' pt={120} textAlign='left'> 
        Home > Contact us
      </Box>
      <Flex w='80%' m='auto' gap={20} mt={10}>
        <Box w='40%'>
          <Heading>Gurgaon Office</Heading>
          <Text>Morbi mollis elit vitae elit molestie lobortis. Cras eu purus ipsum. Aliquam et ullamcorper nisl. Nam sem justo, sagittis sit amet sem at, mollis congue eros. Quisque vel mattis eros. Proin euismod massa id est finibus, rutrum ornare velit pellentesque. Ut arcu magna, interdum eget egestas eget, sagittis a libero. Donec felis tellus, vehicula at purus condimentum, hendrerit dictum odio. Vivamus et condimentum sapien.</Text>
          <Text pt={5}> <b>Call Us : </b>(866) 123 4567 </Text>
          <Button mt={5} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button>
        </Box>
        <Box w='60%'>
        <Image src='https://www.wearegurgaon.com/wp-content/uploads/2022/04/GurgaonMasterPlan2021-min.jpg'/>
        </Box>
      </Flex>
      </Box>
      <Footer1/>
    </>
  )
}

export default Contact
