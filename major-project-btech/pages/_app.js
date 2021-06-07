import React from "react";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <ColorModeScript initialColorMode="dark" />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
