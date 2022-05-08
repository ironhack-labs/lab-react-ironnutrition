import foodsDataJSON from '../foods.json';
import React from 'react';
import FoodBox from './FoodBox';
import { useState } from 'react';
import AddFood from './AddFood';
import SearchFoods from './SearchFoods';

const FoodList = () => {
  // const [foodsData, setFoodsData] = useState(foodsDataJSON);
  const [foods, setFoods] = useState(foodsDataJSON);

  const addNewFood = (newFood) => {
    // update state with our new food
    //  makes a copy of our rogiinal array then we can push it

    // 1st way
    // const updatedFood = [...foods, newFood];
    // const updatedFoodData = [...foodsData, newFood];

    // setFoods(updatedFood);
    // setFoodsData(updatedFoodData);

    //  2nd way
    // const copyFoodArray = [...foods];
    // copyFoodArray.push(newFood);

    // setFoods(copyFoodArray);
    //  makes a copy of orgiinal array, then we add newfood to it and we pass it
    setFoods([...foods, newFood]);
  };

  const [filteredFoodArray, setFilteredFoodArray] = useState(foodsDataJSON);

  const filterFoodsByString = (stringToSearch) => {
    const filteredFoods = foods.filter((foodElement) => {
      return foodElement.name.includes(stringToSearch);
    });
    setFilteredFoodArray(filteredFoods);
  };
  // <AddFood addFood={addNewFood} />
  return (
    <div>
      <h2>Food List</h2>
      <AddFood handleFood={addNewFood} />
      <SearchFoods />
      {foods.map((individualFood, index) => (
        <FoodBox food={individualFood} key={index} />
      ))}
      {filteredFoodArray.map((foodElement, index) => {
        return <FoodBox food={foodElement} key={index} />;
      })}
    </div>
  );
};

export default FoodList;
