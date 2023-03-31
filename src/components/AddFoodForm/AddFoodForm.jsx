import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ onFoodCreated }) {

  const [name, setNames] = useState('');
  const [image, setImages] = useState('');
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)


  const handleSubmit = (event) => {
    event.preventDefault();
    onFoodCreated(name, image, calories, servings);
    setNames('')
    setImages('')
    setCalories(0)
    setServings(0)
  }


  return (
    <form className='mb-5 p-3' onSubmit={handleSubmit} >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => { setNames(event.target.value) }} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(event) => { setImages(event.target.value) }} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(event) => { setCalories(event.target.value) }} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(event) => { setServings(event.target.value) }} />

      <button className='btn btn-primary mt-1' type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;