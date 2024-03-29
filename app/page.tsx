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
import AboutUs from "./Components/AboutUs";

export default function Home() {
  const [isGreaterThan] = useMediaQuery("(min-width: 1000px)");
  
  return (
    <>
      <HStack p={3} justifyContent={"center"}>
        <Box>
          <VStack
            p={2}
            justifyContent={"center"}
            h={isGreaterThan ? "80vh" : "auto"}
          >
            <Heading p={1} size={"3xl"} textAlign={"center"}>
              Your Trusted PDF Verification Platform
              <br />
            </Heading>
            <Heading size={"4xl"} color="#10B981">
              LEGITLY
            </Heading>
            <Box w={isGreaterThan ? "80%" : "100%"} p={3}>
              <Text color={"#737373"} textAlign={"center"} size={"25px"}>
                Your go-to platform for verifying PDF authenticity. Ensure your
                documents are genuine and unaltered with ease. Join us today for
                peace of mind.
              </Text>
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

      <AboutUs />
    </>
  );
}
