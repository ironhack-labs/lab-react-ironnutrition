// Your code here
import React, { useState } from "react";

export default function AddFoodForm({addFood}) {

  const [food, setFood] = useState({
    name: " ",
    image:" ",
    calories: 0,
    servings: 0
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood(food);

    setTimeout(() => {
      setFood({
        name: " ",
        image:" ",
        calories: 0,
        servings: 0
      })
    }, 1);
  }

  const handleChange = (event) => {
    console.log({[event.target.name]: event.target.value})
    setFood((prevState) => ({...prevState, [event.target.name]: event.target.value}));
  }

  return (
    <form className="food-form" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="name" type="text" value={food.name} onChange={handleChange}></input>

        <br/>
        <label>Image URL: </label>
        <input name="image" type="text" value={food.image} onChange={handleChange}></input>

        <br/>
        <label>Calories: </label>
        <input name="calories" type="number" value={food.calories} onChange={handleChange}></input>

        <br/>
        <label>Servings: </label>
        <input name="servings" type="number" value={food.servings} onChange={handleChange}></input>

        <br/>
        <button className="button">Create</button>
    </form>
  )
}
