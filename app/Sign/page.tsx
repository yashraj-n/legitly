//@ts-nocheck
"use client";

import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

enum IProgressState {
  Uploaded,
  Reading,
  Hashing,
  Signing,
  Done,
  None
}

export default function Sign() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progressState, setProgressState] = useState<IProgressState>(IProgressState.None);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    //Checking if file is pdf
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file");
      return;
    }
    setSelectedFile(file);
    // You can perform additional actions with the file here, such as uploading it to a server.
    console.log(file);

    //Getting b64 of file
    const reader = new FileReader();
    var b64;
    reader.onload = function () {
      b64 = reader.result;
    };
    reader.readAsDataURL(file);
    var sha = await sha512(b64);
    console.log("SHA512: ",sha);
    await web3Sign(sha);
  };
  return (
    <>
      <font>
        <VStack h={"75vh"} justifyContent={"center"}>
          <Box>
            <Input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              onClick={() => document.getElementById("fileInput").click()}
            >
              Choose File
            </Button>
            <p>
              {selectedFile
                ? `Signing: ${selectedFile.name}`
                : "No file selected"}
            </p>
          </Box>
        </VStack>
      </font>
    </>
  );
}

function InputsTags({ inputType, handalChange }) {
  return (
    <HStack justifyContent={"center"} w={"100%"}>
      <Input type={inputType} m={3} onChange={handalChange} w={"90%"} />
    </HStack>
  );
}

async function sha512(str: string) {
  const buf = await crypto.subtle
    .digest("SHA-256", new TextEncoder("utf-8").encode(str));
  return Array.prototype.map
    .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
    .join("");
}

async function web3Sign(content) {
  console.log("Requesting Eth acc");
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  console.log("Acc: ", account);
  console.log("Signing");
  const signature = await ethereum.request({
    method: "personal_sign",
    params: [content, account],
  });
  console.log("Signature: ", signature);
  return signature;
}
