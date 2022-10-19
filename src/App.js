// src/App.js
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [listOfFoods, setListOfFoods] = useState(foods);

  const addFood = (foodDetails) => {
    setListOfFoods((prevListOfFoods) => {
      const newList = [foodDetails, ...prevListOfFoods];
      return newList;
    });
  };

  return (
    <div>
      <Button> Hide Form / Add New Food </Button>
      <AddFoodForm callbackToAdd={addFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {listOfFoods.map((foodDetails) => {
          return <FoodBox key={foodDetails.name} food={foodDetails} />;
        })}
      </Row>
    </div>
  );
}
export default App;
