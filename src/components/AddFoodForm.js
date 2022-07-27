import { Input, Button } from 'antd';
import { useState } from 'react';

// Iteration 2
function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFoodEntry = {name, image, calories, servings};
        props.callbackToAddFoodEntry(newFoodEntry);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label> Name
            <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
        </label>
        <label> Image
            <Input value={image} type="url" onChange={(e) => {setImage(e.target.value)}} />
        </label>
        <label> Calories
            <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />
        </label>
        <label> Servings
            <Input value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />
        </label>
        <button>Add this</button>
    </form>
    </>
  );
}

export default AddFoodForm;