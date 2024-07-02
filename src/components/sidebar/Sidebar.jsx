import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
  Divider,
} from "@chakra-ui/react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {/* Umetni logo ili drugi naslov ovde */}
          {/* <Image width="75%" objectFit="cover" src={logo} alt="logo" /> */}
          <Divider mt={3} borderColor="brand.lightGray" />
        </DrawerHeader>
        <DrawerBody>
          <VStack
            spacing={8}
            color="brand.black"
            fontFamily={`'Lato', sans-serif`}
          >
            <Link href="#batteryService">Battery service</Link>
            <Link href="#carLockouts">Car lockouts</Link>
            <Link href="#fuelDelivery">Fuel delivery</Link>
            <Link href="#tireChange">Tire change</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
