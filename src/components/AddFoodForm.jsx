import React, { useState } from 'react'

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            id : Math.floor(Math.random()),
            name : name,
            calories : calories,
            servings : servings,
            image : image
        }
        const newList = [newFood, ...props.food]

        props.setFood(newList)
    }

  return (
    <form onSubmit={handleSubmit} className='form'>
        <div class="form-group">
          <label for="foodName">Food Name</label>
          <input
            type="text"
            class="form-control input"
            id="foodName"
            placeholder="Enter Food Name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        <div class="form-group">
          <label for="calories">Calories</label>
          <input
            type="number"
            class="form-control input"
            id="calories"
            placeholder="Enter Calories"
            value={calories}
            onChange={(e)=>{setCalories(e.target.value)}}
          />
        </div>
        <div class="form-group">
          <label for="servings">Servings</label>
          <input
            type="text"
            class="form-control input"
            id="servings"
            placeholder="Enter Servings"
            value={servings}
            onChange={(e)=>{setServings(e.target.value)}}
          />
        </div>
        <div class="form-group">
          <label for="foodName">Image URL</label>
          <input
            type="text"
            class="form-control input"
            id="imgURL"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e)=>{setImage(e.target.value)}}
          />
        </div>
        <button class="btn btn-primary">Submit</button>
       
      </form>
  )
}

export default AddFoodForm
