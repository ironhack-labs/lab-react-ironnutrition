import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {

    const [ name, setName ] = useState("")
    const [ image, setImage ] = useState("")
    const [ calories, setCalories ] = useState("")
    const [ servings, setServings ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }


        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }


    return (
      <form>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={name} type="text" onChange={() => {}} />
  
        <label>Image</label>
        {/* render antd <Input /> type="text" here */}
  
        <label>Calories</label>
        {/* render antd <Input /> type="number" here */}
  
        <label>Servings</label>
        {/* render antd <Input /> type="number" here */}
  
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;