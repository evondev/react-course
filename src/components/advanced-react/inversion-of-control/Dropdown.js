import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full max-w-[300px]">
        <div
          className="placeholder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer"
          onClick={handleToggleDropdown}
        >
          {placeholder}
        </div>
        {show && children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
