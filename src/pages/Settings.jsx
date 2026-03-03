import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-10 px-4">
      
      {/* Main Card */}
      <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-wide">Settings</h2>
          <p className="text-gray-400 mt-1">
            Manage your preferences and account settings.
          </p>
        </div>

        {/* Notifications Section */}
        <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">
            Notifications
          </h3>

          {/* Email Notification */}
          <label className="flex items-center justify-between py-3 border-b border-gray-700">
            <span className="text-gray-300">
              Enable email notifications
            </span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />
          </label>

          {/* Push Notification */}
          <label className="flex items-center justify-between py-3">
            <span className="text-gray-300">
              Enable push notifications
            </span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />
          </label>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="mb-4 px-4 py-2 bg-orange-500/50 text-white rounded-lg hover:bg-orange-600">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;