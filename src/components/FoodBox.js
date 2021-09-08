import React from 'react';
import './FoodBox.css';

const handleFoodQuantity = (food, setFoodList, e, foodList) => {
  food.quantity = e.target.value;
  const index = foodList.indexOf(food);
  foodList.splice(index, 1, food);
  setFoodList([...foodList]);
};

const handleAddFood = (food, setTodayFoods, todayFoods) => {
  const newFood = { ...food };
  let foodIndex;
  if (
    todayFoods.some((food, index) => {
      if (food.name === newFood.name) {
        foodIndex = index;
        return true;
      } else {
        return false;
      }
    })
  ) {
    todayFoods[foodIndex].quantity = newFood.quantity;
  } else if (newFood.quantity > 0) {
    todayFoods.push(newFood);
  }

  todayFoods = todayFoods.filter((food) => food.quantity > 0);
  setTodayFoods([...todayFoods]);
};

const FoodBox = ({
  food,
  setFoodList,
  setTodayFoods,
  foodList,
  todayFoods,
}) => {
  return (
    <div className="food-box-container box is-flex">
      <div className="food-image-info is-flex">
        <figure className="image is-64x64 is-flex">
          <img src={food.image} alt="food" />
        </figure>
        <div className="food-info-container">
          <p className="title is-6">{food.name}</p>
          <p className="subtitle is-7">{food.calories} cal</p>
        </div>
      </div>
      <input
        className="input"
        type="number"
        min="0"
        value={food.quantity}
        onChange={(e) => handleFoodQuantity(food, setFoodList, e, foodList)}
      />
      <button
        onClick={() => handleAddFood(food, setTodayFoods, todayFoods)}
        className="button is-info"
      >
        +
      </button>
    </div>
  );
};

export default FoodBox;
