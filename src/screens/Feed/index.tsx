import React, { useEffect, useState } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import FeedCard from "../../components/FeedCard";
import CreatePost from "../../components/CreatePost";
import Leftsidecard from "../../components/Leftsidecard";
import Layout from "../Layout";

import { pbClient } from "../../index";
import { Post } from "../../types";

const Feed = ({ user }): JSX.Element => {
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
          pt={"4%"}
          mt={"3%"}
        >
          <Flex width={"80%"}>
            <Box flex={1}>
              <Leftsidecard user={user} />
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
              <Leftsidecard user={user} />
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
};

export default Feed;
