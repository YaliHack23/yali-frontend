import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Avatar,
  Image,
  Button,
  Heading,
  HStack,
  Text
} from '@chakra-ui/react';
// import { YaliLogo } from "./YaliLogo.svg";
import { SearchIcon } from '@chakra-ui/icons';
import { pbClient } from "../../index";

function logout() {
  console.log("logout");
  pbClient.logout();
  console.log(pbClient.user);
}

const Navbar: React.FC = () => {
  return (
    <Box
      bg="white"
      py="0.5%"
      borderBottom={"1px solid rgb(219,219,219)"}
      position="fixed" // Make the navbar fixed
      top="0" // Position it at the top
      left="0" // Position it at the left
      right="0" // Position it at the right
      zIndex="999"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        mx="auto" // Center the content
        w="79%" // Set a max width for the content
      >
        {/* Logo and Name */}
        <Flex w="40%">
          <Image
            src="https://placekitten.com/50/50" // Replace with your image URL
            alt="User Image"
            borderRadius="full"
            boxSize="50px"
            objectFit="cover"
            mr={"5%"}
          />
          <InputGroup color="black">
            <Input
              type="text"
              placeholder="Search"
              borderRadius="5px"
              bgColor="white"
              outline="none"
              _focus={{
                borderColor: "transparent",
                boxShadow: "none",
              }}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                bgColor="transparent"
                borderRadius="full"
                borderLeftRadius="0"
                _hover={{
                  bgColor: "gray.200",
                }}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>

        {/* User Icon */}
        <Box>
          <HStack spacing={5}>
            <Avatar
              size="sm"
              name="Your Name"
              src="https://placekitten.com/50/50" // Replace with your user's image URL
            />
            <Button className="btn btn-primary" onClick={logout}>
              Logout
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
