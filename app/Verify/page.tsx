//@ts-nocheck
"use client";

import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
export default function Verify() {
  const [pdfFile, setPdfFile] = useState(null);
  const [publicAddress, setPublicAddress] = useState("");
  async function handalSubmit(e) {
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
  return (
    <>
      <form>
        <VStack w={"100%"} h={"72vh"} justifyContent={"center"} p={2}>
          <InputsTags
            inputType={"text"}
            handalChange={(e) => setPublicAddress(e.target.value)}
          />
          <InputsTags
            inputType={"file"}
            handalChange={(e) => setPdfFile(e.target.files[0])}
          />
          <Button className="nextBtn" type="submit" onClick={handalSubmit}>
            Submit
          </Button>
        </VStack>
      </form>
    </>
  );
}

async function SHA256(str: string) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder("utf-8").encode(str)
  );
  return Array.prototype.map
    .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
    .join("");
}
function InputsTags({ inputType, handalChange, ...props }) {
  return (
    <HStack justifyContent={"center"} w={"100%"}>
      <Input
        type={inputType}
        m={3}
        onChange={handalChange}
        w={"90%"}
        {...props}
      />
    </HStack>
  );
}
