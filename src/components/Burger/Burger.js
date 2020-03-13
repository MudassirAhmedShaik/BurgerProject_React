import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey =>
    [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient Key={igKey + i} Type={igKey} />;
    })
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredient Type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient Type="bread-bottom" />
    </div>
  );
};

export default Burger;
