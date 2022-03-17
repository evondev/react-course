import React, { useState } from "react";
import useToggle from "./useToggle";
// Duplicate code
const Editable = () => {
  // const [edit, setEdit] = useState(false);
  // const handleToggleEdit = () => {
  //   setEdit((edit) => !edit);
  // };
  const { value: edit, handleToggleValue: handleToggleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input type="text" className="p-3 rounded-lg border border-gray-200" />
      )}
      <button onClick={handleToggleEdit}>Open edit</button>
    </div>
  );
};

export default Editable;
