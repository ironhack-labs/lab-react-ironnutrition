import './AddFormForm.css'
import { useState } from "react"

const AddFoodForm = ({ addNewFood }) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameChange = event => setName(event.target.value)
    const handleImageChange = event => setImage(event.target.value)
    const handleCaloriesChange = event => setCalories(event.target.value)
    const handleServingsChange = event => setServings(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        addNewFood(newFood)
    }

    return (
        <section className='AddFoodForm'>

            <h2>Add Food Entry</h2>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name: </label>
                <input name="name" type="text" value={name} onChange={handleNameChange} />

                <label htmlFor="image">Image: </label>
                <input name="image" type="text" value={image} onChange={handleImageChange} />

                <label htmlFor="calories">Calories: </label>
                <input name="calories" type="number" value={calories} onChange={handleCaloriesChange} />

                <label htmlFor="servings">Servings: </label>
                <input name="servings" type="number" value={servings} onChange={handleServingsChange} />

                <input type="submit" value="Create" />
            </form>

        </section>
    )
}

export default AddFoodForm