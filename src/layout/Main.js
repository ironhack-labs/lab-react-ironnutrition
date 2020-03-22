import React from "react";
import Grid from "@material-ui/core/Grid";

import { FoodBox } from "../components/FoodBox";

export const Main = ({ list }) => (
  <Grid container spacing={3} style={{ padding: 20 }}>
    <Grid item xs={6}>
      {list.map((e, i) => (
        <FoodBox key={i}>{e}</FoodBox>
      ))}
    </Grid>
    <Grid item xs={6}></Grid>
  </Grid>
);
