import React, { useState } from 'react';
import foodList from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import SearchFood from './components/SearchFood';
import TodayFood from './components/TodayFood';
import AddButton from './components/AddButton';
import FoodForm from './components/FoodForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [foods, setFoods] = useState(foodList);
  const [search, setSearch] = useState('')

  const toogleShowForm = () => {
    setShowForm(!showForm);
  };

  const addNewFood = (newFood) => {
    newFood.quantity = 0;

    setFoods([...foods, newFood]);
  };

  const searchedFoods = (foodName) => {
    let foodsCopy = [...foods];
    let filtered = foodsCopy.filter(
      (food) =>
        food.name.toLocaleLowerCase().includes(foodName.name.toLocaleLowerCase())
    );
    setSearch(filtered)
  };

  return (
    <div className="App">
      <section className="section">
        <h1 className="title">IronNutrition</h1>
      </section>
      <section className="section">
        {showForm ? null : (
          <AddButton showForm={showForm} toogleShowForm={toogleShowForm} />
        )}
        {showForm && (
          <FoodForm addNewFood={addNewFood} toogleShowForm={toogleShowForm} />
        )}
        <SearchFood searchedFoods={searchedFoods} search={search}/>
      </section>
      <section className="section columns">
        <div className="column is-three-qurters">
          <FoodBox foods={search} />
        </div>
        <div className="column is-one-quarter ">
          <TodayFood />
        </div>
      </section>
    </div>
  );
}

export default App;

// {
//   "name": "Gnocchi",
//   "calories": 500,
//   "image": "https://i.imgur.com/93ekwW0.jpg",
//   "quantity": 0
// },
