import React, { useState } from 'react';
import FoodContainer from './components/FoodContainer';
import TotalContainer from './components/TotalContainer';
import foodsData from './foods.json';
import FoodForm from './components/FoodForm';
import { Button, TextField, Grid, Paper } from '@material-ui/core';
import './App.css';

function App() {
  const [ showFoodForm, setShowFoodForm ] = useState(false);
  const [ foods, setFoods ] = useState(foodsData);
  const [ filteredFoods, setFilteredFoods ] = useState(foodsData);
  const [ selectedFoods, setSelectedFoods ] = useState([]);
    
  const handleShowFoodForm = () => {
    setShowFoodForm(!showFoodForm);
  }
  
  const handleCreateFood = event => {
    event.preventDefault();
    setShowFoodForm(!showFoodForm);

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    }

    setFoods([ newFood, ...foods ]);

    // This works
    setFilteredFoods([ newFood, ...foods ]);

    // This doesn't work
    // setFilteredFoods(foods);
  }

  const handleSearch = (event) => {
    let searchText = event.target.value;
    let searchFoods = foods.filter(food => food.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredFoods(searchFoods);
  }

  const handleAddFood = (event, food) => {
    event.preventDefault();

    let alreadySelectedFood = selectedFoods.find(selectedFood => selectedFood.name === food.name);
    if (alreadySelectedFood) { 
      let indexOfAlreadySelectedFood = selectedFoods.indexOf(selectedFood => selectedFood.name === food.name);

      alreadySelectedFood.quantity = (+alreadySelectedFood.quantity) + (+event.target.quantity.value);

      let cloneArr = JSON.parse(JSON.stringify(selectedFoods));
      cloneArr.splice(indexOfAlreadySelectedFood, 1, alreadySelectedFood);

      setSelectedFoods(cloneArr);
    }
    else {
      let selectedFood = {
        name: food.name,
        calories: food.calories,
        quantity: event.target.quantity.value
      }
      
      setSelectedFoods([...selectedFoods, selectedFood]);
    }
  }

  const handleDeleteFood = index => {
    setSelectedFoods(selectedFoods.filter((food, foodIndex) => foodIndex !== index))
  }

  return (
    <div>
      <div className="header-container">
        <h1>IronNutrition</h1>
        <TextField onChange={handleSearch} label="Search" type="text" name="search"/>
        <Button onClick={handleShowFoodForm} variant="contained" color="primary">Add Food</Button>
      </div>
      {showFoodForm && <FoodForm onCreateFood={handleCreateFood} />}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <FoodContainer onAddFood={handleAddFood} foods={filteredFoods} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <TotalContainer onFoodDelete={handleDeleteFood} foods={selectedFoods} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

//https://healthyrecipesblogs.com/wp-content/uploads/2021/04/baked-salmon-1-2021.jpg