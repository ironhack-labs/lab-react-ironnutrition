// Your code here

import { useState } from "react";
import { Divider, Input, Button } from "antd";


function AddFoodForm (props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        props.fnAddFood({
            name: name,
            image: image,
            calories: calories, 
            servings: servings
        });
        setName('');
        setImage('');
        setCalories('');
        setServings('');


    }


    return (
        <form onSubmit={submitForm}>
                  <Divider>Add Food Entry</Divider>

            <Input type="text" name="name" value ={name} placeholder="name"
            onChange={(e) => { setName(e.target.value)}}/>
            <Input type="text" name="image" value ={image} placeholder="image"
            onChange={(e) => { setImage(e.target.value)}}/>
            <Input type="number" name="calories" value ={calories} placeholder="calories"
            onChange={(e) => { setCalories(e.target.value)}}/>
            <Input type="number" name="servings" value ={servings} placeholder="servings"
            onChange={(e) => { setServings(e.target.value)}}/>

            <button>Create</button>
        </form>

        


    )
}

export default AddFoodForm;
