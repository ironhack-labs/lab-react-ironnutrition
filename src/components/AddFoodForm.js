import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from 'react'


function AddFoodForm(props){

    const [newFoodName, setNewFoodName] = useState('');
    const [newFoodImage, setNewFoodImage] = useState('');
    const [newFoodCalories, setNewFoodCalories] = useState('');
    const [newFoodServings, setNewFoodServings] = useState('');

    const updateFoodName = (event) => {setNewFoodName(event.target.value)}
    const updateFoodImage = (event) => {setNewFoodImage(event.target.value)}
    const updateFoodCalories = (event) => {setNewFoodCalories(event.target.value)}
    const updateFoodServings = (event) => {setNewFoodServings(event.target.value)}

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newFoodObject = {
            name: newFoodName,
            calories: newFoodCalories,
            image: newFoodImage,
            servings: newFoodServings
        }

        props.addNewFood(newFoodObject);

        setNewFoodName('');
        setNewFoodImage('');
        setNewFoodCalories('');
        setNewFoodServings('');

    }

    return(
        <div id='add-food-entry'>
        <form>
            <label>Name</label>
            <Input 
                type="text"
                value={newFoodName}
                onChange={updateFoodName}
            />
            <label>Image</label>
            <Input 
                type="text"
                value={newFoodImage}
                onChange={updateFoodImage}
            />
            <label>Calories</label>
            <Input 
                type="text"
                value={newFoodCalories}
                onChange={updateFoodCalories}
            />
            <label>Servings</label>
            <Input 
                type="text"
                value={newFoodServings}
                onChange={updateFoodServings}
            />
            <Button type="submit" onClick={handleFormSubmit}>Create</Button>
        </form>
        </div>
    )
}

export default AddFoodForm;