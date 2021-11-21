import React, { useState } from "react";
import "../styles/counter.css";

const Counter = () => {
  // const [a, b] = useState(initialValue);
  // const [count, setCount] -> const [isActive, setIsActive]
  // const [count, demo]
  // initialValue: number: 0,1,2; string: "Hello", "evondev"; boolean: false, true; undefined, null; object: {title: "evondev", username: "evondev", email: "evondev@gmail.com"}; array: [1,2,3,4,5], [], []
  // useState: React hooks
  const [count, setCount] = useState(0);
  // Handling events
  // onEvent -> onClick, onFocus, onBlur, onMouseMove, onChange, onKeyUp, onKeyDown
  // onclick -> wrong
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    console.log("increment");
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <div className="minus" onClick={() => setCount(count - 1)}>
        -
      </div>
      <div className="number">{count}</div>
      <div className="add" onClick={increment}>
        +
      </div>
    </div>
  );
};

export default Counter;
