import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Dashboard from "../pages/Dashboard";
import Calendar from "../pages/Calendar";
import Chat from "../pages/Chat";
import Documentation from "../pages/Documentation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/documentation" element={<Documentation />} />
    </Routes>
  );
};

export default AppRoutes;
