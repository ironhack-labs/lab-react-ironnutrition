import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import AddFoodForm from './Components/AddFoodForm';
import FoodBox from './Components/FoodBox';
import Search from './Components/Search';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState([]);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodList, newFood];
    setFoodList(updatedFoods);
  };

  const searchFilter = (searchFood) => {
    const newList = foodList.filter((food) => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase());
    });
    setFilteredFoodList(newList);
  };

  const deleteFood = (foodName) => {
    const newList = foodList.filter((food) => food.name !== foodName);
    setFoodList(newList);
  };

  return (
    <div className="App">
      <Button>Hide Form / Add New Food</Button>
      <AddFoodForm addNewFood={addNewFood} />

      <Search searchFilter={searchFilter} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoodList.length > 0
          ? filteredFoodList.map((food) => (
              <FoodBox key={food._id} food={food} callbackToDelete={deleteFood} />
            ))
          : foodList.map((food) => (
              <FoodBox key={food._id} food={food} callbackToDelete={deleteFood} />
            ))}
      </Row>
    </div>
  );
}

export default App;
