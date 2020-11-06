import React, { Component } from "react";
import Aux from "../../../HOC/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}</span>
          <span>{this.props.ingredients[key]}</span>
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Burger With Following Ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice}</strong>
        </p>
        <p>Continue To Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
