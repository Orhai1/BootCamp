import React from "react";

const List= ({contacts}) => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map((c)=> (
        <li key={c}> {c} </li>
      ))}
    </div>
  );
}

export default List;