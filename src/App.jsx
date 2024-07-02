import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";

// Components import
import Navbar from "./components/navbar/Navbar";

// Sections import
import Hero from "./pages/sections/Hero";
import Services from "./pages/sections/Services";
import Contact from "./pages/sections/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" width="100%" overflowX="hidden">
        <Navbar />
        <Box
          maxWidth="1280px"
          margin="0 auto"
          padding={{ base: "16px", sm: "24px" }}
        >
          <Hero />
          <Services />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
