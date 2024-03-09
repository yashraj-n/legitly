//@ts-nocheck
"use client";

import { Box, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <HStack
        bg={"#171717"}
        p={3}
        justifyContent={"space-between"}
        position={"sticky"}
      >
        <Box>
          <Link href={"/"}>
            <Heading size={"md"}>LEGITLY</Heading>
          </Link>
        </Box>
        <Box>
          <HStack>
            <Menu link={"/About"} title={"About"} />
            <Menu link={"/Verify"} title={"Verify"} />
            <Menu link={"/Sign"} title={"Sign"} />
          </HStack>
        </Box>
      </HStack>
    </>
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
