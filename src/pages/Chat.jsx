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
        <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
          <h2 className="text-2xl font-bold">Team Chat</h2>
          <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender} text-gray-300 mb-2`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6"
            />
            <button
              onClick={sendMessage}
              className="mb-4 px-4 py-2 bg-orange-500/50 text-white rounded-lg hover:bg-orange-600"
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