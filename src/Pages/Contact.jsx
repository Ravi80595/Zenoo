import { Box, Image, Flex, Text, Button, Input, Textarea, Checkbox, Select } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MapComponent from '../Components/MapComponent'
import SideBox from '../Components/SideBox'
import contactCover from '../Images/contactCover.png'




const Contact = () => {


  const latitude = 28.453432537750142;
  const longitude = 77.06834227116423;

  const handleClick = () => {
    const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsURL, '_blank');
  };



return (
  <>
  
    <Box background={'white'}>
      <Navbar />
      <SideBox />
      <Box pt={'50px'}>
        <Box w='100%' h={[190, 190, 290, "418px"]} m='auto' pt={50} pl={21} color='white' textAlign='left' backgroundImage={contactCover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition='center'>
        </Box></Box>
      <Flex direction={['column', 'column', 'row', 'row']} background={'white'} w='95%' m='auto' textAlign='left' backgroundColor={'white'} pt={120} pb={20}>
        <Box pt={['10px', '50px', '5px', '5px']} w={['99%', '50%', '50%', '50%']}>
          <Box w={['80%', '70%', '70%', '70%']} m={'auto'}>
            <MapComponent />
          </Box>
          <Box w={['95%', '95%', '90%', '60%']} m={'auto'} mt={['30px', '30px', '90px', '20px']} textAlign={'center'} pb={20}>
            <Text> <b>Call Us : </b>0124 4240520</Text>
            <Text pt={2}> <b>Email Us : </b>info@zenoo.in</Text>
            <Text pt={2}> <b>Address : </b>Plot No.14, Sector 44, Gurugram, Haryana 122003</Text>
            <Flex pt={5} w={['90%', '90%', '40%', '90%']} justifyContent={'space-around'}>
              <a href="https://www.instagram.com/zenoo186/ " target='blank'>
                <Image w='30px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png' /></a>
              <a href="https://www.linkedin.com/company /zenoo.in/ " target='blank'>
                <Image w='30px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png' /></a>
              <a href="https://api.whatsapp.com/send/?phone=7711884456&text&type=phone_number&app_absent=0" target='blank'>
                <Image w='30px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png' /></a>
              <a href="https://www.facebook.com/zenoo18" target='blank'>
                <Image w='30px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png' /></a>
              <a href="https://www.youtube.com/channel/UCk5O3EwfOobD_vhZnlT0CLg" target='blank'>
                <Image w='30px' src='https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png' /></a>
            </Flex>
            <Button onClick={handleClick} mt={5} borderRadius={5} background={'blue'} color={'white'} _hover={{ color: 'blue', background: 'white', border: '2px solid blue' }} transition={'ease 1s  '} textAlign={'center'}>GET DIRECTIONS</Button>
          </Box>
        </Box>
        <Box boxShadow='rgb(3 102 255 / 40%) 0px 2px 4px, rgb(8 68 255 / 30%) 0px 7px 13px -3px, rgb(24 80 255 / 20%) 0px -3px 0px inset' borderRadius={10} textAlign={'left'} w={['99%', '60%', '60%', '40%']} h={['550px', '550px', '550px', '550px']} mt={'10px'}>
          <Box w={['92%', '92%', '62%', '92%']} m={'auto'} mt={'30px'}>
            <Box w={['90%', '90%', '60%', '82%']} m='auto' mt={'70px'}>
              <Text pt={15}>Name</Text>
              <Input placeholder='Name' />
              <Text pt={15}>Email</Text>
              <Input placeholder='Enter your email' />
              <Text pt={15}>Phone no.</Text>
              <Input placeholder='Enter your phone' />
              <Text pt={5}>Interest</Text>
              <Select>
                <option value="">Real Estate</option>
                <option value="">Financial Advisory</option>
                <option value="">Insurance Solutions</option>
                <option value="">Legal Assistance</option>
              </Select>
              <Checkbox pt={3} colorScheme='blue' defaultChecked>
                <Text fontSize={['12px', '16px', '16px', '12px']}>
                  By providing your phone number and checking the box below, you grant Zenoo permission to contact you via telephone for communication purposes.</Text>
              </Checkbox>
              <Flex mt={5} justifyContent={'center'}><Button borderRadius={50} background={'blue'} color={'white'} _hover={{ color: 'blue', background: 'white', border: '2px solid blue' }} transition={'ease 1s'} textAlign={'center'}>Submit</Button></Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
    </>
  )
}

export default Contact