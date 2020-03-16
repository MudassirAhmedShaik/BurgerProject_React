import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} Type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <div>Please start adding ingredients!</div>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient Type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient Type="bread-bottom" />
    </div>
  );
};

export default Burger;
