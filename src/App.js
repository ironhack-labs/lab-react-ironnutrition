import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodListComplete from './components/FoodListComplete';
import AddFoodForm from './components/AddFoodForm';
import Search from "./components/Search";

function App() {
  const [food, setFood] = useState(foods);
  const [findFood, setFindFood] = useState(foods);
  /*     const [showFood, setShowFood] = useState(foods); */

  const searchFood = (search) => {
    let filteredFood = food.filter((dish) =>
      dish.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setFindFood(filteredFood);
  };

  const addToList = (dish) => {
    const foodCopy = [dish, ...food];
    setFood(foodCopy);
    setFindFood(foodCopy);
  };


  const deleteFood = (foodId) => {
    const filteredFood = foods.filter((dish) => {
      return foods._id !== foodId;
    });
    setFood(filteredFood);
  };

  return (
    <div className="App">
      {/*  <FoodList /> */}
      {/*       <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}/> */}
      <Search searchFood={searchFood} />
      <AddFoodForm addToList={addToList} />
      <FoodListComplete findFood={findFood} deleteFood={deleteFood}/>
    </div>
  );
}

export default App;
