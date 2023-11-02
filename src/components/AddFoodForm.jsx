import React from 'react'
import { useState } from 'react'


function AddFoodForm(food) {  // Buttons not working!!!!!! :(  Why?

    const [names, setNames] = useState("");
    const [images, setImages] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
  
    const handleNameInput =(e)=>{
        setNames(e.target.value);
    }
    const handleImagesInput =(e)=>{
        setImages(e.target.value);
    }
    const handleCaloriesInput =(e)=>{
        setCalories(e.target.value);
    }
    const handleServingsInput =(e)=>{
        setServings(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newFood = {
            names,
            images,
            calories,
            servings
        }
        food.addNewFood(newFood);
        setNames("");
        setImages("");
        setCalories("");
        setServings("");
    }

  return (
    <div>
        <h4>Add your own food!</h4>
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" 
                      name="name"
                      value={names}
                      onChange = {handleNameInput}
                ></input>
            </label>
            <label>Image:
                <input type="text" 
                       name="image"
                       value={images}
                       onChange = {handleImagesInput}
                ></input>
            </label>
            <label>Calories:
                <input type="number" 
                        name="calories"
                        value ={calories}
                        onChange = {handleCaloriesInput}
                ></input>
            </label>
            <label>Servings:
                <input type="number" 
                        name="servings"
                        value ={servings}
                        onChange={handleServingsInput}
                ></input>
            </label>
            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default AddFoodForm;