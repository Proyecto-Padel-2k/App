import React from "react";
import { NativeRouter, Routes, Route, Navigate } from "react-router-native";

import Layout from "./Layout";
import Home from "../pages/Home";
import Matches from "../pages/Matches";
import Chats from "../pages/Chats";
import Profile from "../pages/Profile";

import Login from "../pages/Login";
import RecoverPassword from "../pages/RecoverPassword";
import Register from "../pages/Register";

export default function Router() {
  return (
    <NativeRouter>
      <Routes>
        {/* Authentication Routes (No Bottom Nav) */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover" element={<RecoverPassword />} />
        <Route path="/register" element={<Register />} />

        {/* Main App Routes (With Bottom Nav) */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
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
