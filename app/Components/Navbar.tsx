//@ts-nocheck
"use client";

import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import bmc from "../Img/bmc.svg";
import logo from "../Img/logo.png";
import { motion } from "framer-motion";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            </HStack>
          </Box>
        ) : (
          <Box onClick={onOpen}>
            <Heading p={2} onClick={handelManu}>
              <GrMenu />
            </Heading>
          </Box>
        )}
      </HStack>
      {openMenu === true ? (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          {/* <ModalOverlay /> */}
          <ModalContent mt={"18%"} bg={"#171717"} color={"white"} w={"100%"}>
            <Menu link={"/"} title={"Home"} />
            <Menu link={"/Verify"} title={"Verify"} />
            <Menu link={"/Sign"} title={"Sign"} />
          </ModalContent>
        </Modal>
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
