import { useState } from 'react';
import Input from 'antd/lib/input/Input';

function AddFoodForm(props) {
  const { createFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServing = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    createFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input type="text" onChange={handleName} />

        <label htmlFor="image">Image</label>
        <Input type="text" onChange={handleImage} />

        <label htmlFor="calories">Calories</label>
        <Input type="number" onChange={handleCalories} />

        <label htmlFor="serving">serving</label>
        <Input type="number" onChange={handleServing} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFoodForm;