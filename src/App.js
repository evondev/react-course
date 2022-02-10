import "./App.scss";
import React, { Fragment, useState } from "react";
import Modal from "./components/modal/Modal";
import Dropdown from "./components/Dropdown";
import DropdownPortal from "./components/DropdownPortal";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="relative z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 m-5 text-white bg-blue-500 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
        commodi at laborum illo, ducimus porro ex tenetur sit architecto cumque.
        Ipsam quia, non distinctio obcaecati quasi placeat tempore fugiat?
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div>
    </Fragment>
  );
}
// Fragments
// getBoundingClientRect
export default App;
