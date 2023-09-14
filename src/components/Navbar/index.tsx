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
  Heading,
  Text
} from '@chakra-ui/react';
// import { YaliLogo } from "./YaliLogo.svg";
import { SearchIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
  return (
    <Box bg="white" py="0.5%" borderBottom={"1px solid rgb(219,219,219)"}>
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
                borderColor: 'transparent',
                boxShadow: 'none'
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
                  bgColor: 'gray.200',
                }}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>

        {/* User Icon */}
        <Box>
          <Avatar
            size="sm"
            name="Your Name"
            src="https://placekitten.com/50/50" // Replace with your user's image URL
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
