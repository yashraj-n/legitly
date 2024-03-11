//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import bmc from "../Img/bmc.svg";
import logo from "../Img/logo.png";


export default function Navbar() {
  const [openMenu, setOpenManu] = useState(false);
  function handelManu() {
    openMenu === true
      ? setOpenManu(false)
      : openMenu === false
      ? setOpenManu(true)
      : "";
  }
  const [isGraterthen] = useMediaQuery("(min-width: 700px)");
  return (
    <Box position={"fixed"} w={"100%"} bg={"#171717"} p={3} zIndex={4}>
      <HStack justifyContent={"space-between"}>
        <Box className="logo" p={1}>
          <Link href={"/"}>
            <Heading size={"lg"}>LEGITLY</Heading>
          </Link>
        </Box>
        {isGraterthen ? (
          <Box>
            <HStack>
              <Menu link={"/"} title={"Home"} />
              <Menu link={"/Verify"} title={"Verify"} />
              <Menu link={"/Sign"} title={"Sign"} />
              {/* <Button
                p={5}
                className="nextBtn"
                borderRadius={"30px"}
                bg={"purple"}
              >
                <HStack>
                  <Box w={"20px"}>
                    <Image src={bmc} alt="coffee" />
                  </Box>
                  <Heading size={"md"}>Donate Us</Heading>
                </HStack>
              </Button> */}
            </HStack>
          </Box>
        ) : (
          <Box onClick={handelManu}>
            <Heading p={2}>
              <GrMenu />
            </Heading>
          </Box>
        )}
      </HStack>
      {openMenu === true ? (
        <Box>
          <VStack>
            <Menu link={"/"} title={"Home"} />
            <Menu link={"/Verify"} title={"Verify"} />
            <Menu link={"/Sign"} title={"Sign"} />
          </VStack>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

function Menu({ link, title }) {
  return (
    <>
      <Box p={2} ml={2} mr={2}>
        <Link href={link}>
          <Text fontSize={"25px"}>{title}</Text>
        </Link>
      </Box>
    </>
  );
}
