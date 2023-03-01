import React, { useState } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [showFood, setShowFood] = useState(foodsJSON);
  const [searchFood, setSearchFood] = useState(foodsJSON);

  //add function

  const addToList = (food) => {
    const foodCopy = [food, ...showFood]; //copies the array and pushes the new movie into it
    setShowFood(foodCopy);
  };

  //search Recipe

  const searchRecipe = (query) => {
    const filteredRecipes = searchFood.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFood(filteredRecipes);
  };

  //delete function

  const deleteRecipe = (foodName) => {
    const filteredRecipes = showFood.filter((recipe) => {
      return recipe.name !== foodName;
    });
    setSearchFood(filteredRecipes);
  };

  return (
    <div className="App">
      <AddFoodForm addToList={addToList} />
      <Button> Hide Form / Add New Food </Button>

      <Search searchRecipe={searchRecipe} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFood.map((food) => {
          return <FoodBox food={food} deleteRecipe={deleteRecipe} />;
        })}
      </Row>
    </div>
  );
}

export default App;
