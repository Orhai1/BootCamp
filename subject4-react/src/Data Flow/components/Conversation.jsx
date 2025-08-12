import React from "react";

const Conversation= ({sender, convo = []}) => {
  return (
    <div>
      <h2>Conversation with {sender}</h2>
      {convo.map((message, i) => (
        <p key={i}>
          {(message.sender === "self" ? "Me" : sender) + ": " + message.text}
        </p>
      ))}
    </div>
  );
}

export default Conversation;