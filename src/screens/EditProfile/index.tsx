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
        <Flex width={"100%"} py={"2%"} justifyContent={"center"}>
          <Flex
            width={"50%"}
            backgroundColor={"white"}
            mt={"3%"}
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
              <FormControl py={"4%"}>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Your names
                </Text>
                <Flex justifyContent={"space-between"}>
                  <Box flex={1} mr={"5%"}>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter your name" />
                  </Box>

                  <Box flex={1}>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder="Enter your username" />
                  </Box>
                </Flex>
              </FormControl>

              <FormControl pt={"4%"}>
                <FormLabel fontSize="lg" fontWeight={"bold"}>
                  Pick your occupation from the options below:
                </FormLabel>
                <Select placeholder="Select occupation">
                  <option>Communication Expert</option>
                  <option>Engineer</option>
                </Select>
              </FormControl>

              <FormControl pt={"4%"}>
                <FormLabel fontSize="lg" fontWeight={"bold"}>
                  Where do you reside?
                </FormLabel>
                <Input placeholder="Enter your location" />
              </FormControl>

              <FormControl pt={"4%"}>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Enter your interests:
                </Text>
                <FormLabel>
                  This will help fellow alumni and partners reach you based on
                  your interests
                </FormLabel>
                <Input placeholder="Enter your interests" />
              </FormControl>

              <FormControl pt={"4%"}>
                <FormLabel fontSize="lg" fontWeight={"bold"}>
                  What is your cohort?
                </FormLabel>
                <Input placeholder="Enter your cohort" />
              </FormControl>

              <FormControl pt={"4%"}>
                <FormLabel fontSize="lg" fontWeight={"bold"}>
                  What is your track?
                </FormLabel>
                <Select placeholder="Select track">
                  <option>Communication Expert</option>
                  <option>Engineer</option>
                </Select>
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
