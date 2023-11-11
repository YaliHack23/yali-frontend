import React from "react";
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
  Text,
  Icon
} from "@chakra-ui/react";
import YaliLogo from "./YaliLogo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { pbClient } from "../../index";
import { MdLogout } from "react-icons/md";

const Navbar: React.FC = () => {
  const currentUser = pbClient.isLoggedIn ? pbClient.user : undefined;

  function logout() {
    console.log("logout");
    pbClient.logout();
    console.log(pbClient.user);
    window.location.href = "/login";
  }

  return (
    <Box
      bg="white"
      // py="0.1%"
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
        <Flex flex={1}>
          <Image
            src={YaliLogo}
            alt="User Image"
            borderRadius="full"
            boxSize="70px"
            objectFit="cover"
            mr={"5%"}
          />
          <Flex alignItems={"center"} w={"40%"}>
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
        </Flex>

        <Flex>
          <Box>
            <Avatar
              size="sm"
              name={currentUser ? currentUser.name : "Profile Picture"}
              src={
                currentUser
                  ? currentUser.avatar
                  : "https://placekitten.com/50/50"
              }
              mr={"5px"}
            />
          </Box>
          <Button
            rightIcon={<Icon as={MdLogout} />}
            colorScheme="blue"
            size="sm"
            onClick={logout}
          >
            <Text>Logout</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
