import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
    const {createFood} = props;

      //We need to create state for every single input
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');
    const [servings, setServing] = useState('');

    //We also need a handler function that will be triggered everytime we use that input
    const handleName = (e) => setName(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleServing = (e) => setServing(e.target.value);

    //This handles the submit of the whole form
    const handleSubmit = (e) => {
    //This prevents the page reloadig
    e.preventDefault();

    const newFood = { name, calories, image, servings };
    createFood(newFood);

    //This will clear the state and therefore the values on all inputs after we submit the form
    setName('');
    setCalories('');
    setImage('');
    setServing('');
    };


  return (
    <form onSubmit={handleSubmit} >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" value={name} onChange={handleName} />

      <label>Image</label>
      <Input  type="text" value={image} onChange={handleImage}/>

      <label>Calories</label>
      <Input  type="number" value={calories} onChange={handleCalories}/>

      <label>Servings</label>
      <Input type="number" value={servings} onChange={handleServing}/> 

      <button type="submit"> Create Food</button>
    </form>
  );
}

export default AddFoodForm;
