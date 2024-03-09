//@ts-nocheck
"use client";

import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react";

export default function Verify() {
  function handalSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form>
        <VStack w={"100%"} h={"72vh"} justifyContent={"center"} p={2}>
          <InputsTags inputType={"text"} />
          <InputsTags inputType={"file"} />
          <Button className="nextBtn" type="submit" onClick={handalSubmit}>
            Submit
          </Button>
        </VStack>
      </form>
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
