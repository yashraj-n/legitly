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


import AboutUs from "./Components/AboutUs";
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
            </VStack>
          </VStack>
        </Box>
      </HStack>

      <AboutUs/>
    </>
  );
}
