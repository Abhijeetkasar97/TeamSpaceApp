import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import TaskBoard from "./pages/TaskBoard";
import VideoConference from "./pages/VideoConference";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications"; 
import { AuthProvider } from "./context/AuthContext";
import ParticlesBackground from "./ParticlesBackground";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <ParticlesBackground /> {/* ✅ Full-page particles effect */}
      
      <div className="relative z-10 min-h-screen flex flex-col bg-black bg-opacity-90 text-white">
        <Navbar />
        <div className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/tasks" element={<TaskBoard />} />
            <Route path="/video" element={<VideoConference />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/profile" element={<Profile />} /> {/* ✅ New */}
            <Route path="/settings" element={<Settings />} /> {/* ✅ New */}
            <Route path="/notifications" element={<Notifications />} /> {/* ✅ New */}
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
