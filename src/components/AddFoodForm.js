import {useState} from 'react'
import { Input } from 'antd';

const AddFoodForm = ({foodNames, addFood}) => {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

 /* console.log('addFood: ', foodNames) */

  const handleSubmit = e => {
    e.preventDefault()

  /*  const name = e.target.name.value
    const image = e.target.image.value
    const calories = e.target.calories.value
    const servings = e.target.servings.value  */

    addFood({
        name: name,
        image: image,
        calories: calories,
        servings: servings
    })
   
}

const handleNameInput = e => {
    setName(e.target.value)
}
const handleImageInput = e => {
    setImage(e.target.value)
}
const handleCaloriesInput = e => {
    setCalories(e.target.value)
}
const handleServingsInput = e => {
    setServings(e.target.value)
}


  return (
    <div>

<h4>Add New Food</h4>
  
  <form onSubmit={handleSubmit}>
    <label>Name </label>
    <Input 
        type="text" 
        name="name" 
        value={foodNames.foodName} 
        onChange={handleNameInput}
    />
    

    <label>Image </label>
    <Input 
        type="text" 
        name="image" 
        value={foodNames.image} 
        onChange={handleImageInput}
    />

    <label>Calories </label>
    <Input 
        type="number" 
        name="calories" 
        value={foodNames.calories} 
        onChange={handleCaloriesInput}
    />

    <label>Servings </label>
    <Input 
        type="number" 
        name="servings" 
        value={foodNames.servings} 
        onChange={handleServingsInput}
    />
    
    <button type="submit">Create</button>
  </form>
    </div>
  )
}

export default AddFoodForm