import { Divider, Input } from 'antd';
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

// Iteration 4
function AddFoodForm(props) {

    // const [food, setFood] = useState(props.food)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    
    const handleNameChange = event => {
        setName(event.target.value)
    }
    // const handleImageChange = event => {
    //     setImage(event.target.value)
    // }
    const handleCaloriesChange = event => {
        setCalories(event.target.value)
    }
    const handleServingsChange = event => {
        setServings(event.target.value)
    }

    const handleSubmit = event => {
        // Prevent the site from being refreshed
        event.preventDefault()
        // Create a new movie based on the state values
        const newFood = {
            _id: uuidv4(),
            name,
            image,
            calories,
            servings
        }

        // Add new food to movies list
        props.setFoodlist([newFood, ...props.foodlist])

        // Reset input fields
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }
   

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />


        {/* //condense way to set  */}
        
      <label htmlFor="image">Image</label>
      <Input value={image} type="text" onChange={(e) => setImage(e.target.value)} />
      {/* render antd <Input /> type="text" here */}

      <label htmlFor="calories">Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />
      {/* render antd <Input /> type="number" here */}

      <label htmlFor="servings">Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;