import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);  

  const showHideForm = () => {
    setShowForm(!showForm);
  };

  const filterFoods = input => {    
    setFoodList(    
      [...foods].filter(element => {
        return element.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      
      <button onClick={showHideForm}>Add New Foods</button>
      {showForm ? <Form foodList={foodList} setFoodList={setFoodList} showHideForm={showHideForm}/> : ''}

      <SearchBar
        filterFoods={filterFoods}        
      />
      
      {foodList.map((element) => {
        return (
          <FoodBox
            name={element.name}
            calories={element.calories}
            image={element.image}
            key={element.name}
          />
        );
      })}
    </div>
  );
};

export default App;
