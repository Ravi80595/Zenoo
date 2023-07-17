import { Box, color, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useMediaQuery } from '@chakra-ui/react'
import { useMediaQuery } from "react-responsive";
// import { Navigation } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/bundle";


const BrandsData = [
  {
    img: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-1035316,msid-79825943/financial-services.jpg",
    heading: "Brand Name",
  },
  {
    img: "https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000",
    heading: "Brand Name",
  },
  {
    img: "https://wpde.com/resources/media/60b389b6-619c-436d-a0b9-0c488b5b88c4-large21x9_WPDE_GrandStrand.jpg?1584568079118",
    heading: "Brand Name",
  },
  {
    img: "https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000",
    heading: "Brand Name",
  },
  {
    img: "https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000",
    heading: "Brand Name",
  },
  {
    img: "https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000",
    heading: "Brand Name",
  }
];
// single media query with no options

const Slider = () => {
  
  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box p={5}>
      <Heading
        p={5}
        textAlign={"start"}
        size="lg"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
        Featured Brands
      </Heading>

      <Text
        pl={5}
        textAlign={"start"}
        size="md"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
        Pick From Our Favourite Brands
      </Text>

      <Flex justifyContent={"space-between"} p={5} w={"100%"}>
        <Swiper
          slidesPerView={isBigScreen ? 7 : isTablet ? 3 : isMobile ? 2 : 5}
          spaceBetween={0}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
        //   modules={[Navigation]}
          className="mySwiper"
        >
          {BrandsData.map((el, i) => (
            <SwiperSlide style={{ gap: "10px", color: "black" }}>
              <Link to='/productspage'>
              <Box key={i} width="180px" height="212px">
                <img
                  style={{
                    borderRadius: "5px",
                    width: "180px",
                    height: "172px",
                    cursor: "pointer",
                  }}
                  src={el.img}
                  alt=""
                />
                <Box width="180px">
                  <p style={{ fontWeight: "500" }}>{el.heading}</p>
                </Box>
              </Box>
                </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Box>
  );
};

export default Slider;