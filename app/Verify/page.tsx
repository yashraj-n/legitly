"use client";
import toast, { Toaster } from "react-hot-toast";
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
import { MouseEventHandler, useState } from "react";
import * as PDFlib from "pdf-lib";
import { verifyMessage } from "ethers";
import { SHA256 } from "@/utils";

export default function Verify() {
  const [pdfFile, setPdfFile] = useState(null);
  const [publicAddress, setPublicAddress] = useState("");

  const [_, setIsValid] = useState(false);
  const [invalidError, setInvalidError] = useState("");

  function handleSubmit(e : MouseEventHandler<HTMLButtonElement>) {
    invalidError !== "" ? toast.error("Something went wrong") : "";
    //@ts-ignore
    e.preventDefault();

    if (!pdfFile) {
      toast("Please Select File", {
        icon: "🙏🏻",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (publicAddress.length < 4) {
      toast.error("Please enter a valid public address");
      return;
    }

    let tempPublicAddress = publicAddress;

    //Appending 0x if not present
    if (!tempPublicAddress.startsWith("0x")) {
      tempPublicAddress = "0x" + tempPublicAddress;
    }

    //Lowercasing the public address
    tempPublicAddress = tempPublicAddress.toLowerCase();

    console.log("[State]: ", pdfFile, tempPublicAddress);
    console.log("[Status]: Init");

    const reader = new FileReader();
    reader.onload = async function () {
      console.log("[Status]: Reading");

      // Dynamically importing cuz its causing issues when importing at the top
      //@ts-ignore
      const pdfToText = (await import("react-pdftotext")).default;
      const text = await pdfToText(pdfFile);
      console.log("[Text]: ", text);

      //Checking Headers
      console.log("[Status]: Checking Headers");
      const pdfDoc = await PDFlib.PDFDocument.load(reader.result as string);

      console.log("[Status]: PDF Loaded");
      try {
        var signatureHeader = pdfDoc
          //@ts-ignore
          .getInfoDict() // using ts-ignore because of the missing type definition
          .get(PDFlib.PDFName.of("signature")).value;
        console.log("[Signature Header]: ", signatureHeader);
      } catch (e) {
        setIsValid(false);
        setInvalidError("Something went wrong while reading the PDF headers");
        return;
      }

      if (!signatureHeader) {
        console.log("[Status]: No Signature Found");
        setInvalidError("[ERR_NO_METASIGN] PDF Not Signed");
        setIsValid(false);
        return;
      }

      const sha = await SHA256(text);
      console.log("[SHA] Sha256", sha);

      //Verifying Signature
      console.log("[Status]: Verifying Signature");
      const isValid = await verifySignature(
        signatureHeader,
        tempPublicAddress,
        sha
      );
      console.log("[Status]: Signature Verified");

      console.log("[Result]: ", isValid);
      isValid === true
        ? toast.success("Verified")
        : toast.error("Invalid Signature");
      setIsValid(isValid);
      setInvalidError(isValid ? "" : "Invalid Signature");
    };
    reader.readAsDataURL(pdfFile);
  }

  const [isGraterthen] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Toaster />
      <HStack justifyContent={"space-evenly"} flexWrap={"wrap"}>
        <Box w={isGraterthen ? "50%" : "90%"}>
          <form>
            <Box w={"100%"} p={3} m={3}>
              <Text mb="8px">Public Address</Text>
              <Input
                placeholder="0xB7566293139...."
                w={"97%"}
                onChange={(e) => setPublicAddress(e.target.value)}
              />
            </Box>
            <Box p={3} m={3}>
              <Text mb="8px">Choose File</Text>
              <Input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="application/pdf"
                // @ts-ignore
                onChange={(e) => setPdfFile(e.target.files[0])}
              />
              <Button
                w={"100%"}
                onClick={() => {
                  document.getElementById("fileInput")!.click();
                }}
              >
                Choose File
              </Button>
            </Box>
            <VStack>
              {/* @ts-ignore */}
              <Button className="nextBtn" onClick={handleSubmit} type="submit">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        <Box w={isGraterthen ? "40%" : "90%"}>
          <Image src={verifyImg} alt="verifyImg" />
        </Box>
      </HStack>
    </>
  );
}



async function verifySignature(signature: string, publicKey: string, hash : string) {
  hash = `SHA256:${hash}`;
  console.log("hash: ", hash);
  const signerAddress = verifyMessage(hash, signature);
  console.log("[verifySignature] Got Signer: ", signerAddress);
  return signerAddress.toLowerCase() === publicKey.toLowerCase();
}
