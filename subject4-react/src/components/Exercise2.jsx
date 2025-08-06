import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="fruits">Select a fruit:</label>
      <select
        name="fruits"
        id="select-input"
        onChange={(e) => {
          setFruit(e.target.value);
          console.log(`${name} selected ${e.target.value}`);
        }}
        value={fruit}
        >
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Mango">Mango</option>
        <option value="Orange">Orange</option>
      </select>
    </div>
  );
};
export default Exercise2;
