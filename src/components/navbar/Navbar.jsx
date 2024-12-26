import {
  Flex,
  // useDisclosure,
  // Icon,
  Box,
  Image,
  HStack,
  IconButton,
  Text,
  Divider,
} from "@chakra-ui/react";

// Icons
// import { HiViewGrid } from "react-icons/hi";
import { FaGoogle, FaPhoneAlt } from "react-icons/fa";

// Images
import logoLightTransparent from "../../assets/logo-light-transparent.png";

const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="absolute" top={0} left={0} right={0} zIndex={100}>
      <Box maxWidth="1280px" margin="20px auto" padding="0 16px">
        <Flex align="center" justify="space-between">
          {/* <Icon
            as={HiViewGrid}
            boxSize={{ base: "32px" }}
            display={{ base: "block", lg: "none" }}
            color="brand.black"
            variant="ghost"
            aria-label="Menu"
            cursor="pointer"
            onClick={() => {
              onOpen();
            }}
          /> */}
          <Image
            height={["36px", "48px", "54px"]}
            objectFit="cover"
            src={logoLightTransparent}
            alt="logo"
          />
          {/* <HStack
            spacing={8}
            color="brand.black"
            fontFamily={`'Lato', sans-serif`}
            display={{ base: "none", lg: "flex" }}
          >
            <Link href="#batteryService">Jump Start</Link>
            <Link href="#carLockouts">Car lockouts</Link>
            <Link href="#fuelDelivery">Fuel delivery</Link>
            <Link href="#tireChange">Tire change</Link>
          </HStack> */}
          <HStack spacing={4} zIndex={2}>
            <HStack
              color="brand.black"
              as="a"
              href="tel:+1 (224) 247-7833"
              _hover={{
                textDecoration: "underline",
              }}
              cursor="pointer"
            >
              <FaPhoneAlt fontSize="20px" />
              <Text
                fontSize={{ md: "18px", lg: "16px" }}
                display={{ base: "none", md: "flex" }}
              >
                +1 (224) 247-7833
              </Text>
            </HStack>
            <Divider
              orientation="vertical"
              height="24px"
              borderColor="brand.black"
            />
            <IconButton
              color="brand.black"
              as="a"
              href="https://maps.app.goo.gl/sBbVTja6nGYN82M26"
              aria-label="Google"
              icon={<FaGoogle />}
              fontSize="20px"
              variant="ghost"
              colorScheme="whiteAlpha"
              size="auto"
            />
          </HStack>
        </Flex>
        {/* <Sidebar isOpen={isOpen} onClose={onClose} /> */}
      </Box>
    </Box>
  );
};

export default Navbar;
