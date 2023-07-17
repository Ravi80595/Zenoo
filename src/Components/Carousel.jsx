import React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    "https://www.southdelhifloors.com/wp-content/uploads/2019/04/florence-homes-south-delhi-builders.jpg",
    "https://is1-3.housingcdn.com/01c16c28/c9e323a36410467c503dcffee48ce1cb/v0/fs/2_bhk_apartment-for-sale-spine_road-Pune-others.jpg",
    "https://m3m.developerprojects.in/commercial/gurugram/m3m-sector-43/images/m3m-sector-43-gurugram-banner.jpg",
  ];

  return (
    <Box
      position={"relative"}
      height={"550px"}
      width={"100%"}
      m={"auto"}
    //   borderRightRadius={'10px'}
    //   borderLeftRadius={'10px'}
      overflow={"hidden"}
    >
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        backgroundColor={"transparent"}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        backgroundColor={"transparent"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image
          src={url}
            key={index}
            // height=a
            position="relative"
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}