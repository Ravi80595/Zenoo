import { Box, SimpleGrid, Text, Stack, Flex,Image } from '@chakra-ui/react'
import icon3 from '../Images/icon3.png'
import icon2 from '../Images/icon2.png'
import icon1 from '../Images/icon1.png'

export default function SimpleThreeColumns() {
  return (
    <Box textAlign={'left'} p={4} w='90%' m='auto' mt={50} mb={90}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Stack>
      <Flex
        w={16}
        h={16}
        // align={'center'}
        // justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
         <Image src={icon2}/>
      </Flex>
      <Text fontWeight={600}>Customer Centeric</Text>
      <Text color={'gray.600'}>Our clients are at the heart of everything we do. We prioritize their needs and work tirelessly to exceed their expectations. </Text>
    </Stack>
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        <Image src={icon1}/>
      </Flex>
      <Text fontWeight={600}>Comunitty Oriented</Text>
      <Text color={'gray.600'}>We are actively involved in supporting and giving back to the communities we operate in</Text>
    </Stack>
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        <Image src={icon3}/>     
    </Flex>
      <Text fontWeight={600}>Expertise</Text>
      <Text color={'gray.600'}>Our team is comprised of skilled professionals who possess in-depth knowledge and expertise in their respective fields</Text>
    </Stack>
      </SimpleGrid>
    </Box>
  )
}