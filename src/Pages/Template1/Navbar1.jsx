import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../Images/Logo.png'
import {CloseIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Navbar1= () => {


return (
    <Box position='fixed' w='100%' zIndex={999999999} box-shadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
    <Box p={5} background='#0e0c4d'>
        <Flex justifyContent='space-between'>
          <Link to='/template1'>
        <Image w={10} src={Logo}/>
        </Link>
        <Flex fontSize={20} justifyContent='space-around' w='30%' pt={0} color='white'>
            <Link to='/about'>
            <Text>About us</Text>
            </Link>
            <Link to='/contact'>
            <Text>Contact us</Text>
            </Link>
        <Box w='10%'>   
        <Link to='/'>
        <CloseIcon color='white' />
        </Link>   
        </Box>
        </Flex>
        </Flex>
    </Box>
   
    <nav>
  <ul> <Flex justifyContent='space-around' background='white' color='black'>
    <li class="dropdown">
    <a href="#">Brand</a>
     <ul class="dropdown-menu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
      </li><Box zIndex={99999999} borderLeft='2px solid black'></Box>
    <li class="dropdown">
      <a href="#">Brand</a>
      <ul class="dropdown-menu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
    </li><Box zIndex={99999999} borderLeft='2px solid black'></Box>
    <li class="dropdown">
    <a href="#">Brand</a>
    <ul class="dropdown-menu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
    </li><Box zIndex={99999999} borderLeft='2px solid black'></Box>
    <li class="dropdown">
    <a href="#">Brand</a>
    <ul class="dropdown-menu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
    </li><Box zIndex={99999999} borderLeft='2px solid black'></Box>
    <li class="dropdown">
    <a href="#">Brand</a>
    <ul class="dropdown-menu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
    </li><Box zIndex={99999999} borderLeft='2px solid black'></Box>
    <li class="dropdown">
    <a href="#">Brand</a>
    <ul class="dropdown-menu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
    </li><Box zIndex={99999999} borderLeft='2px solid black'></Box>
    <li class="dropdown">
    <a href="#">Brand</a>
    <ul class="dropdown-menu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
    </li><Box zIndex={99999999} borderLeft='2px solid black'></Box>
    </Flex>
  </ul>

</nav>

    </Box>
  )
}

export default Navbar1


