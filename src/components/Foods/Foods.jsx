import React from 'react'
import { useState } from 'react';
import foods from '../../foods.json';
import AddFoodForm from '../AddFoodForm/AddFoodForm';
import FoodBox from '../FoodBox/FoodBox';
import Searchbar from '../Searchbar/Searchbar';

function Foods(props) {
    const [food, setFood] = useState(foods);
    const [displayFood, setDisplayFood] = useState(foods);

    const searchResults = (searchStr) => {
      let filterFoods = foods.filter((food) => 
      foods.name.toLowerCase().includes(searchStr.toLowerCase)
      );

      setDisplayFood(filterFoods);
    }

    const createFood = (food) => {
      const updatedFoods = [food, ...foods];
      setFood(updatedFoods);
      setDisplayFood(updatedFoods);
    }

    const deleteFood = (foodName) => {
      let filterFoods = foods.filter((food) => food.name !== foodName);
      setFood(filterFoods);
      setDisplayFood(filterFoods);
    }
    
  return (
    <div>
        <Searchbar searchResults = {searchResults} />
        <AddFoodForm createFood = {createFood} />
        <FoodBox key={food} foods={foods} clickToDelete = {deleteFood} />;

        {displayFood.map((food, index) => {
        return(
        <div key={index}>
            {/* <p>{food.name}</p>
            <img src={food.image} alt="" width={120}/> */}
            <FoodBox food = {food} />
        </div>
            )
        })}

    </div>
  )
}

export default Foods;