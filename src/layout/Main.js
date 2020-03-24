import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";

import _ from "lodash";

import Grid from "@material-ui/core/Grid";

import { FoodBox } from "../components/FoodBox";
import { AddButton } from "../components/AddButton";
import { FormCreate } from "../components/FormCreate";
import { FoodInfo } from "../components/FoodInfo";

export const Main = withRouter(({ history, list, addFood, updateFood }) => {
  const [infoFood, setInfoFood] = useState({
    list: [],
    calories: 0
  });

  const handleChangeInfoFood = data => {
    if (data.quantity > 0) {
      const newInfoFood = { ...infoFood };
      newInfoFood.calories += data.calories * data.quantity;

      if (_.filter(newInfoFood.list, { name: data.name }).length !== 0) {
        newInfoFood.list.map(e => {
          if (e.name === data.name) e.quantity += data.quantity;
        });
      } else newInfoFood.list.unshift(data);

      setInfoFood(newInfoFood);
    }
  };

  const handleRemoveInfoFood = index => {
    const newInfoFood = { ...infoFood };

    newInfoFood.calories -=
      newInfoFood.list[index].calories * newInfoFood.list[index].quantity;
    newInfoFood.list.splice(index, 1);

    setInfoFood(newInfoFood);
  };

  const handleAddFood = newFood => {
    addFood(newFood);
    history.push("/");
  };

  return (
    <main>
      <Grid container spacing={3} style={{ padding: 20 }}>
        <Grid item xs={6}>
          {list.map((e, i) => {
            return (
              <FoodBox
                key={i}
                setChange={quantity => updateFood(quantity, i)}
                setClick={handleChangeInfoFood}
              >
                {e}
              </FoodBox>
            );
          })}
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
            component={() => <FormCreate setSubmit={handleAddFood} />}
          />
        </Grid>
        <AddButton />
      </Grid>
    </main>
  );
});
