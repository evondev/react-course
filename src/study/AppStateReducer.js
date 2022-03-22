import React from "react";
import Counter from "../components/advanced-react/state-reducer/Counter";
import useCounter from "../components/advanced-react/state-reducer/useCounter";

const App = () => {
  const userReducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          count: state.count - 5,
        };
      default:
        return useCounter.reducer(state, action);
    }
  };
  const { count, handleDecrement, handleIncrement } = useCounter(
    {
      initial: 0,
    },
    userReducer
  );
  return (
    <div>
      <Counter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
};

export default App;
