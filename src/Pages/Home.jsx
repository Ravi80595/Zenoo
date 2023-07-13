import { Box,Heading,Text,Button} from '@chakra-ui/react'
import React from 'react'
import '../CSS/Home.css'
import { ReactComponent as SvgImage } from '../Images/wawa.svg'; 
import { Link } from 'react-router-dom'


const Home = () => {


return (
    <Box >
        <Box pb={150}>
        <Text fontSize={190} fontFamily='_NewYork' pt={150} color='white'>ZENOO</Text>
        <SvgImage className="rotating-image" />
        <Link to='/main'>
        <Button className='button' p={7} borderRadius={20} color='blue'>Explore opportunities</Button>
        </Link>
        </Box>
    </Box>
  )
}

export default Home
