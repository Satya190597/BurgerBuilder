import React from "react";
import styles from "./buildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div style={{width:'50%'}}>{props.label}</div>
      <button style={{width:'100%'}} onClick={props.remove} disabled={props.disable}>Less</button>
      <button style={{width:'100%'}} onClick={props.add}>More</button>
    </div>
  );
};

export default BuildControl;
