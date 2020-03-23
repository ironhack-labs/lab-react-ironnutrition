import React, { createContext, useState } from "react";
import foodJSON from "../bbss/foods.json";

export const FoodsContext = createContext();
export const FoodsContextProvider = props => {
  const [foods, setFood] = useState(foodJSON);

  const [filterStart, setFilterStart] = useState("");

  const [filteredFood, setfilteredFood] = useState(
    foods.filter(food => {
      const re = new RegExp(filterStart);
      return re.test(food.name);
    })
  );

  const [todayFoods, setTodayFoods] = useState([]);

  const getTodayFood = (e, name, quantityFood) => {
    e.preventDefault();

    const foodA = getFoodName(name);
    setTodayFoods([...todayFoods, foodA]);
  };

  //Obtener name food
  const getFoodName = nameFood =>
    foods.filter(food => food.name === nameFood)[0];

  return (
    <FoodsContext.Provider
      value={{
        foods,
        getFoodName,
        setFood,
        filterStart,
        setFilterStart,
        filteredFood,
        setfilteredFood,
        getTodayFood,
        todayFoods
      }}
    >
      {props.children}
    </FoodsContext.Provider>
  );
};
