import React, { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
  }

  return (
    <button
      style={{
        padding: "12px 16px",
        backgroundColor: "steelblue",
        color: "#fff",
      }}
      className="btn"
      onClick={handleCounter}
    >
      Counter {counter}
    </button>
  );
};

export default Button;
