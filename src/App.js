import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';

const App = () => {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const showHideForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <button onClick={showHideForm}>Add New Foods</button>
      {showForm ? <Form foodList={foodList} setFoodList={setFoodList} showHideForm={showHideForm}/> : ''}

      {foodList.map((element) => {
        return (
          <FoodBox
            name={element.name}
            calories={element.calories}
            image={element.image}
          />
        );
      })}
    </div>
  );
};

export default App;
