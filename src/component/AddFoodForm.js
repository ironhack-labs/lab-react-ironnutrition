// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

  
  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeImage(event) {
    setImage(event.target.value)
  }

  function handleChangeCalories(event) {
    setCalories(event.target.value)
  }

  function handleChangeServings(event) {
    setServings(event.target.value)
  }

  const handleSubmit = (e) => {        // <==  ADD
    e.preventDefault();
    const newFood = { name, image, calories, servings };
 
    console.log("Submitted: ", newFood);

    props.addNewFood(newFood);          // <== ADD
 
    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }
  



  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name='title' value={name} type="text" onChange={handleChangeName} />

      <label>Image</label>
      <Input name='image' value={image} type="text" onChange={handleChangeImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleChangeCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleChangeServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
