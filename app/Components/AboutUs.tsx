//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Img,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import socalMediaImg from "../Img/socials.svg";
import Image from "next/image";
import { FaNetworkWired } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiFlatPlatform } from "react-icons/gi";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { VscSymbolConstant } from "react-icons/vsc";

export default function AboutUs() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <VStack textAlign={"center"} m={4}>
        <HStack justifyContent={"center"} w={isGraterthen ? "70%" : "100%"}>
          <Box>
            <Heading size={"xl"}>About Us</Heading>
            <Heading color={"#10B981"} size={"lg"}>
              Ensuring Document Integrity: The Vital Role of LEGITLY
            </Heading>
            <Text
              p={3}
              fontSize={"20px"}
              color={"#6B7280"}
            >{`In today's digital age, the authenticity and integrity of documents hold paramount importance. Whether it's legal contracts, academic transcripts, or financial statements, ensuring that PDFs remain unaltered and trustworthy is crucial. Enter LEGITLY, your trusted PDF verification platform, dedicated to providing peace of mind in an era where document tampering and forgery are significant concerns.`}</Text>
          </Box>
        </HStack>
        <Heading size={"lg"}>Why LEGITLY?</Heading>
        <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <Feature
            title={"Uncompromising Verification:"}
            discription={
              "LEGITLY employs advanced algorithms and techniques to meticulously analyze PDF documents. Through thorough scrutiny, it verifies the authenticity of each document, ensuring that it has not been tampered with or altered in any way."
            }
            icon={<FaNetworkWired />}
          />
          <Feature
            title={"Streamlined Process:"}
            discription={
              "With LEGITLY, verifying the authenticity of your PDFs is a breeze. Simply upload your document to the platform, and within moments, receive a comprehensive report detailing its authenticity status. Our user-friendly interface ensures a seamless experience for all users, regardless of technical expertise."
            }
            icon={<FcProcess />}
          />
          <Feature
            title={"Trust and Reliability:"}
            discription={
              "As your go-to platform for PDF verification, LEGITLY prioritizes trust and reliability above all else. We understand the importance of accurate and dependable document verification, and our platform is designed to deliver precisely that."
            }
            icon={<VscWorkspaceTrusted />}
          />
          <Feature
            title={"Versatile Application:"}
            discription={
              " Whether you're a legal professional ensuring the validity of contracts, an academic institution verifying the authenticity of transcripts, or a business safeguarding financial documents, LEGITLY caters to a diverse range of needs. Our platform is adaptable and versatile, catering to various industries and use cases."
            }
            icon={<GiFlatPlatform />}
          />
          <Feature
            title={"Transparent Reporting: "}
            discription={
              "LEGITLY provides transparent and detailed reports for every document verified. Gain insight into the integrity of your PDFs with comprehensive analysis and clear explanations, empowering you to make informed decisions with confidence."
            }
            icon={<HiOutlineCubeTransparent />}
          />
          <Feature
            title={"Constant Innovation:"}
            discription={
              "At LEGITLY, we're committed to staying ahead of the curve. We continuously invest in research and development to enhance our verification techniques, ensuring that our platform remains at the forefront of document integrity technology."
            }
            icon={<VscSymbolConstant />}
          />
        </HStack>
      </VStack>
      <SocalMediaSec />
      {/* Creater Sectrion */}
      <CreaterSec />
    </>
  );
}

function SocalMediaSec() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <VStack
        justifyContent={"center"}
        h={isGraterthen ? "80vh" : "auto"}
        p={3}
        mt={"20px"}
      >
        <HStack p={3} flexWrap={"wrap-reverse"} justifyContent={"center"}>
          <Box
            textAlign={isGraterthen ? "right" : "center"}
            maxW={isGraterthen ? "50%" : "100%"}
            p={3}
          >
            <Heading m={3} size={"3xl"}>
              Our Social Links
            </Heading>
            <Heading m={3} color={"#6B7280"} size={"ld"}>
              We are available on X, LinkedIn, and GitHub. You can connect with
              us to get notification about any new feature we add, any cool
              product we create or get early access of some cool projects !
            </Heading>
            <HStack
              flexWrap={"wrap"}
              justifyContent={isGraterthen ? "right" : "center"}
            >
              <SocalBtn title={"Instagram "} />
              <SocalBtn title={"Linkdin "} />
              <SocalBtn title={"X "} />
              <SocalBtn title={"Github "} />
            </HStack>
          </Box>
          <Box p={2} maxW={isGraterthen ? "40%" : "100%"} rotate={"20%"}>
            <Image width={"100%"} src={socalMediaImg} alt="socal media" />
          </Box>
        </HStack>
      </VStack>
    </>
  );
}

function CreaterSec() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <HStack
        maxW={"100%"}
        textAlign={"center"}
        justifyContent={"center"}
        p={3}
      >
        <VStack
          w={isGraterthen ? "70%" : "100%"}
          h={"70vh"}
          justifyContent={"center"}
        >
          <Heading size={"xl"}>Credits</Heading>
          <Heading size={"md"} color={"#6B7280"}>
            {`We believe in giving credit where it's due. To all the OG creators, we
          see you and #thank you for creating these awesome tools!`}
          </Heading>
          <HStack
            m={4}
            overflow={"auto"}
            w={"100%"}
            justifyContent={isGraterthen ? "center" : "normal"}
          >
            <Creators
              creatorName={"Gaurav Sunthwal"}
              imgSrc={
                "https://gaurav-sunthwal.vercel.app/_next/static/media/me.9e81b52f.jpg"
              }
            />
            <Creators
              creatorName={"Himanshu Gupta"}
              imgSrc={"https://avatars.githubusercontent.com/u/136360912?v=4"}
            />
            <Creators
              creatorName={"Ashish Sharma"}
              imgSrc={
                "https://media.licdn.com/dms/image/D5603AQG5VQjrYFGNbA/profile-displayphoto-shrink_100_100/0/1694855699800?e=1715212800&v=beta&t=wBsIv8CFJXc9fv6JUVvbYC_4plYEcxD_laoKh7wQRMQ"
              }
            />
            <Creators
              creatorName={"Yashraj Narke"}
              imgSrc={
                "https://media.licdn.com/dms/image/D4D03AQHD3eTjtUTN9w/profile-displayphoto-shrink_100_100/0/1694971269043?e=1715212800&v=beta&t=UMgjEJBoVKqdW1WO5Lmt7Kheu78RdU9F15FPJs-h4jQ"
              }
            />
          </HStack>
        </VStack>
      </HStack>
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

function Creators({ imgSrc, creatorName }) {
  return (
    <>
      <VStack m={2} p={3}>
        <Box display={"block"} m={"auto"} h={"120px"} w={"120px"}>
          <Img borderRadius={"50%"} src={imgSrc} alt="img" />
        </Box>
        <Box whiteSpace={"nowrap"}>
          <Heading size={"md"}>{creatorName}</Heading>
        </Box>
      </VStack>
    </>
  );
}

function Feature({ icon, title, discription }) {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Box w={isGraterthen ? "40%" : "100%"}>
        <HStack alignItems={"start"}>
          <Box bg={"#86EFAC"} p={3} mt={4} borderRadius={4}>
            <Heading color={"black"} size={"md"}>
              {icon}
            </Heading>
          </Box>
          <Box textAlign={"left"} m={3}>
            <Heading size={"md"}>{title}</Heading>
            <Text color={"#6B7280"}>{discription}</Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
