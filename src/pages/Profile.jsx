import React from "react";

const Profile = () => {
  return (
    <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
      <h2 className="text-2xl font-bold">User Profile</h2>
      <p>Manage your personal information and account settings.</p>
      <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
        <h3 className="text-xl">Name: John Doe</h3>
        <p>Email: johndoe@example.com</p>
        <p>Member since: January 2024</p>
        <button className="mb-4 px-4 py-2 bg-orange-500/50 text-white rounded-lg hover:bg-orange-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
