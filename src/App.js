import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';

function App() {
  const [foodData, setFoodData] = useState(foods);
  const [foodDataMaster, setFoodMaster] = useState(foods);
  function addFood(newFood) {
    const updatedFoods = [...foodData, newFood];

    setFoodData(updatedFoods);
    setFoodMaster(updatedFoods);
  }
  return (
    <div className="App">
      <div>
        <AddFoodForm addFood={addFood} />
        <Button> Hide Form / Add New Food </Button>
        {/* Display Search component here */}

        <Divider>Food List</Divider>
      </div>
      <div className="grid">
        {foodData.map((food) => {
          return (
            <div>
              <Row
                style={{
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <FoodBox food={food} />
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
