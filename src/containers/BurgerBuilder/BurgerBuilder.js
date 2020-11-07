import React from "react";
import Aux from "../../HOC/Auxiliary";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../HOC/WithErrorHandler/WithErrorHandler";;

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 5,
    isPurchaseable: false,
    purchasing: false,
    loading:false
  };

  updatePurchaseState = (updatedIngredients) => {
    const ingredients = {
      ...updatedIngredients,
    };
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);
    this.setState({ isPurchaseable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldIngredient = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = oldIngredient + 1;
    let totalPrice = this.state.totalPrice;
    totalPrice += INGREDIENT_PRICES[type];
    totalPrice = Math.round(totalPrice * 100) / 100;
    this.setState({ ingredients: updatedIngredients, totalPrice: totalPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldIngredient = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] =
      oldIngredient > 0 ? oldIngredient - 1 : oldIngredient;
    let totalPrice = this.state.totalPrice;
    totalPrice -= oldIngredient > 0 ? INGREDIENT_PRICES[type] : 0;
    totalPrice = Math.round(totalPrice * 100) / 100;
    this.setState({ ingredients: updatedIngredients, totalPrice: totalPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  modelClosedHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    //alert("Continue Is Working");
    this.setState({loading:true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
      .post("/ord", order)
      .then((response) => {
        this.setState({loading: false,purchasing:false})
        console.log(response);
      })
      .catch((error) => {
        this.setState({loading: false,purchasing:false})
        console.log(error);
      });
  };

  render() {
    // Create Disable Info.
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary
      totalPrice={this.state.totalPrice}
      purchaseCanceled={this.modelClosedHandler}
      purchaseContinue={this.purchaseContinueHandler}
      ingredients={this.state.ingredients}
    />

    if(this.state.loading) {
      orderSummary = <Spinner/>
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modelClosed={this.modelClosedHandler}
        >
          {orderSummary}
        </Modal>
        <Burger
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disableInfo={disableInfo}
          ordered={this.purchaseHandler}
          isPurchaseable={this.state.isPurchaseable}
        />
      </Aux>
    );
  }
}
export default WithErrorHandler(BurgerBuilder,axios);
