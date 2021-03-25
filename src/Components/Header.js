import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)} className="headerStyle">
        Add
      </button>
      {counter}
    </>
  );
};

export default Header;
