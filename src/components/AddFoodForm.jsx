import React from 'react'
import { Input, Divider } from "antd"

export default function AddFoodForm({ onSubmit, onFormInputChange, form }) {

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={form.name} type="text" onChange={(e) => onFormInputChange(e)} id="name" />
      <label htmlFor="image">Image</label>
      <Input value={form.image} type="text" onChange={(e) => onFormInputChange(e)} id="image" />
      <label htmlFor="calories">Calories</label>
      <Input value={form.calories} type="number" onChange={(e) => onFormInputChange(e)} id="calories" />
      <label htmlFor="servings">Servings</label>
      <Input value={form.servings} type="number" onChange={(e) => onFormInputChange(e)} id="servings" />

      <button type="submit">Create</button>
    </form>
  )
}
