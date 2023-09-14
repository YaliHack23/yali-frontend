import React from 'react';
import {
    Box,
    Flex,
    Avatar,
    Text,
    // Table,
    // Tbody,
    // Tr,
    // Td,
    Stack,
    Tag,
    Link,
    Icon,
    Button
} from '@chakra-ui/react';
import { FaLinkedin, FaFacebook, FaPencilAlt } from 'react-icons/fa';
import Layout from '../Layout';

const ViewProfile: React.FC = () => {
  return (
    <div>
        <Layout>
            <Flex width={"100%"} pt={"2%"} justifyContent={"center"}>
                <Flex width={"50%"} backgroundColor={"white"} p={"2%"} boxShadow={"1px 1px rgb(219,219,219)"} borderRadius={"5px"} justifyContent={"space-between"}>
                    <Flex flexDirection={"column"}>
                        <Avatar
                            name="John Doe"
                            src="https://placekitten.com/100/100" // Replace with the user's image URL
                            size="2xl"
                            mr="2"
                        />
                        <Text>Real Person</Text>
                        <Text>Alumni | cohort 13</Text>

                        <Text>Occupation: Financial Advisor</Text>
                        <Text>Company:    Example Company</Text>
                        <Text>Location:   Nairobi, Kenya</Text>
                        {/* <Flex w={"40%"}>
                            <Table variant="simple" className="transparent-border">
                                <Tbody>
                                    <Tr height={"5px"}>
                                        <Td borderColor="transparent">Cell 1</Td>
                                        <Td borderColor="transparent">Cell 2</Td>
                                    </Tr>
                                    <Tr>
                                        <Td borderColor="transparent">Cell 1</Td>
                                        <Td borderColor="transparent">Cell 2</Td>
                                    </Tr>
                                    <Tr>
                                        <Td borderColor="transparent">Cell 1</Td>
                                        <Td borderColor="transparent">Cell 2</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Flex> */}

                        <Flex flexDirection={"column"}>
                            <Text fontWeight={"bold"}>Interests:</Text>
                            <Stack spacing="1" direction="row">
                                <Tag>Sample Tag</Tag>
                                <Tag>Sample Tag</Tag>
                                <Tag>Sample Tag</Tag>
                            </Stack>
                        </Flex>
                        
                        <Box>
                            <Text fontWeight={"bold"}>Connect:</Text>
                            <Flex>
                                <Link href="#" className="icon-link">
                                    <Icon as={FaLinkedin} boxSize={6} />
                                    Home
                                </Link>
                                <Link href="#" className="icon-link">
                                    <Icon as={FaFacebook} boxSize={6} />
                                    Home
                                </Link>
                            </Flex>
                        </Box>
                    </Flex>
                    <Button rightIcon={<Icon as={FaPencilAlt} />} colorScheme="blue" size="sm">
                        <Text>Edit Profile</Text>
                    </Button>
                </Flex>
            </Flex>
        </Layout>
    </div>
  );
};

export default ViewProfile;
