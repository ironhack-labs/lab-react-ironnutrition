import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [listOfFoods, setListOfFoods] = useState(foods);

  const createFood = (foodDetails) => {
    setListOfFoods( (prevListOfFoods) => {
      const newList = [foodDetails, ...prevListOfFoods];
      return newList;
    });
  }


  return (
    <div className="App">
    <Row style={{ width: '100%', justifyContent: 'center' }}>

      <AddFoodForm callbackToCreate={createFood} />
      </Row>
      
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {listOfFoods.map((food) => (
          <FoodBox food={food} />
        ))}
      </Row>
      </div>
  );
}

export default App;
