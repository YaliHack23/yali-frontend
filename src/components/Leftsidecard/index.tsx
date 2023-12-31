import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Heading,
  Stack,
  Flex,
  Divider
} from '@chakra-ui/react';

const Leftsidecard = ({ user }): JSX.Element => {

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
            name={user?.name || "John Doe"}
            src="https://placekitten.com/100/100" // Replace with the user's image URL
            size="lg"
          />
          <Heading fontSize="xl">{}</Heading>

          <Text color="gray.600">{user?.name || "John Doe"}</Text>
          <Text color="gray.500">{user?.occupation || "X CEO"}</Text>
          <Divider py={"2%"} color={"rgb(219,219,219)"} />
          <Text pt={"2%"}>
            Alumni | Cohort {user?.cohort?.id || "22"} | Track{" "}
            {user?.track?.id || "5"}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Leftsidecard;
