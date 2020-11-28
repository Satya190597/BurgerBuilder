import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from "./checkoutsummary.module.css";
const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{maxHeight: "510px"}}>
        {/* <Burger ingredients={props.ingredients} /> */}
        <Burger ingredients={props.ingredients} price={0}/>
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
