// Your code here
import { useState } from "react"


const AddFoodForm = ({ onAddFood }) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()

        const newFood = {
            name: name,
            image: image,
            calories: parseInt(calories),
            servings: parseInt(servings)
        }
        onAddFood(newFood)
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

    return (

        <div className="AddFoodForm">

            <h4>Add Food Entry </h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

                <label htmlFor="image">Image</label>
                <input type="text" id="image" value={image} onChange={(event) => setImage(event.target.value)} />

                <label htmlFor="calories">Calories</label>
                <input type="number" id="calories" value={calories} onChange={(event) => setCalories(event.target.value)} />

                <label htmlFor="servings">Servings</label>
                <input type="number" id="servings" value={servings} onChange={(event) => setServings(event.target.value)} />

                <button type="submit">Create</button>
            </form>

        </div>
    )

}

export default AddFoodForm