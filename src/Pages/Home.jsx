import { Box,Heading,Text,Button,Flex, background,Image} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../CSS/Home.css'
import subtitle from '../Images/subtitle.png'; 
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({backgroundColor,colors}) => {


useEffect(() => {
  AOS.init();
}, [])

return (
    <Box>
        <Box h={'90vh'} data-aos='fade-up'>
        <Text className='title' fontSize={190}  fontFamily='_NewYork' pt={150} color='white'>ZENOO</Text>
        {/* <subtitle className="rotating-image" /> */}
        <Image src={subtitle} className="rotating-image" />
        <Link to='/main'>
        <Button  _hover={{backgroundColor:colors,color:'white',transition:'1s ease'}} p={7} borderRadius={20} color={colors}>Explore opportunities</Button>
        </Link>
        </Box>
        
    </Box>
  )
}

export default Home
