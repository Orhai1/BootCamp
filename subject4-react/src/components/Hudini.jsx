import React, { useState } from "react";

const Hudini = () => {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div>{show ? "Now you see me" : "Now you don't"}</div>
      <button onClick={changeShow}>Change me</button>
    </div>
  );
};

export default Hudini;
