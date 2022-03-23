import React, { useCallback, useMemo, useState } from "react";
import Count from "./components/advanced-react/perfomance/Count";

const App = () => {
  const [text, setText] = useState("");
  // useCallback(() => callback, [dependencies])
  // memorized
  // Re-renders
  const calculate = useCallback(() => {
    setText("");
  }, [setText]);
  const data = useMemo(() => ({ success: false }), []);
  return (
    <div className="p-5">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md"
        onChange={(e) => setText(e.target.value)}
      />
      <Count calculate={calculate} data={data}></Count>
    </div>
  );
};

export default App;
