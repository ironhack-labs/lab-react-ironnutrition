import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: "#fff"
    },
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  fab: {
    backgroundColor: "#3298DC"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
export const AddButton = () => {
  const classes = useStyles();

  const handleClick = e => {
    console.log(e);
  };

  return (
    <div className={classes.root}>
      <Link to="/addFood">
        <Fab
          onClick={e => handleClick(e)}
          color="primary"
          className={classes.fab}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};
