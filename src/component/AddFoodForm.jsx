import React from 'react'
import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({createFood}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0)

      const handleName = (e) => {setName(e.target.value)};
      const handleImage = (e) => setImage(e.target.value);
      const handleCalories = (e) => setCalories(e.target.value);
      const handleServings = (e) => setServings(e.target.value);


    const createOnSubmit = (e) => {
        e.preventDefault();
    
        let newFood = {name, image, calories, servings}
    
        createFood(newFood);

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
      };


  return (
    <div>
    <form onSubmit={createOnSubmit}>

<Divider>Add Food Entry</Divider>

<label>Name</label>
<input value={name} type="text" onChange={handleName} />

<label>Image</label>
<input value={image} type="text" onChange={handleImage} />

<label>Calories</label>
<input value={calories} type="number" onChange={handleCalories} />

<label>Servings</label>
<input value={servings} type="number" onChange={handleServings} />


<button type="submit">Create</button>
</form>
    
    </div>
  )
}

export default AddFoodForm