import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Flex,
  Stack,
  Image,
  IconButton,
  Divider,
  Tag,
  Button,
  Icon
} from '@chakra-ui/react';
import { MdPersonAddAlt, MdShare } from 'react-icons/md';

const FeedCard: React.FC = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor={"#fff"}
      // maxW="600px" // Set the maximum width
    >
      <Stack spacing="3" p="4">
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Avatar
              name="John Doe"
              src="https://placekitten.com/100/100" // Replace with the user's image URL
              size="lg"
              mr="2"
            />
            <Box>
              <Text color="gray.600" fontSize="sm">
                John Doe
              </Text>
              <Text color="gray.500" fontSize="sm">
                YALI Relations Communications team
              </Text>
              <Text color="gray.500" fontSize="sm">
                14 hours ago  |  Nairobi, Kenya
              </Text>
            </Box>
          </Flex>
          <Button rightIcon={<Icon as={MdPersonAddAlt} />} colorScheme="blue" size="sm">
            <Text>Connect</Text>
          </Button>
        </Flex>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio commodi quo molestias
          quis incidunt sunt praesentium corporis non laudantium doloremque tempore officiis minima soluta,
          ducimus, assumenda maxime officia nesciunt?
        </Text>
      </Stack>
      <Stack spacing="1" p="4" direction="row" justify="space-between">
        <Stack spacing="1" direction="row">
          <Tag>Sample Tag</Tag>
          <Tag>Sample Tag</Tag>
          <Tag>Sample Tag</Tag>
        </Stack>
        <Button rightIcon={<Icon as={MdShare} />} colorScheme="blue" size="sm">
          <Text>Share</Text>
        </Button>
      </Stack>
    </Box>
  );
};

export default FeedCard;
