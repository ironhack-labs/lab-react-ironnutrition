import React, { useState } from 'react';
import foodList from '../foods.json';
import FoodBox from './FoodBox';
import FoodForm from './FoodForm';
import FoodSearch from './FoodSearch';

const FoodList = () => {
  const [form, setForm] = useState(false);
  const [searching, setSearching] = useState(false);
  const [foodListState, setFoodListState] = useState(foodList);
  const [filteredFoodListState, setFilteredFoodListState] = useState([]);

  


  const formRenderingHandler = () => setForm(!form);

  const addNewFoodHandler = (newFoodItem) => {
    const foodListCopy = [...foodListState];
    formRenderingHandler();

    foodListCopy.push(newFoodItem);
    setFoodListState(foodListCopy);
  }

  const filterFoodsHandler = (searchValue) => {
    const foodListCopy = [...foodListState];

    const filteredResults = foodListCopy.filter((foodItem) => {
      return foodItem.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearching(true);
    setFilteredFoodListState(filteredResults);

  }

  return (
    <div>
      {form && <FoodForm addNewFood={ addNewFoodHandler }/>}

      <button className="button is-success" onClick={() => formRenderingHandler()} > Click me !</button>

      <hr />
      <FoodSearch filterFood={filterFoodsHandler} />

      {
        searching ?
        filteredFoodListState.map((foodItem, index) => {
          return <FoodBox key={index} {...foodItem} />
        })
        :  foodListState.map((foodItem, index) => {
        return <FoodBox key={index} {...foodItem} />})
      
      
      }


    </div>
  )
}

export default FoodList;

