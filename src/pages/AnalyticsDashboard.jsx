// Enhanced AnalyticsDashboard.jsx
import React, { useState, useEffect } from "react";
import { Line, Bar, Pie, Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const AnalyticsDashboard = () => {
  const generateRandomData = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000) + 100);

  const [userEngagementData, setUserEngagementData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Engagement",
        data: generateRandomData(),
        backgroundColor: "rgba(255, 193, 7, 0.6)",
        borderColor: "#ff9800",
        borderWidth: 2,
      },
    ],
  });

  const [revenueData, setRevenueData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: generateRandomData(),
        backgroundColor: "rgba(255, 87, 34, 0.6)",
        borderColor: "#ff5722",
        borderWidth: 2,
      },
    ],
  });

  const deviceUsageData = {
    labels: ["Mobile", "Tablet", "Desktop"],
    datasets: [
      {
        label: "Device Usage",
        data: [50, 25, 25],
        backgroundColor: ["#ffcc00", "#ff5722", "#2196f3"],
      },
    ],
  };

  const trafficSourceData = {
    labels: ["Organic", "Social Media", "Referral", "Paid Ads"],
    datasets: [
      {
        label: "Traffic Sources",
        data: generateRandomData(),
        backgroundColor: ["#4caf50", "#2196f3", "#ff5722", "#ff9800"],
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setUserEngagementData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: generateRandomData(),
        })),
      }));

      setRevenueData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: generateRandomData(),
        })),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-orange-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
      <p>Track your team's performance with insightful analytics.</p>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl">User Engagement</h3>
          <Line data={userEngagementData} />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl">Revenue Growth</h3>
          <Bar data={revenueData} />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl">Device Usage</h3>
          <Pie data={deviceUsageData} />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl">Traffic Sources</h3>
          <Radar data={trafficSourceData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;