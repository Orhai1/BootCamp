import React, { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

const Ex2= () =>  {
  const [state, setState] = useState({
    displayConversation: null, 
     conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
  });

  const displayConvo = (name) => {
    setState(prev => ({ ...prev, displayConversation: name }));
  };

  const backToList = () => {
  setState(prev => ({ ...prev, displayConversation: null }));
  };

  const active = state.conversations.find(c => c.with === state.displayConversation);
  return (
    <div className="container">
      {state.displayConversation === null ? (
        <List contacts={state.conversations.map((c) => c.with)} display={displayConvo}/>
      ) : (
        <Conversation sender={active.with} convo={active.convo} back={backToList}/>
      )}
    </div>
  );
}
export default Ex2;
