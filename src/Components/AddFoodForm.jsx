import React, {useState} from 'react'
import foodsJSON from "../foodsJSON.json";
import { Divider, Input } from 'antd'; 


function AddFoodForm({addFood}) {

const [foodList, setFoodList] = useState(foodsJSON);

const [name, setName] = useState('');
const [image, setImage] = useState('');
const [calories, setCalories] = useState(0);
const [servings, setServings] = useState(1);


//Handler fucntions for the form
    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);
    
    //Handler for the submit button

    const handleSubmit = (e) => {

        e.preventDefault();

        const newRecipe = {name, image, calories, servings};
        addFood(newRecipe);

        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }

    


  return (
    <div>
        <h2>Add a recipe</h2>

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={handleName}/>

            <label htmlFor="image">Image</label>
            <input type="text" name="image" value={image} onChange={handleImage}/>

            <label htmlFor="calories">Calories</label>
            <input type="number" name="calories" value={servings * calories} onChange={handleCalories}/>

            <label htmlFor="servings">Servings</label>    
            <input type="number" name="servings" value={servings} onChange={handleServings}/>

            <button type="submit">Add a recipe</button>

        </form>


    </div>
  )
  
}
export default AddFoodForm