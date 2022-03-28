import React, { useState } from 'react';
import './model/App.css';
import initialFoods from '../../lab-react-ironnutrition/src/foods.json';
import Box from './Components/Box';
import Form from './Components/Form';

function App() {
  // 1 - 2 App-list
  const [foods, setFoods] = useState(initialFoods);

  const onChangeFood = (changedFood) => {
    const newFoods = foods.map((food) => {
      if (food.name !== changedFood.name) {
        return food;
      }
      return changedFood;
    });

    setFoods(newFoods);
  };

  // 3
  const [showForm, setShowForm] = useState(false);

  const onAddFood = (food) => {
    setFoods([food, ...foods]);
    setShowForm(false);
  };

  // 4
  const onSearch = (event) => {
    const foodName = event.target.value;
    setFoods(initialFoods.filter((food) => food.name.includes(foodName)));
  };

  // 5 y 6
  const [todayList, setTodayList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const onAddToToday = (food) => {
    const newList = [food, ...todayList];
    let newTotalCalories = 0;
    newList.forEach((food) => {
      newTotalCalories += food.quantity * food.calories;
    });
    setTodayList(newList);
    setTotalCalories(newTotalCalories);
  };

  return (
    <div className="container">
      {showForm && (
        <Form onConfirm={onAddFood} onClose={() => setShowForm(false)} />
      )}
      <h1 className="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onChange={onSearch}
        />
      </div>
      <div className="columns">
        <div className="column">
          <button className="button is-info" onClick={() => setShowForm(true)}>
            Add food
          </button>
          {foods.map((food) => {
            return (
              <Box
                food={food}
                onChangeFood={onChangeFood}
                key={`list1.${food.name}`}
                onAddToToday={onAddToToday}
              />
            );
          })}
        </div>
        <div className="column">
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {todayList.map((food) => (
                <li key={`todayList.${food.name}`}>
                  {food.quantity} {food.name} = {food.quantity * food.calories}{' '}
                  cal
                </li>
              ))}
            </ul>
            <strong>Total: {totalCalories} cal</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
