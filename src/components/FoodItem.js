import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0 2.5vw"
  }
}));

export const FoodItem = ({ children }) => {
  const classes = useStyles();

  return (
    <li className={classes.root}>
      <p>
        {children.quantity} {children.name} ={" "}
        {children.calories * children.quantity} cal
      </p>
    </li>
  );
};
