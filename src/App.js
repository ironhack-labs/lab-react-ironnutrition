import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJS from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';

export default function App() {
  const [foods, setFoods] = useState(foodsJS);
  const [foodsCopy, setFoodsCopy] = useState(foodsJS);
  const [checkoutData, setCheckout] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick(food, quantity) {
    let checkoutFood = {
      name: food.name,
      quantity: quantity,
      calories: food.calories,
    };

    setCheckout([checkoutFood, ...checkoutData]);
  }

  function handleTheForm() {
    setShowForm(!showForm);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let newFood = {
      name: event.target.name.value,
      number: event.target.number.value,
      image: event.target.image.value,
    };

    setFoods([newFood, ...foods]);
    setFoodsCopy([newFood, ...foods]);
    setShowForm(false);
  }

  function handleSearch(event) {
    let searchedFood = event.target.value;
    let filteredFoods = foods.filter((food) => {
      return food.name.includes(searchedFood);
    });
    setFoodsCopy(filteredFoods);
  }

  return (
    <>
      <Search btnSearch={handleSearch} />
      {/*Add Form - checking if it is shown and adding a food item to the list*/}
      {showForm ? (
        <AddForm btnSubmit={handleSubmit} />
      ) : (
        <button onClick={handleTheForm}>Show Form</button>
      )}

      <br />
      <br />
      {foodsJS.map((elem, i) => {
        return <FoodBox key={i} food={elem} btnClick={handleClick} />;
      })}
    </>
  );
}
