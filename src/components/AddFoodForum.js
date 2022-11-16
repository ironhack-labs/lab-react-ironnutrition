import React, { useState } from "react"

const AddFoodForum = (props) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }

    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value)
    }

    const servingsChangeHandler = (event) => {
        setServings(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        console.log(newFood)
        props.onNewFood(newFood)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>
                        Name
                    </label>
                    <input type="text" value={name} onChange={nameChangeHandler} />
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" value={image} onChange={imageChangeHandler} />
                </div>
                <div>
                    <label>Calories</label>
                    <input type='number' value={calories} onChange={caloriesChangeHandler} />
                </div>
                <div>
                    <label>Servings</label>
                    <input type='number' value={servings} onChange={servingsChangeHandler} />
                </div>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}

export default AddFoodForum