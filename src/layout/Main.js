import React from "react";
import { Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import { FoodBox } from "../components/FoodBox";
import { AddButton } from "../components/AddButton";
import { FormCreate } from "../components/FormCreate";
import { FoodInfo } from "../components/FoodInfo";

export const Main = ({ list }) => (
  <Grid container spacing={3} style={{ padding: 20 }}>
    <Grid item xs={6}>
      {list.map((e, i) => (
        <FoodBox key={i}>{e}</FoodBox>
      ))}
    </Grid>
    <Grid item xs={6}>
      <Route path="/" exact component={FoodInfo} />
      <Route path="/addFood" component={FormCreate} />
    </Grid>
    <AddButton />
  </Grid>
);
