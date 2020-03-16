import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuidControls/BuildControls";

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
    totalPrice: 4
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
  };

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          disableInfo={disableInfo}
          Price={this.state.totalPrice}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
