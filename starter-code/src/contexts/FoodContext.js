import React, {createContext, useState} from 'react';
import foodsJson from './../foods.json';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, setFoods] = useState(foodsJson);
  const [fixedFoods, setFixedFoods] = useState(foodsJson); // Used for searching
  const [todaysFoods, setTodaysFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const addFood = (food) => {
    const {name, calories, image} = food;

    if(name && calories && image){
      setFoods([...foods, {name, calories, image}]);
      setFixedFoods([...foods, {name, calories, image}]);
    }

  }

  const searchFood = (name) => {
    console.log("Buscando " + name);
    setFoods(fixedFoods.filter(food => food.name.toLowerCase().includes(name.toLowerCase())));
  }

  const addToday = (food) => {
    const {name, calories, quantity} = food;
    if(quantity > 0){
      let mealCal = calories * quantity;
      setTodaysFoods(_groupFood(todaysFoods, {name, mealCal, quantity}));
      setTotalCalories(totalCalories + mealCal);
    }
  }

  const deleteToday = (name, cals) => {
    let filteredToday = todaysFoods.filter( f => f.name !== name);
    setTodaysFoods([...filteredToday]);
    setTotalCalories(totalCalories - cals);
  }

  const _groupFood = (foodArr, newFood) => {
    let grouped = false;
    let newFoodArr = foodArr.map(f => {
      if(f.name === newFood.name) {
        grouped = true;
        return {name: f.name, mealCal: parseInt(f.mealCal) + parseInt(newFood.mealCal), quantity: parseInt(f.quantity) + parseInt(newFood.quantity)};
      }
      return f;
    });

    return grouped ? newFoodArr : [...todaysFoods, {name: newFood.name, mealCal: newFood.mealCal, quantity: newFood.quantity}];
  }

  return(
    <FoodContext.Provider value={{foods, todaysFoods, totalCalories, addFood, searchFood, addToday, deleteToday}}>
      {props.children}
    </FoodContext.Provider>
  );
}

export default FoodContextProvider;