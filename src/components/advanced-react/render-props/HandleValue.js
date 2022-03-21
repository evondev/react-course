import React, { useState } from "react";
// lifting state
const HandleValue = () => {
  return <Input>{(value) => <DisplayValue value={value} />}</Input>;
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="p-3 rounded-md border border-gray-500 w-full max-w-[500px]"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {typeof props.children === "function" ? props.children(value) : null}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span className="text-3xl text-blue-500 font-bold">{value}</span>;
};

export default HandleValue;
