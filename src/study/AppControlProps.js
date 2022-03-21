import React, { useState } from "react";
import Counter from "../components/advanced-react/control-props/Counter";
const App = () => {
  const [count, setCount] = useState(5);
  const handleCountChange = (newCount) => {
    if (newCount > 10) setCount(0);
    else setCount(newCount);
  };
  return (
    <div>
      <Counter></Counter>
      <Counter value={count} onChange={handleCountChange}></Counter>
    </div>
  );
};

export default App;
