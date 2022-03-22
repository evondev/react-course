import React, { useEffect, useRef, useState } from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({
  count = 0,
  handleIncrement = () => {},
  handleDecrement = () => {},
}) => {
  return (
    <CountProvider value={{ count }}>
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement onClick={handleDecrement}></Decrement>
        <Count></Count>
        <Increment onClick={handleIncrement}></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
