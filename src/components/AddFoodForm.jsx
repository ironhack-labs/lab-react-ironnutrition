import { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ createFood }) {
  //For every single input we need a state variable
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //Create a handler function for every input/state
  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFood = { name, image, calories, servings };
    //We trigger the createMovie function that will update the state on the parent component
    createFood(newFood);
    //Reset the states
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div style={{ maxWidth: '25vw', margin: '20px auto' }}>
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input value={name} type="text" onChange={handleName} />

        <label htmlFor="image">Image</label>
        <Input value={image} type="text" onChange={handleImage} />

        <label htmlFor="calories">Calories</label>
        <Input value={calories} type="number" onChange={handleCalories} />

        <label htmlFor="servings">Servings</label>
        <Input value={servings} type="number" onChange={handleServings} />

        <button style={{ margin: '10px' }}>Create Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
