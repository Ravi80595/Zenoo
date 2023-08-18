import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import MapComponent from '../Components/MapComponent'
import cover from '../Images/cover.png'
import SideBox from '../Components/SideBox'
import ZENOO1 from '../Images/ZENOO1.png'
import contactCover from '../Images/contactCover.png'

const Contact = () => {


const latitude = 28.453432537750142; // Replace with the actual latitude
const longitude = 77.06834227116423; // Replace with the actual longitude

const handleClick = () => {
  // Construct the Google Maps URL with the specific location's latitude and longitude
  const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
  window.open(googleMapsURL, '_blank');
  // window.location.href = googleMapsURL;
};

      {/* <Heading mt={[50,120,120,120]} ml={10}>Gurgaon Office</Heading> */}
{/* <Box backgroundColor={'white'} w='100%' h={[190,190,290,250]} m='auto' color='black' pt={'50px'} pl={21} textAlign='left' backgroundImage={cover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}> 
</Box> */}
{/* <Flex mt={[150,120,120,120]} direction={['column-reverse','column','column','row']} w='80%' m='auto' gap={20}  mb={90}> */}
{/* <Text textAlign={'justify'}>Zenoo, as a conglomerate deeply entrenched in various core sector, has always operated as a values-driven organization. These fundamental principles serve as the bedrock of our businesses within the Zenoo group, guiding our growth and shaping our approach to conducting operations.</Text> */}
  {/* </Flex> */}
      {/* <Box h={'400px'} backgroundImage={'https://coolbackgrounds.io/images/backgrounds/white/white-contour-c990a61f.svg'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} pt={20} pb={20}>
        <Box textAlign ='center' w={['90%','60%','60%','50%']} m='auto' pb={70} >
          <Text pb={"20px"} fontWeight={'bold'} fontSize={['20px','40px','40px','40px']} fontFamily={'Prata'}>Why Partner with Zenoo</Text>
          <Text>Selecting ZENOO means aligning with a reliable partner dedicated to your prosperity. Whether you're in the market for a new property, obtaining a loan, protecting your assets through insurance, or seeking legal counsel, we deliver a smooth and all-inclusive journey. Our harmonized approach guarantees tailored solutions that cater to your needs, empowering you to pursue your objectives with unwavering assurance</Text>
        </Box>
      </Box> */}


return(
    <Box background={'white'}>
      <Navbar/>
      <SideBox/>
      <Box pt={'50px'}>
      <Box w='100%' h={[190,190,290,"418px"]} m='auto' pt={50} pl={21} color='white' textAlign='left' backgroundImage={contactCover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition='center'> 
      </Box></Box>
      <Flex direction={['column','column','row','row']} background={'white'} w='95%' m='auto' textAlign='left' backgroundColor={'white'} pt={120} pb={20}>
        <Box pt={['10px','50px','50px','50px']} w={['99%','50%','50%','50%']}>
      <Box w={['80%','70%','70%','70%']} m={'auto'}>
          <MapComponent/>
        </Box>
        <Box w={['95%','95%','90%','60%']} m={'auto'} mt={['30px','30px','90px','20px']} textAlign={'center'} pb={20}>
          <Text> <b>Call Us : </b>0124 4240520</Text>
          <Text pt={2}> <b>Email Us : </b>info@zenoo.in</Text>
          <Text pt={2}> <b>Address : </b>Plot No.14, Sector 44, Gurugram, Haryana 122003</Text>
          <Flex pt={5} w={['90%','90%','40%','90%']} justifyContent={'space-around'}> 
          <a href="https://www.instagram.com/zenoo186/ " target='blank'>
      <Image w='30px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png'/></a>
      <a href="https://www.linkedin.com/company /zenoo.in/ " target='blank'>
      <Image  w='30px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png'/></a>
      <a href="https://api.whatsapp.com/send/?phone=7711884456&text&type=phone_number&app_absent=0" target='blank'>
      <Image w='30px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png'/></a>
      <a href="https://www.facebook.com/zenoo18" target='blank'>
      <Image w='30px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png'/></a>
      <a href="https://www.facebook.com/zenoo18" target='blank'>
      <Image w='30px' src='https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png'/></a>
          </Flex>
          <Button onClick={handleClick} mt={5} borderRadius={5} background={'blue'} color={'white'} _hover={{color:'blue',background:'white', border:'2px solid blue'}} transition={'ease 1s  '}  textAlign={'center'}>GET DIRECTIONS</Button>
        </Box>
        </Box>
    
      
      {/* <Box backgroundColor={'white'} pb={'62px'} pt={20} border={'2px solid red'}> */}
        <Box backgroundImage={'https://clipart-library.com/image_gallery/n1420327.png'} backgroundColor={'white'} backgroundSize={'cover'} backgroundPosition={'center'} p={22} borderRadius={10} textAlign={'left'} w={['99%','60%','60%','45%']} h={['750px','700px','700px','700px']} mt={'10px'}>
          <Box w={['92%','92%','62%','62%']} m={'auto'} mt={'30px'}>
          {/* <Text fontSize={['26px','26px','36px','36px']}>DROP US A LINE</Text> */}
          {/* <Text pb={10}>Get in touch with our team by completing the below form or call us now. One of our customer service agents will get back to you shortly.</Text> */}
          <Box w={['90%','90%','60%','82%']} m='auto' mt={'70px'}>
          <Text pt={15}>Name</Text>
          <Input placeholder='Name'/>
          <Text pt={15}>Email</Text>
          <Input placeholder='Enter your email'/>
          <Text pt={15}>Phone no.</Text>
          <Input placeholder='Enter your phone'/>
          <Text pt={5}>Interest</Text>
          <Select>
          <option value="">Real Estate</option>
          <option value="">Financial Advisory</option>
          <option value="">Insurance Solutions</option>
          <option value="">Legal Assistance</option>
          </Select>
          {/* < placeholder='Enter your message here'/> */}
          <Checkbox  pt={3} colorScheme='blue' defaultChecked>
            <Text fontSize={['12px','16px','16px','12px']}>
            By providing your phone number and checking the box below, you grant Zenoo permission to contact you via telephone for communication purposes.</Text>
          </Checkbox>
          <Flex mt={5} justifyContent={'center'}><Button borderRadius={50} background={'blue'} color={'white'} _hover={{color:'blue',background:'white', border:'2px solid blue'}} transition={'ease 1s'}  textAlign={'center'}>Submit</Button></Flex>
          </Box>
          </Box>
          </Box>
        {/* </Box> */}
        </Flex>
      <Footer/>
    </Box> 
  )
}

export default Contact
