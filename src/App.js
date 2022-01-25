import React, { useEffect, useState } from 'react';
import foodList from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
// import FoodBox from './components/FoodBox';
import FoodCard from './components/FoodCard'
import SearchFood from './components/SearchFood';
import TodayFood from './components/TodayFood';
import AddButton from './components/AddButton';
import FoodForm from './components/FoodForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [foods, setFoods] = useState([...foodList]);
  const [search, setSearch] = useState(foods)
  const [todayFood, setTodayFood] = useState([])

  const toogleShowForm = () => {
    setShowForm(!showForm);
  };

  const addNewFood = (newFood) => {
    newFood.quantity = 0;
    setFoods([...foods, newFood]);
  };

  useEffect(() => {setSearch([...foods])}, [foods]) 

  const searchFoods = (foodName) => {
    const filtered = foods.filter(
      (food) =>
        food.name.toLowerCase().includes(foodName.toLowerCase())
    );
    setSearch(filtered)
  };

  const addTodayFood = (newTodayFood) => {
    const todayCopy = [...todayFood] 

    let found = todayCopy.find(food => food.name === newTodayFood.name)
    if (!newTodayFood.quantity) return
    if(found) {
      found.quantity += newTodayFood.quantity
    } else {
      todayCopy.push(newTodayFood)
    }
    setTodayFood(todayCopy)
  }

  const deleteTodayFood = (id) => {
    let todayCopy = [...todayFood]
    // let deletedFood = todayCopy.filter((food) => {return food.name !== id})
    setTodayFood(todayCopy.filter((food) => {return food.name !== id}))
  }

  return (
    <div className="App">
      <section className="section">
        <h1 className="title">IronNutrition</h1>
      </section>
      <section className="section">
        {!showForm && <AddButton toogleShowForm={toogleShowForm} />}
        {showForm && <FoodForm addNewFood={addNewFood} toogleShowForm={toogleShowForm} />}
        <SearchFood searchedFood={searchFoods} />
      </section>
      <section className="section columns">
        <div className="column is-three-qurters">
          {search.map((food) => (<FoodCard key={food.name} {...food} addTodayFood={addTodayFood} />))}
        </div>
        <div className="column is-one-quarter ">
          <TodayFood todayFood={todayFood} deleteTodayFood={deleteTodayFood} />
        </div>
      </section>
    </div>
  );
}

export default App;


