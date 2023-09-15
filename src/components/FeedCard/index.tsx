import React, { useEffect, useState } from 'react';
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
import { Post } from '../../types';
import { pbClient } from '../..';

const FeedCard = ({ post }): JSX.Element => {

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
              name={post?.name || "John Doe"}
              src="https://placekitten.com/100/100" // Replace with the user's image URL
              size="lg"
              mr="2"
            />
            <Box>
              <Text color="gray.600" fontSize="sm">
                {post.author?.name || "John Doe"}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {post.author?.email || "jdoe@xmail.com"}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {post?.createdAt || "14hrs"} ago  |  {post?.location || "Nairobi Kenya"}
              </Text>
            </Box>
          </Flex>
          <Button rightIcon={<Icon as={MdPersonAddAlt} />} colorScheme="blue" size="sm">
            <Text>Connect</Text>
          </Button>
        </Flex>
        <Text>
          {post.content ||
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio commodi quo molestias
          quis incidunt sunt praesentium corporis non laudantium doloremque tempore officiis minima soluta,
          ducimus, assumenda maxime officia nesciunt?`}
        </Text>
      </Stack>
      <Stack spacing="1" p="4" direction="row" justify="space-between">
        <Stack spacing="1" direction="row">
          {post.tags?.map((tag) => (
            <Tag>{tag.name || "Community"}</Tag>
          ))}

        </Stack>
        <Button rightIcon={<Icon as={MdShare} />} colorScheme="blue" size="sm">
          <Text>Share</Text>
        </Button>
      </Stack>
    </Box>
  );
};

export default FeedCard;
