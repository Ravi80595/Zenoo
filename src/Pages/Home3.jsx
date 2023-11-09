import React, { useState } from 'react'
import { Box, Flex, Text, Image, Button, Heading, Stack } from '@chakra-ui/react'
import '../CSS/footer.module.css'
// import Logo3 from '../Images/Logo3.png'
import { Link } from 'react-router-dom'
// import { CloseIcon } from '@chakra-ui/icons'
import { GoArrowUpRight } from 'react-icons/go'
// import Accordian from './Template3/Accordian'
// import ChatBox from '../Components/Chat/ChatBox'
// import ChatIcon2 from '../Components/Chat/ChatIcon2'
// import ChatIcon from '../Components/Chat/ChatIcon'
import Footer from '../Components/Footer'
import whoweare from '../Images/Whoweare.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import SideBox from '../Components/SideBox'
// import ScrollToTopLink from '../Components/ScrollToTopLink'
// import vision2 from '../Images/vision2.png'
// import hero from '../Images/hero.png'
// import Logo from '../Images/Logo.png'
import '../CSS/Home1.css'
// import MissionAbout from '../Images/MissionAbout.png'
// import HomeNavbar from '../Components/HomeNavbar'
// import Navbar from '../Components/Navbar'
import visionHome from '../Images/visionHome.png'
import missionHome from '../Images/missionHome.png'
import Navbar2 from '../Components/Navbar2'
import Chatbot from '../Components/Chat/ChatBot'


const Home3 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);



  const handleChatIconClick = () => {
    setIsChatOpen(!isChatOpen);
  };



return(
    <>
      {/* <Navbar /> */}
      <Chatbot/>
      <Box background='#f9f9f9' className='HomeBox'>
        <Box>
          <Navbar2/>
          <Box className='hero' pt={20}>
            <Flex w={'100%'} direction={['column', 'column', 'column', 'row']} gap={['25px', '125px', '125px', '125px']} h={['730px', '630px', '630px', '100vh']} >
              <Box p={11} mt={[10, 200, 200, 120]} ml={[5, 90, 90, 90]} w={['90%', '90%', '100%', '70%']}>
                <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
                  <Flex pt={0} pb={3} justifyContent='space-between'>
                    <Text fontSize={['17px', 30, 30, 30]} fontWeight='bold' color='rgb(16, 37, 127)'>Real Estate</Text>
                    <Flex gap={5} pt={3}>
                      <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
                      <GoArrowUpRight color='rgb(54, 84, 206)' />
                    </Flex>
                  </Flex></a>
                <hr height='22px' color='rgb(54, 84, 206)' />
                <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
                  <Flex pt={5} pb={3} justifyContent='space-between'>
                    <Text fontSize={['17px', 30, 30, '27px']} fontWeight='bold' color='rgb(16, 37, 127)'>Financial Advisory</Text>
                    <Flex gap={5} pt={3}>
                      <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
                      <GoArrowUpRight color='rgb(54, 84, 206)' />
                    </Flex>
                  </Flex> </a>
                <hr height='22px' color='rgb(54, 84, 206)' />
                <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
                  <Flex pt={5} pb={3} justifyContent='space-between'>
                    <Text fontSize={['15px', 30, 30, 30]} fontWeight='bold' color='rgb(16, 37, 127)'>Insurance Solutions</Text>
                    <Flex gap={5} pt={3}>
                      <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
                      <GoArrowUpRight color='rgb(54, 84, 206)' />
                    </Flex>
                  </Flex></a>
                <hr height='22px' color='rgb(54, 84, 206)' />
                <a href="https://www.linkedin.com/company/zenoo.in/" target='blank'>
                  <Flex pt={5} pb={3} justifyContent='space-between'>
                    <Text fontSize={['17px', 30, 30, 30]} fontWeight='bold' color='rgb(16, 37, 127)'>Legal Assistance</Text>
                    <Flex gap={5} pt={3}>
                      <Text className='scrolling-text' color='rgb(21 50 169)'>Explore More</Text>
                      <GoArrowUpRight color='rgb(54, 84, 206)' />
                    </Flex>
                  </Flex></a>
                <hr height='12px' />
              </Box >
              <Box h={350} mt={220} w={'70%'} border={'20px solid gre'} borderRightRadius={'50px'}></Box>
            </Flex>
          </Box>
          <Flex direction={['column', 'column', 'row', 'row']}>
            <Box w={['99%', '90%', '40%', '40%']} mt={'110px'}>
              <Image h={'450px'} pl={['10px', '10px', '80px', '80px']} mt='-40px' src={whoweare} />
            </Box>
            <Box w={['90%', '90%', '50%', '50%']} m='auto' mt={155}>
              <Text textAlign={'justify'}> At ZENOO, we don't just focus on transactions; we believe in creating meaningful experiences that turn dreams into reality. Our business is more than just bricks and mortar, numbers, or policies - we are dedicated to providing structured solutions that serve our customers. Our team of experts works tirelessly, sharing their knowledge, creativity, and ingenuity to craft solutions that exceed expectations.
                <br />
                <br />
                <Text textAlign={'justify'}>
                ZENOO is more than just a company. We are a forward-thinking entity that offers a wide range of possibilities. Our focus is on revolutionizing the Real Estate industry through Buying and Selling, Interior & Construction Management. Additionally, we provide Financial Advisory services such as Loan Services, Insurance Solutions, and Legal services. Our initial goal was to create a convenient one-stop-shop for all our clients.
                </Text>
              </Text>
              <Link to='/about'>
                <Button _hover={{ backgroundColor: 'white', color: '#3654CE', border: '2px solid #3654CE' }} mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>Know More</Button></Link>
            </Box>
          </Flex>
          <Flex direction={['column', 'column', 'column', 'row']} justifyContent='space-around' pt={90} w={['90%', '90%', '60%', '60%']} m='auto' gap={40}>
            <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} w={['95%', '90%', '50%', '50%']} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
              <Image w='400px' h={'250px'} src={visionHome} />
              {/* vision2 */}
              <Box p={5}>
                <Text pt={3} fontWeight='bold' fontSize={30} mt={-3} fontFamily={'Parata'}>Vision</Text>
                <Text h={'220px'} textAlign={'justify'}>Our goal is to achieve success in our endeavors, and we strive to assist our clients and employees in creating wealth. We enjoy collaborating with individuals who are dedicated to putting in hard work and making significant contributions to their communities. </Text>
                <Link to='/about'>
                </Link>
              </Box>
            </Box>
            <Box _hover={{ transform: 'translateY(-15px)', transition: 'transform 0.5s' }} w={['95%', '90%', '50%', '50%']} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
              <Image h={'250px'} w={'100%'} border={'1px solid grey'} backgroundColor={'blue'} borderBottom={'none'} src={missionHome} />
              <Box p={5}>
                <Text pt={3} fontWeight='bold' fontSize={30} mt={-3} fontFamily={'Parata'}>Mission</Text>
                <Text h={'220px'} textAlign={'justify'}>We cultivate a warm and inclusive environment that harnesses the diverse experiences and perspectives of our dedicated staff, clients, and partners to gain a sustained competitive advantage in the market. </Text>
                <Link to='/about'>
                </Link>
              </Box>
            </Box>
          </Flex>
          <Box mt={10}>
            <Image src='' />
          </Box>
          <Footer />
          {/* <Box>
            {isChatOpen && <ChatBox />}
            {isChatOpen ? <ChatIcon2 onClick={handleChatIconClick} /> :
              <ChatIcon onClick={handleChatIconClick} />}
          </Box> */}
        </Box>
      </Box>
    </>
  )
}

export default Home3
