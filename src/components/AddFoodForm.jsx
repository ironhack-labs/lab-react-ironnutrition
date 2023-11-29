// Your code here
// AddFoodFrom.jsx
import React from "react";
import {useState} from "react"

const AddFoodForm = ({addFood}) => {
    const [ formData, setFormData ] = useState({
        name: "",
        image: "",
        calories: 0,
        servings: 0,  
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        addFood(formData);
        setFormData({
            name: "",
            image: "",
            calories: 0,
            servings: 0,
          });
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }


    return ( 
        <div class="add-food">
            <form onSubmit={handleSubmit} >
            <label>Name: </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Image: </label>
            <input
              name="image"
              type="text"
              value={formData.image}
              onChange={handleChange}
            />

            <label>Calories: </label>
            <input
              name="calories"
              type="number"
              value={formData.calories}
              onChange={handleChange}
            />

            <label>Servings: </label>
            <input
              name="servings"
              type="number"
              value={formData.servings}
              onChange={handleChange}
            />
            <button type="submit">Create</button>
            </form>
        </div>
     );
}
 
export default AddFoodForm;