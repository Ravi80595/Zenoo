import '../../CSS/FixedBackground.css'; // Create a CSS file for styles
import React, { useState } from 'react'
import { Box,Flex,Text,Image, Button, Heading,Stack} from '@chakra-ui/react'
import '../../CSS/footer.module.css'
import Logo3 from '../../Images/Logo3.png'
import { Link } from 'react-router-dom'
import {GoArrowUpRight} from 'react-icons/go'
import Accordian from './Accordian'
import Footer from '../../Components/Footer'
// import ContinuousVideo from '../../Components/ContinousVideo'
import whoweare from '../../Images/Whoweare.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SideBox from '../../Components/SideBox'
import vision from '../../Images/vision.png'
import '../../CSS/Home1.css'
import ScrollToTopLink from '../../Components/ScrollToTopLink';
import {CloseIcon} from '@chakra-ui/icons'




const FixedBackgroundComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);



  const handleChatIconClick = () => {
    setIsChatOpen(!isChatOpen);
  };



return (
    <div className="fixed-background">
      {/* Background image goes here */}
      <div className="content-wrapper">
        <div className="content">
          {/* Your scrollable content goes here */}
          {/* <h1>Scrollable Content</h1> */}
          <Box className='HomeBox'>
      <Box>
    <Box  w={['100vw','100%','100%','100%']} position='fixed' zIndex={999999999} box-shadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
      <SideBox/>
      <Box p={5} backgroundColor={'white'}>
        <Flex justifyContent='space-between'>
        <Image w={'120px'} h={'40px'} src={Logo3}/>
        <Flex fontSize={['15px',20,20,20]} justifyContent='space-around' w={['60%','60%','30%','30%']} pt={[2,0,0,0]} color='#10257f'>
            <ScrollToTopLink to='/about'>
            <Text className='Link_btns'>About us</Text>
            </ScrollToTopLink>
            <ScrollToTopLink to='/contact'>
            <Text className='Link_btns'>Contact us</Text>
            </ScrollToTopLink>
        <Box w='10%'>   
        <Link to='/'>
        <CloseIcon color='#10257f' />
        </Link>   
        </Box>
        </Flex>
        </Flex>
    </Box>
    </Box>
    <Box pt={20}>
    <Flex w={'100%'} direction={['column','column','column','row']} gap={['25px','125px','125px','125px']} h={['730px','630px','630px','100vh']} >
      <Box p={11} mt={[10,200,200,120]} ml={[5,90,90,90]} w={['90%','90%','100%','70%']}>
      <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
    <Flex pt={0} pb={3} justifyContent='space-between'>
        <Text fontSize={['17px',30,30,30]} fontWeight='bold' color='rgb(16, 37, 127)'>Real Estate</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex></a>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
    <Flex pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={['17px',30,30,'27px']} fontWeight='bold' color='rgb(16, 37, 127)'>Financial Advisory</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex> </a>
    <hr height='22px' color='rgb(54, 84, 206)'/>
    <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
    <Flex pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={['15px',30,30,30]} fontWeight='bold' color='rgb(16, 37, 127)'>Insurance Solutions</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex></a>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={['17px',30,30,30]} fontWeight='bold' color='rgb(16, 37, 127)'>Legal Assistance</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex></a>
    <hr height='12px'/>
    </Box >
    <Box h={350} mt={220} w={'70%'} border={'20px solid gre'} borderRightRadius={'50px'}></Box>
      {/* <Image w='900px' h={'700px'} src={''}/> */}
    </Flex>
    </Box>
    {/* hero */}
    {/* // 'https://sydneywpresidence.b-cdn.net/wp-content/uploads/revslider/main/building_white_1000-1.jpeg' */}
    <Flex direction={['column','column','row','row']} mt={50}>
      <Box w={['90%','90%','40%','40%']} mt={40}>
        <Image src={whoweare}/>
      </Box>
      <Box w={['90%','90%','50%','50%']} m='auto' mt={90}>
        <Heading fontFamily={'Parata'}>Who We Are</Heading>
        <Text fontWeight={'bold'} pb={4}>Unlocking the Potential of Tomorrow, Today</Text>
        <Text>At ZENOO, we're not just a conglomerate, we're a visionary force that encompasses a world of possibilities. With a passion for innovation and a commitment to excellence, we have redefined the landscape of real estate, loan services, insurance solutions, legal assistance, interior design, and construction management. Our journey began with a simple yet audacious dream - to create a one-stop hub where all your dreams find their true home.
          <br />
          <br />
          <Text>
We believe in more than just transactions; we believe in the experiences that turn dreams into reality. At ZENOO, we're not just in the business of bricks and mortar, numbers, or policies - we are in the business of building trust, nurturing aspirations, and fostering growth. Our team of experts works tirelessly, combining their knowledge, creativity, and ingenuity to craft solutions that go beyond expectations.
          </Text>
        </Text>
        <Link to='/about'>
        <Button _hover={{backgroundColor:'white',color:'#3654CE',border:'2px solid #3654CE'}} mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>Know More</Button></Link>
      </Box>
      </Flex>
      <Flex direction={['column','column','column','row']}  justifyContent='space-around'  pt={90} w={['90%','90%','60%','60%']} m='auto' gap={40}>
    <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} w={['95%','90%','50%','50%']}  boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
        <Image h={'200px'} w={'100%'} src='https://www.praxivaluations.praxi/files/news/ILQI%20large.jpg'/>
        <Box backgroundColor={'white'} p={5}>
        <Text pt={3} fontWeight='bold' fontSize={30} mt={-3}>Mission</Text>
        <Text h={'220px'}>To enrich lives and create exceptional spaces by delivering innovative, sustainable, and customer-centric solutions. Through integrity, quality, and a commitment to excellence, we aim to be a leading force in the Indians, fostering growth and prosperity for our stakeholders and the communities we serve.</Text>
        <Link to='/about'>
        <Button _hover={{backgroundColor:'white',color:'#3654CE',border:'2px solid #3654CE'}} mt={5} backgroundColor='#3654CE' color='white'>Know More</Button></Link>
    </Box>
    </Box>
    <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} w={['95%','90%','50%','50%']} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
        <Image w={'100%'} h={'200px'} src={vision}/>
        <Box backgroundColor={'white'} p={5}>
        <Text pt={3} fontWeight='bold' fontSize={30} mt={-3}>Vision</Text>
        <Text h={'220px'}>Our vision is to be the most admired and trusted corporation in India, setting new standards of excellence and innovation in the distinct industries. ZENOO aspire to positively impact lives by creating inspiring living, working, and recreational spaces that harmoniously blend with the environment. </Text>
        <Link to='/about'>
        <Button _hover={{backgroundColor:'white',color:'#3654CE',border:'2px solid #3654CE'}} mt={5}  backgroundColor='#3654CE' color='white'>Know More</Button></Link>
    </Box>
    </Box>
</Flex>
<Box pb={277} mt={120} >
  <Heading pt={12} fontFamily='Parata'>FAQs</Heading>
  {/* <Text mb={22}>Discovering the Answers: Frequently Asked Questions</Text> */}
<Accordian/>
</Box>
<Box >
<Image src=''/>
</Box>
<Footer/>
         {/* <Box>
      {isChatOpen && <ChatBox/>}
      {isChatOpen?<ChatIcon2 onClick={handleChatIconClick}/>:
      <ChatIcon onClick={handleChatIconClick} />}
      </Box> */}
    </Box>
    </Box>
        </div>
      </div>
    </div>
  );
};

export default FixedBackgroundComponent;