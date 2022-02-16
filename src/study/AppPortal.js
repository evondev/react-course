import "./App.scss";
import React, { Fragment, useState } from "react";
import Modal from "../components/modal/Modal";
import Dropdown from "../components/Dropdown";
import DropdownPortal from "../components/DropdownPortal";
import Tooltip from "../components/tooltip/Tooltip";
import SignUpForm from "../components/form/SignUpForm";
import GameWithReducer from "../components/tictactoe/GameWithReducer";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-5 bg-red-100">
      <p className="text-red-600">Không thể lấy data do component đang lỗi</p>
    </div>
  );
}
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/* <div className="relative z-0">
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
      </div> */}
      {/* <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div> */}
      {/* <div className="p-16 mt-16 ml-16 overflow-hidden">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary>
      <SignUpForm></SignUpForm> */}
    </Fragment>
  );
}
// Fragments
// getBoundingClientRect
export default App;
