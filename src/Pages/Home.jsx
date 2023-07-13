import { Box,Heading,Text,Button,Flex, background} from '@chakra-ui/react'
import React from 'react'
import '../CSS/Home.css'
import { ReactComponent as SvgImage } from '../Images/wawa.svg'; 
import { Link } from 'react-router-dom'


const Home = ({backgroundColor,colors}) => {


return (
    <Box >
        <Box h={'90vh'}>
        <Text fontSize={190} fontFamily='_NewYork' pt={150} color='white'>ZENOO</Text>
        <SvgImage className="rotating-image" />
        <Link to='/main'>
        <Button  _hover={{backgroundColor:colors,color:'white',transition:'1s ease'}} p={7} borderRadius={20} color={colors}>Explore opportunities</Button>
        </Link>
        </Box>
        
    </Box>
  )
}

export default Home
