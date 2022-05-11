import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import foodArr from './foods.json';
import TodaysFoods from './components/TodaysFoods';
import Form from './components/Form';

function App() {
  const [food, setFood] = useState(foodArr);
  const [form, setForm] = useState(false);
  const [filtered, setFiltered] = useState(food);
  const [today, setToday] = useState([]);

  const formAppear = (e) => {
    setForm(true);
  };
  const filterFood = (e) => {
    const value = e.target.value;
    const filteredFood = food.filter((foods) => {
      return foods.name.toLowerCase().includes(value.toLowerCase());
    });
    setFiltered(filteredFood);
  };
  return (
    <div className="App">
      <button onClick={formAppear}>add</button>
      {form ? (
        <Form
          food={food}
          setFood={setFood}
          setFiltered={setFiltered}
          filtered={filtered}
          setForm={setForm}
        />
      ) : (
        ''
      )}
      <div>
        <form action="">
          <input type="text" onChange={filterFood} />
        </form>
      </div>
      <div>
        {/* Not in the mood to change the form to filtered everywhere :) */}
        <FoodBox
          food={filtered}
          setFood={setFood}
          filtered={food}
          setFiltered={setFiltered}
          today={today}
          setToday={setToday}
        />
        <TodaysFoods
          food={food}
          setFood={setFood}
          filtered={filtered}
          setFiltered={setFiltered}
          today={today}
          setToday={setToday}
        />
      </div>
    </div>
  );
}

export default App;
