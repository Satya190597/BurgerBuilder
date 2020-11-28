import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./contactdata.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
    isMounted: false,
  };

  handleOrderCheckout = (event) => {
    // *Prevent default form submission.
    event.preventDefault();

    console.log(this.props.ingredients);
    console.log(this.props.totalPrice);
    console.log(this.props.history);

    this.setState(() => {
      return { loading: true };
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Satya Prakash Nandy",
        address: {
          street: "Golumri",
          zipCode: "831003",
          country: "India",
        },
        deliveryMethod: "fastest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log("SUCCESS");

        this.setState({ loading: false });
        this.props.history.replace("/");
      })
      .catch((error) => {
        console.log("FAILURE");

        this.setState({ loading: false });
      });
  };

  render() {
    const header = !this.state.loading ? (
      <h4>Enter Your Contact Data</h4>
    ) : (
      <Spinner />
    );
    return (
      <div className={styles.ContactData}>
        {header}
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="name" placeholder="Email" />
          <input type="text" name="street" placeholder="Street" />
          <Button clicked={this.handleOrderCheckout} btnType="Success">
            Checkout
          </Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
