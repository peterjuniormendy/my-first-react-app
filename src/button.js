import React, { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
  }

  return (
    <Button
      style={{ border: none, padding: "8px 12px", backgroundColor: blue }}
      class="btn"
      onClick:handleCounter
    >
      Counter {counter}
    </Button>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(Button);
