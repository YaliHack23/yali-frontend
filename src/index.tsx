import React from "react";
import ReactDOMClient from "react-dom/client";
import { Feed } from "./screens/Feed";
import { ViewMyProfile } from "./screens/ViewMyProfile";
import { ViewAlumniProfile } from "./screens/ViewAlumniProfile";
import { EditMyProfile } from "./screens/EditMyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pb } from "./pb";
import { Landing } from "./screens/Landing/Landing";
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
pbClient.getPosts({ first: 1, last: 50 }).then((res) => {
  console.log(res);
});

root.render(
  <BrowserRouter basename="">
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route
        path="/login"
        element={
          pbClient.isLoggedIn ? <Feed user={pbClient.user} /> : <Landing />
        }
      ></Route>
      <Route
        path="/feeds"
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
          pbClient.isLoggedIn ? <ViewAlumniProfile /> : <Navigate to="/login" />
        }
      ></Route>
      <Route
        path="/view-my-profile"
        element={
          pbClient.isLoggedIn ? <ViewMyProfile /> : <Navigate to="/login" />
        }
      ></Route>
      <Route
        path="/edit-my-profile"
        element={
          pbClient.isLoggedIn ? <EditMyProfile /> : <Navigate to="/login" />
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);
