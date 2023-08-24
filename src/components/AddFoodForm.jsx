// Your code here
import React from 'react'
import { useState } from 'react'

const AddFoodForm = (props) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameInput = (e) =>{
        setName(e.target.value)
    }
    const handleImageInput = (e) =>{
        setImage(e.target.value)
    }
    const handleCaloriesInput = (e) =>{
        setCalories(e.target.value)
    }
    const handleServingsInput = (e) =>{
        setServings(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFood = {
            name,
            image,
            calories,
            servings
        }
        props.addNewFood(newFood)

        console.log(newFood)

        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }
  return (
    <div>
        <h4>Add Food</h4>
        <form onSubmit={handleSubmit}>
            <label> <strong>Name: </strong>
               <input name='name' type='text' value={name} onChange={handleNameInput}></input>
            </label>
            <label> <strong>Image: </strong>
                <input name='image' type='text' value={image} onChange={handleImageInput}></input>
            </label>
            <label> <strong>Calories: </strong>
                <input name='calories' type='number' value={calories}onChange={handleCaloriesInput}></input>
            </label>
            <label> <strong>Servings: </strong>
                <input name='servings' type='number' value= {servings}onChange={handleServingsInput}></input>
            </label>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default AddFoodForm