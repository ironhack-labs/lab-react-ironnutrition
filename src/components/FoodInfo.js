import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { FoodItem } from "./FoodItem";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2.5vh 2.5vw"
  },
  title: {
    paddingBottom: "2.5vh"
  },
  subtitle: {
    paddingTop: "2.5vh"
  }
}));

export const FoodInfo = ({ info }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" noWrap>
        Today's foods
      </Typography>

      <ul>
        {info.list.length > 0 &&
          info.list.map((e, i) => <FoodItem key={i}>{e}</FoodItem>)}
      </ul>

      <Typography className={classes.subtitle} variant="h6" noWrap>
        Total: {info.calories} cal
      </Typography>
    </div>
  );
};
