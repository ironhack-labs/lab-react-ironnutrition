import { useState } from 'react';
import { Row, Divider, Button } from 'antd';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import foodsJsonData from './foods.json';
import './App.css';

function App() {
  const [allFood, setAllFood] = useState(foodsJsonData);
  const [currentFood, setCurrentFood] = useState(foodsJsonData);

  const handleAddNewFood = (newFood) => {
    const updatedFoodList = [...currentFood, newFood];
    const updatedAllFoodList = [...allFood, newFood];

    setCurrentFood(updatedFoodList);
    setAllFood(updatedAllFoodList);
  };

  return (
    <div className="App">
      <AddFoodForm onAddNewFood={handleAddNewFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {currentFood.map((foodItem) => {
          return <FoodBox key={Date.now() * Math.random()} food={foodItem} />;
        })}
      </Row>
    </div>
  );
}

export default App;
