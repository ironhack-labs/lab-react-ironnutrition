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

  const [todayFood, setTodayFood] = useState([]);

  //Todays food
  const todaysFood = (name) => {
    const todaysFoodList = foods.filter((food) => {
      return food.name === name;
    });

    let list = [...todayFood, todaysFoodList];

    setTodayFood(list);
    console.log(todayFood);
  };
  // const [select, setSelect] = useState([]);
  // const [anySelected, setAnySelected] = useState(false);
  // let totalCal = 0;

  // const selectedFood = (food) => {
  //   let selectFood = [...select, food];

  //   setSelect(selectFood);
  //   setAnySelected(true);
  // };

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
          return <FoodBox key={index} {...dish} todaysFood={todaysFood} />;
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
              {todayFood.map((food) => {
                return (
                  <li>
                    {food.name} {food.calories}
                  </li>
                );
              })}
              {/* {anySelected &&
                select.map((food) => {
                  totalCal += parseInt(food.calories) * parseInt(food.quantity);

                  return (
                    <li>
                      {food.quantity} {food.name} =
                      {food.calories * food.quantity} cal
                    </li>
                  );
                })} */}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
