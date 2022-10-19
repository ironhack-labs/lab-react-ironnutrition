import { Divider, Input } from 'antd';
import{useState} from 'react'

// Iteration 4
function AddFoodForm({callbackToCreate}) {
   
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const createFood = (e)=> {
        e.preventDefault()
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings:servings,
        }
        callbackToCreate(newFood)
        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

  return (
    <form onSubmit={createFood}>
    

      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
      <Input value={image} type="image" onChange={(e)=> {setImage(e.target.value)}}/>

      <label>Calories</label>
      <Input 
      min={1}
      max={500}
      value={calories} 
      type="number" 
      onChange={(e)=> {setCalories(e.target.value)}}/>


      <label>Servings</label>
     <Input 
     min={1}
     max={500}
     value={servings} 
     type="number" 
     onChange={(e)=> {setServings(e.target.value)}}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
