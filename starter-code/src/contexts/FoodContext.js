import React, { createContext, useState } from "react";
import foodsJson from "./../foods.json";

export const FoodContext = createContext();

const FoodContextProvider = props => {
  const [foods, setFoods] = useState(foodsJson);

  const [searchFood, setSearchFood] = useState(foodsJson);

  const addFood = food => {
    const { name, calories, image } = food;

    if (name && calories && image) {
      setFoods([...foods, { name, calories, image }]);
    }
  };

  const searchFoods = name => {
    setFoods(
      searchFood.filter(food =>
        food.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  return (
    <FoodContext.Provider value={{ foods, addFood, searchFoods }}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
