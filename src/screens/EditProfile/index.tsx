import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Divider,
} from "@chakra-ui/react";
import Layout from "../Layout";

const EditProfile: React.FC = () => {
  return (
    <div>
      <Layout>
        <Flex width={"100%"} pt={"2%"} justifyContent={"center"}>
          <Flex
            width={"50%"}
            backgroundColor={"white"}
            p={"2%"}
            boxShadow={"1px 1px rgb(219,219,219)"}
            borderRadius={"5px"}
            justifyContent={"space-between"}
          >
            <Flex flexDirection={"column"}>
              <Avatar
                name="John Doe"
                src="https://placekitten.com/100/100" // Replace with the user's image URL
                size="2xl"
                mr="2"
              />
              <FormControl>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Your names
                </Text>
                <Flex>
                  <Box>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder="First name" />
                  </Box>

                  <Box>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder="Last name" />
                  </Box>
                </Flex>
              </FormControl>

              <FormControl>
                <FormLabel fontSize="lg" fontWeight={"bold"}>
                  Pick your occupation from the options below:
                </FormLabel>
                <Select placeholder="Select country">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontSize="lg" fontWeight={"bold"}>
                  Your current employer / company
                </FormLabel>
                <Input placeholder="First name" />
              </FormControl>

              <FormControl>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Enter your interests:
                </Text>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>

              <FormControl>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Your names
                </Text>
                <Flex>
                  <Box>
                    <FormLabel>Pick a country from the list:</FormLabel>
                    <Select placeholder="Select country">
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                    </Select>
                  </Box>

                  <Box>
                    <FormLabel>City:</FormLabel>
                    <Input placeholder="Enter city" />
                  </Box>
                </Flex>
              </FormControl>

              <FormControl>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Enter your interests:
                </Text>
                <FormLabel>
                  This will help fellow alumni and partners reach you based on
                  your interests
                </FormLabel>
                <Input placeholder="First name" />
              </FormControl>

              <Divider py={"2%"} color={"rgb(219,219,219)"} />

              <FormControl>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Your names
                </Text>
                <Flex>
                  <Box>
                    <FormLabel>Pick a country from the list:</FormLabel>
                    <Select placeholder="Select country">
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                    </Select>
                  </Box>

                  <Box>
                    <FormLabel>Pick a country from the list:</FormLabel>
                    <Select placeholder="Select country">
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                    </Select>
                  </Box>
                </Flex>
              </FormControl>
            </Flex>
            <Text>account: musa@gmail.com</Text>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
};

export default EditProfile;
