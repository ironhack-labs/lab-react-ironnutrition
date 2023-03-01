import React, {useState} from 'react'
import { Input, Button} from 'antd';

function AddFoodForm(props) {

  const {createFood} = props

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [ calories, setCalories] = useState("")
    const [ servings, setServings] = useState("")

    const handleNameInput = (e) => setName(e.target.value)
    const handleImageInput = (e) => setImage(e.target.value)
    const handleCaloriesInput = (e) => setCalories(e.target.value)
    const handleServingsInput = (e) => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        const addFoodEntry = { name, image, calories, servings}

        createFood(addFoodEntry)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }


  return (
    <div className="AddFood">
    <h2>Add Food Entry</h2>
    <form onSubmit={handleSubmit} className="form">
    <label htmlFor="name">Name</label>
    <Input type="text" name="name" value={name} onChange={handleNameInput}/>

    <label htmlFor="image">Image</label>
    <Input type="text" name="image" value={image} onChange={handleImageInput}/>
    
    <label htmlFor="calories">Calories</label>
    <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput}/>

    <label htmlFor="servings">Servings</label>
    <Input type="number" name="servings" value={servings} onChange={handleServingsInput}/>

    <button type="submit">Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm