import React, {useState} from 'react'
import { Divider, Input } from 'antd';


function AddFoodForm({addFood}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(1)

    const handleName = (e) => setName(e.target.value)
    const handleImage =(e) => setImage (e.target.value)
    const handleCalories = (e) => setCalories(e.target.value)
    const handleServings = (e) => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {name, image, calories, servings}
        addFood(newRecipe);

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name:</label>
      <Input value={name} name="name" type="text" onChange= {handleName}/>

      <label>Image:</label>
      <input value={image} name="image" type="text" onChange={handleImage} />

      <label>Calories:</label>
      <input value={calories * servings} name="calories" type="number" onChange= {handleCalories} />

      <label>Servings:</label>
      <input value={servings} name ="servings" type="number"  onChange= {handleServings} />

      <button type="submit" >Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm