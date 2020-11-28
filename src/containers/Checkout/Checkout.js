import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import Aux from "../../HOC/Auxiliary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        totalPrice = +param[1]; // Added + operator to convert the string value into integer.
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: totalPrice });
  }

  onCheckoutCanceledHandler = () => {
    this.props.history.goBack();
  };
  onCheckoutContinueHandler = () => {
    this.props.history.replace("/checkout/order-data");
  };
  render() {
    return (
      <Aux>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCanceled={this.onCheckoutCanceledHandler}
          onCheckoutContinue={this.onCheckoutContinueHandler}
        />
        <hr></hr>
        <Route
          path={this.props.match.path + "/order-data"}
          component={(props) => (
            <ContactData
              {...props}
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </Aux>
    );
  }
}

export default Checkout;
