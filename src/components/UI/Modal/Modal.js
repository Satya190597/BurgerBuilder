import React from "react";
import styles from "./modal.module.css";
import Aux from "../../../HOC/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} modelClosed={props.modelClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
