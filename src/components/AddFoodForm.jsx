// Your code here
import { useState } from "react"

function AddFoodForm(props){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleImageInput = (e) => {
        setImage(e.target.value)
    }
    const handleCaloriesInput = (e) => {
        setCalories(e.target.value)
    }
    const handleServingsInput = (e) => {
        setServings(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings

        }

        props.addNewFood(newFood)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }




    return (
        <div>
        <h4>Add a food here</h4>
        <form onSubmit={handleSubmit}>
            <label >Name<input name="name" type="text" value={name} onChange={handleNameInput} /></label>
            <label >Image<input name="image" type="text" value={image} onChange={handleImageInput} /></label>
            <label >Calories<input name="calories" type="number" value={calories} onChange={handleCaloriesInput}/></label>
            <label >Servings<input name="servings" type="number" value={servings} onChange={handleServingsInput}/></label>
            <button type="submit">Create</button>
        </form>


        </div>

    )
}

export default AddFoodForm;