import React from 'react'
import { useState } from 'react';
import { Divider, Input } from 'antd';


function AddFoodForm({newForm}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState();
    const [servings, setServings] = useState();


    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
      };

      const handleImage = (e) => setImage(e.target.value);
      const handleCalories = (e) => setCalories(e.target.value);
      const handleServings = (e) => setServings(e.target.value);

    
      const handleSubmit = (e) => {
        e.preventDefault(); 

    let addForm = { name, image, calories, servings };
    console.log(addForm);

    newForm(addForm)

    setName('');
    setImage('');
    setCalories(6);
    setServings(6);
  };
  return (

 <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm


