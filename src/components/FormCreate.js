import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2.5vh 0"
  }
}));

export const FormCreate = ({ setSubmit }) => {
  const classes = useStyles();

  const [state, setState] = useState({});

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          setSubmit({ ...state });
        }}
      >
        <Typography className={classes.title} variant="h5" noWrap>
          Create a new food
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          value={state.name || ""}
          name="name"
          onChange={handleChange}
        />
        <TextField
          label="Image URL"
          variant="outlined"
          value={state.image || ""}
          name="image"
          onChange={handleChange}
        />
        <TextField
          id="standard-number"
          label="Calories"
          type="number"
          variant="outlined"
          value={state.calories || ""}
          name="calories"
          onChange={handleChange}
        />
        <div className={classes.wrapper}>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>

          <Link to="/">
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};
