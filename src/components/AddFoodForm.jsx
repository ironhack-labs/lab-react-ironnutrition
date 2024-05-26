import { useState } from "react";

const initialState = {
  name: "",
  image: "",
  calories: 0,
  servings: 0
}

function AddFoodForm({ addFood }) {
  const [food, setFood] = useState(initialState)

  const handleInputChange = (event) => {
    setFood({
      ...food,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    addFood({
      id: Math.random().toString(),
      ...food
    })

    setFood(initialState)
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter food name..."
        value={food.name}  
        onChange={handleInputChange}
      />

      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="Enter food image URL..."
        value={food.image}
        onChange={handleInputChange}
      />
      
      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        id="calories"
        name="calories"
        value={food.calories}
        onChange={handleInputChange}
      />
      
      <label htmlFor="servings">Servings:</label>
      <input
        type="number"
        id="servings"
        name="servings"
        value={food.servings}
        onChange={handleInputChange}
      />

      <button type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm;

