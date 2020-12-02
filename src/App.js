import React, { useState, useEffect } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import TodaysFoods from './components/TodaysFoods';

function App() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [foodList, setFoodList] = useState(foods);
  const [search, setSearch] = useState('');
  const [todaysFood, setTodaysFood] = useState([]);

  const toggleForm = () => {
    const clicked = !formDisplay;
    setFormDisplay(clicked);
  };

  const addNewFood = (newFoodObj) => {
    const foodsCopy = [newFoodObj, ...foodList];
    setFoodList(foodsCopy);
    toggleForm();
  };

  const addTodaysFood = (foodObj) => {
    let todaysFoodCopy = [...todaysFood];

    let exists = false;
    let index = undefined;

    todaysFoodCopy.forEach((item, i) => {
      if (item.name === foodObj.name) {
        exists = true;
        index = i;
      }
    });

    if (!exists) {
      todaysFoodCopy.push(foodObj);
    }

    if (exists) {
      let prev = Number(todaysFoodCopy[index].quantity);
      let newquan = Number(foodObj.quantity);
      todaysFoodCopy[index].quantity = prev + newquan;
    }

    console.log(todaysFoodCopy);

    setTodaysFood(todaysFoodCopy);
  };

  const trashAFood = (foodObj) => {
    let todaysFoodCopy = [...todaysFood];

    todaysFoodCopy.forEach((item, index) => {
      if (item.name === foodObj) {
        todaysFoodCopy.splice(index, 1);
      }
    });
    setTodaysFood(todaysFoodCopy);
  };

  useEffect(() => {
    const foodCopy = [...foodList];
    const filteredFood = foodCopy.filter((food) => food.name.includes(search));
    setFoodList(filteredFood);
  }, [search]);

  return (
    <div className="App">
      <div className="searchBar">
        <form>
          <input
            value={search}
            className="input is-info"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="belowSearch">
        <div className="leftSide">
          {foodList.map((item) => {
            return (
              <FoodBox key={item.name} addFood={addTodaysFood} food={item} />
            );
          })}
        </div>
        <div className="rightSide">
          <div className="todayFoodContainer">
            <TodaysFoods delete={trashAFood} todaysFoodArray={todaysFood} />
          </div>
          <div className="form">
            <button onClick={toggleForm} className="button is-info">
              {!formDisplay ? 'Show Add Food Form' : 'Hide Form'}
            </button>
            {formDisplay ? (
              <div className="AddFoodForm">
                <AddFood addFood={addNewFood} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
