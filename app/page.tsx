//@ts-nocheck
"use client";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
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
            <Heading size={"3xl"} textAlign={"center"}>
              Your Trusted PDF Verification Platform
              <br />
            </Heading>
            <Heading size={"4xl"} color="#10B981">
              LEGITLY
            </Heading>
            <Box w={"80%"} p={3}>
              <Heading color={"#737373"} textAlign={"center"} size={"md"}>
                Your go-to platform for verifying PDF authenticity. Ensure your
                documents are genuine and unaltered with ease. Join us today for
                peace of mind.
              </Heading>
            </Box>
            <VStack>
              <Link href={"/Verify"}>
                <Button
                  bg={"#10B981"}
                  _hover={{
                    backgroundColor: "#10B990",
                  }}
                  p={23}
                  m={3}
                >
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
        <Box w={"90%"} display={"block"} margin={"auto"}>
            {/* <Image
              src="https://www.splashgain.com/wp-content/uploads/2023/10/academic-document-verification-2.webp"
              alt="img"
            /> */}
        </Box>
      </VStack>
    </>
  );
}
