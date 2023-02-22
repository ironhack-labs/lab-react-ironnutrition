import { Input,Button, Form } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function AddFood (props){
const [name, setName] = useState("")
const [image, setImage] = useState ("")
const [calories, setCalories] = useState ("")
const [servings, setServings] = useState ("")


const handleNameInput = (e) => setName(e.target.value)

const handleImageInput = (e) => setImage(e.target.value)

const handleCaloriesInput = (e) => setCalories(e.target.value)

const handleServingsInput = (e) => setServings(e.target.checked)

const handleSubmit = (e) => {
    e.preventDefault()

    const newFood = { name, image, calories, servings }
    props.addFood(newFood)

    // Reset the state
    setName("")
    setImage("")
    setCalories("")
    setServings("")
  }

    return(
        <div className="Add Food">
        <h4>Add Food Entry</h4>
        <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <Input type="text" name="name" value={name} onChange={handleNameInput}/>

            <label htmlFor="image">Image:</label>
            <Input type="text" name="image" value={image} onChange={handleImageInput} />

            <label htmlFor="calories">Calories:</label>
            <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput}/>

            <label htmlFor="serving">Servings:</label>
            <Input type="number" name="serving" value={servings} onChange={handleServingsInput}/>

            <Button type="submit">Add Food</Button>
     

        </Form>
      </div>
    )
}

export default AddFood