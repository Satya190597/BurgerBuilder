import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import styles from './logo.module.css'
const Logo = () => {
  return (
    <div >
      <img src={burgerLogo} alt="MyBurger"/>
    </div>
  );
};

export default Logo;
