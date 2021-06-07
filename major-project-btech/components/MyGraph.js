import { Container } from "@chakra-ui/react";
import React from "react";
import MyData from "../MyData";

function MyGraph() {
  return (
    <>
      <Container maxW="continer.md" w="full" pt="12">
        <MyData />
      </Container>
    </>
  );
}

export default MyGraph;
