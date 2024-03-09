//@ts-nocheck
"use client";

import { Box, HStack, Heading, VStack, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";

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
    <Box position={"fixed"} w={"100%"} bg={"#171717"} p={3}>
      <HStack justifyContent={"space-between"}>
        <Box className="logo">
          <Link href={"/"}>
            <Heading size={"xl"}>legitly</Heading>
          </Link>
        </Box>
        {isGraterthen ? (
          <Box>
            <HStack>
              <Menu link={"/About"} title={"About"} />
              <Menu link={"/Verify"} title={"Verify"} />
              <Menu link={"/Sign"} title={"Sign"} />
            </HStack>
          </Box>
        ) : (
          <Box onClick={handelManu}>
            <Heading>
              <GrMenu />
            </Heading>
          </Box>
        )}
      </HStack>
      {openMenu === true ? (
        <Box>
          <VStack>
            <Menu link={"/About"} title={"About"} />
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
      <Box p={2} ml={2}>
        <Link href={link}>
          <Heading size={"md"}>{title}</Heading>
        </Link>
      </Box>
    </>
  );
}
