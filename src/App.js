import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './Components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...foodList, newFood];
    setFoodList(updatedFood);
  };

  return (
    <div className="App">
      
      <AddFoodForm addNewFood={addNewFood} />

      <Button> Hide Form </Button>
      <Button> Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodList.map((food) => {
          return <FoodBox key={food._id} food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
