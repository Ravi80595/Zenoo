import { Box, Image, Flex, Text, Button, Input, Textarea, Checkbox, Select, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import careerCover from '../Images/careerCover.png'
import PopupForm from '../Components/PopupForm'
import SideBox from '../Components/SideBox'
import Chatbot from '../Components/Chat/ChatBot'


const Careers = () => {
  const [popupOpen, setPopupOpen] = useState(false);


const togglePopup = () => {
  setPopupOpen(!popupOpen);
};



  return (
    <>
    <Box background={'#efefef'}>
      <Navbar />
    <SideBox/>
    <Chatbot/>
      <Box pt={'50px'}>
        <Box w='100%' h={[190, 190, 290, "418px"]} m='auto' mt={'30px'} pl={21} color='white' textAlign='left' backgroundImage={careerCover} backgroundRepeat={'no-repeat'} backgroundSize={'contain'} backgroundPosition='top'>
        </Box>
        <Flex justifyContent={'center'}>
          {/* <button style={{ background: "blue", color: "white", padding: "10px", borderRadius: "10px" }} onClick={togglePopup}>WORK WITH US</button> */}
          </Flex></Box>
        {/* <input type="file" /> */}

        {/* ********************* Main heading careers page ********************************* */}


      <Box textAlign={'left'} w={'90%'} m={'auto'} background={'#efefef'} pt={'40px'} pb={100}>
        <Text fontSize={'36px'} pb={5} fontFamily={'Prata'}>CAREERS</Text>
        <PopupForm open={popupOpen} onClose={togglePopup} />
        <Text>At ZENOO, we believe that the success of our brand and the goals of our team members are equally essential. Our inclusive and welcoming culture attracts top-notch talent who share our unwavering commitment to teamwork, respect, and excellence. We foster a safe and enjoyable work environment that encourages personal development irrespective of role or background. Our dedicated focus is supporting our employees' career and personal aspirations, guiding them toward achieving new heights within our organization.</Text>
      </Box>


{/* ************************ Opportunites careers page ****************************** */}

      <Box background={'white'} w={['90%', '90%', '60%', '60%']} m='auto' pb={50} borderRadius={10} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'30px'} mb={50}>
        <Text fontSize={'36px'} fontFamily={'Prata'}>Opportunities</Text>
        <Text textAlign={'left'} fontWeight={'bold'}>Transaction Manager</Text>
        <Text textAlign={'left'}>In the capacity of a Transaction Manager, your primary responsibility is to ensure the seamless execution of deals. Functioning as a conductor, it is incumbent upon you to carefully organize and oversee all aspects of the transaction while monitoring each step of the process with meticulous attention to detail.</Text>

        <Text pt={10} textAlign={'left'} fontWeight={'bold'}>Transaction Executive</Text>
        <Text textAlign={'left'}>In the role of a Transaction Executive, your responsibilities will involve coordinating communications, managing documents, and tracking progress. Your contributions will be pivotal to the success of our company's business deals, making this position an essential component of our operations. Your expertise in managing complex transactions and ability to handle intricate details will be invaluable in ensuring that our business deals are executed seamlessly. We look forward to working with someone who is reliable, diligent, and committed to delivering results.</Text>

        <Text pt={10} textAlign={'left'} fontWeight={'bold'}>Tele sales Executive</Text>
        <Text textAlign={'left'}>We are currently seeking an enthusiastic Telesales Representative to aid in generating sales for our esteemed company. Your main responsibilities will involve closing sales deals over the phone and maintaining positive customer relationships. To excel in this role, it is essential to possess exceptional communication skills and have a natural talent for interacting with people. You should feel comfortable presenting products or services over the phone, and be equipped to handle customer concerns and queries. Our objective is to expand our business by attracting new customers and fostering growth.</Text>


        <Flex justifyContent={'center'} mt={10}><button style={{ background: "blue", color: "white", padding: "10px", borderRadius: "10px" }} onClick={togglePopup}>WORK WITH US</button></Flex>
      </Box>

      {/* *********************** 2nd text heading page ******************************* */}

      <Box backgroundColor={'white'} h={200} mb={50}>
        <Text pt={30} pb={5} fontSize={['14px', '14px', '20px', '20px']}>Embark on a journey of growth and innovation with ZENOO. Together, we can elevate your ambitions and achieve remarkable success.</Text>
        <Text fontSize={['14px', '14px', '20px', '26px']} fontFamily={'Prata'}>Interested in joining us?</Text>
        <Text>Send us your cv on careers@zenoo.in</Text>
      </Box>
      <Footer />
    </Box>
    </>
  )
}

export default Careers
