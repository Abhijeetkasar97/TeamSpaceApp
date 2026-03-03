import React, { useState } from "react";

const Workspace = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: "Project Plan.docx", type: "Document", lastEdited: "2 hours ago" },
    { id: 2, name: "Design Mockup.png", type: "Image", lastEdited: "5 hours ago" },
    { id: 3, name: "Sprint Tasks.xlsx", type: "Spreadsheet", lastEdited: "1 day ago" },
  ]);

  const [teamMembers] = useState([
    { id: 1, name: "Alice Johnson", role: "Designer" },
    { id: 2, name: "Bob Smith", role: "Developer" },
    { id: 3, name: "Charlie Brown", role: "Project Manager" },
  ]);

  const addDocument = () => {
    const name = prompt("Enter document name:");
    if (name) {
      setDocuments([...documents, { id: documents.length + 1, name, type: "Unknown", lastEdited: "Just now" }]);
    }
  };

  return (
    <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800">
      <h2 className="text-2xl font-bold">Workspace</h2>
      <p className="mb-4">Manage and collaborate on documents with your team.</p>

      {/* Documents Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Your Documents</h3>
        <button onClick={addDocument} className="mb-4 px-4 py-2 bg-orange-500/50 text-white rounded-lg hover:bg-orange-600">
          Add Document
        </button>
        <ul className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800">
          {documents.map((doc) => (
            <li key={doc.id} className="flex justify-between p-2 border-b border-gray-700">
              <span>{doc.name} ({doc.type})</span>
              <span className="text-gray-400 text-sm">Last Edited: {doc.lastEdited}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Team Members Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Team Members</h3>
        <ul className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800">
          {teamMembers.map((member) => (
            <li key={member.id} className="flex justify-between p-2 border-b border-gray-700">
              <span>{member.name}</span>
              <span className="text-gray-400 text-sm">{member.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workspace;
