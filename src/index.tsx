import React from "react";
import ReactDOMClient from "react-dom/client";
import { Feed } from "./screens/Feed";
import { ViewMyProfile } from "./screens/ViewMyProfile";
import { ViewAlumniProfile } from "./screens/ViewAlumniProfile";
import { EditMyProfile } from "./screens/EditMyprofile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
        <BrowserRouter basename="">
          <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/view-profile" element={<ViewAlumniProfile/>}></Route>
          <Route path="/view-my-profile" element={<ViewMyProfile/>}></Route>
          <Route path="/edit-my-profile" element={<EditMyProfile/>}></Route>
          </Routes>
        </BrowserRouter>
    );
    