import {
  Box,
  HStack,
  IconButton,
  Divider,
  Image,
  Icon,
  Text,
} from "@chakra-ui/react";

// Icons
import { FaGoogle, FaMapMarkerAlt } from "react-icons/fa";

// Images
import logoDarkTransparent from "../../assets/logo-dark-transparent.png";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      py={4}
      backgroundColor="brand.black"
      color="brand.gray"
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1280px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        spacing={8}
      >
        <HStack spacing={4}>
          <Image
            height={["36px", "48px", "54px"]}
            objectFit="cover"
            src={logoDarkTransparent}
            alt="logo"
          />
          <Text fontSize={{ base: "14px", xl: "16px" }}>
            Part of Nonimilogistics.INC
          </Text>
        </HStack>
        <HStack spacing={4}>
          <HStack
            spacing={2}
            as="a"
            href="https://maps.app.goo.gl/CGbg3oWkyQmFTr5i6"
            _hover={{
              textDecoration: "underline",
            }}
            cursor="pointer"
          >
            <Icon as={FaMapMarkerAlt} fontSize="20px" />
            <Text
              fontSize={{ base: "14px", xl: "16px" }}
              display={{ base: "none", md: "block" }}
            >
              906 W Alleghany Dr - Arlington Heights
            </Text>
          </HStack>
          <Divider
            orientation="vertical"
            height="24px"
            borderColor="brand.gray"
            gap={{ base: 2, md: 4 }}
          />
          <IconButton
            as="a"
            href="https://maps.app.goo.gl/sBbVTja6nGYN82M26"
            aria-label="Google"
            icon={<FaGoogle />}
            fontSize="20px"
            variant="ghost"
            colorScheme="whiteAlpha"
            size="auto"
            color="brand.gray"
          />
        </HStack>
      </HStack>
      <Divider borderColor="brand.gray" my={4} />
    </Box>
  );
};

export default Footer;
