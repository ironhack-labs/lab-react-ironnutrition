import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import { FoodBox } from './components/FoodBox';
import { useState } from 'react';
import { AddFood } from './components/AddFood';
import { FilterFood } from './components/FilterFood';

function App() {
  const [food, setFood] = useState(foods);
  const [filterFood, setFilterFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    const updatedFilterFood = [...filterFood, newFood];

    setFood(updatedFood);
    setFilterFood(updatedFilterFood);
  };

  const filterFoodList = (str) => {
    let filteredFood =
      str === ''
        ? filterFood
        : filterFood.filter((food) =>
            food.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
          );

    setFood(filteredFood);
  };

  return (
    <div className="App columns">
      <div className="column">
        <h1 style={{ fontSize: '6rem', marginLeft: '30px' }}>
          <strong style={{ color: 'lightgrey' }}>Iron</strong>nutrition
        </h1>

        <AddFood addFood={addNewFood} />

        <FilterFood filterFood={filterFoodList} />

        {food.map((dish, index) => {
          return <FoodBox key={index} {...dish} />;
        })}
      </div>

      <div
        className="column"
        style={{
          backgroundColor: 'lightgreen',
        }}
      >
        <article
          className="message is-link"
          style={{ width: '50%', marginTop: '50px', marginLeft: '5%' }}
        >
          <div className="message-body" style={{ backgroundColor: 'white' }}>
            <h1 style={{ fontSize: '1.2rem' }}>
              <strong>Today's foods</strong>
            </h1>
            <ul>
              <li></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
