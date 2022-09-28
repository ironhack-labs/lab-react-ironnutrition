import React, { useState } from 'react';

import './App.css';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import FoodBox from './components/Foodbox/FoodBox';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [food, setFood] = useState([...foods]);
  const [search, setSearch] = useState('');

  console.log(food);

  const deleteFoodCard = (foodName) => {
    // foodName is an argument that we give for this function
    const removeFood = food.filter((oldFood) => oldFood.name !== foodName);
    // removeFood is just a variable where we store the filter method
    // we filter the state food that holds the foodsArray. Oldfood is just a callback and we are looking for the name of the food. Normally we would use the id because it is unique and don't conflict.
    // we are comparing the oldFood.name if it is not the same as the foodName that is passed in the  deleteFoodCard function.
    // We are filtering our array of foods an keeping only the ones that are not sharing the same name as the one we're clicking in.
    setFood(removeFood); // we add the removeFood variable to the new state of setFood so it updates the state of foods that hold the array of foods.
    console.log(foodName);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm setFood={setFood} food={food} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <SearchBar search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => {
            return (
              <FoodBox
                key={food.name}
                food={food}
                deleteFoodCard={deleteFoodCard} // passing the deleteFoodCard function to the component that needs it.
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
