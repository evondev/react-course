import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={bodyClassName}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
