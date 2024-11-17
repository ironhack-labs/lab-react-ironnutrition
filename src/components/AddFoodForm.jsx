import { useState } from 'react'
import { Divider, Input, Button } from 'antd'

const AddForm = ({ onAddFood }) => {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setNewFood({ ...newFood, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (
      !newFood.name ||
      !newFood.image ||
      !newFood.calories ||
      !newFood.servings
    ) {
      alert('Please fill in all fields')
      return
    }
    onAddFood({ ...newFood, id: Date.now().toString() })
    setNewFood({ name: '', image: '', calories: '', servings: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <Input
        type='text'
        name='name'
        placeholder='Food Name'
        value={newFood.name}
        onChange={handleInputChange}
      />
      <Input
        type='text'
        name='image'
        placeholder='Image URL'
        value={newFood.image}
        onChange={handleInputChange}
      />
      <Input
        type='number'
        name='calories'
        placeholder='Calories'
        value={newFood.calories}
        onChange={handleInputChange}
      />
      <Input
        type='number'
        name='servings'
        placeholder='Servings'
        value={newFood.servings}
        onChange={handleInputChange}
      />
      <Button type='submit'>Add Food</Button>
    </form>
  )
}

export default AddForm
