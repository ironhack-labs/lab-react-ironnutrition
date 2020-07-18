import React, { useState } from 'react';
import FoodCard from './FoodCard';
import FormFood from './FormFood';
import Search from './Search';

const FoodBox = ({ food }) => {
  const initialState = {
    foods: food,
    form: false,
    newFood: {
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    },
    todaysFoods: [],
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFoodList = [...state.foods];
    newFoodList.push(state.newFood);
    setState({
      ...state,
      foods: newFoodList,
      form: false,
      newFood: {
        name: '',
        calories: '',
        image: '',
        quantity: 0,
      },
    });
  };

  const handleClick = () => {
    setState({
      ...state,
      form: !state.form,
    });
  };

  const handleInputChange = (event) => {
    setState({
      ...state,
      newFood: {
        ...state.newFood,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSearch = (event) => {
    let currentList = [...state.foods];
    let newList = [];

    if (event.target.value !== '') {
      newList = currentList.filter((item) => {
        const listItem = item.name.toLowerCase();
        const filter = event.target.value.toLowerCase();
        return listItem.includes(filter);
      });
    } else {
      newList = food;
    }

    setState({
      ...state,
      foods: newList,
    });
  };

  const foodMap = state.foods.map((item) => (
    <FoodCard
      name={item.name}
      calories={item.calories}
      quantity={item.quantity}
      image={item.image}
      key={item.name}
      setState={setState}
      currentState={state}
    />
  ));

  const foodList = state.todaysFoods.map((item) => (
    <li key={item.name}>
      {item.quantity} {item.name} = {item.quantity * item.calories} cal
    </li>
  ));

  const calculateCalories = () => {
    if (state.todaysFoods.length !== 0) {
      return state.todaysFoods
        .map((item) => item.quantity * item.calories)
        .reduce((a, b) => a + b);
    } else {
      return 0;
    }
  };

  return (
    <section>
      <header>
        <Search foodList={state.foods} handleSearch={handleSearch} />
        <button onClick={handleClick} className="button is-link">
          {state.form ? 'Hide form' : 'Show form'}
        </button>
        {state.form ? (
          <FormFood
            onSubmit={handleSubmit}
            onChange={handleInputChange}
            value={state}
          />
        ) : null}
      </header>
      <main className="container">
        <div className="box">{foodMap}</div>
        <aside className="foodList">
          <h1>Today's Foods</h1>
          <ul>{foodList}</ul>
          <p>Total: {calculateCalories()} cal</p>
        </aside>
      </main>
    </section>
  );
};

export default FoodBox;
