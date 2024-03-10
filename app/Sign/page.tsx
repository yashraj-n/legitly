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
  const [_, setSelectedFile] = useState(null);
  const [progressState, setProgressState] = useState<IProgressState>(
    IProgressState.None
  );
  // handling file changes
  const handleFileChange = async (event) => {
    const pdfToText = await import("react-pdftotext");

    const file = event.target.files[0];
    //Checking if file is pdf
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file");
      return;
    }

    if (!ethereum) {
      alert("Please install metamask");
      return;
    }

    setSelectedFile(file);
    setProgressState(IProgressState.Reading);

    var pdfBuffer;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const pdfToText = (await import("react-pdftotext")).default;
      pdfBuffer = e.target.result;
      const text = await pdfToText(file);
      console.log(text);
      const b64 = Buffer.from(pdfBuffer).toString("base64");
      console.log("B64: ", b64);

      setProgressState(IProgressState.Hashing);
      //Creating hash of the file
      var sha = await SHA256(text);
      console.log("Hash of File: ", sha);

      //Signing the hash
      const signature = await web3Sign(sha);

      setProgressState(IProgressState.Signing);

      // Adding signature to the metadata of the pdf
      const pdfDoc = await PDFlib.PDFDocument.load(b64);
      console.log("PDF Loaded");
      pdfDoc
        .getInfoDict()
        .set(PDFlib.PDFName.of("signature"), PDFlib.PDFString.of(signature));

      console.log("Wrote into metadata");
      // Saving the pdf
      const pdfBytes = await pdfDoc.save();
      console.log("PDF Saved");
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      console.log("Blob Created");
      setProgressState(IProgressState.Uploaded);

      // downloading the file
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "signed.pdf";
      a.click();
      window.URL.revokeObjectURL(a.href);
      setProgressState(IProgressState.Done);
    };
    reader.readAsArrayBuffer(file);
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
              {progressState === IProgressState.Uploaded
                ? "File Uploaded"
                : progressState === IProgressState.Reading
                ? "Reading your PDF"
                : progressState === IProgressState.Hashing
                ? "Hashing your PDF"
                : progressState === IProgressState.Signing
                ? "Signing your PDF"
                : progressState === IProgressState.Done
                ? "Completed!!"
                : ""}
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
