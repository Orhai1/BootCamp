import React from "react";

const Conversation= ({sender, convo = [], back}) => {
  return (
    <div>
      <h2>Conversation with {sender}</h2>
      {convo.map((message, i) => (
        <p key={i}>
          {(message.sender === "self" ? "Me" : sender) + ": " + message.text}
        </p>
      ))}

      <button className="back" onClick={back}>Back</button>
    </div>
  );
}

export default Conversation;