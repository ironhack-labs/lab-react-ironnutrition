import React, { useState } from 'react';
import foodsArray from '../foods.json';
import { FoodBox } from './FoodBox';
import { FormModal } from './Modal';
import { SearchBar } from './SearchFood';

export const FoodsList = () => {
  const [foods, setFoods] = useState(foodsArray);
  const [isOpen, setModal] = useState(false);

  const handleClick = () => setModal(!isOpen);

  const addFood = newFood => {
    console.log('food added', newFood);

    setFoods([...foods, newFood]);
  };

  const handleSearch = e => {
    console.log(e.target.value);
    const foundFoods = foods.filter(food =>
      food.name.toLowerCase().includes(e.target.value)
    );
    console.log(foundFoods);
    setFoods(foundFoods);
  };

  return (
    <>
      <SearchBar searchFood={handleSearch} />
      <div>
        <span>Add new food</span>
        <button className="button is-small" onClick={handleClick}>
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>

      <FormModal isOpen={isOpen} closeModal={handleClick} addFood={addFood} />

      <div className="columns">
        <div className="column">
          {foods.map((foodItem, i) => (
            <FoodBox
              key={i}
              id={i}
              name={foodItem.name}
              calories={foodItem.calories}
              image={foodItem.image}
              quantity={1 || foodItem.quantity}
            />
          ))}
        </div>
        <div className="column">Today's foods</div>
      </div>
    </>
  );
};
