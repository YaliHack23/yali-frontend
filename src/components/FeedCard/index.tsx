import React from "react";
import {
  Box,
  Avatar,
  Text,
  Flex,
  Stack,
  Tag,
  Button,
  Icon,
} from "@chakra-ui/react";
import { MdPersonAddAlt, MdShare } from "react-icons/md";
import { Post } from "../../types";
import moment from "moment";

const FeedCard: React.FC<Post> = (post: Post): JSX.Element => {
  const timeAgo = moment(post.created).fromNow();
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor={"#fff"}
      key={post?.id || "id"}
    >
      <Stack spacing="3" p="4">
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Avatar
              // @ts-ignore
              name={post?.author?.avatar || "John Doe"}
              src="https://placekitten.com/100/100" // Replace with the user's image URL
              size="lg"
              mr="2"
            />
            <Box>
              <Text color="gray.600" fontSize="sm">
                {
                  // @ts-ignore
                  post.author?.name || "John Doe"
                }
              </Text>
              <Text color="gray.500" fontSize="sm">
                {
                  // @ts-ignore
                  post.author?.email || "jdoe@xmail.com"
                }
              </Text>
              <Text color="gray.500" fontSize="sm">
                {timeAgo} | {post?.location || "Nairobi Kenya"}
              </Text>
            </Box>
          </Flex>
          <Button
            rightIcon={<Icon as={MdPersonAddAlt} />}
            colorScheme="blue"
            size="sm"
          >
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
            <Tag key={tag.id}>{tag.name || "Community"}</Tag>
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
