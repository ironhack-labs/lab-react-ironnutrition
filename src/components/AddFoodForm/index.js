import React, {useState} from 'react'
import {Divider, Input, Button} from 'antd'

const AddFoodForm = (props) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState('')
  const [servings, setServings] = useState('')
  const {addFoodFn} = props

  const handleSubmit = (event) => {
    event.preventDefault()

    addFoodFn({name, image, calories, servings})

  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => setName(event.target.value)} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(event) => setImage(event.target.value)} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(event) => setCalories(event.target.value)} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(event) => setServings(event.target.value)} />

      <Button htmlType="submit">Create</Button>
    </form>
  )
}

export default AddFoodForm