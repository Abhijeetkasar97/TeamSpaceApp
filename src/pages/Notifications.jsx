import React from "react";

const Notifications = () => {
  const notifications = [
    { id: 1, message: "New message from Admin" },
    { id: 2, message: "Your task 'Develop Login System' is due tomorrow" },
    { id: 3, message: "System update scheduled for next week" },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <p>Stay updated with the latest alerts and updates.</p>
      <ul className="mt-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="p-3 bg-gray-800 rounded-lg mb-2">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
