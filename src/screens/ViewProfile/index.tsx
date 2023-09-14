import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Stack,
  Tag,
  Link,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaFacebook, FaPencilAlt } from 'react-icons/fa';
import Layout from '../Layout';

const ViewProfile: React.FC = () => {
  return (
    <div>
      <Layout>
        <Flex width={"100%"} pt={"2%"} justifyContent={"center"}>
          <Flex
            width={"50%"}
            backgroundColor={"white"}
            p={"2%"}
            mt={"3%"}
            boxShadow={"1px 1px rgb(219,219,219)"}
            borderRadius={"5px"}
            justifyContent={"space-between"}
          >
            <Flex flexDirection={"column"} width={"50%"}>
              <Avatar
                name="John Doe"
                src="https://placekitten.com/100/100" // Replace with the user's image URL
                size="2xl"
                mr="2"
              />

              <Text fontWeight={"bold"} pt={"5%"}>
                Real Person
              </Text>
              <Text pb={"5%"}>Alumni | cohort 13</Text>

              <Text>Occupation: Financial Advisor</Text>
              <Text>Company: Example Company</Text>
              <Text>Location: Nairobi, Kenya</Text>

              <Flex flexDirection={"column"} pt={"5%"}>
                <Text fontWeight={"bold"}>Interests:</Text>
                <Stack spacing="1" direction="row">
                  <Tag>Sample Tag</Tag>
                  <Tag>Sample Tag</Tag>
                  <Tag>Sample Tag</Tag>
                </Stack>
              </Flex>

              <Box pt={"5%"}>
                <Text fontWeight={"bold"}>Connect:</Text>
                <Flex justifyContent={"space-between"}>
                  <Link href="#!" className="icon-link">
                    <Icon as={FaLinkedin} boxSize={4} />
                    linkedin.com/musa
                  </Link>
                  <Link href="#!" className="icon-link">
                    <Icon as={FaFacebook} boxSize={4} />
                    facebook.com/musa
                  </Link>
                </Flex>
              </Box>
            </Flex>
            <Button
              rightIcon={<Icon as={FaPencilAlt} />}
              colorScheme="blue"
              size="sm"
            >
              <Text>Edit Profile</Text>
            </Button>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
};

export default ViewProfile;
