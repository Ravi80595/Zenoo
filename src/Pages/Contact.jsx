import { Box,Image,Flex,Heading,Text,Button} from '@chakra-ui/react'
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
      <Heading mt={120} ml={10}>Gurgaon Office</Heading>
      <Flex w='80%' m='auto' gap={20}  mb={90}>
        <Box w='40%' mt='90px'>
          <Text>Morbi mollis elit vitae elit molestie lobortis. Cras eu purus ipsum. Aliquam et ullamcorper nisl. Nam sem justo, sagittis sit amet sem at, mollis congue eros. Quisque vel mattis eros. Proin euismod massa id est finibus, rutrum ornare velit pellentesque. Ut arcu magna, interdum eget egestas eget, sagittis a libero. Donec felis tellus, vehicula at purus condimentum, hendrerit dictum odio. Vivamus et condimentum sapien.</Text>
          <Text pt={5}> <b>Call Us : </b>0124 4240520</Text>
          <Text pt={2}> <b>Address : </b>Plot No.14, Sector 44, Gurugram, Haryana 122003</Text>
          <Button mt={5} borderRadius={50} background={'blue'} color={'white'} _hover={{color:'blue',background:'white', border:'2px solid blue'}} transition={'ease 1s  '}  textAlign={'center'}>GET DIRECTIONS</Button>
        </Box>
        <Box w='60%'>
          <MapComponent/>
        </Box>
      </Flex>

      </Box>
      <Footer/>
    </>
  )
}

export default Contact
