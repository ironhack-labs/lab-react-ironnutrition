import { Divider, Input } from 'antd';
import { useState } from 'react'
import "../App.css"
function AddFoodForm(props) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(1)
  const [servings, setServings] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings }
    props.addFood(newFood)
    setName('')
    setImage('')
    setCalories(1)
    setServings(1)
  }
  return (
    <div className='flex'>
      <form className="input-form" onSubmit={handleSubmit} >
        <Divider>Add Food Entry</Divider>

        <label >Name</label>
        <Input required value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
        <label>Image</label>
        <Input required value={image} type="text" placeholder="http://example.com/food-image.jpg" onChange={(e) => { setImage(e.target.value) }} />


        <label>Calories</label>
        <Input required value={calories} type="number" onChange={(e) => { setCalories(e.target.value) }} />


        <label>Servings</label>
        <Input required value={servings} type="number" onChange={(e) => { setServings(e.target.value) }} />


        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;