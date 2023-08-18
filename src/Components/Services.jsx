import { Box, SimpleGrid, Text, Stack, Flex,Image } from '@chakra-ui/react'
import icon3 from '../Images/icon3.png'
import icon2 from '../Images/icon2.png'
import icon1 from '../Images/icon1.png'


export default function SimpleThreeColumns(){


return (
    <Box textAlign={'center'} p={4} w='90%' m='auto' mt={'10px'} mb={1}>
    <Flex direction={['column','column','row','row']} gap={20} justifyContent={'space-around'}>
      <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p={2} background={'white'}  borderRadius={10}>
      <Box pb={3} w={'15%'} m={'auto'}>
         <Image src={icon2}/></Box>
      <Text pb={2} fontWeight={600}>Hard-Work</Text>
      <Text color={'gray.600'}>Our company shows diligent effort, and our team works effectively and efficiently contributing to substantial growth of your brand. </Text>
    </Box>
    <Box  _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p={2} background={'white'}  borderRadius={10}>
      <Box pb={3} w={'20%'} m={'auto'}>
         <Image src={icon1}/></Box>
      <Text pb={2} fontWeight={600}>Community-Oriented</Text>
      <Text color={'gray.600'}>We are actively involved in supporting and giving back to the communities we operate in.</Text>
    </Box>
    <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p={2} background={'white'}  borderRadius={10}>
      <Box pb={3} w={'15%'} m={'auto'}>
         <Image src={icon3}/></Box>
      <Text pb={2} fontWeight={600}>Expertise</Text>
      <Text color={'gray.600'}>Our team is comprised of skilled professionals who possess in-depth knowledge and expertise in their respective fields.  </Text>
    </Box>
    </Flex>
    </Box>
  )
}