import React, {createContext, useState} from 'react';
import foodsJson from './../foods.json';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, setFoods] = useState(foodsJson);
  const [fixedFoods, setFixedFoods] = useState(foodsJson);

  const addFood = (food) => {
    const {name, calories, image} = food;
    setFoods([...foods, {name, calories, image}]);
    setFixedFoods([...foods, {name, calories, image}]);
  }

  const searchFood = (name) => {
    console.log("Buscando " + name);
    setFoods(fixedFoods.filter(food => food.name.toLowerCase().includes(name.toLowerCase())));
  }

  return(
    <FoodContext.Provider value={{foods, addFood, searchFood}}>
      {props.children}
    </FoodContext.Provider>
  );
}

export default FoodContextProvider;