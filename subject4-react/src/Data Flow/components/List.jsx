import React from "react";
import Contact from "./Contact";

const List= ({contacts}) => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map((c)=> (
        <Contact name = {c}/>
      ))}
    </div>
  );
}

export default List;