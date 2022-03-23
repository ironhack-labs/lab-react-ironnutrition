import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import { FoodBox } from './components/FoodBox';
import { useState } from 'react';
import { AddFood } from './components/AddFood';
import { FilterFood } from './components/FilterFood';
import { TodaysFood } from './components/TodaysFood';

function App() {
  const [food, setFood] = useState(foods);

  //Todays food
  const [foodsSelection, setFoodsSelection] = useState([]);

  function foodSelect(newFood) {
    let todaysFood = foodsSelection.slice();
    let name = newFood.name;
    const foundFood = foodsSelection.find((food) => food.name === name);

    foundFood
      ? (foundFood.quantity += newFood.quantity)
      : todaysFood.push(newFood);

    setFoodsSelection(todaysFood);
  }

  const deleteFood = (name) => {
    const newFoodList = foodsSelection.filter((food) => food.name !== name);
    setFoodsSelection(newFoodList);
  };

  //Add food
  const [form, setForm] = useState(false);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    const updatedFilterFood = [...filterFood, newFood];

    setFood(updatedFood);
    setFilterFood(updatedFilterFood);
    handleForm();
  };

  const handleForm = () => {
    form ? setForm(false) : setForm(true);
  };

  //Search food
  const [filterFood, setFilterFood] = useState(foods);

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

        <button
          className="button is-primary is-rounded"
          style={{
            marginLeft: '30px',
            paddingLeft: '25px',
            width: '30%',
            marginTop: '80px',
          }}
          onClick={handleForm}
        >
          {form ? 'Cancel' : 'Add new food'}
        </button>
        {form && <AddFood handleForm={addNewFood} />}

        <FilterFood filterFood={filterFoodList} />
        {food.map((dish, index) => {
          return <FoodBox key={index} {...dish} foodSelect={foodSelect} />;
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
            <TodaysFood
              foodsSelection={foodsSelection}
              deleteFood={deleteFood}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
