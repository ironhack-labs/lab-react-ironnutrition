import React, { useState } from 'react'
import { Divider, Input } from 'antd'

const AddFoodForm = (props) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const nameUpdate = (e) => {
        setName(e.target.value)
    }
    const imageUpdate = (e) => {
        setImage(e.target.value)
    }
    const caloriesUpdate = (e) => {
        setCalories(e.target.value)
    }
    const servingsUpdate = (e) => {
        setServings(e.target.value)
    }
    const sendData = (e) => {
        e.preventDefault()//prevenomo que se recarge la pag.
        props.foodEntry({name, image, calories, servings})
    }


  return (
    <form onSubmit={sendData}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={nameUpdate} />

      <label>Image</label>
      <Input value={image} type="text" onChange={imageUpdate} />
        

      <label>Calories</label>
      <Input value={calories} type="text" onChange={caloriesUpdate} />
        

      <label>Servings</label>
      <Input value={servings} type="text" onChange={servingsUpdate} />    


      <button type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm