import React from 'react'
import { useState } from 'react';

export default function AddFood(props) {

    const [nameInput, setnameInput] = useState("");
    const [caloriesInput, setcaloriesInput] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newFood = {
            name: nameInput,
          calories: caloriesInput,
        }

        props.createFood(newFood);
        setnameInput("") // clear form
      }
      const handleNameInput = (e) => {
        setnameInput(e.target.value);
      }
      const handleCalorieInput = (e) => {
        setcaloriesInput(e.target.value);
      }

  return (
    <div>
    {/* When a user clicks the button, a form will appear(later) with fields for a name, 
    number of calories, and an image. */}
    <form onSubmit={handleSubmit}>
    <label>
    Name:
        <input
            type="text"
            name="name"
            value={nameInput}
            onChange={handleNameInput}
          />
    </label>
    <label>
    Calories:
        <input
            type="number"
            name="calories"
            value={caloriesInput}
            onChange={handleCalorieInput}
          />
    </label>
    <button type="submit">Add a New Food</button>
    </form>
    </div>
  )
}
