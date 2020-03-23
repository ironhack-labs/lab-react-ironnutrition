import React, { useState, useEffect } from 'react';
import foodsArray from '../foods.json';
import { FoodBox } from './FoodBox';
import { FormModal } from './Modal';
import { SearchBar } from './SearchFood';
import { TodayFoods } from './TodayFoods';

export const FoodsList = () => {
  const [foods, setFoods] = useState(foodsArray);
  const [isOpen, setModal] = useState(false);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [isSearching, setSearch] = useState(false);
  const [todayFoods, setTodayFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState('');

  const handleClick = () => setModal(!isOpen);

  const createNewFood = newFood => {
    console.log('food added', newFood);

    setFoods([...foods, newFood]);

    setFilteredFoods([]); //clean filtered array if user's adding new foods
    setSearch(false); //reset searching status
  };

  const handleSearch = e => {
    const foundFoods = foods.filter(food =>
      food.name.toLowerCase().includes(e.target.value)
    );

    setFilteredFoods(foundFoods);
    setSearch(true);
  };

  const addTodayFood = (id, quantity) => {
    const foodToAdd = foods.find(food => food.name === id);
    setTodayFoods([...todayFoods, { ...foodToAdd, quantity }]);
  };

  useEffect(() => {
    const calculateCalories = () =>
      todayFoods.reduce((acc, cur) => acc + cur.calories * cur.quantity, 0);

    let total = calculateCalories();
    setTotalCalories(total);
  });

  return (
    <>
      <SearchBar searchFood={handleSearch} />
      <div>
        <span>Add new food</span>
        <button className="button is-small" onClick={handleClick}>
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>

      <FormModal
        isOpen={isOpen}
        closeModal={handleClick}
        addFood={createNewFood}
      />

      <div className="columns">
        <div className="column">
          {filteredFoods.length !== 0 ? (
            filteredFoods.map((foodItem, i) => (
              <FoodBox
                key={i}
                id={i}
                name={foodItem.name}
                calories={foodItem.calories}
                image={foodItem.image}
                addFood={addTodayFood}
              />
            ))
          ) : isSearching ? (
            <p>Food not found</p>
          ) : (
            foods.map((foodItem, i) => (
              <FoodBox
                key={i}
                id={i}
                name={foodItem.name}
                calories={foodItem.calories}
                image={foodItem.image}
                addFood={addTodayFood}
              />
            ))
          )}
        </div>
        <div className="column">
          <TodayFoods foods={todayFoods} totalCalories={totalCalories} />
        </div>
      </div>
    </>
  );
};
