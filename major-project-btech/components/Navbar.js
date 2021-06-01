import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box boxShadow="md" p="10">
      <HStack>
        <Heading size="md" color="gray.700">
          Stock Market Analysis
        </Heading>
      </HStack>
    </Box>
  );
}

export default Navbar;
