import React from 'react'
import { useState } from 'react'
import { Divider, Input } from 'antd';

function AddFoodForm(props) {

  const {createFood} = props;

  /* state for every input */  

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  /* handler function for each input so we can update */

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  /* handler function for the form */

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const newFood = { name, image, calories, servings};
    createFood(newFood)

    //This will clear the state and therefore the values on all inputs after we submit the form
    setName('');
    setImage('');
    setCalories(0);
    setServings(0); 
  };

  return (
    <div className='food-form'>
        <form onSubmit={handleSubmit} >
        <Divider>Add Food Entry</Divider>
            <label htmlFor="name">Name</label>
            <Input type="text" name='name' value={name} onChange={handleName} />

            <label htmlFor="image">Image</label>
            <Input type="text" name='image' value={image} onChange={handleImage} />

            <label htmlFor="calories">Calories</label>
            <Input type="number" name='calories' value={calories} onChange={handleCalories} />

            <label htmlFor="servings">Servings</label>
            <Input type="number" name='servings' value={servings} onChange={handleServings} />

            <button type="submit">Create food</button>


        </form>

    </div>
  )
}

export default AddFoodForm