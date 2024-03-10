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
import { FaGithub, FaNetworkWired } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiFlatPlatform } from "react-icons/gi";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { VscSymbolConstant } from "react-icons/vsc";

// creaters img
import himanshu from "../Img/Creater/himanshu.jpeg";
import yashraj from "../Img/Creater/yeshraj.png";
import gaurav from "../Img/Creater/gaurav.jpg";
import ashish from "../Img/Creater/Ashish.jpeg";

import Link from "next/link";

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
        <Heading size={"lg"} p={2}>
          Why LEGITLY?
        </Heading>
        <HStack mt={2} flexWrap={"wrap"} justifyContent={"space-evenly"}>
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
      <CreaterSec />
    </>
  );
}

function SocalMediaSec() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <VStack h={isGraterthen ? "60vh" : "auto"} justifyContent={"center"}>
        <HStack
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          // alignItems={"start"}
        >
          <Box textAlign={"center"}>
            <Heading
              fontSize={isGraterthen ? "400px" : "200px"}
              color={"#86EFAC"}
            >
              <FaGithub />
            </Heading>
          </Box>
          <Box p={2} m={3} w={isGraterthen ? "50%" : "100%"}>
            <Heading
              color={"#86EFAC"}
              size={"4xl"}
            >{`We're Open Source`}</Heading>
            <Text
              p={3}
              color={"#6B7280"}
              fontSize={"20px"}
            >{`Yes you heard right, this website is open source and you can find code of this website on GitHub. You can request a feature, contribute to project by adding feedbacks and mentioning bugs if they exist. `}</Text>
            <Link href={"/"}>
              <Button m={3} className="nextBtn">
                Visit GitHub{" "}
              </Button>
            </Link>
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
              githubProfile={"gaurav-sunthwal"}
              creatorName={"Gaurav Sunthwal"}
              imgSrc={gaurav}
            />
            <Creators
              githubProfile={"hmshuv"}
              creatorName={"Himanshu Gupta"}
              imgSrc={himanshu}
            />
            <Creators
              githubProfile={"ASHISH9925"}
              creatorName={"Ashish Sharma"}
              imgSrc={ashish}
            />
            <Creators
              githubProfile={"yashraj-n"}
              creatorName={"Yashraj Narke"}
              imgSrc={yashraj}
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

function Creators({ imgSrc, creatorName, githubProfile }) {
  return (
    <>
      <Link href={`https://github.com/${githubProfile}`} target="blank">
        <VStack m={2} p={3}>
          <Box
            display={"block"}
            m={"auto"}
            h={"120px"}
            w={"120px"}
            borderRadius={"50%"}
          >
            <Image
              style={{
                borderRadius: "50%",
              }}
              src={imgSrc}
              alt="img"
            />
          </Box>
          <Box whiteSpace={"nowrap"}>
            <Heading size={"md"}>{creatorName}</Heading>
          </Box>
        </VStack>
      </Link>
    </>
  );
}

function Feature({ icon, title, discription }) {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Box
        w={isGraterthen ? "40%" : "100%"}
        h={isGraterthen ? "200px" : "auto"}
      >
        <HStack alignItems={"start"}>
          <Box bg={"#86EFAC"} p={2} mt={4} borderRadius={4}>
            <Heading color={"black"} size={"lg"}>
              {icon}
            </Heading>
          </Box>
          <Box textAlign={"left"} m={3}>
            <Heading size={"md"} p={1}>
              {title}
            </Heading>
            <Text p={1} color={"#6B7280"}>
              {discription}
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
