import React, { useState, Fragment } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

import classes from './App.module.css';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [filteredFoodList, setFilteredFoodList] = useState(foodList);
  const [todaysFoods, setTodaysFoods] = useState([]);

  const addToTodaysFoodList = (food, num) => {
    num = parseInt(num);
    const idx = todaysFoods.findIndex((el) => el.name === food.name);
    if (idx !== -1) {
      const newArray = [...todaysFoods];
      newArray[idx].quantity += num;
      setTodaysFoods(newArray);
    } else {
      setTodaysFoods([...todaysFoods, { ...food, quantity: num }]);
    }
  };

  const deleteTodaysFoods = (food) => {
    setTodaysFoods((todaysFoods) =>
      todaysFoods.filter((el) => el.name !== food.name)
    );
  };

  let foodBoxes = filteredFoodList.map((food) => (
    <FoodBox
      food={food}
      key={food.image}
      addTodaysFoods={addToTodaysFoodList}
    />
  ));

  const showFormHandler = () => {
    setShowForm((showForm) => !showForm);
  };

  const formSubmitHandler = (food) => {
    setFoodList([...foodList, food]);
    setFilteredFoodList([...filteredFoodList, food]);
    setShowForm((showForm) => !showForm);
  };

  const showFormClass = showForm ? 'hide-button' : 'show-button';

  const searchHandler = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    setFilteredFoodList(
      foodList.filter((food) =>
        food.name.toLowerCase().includes(lowerSearchTerm)
      )
    );
  };

  return (
    <Fragment>
      <h1 className={classes.appHeading}>Nutrition Application</h1>
      <Form onSubmit={formSubmitHandler} showForm={showForm} />
      <button onClick={showFormHandler} className={showFormClass}>
        Add New Food
      </button>
      <Search onInput={searchHandler} />
      <div className="foodContainer">
        <div>{foodBoxes}</div>
        <TodaysFood foods={todaysFoods} onDelete={deleteTodaysFoods} />
      </div>
    </Fragment>
  );
}

export default App;
