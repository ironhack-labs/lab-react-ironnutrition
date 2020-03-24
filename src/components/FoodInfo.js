import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  root: {
    padding: "2.5vh 2.5vw"
  },
  title: {
    paddingBottom: "2.5vh"
  },
  subtitle: {
    paddingTop: "2.5vh"
  },
  li: {
    padding: "2.5vh"
  },
  wrapper: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

export const FoodInfo = ({ info, removeFood }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" noWrap>
        Today's foods
      </Typography>

      <ul>
        {info.list.length > 0 &&
          info.list.map((e, i) => (
            <li key={i} className={classes.li}>
              <div className={classes.wrapper}>
                <p>
                  {e.quantity} {e.name} = {e.calories * e.quantity} cal
                </p>

                <DeleteIcon onClick={() => removeFood(i)}>Delete</DeleteIcon>
              </div>
            </li>
          ))}
      </ul>

      <Typography className={classes.subtitle} variant="h6" noWrap>
        Total: {info.calories} cal
      </Typography>
    </div>
  );
};
