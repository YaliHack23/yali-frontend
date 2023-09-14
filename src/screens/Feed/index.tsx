import React from 'react';
import { Box, Flex, Button } from "@chakra-ui/react";
import FeedCard from '../../components/FeedCard';
import CreatePost from '../../components/CreatePost';
import Leftsidecard from '../../components/Leftsidecard';
import Layout from '../Layout';

import { pbClient } from "../../index";

function logout() {
  console.log("logout");
  pbClient.logout();
  console.log(pbClient.user);
}

export const Feed = ({ user }): JSX.Element => {
  return (
    <div>
      <Layout>
        <Flex justifyContent={"space-around"} width={"100%"} pt={"2%"}>
          <Flex width={"80%"}>
            <Box flex={1}>
              <Leftsidecard />
            </Box>
            <Box flex={2} px={"2%"}>
              <CreatePost />
              <FeedCard />
              <Button className="btn btn-primary" onClick={logout}>
                Logout
              </Button>
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
