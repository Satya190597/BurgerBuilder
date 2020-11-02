import React from "react";
import Aux from "../../../HOC/Auxiliary";

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
      <p>Continue To Checkout</p>
    </Aux>
  );
};

export default OrderSummary;