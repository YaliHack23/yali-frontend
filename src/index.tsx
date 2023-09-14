import React from "react";
import ReactDOMClient from "react-dom/client";
import { Feed } from "./screens/Feed";
import { ViewMyProfile } from "./screens/ViewMyProfile";
import { ViewAlumniProfile } from "./screens/ViewAlumniProfile";
import { EditMyProfile } from "./screens/EditMyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pb } from "./pb";
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

// Ideally this should come from a config/env file
const pocketbaseUrl = "https://yalihack.azurewebsites.net/";

// This should serve as a singleton instance of the pb client
const pbClient = new pb(pocketbaseUrl);

// pbClient.logout();
pbClient.initLoginPopup();

var user = new pb(pocketbaseUrl).user
console.log(user)

root.render(
  <BrowserRouter basename="">
    <Routes>
      <Route path="/" element={<Feed user = {user}/>}></Route>
      <Route path="/view-profile" element={<ViewAlumniProfile />}></Route>
      <Route path="/view-my-profile" element={<ViewMyProfile />}></Route>
      <Route path="/edit-my-profile" element={<EditMyProfile />}></Route>
    </Routes>
  </BrowserRouter>
);
