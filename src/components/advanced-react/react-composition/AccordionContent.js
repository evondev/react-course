import React, { Fragment } from "react";
import { useAccordion } from "./accordion-context";
// Specialized component
const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return (
    <Fragment>
      {show && (
        <div className="content p-4 border border-gray-200 rounded-lg mt-2">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default AccordionContent;
