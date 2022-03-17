import React from "react";
import { useAccordion } from "./accordion-context";
// Specialized component
const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
  return (
    <div
      className="header cursor-pointer p-4 border border-gray-200 rounded-lg flex items-center justify-between"
      onClick={handleToggleShow}
    >
      <span>{children}</span>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
