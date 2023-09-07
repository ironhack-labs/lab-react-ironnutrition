import React, { useState } from 'react'
import { Input } from 'antd'

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings }
    props.addNewFood(newFood)

    setName('')
    setImage('')
    setCalories(1)
    setServings(1)
  }

  return (
    <div className="AddMovie">
      <h3>Add Food Entry</h3>
      <form  onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='form-label'>Name:</label>
          <Input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div class="mb-3">
          <label className='form-label'>Image:</label>
          <Input value={image} onChange={(e) => { setImage(e.target.value) }} type="text" />
        </div>
        <div className="mb-3">
          <label className='form-label'>Calories:</label>
          <Input value={calories} onChange={(e) => { setCalories(e.target.value) }} type="number" />
        </div>
        <div className="mb-3">
          <label className='form-label'>Servings:</label>
          <Input value={servings} onChange={(e) => { setServings(e.target.value) }} type="number" />
        </div>
        <button className='btn btn-primary'>Create</button>
      </form>
    </div>
  )
}

export default AddFoodForm