import { Divider, Input } from "antd";
import { useState } from 'react';

function AddFoodForm(props) {
    const[name,setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    
    const handleImageInput = (e) => setImage(e.target.value)
    const handleCaloriesInput = (e) => setCalories(e.target.value)
    const handleServingsInput = (e) => setServings(e.target.value)
    const handleNameInput = (e) => setName(e.target.value)
  
    const handleSubmit = (e) => {
        e.preventDefault()
  
        const newFood = { name,image, calories, servings }
        console.log(newFood)
        props.AddFoodForm(newFood)

        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* style={{ width: '400px', textAlign: 'center', justifyContent:'center' }} */}
      <p>Add Food </p>

      <label>Name</label>
            {/* <Input value={name} type="text" onChange={() => {}} /> */}
            <Input type='text' value={name}  onChange={handleNameInput} />

      <label>Image</label>
            {/* render antd <Input /> type="text" here */}
            <Input type="text" value={image} onChange={handleImageInput} />

      <label>Calories</label>
            {/* render antd <Input /> type="number" here */}
            <Input type="text" value={calories} onChange={handleCaloriesInput} />

      <label>Servings</label>
            {/* render antd <Input /> type="number" here */}
            <Input type="text" value={servings} onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
    )
}

export default AddFoodForm