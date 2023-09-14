import React, { useEffect, useState } from 'react';
import { Box, Flex, Button } from "@chakra-ui/react";
import FeedCard from '../../components/FeedCard';
import CreatePost from '../../components/CreatePost';
import Leftsidecard from '../../components/Leftsidecard';
import Layout from '../Layout';

import { pbClient } from "../../index";
import { Post } from '../../types';

function logout() {
  console.log("logout");
  pbClient.logout();
  console.log(pbClient.user);
}

export const Feed = ({ user }): JSX.Element => {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (isFirstLoad) {
      fetchPosts();
      //setIsFirstLoad(true);
    }
  }, [isFirstLoad, posts]);

  async function fetchPosts() {
    try {
      pbClient.postsObservable.subscribe((posts) => {
        console.log(posts)
        setPosts(posts);
      })
        ;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  return (
    <div>
      <Layout>
        <Flex justifyContent={"space-around"} width={"100%"} pt={"2%"}>
          <Flex width={"80%"}>
            <Box flex={1}>
              <Leftsidecard user />
            </Box>
            <Box flex={2} px={"2%"}>
              <CreatePost />
              {posts.map((post) => (
                <FeedCard post />
              ))}
              <Button className="btn btn-primary" onClick={logout}>
                Logout
              </Button>
            </Box>
            <Box flex={1}>
              <Leftsidecard user />
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
};

export default Feed;
