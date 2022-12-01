import React, { useState } from "react";
import { Button, Input } from 'antd';
const AddFoodForm = (props) => {
    const {addFoodFn} = props;
    const [name , setName] = useState ('');
    const [image, setImage] = useState ('');
    const [calories, setCalories] = useState ('');
    const [serving, setServing] = useState ('');
    const handlesubmit = (event) => {
        event.preventDefault();
        addFoodFn ({name , image , calories , serving})
    }
    return(
        <form onSubmit={handlesubmit}>
            <h1>Add Food Entry</h1>
             
            <label>Name</label>
            <Input value={name} type="text" onChange={(event) => setName(event.target.value)} />

            <label>Image</label>
            <Input value={image} type="text" onChange={(event) => setImage(event.target.value)} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={(event) => setCalories(event.target.value)} />
            
            <label>Servings</label>
            <Input value={serving} type="number" onChange={(event) => setServing(event.target.value)} />

            <Button htmlType="submit" >Create</Button>
        </form>
    )
}

export default AddFoodForm