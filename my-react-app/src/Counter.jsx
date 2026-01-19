import { useState } from "react";

function Name() {
  const [names, setNames] = useState([]);

  const showNames = () => {
    setNames(["Alok", "Rahul", "Amit", "Suman"]);
  };

  return (
    <>
      <h2>Names List</h2>

      <button onClick={showNames}>
        Show Names
      </button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default Name;
