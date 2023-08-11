import { Box,Image,Flex,Text,Button, Input, Textarea, Checkbox, Select, Heading} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BOD1 from '../Images/BOD1.png'


const Founder = () => {



return(
    <>
    <Navbar/>
    <Box pt={40} background={'white'}>
    <Flex w={'90%'} m={'auto'} gap={50} background={'white'} pt={30} pb={20}>
    <Image src={BOD1}/>
    <Box>
        <Heading pb={5}>Mr. Mohit Jain</Heading>   
        <Text pb={5} fontWeight={'bold'}>Founder of Zenoo</Text>
        <Text>Mr. Mohit Jain is an accomplished professional with consistent success of over 20 years in achieving sustained revenue and profitability growth in dynamic & changing markets in the real estate industry. He is the Director at Zenoo Pvt ltd, Khomes Realtor Pvt Ltd, and the founder of MKJ Group. His expertise lies in sales strategies, sales management, team leadership, lead generation, market research, business development, cultivating relationships, maximizing ROI, and driving revenue growth. Mr. Mohit Jain is an experienced planner who is great at finding and making the most of business opportunities through strategic partnerships. He keeps a close eye on market trends necessary for business development and revenue generation. He is an effective leader with excellent communication, negotiation, and relationship-building skills directed cross-functional teams using interactive & motivational leadership; acknowledged for recruiting and mentoring leaders with an equal desire to win.</Text>
    </Box>
    </Flex>
    </Box>
    <Footer/>
    </> 
  )
}

export default Founder
