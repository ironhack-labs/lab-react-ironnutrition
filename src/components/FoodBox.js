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
  };

  const [state, setState] = useState(initialState);

  const foodMap = state.foods.map((item) => (
    <FoodCard
      name={item.name}
      calories={item.calories}
      quantity={item.quantity}
      image={item.image}
      key={item.name}
    />
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFoodList = [...state.foods];
    newFoodList.push(state.newFood);
    setState({
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

  return (
    <section>
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

      <div className="box">{foodMap}</div>
    </section>
  );
};

export default FoodBox;
