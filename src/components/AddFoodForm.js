import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {

    //creating the state variables for the inputs
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState()
    const [servings, setServings] = useState()

//putting the event on the inputs
  const handleNameInput = (e) => setName(e.target.value)

  const handleImageInput = (e) => setImage(e.target.value)

  const handleCaloriesInput = (e) => setCalories(e.target.value)

  const handleServingsInput = (e) => setServings(e.target.value)

  //creating submit function for the form submition
  const handleSubmit = (e) => {
    e.preventDefault()

    //new variable that will create a new food object
    const newFood = { name, image, calories, servings }
    
    //ask
    props.addFood(newFood)

    // Reset the state
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange= {handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;