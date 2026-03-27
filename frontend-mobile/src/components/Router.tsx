import React from "react";
import { NativeRouter, Routes, Route, Navigate } from "react-router-native";

import Layout from "./Layout";
import Home from "../pages/Home";
import Matches from "../pages/Matches";
import Chats from "../pages/Chats";
import Profile from "../pages/Profile";

export default function Router() {
  return (
    <NativeRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route
          path="*"
          element={
            <Layout title="Page Not Found">
              <React.Fragment />
            </Layout>
          }
        />
      </Routes>
    </NativeRouter>
  );
}
