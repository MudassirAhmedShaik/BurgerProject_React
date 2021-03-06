import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.Price.toFixed(2)}$</strong>
    </p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          Label={ctrl.label}
          key={ctrl.label}
          added={() => props.added(ctrl.type)}
          removed={() => props.removed(ctrl.type)}
          disabled={props.disableInfo[ctrl.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchasing}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
