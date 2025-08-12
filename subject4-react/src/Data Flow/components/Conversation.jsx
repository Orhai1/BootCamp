import React from "react";

const Conversation= ({withName, messages = []}) => {
  return (
    <div>
      <h2>Conversation with {withName}</h2>
      {messages.map((message, i) => (
        <p key={i}>
          {(message.sender === "self" ? "Me" : withName) + ": " + message.text}
        </p>
      ))}
    </div>
  );
}

export default Conversation;