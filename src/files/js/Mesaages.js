import React from "react";

function Messages({ messages }) {
  return (
    <div className="messages">
      <h3>Messages</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
