import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./buildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            add={() => props.add(control.type)}
            disable={props.disableInfo[control.type]}
            remove={() => props.remove(control.type)}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
