import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Heading,
  Stack,
  IconButton,
  chakra,
  Flex,
  Divider
} from '@chakra-ui/react';
import { MdMessage, MdPersonAdd } from 'react-icons/md';

// const LinkedInProfileCard: React.FC = () => {
const Leftsidecard: React.FC = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor={"#fff"}
      maxW="400px" // Set the maximum width
    >
      <Stack spacing="3" p="4">
        <Flex flexDir={"column"} alignItems={"center"}>
          <Avatar
            name="John Doe"
            src="https://placekitten.com/100/100" // Replace with the user's image URL
            size="lg"
          />
          <Heading fontSize="xl">John Doe</Heading>
          <Text color="gray.600">Software Engineer</Text>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Divider py={"2%"} color={"rgb(219,219,219)"}/>
          <Text pt={"2%"}>Alumni | Cohort 22 | Track 2</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Leftsidecard;
