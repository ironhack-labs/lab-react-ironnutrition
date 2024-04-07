import { useState } from 'react';
import './AddFoodForm.css';
import { Divider, Input, Button } from "antd";

function AddFoodForm({ onAddFood }) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    console.log('Entre')
    event.preventDefault();
    onAddFood(formData)

    setFormData({
      name: '',
      image: '',
      calories: '',
      servings: ''
    })
  }

  return (
    <section className='d-flex justify-content-center align-items-center'>
      <form className='w-50' onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <div className='m-2'>
          <label>Name</label>
          <Input type='text' name='name' value={formData.name} onChange={handleChange}/>
        </div>

        <div className='m-2'>
          <label>Image</label>
          <Input type='text' name='image' value={formData.image} onChange={handleChange}/>
        </div>

        <div className='m-2'>
          <label>Calories</label>
          <Input type='number' name='calories' value={formData.calories} onChange={handleChange}/>
        </div>

        <div className='m-2'>
          <label>Servings</label>
          <Input type='number' name='servings' value={formData.servings} onChange={handleChange}/>
        </div>

        <Button type='primary' htmlType='submit'>Submit</Button>
      </form>
    </section>
  );
}

export default AddFoodForm;