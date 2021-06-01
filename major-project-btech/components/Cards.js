import { Box, Heading, VStack, Image, Center } from "@chakra-ui/react";

import React from "react";

function Cards(props) {
  return (
    <>
      <Center
        border="solid 1px #e5e5e5"
        borderRadius="2xl"
        maxW="24vw"
        p="8"
        w="24vw"
        h="64"
      >
        <VStack>
          <Image src={props.cardImg} maxW="28" h="24" pb="2" />
          <Heading size="md" color="gray.700">
            {props.cardHeading}
          </Heading>
        </VStack>
      </Center>
    </>
  );
}

export default Cards;
