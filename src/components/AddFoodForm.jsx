import React from 'react'
import { useState } from 'react'


function AddFoodForm(props) {

    const [image, setImage] = useState("")
    const [food, setFood] = useState("")
    const [servings, setServings] = useState("")
    const [calories, setCalories] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let newFood = {
            name: food,
            image: image,
            calories: calories,
            servings: servings
        }  

        props.setFoods([newFood, ...props.foods])

        setFood("")
        setImage("")
        setCalories("")
        setServings("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input value={food} type="text" onChange={(e)=>{setFood(e.target.value)}}/> 
                </label>
                <label>
                    Image
                    <input value={image} type="text" onChange={(e)=>{setImage(e.target.value)}}/>
                </label>
                <label>
                    Calories
                    <input value={calories} type="number" onChange={(e)=>{setCalories(e.target.value)}}/>
                </label>
                <label>
                    Servings
                    <input value={servings} type="number" onChange={(e)=>{setServings(e.target.value)}}/>
                </label>
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm