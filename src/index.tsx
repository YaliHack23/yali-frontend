import React from "react";
import ReactDOMClient from "react-dom/client";
import Feed from "./screens/Feed";
import ViewProfile from "./screens/ViewProfile";
import EditProfile from "./screens/EditProfile";
import Landing from "./screens/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { pb } from "./pb";
import { Navigate } from "react-router-dom";
import { Post } from "./types";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

// Ideally this should come from a config/env file
const pocketbaseUrl = "https://yalihack.azurewebsites.net/";

// This should serve as a singleton instance of the pb client
export const pbClient = new pb(pocketbaseUrl);

// Example of how to create a post
// const newPost: Post = {
//   content: "This is a new post",
//   author: pbClient.user!.id,
//   tags: ["tag1", "tag2"],
//   createdAt: new Date(),
//   location: "Nairobi, Kenya",
// };
// pbClient
// .createPost(newPost)
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// Example of how to get all posts
//  pbClient.postsObservable.subscribe((posts) => {
//    console.log(posts);
//  });

root.render(
  <ChakraProvider>
    <BrowserRouter basename="">
      <Routes>
        <Route
          path="/login"
          element={pbClient.isLoggedIn ? <Navigate to="/" /> : <Landing />}
        ></Route>
        <Route
          path="/"
          element={
            pbClient.isLoggedIn ? (
              <Feed user={pbClient.user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/view-profile"
          element={
            pbClient.isLoggedIn ? <ViewProfile /> : <Navigate to="/login" />
          }
        ></Route>
        <Route
          path="/view-my-profile"
          element={
            pbClient.isLoggedIn ? <ViewProfile /> : <Navigate to="/login" />
          }
        ></Route>
        <Route
          path="/edit-my-profile"
          element={
            pbClient.isLoggedIn ? <EditProfile /> : <Navigate to="/login" />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
