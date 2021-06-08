import { Box, Heading, VStack, Image, Center } from "@chakra-ui/react";

import React from "react";

function Cards(props) {
  return (
    <>
      <Center
        border="solid 1px #171923"
        borderRadius="2xl"
        p="8"
        w="full"
        h="64"
        bg="gray.700"
      >
        <VStack>
          <Image
            src={props.cardImg}
            maxW="28"
            h="24"
            pb="2"
            alt={props.imgAlt}
          />
          <Heading size="md" color="gray.100">
            {props.cardHeading}
          </Heading>
        </VStack>
      </Center>
    </>
  );
}

export default Cards;
