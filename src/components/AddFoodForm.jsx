import { Input } from 'antd';
import { useState } from "react";
import { v4 as uuid } from "uuid"


function AddFoodForm (props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
  
    const handleNameInput = e => setName(e.target.value);
 
    const handleImageInput = e => setImage(e.target.value);
 
    const handleCaloriesInput = e => setCalories(e.target.value);

    const handleServingsInput = e => setServings(e.target.value);

    const {foodsArray, setFoodArray} = props

    const handleSubmit = (event) => {
        event.preventDefault();// prevents default GET request from form submission
        
        const key = uuid()
        const foodsArrayCopy = [...foodsArray] // making a copy of our initialState 
        const newFood = {key: key, name: name, image: image, calories: calories, servings: servings} //create an object with input data
        foodsArrayCopy.push(newFood) 
        setFoodArray(foodsArrayCopy) // update the state variable with the new array 
        // reset the inputs to be empty for better UX
        setName("");
        setImage(0);
        setCalories("");
        setServings("")
    }

    return (
    <div className="AddForm"> 
    <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <Input type="text" name="name" value={name} onChange={handleNameInput} />
    
            <label>Image:</label>
            <Input type="text" name="image" value={image} onChange={handleImageInput} />
    
            <label>Calories:</label>
            <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput}/>

            <label>Servings:</label>
            <Input type="number" name="servings" value={servings} onChange={handleServingsInput}/>

            <button type="submit">Create</button>
      </form>
    </div>
    ) 
}


export default AddFoodForm;