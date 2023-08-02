import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import MapComponent from '../Components/MapComponent'
import cover from '../Images/cover.png'
import SideBox from '../Components/SideBox'
import ZENOO1 from '../Images/ZENOO1.png'


const Contact = () => {


const latitude = 28.453432537750142; // Replace with the actual latitude
const longitude = 77.06834227116423; // Replace with the actual longitude

const handleClick = () => {
  // Construct the Google Maps URL with the specific location's latitude and longitude
  const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
  window.open(googleMapsURL, '_blank');
  // window.location.href = googleMapsURL;
};


return(
    <>
      <Navbar/>
      <SideBox/>
      <Box w='100%' m='auto' textAlign='left' backgroundColor={'white'}>
      <Box backgroundColor={'white'} w='100%' h={[190,190,290,290]} m='auto' color='black' pt={100} pl={21} color='white' textAlign='left' backgroundImage={cover} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}> 
      <Text> 
        <Link to='/template3' > Home &nbsp;
        </Link>
          > Contact us</Text>
      </Box>
      {/* <Heading mt={[50,120,120,120]} ml={10}>Gurgaon Office</Heading> */}
      <Flex mt={[150,120,120,120]} direction={['column-reverse','column','column','row']} w='80%' m='auto' gap={20}  mb={90}>
        <Box w={['95%','95%','40%','60%']} mt={['30px','30px','90px','10px']}>
          <Text>Zenoo, as a conglomerate deeply entrenched in various core sector, has always operated as a values-driven organization. These fundamental principles serve as the bedrock of our businesses within the Zenoo group, guiding our growth and shaping our approach to conducting operations.</Text>
          <Text pt={5}> <b>Call Us : </b>0124 4240520</Text>
          <Text pt={2}> <b>Email Us : </b>info@zenoo.in</Text>
          <Text pt={2}> <b>Address : </b>Plot No.14, Sector 44, Gurugram, Haryana 122003</Text>
          <Flex pt={5} w={['90%','90%','40%','40%']} justifyContent={'space-around'}> 
          <a href="https://www.instagram.com/zenoo186/ " target='blank'>
      <Image w='30px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png'/></a>
      <a href="https://www.linkedin.com/company /zenoo.in/ " target='blank'>
      <Image  w='30px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png'/></a>
      <a href="https://api.whatsapp.com/send/?phone=7711884456&text&type=phone_number&app_absent=0" target='blank'>
      <Image w='30px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png'/></a>
      <a href="https://www.facebook.com/zenoo18" target='blank'>
      <Image w='30px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png'/></a>
          </Flex>
          <Button onClick={handleClick} mt={5} borderRadius={50} background={'blue'} color={'white'} _hover={{color:'blue',background:'white', border:'2px solid blue'}} transition={'ease 1s  '}  textAlign={'center'}>GET DIRECTIONS</Button>
        </Box>
        <Box w='90%' mt={[20,20,0,0]}>
          <MapComponent/>
        </Box>
      </Flex>
      <Box h={'400px'} backgroundImage={ZENOO1} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} pt={20} pb={20}>
        <Box textAlign ='center' w={['90%','60%','60%','50%']} m='auto' pb={70} >
          <Text pb={"20px"} fontWeight={'bold'} fontSize={['20px','40px','40px','40px']} fontFamily={'sans-serif'}>Why Partner with Zenoo</Text>
          <Text>Selecting ZENOO means aligning with a reliable partner dedicated to your prosperity. Whether you're in the market for a new property, obtaining a loan, protecting your assets through insurance, or seeking legal counsel, we deliver a smooth and all-inclusive journey. Our harmonized approach guarantees tailored solutions that cater to your needs, empowering you to pursue your objectives with unwavering assurance</Text>
        </Box>
      </Box>
      </Box>
      <Box backgroundColor={'#ebfffb'} pb={'62px'} pt={20}>
        <Box backgroundColor={'white'} p={22} borderRadius={10} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'  textAlign={'left'} w={['90%','60%','60%','50%']} m='auto' >
          <Text fontSize={['26px','26px','36px','36px']}>DROP US A LINE</Text>
          <Text pb={10}>Get in touch with our team by completing the below form or call us now. One of our customer service agents will get back to you shortly.</Text>
          <Box w={['90%','90%','60%','60%']} m='auto'>
          <Text pt={15}>Name</Text>
          <Input placeholder='Name'/>
          <Text pt={15}>Email</Text>
          <Input placeholder='Enter your email'/>
          <Text pt={15}>Phone no.</Text>
          <Input placeholder='Enter your phone'/>
          <Text pt={5}>Message</Text>
          <Textarea placeholder='Enter your message here'/>
          <Checkbox  pt={3} colorScheme='blue' defaultChecked>
            <Text fontSize={'16px'}>
            By providing your phone number and checking the box below, you grant Zenoo permission to contact you via telephone for communication purposes.</Text>
          </Checkbox>
          <Flex mt={5} justifyContent={'center'}><Button borderRadius={50} background={'blue'} color={'white'} _hover={{color:'blue',background:'white', border:'2px solid blue'}} transition={'ease 1s'}  textAlign={'center'}>Submit</Button></Flex>
          </Box>
          </Box>
        </Box>
      <Footer/>
    </> 
  )
}

export default Contact
