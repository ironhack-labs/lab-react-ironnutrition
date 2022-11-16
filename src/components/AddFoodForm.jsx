import { useState } from 'react';
import { Row, Col } from 'antd';

//Create Form
function AddFood(props) {
  const {createFood} = props
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.checked);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, servings };
    
    createFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    }

  return (
    <div>
      <h4>Add Food</h4>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input type="text" value={name} onChange={handleName} />

        <br />
        <br />

        <label htmlFor="image">Image </label>
        <input type="text" value={image} onChange={handleImage} />

        <br />
        <br />

        <label htmlFor="calories">Calories </label>
        <input type="number" value={calories} onChange={handleCalories} />

        <br />
        <br />

        <label htmlFor="servings">Servings </label>
        <input type="number" value={servings} onChange={handleServings} />

        <br />
        <br />

        <button type='submit'>Create Food </button>
      </form>
    </div>
  );
};

export default AddFood;




