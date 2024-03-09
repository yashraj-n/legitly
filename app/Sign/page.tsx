//@ts-nocheck
"use client";

import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Sign() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // You can perform additional actions with the file here, such as uploading it to a server.
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
                ? `Selected File: ${selectedFile.name}`
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
