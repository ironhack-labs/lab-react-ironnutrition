import { Divider, Input,Button } from 'antd';
import { useState } from 'react';




function AddFoodForm(props){

const hadleSubmit=(e)=>{
  e.preventDefault()
  const newFood={name,image,calories,servings}
  console.log("que es newFood",newFood)
  
  props.addFood(newFood)
  console.log("que son mis props",props)

}

const [name,setName]=useState("")
const [image,setImage]=useState("")
const [calories,setCalories]=useState()
const [servings,setServings]=useState()

const hadleNameInput = e=> setName(e.target.value)
const hadleImageInput = e=> setImage(e.target.value)
const hadleCaloriesInput = e=> setCalories(e.target.value)
const hadleServingsInput = e=> setServings(e.target.value)

    return (
        <form onSubmit={hadleSubmit}>

          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input name='name' value={name} type="text" onChange={hadleNameInput} />
    
          <label>Image</label>
          <Input name='image' value={image} type="text" onChange={hadleImageInput} />
    
          <label>Calories</label>
          <Input name='calories' value={calories} type="number" onChange={hadleCaloriesInput} />
    
          <label>Servings</label>
          <Input name='servings' value={servings} type="number" onChange={hadleServingsInput} />
    
          <button type='submit' >Send</button>
        </form>
      );
    }

export default AddFoodForm;