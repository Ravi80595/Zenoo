import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../CSS/footer.module.css'
import { BsFacebook, BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import {AiFillLinkedin} from 'react-icons/ai'
import ScrollToTopLink from "./ScrollToTopLink";
import ScrollToFAQLink from "./Scrolls";



const Footer = () => {


return (
  <div zIndex={999999999} className={styles.container} style={{background:'#10257f'}}>
  <Stack color='white' direction={["column",'row',"horizontal","horizontal"]} justify="space-between">
    <Stack gap="10px">
      <Text fontSize="20px" fontWeight="700">
        Company
      </Text>
      <ScrollToTopLink to='/about'>
    <Text fontSize="16px" fontWeight="500" cursor="pointer">About us</Text></ScrollToTopLink>
    <ScrollToTopLink to='/contact'>
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Contact us</Text></ScrollToTopLink>
    {/* <Text fontSize="14px" fontWeight="500" cursor="pointer">Blog</Text> */}
    <Text color={'white'}>info@zenoo.in</Text>
    </Stack>
    <Stack gap="10px">
    <Text fontSize="20px" fontWeight="700">Featured Categories</Text>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Real Estate</Text></a>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Financial Advisory</Text></a>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Insurance Solution</Text></a>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Legal Assistance </Text></a>
    </Stack>
    <Stack gap="10px">
    <Text fontSize="20px" fontWeight="700">Need Help</Text>
    <ScrollToFAQLink to='/home'>
    <Text fontSize="16px" fontWeight="500" cursor="pointer"> FAQ'S</Text></ScrollToFAQLink>
    <Text fontSize="20px" fontWeight="700" paddingTop="20px"> Policy Info</Text>
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Privacy Policy</Text>
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Terms of Use</Text>
    </Stack>
    <Stack gap="10px" marginRight="20px">
    <Box color={'white'}>
    {/* <Image ml={'50px'} w={50} src='http://localhost:3000/static/media/Logo.60cc4a9cbf255d6eeb4e.png'/> */}
    <Heading pl={'25px'} pb={3}>ZENOO</Heading>
    {/* <Text>Where world connects</Text> */}
  </Box>
      <Stack direction="horizontal" gap="25px">
        <a href="https://www.instagram.com/zenoo186/ "target="blank">
        <BsInstagram
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://www.facebook.com/zenoo18"target="blank">
        <BsFacebook
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://www.linkedin.com/company/zenoo.in/"target="blank">
        <AiFillLinkedin
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://twitter.com/ZENOO719261821" target="blank">
        <BsTwitter
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://twitter.com/ZENOO719261821" target="blank">
        <BsYoutube
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
      </Stack>
      <Text pt={3}>Plot No.14, <br /> Sector 44, Gurugram, <br /> Haryana 122003</Text>

    </Stack>
  </Stack>
  {/* <Stack gap="10px" marginBottom="40px" marginTop="60px">
    <Text fontSize="16px" fontWeight="700" color='white'>
      Our Payment Partners
    </Text>
    <Stack direction={["column","horizontal","horizontal","horizontal"]} justify="space-between">
      <Stack direction="horizontal" gap={["10px","10px","40px","40px"]} width={["84px","84px","784px","784px"]} height="24px">
          <Image src='https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0' height="18px" />
      </Stack>
      <Text color='white' fontSize="14px">© 2022 Zenoo. All Rights Reserved</Text>
    </Stack>
  </Stack> */}
  <Text textAlign='center' pt={5} color='white'>Created by Laudco Media</Text>
  {/* <Text textAlign={'right'}>@all right reserved</Text> */}
</div>
  );
};

export default Footer;