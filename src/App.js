import React, { useState } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './Components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [showFoods, setShowFoods] = useState(foodsJSON);


    const deleteFood = (foodName) => {
    const filteredFoods = foods.filter((food) => {
      return food.name !== foodName; 
    });
    setFoods(filteredFoods);
  };
  
  const addToList = (food) => {
    const foodsCopy = [food, ...foodsJSON];
    setFoods(foodsCopy);
  }

  const searchFoods = (query) => {
    const filteredFoods = showFoods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFoods(filteredFoods);
  };

  return (
    <div className="App">
      
      
      <div>

      <AddFoodForm addToList={addToList}/>

      <Search searchFoods={searchFoods} />

      <Button> Hide Form / Add New Food </Button>


      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>

        {foods.map((food) => {
          return <FoodBox food={food} deleteFood={deleteFood} key={foods.name} />;
        })}
      </Row>
        
      </div>


    </div>
  );
}

export default App;
