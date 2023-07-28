import React, { useState } from "react"

function AddFoodForm(props) {
    const [allValues, setAllValues] = useState({
        name: "",
        image: "",
        calories: "",
        servings: "",
    })

    const { name, image, calories, servings } = allValues
    const { foods, setFoods } = props

    const handleChange = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newFoods = [allValues, ...foods]
        setFoods(newFoods)
        setAllValues({
            name: "",
            image: "",
            calories: "",
            servings: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Food Entry</h2>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={handleChange} />

            <label>Image</label>
            <input type="text" name="image" value={image} onChange={handleChange} />

            <label>Calories</label>
            <input type="number" name="calories" value={calories} onChange={handleChange} />

            <label>Servings</label>
            <input type="number" name="servings" value={servings} onChange={handleChange} />

            <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm
