import {useState} from 'react';
import { Divider, Input, Button } from 'antd';


// Iteration 4
function AddFoodForm(props) {
const {createFood} = props

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    //Create a handler function for every input/state
    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);

    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();


    let newFood = { name, image, calories, servings };

    createFood(newFood);

    //Reset the states
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <div>
      <label htmlFor="name">Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label htmlFor="image">Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label htmlFor="calories">Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label htmlFor="servings">Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <Button type="submit">Create</Button>
      </div>
    </form>
  );
}

export default AddFoodForm;
