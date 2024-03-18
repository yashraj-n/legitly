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
import { useState } from "react";
import * as PDFlib from "pdf-lib";
import Image from "next/image";
import uploadImg from "../Img/uplode.png";
import { SHA256 } from "@/utils";

enum IProgressState {
  Uploaded,
  Reading,
  Hashing,
  Signing,
  Done,
  None,
}

export default function Sign() {
  const [progressState, setProgressState] = useState<IProgressState>(
    IProgressState.None
  );
  // handling file changes
  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    //Checking if file is pdf
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file");
      return;
    }
    //@ts-ignore
    if (!ethereum) {
      alert("Please install metamask");
      return;
    }
    setProgressState(IProgressState.Reading);

    var pdfBuffer;
    const reader = new FileReader();

    reader.onload = async (e) => {
      //@ts-ignore
      const pdfToText = (await import("react-pdftotext")).default;

      pdfBuffer = e.target!.result;
      const text = await pdfToText(file);
      console.log(text);

      setProgressState(IProgressState.Hashing);

      //Creating hash of the file
      var sha = await SHA256(text);
      console.log("Hash of File: ", sha);

      //Signing the hash
      const signature = await web3Sign(sha);
      setProgressState(IProgressState.Signing);

      // Adding signature to the metadata of the pdf
      const pdfDoc = await PDFlib.PDFDocument.load(pdfBuffer as ArrayBuffer);
      console.log("PDF Loaded");
      //
      pdfDoc
        //@ts-ignore
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
  const [isGraterthen] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <HStack
        mt={isGraterthen ? "0" : 20}
        justifyContent={"space-evenly"}
        flexWrap={"wrap-reverse"}
      >
        <Box w={isGraterthen ? "40%" : "100%"}>
          <Image src={uploadImg} alt="uplode" />
        </Box>
        <Box w={isGraterthen ? "50%" : "100%"}>
          {/* @ts-ignore */}
          <font>
            <VStack
              w={"100%"}
              h={isGraterthen ? "auto" : "auto"}
              justifyContent={"center"}
            >
              <Box w={"100%"}>
                <Text fontSize={"20px"} p={3}>
                  Uplode PDF:
                </Text>
                <Box w={"100%"} p={3}>
                  <Input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                  <Button
                    w={"100%"}
                    onClick={() =>
                      document.getElementById("fileInput")!.click()
                    }
                  >
                    Choose File
                  </Button>
                  <Text p={2}>
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
                  </Text>
                </Box>
              </Box>
            </VStack>
                      {/* @ts-ignore */}

          </font>
        </Box>
      </HStack>
    </>
  );
}

async function web3Sign(content: string) {
  console.log("Requesting Eth acc");
  //@ts-ignore
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  console.log("Acc: ", account);
  console.log("Web3 COntent: ", content);
  console.log("Signing");
  //@ts-ignore
  const signature = await ethereum.request({
    method: "personal_sign",
    params: [`SHA256:${content}`, account, true],
  });
  console.log("Signature: ", signature);
  return signature;
}
