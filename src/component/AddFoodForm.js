import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)
  const [showForm, setShowForm] = useState(true)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    console.log("Submitted: ", newFood);

    props.addNewFood(newFood);

    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }

  function hideShowForm() {
    setShowForm(!showForm)
  }
  
  if (showForm){
    return (
      <div>
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
        <button onClick={hideShowForm}>{showForm ? 'Hide Form' : 'Add a new food'}</button>
      </div>)
  }else{
    return(
      <div>
      <button onClick={hideShowForm}>{showForm ? 'Hide Form' : 'Add a new food'}</button>
      </div>)
  }
}

export default AddFoodForm;
