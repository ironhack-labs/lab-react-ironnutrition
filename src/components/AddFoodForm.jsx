import { Divider, Input } from 'antd';
import { useEffect, useState } from 'react';

function AddFoodForm({addFood}){

  const initialData = {
    name: "",
    image: "",
    calories: 0,
    servings: 0
  } //ponemos la data inicial para resetear el form
  
  const[formData, setFormData] = useState(initialData)

  const handleChange = (name, value) => { //mi objeto que alcene multiples valores
    setFormData(prevState => ({...prevState, [name]:value }))
  }

  //agregar la comida a la lista
  const sendFood = (e) => {
    e.preventDefault()
    addFood(formData)
    setFormData(initialData)
  }

  //unmounting
  useEffect(()=>{
    console.log("Dentro del FORM para food");
    //unmounting
    return ()=>{
      console.log("me voa morir");
    }
  }, [])

  
    return(
    <form onSubmit={sendFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input 
      value={formData.name} 
      type="text" 
      onChange={(event) => {handleChange("name", event.target.value)}} 
      />

      <label>Image</label>
      <Input 
      value={formData.image}
      type="text"
      onChange={(event) => {handleChange("image", event.target.value)}} 
      />

      <label>Calories</label>
      <Input 
      value={formData.calories}
      type="number"
      onChange={(event) => {handleChange("calories", event.target.value)}} 
      />

      <label>Servings</label>
      <Input 
      value={formData.servings}
      type="number"
      onChange={(event) => {handleChange("servings", event.target.value)}} 
      />

      <button type="submit">Create</button>
    </form>
    )
}

export default AddFoodForm;