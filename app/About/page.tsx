//@ts-nocheck
"use client";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import aboutUsImg from "../Img/aboutUs.png";
import Image from "next/image";
export default function About() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <VStack>
        <Image src={aboutUsImg} alt="aboutUs" />
        <Box p={3} textAlign={"center"}>
          <Heading size={"3xl"}>About Us</Heading>
          <Text
            p={3}
            color={"#6B7280"}
            size={"12px"}
          >{`In today's digital age, the authenticity and integrity of documents hold paramount importance. Whether it's legal contracts, academic transcripts, or financial statements, ensuring that PDFs remain unaltered and trustworthy is crucial. Enter LEGITLY, your trusted PDF verification platform, dedicated to providing peace of mind in an era where document tampering and forgery are significant concerns.`}</Text>
        </Box>
      </VStack>
      {/* <HStack color={"#6B7280"} p={3}>
        <Box>
          <Heading>Frequently-asked questions</Heading>
        </Box>
        <Box></Box>
      </HStack> */}
    </>
  );
}

function SocalBtn({ title }) {
  return (
    <>
      <Box>
        <Button className="nextBtn" bg={"#10B981"} m={3}>
          {title}
        </Button>
      </Box>
    </>
  );
}
