import React, { useState } from "react";
import ParticlesBackground from "../ParticlesBackground";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "received" },
    { text: "I need an update on the project.", sender: "sent" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, sender: "sent" }]);
    setNewMessage("");

    // Simulate a reply from another user
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sure! The update is on track.", sender: "received" },
      ]);
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen">
      <ParticlesBackground />
      <div className="absolute inset-0 flex justify-center items-center p-6">
        <div className="w-full max-w-lg bg-gray-900 text-orange-500 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold">Team Chat</h2>
          <div className="mt-4 bg-gray-800 p-4 rounded-lg h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender} text-gray-300 mb-2`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow p-2 rounded bg-gray-700 text-white"
            />
            <button
              onClick={sendMessage}
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;