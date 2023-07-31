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
      date:"April 22, 2023",
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
      date:"April 15, 2023",
      review:"ZENOO is a lifesaver! Their exceptional services cover everything from property to loans and insurance. With their expert guidance, even with a low CIBIL score, they made it possible for me to secure the help I needed. Definitely recommend this company to my office colleagues.😊",
      rating:5
  },
  {
      name:"Anil Prasad ",
      date:"April 23, 2023",
      review:"My favorite part about this company is their attentiveness and problem-solving approach which is truly commendable. Their unique combination of loans, insurance, and interior services under one roof is remarkable. Nice job, ZENOO!",
      rating:3
  },
  {
      name:"Debanjan Roy",
      date:"April 18, 2023",
      review:"ZENOO has been an exceptional partner to me and my family. Their real estate team helped me find my dream home effortlessly, and their insurance solutions provided peace of mind. The legal assistance during my property transaction was outstanding. Highly recommended!",
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
      <Heading
        p={5}
        textAlign={"start"}
        size="lg"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
     What Our Customers have to Say
      </Heading>
      <Flex justifyContent={"space-between"} p={5} w={"100%"}>
        <Swiper
          slidesPerView={isBigScreen ? 4 : isTablet ? 2 : isMobile ? 2 : 4}
          spaceBetween={0}
          loop={true}
          loopFillGroupWithBlank={true}
          // navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          autoplay={{
            delay:1000, 
            disableOnInteraction: false, 
          }}
        >
          {ReviewsData.map((el, i) => (
            <SwiperSlide style={{ gap: "10px", color: "black",marginLeft:'32px'}} >
            <Box key={i} width="344px" textAlign="left">
              <Heading fontSize="16px" fontWeight="600">
                {el.name}
              </Heading>
              <Heading fontSize="14px" fontWeight="400" marginTop="5px">
                {el.date}
              </Heading>
              <Box
                width="344px"
                border="1px solid #e2fff2"
                borderRadius="7px"
                padding="24px"
                marginTop="20px"
                bg="#f1fef8"
                height="302px"
              >
                <Heading color="#bfeddd"></Heading>
                <Heading fontSize="16px" color="#4f4d4a" fontWeight="500">
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