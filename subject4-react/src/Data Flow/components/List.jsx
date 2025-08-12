import React from "react";
import Contact from "./Contact";

const List= ({contacts, display }) => {
  return (
    <div>
      {contacts.map((c)=> (
        <Contact name = {c} display={display}/>
      ))}
    </div>
  );
}

export default List;