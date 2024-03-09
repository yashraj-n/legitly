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
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { BiLink } from "react-icons/bi";

import socalMediaImg from "./Img/socials.svg";
import Image from "next/image";
export default function Home() {
  const [isGraterthen] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <HStack p={3} justifyContent={"center"}>
        <Box>
          <VStack
            p={2}
            justifyContent={"center"}
            h={isGraterthen ? "80vh" : "auto"}
          >
            <Heading p={1} size={"3xl"} textAlign={"center"}>
              Your Trusted PDF Verification Platform
              <br />
            </Heading>
            <Heading size={"4xl"} color="#10B981">
              LEGITLY
            </Heading>
            <Box w={isGraterthen ? "80%" : "100%"} p={3}>
              <Heading color={"#737373"} textAlign={"center"} size={"md"}>
                Your go-to platform for verifying PDF authenticity. Ensure your
                documents are genuine and unaltered with ease. Join us today for
                peace of mind.
              </Heading>
            </Box>
            <VStack>
              <Link href={"/Verify"}>
                <Button className="nextBtn" p={23} m={3}>
                  Verify
                </Button>
              </Link>
              <Button
                bg={"transparent"}
                color={"#737373"}
                border={"1px solid"}
                _hover={{
                  background: "transparent",
                }}
              >
                <HStack>
                  <Box>
                    <CiHeart />
                  </Box>
                  <Box>
                    <Text>Sponsor</Text>
                  </Box>
                </HStack>
              </Button>
            </VStack>
          </VStack>
        </Box>
      </HStack>
      <VStack justifyContent={"center"} p={3} mt={"20px"}>
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

/*
Our Social Links

We are available on X, LinkedIn, and GitHub. You can connect with us to get notification about any new feature we add, any cool product we create or get early access of some cool projects !

LinkedIn 
X 
GitHub 
Instagram 


*/
