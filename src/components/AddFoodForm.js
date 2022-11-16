import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({createFood}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(1);
    const [servings, setServings] = useState(1);

   
    const handleName= (e) => setName(e.target.value);    
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);

  

    const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, servings };
    console.log(newFood);


    createFood(newFood);

    
    setName('');
    setImage('');
    setCalories(1);
    setServings(1);
  };

  return (
    <div>
        
        <h3>Add New Food</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input name='name' type="text" onChange={{handleName}}/>
         

        <label htmlFor="image">Image</label>
        <Input name='image' type="text" onChange={{handleImage}}/>

        <label htmlFor="calories">Calories</label>
        <Input name='calories' type="number"  onChange={{handleCalories}} />

        <label htmlFor="servings">Servings</label>
        <Input name='servings' type="number" onChange={{handleServings}} />

        <button type='submit'>Create Food</button>
      </form>

    </div>
  )
}

export default AddFoodForm;