import React, { useState } from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu.js';

function App() {
  const [foodList, setFood] = useState(foods);
  const [formVisible, setFormVisible] = useState("");
  const [foodForm, setFoodForm] = useState({
    name: '',
    calories: 0,
    image: '',
  });
  const [todayFood, setTodayFood] = useState([  ]);

  function handleClick(e) {
    e.preventDefault();
    setFormVisible('is-active');
  }

  return (
    <main className="container">
      <h1 className="title is-1">Iron Nutrition</h1>
      <SearchBar listFood={[foods, setFood]} />
      <div className="columns">
        <div className="column is-three-quarters">
          {foodList.map((el, idx) => {
            return (
              <FoodBox
                name={el.name}
                calories={el.calories}
                image={el.image}
                quantity={el.quantity}
                key={idx}
                keyid={idx}
                todayFood={[todayFood, setTodayFood]}
                foodList={[foodList, setFood]}
              />
            );
          })}
        </div>
        <div className="column is-one-quarter">
          <Menu>{[todayFood, setTodayFood]}</Menu>

          <h3 className="title is-3">Add new Food</h3>
          <button className="button is-primary" onClick={handleClick}>
            Add a Food
          </button>

          {formVisible ? (
            <FoodForm
              state={[foodForm, setFoodForm]}
              stateFoods={[foodList, setFood]}
              stateVisible={[formVisible, setFormVisible]}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
