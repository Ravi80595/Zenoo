import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import ScrollToTopLink from "./ScrollToTopLink";
import Logo3 from '../Images/Logo3.png'

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()



return (
    <Flex justifyContent="space-between" alignItems="center" background='white' width='100vw'>
       <Box pl={5}>
        <Link to='/home'>
          <Image w={70} src={Logo3}/>
        {/* <Text  fontWeight="bold" color='blue' pr='20px'>Zenoo</Text>*/}
        </Link> 
      </Box>
      <Button p="8px" color="black" bg="white" onClick={onOpen}>
        <HamburgerIcon  w="30px" h="30px" />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
        {/* <Image w="50px" src={Logo} backgroundColor='black'/> */}
        <DrawerCloseButton pt={['20px','10px']} mt={['10px',"50px"]} color='white'/>
          <DrawerBody className="drawer-box">
            <Flex mt="5px" m='20px' gap="20px" direction="column" >
              <ScrollToTopLink to='/home'>
                <Text>Home</Text></ScrollToTopLink>
                <ScrollToTopLink to='/about'>
                <Text>About Us</Text></ScrollToTopLink>
                {/* <ScrollToTopLink to='/board'>
                <Text>Board</Text></ScrollToTopLink> */}
                <ScrollToTopLink to='/team'>
                <Text>Our Team</Text></ScrollToTopLink>
                <ScrollToTopLink to='/careers'>
                <Text>Careers</Text></ScrollToTopLink >
                <ScrollToTopLink to='/contact'>
                <Text>Contact us</Text>
                </ScrollToTopLink>
            </Flex>
            {/* <Text mt="15px">MY ACCOUNT</Text> */}
            {/* <Flex direction="column">
                {/* <MobLogin name="Sign In" />  */}
                 {/* <MobLogin name="Register" /> */}
            {/* </Flex> */} 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
     
      {/* <Flex gap="10px" mr="10px">
        <IoIosHeartEmpty className={styles.logo} />
        <BsBag className={styles.logo} />
      </Flex> */}
    </Flex>
  );
};

export default MobNav;