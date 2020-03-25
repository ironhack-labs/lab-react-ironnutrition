import React, {createContext, useState} from 'react';
import foodsJson from "./../foods.json";

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, setFoods] = useState(foodsJson);
  //console.log(`foods ${foods}`);
  return(
    <FoodContext.Provider value={{foods, setFoods}}>
      {props.children}
    </FoodContext.Provider>
  )
};

export default FoodContextProvider;


