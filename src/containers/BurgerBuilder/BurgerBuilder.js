import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuidControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  salad: 0.4,
  bacon: 0.7,
  meat: 1.3,
  cheese: 0.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };
  updatePurchasing = () => {
    this.setState({ purchasing: true });
  };
  cancelPurchasingHandler = () => {
    this.setState({ purchasing: false });
  };
  continuePurchaseHandler = () => {
    alert("You continue!");
  };

  addIngredientHandler = type => {
    const NewIgCount = this.state.ingredients[type] + 1;
    const NewIgs = { ...this.state.ingredients };
    NewIgs[type] = NewIgCount;
    const NewPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: NewIgs,
      totalPrice: NewPrice
    });
    this.updatePurchasable(NewIgs);
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] <= 0) return;
    const NewIgCount = this.state.ingredients[type] - 1;
    const NewIgs = { ...this.state.ingredients };
    NewIgs[type] = NewIgCount;
    const NewPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: NewIgs,
      totalPrice: NewPrice
    });
    this.updatePurchasable(NewIgs);
  };

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.cancelPurchasingHandler}
        >
          <OrderSummary
            cancelled={this.cancelPurchasingHandler}
            continued={this.continuePurchaseHandler}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          disableInfo={disableInfo}
          Price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.updatePurchasing}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
