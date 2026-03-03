import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
      
      {/* Title */}
      <h2 className="text-3xl md:text-7xl font-bold text-salmon mb-4 text-[#FA8072] text-center">
        Welcome to TeamSpace
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12">
        Collaborate with your team efficiently, track tasks, and communicate seamlessly.
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        {/* Card */}
        <Link to="/tasks" className="no-underline">
          <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
            <h3 className="text-xl font-semibold text-[#FA8072] mb-3">
              Task Management
            </h3>
            <p className="text-gray-300 text-sm">
              Organize and track your tasks easily.
            </p>
          </div>
        </Link>

        <Link to="/chat" className="no-underline">
          <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
            <h3 className="text-xl font-semibold text-[#FA8072] mb-3">
              Real-Time Chat
            </h3>
            <p className="text-gray-300 text-sm">
              Stay connected with your team instantly.
            </p>
          </div>
        </Link>

        <Link to="/video" className="no-underline">
          <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
            <h3 className="text-xl font-semibold text-[#FA8072] mb-3">
              Video Meetings
            </h3>
            <p className="text-gray-300 text-sm">
              Conduct high-quality video conferences.
            </p>
          </div>
        </Link>

        <Link to="/analytics" className="no-underline">
          <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
            <h3 className="text-xl font-semibold text-[#FA8072] mb-3">
              Analytics
            </h3>
            <p className="text-gray-300 text-sm">
              Monitor performance with powerful insights.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;