import React from "react";
// import "./Button.scss";
import styles from "./Button.module.css";
// styled-components
const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.secondary ? styles.buttonSecondary : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
