import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../HOC/Auxiliary";

const SideDrawer = (props) => {

  let sideDrawerClasses = [styles.SideDrawer]
  let toggleClass = props.show ? styles.Open : styles.Close
  sideDrawerClasses.push(toggleClass)

  return (
    <Aux>
    <Backdrop show={props.show} modelClosed={props.modelClosed}/>
    <div className={sideDrawerClasses.join(' ')}>
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Aux>
  );
};

export default SideDrawer;
