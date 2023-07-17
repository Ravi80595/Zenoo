import React from 'react'
import Navbar1 from './Navbar1'
import { Box, Flex,Image,Button,Text,Heading } from '@chakra-ui/react'
import '../../CSS/Home1.css'
import Footer1 from './Footer1'

const Home1 = () => {


return (
    <Box background='#efefef' backgroundColor={'#efefef'}>
    <Navbar1/>
    <Box height="480px" backgroundImage='https://imageproxy-v2.services.lokalebasen.dk/h1080/lb-images-asia/in/1313835/144565-level-11-tower-c-building-no-8-dlf-cyber-city-phase-ii.jpg?v=m1664363520' backgroundSize='cover' bgRepeat='none'>
    </Box>
    <Flex justifyContent='space-around'>
        <Box className='brandBox' borderRadius={20} h={200} mt={-90} w={180} background='white' border='2px solid black'><Image h={200} borderRadius={20} src='https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg'/> 
        <Text>Real Estate</Text>
        </Box>
        <Box className='brandBox' borderRadius={20} h={200} mt={-90} w={180} background='white' border='2px solid black'><Image h={200} borderRadius={20} src='https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg'/>
        <Text>Finance</Text></Box>
        <Box className='brandBox' borderRadius={20} h={200} mt={-90} w={180} background='white' border='2px solid black'><Image h={200} borderRadius={20} src='https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg'/>
        <Text>Legal Advisors</Text></Box>
        <Box className='brandBox' borderRadius={20} h={200} mt={-90} w={180} background='white' border='2px solid black'><Image h={200} borderRadius={20} src='https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg'/>
        <Text>Construction</Text></Box>
        <Box className='brandBox' borderRadius={20} h={200} mt={-90} w={180} background='white' border='2px solid black'><Image h={200} borderRadius={20} src='https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg'/>
        <Text>CFO</Text></Box>
    </Flex>


    <Box mt='170px'>
        <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/banner-bottom-bg.png'/>
        <Flex w='80%' m='auto'gap={20}> 
            <Box>
                <Heading pb={5}>About us</Heading>
                <Text textAlign='left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, nobis corrupti minima necessitatibus culpa quaerat doloribus libero eveniet nam odio laboriosam in aut, consequuntur assumenda ipsam officiis adipisci voluptatibus totam. Expedita, odio!
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, blanditiis ratione! Nostrum qui molestiae quod adipisci et a asperiores atque?
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, blanditiis ratione! Nostrum qui molestiae quod adipisci et a asperiores atque? <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, blanditiis ratione! Nostrum qui molestiae quod adipisci et a asperiores atque?
                </Text>
            </Box>
            <Image borderRadius={20} src='https://admin.azbigmedia.com/wp-content/uploads/2018/11/real-estate-agent.jpg'/>
        </Flex>
    </Box>




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
    </Box>
  )
}

export default Home1
