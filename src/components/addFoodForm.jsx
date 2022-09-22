import { useState } from "react";
import { Divider, Input } from 'antd';


const AddFoodForm = ({foodList, setFoodList}) => {

    const initialFormState = {
        name: '',
        image: '',
        calories: '',
        servings:''
    };
    const [formState, setFormState] = useState(initialFormState)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const copyFoodList = [...foodList]
        const newFoodList = [...copyFoodList,formState]
        setFoodList(newFoodList)
        setFormState(initialFormState)
    }

    const handleOnChange = (e)=>{
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    
  return (
    <div className="addForm">
        <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={formState.name} name='name' type="text" onChange={handleOnChange} />

      <label>Image</label>
      <Input value={formState.image} name='image' type="text" onChange={handleOnChange} />

      <label>Calories</label>
      <Input value={formState.calories} name='calories' type="text" onChange={handleOnChange} />

      <label>Servings</label>
      <Input value={formState.serving} name='servings' type="text" onChange={handleOnChange} />

      <button type="submit">Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm