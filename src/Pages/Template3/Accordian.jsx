import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

function Accordian() {
  return (
    <>
      <Accordion p={4} w={"85%"} m={"auto"} allowMultiple>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#333393", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#333393"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
              What is ZENOO, and what does it do?
              </Box>
              <AccordionIcon color={"#333393"} _expanded={{ color: "white" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          ZENOO is a comprehensive and dynamic firm specializing in real estate, loan services, insurance, and legal assistance. With a deep commitment to excellence, integrity, and customer satisfaction, we strive to provide our clients with exceptional solutions tailored to their unique needs. 
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#333393", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#333393"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
              How quickly can ZENOO's team handle real estate transactions? 
              </Box>
              <AccordionIcon color={"#333393"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          ZENOO's team is committed to efficiency and timely execution. They work diligently to streamline the process, ensuring your real estate transactions are completed promptly without compromising on quality.   </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#333393", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#333393"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
              Are ZENOO's real estate agents familiar with local markets? 
              </Box>
              <AccordionIcon color={"#333393"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Absolutely, ZENOO's real estate agents are well-versed in the local market, providing invaluable insights and ensuring you make well-informed property investment decisions.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#333393", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#333393"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
              How does ZENOO prioritize customer satisfaction? 
              </Box>
              <AccordionIcon color={"#333393"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          At ZENOO, customer satisfaction is paramount. We actively seek feedback, constantly improve our services, and go the extra mile to exceed our customers' expectations.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={2}>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#333393", color: "white" }}
              bg={"blackAlpha.100"}
              color={"#333393"}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
              Is ZENOO committed to sustainable practices? 
              </Box>
              <AccordionIcon color={"#333393"} _expanded={{ color: "red" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Yes, ZENOO places a strong emphasis on sustainability and eco-friendly real estate initiatives and invests in projects that are promoting greener living and sustainable development.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Accordian;