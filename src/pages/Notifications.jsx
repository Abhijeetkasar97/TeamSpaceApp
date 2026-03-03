import React from "react";

const Notifications = () => {
  const notifications = [
    { id: 1, message: "New message from Admin" },
    { id: 2, message: "Your task 'Develop Login System' is due tomorrow" },
    { id: 3, message: "System update scheduled for next week" },
  ];

  return (
    <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <p>Stay updated with the latest alerts and updates.</p>
      <ul className="mt-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
