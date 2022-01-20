import React, { useState, Fragment } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const foodBoxes = foodList.map((food) => (
    <FoodBox food={food} key={food.image} />
  ));

  const showFormHandler = () => {
    setShowForm((showForm) => !showForm);
  };

  const formSubmitHandler = (food) => {
    setFoodList([...foodList, food]);
    setShowForm((showForm) => !showForm);
  };

  const showFormClass = showForm ? 'hide-button' : 'show-button';
  return (
    <Fragment>
      <Form onSubmit={formSubmitHandler} showForm={showForm} />
      <button onClick={showFormHandler} className={showFormClass}>
        Add New Food
      </button>
      {foodBoxes}
    </Fragment>
  );
}

export default App;
