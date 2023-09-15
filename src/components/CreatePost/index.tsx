import React, { useState } from 'react';
import {
  Box,
  Textarea,
  Button,
  Stack,
} from '@chakra-ui/react';

import { pbClient } from "../../index";

const CreatePost: React.FC = () => {
  const [postText, setPostText] = useState('');

  const handlePostTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  async function handlePostSubmit() {
    try {
      pbClient.createPost({content :"Cry me a river" , author: pbClient.user!.id, location: "Lukenya, Machakos", tags:["business"]})
      setPostText('');
    } catch (error) {
      console.error('Error creating posts:', error);
    }
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor={"#fff"}
      mb={"5%"}
      // maxW="600px" // Set the maximum width
    >
      <Stack spacing="3" p="4">
        <Textarea
          placeholder="What prompts you?"
          value={postText}
          onChange={handlePostTextChange}
          size="sm"
          outline={"none"}
        />
      </Stack>
      <Stack spacing="2" p="4">
        <Button
          colorScheme="blue"
          size="sm"
          onClick={handlePostSubmit}
          isDisabled={!postText}
        >
          Post
        </Button>
      </Stack>
    </Box>
  );
};

export default CreatePost;
