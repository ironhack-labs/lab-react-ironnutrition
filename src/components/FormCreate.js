import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "80%"
    }
  }
}));

export const FormCreate = () => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography className={classes.title} variant="h5" noWrap>
          Create a new food
        </Typography>
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Outlined" variant="outlined" />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </form>
    </>
  );
};
