import React from "react";
import Aux from "../../../HOC/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>
        <span>{props.ingredients[key]}</span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Burger With Following Ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: {props.totalPrice}</strong></p>
      <p>Continue To Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
