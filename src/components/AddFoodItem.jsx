import React, { useState } from 'react';
import { Input } from 'antd';

function AddFoodItem(props) {
  const { FunctionAddFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //Handler functions

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    FunctionAddFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    alert(`created: ${name}`);
  };

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.checked);

  return (
    <div className='container'>
      <h1>Add Food</h1>
      <form onSubmit={handleSubmit}>

        <div className='row'>
          <label className='col-25' htmlFor="name">name</label>
          <Input className='col-75' type="text" name="name" value={name} onChange={handleName} />
        </div>

        <div className='row'>
          <label className='col-25' htmlFor="image">image</label>
          <Input className='col-75' type="text" name="image" value={image} onChange={handleImage} />
        </div>

        <div className='row'>
          <label className='col-25' htmlFor="calories">calories</label>
          <Input className='col-75'
            type="number"
            name="calories"
            value={calories}
            onChange={handleCalories}
          />
        </div>

        <div className='row'>
          <label className='col-25' htmlFor="servings">servings</label>
          <Input className='col-75'
            type="number"
            name="servings"
            checked={servings}
            onChange={handleServings}
          />
        </div>

        <div className='row'>
        <br/>
        <button className='ant-btn ant-btn-primary' type="submit">Create Food</button>
        </div>
      </form>
    </div>
  );
}

export default AddFoodItem;