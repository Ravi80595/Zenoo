import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
// import {
//   Categories,
//   Company,
//   NeedHelp,
//   OurServices,
//   Partners,
//   PolicyInfo,
// } from "./FooterLinks";
import styles from '../CSS/footer.module.css'
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.container} style={{background:'linear-gradient(180deg, rgba(127,133,203,1) 15%, rgba(99,102,230,1) 22%, rgba(41,66,186,1) 40%, rgba(33,51,153,1) 47%, rgba(25,37,133,1) 57%, rgba(9,15,105,1) 70%, rgba(13,8,107,1) 81%, rgba(17,4,73,1) 100%)'}}>
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
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Brand 4 </Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Brand 5</Text>
        </Stack>
        <Stack gap="10px">
        <Text fontSize="16px" fontWeight="700">Need Help</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer"> FAQ'S</Text>
        <Text fontSize="16px" fontWeight="700" paddingTop="20px"> Policy Info</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">policy</Text>
        <Text fontSize="14px" fontWeight="500" cursor="pointer">Terms</Text>
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
  );
};

export default Footer;