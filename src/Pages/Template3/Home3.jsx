import React from 'react'
import Navbar1 from '../Template1/Navbar1'
import { Box,Flex,Text,Image, Button, Heading,Stack} from '@chakra-ui/react'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {AiFillFacebook,AiOutlineWhatsApp,AiFillLinkedin} from 'react-icons/ai'
import '../../CSS/footer.module.css'
import Logo from '../../Images/Logo.png'
import { Link } from 'react-router-dom'
import {CloseIcon} from '@chakra-ui/icons'
import {GoArrowUpRight} from 'react-icons/go'
import Footer from '../../Components/Footer'
import styles from '../../CSS/footer.module.css'
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";



const Home3 = () => {


return (
    <Box background='#f9f9f9'>
    <Box w='100%' backgroundColor='white' position='fixed' zIndex={999999999} box-shadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
    <Box background='#10257f'>
      <Flex justifyContent='space-between' pl={4}>
        <Flex fontSize={25} justifyContent='space-around' gap={3}>
        <BiLogoInstagramAlt className='footerLogo'/>
        <AiOutlineWhatsApp className='footerLogo'/>
        <AiFillFacebook className='footerLogo'/>
        <AiFillLinkedin className='footerLogo'/>
        </Flex>
        <Flex color='white' gap={5} pr={5}>
        {/* <AiOutlineWhatsApp pt={5}/>  */}
        115821-0312
        <Box borderLeft='2px solid white'></Box>
        <Text>Contact@gmail.com</Text>
        <Box borderLeft='2px solid white'></Box>
        <Text> Monday - Friday: 10:00 - 22:00</Text>
        </Flex>
      </Flex>
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
    <Flex gap={48} h='630px' background='#fdfdfd'>
      <Box mt={200} ml={70} w='100%'>
    <Flex   pt={0} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>REAL ESTATE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>FINANCE</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>LEGAL ADVISORS</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='22px'  color='rgb(54, 84, 206)'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
        <Text fontSize={30} fontWeight='bold' color='rgb(16, 37, 127)'>CONSTRUCTION</Text>
        <Flex gap={5} pt={3}>
        <Text className='scrolling-text' color='rgb(54, 84, 206)'>See the source</Text>
        <GoArrowUpRight color='rgb(54, 84, 206)'/>
        </Flex>
    </Flex>
    <hr height='12px'/>
    <Flex   pt={5} pb={3} justifyContent='space-between'>
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
    </Flex>
    </Box>
      <Image w='900px' src='https://sydneywpresidence.b-cdn.net/wp-content/uploads/revslider/main/building_white_1000-1.jpeg'/>
    </Flex>
    <Flex w='100%' m='auto' h='400px' mt={90} gap={50}>
      <Image src='https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1080,h_675/https://realestatemagazine.ca/wp-content/uploads/2022/08/img-25202208081901-1080x600.jpg'/>
      <Box pr={10}>
        <Heading pb={4}>Who We Are.</Heading>
        <Text>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Australia’s most prestigious waterfront properties. 
          <br />
          <Text>Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Sydney and Australia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam ab illo laudantium blanditiis sint doloremque aut, incidunt porro suscipit dignissimos iure veniam vel perspiciatis voluptatem consequuntur similique vero. Magni?
          </Text>
        </Text>
        <Button mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>CTA</Button>
      </Box>
      </Flex>
      <Flex justifyContent='space-around'  pt={50} w='60%' m='auto' gap={40}>
    <Box w='50%'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30}>Mission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>CTA</Button>
    </Box>
    <Box w='50%'>
        <Image src='https://images.squarespace-cdn.com/content/v1/59b892162278e7ce6ec4c43c/1681326962477-S0N2M9H0WBBC14MHZEA8/Final+MS+Sticker.png?format=2500w'/>
        <Text fontWeight='bold' fontSize={30} mt={-3}>Vission</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum quod, praesentium debitis nam veritatis eum officia ullam perferendis, ipsum asperiores est voluptatum? Tempora ipsum id veritatis mollitia ea laudantium labore?</Text>
        <Button mt={10} pl={20} pr={20} backgroundColor='#3654CE' color='white'>CTA</Button>
    </Box>
</Flex>
<div className={styles.container} style={{background:'#10257f'}}>
      <Stack color='white' direction="horizontal" justify="space-between">
        <Stack gap="10px">
          <Text fontSize="16px" fontWeight="700">
            Company
          </Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">About us</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Career</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Blog</Text>
        <Text fontSize="16px" fontWeight="700" paddingTop="20px">Our Services</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Real Estate</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Finance</Text>
        </Stack>
        <Stack gap="10px">
        <Text fontSize="16px" fontWeight="700">Featured Categories</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">CFO</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Loan</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Brand 3</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Appartment Low to Hide </Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Offices for Rent</Text>
        </Stack>
        <Stack gap="10px">
        <Text fontSize="16px" fontWeight="700">Need Help</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer"> FAQ'S</Text>
        <Text fontSize="16px" fontWeight="700" paddingTop="20px"> Policy Info</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Privacy Policy</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Terms of Use</Text>
        </Stack>
        <Stack gap="10px" marginRight="20px">
          <Text fontSize="16px" fontWeight="700">
            Follow us on
          </Text>
          <Stack direction="horizontal" gap="25px">
            <BsInstagram
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            />
            <BsFacebook
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            />
            <BsYoutube
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            />
            <BsTwitter
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack gap="10px" marginBottom="40px" marginTop="60px">
        <Text fontSize="16px" fontWeight="700" color='white'>
          Our Payment Partners
        </Text>
        <Stack direction="horizontal" justify="space-between">
          <Stack direction="horizontal" gap="40px" width="784px" height="24px">
              <Image src='https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0' height="18px" />
              <Image src='https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0' height="18px" />
              <Image src='https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0' height="18px" />
              <Image src='https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0' height="18px" />
              <Image src='https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0' height="18px" />
          </Stack>
          <Text color='white' fontSize="14px">© 2022 Zenoo. All Rights Reserved</Text>
        </Stack>
      </Stack>
      <Text textAlign='center' color='white'>Created by Laudco Media</Text>
    </div>
    </Box>
  )
}

export default Home3
