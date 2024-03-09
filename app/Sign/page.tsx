//@ts-nocheck
"use client";

import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import * as PDFlib from "pdf-lib";

enum IProgressState {
  Uploaded,
  Reading,
  Hashing,
  Signing,
  Done,
  None,
}

export default function Sign() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progressState, setProgressState] = useState<IProgressState>(
    IProgressState.None
  );
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    //Checking if file is pdf
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file");
      return;
    }

    setSelectedFile(file);
    setProgressState(IProgressState.Reading);

    //Getting b64 of file
    const reader = new FileReader();
    var b64;
    reader.onload = function () {
      b64 = reader.result;
    };
    reader.readAsDataURL(file);
    setProgressState(IProgressState.Hashing);
    //Creating hash of the file
    var sha = await SHA256(b64);
    console.log("Hash of File: ", sha);
    const signature = await web3Sign(sha);
    if (!b64) {
      alert("Error in reading file [B64_UNDEFINED]");
      return;
    }
    setProgressState(IProgressState.Signing);

    const pdfDoc = await PDFlib.PDFDocument.load(b64);
    console.log("PDF Loaded");
    pdfDoc
      .getInfoDict()
      .set(PDFlib.PDFName.of("signature"), PDFlib.PDFString.of(signature));
    console.log("Wrote into metadata");
    const pdfBytes = await pdfDoc.save();
    console.log("PDF Saved");
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    console.log("Blob Created");
    const formData = new FormData();
    formData.append("file", blob);
    console.log("Form Data Created");

    setProgressState(IProgressState.Uploaded);

    // downloading the file
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "signed.pdf";
    a.click();
    window.URL.revokeObjectURL(a.href);
    setProgressState(IProgressState.Done);
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
              accept="application/pdf"
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

async function SHA256(str: string) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder("utf-8").encode(str)
  );
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
