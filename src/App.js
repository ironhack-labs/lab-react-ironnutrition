import React, { useState } from 'react';
import foods from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';
import Foodbox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';

function App() {
  const [food, setFood] = useState(foods);
  const [foodFilter, setFoodFilter] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [todayArr, setTodayArr] = useState([]);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
    setFoodFilter(updatedFood);
  };

  const displayForm = () => {
    setShowForm(true);
  };

  const calcCalories = ()=>{
    
  }

  const addToTD = (name, calories)=>{
    const newArr = food.filter((e)=>{
      return e.name === name
    })
    newArr.forEach((e)=> {
      e.quantity += 1
      if(e.quantity > 1 ){
      e.calories += calories
      }
    })
    setTodayArr((prevState)=> [...prevState, ...newArr])
  }

  
  return (
    <div className="App">
      <h1>IronNutrition</h1>

      <div>
        <Search className="Search" foodList={foodFilter} setFood={setFood} />
      </div>

      {!showForm && (
        <button className="button is-info" onClick={displayForm}>
          Add New Foods
        </button>
      )}

      {showForm && (
        <AddFoodForm addNewFood={addNewFood} setShowForm={setShowForm} />
      )}
      <div className="List">
        <div>
          {!showForm &&
            food.map((e, i) => {
              return (
                <Foodbox
                  key={i}
                  name={e.name}
                  calories={e.calories}
                  image={e.image}
                  quantity={e.quantity}
                  addToTD= {addToTD}
                />
              );
            })}
        </div>
        {!showForm && <TodaysFoods
                    todayArr={todayArr}
                    
                    />}
      </div>
    </div>
  );
}

export default App;
