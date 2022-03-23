import React, { useRef, useState } from "react";

const Count = React.memo(({ calculate }) => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div>Renders: {renderRef.current++}</div>
      <button
        className="p-2 bg-blue-400 text-white rounded-md"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
    </div>
  );
});

export default Count;
