// Your code here
import { useState } from "react"
export default function AddFoodForm(props){
    const [foodForm, setFoodForm] = useState(
        {
            name: "",
            image: "",
            calories: "",
            servings: ""
        }
    )
    function inputFunc(e){
        const {name, value } = e.target;
        setFoodForm(prevArr=>{return {...prevArr, [name]: value}})
    }
    function handleClick(e){
        e.preventDefault();
        props.addMeal(foodForm)
    }

    return(
        <div id="form-container">
            <h1>Add Food Entry</h1>
            <form>
                <label htmlFor="name-input">Name</label>
                <input type="text" id="name-input" name="name" onChange={inputFunc} value={foodForm.name}/>

                <label htmlFor="image-input">Image</label>
                <input type="text" id="image-input" name="image" onChange={inputFunc} value={foodForm.image}/>

                <label htmlFor="calories-input">Calories</label>
                <input type="number" id="calories-input" name="calories" onChange={inputFunc} value={foodForm.calories}/>

                <label htmlFor="servings-input">Servings</label>
                <input type="number" id="servings-input" name="servings" onChange={inputFunc} value={foodForm.servings}/>

                <button onClick={handleClick}>Create</button>
            </form>
        </div>
    )
}