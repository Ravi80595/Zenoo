import { Box,Text,Image,Button,Flex } from '@chakra-ui/react'
import React from 'react'

const BOD = () => {


return (
    <Box backgroundColor='#efefef' pt={10} pb={10}>
        <Box w={"80%"} m='auto'>
        <Text pb={10} fontSize={['26px','26px','36px','36px']}>Our Leadership</Text>
        <Flex direction={['column','column','column','row']} gap={10} justifyContent='space-around'>
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
            <Flex pt={5} w={'90%'} justifyContent={'space-around'}> 
          <a href="https://www.instagram.com/zenoo186/ " target='blank'>
      <Image w='30px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png'/></a>
      <a href="https://www.linkedin.com/company /zenoo.in/ " target='blank'>
      <Image  w='30px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png'/></a>
      <a href="https://api.whatsapp.com/send/?phone=7711884456&text&type=phone_number&app_absent=0" target='blank'>
      <Image w='30px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png'/></a>
      <a href="https://www.facebook.com/zenoo18" target='blank'>
      <Image w='30px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png'/></a>
          </Flex>
            {/* <Button mt={5} mb={3} style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} textAlign={'center'}>CTA</Button> */}
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
  )
}

export default BOD
