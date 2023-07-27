import React, { useState } from 'react'
import { Box,Flex,Text,Image, Button, Heading,Stack} from '@chakra-ui/react'
import '../../CSS/footer.module.css'
import Logo from '../../Images/Logo.png'
import { Link } from 'react-router-dom'
import {CloseIcon} from '@chakra-ui/icons'
import {GoArrowUpRight} from 'react-icons/go'
import Accordian from './Accordian'
import ChatBox from '../../Components/Chat/ChatBox'
import ChatIcon2 from '../../Components/Chat/ChatIcon2'
import ChatIcon from '../../Components/Chat/ChatIcon'
import Footer from '../../Components/Footer'


const Home3 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatIconClick = () => {
    setIsChatOpen(!isChatOpen);
  };

return (
    <Box background='#f9f9f9'>

    <Box w='100%' backgroundColor='white' position='fixed' zIndex={999999999} box-shadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
    <Box background={'transparent'} position={'absolute'} left={2} top={'52vh'} color={'blue'}>
      <a href="https://www.instagram.com/zenoo186/ " target='blank'>
      <Image className='footerLogo' w='40px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png'/></a>
      <a href="https://www.linkedin.com/company /zenoo.in/ " target='blank'>
      <Image className='footerLogo' w='40px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png'/></a>
      <a href="https://api.whatsapp.com/send/?phone=7711884456&text&type=phone_number&app_absent=0" target='blank'>
      <Image className='footerLogo' w='40px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png'/></a>
      <a href="https://www.facebook.com/zenoo18" target='blank'>
      <Image className='footerLogo' w='40px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png'/></a>
    </Box>
      <Box p={5} background='white'>
        <Flex justifyContent='space-between' >
        <Image w={10} src={Logo}/>
        <Flex fontSize={20} justifyContent='space-around' w='30%' pt={0} color='#10257f'>
            <Link to='/about'>
            <Text>About us</Text>
            </Link>
            <Link to='/contact'>
            <Text>Contact us</Text>
            </Link>
        <Box w='10%'>   
        <Link to='/'>
        <CloseIcon color='#10257f' />
        </Link>   
        </Box>
        </Flex>
        </Flex>
    </Box>
    </Box>
    <Flex gap={'125px'} h='630px' background='#fdfdfd'>
      <Box mt={200} ml={90} w='100%'>
    <Flex pt={0} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>Loan services</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>Insurance Solutions</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>Legal Assistance</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    {/* <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>CFO</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight  color='rgb(54, 84, 206)'/>
      </Flex>
    </Flex> */}
    </Box>
      <Image w='900px' src='https://sydneywpresidence.b-cdn.net/wp-content/uploads/revslider/main/building_white_1000-1.jpeg'/>
    </Flex>
    {/* <Flex w='100%' m='auto' h='400px' mt={90} gap={50}> */}
      <Box w='70%' m='auto' mt={90} pr={10} >
        <Heading pb={4} fontFamily={'Parata'}>Who We Are.</Heading>
        <Text>At ZENOO, we're not just a conglomerate; we're a visionary force that encompasses a world of possibilities. With a passion for innovation and a commitment to excellence, we have redefined the landscape of real estate, loan services, insurance solutions, legal assistance, interior design, and construction management. Our journey began with a simple yet audacious dream - to create a one-stop hub where all your dreams find their true home.
          <br />
          <Text>
We believe in more than just transactions; we believe in the experiences that turn dreams into reality. At ZENOO, we're not just in the business of bricks and mortar, numbers, or policies - we are in the business of building trust, nurturing aspirations, and fostering growth. Our team of experts works tirelessly, combining their knowledge, creativity, and ingenuity to craft solutions that go beyond expectations.
          </Text>
        </Text>
        <Button _hover={{backgroundColor:'white',color:'#3654CE',border:'2px solid #3654CE'}} mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>CTA</Button>
      </Box>





      <Flex justifyContent='space-around'  pt={50} w='60%' m='auto' gap={40}>
    <Box w='50%'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30}>Mission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button _hover={{backgroundColor:'white',color:'#3654CE',border:'2px solid #3654CE'}} mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>CTA</Button>
    </Box>
    <Box w='50%'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30} mt={-3}>Vission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button _hover={{backgroundColor:'white',color:'#3654CE',border:'2px solid #3654CE'}} mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>CTA</Button>
    </Box>
</Flex>
<Box pb={277} mt={120} backgroundImage={'https://www.vaporstore.com/wp-content/uploads/2016/05/Savin-NY-Website-Background-Web.jpg'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} backgroundPosition={'bottom'}>
  <Heading fontFamily='Parata'>FAQ</Heading>
  <Text mb={22}>Discovering the Answers: Frequently Asked Questions</Text>
<Accordian/>
</Box>
<Box >
<Image src=''/>
</Box>
<Footer/>
         <div className="chat">
      {isChatOpen && <ChatBox/>}
      {isChatOpen?<ChatIcon2 onClick={handleChatIconClick}/>:
      <ChatIcon onClick={handleChatIconClick} />}
      </div>
    </Box>
  )
}

export default Home3
