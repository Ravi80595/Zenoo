import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Terms = () => {



return (
   <Box background={'white'} textAlign={'left'}>
    <Navbar/>
    <Text fontSize={'40px'} pt={90}>Terms and Conditions </Text>
    <Text pb={5}> <b>Suggested Text</b>  Our website address is : </Text>
    <Box w={'90%'} m={'auto'}>
        <Text>
        Welcome to Zenoo! These Terms and Conditions govern your use of our website and the services we provide. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our website.         <br />
        </Text>
        <Text fontWeight="bold" pt={5}>Use of the Website  </Text>
        <Text> <b>Accuracy of Information:</b>  While we strive to provide accurate and up-to-date information on our website, we cannot guarantee the accuracy, completeness, or reliability of any content. You acknowledge that any reliance on the information provided is at your own risk.  </Text>
        <Text> <b> User Responsibilities:</b>  You agree to use our website responsibly and in accordance with applicable laws and regulations. You must not engage in any activity that could disrupt or interfere with the operation of the website or compromise its security.  </Text>
        <Text> <b>User Content:</b>  Any content you submit to our website, including comments, reviews, or other contributions, must not violate any third-party rights, be unlawful, or be offensive. By submitting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, and distribute that content.  </Text> <br />
        <Text fontWeight='bold' pt={5}>Intellectual Property  </Text>
        <Text>
        All content on our website, including but not limited to text, images, graphics, logos, and software, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on our content without our explicit permission. 
        </Text>
        <Text fontWeight='bold' pt={5}>Links to Third-Party Websites   </Text>
        <Text>Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the content, privacy practices, or any other aspects of these third-party websites. You access these websites at your own risk and should review their terms and privacy policies.   </Text>
        <Text pt={5} fontWeight='bold'>Disclaimer of Warranties   </Text>
        <Text>Our website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.  </Text>
        <Text fontWeight='bold' pt={5}>Limitation of Liability    </Text>
        <Text>We shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way related to your use of our website or the content provided, even if we have been advised of the possibility of such damages.  </Text>
        <Text fontWeight='bold' pt={5}>Indemnification     </Text>
        <Text>You agree to indemnify, defend, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses (including attorney's fees) arising out of your use of our website, violation of these Terms and Conditions, or infringement of any third-party rights.   </Text>
        <Text fontWeight='bold' pt={5}>Changes to Terms and Conditions    </Text>
        <Text>We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page, along with the updated effective date. Your continued use of our website after the changes will constitute your acceptance of the revised terms.  </Text>
        <Text fontWeight='bold' pt={5}>Governing Law    </Text>
        <Text pb={10}>These Terms and Conditions are governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction]. 
        <br />
        If you have any questions or concerns about these Terms and Conditions, please contact us at [contact email or form link]. 
        <br />
        By using our website, you acknowledge that you have read, understood, and agree to the terms of these Terms and Conditions.   </Text>
    </Box>
    <Footer/>
   </Box>
  )
}

export default Terms