import React from "react";
import styles from "./buildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div>{props.label}</div>
      <button onClick={props.remove} disabled={props.disable}>Less</button>
      <button onClick={props.add}>More</button>
    </div>
  );
};

export default BuildControl;
