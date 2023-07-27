import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../CSS/footer.module.css'
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {


return (
  <div zIndex={999999999} className={styles.container} style={{background:'#10257f'}}>
  <Stack color='white' direction="horizontal" justify="space-between">
    <Stack gap="10px">
      <Text fontSize="16px" fontWeight="700">
        Company
      </Text>
      <Link to='/about'>
    <Text fontSize="14px" fontWeight="500" cursor="pointer">About us</Text></Link>
    <Link to='/contact'>
    <Text fontSize="14px" fontWeight="500" cursor="pointer">Contact us</Text></Link>
    <Text fontSize="14px" fontWeight="500" cursor="pointer">Blog</Text>
    </Stack>
    <Stack gap="10px">
    <Text fontSize="16px" fontWeight="700">Featured Categories</Text>
    <Text fontSize="14px" fontWeight="500" cursor="pointer">Real Estate</Text>
    <Text fontSize="14px" fontWeight="500" cursor="pointer">Loan Services</Text>
    <Text fontSize="14px" fontWeight="500" cursor="pointer">Insurance Solution</Text>
    <Text fontSize="14px" fontWeight="500" cursor="pointer">Legal Assistance </Text>
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
        <a href="https://www.instagram.com/zenoo186/ "target="blank">
        <BsInstagram
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://www.facebook.com/zenoo18"target="blank">
        <BsFacebook
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <BsYoutube
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <a href="https://twitter.com/ZENOO719261821" target="blank">
        <BsTwitter
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
      </Stack>
      <Text color={'white'}>info@zenoo.in</Text>
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
  );
};

export default Footer;