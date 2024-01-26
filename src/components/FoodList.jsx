import React from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

import foodsJson from "../foods.json";
import { useState } from "react";

import { Flex } from "antd";

const boxStyle = {
  width: "100%",
  borderRadius: 10,
  marginTop: "60px",
  //border: "1px solid grey",
};

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDeleteItem = (id) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(filteredFoods);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foods} setFoods={setFoods}></AddFoodForm>
      <Search foods={foods} setFoods={setFoods}></Search>
      <Flex style={boxStyle} wrap="wrap">
        {foods.map((food) => {
          return (
            <FoodBox
              key={food.id}
              food={food}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </Flex>
    </div>
  );
}

export default FoodList;
