import { Box, color, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useMediaQuery } from '@chakra-ui/react'
import { useMediaQuery } from "react-responsive";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
// import Playstore from "./PlayStore.JPG";



const StarRating = ({ numberOfStars }) => {
  const stars = Array.from({ length: numberOfStars });

  return (
    <>
      {stars.map((_, index) => (
        <span key={index} role="img" aria-label="star">
          ⭐
        </span>
      ))}
    </>
  );
};


const ReviewsData = [
  {
      name:"Nibha Singh",
      date:"Jan 22, 2023",
      review:"ZENOO provided me with a wonderful experience. They guided me all the way throughout the property process. Special mention to their sales team who understood my preferences and offered me the best property options in Gurgaon. ",
      rating:4
  },
  {
      name:"Raushan Sharma ",
      date:"April 23, 2023",
      review:"ZENOO has been an exceptional partner to me and my family. Their real estate team helped me find my dream home effortlessly, and their insurance solutions provided peace of mind. The legal assistance during my property transaction was outstanding. Highly recommended!",
      rating:5
  },
  {
      name:"Pooja Kushwaha ",
      date:"March 15, 2023",
      review:"ZENOO is a lifesaver! Their exceptional services cover everything from property to loans and insurance. With their expert guidance, even with a low CIBIL score, they made it possible for me to secure the help I needed. Definitely recommend this company to my office colleagues.😊",
      rating:5
  },
  {
      name:"Anil Prasad ",
      date:"Feb 23, 2023",
      review:"My favorite part about this company is their attentiveness and problem-solving approach which is truly commendable. Their unique combination of loans, insurance, and interior services under one roof is remarkable. Nice job, ZENOO!",
      rating:3
  },
  {
      name:"Debanjan Roy",
      date:"Dec 18, 2022",
      review:"ZENOO has been an exceptional partner to me and my family. Their real estate team helped me find my dream home effortlessly, and their insurance solutions provided peace of mind. The legal assistance during my property transaction was outstanding. Highly recommended!",
      rating:5
  },
  {
      name:"Ravi Tobria",
      date:"Dec 10, 2022",
      review:"ZENOO made my dream home a reality! Their team of dedicated professionals guided me through every step of the buying process, ensuring I found the perfect property at the best price. Highly recommended!",
      rating:4
  },
  {
      name:"Rashmi Singh",
      date:"Feb 10, 2023",
      review:"ZENOO's loan assistance was a game-changer for me. They simplified the entire process, offering competitive rates and personalized solutions that fit my financial situation perfectly. Thank you for helping me achieve my financial goals!",
      rating:4
  },
  {
      name:"Priya Rastogi",
      date:"Jan 10, 2023",
      review:"Trustworthy and efficient! ZENOO provided me with comprehensive insurance coverage tailored to my needs. Their attentive agents explained all the policy details, giving me peace of mind and protection for the future.",
      rating:5
  }
]

const Reviews = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    
    <Box p={5} backgroundColor={'white'}>
    {/* <Box>
      <img src={Playstore}/>
    </Box> */}
      <Text
        p={5}
        textAlign={"center"}
        size="lg"
        color={"#30363C"}
        fontFamily={'Prata'}
        pb={10}
        fontSize={['26px','26px','36px','36px']}
      >
     Testimonials
      </Text>
      <Flex justifyContent={"space-between"} p={5} w={"100%"}>
        <Swiper
          slidesPerView={isBigScreen ? 4 : isTablet ? 2 : isMobile ? 1 : 4}
          spaceBetween={isMobile ? '150px' : 10} 
         
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {ReviewsData.map((el, i) => (
            <SwiperSlide style={{ gap: "10px", color: "black",marginLeft:'32px'}} >
            <Box key={i} width={["194px","144px","244px","344px"]} textAlign="left"  marginLeft={isMobile? '100px':0}>
              <Heading fontSize="16px" fontWeight="600">
                {el.name}
              </Heading>
              <Heading fontSize="14px" fontWeight="400" marginTop="5px">
                {el.date}
              </Heading>
              <Box width={["224px","144px","244px","344px"]} border="1px solid #e2fff2" borderRadius="7px" padding={["14px" ,"24px" ,"24px" ,"24px" ]} marginTop="20px" bg="#f1fef8" height="302px">
                <Heading color="#bfeddd"></Heading>
                <Heading fontSize={["15px","16px","16px","16px"]} color="#4f4d4a" fontWeight="500">
                  {el.review}
                  </Heading>
                  <Text fontWeight={'500'} pt={2}>Rating :
                <StarRating numberOfStars={el.rating} /></Text>
                
              </Box>
            </Box>
            </SwiperSlide>
          ))}
          </Swiper>
      </Flex>
    </Box>
  );
};

export default Reviews;