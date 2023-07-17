import React from 'react'
import Navbar1 from '../Template1/Navbar1'
import Footer1 from '../Template1/Footer1'
import Carousel from '../../Components/Carousel'
import { Box,Flex,Image,Text,Button } from '@chakra-ui/react'
import Slider from '../../Components/Slider'

const Home2 = () => {


return (
    <>
      <Navbar1/>
      <Box pt={50}>
        <Box pt={50}>
      <Carousel/>
        </Box>
      </Box>
      <Slider/>
      <Flex justifyContent='space-around'  pt={50} w='60%' m='auto' gap={40}>
    <Box w='50%'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30}>Mission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} pl={35} pr={35} mt={5}>CTA</Button>
    </Box>
    <Box w='50%'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30} mt={-3}>Vission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button style={{backgroundColor:'rgb(48, 52, 65)',color:'white'}} pl={35} pr={35} mt={5}>CTA</Button>
    </Box>
</Flex>

      <Footer1/>
    </>
  )
}

export default Home2
