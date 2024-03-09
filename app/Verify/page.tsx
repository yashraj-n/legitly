//@ts-nocheck
"use client";

import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import verifyImg from "../Img/verify.png";
export default function Verify() {
  const [isGraterthen] = useMediaQuery("(min-width:600px)");
  function handalSubmit(e) {
    e.preventDefault();
  }
  function handleFileChange() {}
  return (
    <>
      <HStack justifyContent={"space-evenly"} flexWrap={"wrap"}>
        <Box w={isGraterthen ? "50%" : "100%"}>
          <form>
            <Box w={"100%"} p={3} m={3}>
              <Text mb="8px">Enter</Text>
              <Input w={"97%"} />
            </Box>
            <Box p={3} m={3}>
              <Text mb="8px">Choose File</Text>
              <Input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="application/pdf"
                onChange={handleFileChange}
              />
              <Button
                w={"100%"}
                onClick={() => document.getElementById("fileInput").click()}
              >
                Choose File
              </Button>
            </Box>
            <VStack>
              <Button className="nextBtn" type="submit">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        <Box w={isGraterthen ? "40%" : "100%"}>
          <Image src={verifyImg} alt="verifyImg" />
        </Box>
      </HStack>
    </>
  );
}

function InputsTags({ inputType, lable, handalChange }) {
  return (
    <Box w={"100%"} p={3} m={3}>
      <Text mb="8px">{lable}</Text>
      <Input w={"100%"} />
    </Box>
  );
}
