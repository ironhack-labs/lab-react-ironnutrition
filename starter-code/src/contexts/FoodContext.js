import React, {createContext, useState} from 'react';
import foodsJson from './../foods.json';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (food) => {
    const {name, calories, image} = food;
    setFoods([...foods, {name, calories, image}]);
  }

  return(
    <FoodContext.Provider value={{foods, addFood}}>
      {props.children}
    </FoodContext.Provider>
  );
}

export default FoodContextProvider;