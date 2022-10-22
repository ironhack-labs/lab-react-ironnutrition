import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';





function AddFoodForm(props) {

    const [newFoodName, setFoodName] = useState('');
    const [newFoodImage, setNewFoodImage] = useState('');
    const [newFoodCalories, setNewFoodCalories] = useState(0);
    const [newFoodServings, setNewFoodServings] = useState(0);


    const updateFoodName = (event) => setFoodName(event.target.value);
    const updateNewFoodImage = (event) => setNewFoodImage(event.target.value);
    const updateNewFoodCalories = (event) => setNewFoodCalories(event.target.value);
    const updateNewFoodServings = (event) => setNewFoodServings(event.target.value);


    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const myNewFoodObject = {
          name: newFoodName,
          calories: newFoodCalories,
          image: newFoodImage,
          servings: newFoodServings
        };
    
        props.addNewFood(myNewFoodObject);

        setFoodName('');
        setNewFoodImage('');
        setNewFoodCalories(0);
        setNewFoodServings(0);


    
      }


    return (
        <div>
            <h2>Add a task</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                <label>Name:</label>
                <Input
                    type="text"
                    value={newFoodName}
                    onChange={updateFoodName}
                />
                </div>
                <div>
                <label>Image:</label>
                <Input
                    type="text"
                    value={newFoodImage}
                    onChange={updateNewFoodImage}
                />
                </div>
                <div>
                <label>Calories:</label>
                <Input
                    type="number"
                    value={newFoodCalories}
                    onChange={updateNewFoodCalories}
                />
                </div>
                <div>
                <label>Servings:</label>
                <Input
                    type="number"
                    value={newFoodServings}
                    onChange={updateNewFoodServings}
                />
                </div>
                <button>Add Task</button>
            </form>
        </div>
    )
}


export default AddFoodForm