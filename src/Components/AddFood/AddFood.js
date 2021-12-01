import React, { useState } from 'react'

function AddFood(props) {
  const [food, setFood] = useState({})
  const handleChange = (e) => {
    console.log("E: ", e)
    const { name, value } = e.currentTarget;
    setFood({ ...food, [name]: value })
  }
  const submitHandler = e => {
    e.preventDefault()
    props.onAddFood(food)
    props.closeMe(false)
  }
  return (
    <form className="addForm" onSubmit={submitHandler}>
      <label>Name    :    <input onChange={handleChange} name="name" type="text" /></label>
      <label>Image   :    <input onChange={handleChange} name="image" type="text" /></label>
      <label>Calories:    <input onChange={handleChange} name="calories" type="text" /></label>
      <button type="submit">submit</button>
    </form>
  )
}

export default AddFood

