import React, { useEffect, useState } from "react";
import { Box, Flex, Stack, Button } from "@chakra-ui/react";
import FeedCard from "../../components/FeedCard";
import CreatePost from "../../components/CreatePost";
import Leftsidecard from "../../components/Leftsidecard";
import Layout from "../Layout";

import { pbClient } from "../../index";
import { Post } from "../../types";
import { Subscription } from "rxjs";

export const Feed = ({ user }): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
    console.log("Fetching posts");
  });

  function fetchPosts() {
    try {
      pbClient.postsObservable.subscribe((posts) => {
        setPosts(posts);
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  return (
    <div>
      <Layout>
        <Flex
          justifyContent={"space-around"}
          width={"100%"}
          pt={"2%"}
          mt={"3%"}
        >
          <Flex width={"80%"}>
            <Box flex={1}>
              <Leftsidecard />
            </Box>
            <Box flex={2} px={"2%"}>
              <CreatePost />
              <Stack spacing="4" p="4">
                {posts.map((post) => (
                  <FeedCard key={post.id} {...post} />
                ))}
              </Stack>
            </Box>
            <Box flex={1}>
              <Leftsidecard />
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
};

export default Feed;
