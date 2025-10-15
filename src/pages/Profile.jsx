import React from "react";

const Profile = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">User Profile</h2>
      <p>Manage your personal information and account settings.</p>
      <div className="mt-4 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl">Name: John Doe</h3>
        <p>Email: johndoe@example.com</p>
        <p>Member since: January 2024</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
