import React from "react";

const Settings = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Settings</h2>
      <p>Manage your preferences and account settings.</p>
      <div className="mt-4 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl">Notifications</h3>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          Enable email notifications
        </label>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          Enable push notifications
        </label>
      </div>
    </div>
  );
};

export default Settings;
