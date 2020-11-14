import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import NewFood from './NewFood/NewFood';
import Search from './Search/Search';
import TodayCalories from './TodayCalories/TodayCalories';

function App() {
  const [state, setState] = useState(foods);
  const [food, setFood] = useState({ list: [], calories: 0 });

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <Search list={state} setSearch={setState} />

      <div className="columns">
        <div className="column">
          {state.map((element) => (
            <FoodBox
              image={element.image}
              name={element.name}
              cal={element.calories}
              qnt={element.quantity}
              foodList={element}
              dayFood={setFood}
            />
          ))}
        </div>
        <div style={{ width: '600px' }}>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <TodayCalories dayFood={food.list} setFood={setFood} />
          </div>
          <div className="column content">
            <h3 className="subtitle">Add new food</h3>
            <NewFood foods={state} setFoods={setState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
