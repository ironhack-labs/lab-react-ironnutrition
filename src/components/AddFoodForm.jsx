import { Button, Divider, Input } from 'antd'
import 'antd/dist/antd.css'
import { useState } from 'react'
import styled from 'styled-components'

const AddFoodForm = ({ addFood }) => {
  const [newItem, setNewItem] = useState({ name: '', image: '', calories: 0, servings: 0 })
  const handleSubmit = (ev) => {
    ev.preventDefault()
    addFood(newItem)
    setNewItem({ name: '', image: '', calories: 0, servings: 0 })
  }
  return (
    <Form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        required
        value={newItem.name}
        type="text"
        onChange={(ev) => {
          setNewItem({ ...newItem, name: ev.target.value })
        }}
      />

      <label>Image</label>
      <Input
        value={newItem.image}
        type="text"
        onChange={(ev) => {
          setNewItem({ ...newItem, image: ev.target.value })
        }}
      />

      <label>Calories</label>
      <Input
        required
        value={newItem.calories}
        type="number"
        onChange={(ev) => {
          setNewItem({ ...newItem, calories: ev.target.value })
        }}
      />

      <label>Servings</label>
      <Input
        required
        value={newItem.servings}
        type="number"
        onChange={(ev) => {
          setNewItem({ ...newItem, servings: ev.target.value })
        }}
      />
      <Button type="primary" onClick={handleSubmit}>
        Create
      </Button>
    </Form>
  )
}

export default AddFoodForm

const Form = styled.form`
  margin: 0 auto;
  max-width: 40%;
  input,
  button {
    margin-bottom: 1rem;
  }
`
