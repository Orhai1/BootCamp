import React from "react";

const Contact= ({name, display}) => {
  return (
    <button onClick={() => display(name)}>
      {name}
    </button>
  );
}

export default Contact;