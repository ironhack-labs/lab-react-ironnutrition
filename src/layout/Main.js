import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import _ from "lodash";

import Grid from "@material-ui/core/Grid";

import { FoodBox } from "../components/FoodBox";
import { AddButton } from "../components/AddButton";
import { FormCreate } from "../components/FormCreate";
import { FoodInfo } from "../components/FoodInfo";

export const Main = ({ list, addFood }) => {
  console.log(list);

  const [infoFood, setInfoFood] = useState({
    list: [],
    calories: 0
  });

  const handleChangeInfoFood = data => {
    const newInfoFood = { ...infoFood };
    newInfoFood.calories += data.calories * data.quantity;

    if (
      _.filter(newInfoFood.list, () => {
        data.name;
      }).length !== 0
    ) {
      newInfoFood.list.map(e => {
        if (e.name === data.name) e.quantity += data.quantity;
      });
    } else newInfoFood.list.unshift(data);

    setInfoFood(newInfoFood);
  };

  const handleRemoveInfoFood = index => {
    const newInfoFood = { ...infoFood };
    newInfoFood.calories -=
      newInfoFood.list[index].calories * newInfoFood.list[index].quantity;
    newInfoFood.list.splice(index, 1);

    setInfoFood(newInfoFood);
  };

  return (
    <main>
      <Grid container spacing={3} style={{ padding: 20 }}>
        <Grid item xs={6}>
          {list.map((e, i) => (
            <FoodBox key={i} setClick={handleChangeInfoFood}>
              {e}
            </FoodBox>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Route
            path="/"
            exact
            component={() => (
              <FoodInfo
                info={infoFood}
                removeFood={index => handleRemoveInfoFood(index)}
              />
            )}
          />
          <Route
            path="/addFood"
            component={() => (
              <FormCreate setSubmit={newFood => addFood(newFood)} />
            )}
          />
        </Grid>
        <AddButton />
      </Grid>
    </main>
  );
};
