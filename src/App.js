import "./App.scss";
import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import SidebarMenu from "./components/SidebarMenu";
import useClickOutSide from "./hooks/useClickOutSide";

function App() {
  // const [show, setShow] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide("span");
  return (
    <div>
      <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
      >
        Show menu
      </span>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
