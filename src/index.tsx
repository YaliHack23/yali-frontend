import React from "react";
import ReactDOMClient from "react-dom/client";
import { Feed } from "./screens/Feed";
import { ViewMyProfile } from "./screens/ViewMyProfile";
import { ViewAlumniProfile } from "./screens/ViewAlumniProfile";
import { EditMyProfile } from "./screens/EditMyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pb } from "./pb";
import { Landing } from "./screens/Landing/Landing";
import { Navigate } from 'react-router-dom';

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

// Ideally this should come from a config/env file
const pocketbaseUrl = "https://yalihack.azurewebsites.net/";

// This should serve as a singleton instance of the pb client
export const pbClient = new pb(pocketbaseUrl);

root.render(
    <BrowserRouter basename="">
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/login" element={pbClient.isLoggedIn ? <Feed user = {pbClient.user} /> : <Landing />}></Route>
      <Route path="/feeds" element={pbClient.isLoggedIn ? <Feed user = {pbClient.user} /> : <Navigate to="/login" /> }></Route>
      <Route path="/view-profile" element={pbClient.isLoggedIn ? <ViewAlumniProfile /> : <Navigate to="/login" /> }></Route>
      <Route path="/view-my-profile" element={pbClient.isLoggedIn ? <ViewMyProfile /> : <Navigate to="/login" /> }></Route>
      <Route path="/edit-my-profile" element={pbClient.isLoggedIn ? <EditMyProfile /> : <Navigate to="/login" /> }></Route>
    </Routes>
    </BrowserRouter>
);
