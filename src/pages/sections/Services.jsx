import { Box, Circle, Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Icons import
import { FaCarBattery } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

const servicesData = [
  {
    id: 1,
    name: "Jump start",
    description:
      "Get your car started quickly with our expert jump start service.",
    icon: FaCarBattery,
  },
  {
    id: 2,
    name: "Tire change",
    description: "Quick and efficient flat tire repair and replacement.",
    icon: GiFlatTire,
  },
  {
    id: 3,
    name: "Fuel delivery",
    description: "Expert repair services for your car's fuel pump.",
    icon: BsFillFuelPumpFill,
  },
  {
    id: 4,
    name: "Car lockouts",
    description: "Lock repair and replacement services for vehicles.",
    icon: HiLockClosed,
  },
];

const MotionBox = motion(Box);

const Services = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      as="section"
      id="services"
      display="flex"
      flexDirection="column"
      alignItems={{ base: "center", sm: "flex-start" }}
      gap="48px"
    >
      <Text textStyle="h2" alignItems={{ base: "center", sm: "flex-start" }}>
        Services we offer
      </Text>
      <Box
        color="brand.black"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap="36px"
        alignItems="center"
        justifyContent="space-between"
        width="full"
      >
        {servicesData.map(service => (
          <MotionBox
            key={service.id}
            display="flex"
            flexDirection={{ base: "column", sm: "row", md: "column" }}
            alignItems={{ base: "center", sm: "flex-start" }}
            gap="12px"
            width="full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={serviceVariants}
          >
            <Circle
              size="60px"
              bg="white"
              color="black"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
            >
              <Icon as={service.icon} boxSize={6} />
            </Circle>
            <Stack
              direction="column"
              gap={{ base: "8px", md: "14px" }}
              width={{ base: "60%", md: "100%" }}
              alignItems={{ base: "center", sm: "flex-start" }}
            >
              <Text
                fontSize={{ base: "18px", lg: "24px" }}
                fontWeight="semibold"
              >
                {service.name}
              </Text>
              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                textAlign={{ base: "center", sm: "left" }}
                color="brand.black"
                opacity={0.5}
              >
                {service.description}
              </Text>
            </Stack>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
