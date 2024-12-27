import {
  Box,
  Stack,
  Text,
  VStack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
  HStack,
  Radio,
  RadioGroup,
  Icon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPhoneAlt } from "react-icons/fa";
import callingService from "../../assets/callingService.jpg";

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();

  const sendMail = values => {
    return new Promise((resolve, reject) => {
      emailjs
        .send(
          "service_18duebh",
          "template_ihunfbo",
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            needAssistance: values.needAssistance,
            haveEmergency: values.haveEmergency,
            needTowing: values.needTowing,
          },
          "qFEySoESrCro-GKpr"
        )
        .then(response => {
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="brand.black" p={3} bg="green.700" fontWeight="bold">
                Message sent successfully!
              </Box>
            ),
          });
          resolve(response);
        })
        .catch(error => {
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="brand.black" p={3} bg="red.700" fontWeight="bold">
                Failed to send message. Please try again.
              </Box>
            ),
          });
          reject(error);
        });
    });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <Box
      id="contact"
      as="section"
      width="full"
      height="full"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      my={{ base: "64px", xl: "128px" }}
      gap={{ base: "32px", xl: "128px" }}
    >
      <MotionVStack
        alignItems="start"
        height="full"
        width="full"
        spacing={{ base: "32px", lg: "48px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={formVariants}
      >
        <VStack
          alignItems="start"
          spacing={{ base: 4, md: 6, lg: 6, xl: "14px" }}
        >
          <Text textStyle="h2" textAlign="left">
            Contact us
          </Text>
          <HStack
            color="brand.black"
            as="a"
            href="tel:+1 (224) 247-7833"
            _hover={{
              textDecoration: "underline",
            }}
            cursor="pointer"
          >
            <Icon as={FaPhoneAlt} boxSize="20px" color="brand.black" />
            <Text fontSize={{ base: "18px", xl: "20px" }}>
              +1 (224) 247-7833
            </Text>
          </HStack>
        </VStack>
        <VStack
          as="form"
          onSubmit={handleSubmit(sendMail)}
          width="full"
          spacing={{ base: "12px", xl: "14px" }}
          fontSize={{ xl: "16px" }}
        >
          <HStack width="full" spacing={{ base: 4, md: 6, lg: 6, xl: "14px" }}>
            <FormControl isInvalid={errors.firstName}>
              <Stack width="full" spacing={0}>
                <FormLabel htmlFor="firstName" marginBottom={1}>
                  First Name
                </FormLabel>
                <Input
                  boxShadow="sm"
                  borderRadius={6}
                  id="firstName"
                  size="md"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </Stack>
            </FormControl>

            <FormControl isInvalid={errors.lastName}>
              <Stack width="full" spacing={0}>
                <FormLabel htmlFor="lastName" marginBottom={1}>
                  Last Name
                </FormLabel>
                <Input
                  boxShadow="sm"
                  borderRadius={6}
                  id="lastName"
                  size="md"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "This field is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </Stack>
            </FormControl>
          </HStack>

          <FormControl isInvalid={errors.email}>
            <Stack width="full" spacing={0}>
              <FormLabel htmlFor="email" marginBottom={1}>
                Email
              </FormLabel>
              <Input
                boxShadow="sm"
                borderRadius={6}
                id="email"
                size="md"
                placeholder="yourname@example.com"
                {...register("email", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </Stack>
          </FormControl>

          <FormControl isInvalid={errors.phoneNumber}>
            <Stack width="full" spacing={0}>
              <FormLabel htmlFor="phoneNumber" marginBottom={1}>
                Phone Number
              </FormLabel>
              <Input
                boxShadow="sm"
                borderRadius={6}
                id="phoneNumber"
                size="md"
                placeholder="+1 (555) 000-0000"
                {...register("phoneNumber")}
              />
              <FormErrorMessage>
                {errors.phoneNumber && errors.phoneNumber.message}
              </FormErrorMessage>
            </Stack>
          </FormControl>

          <FormControl isInvalid={errors.needAssistance}>
            <Stack width="full" spacing={0}>
              <FormLabel htmlFor="needAssistance" marginBottom={1}>
                Do you need Roadside Assistance?
              </FormLabel>
              <RadioGroup>
                <HStack spacing="24px">
                  <Radio
                    value="Yes"
                    {...register("needAssistance", {
                      required: "This field is required",
                    })}
                  >
                    Yes
                  </Radio>
                  <Radio
                    value="No"
                    {...register("needAssistance", {
                      required: "This field is required",
                    })}
                  >
                    No
                  </Radio>
                </HStack>
              </RadioGroup>
              <FormErrorMessage>
                {errors.needAssistance && errors.needAssistance.message}
              </FormErrorMessage>
            </Stack>
          </FormControl>

          <FormControl isInvalid={errors.haveEmergency}>
            <Stack width="full" spacing={0}>
              <FormLabel htmlFor="haveEmergency" marginBottom={1}>
                Do you have an emergency?
              </FormLabel>
              <RadioGroup>
                <HStack spacing="24px">
                  <Radio
                    value="Yes"
                    {...register("haveEmergency", {
                      required: "This field is required",
                    })}
                  >
                    Yes
                  </Radio>
                  <Radio
                    value="No"
                    {...register("haveEmergency", {
                      required: "This field is required",
                    })}
                  >
                    No
                  </Radio>
                </HStack>
              </RadioGroup>
              <FormErrorMessage>
                {errors.haveEmergency && errors.haveEmergency.message}
              </FormErrorMessage>
            </Stack>
          </FormControl>

          <FormControl isInvalid={errors.needTowing}>
            <Stack width="full" spacing={0}>
              <FormLabel htmlFor="needTowing" marginBottom={1}>
                Do you need towing?
              </FormLabel>
              <RadioGroup>
                <HStack spacing="24px">
                  <Radio
                    value="Yes"
                    {...register("needTowing", {
                      required: "This field is required",
                    })}
                  >
                    Yes
                  </Radio>
                  <Radio
                    value="No"
                    {...register("needTowing", {
                      required: "This field is required",
                    })}
                  >
                    No
                  </Radio>
                </HStack>
              </RadioGroup>
              <FormErrorMessage>
                {errors.needTowing && errors.needTowing.message}
              </FormErrorMessage>
            </Stack>
          </FormControl>

          <Button
            background="brand.yellow"
            _hover={{ background: "brand.yellow", cursor: "pointer" }}
            color="brand.black"
            isLoading={isSubmitting}
            type="submit"
            textTransform="unset"
            fontSize="16px"
            width="full"
            fontWeight="600"
            mt="14px"
            cursor="pointer"
          >
            Submit
          </Button>
        </VStack>
      </MotionVStack>

      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
        width="full"
        backgroundImage={`url(${callingService})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={{ base: "400px", sm: "500px", md: "auto" }}
      />
    </Box>
  );
};

export default Contact;
