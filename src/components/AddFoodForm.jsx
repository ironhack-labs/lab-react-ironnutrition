import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props){
    const { foods, setFoods } = props

    const [foodName, setFoodName] = useState('')
    const [foodImage, setFoodImage] = useState('')
    const [foodCalories, setFoodCalories] = useState('')
    const [foodServings, setFoodServings] = useState('')

    const handleSubmit = (event) =>{
       event.preventDefault()
      
       let newFood = {
           name: `${foodName}`,
           image: `${foodImage}`,
           calories: `${foodCalories}`,
           servings: `${foodServings}`,
       }
       let newFoodsArray = [...foods, newFood]
       setFoods(newFoodsArray)
    }

    return(
        <form className='form'>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodName} type="text" onChange={(e) => {setFoodName(e.target.value)}} />

      <label>Image</label>
      <Input value={foodImage} type="text" onChange={(e) => {setFoodImage(e.target.value)}} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={undefined} type="text" onChange={(e) => {setFoodCalories(e.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={undefined} type="number" min="0"onChange={(e) => {setFoodServings(e.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit" onClick={handleSubmit}>Create</button>
    </form>
    )
}

export default AddFoodForm