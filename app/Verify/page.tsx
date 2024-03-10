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
  function handalSubmit(e) {
    e.preventDefault();
    if (!pdfFile) {
      alert("Please select a file");
      return;
    }

    if (publicAddress.length < 4) {
      alert("Please enter a valid public address");
      return;
    }

    console.log("[State]: ", pdfFile, publicAddress);
    console.log("[Status]: Init");

    const reader = new FileReader();
    var b64;
    reader.onload = async function () {
      b64 = reader.result;
      console.log("[FileReader]: Reading file complete");
      console.log("[B64]: ", b64);

      console.log("[Status]: Reading file");
      console.log("[Recheck] First 100 bytes of base64: ", b64.slice(0, 100));
      const sha = await SHA256(b64);
      console.log("[Status]: SHA256 complete");
      console.log("[SHA256]: ", sha);
    };
    reader.readAsDataURL(pdfFile);

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
              <Button className="nextBtn" onClick={handalSubmit} type="submit">
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

function InputsTags({ inputType, handalChange }) {
  return (
    <Box w={"100%"} p={3} m={3}>
      <Text mb="8px">{lable}</Text>
      <Input w={"100%"} />
    </Box>
  );
}
