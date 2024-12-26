import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

// Icons
import { FaCarCrash } from "react-icons/fa";

// Image import
import vectorCircle from "../../assets/vectorCircle.png";
import illustration from "../../assets/illustrationBlack.png";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const Hero = () => {
  return (
    <Box
      as="section"
      id="hero"
      color="brand.black"
      height={{ base: "100vh", sm: "100%", md: "100vh" }}
      marginTop={{ base: "unset", sm: "40%", md: "unset" }}
      display="flex"
      flexDirection={{ base: "column", md: "row", lg: "row", xl: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={10}
      width="full"
    >
      <Image
        zIndex={-1}
        top={{ base: "-3%", md: "-5%" }}
        right={{ base: "-15%", md: "-5%" }}
        position="absolute"
        boxSize={{ base: "200px", sm: "250px", md: "300px" }}
        src={vectorCircle}
        alt="vectorCircle"
        willChange="transform"
      />
      <MotionVStack
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        spacing={{ base: 3, lg: 5 }}
        align="start"
        flex="1"
        w="full"
        justifyContent={{
          base: "flex-end",
          md: "flex-end",
          lg: "center",
          xl: "center",
        }}
        willChange="opacity, transform"
      >
        <Text as="h1" textStyle="h1" textAlign="left" whiteSpace="nowrap">
          Get back on track{" "}
          <Box
            as="span"
            borderBottom={{
              base: "10px solid #E29E1E",
              md: "15px solid #E29E1E",
              lg: "20px solid #E29E1E",
            }}
            display="inline-block"
            whiteSpace="normal"
            lineHeight="70%"
          >
            swiftly
          </Box>
          <br />
          with AMS Road Service
        </Text>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button
              _hover={{ background: "brand.yellow", transform: "scale(1.05)" }}
              transition="all 0.3s ease-in-out"
              background="brand.yellow"
              color="brand.black"
              colorScheme="unset"
              size={{ base: "md", lg: "lg" }}
              leftIcon={<FaCarCrash />}
            >
              Get Assistance
            </Button>
          </ScrollLink>
        </MotionBox>
      </MotionVStack>

      <MotionBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex="1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        willChange="opacity, transform"
      >
        <Image
          src={illustration}
          alt="illustration"
          style={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </MotionBox>
    </Box>
  );
};

export default Hero;
