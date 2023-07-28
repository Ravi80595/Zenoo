import { Box,Image,Flex,Heading,Text,Button, Input, Textarea} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import MapComponent from '../Components/MapComponent'



const Contact = () => {


return(
    <>
      <Navbar/>
      <Box w='100%' m='auto' textAlign='left'>
      <Box w='100%' h={290} m='auto' color='black' pt={100} pl={21} color='white' textAlign='left' backgroundImage={'https://hooquest.com/wp-content/uploads/2021/11/facebook-cover-2.jpg'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}> 
      <Text> 
        <Link to='/template3' > Home &nbsp;
        </Link>
          > Contact us</Text>
      </Box>
      <Heading mt={[50,120,120,120]} ml={10}>Gurgaon Office</Heading>
      <Flex direction={['column-reverse','column','column','row']} w='80%' m='auto' gap={20}  mb={90}>
        <Box w={['95%','95%','40%','50%']} mt={['30px','30px','90px','90px']}>
          <Text>Zenoo, as a conglomerate deeply entrenched in various core sector, has always operated as a values-driven organization. These fundamental principles serve as the bedrock of our businesses within the Zenoo group, guiding our growth and shaping our approach to conducting operations.</Text>
          <Text pt={5}> <b>Call Us : </b>0124 4240520</Text>
          <Text pt={2}> <b>Address : </b>Plot No.14, Sector 44, Gurugram, Haryana 122003</Text>
          <Button mt={5} borderRadius={50} background={'blue'} color={'white'} _hover={{color:'blue',background:'white', border:'2px solid blue'}} transition={'ease 1s  '}  textAlign={'center'}>GET DIRECTIONS</Button>
        </Box>
        <Box w='90%'>
          <MapComponent/>
        </Box>
      </Flex>
        <Box textAlign ='center' w={'60%'} m='auto' pb={70} >
          <Text pb={"20px"} fontWeight={'bold'} fontSize='40px' fontFamily={'sans-serif'}>Why partner with Zenoo</Text>
          <Text>Selecting ZENOO means aligning with a reliable partner dedicated to your prosperity. Whether you're in the market for a new property, obtaining a loan, protecting your assets through insurance, or seeking legal counsel, we deliver a smooth and all-inclusive journey. Our harmonized approach guarantees tailored solutions that cater to your needs, empowering you to pursue your objectives with unwavering assurance</Text>
        </Box>
      </Box>
     
        <Box p={22} borderRadius={22} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'  textAlign={'left'} w='60%' m='auto' mb={'62px'}>
          <Text fontSize={'36px'}>DROP US A LINE</Text>
          <Text pb={10}>Get in touch with our team by completing the below form or call us now. One of our customer service agents will get back to you shortly.</Text>
          <Box w='60%' m='auto'>
          <Text pt={15}>Name</Text>
          <Input placeholder='Name'/>
          <Text pt={15}>Email</Text>
          <Input placeholder='Enter your email'/>
          <Text pt={5}>Message</Text>
          <Textarea placeholder='Enter your message here'/>
          <Flex mt={10} justifyContent={'center'}><Button borderRadius={50} background={'blue'} color={'white'} _hover={{color:'blue',background:'white', border:'2px solid blue'}} transition={'ease 1s  '}  textAlign={'center'}>Submit</Button></Flex>
          </Box>
        </Box>
      <Footer/>
    </>
  )
}

export default Contact
