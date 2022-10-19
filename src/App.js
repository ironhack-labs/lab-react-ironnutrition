import './App.css';
import foods from './foods.json';

import { Row, Divider, Button } from 'antd';
import FoodBox from './component/FoodBox';
import { useState } from 'react';
import AddFoodForm from './component/AddFoodForm';


function App() {
  const [listOfFood, setListOfFood] = useState(foods);
  const [displayForm, setDisplayForm] = useState(true);
  
  const createFood = (foodDetails) => {
    //e.preventDefault();
    setListOfFood( (prevListOfFood) => {
      const newList = [foodDetails, ...prevListOfFood];
      return newList;
    });
   
  }

  const deleteFood = (foodName) => {
    const newList = listOfFood.filter((food) => {
      return food.name !== foodName;
    });
    setListOfFood(newList);
  };

  return (
    <div className="App">
      <AddFoodForm callBackToAddFood={createFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {listOfFood.map((element) => {
    return (
      <FoodBox food ={element} callbackToDelete={deleteFood} />
    );
  })}
        
      </Row>
    </div>
  );
}

export default App;
