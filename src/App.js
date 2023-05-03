import './App.css';
import foodsFromJSON from "./foods.json";
import React, { useState } from 'react'
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import OnSearch from './components/Search';

function App() {

  const [foods, setFoods] = useState(foodsFromJSON)

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const filterFoodList = (str) => {
    let filteredFoods;
    if (str === '') {
      filteredFoods = foods;
    } else {
      filteredFoods = foods.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFoods(filteredFoods);
  };

  const deleteFood = (e) => {
    const newFoods = [...foods];
    newFoods.splice(e, 1);
    setFoods(newFoods);
  };
  

  return (
    <div className="App">
        <Row>
          <AddFoodForm addFood={handleAddFood} />
        </Row>
        <Row>
          <OnSearch onSearch={filterFoodList}/>
        </Row>
      <Divider>Food List</Divider>
        <Row>
        {foods.map((food) => (
          <FoodBox key={food.name} food={food} deleteFood={() => deleteFood()} />
        ))}
        </Row>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App


