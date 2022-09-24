import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredList, setFilteredList] = useState(foods);

  function searchFood(input) {
    let newFilteredList;
    if (input === '') {
      newFilteredList = [...foodList];
    } else {
      newFilteredList = foodList.filter((food) => {
        return food.name.toLowerCase().includes(input.toLowerCase());
      });
    }

    setFilteredList(newFilteredList);
  }

  function addNewFood(newFood) {
    const updatedFoods = [newFood, ...foodList];
    setFoodList(updatedFoods);
  }

  return (
    <div className="App">
      {/* Search */}
      <Divider>Search</Divider>
      <Search search={searchFood} />

      {/* Add food */}
      <Divider>Add Food Entry</Divider>
      <AddFoodForm addFood={addNewFood} />

      {/* Render the food list */}
      <Divider>Food List</Divider>
      <Row>
        {filteredList.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
