//@ts-nocheck
"use client";

import {
  Box,
  CardFooter,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function PageFooter({}) {
  return (
    <>
      <HStack justifyContent={"center"} bg={"#171717"} color={"wheat"}>
        <VStack h={"20vh"} justifyContent={"center"}>
          <HStack>
            <SocalHandals link={""} icon={<FaInstagram />} />
            <SocalHandals link={""} icon={<FaXTwitter />} />
            <SocalHandals link={""} icon={<FaLinkedin />} />
            <SocalHandals link={""} icon={<FaGithub />} />
          </HStack>
          <HStack
            fontSize={"20px"}
            _hover={{
              color: "white",
            }}
          >
            <Box>
              <FaMailBulk />
            </Box>
            <Box>
              <Link href={"mailto : xyz@gmail.com"}>
                <Text>xyz@gmail.com</Text>
              </Link>
            </Box>
          </HStack>
          <Box>
            <Text>{`</> & Crafted with 💛 Beyond Bytes`}</Text>
          </Box>
        </VStack>
      </HStack>
    </>
  );
}

function SocalHandals({ link, icon }) {
  return (
    <>
      <Box m={1}>
        <Link href={link}>
          <Heading fontSize={"25px"}>{icon}</Heading>
        </Link>
      </Box>
    </>
  );
}
