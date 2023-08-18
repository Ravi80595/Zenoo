import { Box, SimpleGrid, Text, Stack, Flex,Image } from '@chakra-ui/react'
import icon4 from '../Images/icon4.png'
import icon5 from '../Images/icon5.png'


export default function SimpleTwoColumns() {
  return (
    <Box textAlign={'center'} p={4} w={['90%','90%','60%','60%']} m='auto' mt={'10px'} mb={90}>
      <Flex direction={['column','column','row','row']} gap={20}>
      <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} background={'white'} p={2} borderRadius={10}>
      <Box pb={3} w={'20%'} m={'auto'}>
         <Image src={icon4}/></Box>
      <Text pb={2} fontWeight={600}>Teamwork</Text>
      <Text color={'gray.600'}>Uniting efforts to make your property aspirations a collective success.
 </Text>
    </Box>
    <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p={2} background={'white'}  borderRadius={10}>
      <Box pb={3} w={'20%'} m={'auto'}>
         <Image src={icon5}/></Box>
      <Text pb={2} fontWeight={600}>Humble</Text>
      <Text color={'gray.600'}>Approaching greatness with humility, making your goals our priority.</Text>
    </Box>
    </Flex>
    </Box>
  )
}