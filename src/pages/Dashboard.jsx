import React from "react";
import { Link } from "react-router-dom";
import "../App";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to TeamSpace</h2>
      <p className="dashboard-description">
        Collaborate with your team efficiently, track tasks, and communicate seamlessly.
      </p>

      <div className="dashboard-cards">
        <Link to="/tasks" className="dashboard-card-link">
          <div className="dashboard-card">
            <h3>Task Management</h3>
            <p>Organize and track your tasks easily.</p>
          </div>
        </Link>

        <Link to="/chat" className="dashboard-card-link">
          <div className="dashboard-card">
            <h3>Real-Time Chat</h3>
            <p>Stay connected with your team instantly.</p>
          </div>
        </Link>

        <Link to="/video" className="dashboard-card-link">
          <div className="dashboard-card">
            <h3>Video Meetings</h3>
            <p>Conduct high-quality video conferences.</p>
          </div>
        </Link>

        <Link to="/analytics" className="dashboard-card-link">
          <div className="dashboard-card">
            <h3>Analytics</h3>
            <p>Monitor performance with powerful insights.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
