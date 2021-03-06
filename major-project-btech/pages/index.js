import {
  Container,
  Grid,
  Center,
  SimpleGrid,
  GridItem,
  HStack,
  VStack,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import MyGraph from "../components/MyGraph";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Major Project BTech</title>
        <meta name="description" content="Major Project by Aayush & Sahil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container
        maxW="continer.md"
        w="86vw"
        pt="12"
        alignItems="center"
        textAlign="center"
      >
        <Heading pb="8" size="2xl">
          Graph
        </Heading>
        <MyGraph />

        <Heading pt="24" pb="8">
          How it Works?
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="4">
          <Cards
            cardHeading="Web Scrapping"
            cardImg="/webscrap.svg"
            imgAlt="web scrapping"
          />

          <Cards
            cardHeading="Feature Engineering"
            cardImg="/engg.svg"
            imgAlt="feature engineering"
          />

          <Cards
            cardHeading="Tensorization"
            cardImg="/tensorflow.svg"
            imgAlt="tensorization"
          />

          <Cards
            cardHeading="Model GRU"
            cardImg="/gru.svg"
            imgAlt="GRU model"
          />

          <Cards
            cardHeading="Hyper Parameter Tunings"
            cardImg="/tuning.svg"
            imgAlt="hyper parameter tuning"
          />

          <Cards cardHeading="Deploy" cardImg="/deploy.svg" imgAlt="deploy" />
        </SimpleGrid>

        <Center py="12">
          <Text fontSize="md" color="gray.500">
            Made by Sahil & Aayush
          </Text>
        </Center>
      </Container>
    </>
  );
}
